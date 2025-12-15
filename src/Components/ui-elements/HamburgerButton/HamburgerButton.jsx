import { motion } from "framer-motion";

export const HamburgerButton = ({ isOpen, onClick }) => {
  return (
    <motion.button
      className="relative flex items-center justify-center w-12 h-12 text-white rounded-xl cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2003 }}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pitama-green-500/20 to-pitama-teal-500/20 rounded-xl"
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2003 }}
      />
      
      {/* Hamburger Lines */}
      <div className="relative w-6 h-6">
        <motion.span
          className="absolute top-1 left-0 w-6 h-0.5 bg-white rounded-full"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 8 : 0,
          }}
          transition={{ duration: 0.2003, ease: [0.68, -0.55, 0.265, 1.55] }}
        />
        <motion.span
          className="absolute top-3 left-0 w-6 h-0.5 bg-white rounded-full"
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? -20 : 0,
          }}
          transition={{ duration: 0.2003 }}
        />
        <motion.span
          className="absolute top-5 left-0 w-6 h-0.5 bg-white rounded-full"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
          }}
          transition={{ duration: 0.2003, ease: [0.68, -0.55, 0.265, 1.55] }}
        />
      </div>
      
      {/* Ripple Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-pitama-green-500/50"
        animate={{
          scale: isOpen ? [1, 1.2, 1] : 1,
          opacity: isOpen ? [0.5, 0, 0.5] : 0,
        }}
        transition={{ duration: 0.2004 }}
      />
    </motion.button>
  );
};
