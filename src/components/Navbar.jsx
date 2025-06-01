import React, { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState("");
  const [navItems, setNavItems] = useState([]);
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    // Set current active path on mount
    setActivePath(window.location.pathname);
  }, []);

  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const res = await axios.post(
          import.meta.env.VITE_API_URL,
          { userId: import.meta.env.VITE_API_USER_ID },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Received header data from backend:", res.data);

        if (res.status === 200) {
          setLogoUrl(res.data.logoUrl);
          setNavItems(res.data.navItems || []);
        } else {
          console.error(
            "Failed to fetch header:",
            res.data.message || res.data.error
          );
        }
      } catch (err) {
        console.error("Error fetching header:", err);
      }
    };

    fetchHeader();
  }, []);

  return (
    <nav className="bg-white px-3 sm:px-8 py-7 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-black">
          {logoUrl ? (
            <img src={logoUrl} alt="Logo" className="h-10" />
          ) : (
            <strong>
              <span className="text-yellow-700">L</span>
              <span className="text-red-400">OGO</span>
            </strong>
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-1 justify-center space-x-16 text-xl">
          {navItems.map((item) => {
            // Determine if this nav item is active
            const isActive = activePath === item.link;
            return (
              <li key={item._id}>
                <a
                  href={item.link || "#"}
                  className={`${
                    isActive
                      ? "text-black font-bold"
                      : "text-gray-700 hover:text-black font-semibold"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pt-4 pb-2 space-y-2 text-lg">
          {navItems.map((item) => {
            const isActive = activePath === item.link;
            return (
              <li key={item._id}>
                <a
                  href={item.link || "#"}
                  className={`block ${
                    isActive
                      ? "text-black font-bold"
                      : "text-gray-700 hover:text-black font-semibold"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
