import { motion } from "framer-motion";
import PropTypes from "prop-types";

const donationImpact = [
  { amount: "₹500", impact: "Plant 5 trees", icon: "🌱" },
  { amount: "₹1,000", impact: "Feed 10 stray animals for a week", icon: "🐕" },
  { amount: "₹2,500", impact: "Provide school supplies for 5 children", icon: "📚" },
  { amount: "₹5,000", impact: "Support a woman's skill training for a month", icon: "👩‍💼" },
  { amount: "₹10,000", impact: "Sponsor a child's education for 3 months", icon: "🎓" },
  { amount: "₹25,000", impact: "Fund a community environmental drive", icon: "🌍" }
];

const bankDetails = {
  accountName: "PITAMA PLANTATION AND SOCIAL EMPOWERMENT COUNCIL OF INDIA",
  bank: "IDFC FIRST Bank",
  upiId: "pitamaplantation1@idfcbank"
};

export default function Donation({ className = "" }) {
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
            className="absolute text-4xl"
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            style={{
              left: `${10 + i * 9}%`,
              top: `${70 + (i % 3) * 10}%`,
            }}
          >
            💚
          </motion.div>
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
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          💖
        </motion.div>
        
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="text-gray-900">Make a </span>
          <span className="bg-gradient-to-r from-pitama-green-500 via-pitama-teal-500 to-pitama-green-500 bg-clip-text text-transparent">
            Donation
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Your generosity can transform lives. Every contribution, no matter how small, 
          helps us create a greener, more compassionate India.
        </motion.p>
      </motion.div>

      {/* QR Code Section */}
      <motion.div 
        className="relative z-10 mb-16"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* QR Code Side */}
            <div className="bg-gradient-to-br from-pitama-green-500 to-pitama-teal-500 p-8 md:p-12 flex flex-col items-center justify-center text-white">
              <motion.div 
                className="text-4xl mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📱
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Scan to Donate</h2>
              <p className="text-white/90 text-center mb-6">
                Use any UPI app to scan this QR code and make your contribution
              </p>
              
              {/* QR Code Image */}
              <motion.div 
                className="bg-white p-4 rounded-2xl shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/image/qacodeandbankdetails.jpeg" 
                  alt="Pitama India Donation QR Code" 
                  className="w-64 h-64 md:w-80 md:h-80 object-contain"
                />
              </motion.div>
            </div>

            {/* Bank Details Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bank Transfer Details</h3>
              
              <div className="space-y-6">
                <div className="bg-pitama-green-50 p-4 rounded-xl border border-pitama-green-100">
                  <p className="text-sm text-gray-500 mb-1">Account Name</p>
                  <p className="text-lg font-semibold text-gray-900">{bankDetails.accountName}</p>
                </div>
                
                <div className="bg-pitama-green-50 p-4 rounded-xl border border-pitama-green-100">
                  <p className="text-sm text-gray-500 mb-1">Bank</p>
                  <p className="text-lg font-semibold text-gray-900">{bankDetails.bank}</p>
                </div>
                
                <div className="bg-pitama-green-50 p-4 rounded-xl border border-pitama-green-100">
                  <p className="text-sm text-gray-500 mb-1">UPI ID</p>
                  <p className="text-lg font-semibold text-pitama-green-600">{bankDetails.upiId}</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <p className="font-semibold text-amber-800">After Donation</p>
                    <p className="text-sm text-amber-700">
                      Please share your transaction details with us on WhatsApp 
                      <a href="https://wa.me/917065999599" className="font-semibold hover:underline"> +91 7065999599</a> for acknowledgment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Impact Section */}
      <motion.div 
        className="relative z-10 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Your <span className="text-pitama-green-600">Impact</span>
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          See how your donation can make a difference
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {donationImpact.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <motion.div 
                className="text-4xl mb-3"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
              >
                {item.icon}
              </motion.div>
              <div className="text-2xl font-bold text-pitama-green-600 mb-2">{item.amount}</div>
              <p className="text-gray-600">{item.impact}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Trust Section */}
      <motion.div 
        className="relative z-10 bg-gradient-to-r from-pitama-green-500 to-pitama-teal-500 rounded-3xl p-8 md:p-12 text-white text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div 
          className="text-5xl mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🙏
        </motion.div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Thank You for Your Generosity</h2>
        <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
          Every rupee you donate goes directly towards our initiatives. We maintain complete transparency 
          in our operations and ensure that your contribution creates maximum impact. 
          Together, we are building a better tomorrow for India.
        </p>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <motion.a
            href="tel:+917065999599"
            className="px-8 py-4 bg-white text-pitama-green-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📞 Call: +91 7065999599
          </motion.a>
          <motion.a
            href="https://wa.me/917065999599"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-pitama-green-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            💬 WhatsApp Us
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

Donation.propTypes = {
  className: PropTypes.string,
};

