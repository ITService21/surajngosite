import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useModal } from "../../Context/ModalContext";

const AllServices = () => {
  const { isAnyModalOpen, openFormModal } = useModal();

  const initiatives = [
    {
      id: 1,
      title: "Environmental Conservation",
      icon: "🌳",
      description: "Tree plantation drives, cleanliness campaigns, waste recycling programs, water conservation, and climate awareness initiatives.",
      programs: ["Tree Plantation Drives", "Cleanliness Campaigns", "Waste Recycling", "Green Campus Initiative", "Water Conservation", "Climate Awareness"],
      image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/services/funding",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      id: 2,
      title: "Animal Welfare & Rescue",
      icon: "🐾",
      description: "24/7 animal rescue operations, veterinary care camps, shelter homes, adoption programs, and animal rights awareness.",
      programs: ["Animal Rescue Operations", "Veterinary Care Camps", "Shelter & Rehabilitation", "Adoption Programs", "Sterilization Drives", "Animal Rights Awareness"],
      image: "https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/services/certificate",
      color: "from-teal-500 to-teal-600"
    },
    {
      id: 3,
      title: "Women Empowerment",
      icon: "👩",
      description: "Skill development training, financial literacy, self-help groups, entrepreneurship support, and women's health programs.",
      programs: ["Skill Development Training", "Financial Literacy", "Self-Help Groups", "Entrepreneurship Support", "Health & Hygiene Awareness", "Legal Rights Education"],
      image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/services/marketing",
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 4,
      title: "Education for All",
      icon: "📚",
      description: "Free tuition centers, digital literacy programs, school supplies, scholarships, and career counseling for underprivileged children.",
      programs: ["Free Tuition Centers", "Digital Literacy Programs", "School Supply Drives", "Scholarship Programs", "Adult Literacy Classes", "Career Counseling"],
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/services/education",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 5,
      title: "Community Health",
      icon: "💚",
      description: "Health check-up camps, blood donation drives, mental health support, nutrition programs, and vaccination awareness.",
      programs: ["Health Check-up Camps", "Blood Donation Drives", "Mental Health Support", "Nutrition Programs", "Vaccination Awareness", "First Aid Training"],
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/services/all",
      color: "from-green-500 to-green-600"
    },
    {
      id: 6,
      title: "Community Development",
      icon: "🤝",
      description: "Disaster relief, food distribution, clothing drives, elderly care, rural development, and youth volunteer network.",
      programs: ["Disaster Relief", "Food Distribution", "Clothing Drives", "Elderly Care Programs", "Rural Development", "Youth Volunteer Network"],
      image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/contact-us",
      color: "from-amber-500 to-amber-600"
    },
                    ];
                    
                    return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
                        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "Quicksand, sans-serif" }}>
            <span className="text-gray-800">Our </span>
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Initiatives</span>
            <span className="ml-2">💚</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: "Nunito, sans-serif" }}>
            Comprehensive programs designed to create lasting impact across environment, animal welfare, women empowerment, and education.
          </p>
            </motion.div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <motion.div 
              key={initiative.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${initiative.color} opacity-60`}></div>
                <div className="absolute top-4 left-4 text-4xl">{initiative.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3" style={{ fontFamily: "Quicksand, sans-serif" }}>
                  {initiative.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4" style={{ fontFamily: "Nunito, sans-serif" }}>
                  {initiative.description}
                </p>

                {/* Programs List */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {initiative.programs.slice(0, 3).map((program, idx) => (
                    <span key={idx} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full">
                      {program}
                    </span>
                  ))}
                  {initiative.programs.length > 3 && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      +{initiative.programs.length - 3} more
                    </span>
                  )}
                            </div>
                            
                <Link
                  to={initiative.link}
                  className={`w-full block text-center py-3 bg-gradient-to-r ${initiative.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all`}
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

            {/* CTA Section */}
            <motion.div
          className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Quicksand, sans-serif" }}>
            Ready to Make a Difference? 💚
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "Nunito, sans-serif" }}>
            Join our movement and be part of the change. Every action counts!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
              onClick={() => !isAnyModalOpen && openFormModal()}
              className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
                        >
              🌱 Become a Volunteer
                        </button>
            <Link
              to="/contact-us"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-emerald-600 transition-all"
            >
              📧 Contact Us
            </Link>
          </div>
                    </motion.div>
                </div>
    </div>
    );
};

export default AllServices;
