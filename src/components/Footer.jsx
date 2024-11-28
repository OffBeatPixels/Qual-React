import React from "react";
import Logo from "/src/assets/logo.webp";
import fit from "/src/assets/ft-bg-1.jpg";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import Services from './Services';

const Footer = () => {
  return (
    <footer
      className="relative z-10 text-black  pt-10 "
      style={{
        backgroundImage: `url(${fit})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        // height: window.innerWidth < 768 ? "100vh" : "50vh",
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 ml-5 z-99  ">
        {/* <div className=" bottom-5 relative z-10   "> */}
        <div>
          <img src={Logo} alt="Logo" width={200} />
        </div>
        {/* Quick Links */}

        <div>
          <h3 className="  text-xl  mb-4 text-black ">Solutions</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/services" className=" hover:text-red-500 ">
                Project Based Services
              </Link>
            </li>
            <li>
              <Link to="/services1" className=" hover:text-red-500 ">
                Managed Services
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="  text-xl  mb-4 text-black ">Resources</h3>
          <ul className="space-y-2 ">
            <li>
              <Link to="/blog" className=" hover:text-red-500 ">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/usecase" className=" hover:text-red-500 ">
                Usecase
              </Link>
            </li>
            <li>
              <Link to="/contact" className=" hover:text-red-500 ">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="  text-xl  mb-4 text-black ">About</h3>
          <ul className="space-y-2  ">
            <li>
              <Link to="/company" className=" hover:text-red-500 ">
                Company
              </Link>
            </li>
            <li>
              <Link to="/careers" className=" hover:text-red-500 ">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="  text-xl  mb-4 text-black ">Follow Us</h2>
          <div className="flex gap-4 ">
            <a
              href="https://www.facebook.com/profile.php?id=61563835936410"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-red-500-600 transition-colors"
            >
              <FaFacebook size={24} />
            </a>

            <a
              href="https://www.linkedin.com/company/qualiinsight/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-red-500-700 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <p className="flex justify-center  py-10 ">
        &#169; Copyright Qualiinsight. 2024 | All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
