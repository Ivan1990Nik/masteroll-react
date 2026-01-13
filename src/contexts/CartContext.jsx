// src/contexts/CartContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const UseCart = () => useContext(CartContext); // Оставляю как есть (но обычно пишут useCart)

export const CartProvider = ({ children }) => {
    // Инициализируем из localStorage
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Сохраняем в localStorage при изменении cart
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        setCart(prev => {
            // Ищем по id И size (чтобы разные размеры были отдельными позициями)
            const existing = prev.find(cartItem => cartItem.id === item.id );
            if (existing) {
                // Увеличиваем количество для существующего (того же id и size)
                return prev.map(cartItem =>
                    cartItem.id === item.id 
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
            } else {
                // Добавляем новую позицию (если id + size уникальна)
                return [...prev, item];
            }
        });
    };

    // Обновлённая функция: удаление товара по id И size (удаляет только конкретную позицию)
    const removeFromCart = (id, ) => {
        setCart(prev => prev.filter(item => !(item.id === id )));
    };
    const updateQuantity = (id, delta) => {
        setCart(prev =>
            prev.map(item => {
                    if (item.id === id ) {
                        const newQuantity = item.quantity + delta;

                        // если стало 0 или меньше — удаляем товар
                        if (newQuantity < 1) return item;

                        return { ...item, quantity: newQuantity };
                    }
                    return item;
                })
                
        );
    };


    // Новая функция: очистка корзины (для использования после отправки заказа)
    const clearCart = () => {
        setCart([]);
    };

    // Изменённый handleOrder: теперь просто логирует данные (без очистки — это сделает clearCart после EmailJS)
    const handleOrder = () => {
        const orderData = {
            items: cart,
            totalPrice: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
            timestamp: new Date().toISOString(),
        };
        console.log('Данные заказа:', orderData);
        // Убрал setCart([]) и alert — теперь это в Cart.jsx после EmailJS
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                handleOrder
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
