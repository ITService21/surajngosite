import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();
  const faqData = [
    {
      question: "What is Pitama India and what do you do?",
      answer:
        "Pitama India is a non-profit organization dedicated to creating a sustainable, compassionate, and equitable India. We work on four key pillars: Environmental Conservation (tree plantation, cleanliness drives), Animal Welfare (rescue and rehabilitation), Women Empowerment (skill development and livelihood training), and Education for underprivileged children.",
    },
    {
      question: "How can I volunteer with Pitama India?",
      answer:
        "We welcome volunteers from all walks of life! You can join our initiatives by filling out the volunteer form on our website. Based on your interests and availability, we'll connect you with suitable programs. Whether it's tree plantation drives, animal rescue, teaching, or event organization - there's something for everyone.",
    },
    {
      question: "Can I donate to support your initiatives?",
      answer:
        "Yes! Your donations directly support our programs. You can donate online through our website or contact us for bank transfer details. All donations are eligible for tax exemption under Section 80G. We maintain complete transparency and regularly share impact reports with our donors.",
    },
    {
      question: "Do you work with corporate partners for CSR?",
      answer:
        "Absolutely! We partner with companies for CSR initiatives aligned with their values. Our programs in environmental conservation, education, and community development make excellent CSR projects. We provide comprehensive impact reports and can customize programs to meet your organization's goals.",
    },
    {
      question: "How do you ensure transparency and accountability?",
      answer:
        "Transparency is core to our values. We publish annual reports, maintain audited financial statements, and regularly share updates on our website and social media. Donors receive detailed reports on how their contributions are utilized. We're registered as a Section 8 company with all necessary government certifications.",
    },
    {
      question: "What is your animal welfare program about?",
      answer:
        "Our animal welfare program focuses on rescue, treatment, and rehabilitation of stray and injured animals. We operate 24/7 rescue helplines, organize vaccination and sterilization camps, run shelter homes, and facilitate adoptions. We also conduct awareness campaigns about animal rights and compassion.",
    },
    {
      question: "How does your women empowerment program work?",
      answer:
        "We provide skill development training in tailoring, handicrafts, and other vocations. We help women form self-help groups, provide financial literacy education, and support them in starting small businesses. Our goal is to help rural women achieve financial independence and dignity.",
    },
    {
      question: "Can schools and colleges partner with you?",
      answer:
        "Yes! We love partnering with educational institutions. We conduct tree plantation drives, environmental awareness workshops, and volunteer programs at schools and colleges. Students can earn community service hours while making real impact. Contact us to organize an event at your institution.",
    },
    {
      question: "Where are you currently operating?",
      answer:
        "We're headquartered in New Delhi and have active programs across multiple states in India. Our initiatives span urban and rural areas. We're constantly expanding our reach and welcome volunteers and partners from all regions who want to create change in their communities.",
    },
    {
      question: "How can I stay updated on your activities?",
      answer:
        "Follow us on social media (Facebook, Instagram, Twitter, YouTube) for regular updates, photos, and stories from our programs. You can also subscribe to our newsletter for monthly updates. We share impact stories, upcoming events, and volunteer opportunities regularly.",
    },
    {
      question: "Do you organize events I can participate in?",
      answer:
        "Yes! We regularly organize tree plantation drives, cleanliness campaigns, blood donation camps, awareness walks, and community events. These are open to public participation. Check our website and social media for upcoming events in your area.",
    },
    {
      question: "How can I contact Pitama India?",
      answer:
        "You can reach us through our website contact form, email us at info@pitamaindia.org, or call us at +91 98765 43210. For animal rescue emergencies, we have a dedicated helpline. You can also visit our office in New Delhi. We respond to all inquiries within 24-48 hours.",
    },
  ];

  const questionVariants = {
    closed: {
      rotate: 0,
      transition: { duration: 0.3 },
    },
    open: {
      rotate: 45,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Animated Mesh Background */}
        <motion.div
          className="absolute inset-0 opacity-8"
          animate={{
            background: [
              'radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.06) 0%, transparent 50%)',
              'radial-gradient(circle at 75% 25%, rgba(20, 184, 166, 0.08) 0%, transparent 50%), radial-gradient(circle at 25% 75%, rgba(34, 197, 94, 0.06) 0%, transparent 50%)',
              'radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.06) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating Leaves */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-12"
            style={{
              width: `${30 + i * 8}px`,
              height: `${30 + i * 8}px`,
              background: `linear-gradient(45deg, #22C55E, #14B8A6)`,
              clipPath: 'ellipse(50% 30% at 50% 50%)',
              left: `${8 + i * 11}%`,
              top: `${15 + i * 8}%`,
            }}
            animate={{
              x: [0, 70, -35, 0],
              y: [0, -50, 25, 0],
              rotate: [0, 120, 240, 360],
              scale: [1, 1.3, 0.7, 1.1, 1],
              opacity: [0.12, 0.25, 0.08, 0.18, 0.12]
            }}
            transition={{
              duration: 8 + i * 1.2,
              repeat: Infinity,
              delay: i * 1.1,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Animated Dots Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px', '0px 0px']
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating Hearts */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-lg opacity-15"
            animate={{
              y: [0, -40, 0],
              x: [0, 20, -10, 0],
              scale: [0.8, 1.2, 0.9, 1.1, 0.8],
              opacity: [0.1, 0.2, 0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
            style={{
              left: `${2 + i * 10}%`,
              top: `${10 + i * 8}%`,
            }}
          >
            💚
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2
            className="gap-2 text-4xl md:text-5xl lg:text-6xl font-black mb-6"
            style={{ fontFamily: "Quicksand, sans-serif" }}
          >
            <div className="text-center flex flex-col gap-2 md:gap-4">
              <motion.span 
                className="text-gray-800"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                Frequently Asked
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                Questions 💚
              </motion.span>
            </div>
          </h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Nunito, sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Find answers to common questions about our initiatives and how you can help
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.15 }}
        >
          {faqData.map((faq, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -120 : 120, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.05, 0.46, 0.45, 0.94] }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.01, y: -3, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
              <motion.button
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3
                  className="text-lg md:text-xl font-bold text-gray-800 pr-4"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  {faq.question}
                </h3>
                <motion.div
                  className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white"
                  variants={questionVariants}
                  animate={openIndex === index ? "open" : "closed"}
                >
                  <span className="text-xl font-bold">+</span>
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <motion.div
                        className="border-t border-gray-100 pt-4"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <p
                          className="text-gray-600 leading-relaxed"
                          style={{ fontFamily: "Nunito, sans-serif" }}
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div
            className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.02, y: -3, transition: { duration: 0.3 } }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "Quicksand, sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Still have questions? 💚
            </motion.h3>
            <motion.p
              className="text-gray-600 mb-6"
              style={{ fontFamily: "Nunito, sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Our team is here to help you with any queries about our initiatives and how you can contribute
            </motion.p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: "Nunito, sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/contact-us')}
            >
              🌱 Contact Us Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
