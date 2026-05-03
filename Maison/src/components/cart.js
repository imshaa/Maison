import React, { useState } from "react";

const SHIPPING = 250;
const TAX_RATE = 0.05;
 
const initialItems = [
  { id: 1, name: "Air Foam Runner", category: "Footwear", price: 11499, qty: 1, image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { id: 2, name: "Linen Oversized Shirt", category: "Clothing", price: 3800, qty: 2, image: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { id: 3, name: "Minimalist Dial Watch", category: "Accessories", price: 32000, qty: 1, image: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=200" },
];
 
function fmt(n) {
  return "PKR " + n.toLocaleString("en-PK");
}
 
export default function Cart() {
  const [items, setItems] = useState(initialItems);
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoMsg, setPromoMsg] = useState("");
 
  const changeQty = (id, delta) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };
 
  const removeItem = (id) => setItems(prev => prev.filter(item => item.id !== id));
 
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = Math.round(subtotal * TAX_RATE);
  const shipping = items.length > 0 ? SHIPPING : 0;
  const total = subtotal + tax + shipping - discount;
 
  const applyPromo = () => {
    if (promo.trim().toUpperCase() === "SAVE10") {
      const d = Math.round(subtotal * 0.10);
      setDiscount(d);
      setPromoMsg(`✅ 10% off applied — saving ${fmt(d)}`);
    } else {
      setDiscount(0);
      setPromoMsg("❌ Invalid promo code");
    }
  };
 
  return (
    <>

      <div className="cart-page">
        <div className="container">
          <h2 className="cart-page-title">Your <span>Cart</span></h2>
          <p className="cart-count-tag">{items.length} item{items.length !== 1 ? "s" : ""} in your cart</p>
 
          <div className="row g-4">
            {/* Items */}
            <div className="col-lg-7">
              {items.length === 0 ? (
                <div className="cart-empty">
                  <div className="cart-empty-icon">🛒</div>
                  <p className="cart-empty-text">Your cart is empty</p>
                  <p className="cart-empty-sub">Add some products to get started</p>
                </div>
              ) : (
                items.map(item => (
                  <div className="cart-item" key={item.id}>
                    <img className="cart-item-img" src={item.image} alt={item.name} />
                    <div className="cart-item-info">
                      <p className="cart-item-cat">{item.category}</p>
                      <h4 className="cart-item-name">{item.name}</h4>
                      <p className="cart-item-unit">{fmt(item.price)} / unit</p>
                    </div>
                    <div className="cart-qty-row">
                      <button className="cart-qty-btn" onClick={() => changeQty(item.id, -1)}>−</button>
                      <span className="cart-qty-num">{item.qty}</span>
                      <button className="cart-qty-btn" onClick={() => changeQty(item.id, +1)}>+</button>
                    </div>
                    <div className="cart-item-subtotal">{fmt(item.price * item.qty)}</div>
                    <button className="cart-remove-btn" onClick={() => removeItem(item.id)} aria-label="Remove">✕</button>
                  </div>
                ))
              )}
            </div>
 
            {/* Summary */}
            <div className="col-lg-5">
              <div className="cart-summary">
                <p className="cart-summary-title">Order Summary</p>
 
                <div className="cart-summary-row">
                  <span className="cart-summary-label">Subtotal ({items.length} items)</span>
                  <span className="cart-summary-value">{fmt(subtotal)}</span>
                </div>
                <div className="cart-summary-row">
                  <span className="cart-summary-label">Sales Tax (5%)</span>
                  <span className="cart-summary-value">{fmt(tax)}</span>
                </div>
                <div className="cart-summary-row">
                  <span className="cart-summary-label">Shipping</span>
                  <span className="cart-summary-value">{items.length > 0 ? fmt(SHIPPING) : "—"}</span>
                </div>
                {discount > 0 && (
                  <div className="cart-summary-row">
                    <span className="cart-summary-label">Promo Discount</span>
                    <span style={{ color: "#2a9d8f", fontWeight: 600, fontSize: 13.5 }}>− {fmt(discount)}</span>
                  </div>
                )}
 
                <div className="cart-summary-divider" />
                <div className="cart-summary-row">
                  <span className="cart-summary-total-label">Total</span>
                  <span className="cart-summary-total-value">{fmt(total)}</span>
                </div>
 
                {/* Promo */}
                <div className="cart-promo-row">
                  <input
                    className="cart-promo-input"
                    placeholder='Try "SAVE10"'
                    value={promo}
                    onChange={e => { setPromo(e.target.value); setPromoMsg(""); }}
                  />
                  <button className="cart-promo-btn" onClick={applyPromo}>Apply</button>
                </div>
                {promoMsg && (
                  <p style={{ fontSize: 12, color: promoMsg.startsWith("✅") ? "#2a9d8f" : "#e63946", marginBottom: 12 }}>
                    {promoMsg}
                  </p>
                )}
 
                <button className="cart-checkout-btn" disabled={items.length === 0}>
                  Proceed to Checkout →
                </button>
                <p className="cart-secure-note">🔒 Secure & encrypted checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}