
import '../styles/Product.css';
import Service_card from './Service_card';

export default function Product() {
  const productHighlights = [
    "Engine Performance Boosters",
    "Premium Alloy Wheels",
    "Ceramic Car Wash Kits",
    "Turbochargers and Superchargers",
    "Fuel Efficiency Tuners",
    "Brake System Upgrades",
    "Advanced Suspension Systems",
    "LED & Neon Car Lights",
    "Interior Detailing Kits",
    "Custom Exhaust Systems"
  ];

  return (
    <div className="product-carousel-container">
      <h2 className="carousel-title">What We Offer at TuneFour</h2>
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {productHighlights.concat(productHighlights).map((text, index) => (
            <span className="carousel-item" key={index}>
              🚗 {text}
            </span>
          ))}
        </div>

        
      </div>
      <Service_card />
    </div>
  );
}
