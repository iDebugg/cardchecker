import React from "react";
import { useNavigate } from "react-router-dom";
import applecard from '../apple-gift-card-front.png';
import sephora from '../sephoraaa.webp';
import ebay from '../ebayyyy.webp';
import steam from '../steamcard.webp';
import visa from '../vanilla-visa-gift-card.png.webp';
import walmart from '../walmart.webp';
import razergold from '../razergold.jpg';
import footlocker from '../Foot-Locker.png.webp';

const cards = [
  { name: "Apple Card", image: applecard },
  { name: "Sephora Card", image: sephora },
  { name: "eBay Card", image: ebay },
  { name: "Steam Card", image: steam },
  { name: "Visa Card", image: visa },
  { name: "Walmart Card", image: walmart },
  { name: "Razer Gold", image: razergold },
  { name: "Foot Locker", image: footlocker },
];

function Hero() {
  const navigate = useNavigate();

  const handleCheckBalance = (cardName) => {
    navigate("/contact", { state: { selectedCard: cardName } });
  };

  return (
    <div id="hero" className="h-full pt-24  pl-5 pr-5 grid sm:flex gap-4 grid place-items-center sm:flex sm:justify-between sm:w-3/4 sm:mx-auto">
      <div className="grid gap-5">
        {cards.map((card, index) => (
          <div key={index} className="text-center">
            <img src={card.image} alt={card.name} className="w-72 h-48 mb-2" />
            <h4>
              <button onClick={() => handleCheckBalance(card.name)} className="underline italic">
                Check Card Balance
              </button>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
