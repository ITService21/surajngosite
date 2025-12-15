import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

export const SubLinksBox = ({ subLinks, onLinkClick }) => {
  const [activeLink, setActiveLink] = useState(null);
  
  const handleLinkClick = (index) => {
    setActiveLink(index);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      if (onLinkClick) onLinkClick();
    }, 100);
  };
  
  return (
    <motion.div 
      className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-md shadow-2xl z-50 rounded-2xl overflow-hidden border border-white/20"
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.15 }}
    >
      {/* Header */}
      <div className="px-6 py-4 bg-gradient-to-r from-pitama-green-500/10 to-pitama-teal-500/10 border-b border-gray-200/50">
        <h3 className="text-sm font-semibold text-gray-700">Quick Links</h3>
      </div>
      
      <ul className="py-2">
        {subLinks?.map((subLink, index) => {
          const Icon = subLink?.icon;
          const isActive = activeLink === index;
          
          return (
            <motion.li 
              key={subLink.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15, delay: index * 0.03 }}
            >
              <motion.div
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <Link
                  to={subLink.link}
                  onClick={() => handleLinkClick(index)}
                  className={`flex items-center px-6 py-4 transition-all duration-200 group relative overflow-hidden ${
                    isActive 
                      ? 'text-pitama-green-600 bg-gradient-to-r from-pitama-green-50 to-pitama-teal-50' 
                      : 'text-gray-700 hover:text-pitama-green-600'
                  }`}
                >
                  {/* Active Background */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pitama-green-500/10 to-pitama-teal-500/10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  
                  {/* Hover Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pitama-green-500/5 to-pitama-teal-500/5 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Icon */}
                  {Icon && (
                    <motion.span 
                      className={`mr-4 text-xl transition-colors duration-200 relative z-10 ${
                        isActive 
                          ? 'text-pitama-green-500' 
                          : 'text-gray-500 group-hover:text-pitama-green-500'
                      }`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Icon />
                    </motion.span>
                  )}
                  
                  {/* Text */}
                  <span className={`text-sm font-semibold relative z-10 transition-colors duration-200 ${
                    isActive 
                      ? 'text-pitama-green-600' 
                      : 'group-hover:text-pitama-green-600'
                  }`}>
                    {subLink.name}
                  </span>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-1/2 w-1 h-6 bg-gradient-to-b from-pitama-green-500 to-pitama-teal-500 rounded-r-full"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  
                  {/* Arrow */}
                  <motion.div
                    className={`ml-auto transition-all duration-200 ${
                      isActive 
                        ? 'opacity-100 text-pitama-green-500' 
                        : 'opacity-0 group-hover:opacity-100'
                    }`}
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.li>
          );
        })}
      </ul>
      
      {/* Footer */}
      <div className="px-6 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200/50">
        <p className="text-xs text-gray-500 text-center">Explore all our services</p>
      </div>
    </motion.div>
  );
};

SubLinksBox.propTypes = {
  subLinks: PropTypes.array.isRequired,
  onLinkClick: PropTypes.func,
};
