// src/components/menu/Menu.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импорт для навигации
import { UseCart } from '../../contexts/CartContext.jsx'; // Импорт контекста
import { pizzas, rolls, sets, businessLunch } from '../../data/menuData'; // ДОБАВИЛ businessLunch
import "./menu.css";
import Carousel from '../carousel/Carousel.jsx';

function Menu() {
    const { addToCart } = UseCart(); // Получаем addToCart из контекста
    const navigate = useNavigate(); // Хук для навигации
    const [quantities, setQuantities] = useState({
        // Инициализируем quantities для всех роллов, пицц, сетов И бизнес-ланчей
        ...rolls.reduce((acc, roll) => ({ ...acc, [roll.id]: 1 }), {}),
        ...pizzas.reduce((acc, pizza) => ({ ...acc, [pizza.id]: 1 }), {}),
        ...sets.reduce((acc, set) => ({ ...acc, [set.id]: 1 }), {}),
        ...businessLunch.reduce((acc, lunch) => ({ ...acc, [lunch.id]: 1 }), {}), // ДОБАВИЛ для бизнес-ланчей
    });
    // State для выбранного размера пицц
    const [selectedSizes, setSelectedSizes] = useState(
        pizzas.reduce((acc, pizza) => ({ ...acc, [pizza.id]: 'medium' }), {})
    );
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Функция для проверки доступности бизнес-ланчей (с 8:00 до 15:00 локального времени)
    const isBusinessLunchAvailable = () => {
        const now = new Date();
        const hours = now.getHours();
        return hours >= 11 && hours < 15; // Интервал 8:00–15:00
    };

    const updateQuantity = (id, delta) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max(1, prev[id] + delta)
        }));
    };

    // Функция для изменения размера пиццы
    const updateSize = (id, size) => {
        setSelectedSizes(prev => ({
            ...prev,
            [id]: size
        }));
    };

    const handleAddToCart = (item) => {
        let cartItem;
        if (item.sizes) {
            // Для пицц: берём цену и вес из выбранного размера
            const selectedSize = selectedSizes[item.id] || 'medium';
            cartItem = {
                id: item.id,
                name: item.name,
                price: item.sizes[selectedSize].price,
                weight: item.sizes[selectedSize].weight,
                quantity: quantities[item.id],
                img: item.img,
                size: selectedSize,
            };
        } else {
            // Для роллов, сетов и бизнес-ланчей: как было
            cartItem = {
                id: item.id,
                name: item.name,
                price: item.price,
                weight: item.weight,
                quantity: quantities[item.id],
                img: item.img,
            };
        }
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
                                        <div>{roll.weight}</div>
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
            
            {/* Заголовок для пицц */}
            <h2 className="main_header">П И Ц Ц А</h2>
            <div className="items">
                {pizzas.map(pizza => {
                    const selectedSize = selectedSizes[pizza.id] || 'medium';
                    const currentSizeData = pizza.sizes[selectedSize];
                    
                    return (
                        <div key={pizza.id} className="item main__items">
                            <div className="main__img">
                                <img src={pizza.img} alt={pizza.name} />
                            </div>
                            <div>
                                <div>
                                    <h3 className="main__header">{pizza.name}</h3>
                                    <p className="main__title">{pizza.description}</p>
                                </div>
                                
                                {/* Выбор размера для пиццы (используем классы из CSS) */}
                                <div className="product__size">
                                    <button 
                                        className={`product__size-element ${selectedSize === 'small' ? 'active' : ''}`} 
                                        onClick={() => updateSize(pizza.id, 'small')}
                                    >
                                        {pizza.sizes.small.weight}
                                    </button>
                                    <button 
                                        className={`product__size-element ${selectedSize === 'medium' ? 'active' : ''}`} 
                                        onClick={() => updateSize(pizza.id, 'medium')}
                                    >
                                      {pizza.sizes.medium.weight}
                                    </button>
                                </div>
                                
                                <div className="menu__quantities">
                                    <button className='menu__btn--quantities' onClick={() => updateQuantity(pizza.id, -1)}><span>-</span></button>
                                    <span>{quantities[pizza.id]}</span>
                                    <button className='menu__btn--quantities' onClick={() => updateQuantity(pizza.id, 1)}>+</button>
                                </div>
                                
                                <div className="main__price-list">
                                    <div className="main__price-item">
                                        <div className="main__quantity">
                                            <div>{currentSizeData.weight}</div>
                                        </div>
                                        <p className="main__price">{currentSizeData.price} руб</p>
                                    </div>
                                    <div className="main__price-icon">
                                        <button
                                            className="main__button"
                                            onClick={() => handleAddToCart(pizza)} 
                                        >
                                            в корзину
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            {/* Заголовок для сетов (если есть данные) */}
            <h2 className="main_header">С Е Т Ы</h2>
            <div className="items">
                {sets.map(set => (
                    <div key={set.id} className="item main__items">
                        {/* Аналогично роллам — адаптируй под данные sets */}
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

            {/* НОВАЯ СЕКЦИЯ: Бизнес-ланчи - всегда отображаются, текст в кнопке меняется, кнопка disabled и серая вне времени */}
            <h2 className="main_header">Б И З Н Е С - Л А Н Ч И</h2>
            <div className="items">
                {businessLunch.map(lunch => (
                    <div key={lunch.id} className="item main__items">
                        <div className="main__img">
                            <img src={lunch.img} alt={lunch.name} />
                        </div>
                        <div>
                            <div>
                                <h3 className="main__header">{lunch.name}</h3>
                                <p className="main__title">{lunch.description}</p>
                            </div>
                            
                            <div className="menu__quantities">
                                <button className='menu__btn--quantities' onClick={() => updateQuantity(lunch.id, -1)}><span>-</span></button>
                                <span>{quantities[lunch.id]}</span>
                                <button className='menu__btn--quantities' onClick={() => updateQuantity(lunch.id, 1)}>+</button>
                            </div>
                            <div className="main__price-list">
                                <div className="main__price-item">
                                    <div className="main__quantity">
                                        <div>{lunch.weight}</div>
                                    </div>
                                    <p className="main__price">{lunch.price} руб</p>
                                </div>
                                <div className="main__price-icon">
                                    <button
                                        className="main__button"
                                        onClick={() => handleAddToCart(lunch)}
                                        disabled={!isBusinessLunchAvailable()}
                                    >
                                        {isBusinessLunchAvailable() ? "в корзину" : "Доступно только с 11:00 до 15:00"}
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
