import React, { useState } from 'react';
import { useEffect } from 'react';



const newArrivals = [
  {
    id: 1,
    name: "Air Foam Runner",
    category: "Footwear",
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Linen Oversized Shirt",
    category: "Clothing",
    image: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Minimalist Dial Watch",
    category: "Accessories",
    image: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Structured Tote Bag",
    category: "Bags",
    image: "https://images.pexels.com/photos/1204462/pexels-photo-1204462.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "Slim Chino Trousers",
    category: "Clothing",
    image: "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
 
const CARD_WIDTH = 240 + 20;
const VISIBLE = 3;
const MAX_INDEX = newArrivals.length - VISIBLE;
 
export default function NewArrivals() {
  const [index, setIndex] = useState(0);
 
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i >= MAX_INDEX ? 0 : i + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, []);
 
  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, MAX_INDEX));
 
  return (
    <>
      <section className="na-section">
 
        <div className="na-header">
          <div className="na-header-left">
            <span className="na-eyebrow">Just In</span>
            <h2 className="na-title">New <span>Arrivals</span></h2>
          </div>
          <div className="na-arrows">
            <button className="na-arrow" onClick={prev} disabled={index === 0} aria-label="Previous">‹</button>
            <button className="na-arrow" onClick={next} disabled={index >= MAX_INDEX} aria-label="Next">›</button>
          </div>
        </div>
 
        <div className="na-track-wrapper">
          <div className="na-track" style={{ transform: `translateX(-${index * CARD_WIDTH}px)` }}>
            {newArrivals.map((p) => (
              <div className="na-card" key={p.id}>
                <div className="na-img-wrap">
                  <img src={p.image} alt={p.name} loading="lazy" />
                  <div className="na-overlay" />
                  <span className="na-badge">New</span>
                  <div className="na-card-info">
                    <p className="na-card-cat">{p.category}</p>
                    <h4 className="na-card-name">{p.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
 
        <div className="na-dots">
          {newArrivals.map((_, i) => (
            <button
              key={i}
              className={`na-dot${i === index ? " active" : ""}`}
              onClick={() => setIndex(Math.min(i, MAX_INDEX))}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
 
      </section>
    </>
  );
}