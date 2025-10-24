import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css'; // Optional: add custom styles for header

const Header = () => {
  // Get total items in the cart from Redux store
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">
          <Link to="/">Green Haven</Link>
        </h1>
      </div>

      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart 🛒
              {totalQuantity > 0 && (
                <span className="cart-count">{totalQuantity}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
