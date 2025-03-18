import React, { useState } from "react";

const Menu = ({ items }) => {
  const [cart, setCart] = useState([]);

  // Function to add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
              <button className="add-btn" onClick={() => addToCart(item)}>
                ➕ Add to Cart
              </button>
            </div>
          </article>
        );
      })}

      {/* Cart Section */}
      <div className="cart">
        <h2>🛒 Cart</h2>
        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <span>{item.title} - ${item.price}</span>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    ❌ Remove
                  </button>
                </li>
              ))}
            </ul>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </>
        ) : (
          <p>Cart is empty</p>
        )}
      </div>

    
    </div>
  );
};

export default Menu;
