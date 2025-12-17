import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useCTAModal } from "../../hooks/useCTAModal";
import { useModal } from "../../Context/ModalContext";

// Community Health Programs data
const healthPrograms = [
  {
    title: "Health Check-up Camps",
    description: "Organizing free health check-up camps in underserved communities to provide essential medical screenings and consultations.",
    features: [
      "Free general health examinations",
      "Blood pressure & diabetes screening",
      "Eye & dental check-ups",
      "Distribution of free medicines",
      "Health counseling sessions",
      "Referrals to specialists"
    ],
    icon: "🏥",
    impact: "100+ beneficiaries",
  },
  {
    title: "Blood Donation Drives",
    description: "Conducting regular blood donation camps to ensure adequate blood supply for hospitals and emergency situations.",
    features: [
      "Awareness about blood donation",
      "Safe & hygienic donation process",
      "Donor recognition programs",
      "Partnership with blood banks",
      "Emergency blood assistance",
      "Community donor networks"
    ],
    icon: "🩸",
    impact: "2000+ units collected",
  },
  {
    title: "Mental Health Support",
    description: "Providing mental health awareness, counseling services, and support groups to promote emotional well-being.",
    features: [
      "Mental health awareness workshops",
      "Free counseling sessions",
      "Stress management programs",
      "Support groups for anxiety/depression",
      "Youth mental health initiatives",
      "Helpline services"
    ],
    icon: "🧠",
    impact: "1500+ supported",
  },
  {
    title: "Nutrition Programs",
    description: "Addressing malnutrition through nutritional education, supplementary feeding, and community kitchen initiatives.",
    features: [
      "Nutritional education workshops",
      "Supplementary feeding for children",
      "Mid-day meal programs",
      "Kitchen garden training",
      "Anemia prevention programs",
      "Mother & child nutrition"
    ],
    icon: "🥗",
    impact: "3000+ meals served",
  },
  {
    title: "Vaccination Awareness",
    description: "Spreading awareness about immunization and supporting vaccination drives for preventable diseases.",
    features: [
      "Door-to-door awareness campaigns",
      "Vaccination camp support",
      "Myth-busting sessions",
      "Collaboration with health departments",
      "Child immunization tracking",
      "COVID-19 vaccination drives"
    ],
    icon: "💉",
    impact: "10000+ vaccinated",
  },
  {
    title: "Women's Health Initiatives",
    description: "Specialized health programs focusing on women's health, maternal care, and reproductive health awareness.",
    features: [
      "Maternal health check-ups",
      "Menstrual hygiene awareness",
      "Breast cancer screening camps",
      "Antenatal care support",
      "Family planning counseling",
      "Sanitary pad distribution"
    ],
    icon: "👩‍⚕️",
    impact: "4000+ women reached",
  }
];

// Health focus areas
const healthFocusAreas = [
  {
    icon: "❤️",
    title: "Preventive Care",
    description: "Early detection and prevention of diseases through regular screenings."
  },
  {
    icon: "🌿",
    title: "Holistic Wellness",
    description: "Promoting physical, mental, and emotional well-being."
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Community Outreach",
    description: "Bringing healthcare services to remote and underserved areas."
  },
  {
    icon: "📚",
    title: "Health Education",
    description: "Empowering communities with knowledge about healthy living."
  }
];

export default function CommunityHealth({ className = "" }) {
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
              "radial-gradient(circle at 20% 50%, rgba(34,197,94,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(74,222,128,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(74,222,128,0.15) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(34,197,94,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(34,197,94,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(74,222,128,0.15) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {[...Array(10)].map((_, i) => (
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
              left: `${10 + i * 10}%`,
              top: `${20 + i * 7}%`,
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
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          🏥
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
            Health
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Bringing quality healthcare services to underserved communities through 
          health camps, awareness programs, and preventive care initiatives.
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
        {healthPrograms.map((program, index) => (
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
          {healthFocusAreas.map((area, index) => (
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
          🤝
        </motion.div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-pitama-green-600 to-pitama-teal-600 bg-clip-text text-transparent">
          Join Our Health Initiatives!
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Whether you&apos;re a healthcare professional, volunteer, or donor, your support can help us 
          bring quality healthcare to those who need it most.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.button
            onClick={() => { if (!isAnyModalOpen) { openFormModal(); } }}
            className="px-10 py-4 bg-gradient-to-r from-pitama-green-500 to-pitama-teal-500 text-white font-bold rounded-xl hover:from-pitama-green-600 hover:to-pitama-teal-600 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Involved
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

CommunityHealth.propTypes = {
  className: PropTypes.string,
};


