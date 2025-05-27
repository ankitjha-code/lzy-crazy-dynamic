import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Logo + Description + Social Icons */}
        <div>
          <img src="/logo.png" alt="Logo" className="mb-4 w-12" />
          <p className="text-gray-300 text-sm mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever industry.
          </p>
          <div className="flex space-x-4 text-xl text-gray-400">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaPinterestP className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Recent Post */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resent Post</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>FAQ</li>
            <li>Career</li>
            <li>Our Team</li>
            <li>Services</li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Monday — Friday: 8am — 6pm EST</li>
            <li>Saturday: 9am — 5pm EST</li>
            <li>Sunday: 9am — 4pm EST</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300 mb-2">
            90 St Johns Brooklyn, NY, United States
          </p>
          <p className="text-sm text-gray-300 mb-2">
            contact.louisvillebeautysalon@gmail.com
          </p>
          <p className="text-sm text-gray-300">Phone: (+01)888.999.77</p>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-sm flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>© Copyright Louisville Beauty Salon All rights reserved.</p>
        <div className="space-x-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
