"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    platform: "",
    message: "", // ✅ New field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, platform, message } = formData;

    if (!name || !email || !phone || !platform || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const finalMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0APlatform: ${platform}%0AMessage:%0A${encodeURIComponent(message)}`;

    const whatsappNumber = "919610580359"; // 👈 Your number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${finalMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div
      id="contacts"
      className="flex justify-center items-center bg-slate-950 px-4 py-10 md:py-20"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[1000px] bg-slate-900 rounded-2xl shadow-lg p-10 space-y-6 border border-slate-800"
      >
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Get Started with <span className="text-yellow-400">Adhabits</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            name="name"
            type="text"
            placeholder="First Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-slate-800 text-white placeholder-gray-400 p-4 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-slate-800 text-white placeholder-gray-400 p-4 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-slate-800 text-white placeholder-gray-400 p-4 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <select
            name="platform"
            value={formData.platform}
            onChange={handleChange}
            className="bg-slate-800 text-white p-4 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select Your Platform</option>
            <option value="IDP">IDP</option>
            <option value="BIZGURUKUL">BIZGURUKUL</option>
            <option value="RICHIND">RICHIND</option>
            <option value="FOREVER">FOREVER</option>
            <option value="OTHER">OTHER</option>
          </select>
        </div>

        {/* ✅ Select Message Dropdown */}
        <div>
          <select
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-slate-800 text-white p-4 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select Your Message</option>
            <option value={`Hello Rahman sir 👋 
I’m interested in your Affiliate Ad Service!  
Please book my 🗓 consultation call.  
Looking forward to grow with AdHabits `}>
            Hello Rahman sir 👋 
I’m interested in your Affiliate Ad Service!  
Please book my 🗓 consultation call.  
Looking forward to grow with AdHabits 
            </option>
            <option value={`Hi Rahman sir 👋  
I really want to grow through your ads service
Please book my consultation call `}>
              Hi Rahman sir 👋  
I really want to grow through your ads service
Please book my consultation call
            </option>
            
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-slate-900 font-bold py-4 rounded-lg hover:bg-yellow-300 transition duration-300 text-lg"
        >
          Send on WhatsApp
        </button>
      </form>
    </div>
  );
}
