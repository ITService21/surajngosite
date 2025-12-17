import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useModal } from "../../Context/ModalContext";

const WomenEmpowerment = () => {
  const { isAnyModalOpen, openFormModal } = useModal();

  const programs = [
    {
      title: "Skill Development Training",
      description: "Vocational training in tailoring, embroidery, handicrafts, beauty services, and other marketable skills for self-employment.",
      icon: "✂️",
      stats: "100+ Women Trained"
    },
    {
      title: "Financial Literacy Programs",
      description: "Teaching savings, banking, budgeting, and investment basics to help women manage finances and plan for the future.",
      icon: "💰",
      stats: "100+ Women Educated"
    },
    {
      title: "Self-Help Groups (SHGs)",
      description: "Creating and supporting women's self-help groups for collective savings, micro-lending, and mutual support.",
      icon: "👭",
      stats: "100+ SHGs Formed"
    },
    // {
    //   title: "Entrepreneurship Support",
    //   description: "Mentoring, training, and seed support for women to start their own small businesses and micro-enterprises.",
    //   icon: "🏪",
    //   stats: "10+ Businesses Started"
    // },
    {
      title: "Health & Hygiene Awareness",
      description: "Women's health education, menstrual hygiene awareness, and reproductive health programs in rural areas.",
      icon: "🩺",
      stats: "100+ Women Reached"
    },
    {
      title: "Legal Rights Education",
      description: "Awareness about legal rights, domestic violence laws, property rights, and protection mechanisms for women.",
      icon: "⚖️",
      stats: "100+ Women Empowered"
    },
                    ];
                    
                    return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
                        <motion.div
          className="relative rounded-3xl overflow-hidden mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Women Empowerment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 to-purple-900/60"></div>
          </div>
          <div className="relative z-10 py-20 px-8 text-white text-center">
            <span className="text-6xl mb-4 block">👩</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "Quicksand, sans-serif" }}>
              Women Empowerment
            </h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto" style={{ fontFamily: "Nunito, sans-serif" }}>
              When women rise, families rise. Nearly 50% of rural women lack steady livelihood opportunities.
              We&apos;re working to change that through skill development and financial independence.
            </p>
          </div>
        </motion.div>

        {/* Stats Banner */}
                        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { value: "100+", label: "Women Empowered", icon: "👩" },
            { value: "100+", label: "Self-Help Groups", icon: "👭" },
            { value: "100+", label: "Businesses Started", icon: "🏪" },
            { value: "100+", label: "Villages Reached", icon: "🏘️" },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-pink-100">
              <span className="text-3xl mb-2 block">{stat.icon}</span>
              <div className="text-2xl font-bold text-pink-600" style={{ fontFamily: "Quicksand, sans-serif" }}>{stat.value}</div>
              <div className="text-gray-600 text-sm" style={{ fontFamily: "Nunito, sans-serif" }}>{stat.label}</div>
            </div>
          ))}
                    </motion.div>
                    
        {/* Quote Section */}
        <motion.div
          className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 mb-16 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-4xl mb-4 block">💪</span>
          <blockquote className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: "Quicksand, sans-serif" }}>
            &ldquo;Empower a woman, you empower a family. Empower a family, you empower a community.&rdquo;
          </blockquote>
          <p className="text-gray-600" style={{ fontFamily: "Nunito, sans-serif" }}>— Team Pitama India</p>
            </motion.div>

        {/* Programs Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "Quicksand, sans-serif" }}>
            <span className="text-gray-800">Our </span>
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Programs</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
                        <motion.div
                            key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <span className="text-4xl mb-4 block">{program.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: "Quicksand, sans-serif" }}>
                  {program.title}
                            </h3>
                <p className="text-gray-600 text-sm mb-4" style={{ fontFamily: "Nunito, sans-serif" }}>
                  {program.description}
                </p>
                {/* <div className="bg-pink-50 text-pink-700 px-3 py-2 rounded-lg text-sm font-semibold inline-block">
                  {program.stats}
                                    </div> */}
              </motion.div>
                                ))}
                            </div>
                        </div>

        {/* Success Stories Teaser */}
            <motion.div 
          className="bg-white rounded-3xl p-8 mb-16 shadow-lg border border-pink-100"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <span className="text-5xl mb-4 block">🌟</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: "Quicksand, sans-serif" }}>
              Success Stories
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto" style={{ fontFamily: "Nunito, sans-serif" }}>
              From homemakers to entrepreneurs - witness the incredible journeys of women who transformed their lives through our programs.
            </p>
            <Link to="/blog" className="text-pink-600 font-bold hover:underline">
              Read Inspiring Stories →
            </Link>
                                </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
          className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Quicksand, sans-serif" }}>
            Empower a Woman Today 💜
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "Nunito, sans-serif" }}>
            Support our women empowerment programs. Volunteer as a trainer, donate for skill development, or sponsor a woman entrepreneur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
              onClick={() => !isAnyModalOpen && openFormModal()}
              className="px-8 py-4 bg-white text-pink-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
                        >
              👩 Support a Woman
                        </button>
            <Link
              to="/services/all"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-pink-600 transition-all"
            >
              View All Initiatives
            </Link>
          </div>
                    </motion.div>
                </div>
    </div>
    );
};

export default WomenEmpowerment;
