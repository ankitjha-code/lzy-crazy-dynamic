// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaPinterestP,
//   FaInstagram,
//   FaYoutube,
// } from "react-icons/fa";

// const iconMap = {
//   facebook: FaFacebookF,
//   twitter: FaTwitter,
//   pinterest: FaPinterestP,
//   instagram: FaInstagram,
//   youtube: FaYoutube,
// };

// const Footer = () => {
//   const [footerData, setFooterData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const userId = "683aa89cc4c6443489fa79f6";
//   useEffect(() => {
    
//     const fetchFooter = async () => {
//       try {
//         const res = await axios.post(import.meta.env.VITE_API_URL_FOOTER, { userId }); // Adjust your API URL here
//         setFooterData(res.data);
//         console.log(res.data);
//       } catch (err) {
//         setError("Failed to load footer data");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFooter();
//   }, []);

//   if (loading) return <p className="text-center p-8">Loading footer...</p>;
//   if (error) return <p className="text-center p-8 text-red-500">{error}</p>;

//   return (
//     <footer>
//       <div className="bg-neutral-900 text-white px-8 py-12">
//         <div className="max-w-screen mx-4 grid md:grid-cols-4 gap-10">
//           {/* Logo + Description + Social Icons */}
//           <div>
//             <img
//               src={footerData.logoUrl || "/logo.png"}
//               alt="Logo"
//               className="mb-4 w-12"
//             />
//             <p className="text-gray-300 text-sm mb-4">{footerData.description}</p>
//             <div className="flex space-x-4 text-xl text-gray-400">
//               {footerData.socialIcons?.map(({ id, platform, link }) => {
//                 const IconComponent = iconMap[platform.id.toLowerCase()];
//                 return IconComponent ? (
//                   <a
//                     key={id}
//                     href={link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-white cursor-pointer"
//                     aria-label={platform.name}
//                   >
//                     <IconComponent />
//                   </a>
//                 ) : null;
//               })}
//             </div>
//           </div>

//           {/* Recent Post */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
//             <ul className="space-y-2 text-sm text-gray-300">
//               {footerData.recentPosts?.map((post) => (
//                 <li key={post.id}>
//                   <a href={post.link} className="hover:underline">
//                     {post.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Working Hours */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
//             <ul className="space-y-2 text-sm text-gray-300">
//               {footerData.dayTimes?.map((dt) => (
//                 <li key={dt.id}>
//                   {dt.day}: {dt.time}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Us */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//             <p className="text-sm text-gray-300 mb-2">{footerData.address}</p>
//             <p className="text-sm text-gray-300 mb-2">{footerData.email || "Email not provided"}</p>
//             <p className="text-sm text-gray-300">Phone: {footerData.phone}</p>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Strip */}
//       <div className="px-8 py-4 bg-neutral-700 text-sm flex flex-col md:flex-row justify-between items-center text-gray-100">
//         <p>© Copyright Louisville Beauty Salon All rights reserved.</p>
//         <div className="space-x-6 mt-2 md:mt-0">
//           <a href="#" className="hover:text-white">
//             Privacy Policy
//           </a>
//           <a href="#" className="hover:text-white">
//             Terms of Use
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React, { useState, useEffect } from "react";
import axios from "axios";
import { Edit, Trash2, Facebook, Twitter, Instagram, Linkedin, Youtube,  Globe } from "react-feather";
import toast from "react-hot-toast";

const Footer = ({ user }) => {
  // States for footer data and UI
  const [footerData, setFooterData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch footer data from API
  const fetchFooterData = async () => {
    setFetchLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:4000/api/footer/get", { userId: import.meta.env.VITE_API_USER_ID });

      if (response.data.success && response.data.footer) {
        const { footer } = response.data;
        // Store the footer data

        setFooterData(footer);
      }
    } catch (err) {
      setError(err.message || "Error loading footer data");
      toast.error("Failed to load footer data");
      console.error("Error loading footer data:", err);
    } finally {
      setFetchLoading(false);
    }
  };

  // Effect to load footer data on mount or when editing toggled
  useEffect(() => {
    fetchFooterData();
  }, [isEditing]);


  if (fetchLoading) return <p>Loading footer data...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
        <div className="w-full flex flex-col md:flex-row flex-wrap gap-8 bg-gray-800 text-white p-6">
          {/* Logo and company info */}
          <div className="w-full md:w-1/4">
            {footerData.logoUrl && (
              <div className="mb-4">
                <img
                  src={footerData.logoUrl}
                  alt="Logo"
                  className="max-w-[180px] h-auto mb-4"
                />
              </div>
            )}

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              {footerData.address && (
                <p className="mb-2 text-gray-300">
                  <span className="font-medium">Address:</span> {footerData.address}
                </p>
              )}
              {footerData.phone && (
                <p className="mb-2 text-gray-300">
                  <span className="font-medium">Phone:</span> {footerData.phone}
                </p>
              )}
              {footerData.description && (
                <p className="mb-2 text-gray-300">
                  <span className="font-medium">Description:</span> {footerData.description}
                </p>
              )}
            </div>
          </div>

          {/* Recent Posts */}
          {footerData.recentPosts && footerData.recentPosts.length > 0 && (
            <div className="w-full md:w-1/4">
              <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
              <ul className="space-y-2">
                {footerData.recentPosts.map((post) => (
                  <li key={post.id} className="hover:text-blue-300">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1"
                    >
                      {post.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Working Hours */}
          {footerData.dayTimes && footerData.dayTimes.length > 0 && (
            <div className="w-full md:w-1/4">
              <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
              <ul className="space-y-2">
                {footerData.dayTimes.map((item) => (
                  <li key={item.id} className="flex justify-between">
                    <span className="font-medium">{item.day}</span>
                    <span className="text-gray-300">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Social Icons */}
          {footerData.socialIcons && footerData.socialIcons.length > 0 && (
            <div className="w-full md:w-1/4">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {footerData.socialIcons.map((icon) => (
                  <a
                    key={icon.id}
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-blue-600 rounded-full transition-colors"
                  >
                    {icon.platform?.id === "facebook" && <Facebook size={20} />}
                    {icon.platform?.id === "twitter" && <Twitter size={20} />}
                    {icon.platform?.id === "instagram" && <Instagram size={20} />}
                    {icon.platform?.id === "linkedin" && <Linkedin size={20} />}
                    {icon.platform?.id === "youtube" && <Youtube size={20} />}
                    
                    {icon.platform?.id === "website" && <Globe size={20} />}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      
  );
};

export default Footer;
