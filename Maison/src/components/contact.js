import React, { useState } from 'react';

const topics = ["Order Issue", "Return & Refund", "Shipping", "Product Query", "Payment", "Other"];
 
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [topic, setTopic] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1600);
  };
 
  const isValid = form.name.trim() && form.email.trim() && form.message.trim() && topic;
 
  return (
    <>
      <div className="ct-page">
        <div className="container">
 
          {/* ── Section Header ── */}
          <div className="text-center mb-5">
            <span className="ct-eyebrow">Get in Touch</span>
            <h2 className="ct-title">We'd Love to <span>Hear From You</span></h2>
            <p className="ct-subtitle mx-auto">
              Have a question about your order, a product, or just want to say hello? Our team is here for you.
            </p>
          </div>
 
          <div className="row g-5 align-items-start">
 
            {/* ── LEFT: Info ── */}
            <div className="col-lg-5">
 
              <div className="ct-info-card">
                <div className="ct-info-icon">📍</div>
                <div>
                  <p className="ct-info-label">Our Store</p>
                  <p className="ct-info-value">Shop #14, Liberty Market, Lahore, Pakistan</p>
                </div>
              </div>
 
              <div className="ct-info-card">
                <div className="ct-info-icon">📞</div>
                <div>
                  <p className="ct-info-label">Call Us</p>
                  <p className="ct-info-value">+92 300 1234 567</p>
                </div>
              </div>
 
              <div className="ct-info-card">
                <div className="ct-info-icon">✉️</div>
                <div>
                  <p className="ct-info-label">Email Us</p>
                  <p className="ct-info-value">support@shopzone.pk</p>
                </div>
              </div>
 
              <div className="ct-info-card">
                <div className="ct-info-icon">🕐</div>
                <div>
                  <p className="ct-info-label">Working Hours</p>
                  <p className="ct-info-value">Mon – Sat: 10:00 AM – 8:00 PM</p>
                </div>
              </div>
 
              {/* Socials */}
              <p className="ct-info-label mt-4 mb-2" style={{ color: '#555', letterSpacing: '0.15em' }}>FOLLOW US</p>
              <div className="ct-socials">
                {["📘", "📸", "🐦", "▶️"].map((icon, i) => (
                  <a key={i} href="#" className="ct-social-btn" aria-label="social">{icon}</a>
                ))}
              </div>
 
              {/* Map */}
              <div className="ct-map-strip">
                <iframe
                  title="Store Location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=74.28%2C31.52%2C74.36%2C31.57&layer=mapnik"
                  loading="lazy"
                />
                <div className="ct-map-label">📍 Liberty Market, Lahore</div>
              </div>
 
              <div className="ct-divider" />
            </div>
 
            {/* ── RIGHT: Form ── */}
            <div className="col-lg-7">
              <div className="ct-form-card">
                <h3 className="ct-form-title">Send Us a Message</h3>
                <p className="ct-form-subtitle">We typically reply within 24 hours on business days.</p>
 
                {submitted ? (
                  <div className="ct-success">
                    <div className="ct-success-icon">✅</div>
                    <div>
                      <p className="ct-success-title">Message Sent Successfully!</p>
                      <p className="ct-success-msg">Thanks {form.name.split(' ')[0]}! Our team will get back to you at {form.email} shortly.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
 
                    {/* Name + Email */}
                    <div className="row g-3 mb-3">
                      <div className="col-sm-6">
                        <label className="ct-label">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control ct-input"
                          placeholder="Ali Hassan"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="ct-label">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control ct-input"
                          placeholder="ali@email.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
 
                    {/* Phone */}
                    <div className="mb-3">
                      <label className="ct-label">Phone (Optional)</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control ct-input"
                        placeholder="+92 300 0000000"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
 
                    {/* Topic pills */}
                    <div className="mb-1">
                      <span className="ct-topic-label">What's This About?</span>
                      <div className="ct-topics">
                        {topics.map(t => (
                          <button
                            key={t}
                            type="button"
                            className={`ct-topic-pill${topic === t ? ' selected' : ''}`}
                            onClick={() => setTopic(t)}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
 
                    {/* Message */}
                    <div className="mb-4">
                      <label className="ct-label">Your Message</label>
                      <textarea
                        name="message"
                        className="form-control ct-input"
                        rows="5"
                        placeholder="Tell us how we can help you..."
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
 
                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn ct-submit-btn"
                      disabled={!isValid || loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        "Send Message →"
                      )}
                    </button>
 
                  </form>
                )}
              </div>
            </div>
 
          </div>
        </div>
      </div>
    </>
  );
}