
import React from "react";
import { Component } from "react";

const productData = [
  {
    id: 1,
    name: "Nike Air Max",
    category: "Footwear",
    price: "PKR 13,999",
    oldPrice: "PKR 17,500",
    badge: "Hot",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    name: "Classic White Tee",
    category: "Clothing",
    price: "PKR 2,499",
    oldPrice: "PKR 3,200",
    badge: "Sale",
    image: "https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: "Luxury Watch",
    category: "Accessories",
    price: "PKR 28,000",
    oldPrice: null,
    badge: "New",
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    name: "Leather Handbag",
    category: "Bags",
    price: "PKR 18,500",
    oldPrice: "PKR 24,000",
    badge: "Sale",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    name: "Aviator Sunglasses",
    category: "Eyewear",
    price: "PKR 4,200",
    oldPrice: null,
    badge: "New",
    image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 6,
    name: "Running Sneakers",
    category: "Footwear",
    price: "PKR 9,800",
    oldPrice: "PKR 12,000",
    badge: "Hot",
    image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 7,
    name: "Denim Jacket",
    category: "Clothing",
    price: "PKR 7,499",
    oldPrice: null,
    badge: "New",
    image: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 8,
    name: "Crossbody Bag",
    category: "Bags",
    price: "PKR 11,200",
    oldPrice: "PKR 15,000",
    badge: "Sale",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 9,
    name: "Polo Shirt",
    category: "Clothing",
    price: "PKR 3,200",
    oldPrice: null,
    badge: null,
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 10,
    name: "Smart Watch",
    category: "Accessories",
    price: "PKR 45,000",
    oldPrice: "PKR 52,000",
    badge: "Hot",
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 11,
    name: "Canvas Backpack",
    category: "Bags",
    price: "PKR 6,500",
    oldPrice: null,
    badge: "New",
    image: "https://images.pexels.com/photos/1545998/pexels-photo-1545998.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 12,
    name: "Formal Dress Shoes",
    category: "Footwear",
    price: "PKR 16,000",
    oldPrice: "PKR 19,999",
    badge: "Sale",
    image: "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const badgeColors = {
  Hot: "#e63946",
  Sale: "#2a9d8f",
  New: "#e9c46a"
};
 
const badgeTextColors = {
  Hot: "#fff",
  Sale: "#fff",
  New: "#1a1a2e"
};

const filters = ["All", "Footwear", "Clothing", "Bags", "Accessories", "Eyewear"];
 
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { activeFilter: "All" };
  }
 
  filtered() {
    const { activeFilter } = this.state;
    if (activeFilter === "All") return productData;
    return productData.filter(p => p.category === activeFilter);
  }
 
  render() {
    const { activeFilter } = this.state;
    const products = this.filtered();
 
    return (
      <>
        {/* <style>{App.css}</style> */}
        <div className="sp-page">
 
          {/* Hero heading */}
          <div className="sp-hero">
            <span className="sp-hero-eyebrow">New Arrivals 2025</span>
            <h1>Shop the <span>Latest</span> Trends</h1>
            <p>Premium quality products delivered to your doorstep across Pakistan</p>
          </div>
 
          {/* Filter tabs */}
          <div className="sp-filters">
            {filters.map(f => (
              <button
                key={f}
                className={`sp-filter-btn${activeFilter === f ? " active" : ""}`}
                onClick={() => this.setState({ activeFilter: f })}
              >
                {f}
              </button>
            ))}
          </div>
 
          {/* Products grid */}
          <div className="sp-grid">
            {products.map(product => (
              <div className="sp-card" key={product.id}>
 
                {/* Image */}
                <div className="sp-img-wrap">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <div className="sp-img-overlay" />
                  {product.badge && (
                    <span
                      className="sp-badge"
                      style={{
                        background: badgeColors[product.badge],
                        color: badgeTextColors[product.badge]
                      }}
                    >
                      {product.badge}
                    </span>
                  )}
                  <button className="sp-wish-btn" aria-label="Wishlist">🤍</button>
                </div>
 
                {/* Body */}
                <div className="sp-card-body">
                  <p className="sp-card-category">{product.category}</p>
                  <h3 className="sp-card-name">{product.name}</h3>
                  <div className="sp-card-pricing">
                    <span className="sp-price">{product.price}</span>
                    {product.oldPrice && (
                      <span className="sp-old-price">{product.oldPrice}</span>
                    )}
                  </div>
                  <div className="sp-card-actions">
                    <button className="sp-btn-cart">🛒 Add to Cart</button>
                    <button className="sp-btn-view">View</button>
                  </div>
                </div>
 
              </div>
            ))}
          </div>
 
          <p className="sp-count">Showing {products.length} of {productData.length} products</p>
        </div>
      </>
    );
  }
}
 
export default Products;
