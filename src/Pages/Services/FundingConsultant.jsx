import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useModal } from "../../Context/ModalContext";

const EnvironmentalConservation = () => {
  const { isAnyModalOpen, openFormModal } = useModal();

  const programs = [
    {
      title: "Tree Plantation Drives",
      description: "Large-scale tree plantation campaigns across urban and rural areas. We plant native species to restore biodiversity and combat climate change.",
      icon: "🌱",
      stats: "400+ Trees Planted"
    },
    {
      title: "Cleanliness Campaigns",
      description: "Community-driven cleanliness drives in public spaces, water bodies, and residential areas. We organize regular clean-up events with local volunteers.",
      icon: "🧹",
      stats: "10+ Drives Conducted"
    },
    {
      title: "Waste Recycling Programs",
      description: "Promoting waste segregation, recycling awareness, and sustainable waste management practices in communities and institutions.",
      icon: "♻️",
      stats: "50+ Tonnes Recycled"
    },
    {
      title: "Green Campus Initiative",
      description: "Transforming schools and colleges into eco-friendly spaces with gardens, recycling systems, and sustainable practices.",
      icon: "🏫",
      stats: "0 Still figuring it out"
    },
    {
      title: "Water Conservation",
      description: "Rainwater harvesting projects, water body restoration, and awareness programs on water conservation practices.",
      icon: "💧",
      stats: "15+ Water Bodies Restored"
    },
    {
      title: "Climate Awareness",
      description: "Educational workshops, seminars, and campaigns on climate change, sustainability, and eco-friendly lifestyle choices.",
      icon: "🌍",
      stats: "100+ People Educated"
    },
                    ];
                    
                    return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 pt-24 pb-16">
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
              src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Environmental Conservation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-green-900/60"></div>
          </div>
          <div className="relative z-10 py-20 px-8 text-white text-center">
            <span className="text-6xl mb-4 block">🌳</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "Quicksand, sans-serif" }}>
              Environmental Conservation
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto" style={{ fontFamily: "Nunito, sans-serif" }}>
              Creating a sustainable future through tree plantation, cleanliness drives, and green initiatives.
              India generates over 1.5 lakh tonnes of waste daily - we&apos;re changing that.
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
            { value: "400+", label: "Trees Planted", icon: "🌳" },
            { value: "10+", label: "Clean-up Drives", icon: "🧹" },
            { value: "5+", label: "Green Campuses", icon: "🏫" },
            { value: "50+", label: "Volunteers", icon: "🤝" },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-emerald-100">
              <span className="text-3xl mb-2 block">{stat.icon}</span>
              <div className="text-2xl font-bold text-emerald-600" style={{ fontFamily: "Quicksand, sans-serif" }}>{stat.value}</div>
              <div className="text-gray-600 text-sm" style={{ fontFamily: "Nunito, sans-serif" }}>{stat.label}</div>
            </div>
          ))}
                    </motion.div>
                    
        {/* Programs Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "Quicksand, sans-serif" }}>
            <span className="text-gray-800">Our </span>
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">Programs</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100"
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
                <div className="bg-emerald-50 text-emerald-700 px-3 py-2 rounded-lg text-sm font-semibold inline-block">
                  {program.stats}
                                    </div>
              </motion.div>
                                ))}
                            </div>
                        </div>

        {/* CTA Section */}
            <motion.div 
          className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Quicksand, sans-serif" }}>
            Join the Green Movement 🌱
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "Nunito, sans-serif" }}>
            Every tree planted, every waste recycled, every clean-up drive makes India greener. Be part of the change!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => !isAnyModalOpen && openFormModal()}
              className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
            >
              🌳 Plant a Tree With Us
            </button>
            <Link
              to="/services/all"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-emerald-600 transition-all"
            >
              View All Initiatives
            </Link>
                </div>
                    </motion.div>
                </div>
    </div>
    );
};

export default EnvironmentalConservation;
