import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useModal } from "../../Context/ModalContext";

const AnimalWelfare = () => {
  const { isAnyModalOpen, openFormModal } = useModal();

  const programs = [
    {
      title: "Animal Rescue Operations",
      description: "24/7 rescue service for injured, distressed, and abandoned animals. Our trained team responds quickly to emergency calls.",
      icon: "🚑",
      stats: "5,000+ Animals Rescued"
    },
    {
      title: "Veterinary Care Camps",
      description: "Free medical treatment, vaccinations, and health check-ups for stray and pet animals in underserved communities.",
      icon: "💉",
      stats: "200+ Camps Organized"
    },
    {
      title: "Shelter & Rehabilitation",
      description: "Safe shelter homes for rescued animals where they receive care, treatment, and rehabilitation before adoption or release.",
      icon: "🏠",
      stats: "500+ Animals Sheltered"
    },
    {
      title: "Adoption Programs",
      description: "Finding loving forever homes for rescued and rehabilitated animals through our adoption network and awareness drives.",
      icon: "❤️",
      stats: "2,000+ Successful Adoptions"
    },
    {
      title: "Sterilization Drives",
      description: "ABC (Animal Birth Control) programs to humanely manage stray population while reducing suffering.",
      icon: "🏥",
      stats: "3,000+ Animals Sterilized"
    },
    {
      title: "Animal Rights Awareness",
      description: "Education campaigns in schools, colleges, and communities about animal welfare, rights, and compassion.",
      icon: "📢",
      stats: "10,000+ People Educated"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 pt-24 pb-16">
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
              src="https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Animal Welfare"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-emerald-900/60"></div>
          </div>
          <div className="relative z-10 py-20 px-8 text-white text-center">
            <span className="text-6xl mb-4 block">🐾</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "Quicksand, sans-serif" }}>
              Animal Welfare & Rescue
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto" style={{ fontFamily: "Nunito, sans-serif" }}>
              Compassionate care for our voiceless friends. Over 2 crore stray animals in India need our help.
              Every life matters. Every rescue counts.
            </p>
          </div>
        </motion.div>

        {/* Emergency Helpline */}
        <motion.div
          className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-6 mb-16 text-white text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <span className="text-3xl">🆘</span>
            <div>
              <h3 className="text-xl font-bold" style={{ fontFamily: "Quicksand, sans-serif" }}>Animal Rescue Helpline</h3>
              <p className="text-sm text-red-100">Available 24/7 for emergencies</p>
            </div>
            <a href="tel:+919876543210" className="px-6 py-3 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition-all">
              📞 Call Now
            </a>
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
            { value: "5,000+", label: "Animals Rescued", icon: "🐕" },
            { value: "2,000+", label: "Adoptions", icon: "❤️" },
            { value: "200+", label: "Vet Camps", icon: "💉" },
            { value: "24/7", label: "Rescue Service", icon: "🚑" },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-teal-100">
              <span className="text-3xl mb-2 block">{stat.icon}</span>
              <div className="text-2xl font-bold text-teal-600" style={{ fontFamily: "Quicksand, sans-serif" }}>{stat.value}</div>
              <div className="text-gray-600 text-sm" style={{ fontFamily: "Nunito, sans-serif" }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Programs Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "Quicksand, sans-serif" }}>
            <span className="text-gray-800">Our </span>
            <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">Programs</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100"
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
                <div className="bg-teal-50 text-teal-700 px-3 py-2 rounded-lg text-sm font-semibold inline-block">
                  {program.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Adopt Section */}
        <motion.div
          className="bg-gradient-to-r from-pink-50 to-red-50 rounded-3xl p-8 mb-16 border border-pink-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <span className="text-5xl mb-4 block">🐶❤️🐱</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: "Quicksand, sans-serif" }}>
              Adopt, Don&apos;t Shop!
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto" style={{ fontFamily: "Nunito, sans-serif" }}>
              Give a loving home to a rescued animal. Every adoption saves a life and makes room for another rescue.
            </p>
            <button
              onClick={() => !isAnyModalOpen && openFormModal()}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
            >
              ❤️ Adopt a Pet
            </button>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Quicksand, sans-serif" }}>
            Be Their Voice 🐾
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "Nunito, sans-serif" }}>
            Animals can&apos;t speak for themselves. Be their advocate. Volunteer, foster, donate, or simply spread awareness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => !isAnyModalOpen && openFormModal()}
              className="px-8 py-4 bg-white text-teal-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
            >
              🤝 Volunteer With Us
            </button>
            <Link
              to="/services/all"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-teal-600 transition-all"
            >
              View All Initiatives
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimalWelfare;
