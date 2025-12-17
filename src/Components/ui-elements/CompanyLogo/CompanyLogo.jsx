import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const CompanyLogo = () => {
  return (
    <Link to="/home" className="flex items-center group">
      {/* Logo Container - 85% of header height on mobile */}
      <div className="relative mr-3 sm:mr-4">
        {/* Circular Logo - Responsive sizing */}
        <motion.div 
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-[70px] xl:h-[70px] rounded-full overflow-hidden border-2 border-emerald-500 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 bg-white flex items-center justify-center"
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.4 }
          }}
          animate={{
            boxShadow: [
              "0 4px 20px rgba(34, 197, 94, 0.3)",
              "0 8px 30px rgba(34, 197, 94, 0.5)",
              "0 4px 20px rgba(34, 197, 94, 0.3)"
            ]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {/* Pitama India Logo from public/image folder */}
          <img 
            src="/image/pitamaindialogo.png" 
            alt="Pitama India Logo" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Animated Green Ring */}
        <motion.div 
          className="absolute inset-0 rounded-full border-2 border-emerald-500/30 group-hover:border-emerald-500/60 transition-all duration-300 group-hover:scale-110"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Pulsing Glow Effect */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-emerald-500/20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Animated Text Container */}
      <motion.div 
        className="text-left"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
              {/* Organization Name with Advanced Animation */}
              <motion.h1 
          className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300 leading-tight"
          whileHover={{ 
            scale: 1.05,
            color: "#6ee7b7"
          }}
          animate={{
            textShadow: [
              "0 0 0px rgba(34, 197, 94, 0)",
              "0 0 10px rgba(34, 197, 94, 0.3)",
              "0 0 0px rgba(34, 197, 94, 0)"
            ]
          }}
          transition={{
            textShadow: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: "linear-gradient(90deg, #ffffff, #6ee7b7, #ffffff)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Pitama India
          </motion.span>
        </motion.h1>

        {/* Slogan ABOVE the logo name */}
        <motion.p 
          className="text-[8px] sm:text-[10px] md:text-xs text-emerald-400 font-medium tracking-wide group-hover:text-emerald-300 transition-colors duration-300 leading-tight mb-0.5"
          whileHover={{ 
            scale: 1.02,
            color: "#6ee7b7"
          }}
          animate={{
            y: [0, -1, 0]
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <motion.span
            animate={{
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Greening India, Empowering Lives
          </motion.span>
        </motion.p>
      </motion.div>
    </Link>
  );
};
