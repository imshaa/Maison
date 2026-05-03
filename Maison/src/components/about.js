import React from "react";

const stats = [
  { number: "50K+", label: "Happy Customers" },
  { number: "1,200+", label: "Products Listed" },
  { number: "30+", label: "Cities Covered" },
  { number: "4.9★", label: "Average Rating" },
];

const values = [
  {
    icon: "🚚",
    title: "Fast Delivery",
    text: "Orders dispatched within 24 hours and delivered across Pakistan in 2–4 business days.",
  },
  {
    icon: "🛡️",
    title: "Buyer Protection",
    text: "Shop with confidence. Every purchase is covered by our hassle-free return & refund policy.",
  },
  {
    icon: "💎",
    title: "Curated Quality",
    text: "Every product on ShopFirst is handpicked and quality-checked before reaching our shelves.",
  },
  {
    icon: "💬",
    title: "24/7 Support",
    text: "Our dedicated support team is always ready to assist you — anytime, any day.",
  },
];

export default function About() {
  return (
    <>
      <div className="ct-page about-section">
        <div className="container">
          {/* ── Hero Heading ── */}
          <div className="text-center mb-5">
            <span className="ct-eyebrow">Our Story</span>
            <h2 className="ct-title">
              About <span>ShopFirst</span>
            </h2>
            <p className="ct-subtitle-wide mx-auto">
              We believe shopping should be simple, enjoyable, and reliable —
              bringing you quality products from everyday essentials to the
              latest trends, all in one trusted place.
            </p>
          </div>

          {/* ── Stats Row ── */}
          <div className="row g-4 mb-5">
            {stats.map((s) => (
              <div className="col-6 col-md-3" key={s.label}>
                <div className="about-stat-card">
                  <div className="about-stat-number">{s.number}</div>
                  <div className="about-stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>

         {/* ── Brand Strip ── */}
<div className="brand-strip-wrapper">
  <div className="brand-strip">

    {[
      "/logos/nike.png",
      "/logos/adidas.png",
      "/logos/puma.png",
      "/logos/zara.png",
      "/logos/apple.png",
      "/logos/hm.png",
      "/logos/dior.png"
    ].map((logo, i) => (
      <img key={i} src={logo} alt="brand" className="brand-logo" />
    ))}

    {/* duplicate for smooth scroll */}
    {[
      "/logos/nike.png",
      "/logos/adidas.png",
      "/logos/puma.png",
      "/logos/zara.png",
      "/logos/apple.png",
      "/logos/hm.png",
      "/logos/dior.png"
    ].map((logo, i) => (
      <img key={"dup-" + i} src={logo} alt="brand" className="brand-logo" />
    ))}

  </div>
</div>

          {/* <div className="about-divider" /> */}
          {/* ── Values ── */}
           {/* <span className="ct-eyebrow">Why Choose Us</span> */}
          {/* <div className="text-center mb-5">
           
            <h2
              className="ct-title"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              What Sets Us <span>Apart</span>
            </h2>
          </div> */}

          <div className="row g-4">
            {values.map((v) => (
              <div className="col-sm-6 col-lg-3" key={v.title}>
                <div className="about-value-card">
                  <div className="about-value-icon">{v.icon}</div>
                  <h4 className="about-value-title">{v.title}</h4>
                  <p className="about-value-text">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// import React from "react";

// export default function About() {
//   return (
//     <div className="ct-page">
//       <div className="container">
//         {/* heading */}
//         <div className="text-center mb-5">
//           <span className="ct-eyebrow">Acknowledge</span>
//           <h2 className="ct-title">
//             About <span>Us</span>
//           </h2>

//           <p className="ct-subtitle mx-auto">
//             At <span>ShopFirst</span>, we believe shopping should be simple,
//             enjoyable, and reliable. Our platform is built to bring you a
//             curated selection of high-quality products—from everyday essentials
//             to the latest trends—all in one place. We focus on delivering value,
//             convenience, and a seamless user experience, ensuring that every
//             visit feels effortless and rewarding. With a commitment to customer
//             satisfaction, fast delivery across Pakistan, and a constantly
//             evolving product range, ShopFirst is your trusted destination for
//             smart and stylish shopping.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
