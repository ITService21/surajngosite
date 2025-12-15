import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const phoneNumber = "+917065999599"; // Pitama India WhatsApp number
  const message = "Hello Pitama India! I'm interested in volunteering/learning more about your initiatives. 🌱";
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-emerald-500 to-green-500 text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulsing Ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-emerald-400"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* WhatsApp Icon */}
      <FaWhatsapp className="relative z-10 text-2xl md:text-3xl" />
      
      {/* Tooltip */}
      <motion.div
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 pointer-events-none"
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
      >
        <span className="text-sm font-semibold">Chat with us! 💚</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-white rotate-45"></div>
      </motion.div>
    </motion.a>
  );
};

export default FloatingWhatsApp;
