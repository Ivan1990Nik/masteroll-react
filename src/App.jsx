// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext.jsx';
import Menu from './components/menu/Menu.jsx';
import CartPage from './pages/CartPage.jsx';
import Header from './components/header/header.jsx';

function App() {
    return (
        <CartProvider >
            <Router basename="/masteroll-react">  {/* Добавлено basename для subpath */}
                <Header />
                <Routes>
                    <Route path="/" element={<Menu />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;
