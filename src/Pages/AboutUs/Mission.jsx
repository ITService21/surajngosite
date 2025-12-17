import { motion } from "framer-motion";
import PropTypes from "prop-types";

const missionPoints = [
  {
    icon: "🌱",
    title: "Environmental Conservation",
    description: "Leading initiatives for waste management, plantation drives, and green campaigns to create a sustainable future for India."
  },
  {
    icon: "👩",
    title: "Women Empowerment",
    description: "Providing skill development programs, livelihood opportunities, and support systems to help women achieve economic independence."
  },
  {
    icon: "🐾",
    title: "Animal Welfare",
    description: "Protecting and caring for animals through rescue operations, shelter programs, and awareness campaigns."
  },
  {
    icon: "📚",
    title: "Quality Education",
    description: "Ensuring access to education for underprivileged children through school enrollment drives, tutoring, and scholarship programs."
  },
  {
    icon: "🌍",
    title: "Sustainable Living",
    description: "Promoting eco-friendly practices and sustainable living habits to reduce environmental impact."
  }
];

export default function Mission({ className = "" }) {
  return (
    <section 
      className={`mt-[40px] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden ${className}`} 
      style={{ backgroundColor: '#F0FDF4' }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(34,197,94,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(74,222,128,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(74,222,128,0.15) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(34,197,94,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(34,197,94,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(74,222,128,0.15) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 bg-gradient-to-r from-pitama-green-400/20 to-pitama-teal-400/20 rounded-full"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 40, 0],
              scale: [0.6, 1.2, 0.8, 0.6],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <motion.div 
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div 
          className="text-6xl sm:text-8xl mb-6"
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          🎯
        </motion.div>
        
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="text-gray-900">Our </span>
          <span className="bg-gradient-to-r from-pitama-green-500 via-pitama-teal-500 to-pitama-green-500 bg-clip-text text-transparent">
            Mission
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          To create a greener, more equitable India by empowering communities, protecting the environment, 
          and nurturing every life with compassion and dedication.
        </motion.p>
      </motion.div>

      {/* Mission Statement */}
      <motion.div 
        className="relative z-10 bg-white rounded-3xl p-8 md:p-12 mb-16 text-center shadow-2xl border-2 border-pitama-green-200"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div 
          className="text-4xl mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎯
        </motion.div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-pitama-green-600 to-pitama-teal-600 bg-clip-text text-transparent">Greening India, Empowering Lives</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Our mission is to create lasting impact by empowering women and communities through education and skill development, protecting and conserving the environment, ensuring the welfare of animals, and supporting underserved populations with initiatives that improve health, nutrition, and opportunities for growth.
        </p>
      </motion.div>

      {/* Mission Points Grid */}
      <motion.div 
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.15 }}
      >
        {missionPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="text-4xl mb-4">{point.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
            <p className="text-gray-600 leading-relaxed">{point.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

Mission.propTypes = {
  className: PropTypes.string,
};

