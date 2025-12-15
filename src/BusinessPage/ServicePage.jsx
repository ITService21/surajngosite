import { motion } from "framer-motion";
import { useState } from "react";
import ServiceModal from "../Components/ServiceModal";
import serviceDetails from "../Data/ServiceDetails";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useModal } from "../Context/ModalContext";

const ServicePage = () => {
  const navigate = useNavigate();
  const { isAnyModalOpen, openFormModal } = useModal();
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (serviceName) => {
    const serviceDetail = serviceDetails[serviceName];
    if (serviceDetail) {
      setSelectedService(serviceDetail);
      setIsModalOpen(true);
    }
  };

  const programCategories = [ 
    {
      id: 0,
      name: "PRAKRITI",
      title: "Environmental Conservation",
      icon: "🌳",
      color: "from-emerald-500 to-emerald-600",
      services: [
        {
          name: "Tree Plantation Drives",
          description: "Mass tree plantation campaigns across urban and rural areas",
          icon: "🌱",
        },
        {
          name: "Cleanliness Campaigns",
          description: "Community-driven cleanliness and waste management initiatives",
          icon: "🧹",
        },
        {
          name: "Waste Recycling Programs",
          description: "Promoting recycling and sustainable waste disposal practices",
          icon: "♻️",
        },
        {
          name: "Green Campus Initiative",
          description: "Making schools and colleges eco-friendly and sustainable",
          icon: "🏫",
        },
        {
          name: "Water Conservation",
          description: "Rainwater harvesting and water body restoration projects",
          icon: "💧",
        },
        {
          name: "Climate Awareness",
          description: "Workshops and campaigns on climate change and sustainability",
          icon: "🌍",
        },
      ],
    },
    {
      id: 1,
      name: "JEEVAN",
      title: "Animal Welfare",
      icon: "🐾",
      color: "from-teal-500 to-teal-600",
      services: [
        {
          name: "Animal Rescue Operations",
          description: "24/7 rescue service for injured and distressed animals",
          icon: "🚑",
        },
        {
          name: "Veterinary Care Camps",
          description: "Free medical treatment and vaccination camps for strays",
          icon: "💉",
        },
        {
          name: "Shelter & Rehabilitation",
          description: "Safe shelter homes for rescued and abandoned animals",
          icon: "🏠",
        },
        {
          name: "Adoption Programs",
          description: "Finding loving homes for rescued and rehabilitated animals",
          icon: "❤️",
        },
        {
          name: "Sterilization Drives",
          description: "ABC (Animal Birth Control) programs to manage stray population",
          icon: "🏥",
        },
        {
          name: "Animal Rights Awareness",
          description: "Education campaigns on animal welfare and compassion",
          icon: "📢",
        },
      ],
    },
    {
      id: 2,
      name: "SHAKTI",
      title: "Women Empowerment",
      icon: "👩",
      color: "from-pink-500 to-pink-600",
      services: [
        {
          name: "Skill Development Training",
          description: "Vocational training in tailoring, handicrafts, and more",
          icon: "✂️",
        },
        {
          name: "Financial Literacy Programs",
          description: "Teaching savings, banking, and investment basics",
          icon: "💰",
        },
        {
          name: "Self-Help Groups",
          description: "Creating and supporting women's self-help groups",
          icon: "👭",
        },
        {
          name: "Entrepreneurship Support",
          description: "Helping women start and grow their own businesses",
          icon: "🏪",
        },
        {
          name: "Health & Hygiene Awareness",
          description: "Women's health education and menstrual hygiene programs",
          icon: "🩺",
        },
        {
          name: "Legal Rights Education",
          description: "Awareness about legal rights and protection for women",
          icon: "⚖️",
        },
      ],
    },
    {
      id: 3,
      name: "VIDYA",
      title: "Education for All",
      icon: "📚",
      color: "from-blue-500 to-blue-600",
      services: [
        {
          name: "Free Tuition Centers",
          description: "After-school tutoring for underprivileged children",
          icon: "📝",
        },
        {
          name: "Digital Literacy Programs",
          description: "Computer and internet education for rural youth",
          icon: "💻",
        },
        {
          name: "School Supply Drives",
          description: "Providing books, uniforms, and stationery to needy students",
          icon: "🎒",
        },
        {
          name: "Scholarship Programs",
          description: "Financial support for meritorious underprivileged students",
          icon: "🎓",
        },
        {
          name: "Adult Literacy Classes",
          description: "Teaching reading and writing to adults who missed formal education",
          icon: "📖",
        },
        {
          name: "Career Counseling",
          description: "Guidance for students on career options and opportunities",
          icon: "🎯",
        },
      ],
    },

    {
      id: 4,
      name: "AROGYA",
      title: "Community Health",
      icon: "💚",
      color: "from-green-500 to-green-600",
      services: [
        {
          name: "Health Check-up Camps",
          description: "Free medical check-ups in underserved communities",
          icon: "🩺",
        },
        {
          name: "Blood Donation Drives",
          description: "Organizing regular blood donation camps across regions",
          icon: "🩸",
        },
        {
          name: "Mental Health Support",
          description: "Counseling services and mental health awareness programs",
          icon: "🧠",
        },
        {
          name: "Nutrition Programs",
          description: "Providing nutritious meals to malnourished children",
          icon: "🥗",
        },
        {
          name: "Vaccination Awareness",
          description: "Campaigns promoting childhood and adult vaccinations",
          icon: "💉",
        },
        {
          name: "First Aid Training",
          description: "Basic first aid and emergency response training for communities",
          icon: "🏥",
        },
      ],
    },
    {
      id: 5,
      name: "SAHAYOG",
      title: "Community Development",
      icon: "🤝",
      color: "from-amber-500 to-amber-600",
      services: [
        {
          name: "Disaster Relief",
          description: "Emergency response and relief during natural calamities",
          icon: "🆘",
        },
        {
          name: "Food Distribution",
          description: "Regular meal distribution to homeless and needy families",
          icon: "🍲",
        },
        {
          name: "Clothing Drives",
          description: "Collecting and distributing clothes to those in need",
          icon: "👕",
        },
        {
          name: "Elderly Care Programs",
          description: "Support and companionship for senior citizens",
          icon: "👴",
        },
        {
          name: "Rural Development",
          description: "Infrastructure and livelihood projects in villages",
          icon: "🏘️",
        },
        {
          name: "Youth Volunteer Network",
          description: "Engaging and training youth for community service",
          icon: "🌟",
        },
      ],
    },
  ];


  return (
    <div className="relative py-20 px-4 overflow-hidden">
      
      {/* Enhanced Mobile Background with Color Scheme */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        {/* Mobile-optimized floating shapes with brand colors */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full blur-lg"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Mobile-optimized grid pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #22C55E 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Enhanced mobile particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`mobile-particle-${i}`}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-40 md:opacity-60"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + i * 7}%`,
            }}
          />
        ))}

        {/* Mobile floating elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`mobile-float-${i}`}
            className="absolute opacity-20 md:opacity-30"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${25 + i * 12}%`,
              width: `${30 + i * 10}px`,
              height: `${30 + i * 10}px`,
              background: `linear-gradient(45deg, #22C55E, #14B8A6)`,
              borderRadius: i % 2 === 0 ? "50%" : "20%"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section with Scroll Animation */}
          <motion.div
            className="text-center mb-16 relative"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
        >
          {/* Decorative Elements */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full"></div>

          <motion.div
            className="relative inline-block -mt-[10px] md:mt-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h2
              className="text-4xl flex gap-[10px] md:gap-[14px] lg:gap-[18px] text-normal md:text-6xl lg:text-7xl font-extrabold mb-6 relative"
              style={{ fontFamily: "Quicksand, sans-serif" }}
            >
              <motion.span 
                className="text-gray-800"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                Our
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent animate-gradient"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                Initiatives
              </motion.span>
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {[
              { icon: "🌳", text: "Environment", link: "/services/funding" },
              { icon: "🐾", text: "Animals", link: "/services/certificate" },
              { icon: "👩", text: "Women", link: "/services/marketing" },
              { icon: "📚", text: "Education", link: "/services/education" },
            ].map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.span
                  key={index}
                  className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/50 text-sm font-semibold hover:shadow-xl transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  initial={{ opacity: 0, x: isEven ? -60 : 60, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                <span className="mr-2">{item.icon}</span>
                <Link to={item.link}>
                  {item.text}
                </Link>
              </motion.span>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Category Tabs with Scroll Animation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {programCategories.map((category, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : "bg-white text-gray-700 border border-gray-200 hover:shadow-md"
                }`}
                style={{ fontFamily: "Nunito, sans-serif" }}
                initial={{ opacity: 0, x: isEven ? -80 : 80, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
            );
          })}
        </motion.div>

        {/* Active Category Content with Scroll Animation */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3
              className="text-3xl font-bold mb-2"
              style={{ color: "#000000", fontFamily: "Quicksand, sans-serif" }}
            >
              {programCategories[activeCategory].title}
            </h3>
            <p
              className="text-gray-600"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              {programCategories[activeCategory].name} - Making a difference, one step at a time 💚
            </p>
          </div>
        </motion.div>

        {/* Services Grid with Scroll Animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.15 }}
        >
          {programCategories[activeCategory].services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  x: isEven ? -120 : 120,
                  y: 30
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  y: 0
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.05, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
              {/* Animated Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${programCategories[activeCategory].color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              {/* Floating Animation for Icon */}
              <motion.div
                className="flex items-start justify-between mb-4 relative z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${programCategories[activeCategory].color} flex items-center justify-center text-white text-xl shadow-lg`}
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {programCategories[activeCategory].icon}
                </motion.div>
              </motion.div>

              <motion.h4
                className="text-xl font-bold mb-2 relative z-10 flex items-center gap-2"
                style={{ color: "#000000", fontFamily: "Quicksand, sans-serif" }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-2xl">{service.icon}</span>
                {service.name}
              </motion.h4>

              <motion.p
                className="text-gray-600 mb-4 relative z-10"
                style={{ fontFamily: "Nunito, sans-serif" }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {service.description}
              </motion.p>

              <motion.button
                onClick={() => handleServiceClick(service.name)}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r ${programCategories[activeCategory].color} shadow-lg hover:shadow-xl relative z-10`}
              >
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  Get Involved →
                </motion.span>
              </motion.button>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section with Scroll Animation */}
          <motion.div
            className="mt-16 relative overflow-hidden"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 rounded-3xl">
            {/* Floating Orbs */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full blur-2xl animate-bounce"></div>

            {/* Animated Grid */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: "30px 30px",
                }}
              ></div>
            </div>
          </div>

          <div className="relative z-10 text-center p-8 md:p-12">
            <div>
              <h3
                className="text-[28px] md:text-5xl font-extrabold text-white mb-6"
                style={{ fontFamily: "Quicksand, sans-serif" }}
              >
                <span className="bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
                  Ready to Make a Difference? 💚
                </span>
              </h3>

              <p
                className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Join our movement and be part of the change.
                <span className="text-emerald-400 font-semibold">
                  {" "}
                  Every action counts!
                </span>
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <button
                  onClick={() => { 
                    if (!isAnyModalOpen) {
                      openFormModal();
                    }
                  }}
                  className="px-10 py-5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white font-bold rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 relative overflow-hidden"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  <span className="relative z-10">
                    🌱 Become a Volunteer
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button
                  className="px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-full shadow-2xl hover:bg-white/20 transition-all duration-300 relative overflow-hidden"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                  onClick={() => navigate('/services/all')} 
                >
                  <span className="relative z-10">
                    💚 View All Programs
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
          </motion.div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />

    </div>
  );
};

export default ServicePage;
