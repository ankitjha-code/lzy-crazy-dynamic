import React, { useState } from "react";

export default function AppointmentPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  // Track which input is focused
  const [focused, setFocused] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment request submitted!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://i.ibb.co/ksX2YDRr/appointment.jpg')",
          filter: "grayscale(90%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-75 z-0"></div>
      <div className="relative z-10 w-full flex flex-col items-center px-4">
        <h1
          className="text-2xl md:text-4xl font-bold text-white text-center mt-16"
          style={{ fontFamily: "'Old Standard TT', serif" }}
        >
          Make An Appointment
        </h1>
        <p className="text-white text-medium text-center mt-4 mb-8 max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </p>

        {/* White Form Box */}
        <div className="w-full max-w-3xl bg-white px-8 py-12 mb-16">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className={`block mb-1 font-semibold ${
                    focused === "name" ? "text-[#ff8f6c]" : "text-gray-700"
                  }`}
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full border-b px-2 py-2 focus:outline-none ${
                    focused === "name" ? "border-[#ff8f6c]" : "border-gray-300"
                  }`}
                  placeholder="Name"
                  value={form.name}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused("")}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    setFocused("name");
                  }}
                  required
                />
              </div>
              <div>
                <label
                  className={`block mb-1 font-semibold ${
                    focused === "email" ? "text-[#ff8f6c]" : "text-gray-700"
                  }`}
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full border-b px-2 py-2 focus:outline-none ${
                    focused === "email" ? "border-[#ff8f6c]" : "border-gray-300"
                  }`}
                  placeholder="Email"
                  value={form.email}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    setFocused("email");
                  }}
                  required
                />
              </div>
              <div>
                <label
                  className={`block mb-1 font-semibold ${
                    focused === "phone" ? "text-[#ff8f6c]" : "text-gray-700"
                  }`}
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={`w-full border-b px-2 py-2 focus:outline-none ${
                    focused === "phone" ? "border-[#ff8f6c]" : "border-gray-300"
                  }`}
                  placeholder="Phone"
                  value={form.phone}
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused("")}
                  onChange={(e) => {
                    setForm({ ...form, phone: e.target.value });
                    setFocused("phone");
                  }}
                  required
                />
              </div>
              <div>
                <label
                  className={`block mb-1 font-semibold ${
                    focused === "message" ? "text-[#ff8f6c]" : "text-gray-700"
                  }`}
                  htmlFor="message"
                >
                  Message
                </label>
                <input
                  id="message"
                  type="text"
                  className={`w-full border-b px-2 py-2 focus:outline-none ${
                    focused === "message"
                      ? "border-[#ff8f6c]"
                      : "border-gray-300"
                  }`}
                  placeholder="Message"
                  value={form.message}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused("")}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    setFocused("message");
                  }}
                  required
                />
              </div>
            </div>
            <div className="flex justify-end mt-10">
              <button
                type="submit"
                className="bg-[#ff8f6c] text-white font-semibold text-lg px-16 py-2 rounded-full transition hover:bg-[#f67555]"
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
