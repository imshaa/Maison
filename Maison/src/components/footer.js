export default function Footer() {
  return (
    <>
      <footer className="ft-footer">
        <div className="container">
          <div className="row g-5">
 
            {/* Brand */}
            <div className="col-lg-3 col-md-6">
              <div className="ft-brand-name">Shop<span>Zone</span></div>
              <p className="ft-brand-desc">
                Pakistan's trusted destination for smart, stylish shopping — delivered fast, every time.
              </p>
              <div className="ft-social-row">
                {["📘", "📸", "🐦", "▶️"].map((icon, i) => (
                  <a key={i} href="#" className="ft-social-btn" aria-label="social">{icon}</a>
                ))}
              </div>
            </div>
 
            {/* Shop */}
            <div className="col-lg-2 col-md-6 col-6">
              <p className="ft-col-heading">Shop</p>
              {["New Arrivals", "Men", "Women", "Accessories", "Sale"].map(l => (
                <button key={l} className="ft-link">{l}</button>
              ))}
            </div>
 
            {/* Help */}
            <div className="col-lg-2 col-md-6 col-6">
              <p className="ft-col-heading">Help</p>
              {["Track Order", "Returns & Refunds", "Shipping Info", "FAQs", "Contact Us"].map(l => (
                <button key={l} className="ft-link">{l}</button>
              ))}
            </div>
 
            {/* Newsletter */}
            <div className="col-lg-4 col-md-6">
              <p className="ft-col-heading">Stay Updated</p>
              <p className="ft-newsletter-text">
                Subscribe for exclusive deals, new arrivals, and style inspiration — straight to your inbox.
              </p>
              <div className="ft-newsletter-row">
                <input className="ft-newsletter-input" type="email" placeholder="your@email.com" />
                <button className="ft-newsletter-btn">Subscribe</button>
              </div>
            </div>
 
          </div>
 
          {/* Bottom bar */}
          <div className="ft-bottom">
            <span className="ft-copy">© 2025 ShopZone. All rights reserved.</span>
            <div className="ft-pay-icons">
              {["JazzCash", "EasyPaisa", "COD", "Visa"].map(p => (
                <span key={p} className="ft-pay-icon">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}