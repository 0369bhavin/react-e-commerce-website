import { useState } from "react";

function Payment() {
  const [form, setForm] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    
  });

  const [errors, setErrors] = useState({});

  // Input handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validate
  const validateForm = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!/^\d{16}$/.test(form.cardNumber))
      newErrors.cardNumber = "Card number must be 16 digits";

    if (!/^\d{2}\/\d{2}$/.test(form.expiry))
      newErrors.expiry = "Expiry must be MM/YY";

    if (!/^\d{3}$/.test(form.cvv))
      newErrors.cvv = "CVV must be 3 digits";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Payment Successful!");
    }
  
  setForm({
     name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  })
};

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-5 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Payment Form</h2>

      <form onSubmit={handleSubmit}>

        {/* NAME */}
        <label className="block mb-2"> Name on Car</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-1"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        {/* CARD NUMBER */}
        <label className="block mb-2 mt-4">Card Number</label>
        <input
          type="text"
          name="cardNumber"
          maxLength={16}
          value={form.cardNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-1"
        />
        {errors.cardNumber && (
          <p className="text-red-500 text-sm">{errors.cardNumber}</p>
        )}

        {/* EXPIRY */}
        <label className="block mb-2 mt-4">Expiry (MM/YY)</label>
        <input
          type="text"
          name="expiry"
          maxLength={5}
          placeholder="09/28"
          value={form.expiry}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-1"
        />
        {errors.expiry && (
          <p className="text-red-500 text-sm">{errors.expiry}</p>
        )}

        {/* CVV */}
        <label className="block mb-2 mt-4">CVV</label>
        <input
          type="password"
          name="cvv"
          maxLength={3}
          value={form.cvv}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-1"
        />
        {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
 
        <button
          type="submit"
          className="w-full mt-5 bg-blue-600 text-white py-2 rounded"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default Payment;
