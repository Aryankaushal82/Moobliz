import React, { useState, useEffect } from "react";
import {
  ArrowLeftRightIcon,
  BarChart3Icon,
  Clock4Icon,
  LayoutDashboard,
  HelpCircleIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import RightArrowIcon from "../assets/rightArrow.svg";
import { Link } from "react-router-dom";


const variants = {
  expanded: { width: "220px" },
  nonexpanded: { width: "60px" },
};

const navLinks = [
  {
    link: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    link: "Activity",
    icon: Clock4Icon,
  },
  {
    link: "Inventory",
    icon: BarChart3Icon,
  },
  {
    link: "Transactions",
    icon: ArrowLeftRightIcon,
  },
  {
    link: "Support",
    icon: HelpCircleIcon,
  },
];

function Navbarr() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth < 768) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={
        "py-10 h-screen flex flex-col border border-r-1 bg-gray-900 text-white relative" +
        (isExpanded ? " px-10" : " px-2 duration-500")
      }
    >
      
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[rgba(209,40,207,1)] md:flex hidden justify-center items-center"
      >
        <img src={RightArrowIcon} className="w-2" />
      </div>

      <Link to='/'>
      <div className="logo-div flex space-x-4 items-center">
        <img
          src="https://res.cloudinary.com/dicnuc6ox/image/upload/v1722683554/logo_llqzae.png"
          className={`md:w-8 w-8 ml-2 logo ${isExpanded ? 'logo-spin' : ''}`} // Add logo-spin class conditionally
          alt="Logo"
        />
        <span className={!isExpanded ? "hidden" : "block"}>Moobilz</span>
      </div>
      </Link>

      <div className="flex flex-col space-y-8 mt-12">
        {navLinks.map((item, index) => (
          <div className="nav-links w-full" key={index}>
            <div
              onClick={() => setActiveIndex(index)}
              className={
                "flex space-x-3 w-full p-2 rounded " +
                (activeIndex === index
                  ? "bg-[rgba(209,40,207,1)] text-white"
                  : "text-gray-300") +
                (!isExpanded ? " pl-3" : "")
              }
            >
              <item.icon className="md:w-6 w-4" />
              <span className={!isExpanded ? "hidden" : "block"}>
                {item.link}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Navbarr;
