// import React, { useState } from "react";
// import { Button } from "@nextui-org/react";
// import { Link } from "react-router-dom";

// export default function NavbarComp() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <nav className=" p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo on the left */}
//         <div className="font-bold text-lg">
//           <a href="/" className="flex items-center">
//             <img
//               src="src/assets/logo.webp"
//               alt="Qualiinsight's Logo"
//               className="h-20"
//             />
//           </a>
//         </div>

//         {/* Hamburger button for small screens */}
//         <button className="lg:hidden " onClick={toggleMenu}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             strokeWidth="2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {/* Menu items for large screens */}
//         <div className="hidden lg:flex gap-8 ml-72">
//           <a href="#" className=" hover:text-gray-400">
//             Home
//           </a>
//           <a href="#" className=" hover:text-gray-400">
//             About
//           </a>
//           <a href="#" className=" hover:text-gray-400">
//             Solution
//           </a>
//           <a href="#" className=" hover:text-gray-400">
//             Resources
//           </a>
//         </div>

//         {/* Book a Meeting button */}
//         <div className="flex items-center">
//           <Button
//             as={Link}
//             color="primary"
//             href="#"
//             variant="flat"
//             className="h-10 py-2 bg-[#d33e5f] text-white  rounded-xl"
//           >
//             Book A Meeting
//           </Button>
//         </div>
//       </div>

//       {/* Dropdown menu for small screens */}
//       {isMenuOpen && (
//         <div className="lg:hidden  p-4 mt-4">
//           <a href="#" className="block py-2 px-4 hover:bg-gray-200">
//             Home
//           </a>
//           <a href="#" className="block py-2 px-4 hover:bg-gray-200">
//             About
//           </a>
//           <a href="#" className="block py-2 px-4 hover:bg-gray-200">
//             Solution
//           </a>
//           <a href="#" className="block py-2 px-4 hover:bg-gray-200">
//             Resources
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// }




import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { NavLink } from "react-router-dom";

const navmenu = [
  { id: 1, title: "Home", path: "/", delay: "0.1s" },
  {
    id: 2,
    title: "About",
    path: "/about",
    delay: "0.2s",
    hasDropdown: true, // Added flag for dropdown menu
    dropdownItems: [
      { title: "Company", path: "/solutions/web-dev" },
      { title: "Careers", path: "/solutions/app-dev" },
    ],
  },
  {
    id: 3,
    title: "Solutions",
    path: "/Solutions",
    delay: "0.5s",
    hasDropdown: true, // Added flag for dropdown menu
    dropdownItems: [
      { title: "Services", path: "/solutions/web-dev" },
      { title: "Products", path: "/solutions/app-dev" },
    ],
  },
  {
    id: 4,
    title: "Resources",
    path: "/blog",
    delay: "0.3s",
    hasDropdown: true, // Added flag for dropdown menu
    dropdownItems: [
      { title: "Blog", path: "/solutions/web-dev" },
      { title: "Usecase", path: "/solutions/app-dev" },
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

  return (
    <nav className="w-full h-20 justify-end">
      <div
        className="flex items-center justify-between font-league"
        ref={menuRef}
      >
        {/* LOGO */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src="src/assets/logo.webp"
          alt="Qualiinsight's Logo"
          className="w-36 h-20 lg:ml-20"
        />

        {/* Menu (always visible on larger screens) */}
        <div className="hidden md:flex flex-grow justify-end  mt-5">
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
                  className="relative z-50"
                  onMouseEnter={() =>
                    menu.hasDropdown && toggleDropdown(menu.id)
                  } // Open dropdown on hover
                  onMouseLeave={() => menu.hasDropdown && toggleDropdown(null)} // Close dropdown on hover out
                >
                  <NavLink
                    to={menu.path}
                    className={({ isActive }) =>
                      isActive
                        ? "inline-block px-2 text-md font-sans font-bold text-orange-700"
                        : "inline-block px-2 text-md font-sans font-bold hover:text-orange-500"
                    }
                  >
                    {menu.title}
                    {/* Show the dropdown arrow if the menu has a dropdown */}
                    {menu.hasDropdown && (
                      <MdOutlineArrowDropDown  className="inline-block" />
                    )}
                  </NavLink>
                  {/* Dropdown Menu */}
                  {menu.hasDropdown && dropdownOpen === menu.id && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
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
          <button className="rounded-3xl p-2  mx-5 bg-red-400">
            Book A Meeting
          </button>
        </div>

        {/* Menu Button (Mobile View) */}
        <div className="flex px-5 mt-5 justify-between sm:hidden">
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
            <ul className="flex flex-col gap-2 p-4 bg-white/80 shadow-lg">
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
                          ? "block px-4 py-2 text-lg text-orange-700"
                          : "block px-4 py-2 text-lg text-gray-800 hover:text-orange-700"
                      }
                    >
                      {menu.title}
                    </NavLink>
                    {/* Show dropdown arrow only if there's a dropdown */}
                    {menu.hasDropdown && (
                      <MdOutlineArrowDropDown  className="inline-block  " />
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

