import { motion } from "framer-motion";
import PropTypes from "prop-types";

const termsSection = [
  {
    title: "1. Introduction",
    content: "Welcome to Pitama India (pitamaindia.org). By accessing and using our website and services, you agree to be bound by these Terms of Agreement. Please read them carefully before proceeding."
  },
  {
    title: "2. Website Information Disclaimer",
    content: "The information presented on this website is currently under development and being actively updated. All figures, statistics, and data mentioned are subject to change as we continue to refine and update our records. We strive for accuracy but cannot guarantee that all information is complete or current at any given time.",
    isImportant: true
  },
  {
    title: "3. Our Mission",
    content: "Pitama India is a non-governmental organization dedicated to environmental conservation, women empowerment, animal welfare, and children's education. All activities and initiatives are conducted in accordance with applicable Indian laws and regulations."
  },
  {
    title: "4. Donations and Contributions",
    content: "All donations made to Pitama India are voluntary and will be used solely for the organization's charitable purposes. We maintain transparency in our financial operations and provide acknowledgment for all contributions received."
  },
  {
    title: "5. Volunteer Participation",
    content: "Volunteers participating in Pitama India's programs do so at their own risk. While we take all necessary precautions to ensure safety, the organization is not liable for any injuries or damages incurred during volunteer activities."
  },
  {
    title: "6. Intellectual Property",
    content: "All content on this website, including text, images, logos, and graphics, is the property of Pitama India unless otherwise stated. Unauthorized use, reproduction, or distribution of this content is prohibited."
  },
  {
    title: "7. Privacy Policy",
    content: "We respect your privacy and are committed to protecting your personal information. Any data collected through this website will be used only for the purposes stated and will not be shared with third parties without your consent."
  },
  {
    title: "8. Changes to Terms",
    content: "Pitama India reserves the right to modify these terms at any time. Changes will be effective immediately upon posting on this website. Your continued use of the website constitutes acceptance of the modified terms."
  },
  {
    title: "9. Contact Information",
    content: "For any questions or concerns regarding these terms, please contact us at info@pitamaindia.org or call +91 7065999599."
  }
];

export default function TermsOfAgreement({ className = "" }) {
  return (
    <section 
      className={`mt-[40px] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden ${className}`} 
      style={{ backgroundColor: '#F0FDF4' }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(34,197,94,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, rgba(74,222,128,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, rgba(34,197,94,0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
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
          📜
        </motion.div>
        
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="text-gray-900">Terms of </span>
          <span className="bg-gradient-to-r from-pitama-green-500 via-pitama-teal-500 to-pitama-green-500 bg-clip-text text-transparent">
            Agreement
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Please read these terms carefully before using our website and services.
        </motion.p>
      </motion.div>

      {/* Important Notice Banner */}
      <motion.div 
        className="relative z-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 mb-12 text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="flex items-start gap-4">
          <motion.div 
            className="text-4xl"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⚠️
          </motion.div>
          <div>
            <h3 className="text-xl font-bold mb-2">Important Notice</h3>
            <p className="text-white/90 leading-relaxed">
              This website information is still under process and we are actively updating the figures and data. 
              All statistics, impact numbers, and counts mentioned on this website are being verified and may change 
              as we continue to document our work accurately. We appreciate your understanding as we work to provide 
              the most accurate information possible.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Terms Sections */}
      <motion.div 
        className="relative z-10 space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        {termsSection.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
            className={`bg-white rounded-2xl p-6 shadow-lg border ${
              section.isImportant 
                ? 'border-amber-300 bg-amber-50' 
                : 'border-gray-100'
            }`}
          >
            <h2 className={`text-xl font-bold mb-3 ${
              section.isImportant ? 'text-amber-700' : 'text-gray-900'
            }`}>
              {section.title}
              {section.isImportant && (
                <span className="ml-2 text-sm bg-amber-500 text-white px-2 py-1 rounded-full">
                  Important
                </span>
              )}
            </h2>
            <p className="text-gray-600 leading-relaxed">{section.content}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Last Updated */}
      <motion.div 
        className="relative z-10 mt-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <p className="text-gray-500 text-sm">
          Last Updated: December 2024
        </p>
        <p className="text-gray-600 mt-4">
          By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Agreement.
        </p>
      </motion.div>
    </section>
  );
}

TermsOfAgreement.propTypes = {
  className: PropTypes.string,
};

