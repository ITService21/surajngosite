import { motion } from "framer-motion";
import PropTypes from "prop-types";

const visionPoints = [
  {
    icon: "🌳",
    title: "A Green India",
    description: "A nation where every community actively participates in environmental conservation, making India a global leader in sustainability."
  },
  {
    icon: "💪",
    title: "Empowered Women",
    description: "A society where every woman has access to opportunities, resources, and support to achieve her full potential."
  },
  {
    icon: "🐕",
    title: "Compassionate Society",
    description: "A world where animals are treated with kindness and respect, with robust systems for their protection and welfare."
  },
  {
    icon: "🎓",
    title: "Education for All",
    description: "A future where quality education is accessible to every child, regardless of their socio-economic background."
  }
];

const futureGoals = [
  { year: "2025", goal: "Plant 100,000 trees across India", icon: "🌱" },
  { year: "2026", goal: "Empower 100 women through skill development", icon: "👩‍💼" },
  { year: "2027", goal: "Establish 50 animal welfare centers", icon: "🏥" },
  { year: "2028", goal: "Provide education support to 25,000 children", icon: "📖" },
  { year: "2030", goal: "Create a sustainable impact in 100 communities", icon: "🌍" }
];

export default function Vision({ className = "" }) {
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
        
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 bg-gradient-to-r from-pitama-green-400/15 to-pitama-teal-400/15 rounded-lg transform rotate-45"
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
              left: `${15 + i * 15}%`,
              top: `${25 + i * 10}%`,
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
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          🔭
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
            Vision
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          To build an India where nature thrives, communities flourish, and every being lives with dignity and purpose.
        </motion.p>
      </motion.div>

      {/* Vision Statement */}
      <motion.div 
        className="relative z-10 bg-white rounded-3xl p-8 md:p-12 mb-16 shadow-2xl border border-pitama-green-100"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="text-center">
          <motion.div 
            className="text-5xl mb-6"
            animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✨
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Future We Envision</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          To build a world where every individual, animal, and community thrives in a healthy, educated, and sustainable environment, where opportunities are accessible to all, nature is preserved, and compassion guides every action.
          </p>
        </div>
      </motion.div>

      {/* Vision Points Grid */}
      <motion.div 
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.15 }}
      >
        {visionPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-gradient-to-br from-pitama-green-50 to-pitama-teal-50 p-8 rounded-2xl border border-pitama-green-100 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="text-5xl mb-4">{point.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{point.title}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{point.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Future Goals Timeline */}
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Roadmap to <span className="text-pitama-green-600">2030</span>
        </h2>
        
        <div className="space-y-6">
          {futureGoals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              whileHover={{ x: 10 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-pitama-green-500 to-pitama-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {goal.year}
              </div>
              <div className="flex items-center gap-4 flex-1">
                <span className="text-3xl">{goal.icon}</span>
                <p className="text-lg font-semibold text-gray-800">{goal.goal}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

Vision.propTypes = {
  className: PropTypes.string,
};

