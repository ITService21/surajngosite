import { motion } from "framer-motion";
import PropTypes from "prop-types";

const teamMembers = [
  {
    name: "Suraj Singh",
    role: "Founder",
    description: "Visionary leader dedicated to transforming communities through sustainable initiatives and grassroots activism.",
    icon: "👨‍💼",
    color: "from-pitama-green-500 to-pitama-teal-500"
  },
  {
    name: "Shobhit",
    role: "Treasurer",
    description: "Financial steward ensuring transparent and efficient use of resources for maximum community impact.",
    icon: "💰",
    color: "from-pitama-teal-500 to-pitama-green-500"
  },
  {
    name: "Aman",
    role: "Leading Animal Welfare & Plantation",
    description: "Champion of animal rights and environmental conservation, spearheading plantation drives and animal feeding operations.",
    icon: "🌳",
    color: "from-pitama-green-600 to-pitama-teal-400"
  },
  {
    name: "Vikramaditya",
    role: "Animal Welfare",
    description: "Compassionate advocate for animal protection, coordinating rescue efforts and welfare programs.",
    icon: "🐾",
    color: "from-pitama-teal-400 to-pitama-green-600"
  }
];

export default function OurTeam({ className = "" }) {
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
              "radial-gradient(circle at 25% 45%, rgba(34,197,94,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 55%, rgba(74,222,128,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 75% 55%, rgba(74,222,128,0.15) 0%, transparent 50%), radial-gradient(circle at 25% 45%, rgba(34,197,94,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 25% 45%, rgba(34,197,94,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 55%, rgba(74,222,128,0.15) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12 bg-gradient-to-r from-pitama-green-400/20 to-pitama-teal-400/20 rounded-full"
            animate={{
              x: [0, 60, -30, 0],
              y: [0, -50, 25, 0],
              scale: [0.7, 1.2, 0.8, 0.7],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1,
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + i * 10}%`,
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
          👥
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
            Team
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Meet the passionate individuals driving change at Pitama India. 
          Together, we are committed to creating a greener and more compassionate world.
        </motion.p>
      </motion.div>

      {/* Team Members Grid */}
      <motion.div 
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.15 }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden hover:shadow-3xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -10 }}
          >
            {/* Card Header with Gradient */}
            <div className={`bg-gradient-to-r ${member.color} p-6 text-white`}>
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {member.icon}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-white/90 font-medium">{member.role}</p>
                </div>
              </div>
            </div>
            
            {/* Card Body */}
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed text-lg">{member.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Join Our Team CTA */}
      <motion.div
        className="relative z-10 mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="bg-gradient-to-r from-pitama-green-500 to-pitama-teal-500 rounded-3xl p-8 md:p-12 text-white">
          <motion.div 
            className="text-5xl mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🌟
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to Join Our Team?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
            We are always looking for passionate individuals who share our vision. 
            Volunteer with us and be part of the change!
          </p>
          <motion.a
            href="/contact-us"
            className="inline-block px-8 py-4 bg-white text-pitama-green-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Involved
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

OurTeam.propTypes = {
  className: PropTypes.string,
};

