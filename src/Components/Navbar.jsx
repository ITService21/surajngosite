import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { CompanyLogo } from "./ui-elements/CompanyLogo/CompanyLogo";
import { HamburgerButton } from "./ui-elements/HamburgerButton/HamburgerButton";
import { MenuLinks } from "./ui-elements/MenuLinks/MenuLinks";
import { MobileMenu } from "./ui-elements/MobileMenu/MobileMenu";
import { NavbarLinks } from "./../Data/navbar-links.js";
import { useModal } from "../Context/ModalContext";

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openFormModal, isAnyModalOpen } = useModal();
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="relative z-50">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2001 }}
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-xl"
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -30, 20, 0],
                scale: [0.8, 1.2, 0.9, 0.8],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: `${-20 + i * 10}%`,
              }}
            />
          ))}
        </div>
        
        {/* Solid Background Overlay */}
        <div className="absolute inset-0 bg-emerald-900" />
      </motion.div>

      {/* Main Navbar */}
      <motion.nav 
        className="fixed top-0 left-0 w-full z-50 bg-emerald-900 shadow-2xl border-b border-white/10 transition-all duration-300"
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2004, ease: [0.68, -0.55, 0.265, 1.55] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
            
            {/* Logo Section */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <CompanyLogo />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-1">
                <MenuLinks menuLinks={NavbarLinks} />
              </div>
            </div>

            {/* CTA Button */}
            <motion.div 
              className="hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2004, delay: 0.3 }}
            >
              <motion.button
                onClick={() => {
                  if (!isAnyModalOpen) {
                    openFormModal();
                  }
                }}
                className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-semibold rounded-full text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                🌱 Join Us
              </motion.button>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <HamburgerButton
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu 
              menuLinks={NavbarLinks} 
              onClose={() => setIsMobileMenuOpen(false)}
              onGetStarted={() => {
                if (!isAnyModalOpen) {
                  openFormModal();
                }
              }}
            />
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}

export default Navbar;
