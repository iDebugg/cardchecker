import React from "react";
import { useNavigate } from "react-router-dom";
import applecard from "../NewApple.jpeg";
import sephora from "../New Sephora.jpeg";
import ebay from "../New Ebay.jpeg";
import steam from "../New Steam.jpeg";
import visa from "../New Visa.jpeg";
import walmart from "../New Walmart.jpeg";
import razergold from "../New RazerGold.jpeg";
import footlocker from "../New Xbox.jpeg";

const cards = [
  { name: "Apple Card", image: applecard },
  { name: "eBay Card", image: ebay },
  { name: "Razer Gold", image: razergold },
  { name: "Walmart Card", image: walmart },
  { name: "Visa Card", image: visa },
  { name: "Sephora Card", image: sephora },
  { name: "Steam Card", image: steam },
  { name: "Foot Locker", image: footlocker },
];

function Hero() {
  const navigate = useNavigate();

  const handleCheckBalance = (cardName) => {
    navigate("/contact", { state: { selectedCard: cardName } });
  };

  return (
    <div
      id="hero"
      className="h-full pt-24  pl-5 pr-5 grid sm:flex gap-4 grid place-items-center sm:flex sm:justify-between sm:w-3/4 sm:mx-auto"
    >
      <div className="grid gap-5">
        {cards.map((card, index) => (
          <div key={index} className="text-center">
            <img src={card.image} alt={card.name} className="w-72 h-48 mb-2" />
            <h4>
              <button
                onClick={() => handleCheckBalance(card.name)}
                className="underline italic"
              >
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
