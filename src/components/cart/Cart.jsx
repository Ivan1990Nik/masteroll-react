// src/components/Cart.jsx
import React, { useState } from 'react';
import "./cart.css";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { UseCart } from '../../contexts/CartContext';

function Cart() {

    const [agree, setAgree] = useState(false)

    const { cart, removeFromCart, clearCart, updateQuantity } = UseCart();
    const [showOrderForm, setShowOrderForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        comments: ''
    });
    const [message, setMessage] = useState('');

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleOrderSubmit = (e) => {
        e.preventDefault();

        const orderDetails = cart.map(item => {
            let details = `${item.name} x ${item.quantity} = ${item.price * item.quantity} руб`;


            return details;
        }).join('\n');

        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            comments: formData.comments,
            orderDetails: orderDetails,
            total: `${totalPrice} руб`
        };

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setMessage('Заказ отправлен! Мы свяжемся с вами скоро.');
                clearCart();
                setShowOrderForm(false);
                setFormData({ name: '', email: '', phone: '', comments: '' });
            })
            .catch((error) => {
                console.error('Ошибка отправки:', error);
                setMessage('Ошибка отправки заказа. Попробуйте ещё раз.');
            });
    };

    return (
        <div className="cart">
            <h2>Корзина</h2>
            {cart.length === 0 ? (
                <Link to="/" className="back-to-menu-btn">Вернуться в меню</Link>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map(item => (
                            <div key={`${item.id}-${item.size}`} className="cart-item"> {/* УНИКАЛЬНЫЙ КЛЮЧ */}
                                <img src={item.img} alt={item.name} width="50" height="50" />
                                <div className="cart-item-details">
                                    <span className="cart-item-name">{item.name}</span>
                                    {item.size && (
                                        <span className="cart-item-size">
                                            Размер: {item.weight}
                                        </span>
                                    )}
                                    {!item.size && (
                                        <span className="cart-item-size">
                                            Вес: {item.weight} грамм
                                        </span>
                                    )}



                                    <div className="cart-item-quantity">
                                        <button className='cart-item-icriment-uantity' onClick={() => updateQuantity(item.id, -1)}>-</button>

                                        <span >{item.quantity}</span>

                                        <button className='cart-item-icriment-uantity' onClick={() => updateQuantity(item.id, 1)}>+</button>

                                        <div className="cart-item-price">
                                            = {item.price * item.quantity} руб
                                        </div>
                                    </div>



                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id, item.size)}>
                                    Удалить
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                        <p>Итого: {totalPrice} руб</p>
                    </div>
                    <div className="cart-buttons">
                        <button className="order-btn" onClick={() => setShowOrderForm(true)}>Заказать</button>
                        <Link to="/" className="back-to-menu-btn">Вернуться в меню</Link>
                    </div>
                </>
            )}
            {showOrderForm && (
                <div className="order-form-overlay">
                    <form className="order-form" onSubmit={handleOrderSubmit}>
                        <h3>Оформить заказ</h3>
                        <input type="text" name="name" placeholder="Ваше имя" value={formData.name} onChange={handleInputChange} required />
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                        <input type="tel" name="phone" placeholder="Телефон" value={formData.phone} onChange={handleInputChange} required />
                        <textarea name="comments" placeholder="Комментарии (опционально)" value={formData.comments} onChange={handleInputChange}></textarea>
                        <div className="switch-wrapper">
                            <span className="switch-text">
                                Я согласен на обработку персональных данных
                            </span>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    checked={agree}
                                    onChange={(e) => setAgree(e.target.checked)}
                                />
                                <span className="slider"></span>
                            </label>
                        </div>
                        <button type="submit" className="submit-order-btn" disabled={!agree} >Отправить заказ</button>

                        <button type="button" onClick={() => setShowOrderForm(false)}>Отмена</button>
                    </form>
                </div>
            )}
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default Cart;
