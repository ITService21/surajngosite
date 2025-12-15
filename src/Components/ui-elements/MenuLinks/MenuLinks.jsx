import { SubLinksBox } from "./LinkSubItems";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export const MenuLinks = ({ menuLinks }) => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef(null);
  
  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <ul ref={menuRef} className="flex items-center space-x-1">
      {menuLinks?.map((menuLink, index) => (
        <motion.div 
          className="relative group" 
          key={menuLink?.name}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2003, delay: index * 0.1 }}
        >
          <motion.li 
            className="relative"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className={`relative flex items-center px-4 py-3 text-sm font-semibold text-white transition-all duration-200 rounded-lg cursor-pointer ${
                activeDropdown === index ? 'text-pitama-green-300 bg-white/10' : 'group-hover:text-pitama-green-300'
              } ${menuLink?.link ? 'hover:bg-white/10' : ''}`}
              onClick={() => {
                if (Array.isArray(menuLink?.subLinks) && menuLink?.subLinks?.length > 0) {
                  handleDropdownToggle(index);
                } else if (menuLink?.link) {
                  navigate(menuLink.link);
                  // Scroll to top when navigating
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pitama-green-500/20 to-pitama-teal-500/20 rounded-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: activeDropdown === index ? 1 : 0.8, 
                  opacity: activeDropdown === index ? 1 : 0 
                }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              
              {/* Text Content */}
              <span className="relative z-10 flex items-center md:text-[1vw]">
                {menuLink?.name}
                {Array?.isArray(menuLink?.subLinks) &&
                  menuLink?.subLinks?.length !== 0 && (
                    <motion.div 
                      className="ml-2"
                      animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDownIcon className="w-4 h-4" />
                    </motion.div>
                  )}
              </span>
              
              {/* Animated Underline */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pitama-green-500 to-pitama-teal-500"
                initial={{ width: 0 }}
                animate={{ width: activeDropdown === index ? "100%" : 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.li>
          
          {/* Dropdown Menu */}
          {Array.isArray(menuLink?.subLinks) &&
            menuLink?.subLinks?.length !== 0 && (
              <motion.div
                className="absolute top-full left-0"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ 
                  opacity: activeDropdown === index ? 1 : 0,
                  y: activeDropdown === index ? 0 : 10,
                  scale: activeDropdown === index ? 1 : 0.95
                }}
                transition={{ duration: 0.2 }}
                style={{ 
                  visibility: activeDropdown === index ? 'visible' : 'hidden',
                  pointerEvents: activeDropdown === index ? 'auto' : 'none'
                }}
              >
                <SubLinksBox 
                  subLinks={menuLink?.subLinks} 
                  onLinkClick={() => setActiveDropdown(null)}
                />
              </motion.div>
            )}
        </motion.div>
      ))}
    </ul>
  );
};

MenuLinks.propTypes = {
  menuLinks: PropTypes.array.isRequired,
};
