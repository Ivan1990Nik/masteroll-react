// src/components/menu/Menu.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импорт для навигации
import { UseCart } from '../../contexts/CartContext.jsx'; // Импорт контекста
import { rolls, sets,} from '../../data/menuData'; // ДОБАВИЛ businessLunch
import "./menu.css";
import Carousel from '../carousel/Carousel.jsx';

function Menu() {
    const { addToCart } = UseCart(); // Получаем addToCart из контекста
    const navigate = useNavigate(); // Хук для навигации
    const [quantities, setQuantities] = useState({
        // Инициализируем quantities для всех роллов, пицц, сетов 
        ...rolls.reduce((acc, roll) => ({ ...acc, [roll.id]: 1 }), {}),
        ...sets.reduce((acc, set) => ({ ...acc, [set.id]: 1 }), {}),
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

  

    const updateQuantity = (id, delta) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max(1, prev[id] + delta)
        }));
    };


    const handleAddToCart = (item) => {
        let cartItem;

        // Для роллов, сетов как было
        cartItem = {
            id: item.id,
            name: item.name,
            price: item.price,
            weight: item.weight,
            quantity: quantities[item.id],
            img: item.img,
        };

        addToCart(cartItem);
        setIsModalOpen(true);
    };

    const continueShopping = () => {
        setIsModalOpen(false);
    };

    const goToCart = () => {
        setIsModalOpen(false);
        navigate('/cart');
    };

    return (
        <div className="container">
            <Carousel />
            <h2 className="main_header">Р О Л Л Ы</h2>
            <div className="items">
                {rolls.map(roll => (
                    <div key={roll.id} className="item main__items">
                        <div className="main__img">
                            <img src={roll.img} alt={roll.name} />
                        </div>
                        <div>
                            <div>
                                <h3 className="main__header">{roll.name}</h3>
                                <p className="main__title">{roll.description}</p>
                            </div>
                            <div className="menu__quantities">
                                <button className='menu__btn--quantities' onClick={() => updateQuantity(roll.id, -1)}><span>-</span></button>
                                <span>{quantities[roll.id]}</span>
                                <button className='menu__btn--quantities' onClick={() => updateQuantity(roll.id, 1)}>+</button>
                            </div>
                            <div className="main__price-list">
                                <div className="main__price-item">
                                    <div className="main__quantity">
                                        <div>{roll.weight}грамм  {roll.pieces}шт</div>
                                    </div>
                                    <p className="main__price">{roll.price} руб</p>
                                </div>
                                <div className="main__price-icon">
                                    <button
                                        className="main__button"
                                        onClick={() => handleAddToCart(roll)}
                                    >
                                        в корзину
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Заголовок для сетов (если есть данные) */}
            <h2 className="main_header">С Е Т Ы</h2>
            <div className="items">
                {sets.map(set => (
                    <div key={set.id} className="item main__items">
                        <div className="main__img">
                            <img src={set.img} alt={set.name} />
                        </div>
                        <div>
                            <div>
                                <h3 className="main__header">{set.name}</h3>
                                <p className="main__title">{set.description}</p>
                            </div>

                            <div className="menu__quantities">
                                <button className='menu__btn--quantities' onClick={() => updateQuantity(set.id, -1)}><span>-</span></button>
                                <span>{quantities[set.id]}</span>
                                <button className='menu__btn--quantities' onClick={() => updateQuantity(set.id, 1)}>+</button>
                            </div>
                            <div className="main__price-list">
                                <div className="main__price-item">
                                    <div className="main__quantity">
                                        <div>{set.weight}</div>
                                    </div>
                                    <p className="main__price">{set.price} руб</p>
                                </div>
                                <div className="main__price-icon">
                                    <button
                                        className="main__button"
                                        onClick={() => handleAddToCart(set)}
                                    >
                                        в корзину
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Модальное окно */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Товар добавлен в корзину!</h3>
                        <p>Что вы хотите сделать дальше?</p>
                        <div className="modal-buttons">
                            <button className="modal-btn continue" onClick={continueShopping}>Продолжать покупку</button>
                            <button className="modal-btn goto-cart" onClick={goToCart}>Перейти в корзину</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Menu;
