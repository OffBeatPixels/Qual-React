import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const navmenu = [
  { id: 1, title: "Home", path: "/", delay: "0.1s" },
  {
    id: 2,
    title: "About",
    // path: "/about",
    delay: "0.2s",
    hasDropdown: true, // Added flag for dropdown menu
    dropdownItems: [
      { title: "Company", path: "/company" },
      { title: "Careers", path: "/careers" },
    ],
  },
  {
    id: 3,
    title: "Offerings",
    // path: "/Offerings",
    delay: "0.5s",
    hasDropdown: true, // Added flag for dropdown menu
    dropdownItems: [
      { title: "Project Based Services", path: "/services" },
      { title: "Managed Services", path: "/services1" },
    ],
  },
  {
    id: 4,
    title: "Resources",
    // path: "/blog",
    delay: "0.3s",
    hasDropdown: true, // Added flag for dropdown menu
    dropdownItems: [
      { title: "Blog", path: "/blog" },
      { title: "Usecase", path: "/usecase" },
      { title: "Contact", path: "/contact" },
    ],
  },
];

const SlideDown = (delay) => {
  return {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: parseFloat(delay),
        ease: "easeOut",
      },
    },
  };
};

 const getNavbarColor = () => {
   switch (location.pathname) {

     case "/":
       return "bg-[#F7F7F7]"; // Blue for the About page

     default:
       return "bg-[#F7F7F7]"; // Default color
   }
 };

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track the open dropdown
  const menuRef = useRef(null);

  const menuToggle = () => {
    setIsOpen(!isOpen);
  };
  const menuClose = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id); // Toggle dropdown open state
  };

  useEffect(() => {
    document.addEventListener("mousedown", menuClose);
    return () => document.removeEventListener("mousedown", menuClose);
  }, []);


const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  
  return (
    <nav className={`w-full h-20 justify-end ${getNavbarColor()}`}>
      <div
        className="flex items-center justify-between font-league"
        ref={menuRef}
      >
        {/* LOGO */}
        <Link to="/">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            src="src/assets/logo.webp"
            alt="Qualiinsight's Logo"
            loading="lazy"
            className=" h-20 py-1 ml-5 lg:ml-20"
          />
        </Link>

        {/* Menu (always visible on larger screens) */}
        <div className="hidden md:flex flex-grow justify-end  ">
          <ul className="flex  ">
            {navmenu.map((menu) => (
              <motion.li
                variants={SlideDown(menu.delay)}
                initial="initial"
                animate="animate"
                key={menu.id}
                className="nav-menu"
              >
                {/* Check if the item has a dropdown */}
                <div
                  className="relative z-50 font-semibold"
                  onMouseEnter={() =>
                    menu.hasDropdown && toggleDropdown(menu.id)
                  } // Open dropdown on hover
                  onMouseLeave={() => menu.hasDropdown && toggleDropdown(null)} // Close dropdown on hover out
                >
                  <NavLink
                    to={menu.path}
                    onClick={() => {
                      scrollToTop();
                      setIsOpen(false); // Close mobile menu if open
                    }}
                    className={({ isActive }) =>
                      isActive
                        ? "flex px-4 py-2 text-lg text-black"
                        : "flex px-4 py-2 text-lg text-black "
                    }
                  >
                    {menu.title}
                    {/* Show the dropdown arrow if the menu has a dropdown */}
                    {menu.hasDropdown && (
                      <MdOutlineArrowDropDown className="  mt-2 xl:mt-1 " />
                    )}
                  </NavLink>
                  {/* Dropdown Menu */}
                  {menu.hasDropdown && dropdownOpen === menu.id && (
                    <div className="absolute left-0  w-48 bg-white shadow-lg rounded-lg">
                      <ul className="flex flex-col">
                        {menu.dropdownItems.map((item, index) => (
                          <li key={index} className="hover:bg-gray-200">
                            <NavLink
                              to={item.path}
                              className="block px-4 py-2 text-sm text-gray-800"
                            >
                              {item.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
        <Link
          to="/contact"
          className=" p-2 px-4 mr-2 hidden md:block text-white font-bold  md:ml-0 lg:mr-20 
        rounded-lg shadow-lg hover:bg-red-600 transition duration-300 relative z-20 bg-[#D93455]"
        >
          Book A Meeting
        </Link>

        {/* Menu Button (Mobile View) */}
        <div className="flex px-5  justify-between sm:hidden">
          <motion.div
            className="h-[40px] w-[40px] grid place-items-center bg-black hover:bg-gray-600 rounded-full"
            variants={SlideDown(1)}
            initial="initial"
            animate="animate"
          >
            <button onClick={menuToggle} className="text-white">
              <TiThMenu size={25} />
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu (visible only when toggled) */}
        {isOpen && (
          <div className="fixed top-0 right-0 mt-16 w-40 z-50 rounded-2xl md:hidden">
            <ul className="flex flex-col gap-2 p-4 bg-white shadow-lg">
              {navmenu.map((menu) => (
                <motion.li
                  variants={SlideDown(menu.delay)}
                  initial="initial"
                  animate="animate"
                  key={menu.id}
                  className="nav-menu"
                >
                  <div
                    onClick={() => toggleDropdown(menu.id)}
                    className="flex items-center justify-between"
                  >
                    <NavLink
                      to={menu.path}
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 text-lg "
                          : "block px-4 py-2 text-lg text-gray-800 "
                      }
                    >
                      {menu.title}
                    </NavLink>
                    {/* Show dropdown arrow only if there's a dropdown */}
                    {menu.hasDropdown && (
                      <MdOutlineArrowDropDown className="inline-block  " />
                    )}
                  </div>

                  {/* Dropdown Menu for Mobile */}
                  {menu.hasDropdown && dropdownOpen === menu.id && (
                    <div className="pl-4 mt-2 w-full bg-white shadow-lg rounded-lg">
                      <ul className="flex flex-col">
                        {menu.dropdownItems.map((item, index) => (
                          <li key={index} className="hover:bg-gray-200">
                            <NavLink
                              to={item.path}
                              className="block px-4 py-2 text-sm text-gray-800"
                            >
                              {item.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};


export default Navbar;

