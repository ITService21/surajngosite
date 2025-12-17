import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useCTAModal } from "../../hooks/useCTAModal";
import { useModal } from "../../Context/ModalContext";

// Community Development Programs data
const developmentPrograms = [
  {
    title: "Food Distribution",
    description: "Regular food distribution drives to ensure no one in our community goes hungry.",
    features: [
      "Daily meal programs",
      "Festival food distribution",
      "Community kitchens",
      "Ration kit distribution",
      "School mid-day meals",
      "Migrant worker support"
    ],
    icon: "🍱",
    impact: "50000+ meals served",
  },
  {
    title: "Clothing Drives",
    description: "Collecting and distributing clothes to those in need, especially during winters and festivals.",
    features: [
      "Winter clothing campaigns",
      "New clothes for festivals",
      "School uniform distribution",
      "Blanket distribution drives",
      "Clothing donation collection",
      "Tailoring skill training"
    ],
    icon: "👕",
    impact: "20000+ clothes distributed",
  },
  {
    title: "Elderly Care",
    description: "Supporting senior citizens with healthcare, companionship, and essential services.",
    features: [
      "Regular health check-ups",
      "Companionship programs",
      "Daily essentials support",
      "Medicine assistance",
      "Old age home visits",
      "Emergency helpline"
    ],
    icon: "👴",
    impact: "1000+ seniors supported",
  },
  {
    title: "Rural Development",
    description: "Empowering rural communities through infrastructure, skill development, and sustainable practices.",
    features: [
      "Village infrastructure projects",
      "Clean water initiatives",
      "Toilet construction drives",
      "Solar lighting projects",
      "Agricultural training",
      "Self-help group formation"
    ],
    icon: "🏘️",
    impact: "25+ villages impacted",
  },
  {
    title: "Youth Volunteer Network",
    description: "Building a strong network of young volunteers to drive social change in communities.",
    features: [
      "Youth leadership programs",
      "Volunteer training workshops",
      "Campus ambassador program",
      "Social internships",
      "Community service drives",
      "Youth forums & events"
    ],
    icon: "🙋",
    impact: "500+ active volunteers",
  }
];

// Development focus areas
const developmentFocusAreas = [
  {
    icon: "🏠",
    title: "Basic Needs",
    description: "Ensuring access to food, clothing, and shelter for all."
  },
  {
    icon: "🌾",
    title: "Rural Empowerment",
    description: "Sustainable development of rural communities."
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Social Welfare",
    description: "Supporting vulnerable sections of society."
  },
  {
    icon: "🤝",
    title: "Volunteerism",
    description: "Building a culture of service and giving back."
  }
];

export default function CommunityDevelopment({ className = "" }) {
  const { ctaRef } = useCTAModal();
  const { isAnyModalOpen, openFormModal } = useModal();

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
              "radial-gradient(circle at 30% 40%, rgba(34,197,94,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(74,222,128,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 60%, rgba(74,222,128,0.15) 0%, transparent 50%), radial-gradient(circle at 30% 40%, rgba(34,197,94,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 40%, rgba(34,197,94,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(74,222,128,0.15) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 bg-gradient-to-r from-pitama-green-400/20 to-pitama-teal-400/20 rounded-lg transform rotate-45"
            animate={{
              x: [0, 80, -40, 0],
              y: [0, -60, 30, 0],
              rotate: [45, 90, 0, 45],
              scale: [0.8, 1.3, 0.9, 0.8],
            }}
            transition={{
              duration: 18 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
            style={{
              left: `${15 + i * 10}%`,
              top: `${25 + i * 7}%`,
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <motion.div 
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.15 }}
      >
        <motion.div 
          className="text-6xl sm:text-8xl mb-6"
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          🏘️
        </motion.div>
        
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="text-gray-900">Community </span>
          <span className="bg-gradient-to-r from-pitama-green-500 via-pitama-teal-500 to-pitama-green-500 bg-clip-text text-transparent">
            Development
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Building stronger, more resilient communities through, welfare programs, 
          and sustainable development initiatives.
        </motion.p>
      </motion.div>

      {/* Programs Grid */}
      <motion.div 
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.15 }}
      >
        {developmentPrograms.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="text-4xl mb-4">{program.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">{program.description}</p>
            
            <div className="space-y-2 mb-4">
              {program.features.slice(0, 3).map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-2 text-xs text-gray-700">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-pitama-green-500 to-pitama-teal-500 rounded-full"></div>
                  {feature}
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-pitama-green-50 to-pitama-teal-50 p-3 rounded-lg border border-pitama-green-100">
              <div className="text-xs font-semibold text-pitama-green-600">Impact</div>
              <div className="text-sm font-bold text-gray-800">{program.impact}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Focus Areas Section */}
      <motion.div 
        className="relative z-10 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.15 }}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Our Focus Areas
        </motion.h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {developmentFocusAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="text-center p-6 bg-white rounded-2xl border border-pitama-green-100 shadow-lg"
              whileHover={{ scale: 1.02, y: -3 }}
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        ref={ctaRef}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="relative bg-white rounded-3xl p-12 text-center shadow-2xl border-2 border-pitama-green-200"
      >
        <motion.div 
          className="text-5xl mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          💪
        </motion.div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-pitama-green-600 to-pitama-teal-600 bg-clip-text text-transparent">
          Be Part of the Change!
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Join our environmental conservation initiatives and help us build a stronger, 
          more compassionate society. Your contribution matters!
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.button
            onClick={() => { if (!isAnyModalOpen) { openFormModal(); } }}
            className="px-10 py-4 bg-gradient-to-r from-pitama-green-500 to-pitama-teal-500 text-white font-bold rounded-xl hover:from-pitama-green-600 hover:to-pitama-teal-600 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Volunteer With Us
          </motion.button>
          <motion.a
            href="tel:+917065999599"
            className="px-10 py-4 border-2 border-pitama-green-500 text-pitama-green-600 font-bold rounded-xl hover:bg-pitama-green-50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call: +91 7065999599
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

CommunityDevelopment.propTypes = {
  className: PropTypes.string,
};


