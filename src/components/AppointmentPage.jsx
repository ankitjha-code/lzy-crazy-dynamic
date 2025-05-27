

import React, { useState } from "react";

export default function AppointmentPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment request submitted!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-center filter"
      style={{
        backgroundImage: "url('./src/Images/appointment.jpg')", 
        filter: "grayscale(90%)",
         backgroundSize: "cover",
    backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 w-full flex flex-col items-center px-4">
        <h1
          className="text-4xl md:text-5xl font-bold text-white text-center mt-16"
          style={{ fontFamily: "'Old Standard TT', serif" }}
        >
          Make An Appointment
        </h1>
        <p className="text-white text-lg text-center mt-4 mb-8 max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
          Lorem Ipsum has been
        </p>

        {/* White Form Box */}
        <div className="w-full max-w-xl bg-white rounded-xl shadow-lg px-8 py-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B58152]"
                placeholder="Your Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B58152]"
                placeholder="Your Email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Phone</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B58152]"
                placeholder="Your Phone"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Message</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B58152]"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#ED8D74] text-white font-semibold text-lg px-10 py-2 rounded-full transition hover:bg-[#e27454]"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


