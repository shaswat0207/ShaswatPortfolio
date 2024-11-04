import React from "react";

import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>





      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          {/* <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /> */}



         

          <a href="https://www.instagram.com/shaswat_narayan/" target="_blank" className="items">
            <FaInstagram className="icons" />
           </a>
           <a href="https://www.google.com" target="_blank" className="items">
             <CiFacebook className="icons" />
           </a>
           <a href="https://www.linkedin.com/in/shaswat0207/" target="_blank" className="items">
             <CiLinkedin className="icons" />
           </a>
           <a href="https://x.com/ShaswatN" target="_blank" className="items">
             <FaSquareXTwitter className="icons" />
           </a>
           <a href="https://github.com/shaswat0207" target="_blank" className="items">
             <FaGithubSquare className="icons" />
           </a>
           <a
            href="mailto:shaswatnarayan1997@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>


          
          {/* <a href="mailto:myemail@email.com">myemail@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/myname</a> */}
        </li>
      </ul>
    </footer>
  );
};

// import React from "react";
// import styles from "./Contact.module.css";



// import { FaInstagram } from "react-icons/fa";
// import { CiFacebook } from "react-icons/ci";
// import { CiLinkedin } from "react-icons/ci";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaGithubSquare } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";

// const Contact = () => {
//   return (
//     <>
//       <div className="container contact" id="contact">
//         <h1>CONTACT ME</h1>
//         <div
//           className="contact-icon"
//           data-aos="zoom-in-up"
//           data-aos-duration="1000"
//         >
//           <a href="https://www.google.com" target="_blank" className="items">
//             <FaInstagram className="icons" />
//           </a>
//           <a href="https://www.google.com" target="_blank" className="items">
//             <CiFacebook className="icons" />
//           </a>
//           <a href="https://www.google.com" target="_blank" className="items">
//             <CiLinkedin className="icons" />
//           </a>
//           <a href="https://www.google.com" target="_blank" className="items">
//             <FaSquareXTwitter className="icons" />
//           </a>
//           <a href="https://www.github.com" target="_blank" className="items">
//             <FaGithubSquare className="icons" />
//           </a>
//           <a
//             href="mailto:webdevmastery@gmail.com"
//             target="_blank"
//             className="items"
//           >
//             <SiGmail className="icons" />
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;
