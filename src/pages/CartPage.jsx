// src/pages/CartPage.jsx
import Cart from '../components/cart/Cart.jsx';
import { UseCart } from '../contexts/CartContext.jsx';

function CartPage() {
    const { cart, handleOrder } = UseCart();

    return (
        <div>
          
            <Cart cart={cart} onOrder={handleOrder} />
        </div>
    );
}

export default CartPage;
