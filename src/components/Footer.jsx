

import React from "react";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import './Footer.css';

const Footer = () => {
  const icons = [
    <BsTwitter key="twitter" />,
    <BsInstagram key="instagram" />,
    <BsFacebook key="facebook" />,
  ];

  return (
    <div className="footer">
      <div className="footer-links">
        <a href="/support" className="footer-link">Support</a>
        <a href="/community" className="footer-link">Community</a>
        <a href="/hosting" className="footer-link">Hosting</a>
        <a href="/about" className="footer-link">About</a>
      </div>
      
      <div className="footer-right">
        <div className="footer-social">
          {icons.map((icon) => (
            <div key={icon.key} className="footer-icon">
              {icon}
            </div>
          ))}
        </div>
        <div className="footer-copyright">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
























// import React from "react";
// import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
// import { FaSnapchatGhost } from "react-icons/fa";
// import './Footer.css';

// const Footer = () => {
//   const icons = [
//     <BsTwitter key="twitter" />,
//     <BsInstagram key="instagram" />,
//     <BsFacebook key="facebook" />,
//     <FaSnapchatGhost key="snapchat" />
//   ];

//   const links = [
//     { name: "Support", url: "/support" },
//     { name: "Community", url: "/community" },
//     { name: "Hosting", url: "/hosting" },
//     { name: "About", url: "/about" }
//   ];

//   return (
//     <div className="footer">
//       <div className="footer-links">
//         {links.map((link) => (
//           <a key={link.name} href={link.url} className="footer-link">
//             {link.name}
//           </a>
//         ))}
//       </div>
//       <div className="footer-social">
//         {icons.map((icon) => (
//           <div key={icon.key} className="footer-icon">
//             {icon}
//           </div>
//         ))}
//       </div>
//       <div className="footer-copyright">
//         &copy; 2024 Your Company. All rights reserved.
//       </div>
//     </div>
//   );
// };

// export default Footer;
