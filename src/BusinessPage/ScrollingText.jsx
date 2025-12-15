import { motion } from "framer-motion";

const ScrollingText = () => {
  const scrollingItems = [
    { text: "🌳 Environmental Conservation", highlight: true },
    { text: "🐾 Animal Welfare & Rescue", highlight: false },
    { text: "👩 Women Empowerment", highlight: true },
    { text: "📚 Education for All", highlight: false },
    { text: "💚 Community Health", highlight: true },
    { text: "🤝 Volunteer Network", highlight: false },
    { text: "🌱 Tree Plantation Drives", highlight: true },
    { text: "♻️ Waste Recycling Programs", highlight: false },
  ];

  // Double the items for seamless loop
  const items = [...scrollingItems, ...scrollingItems, ...scrollingItems];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 py-4">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Scrolling Content */}
      <motion.div 
        className="flex items-center whitespace-nowrap"
        animate={{
          x: [0, -2400]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear"
          }
        }}
      >
        {items.map((item, index) => (
          <div 
            key={index}
            className="flex items-center mx-8"
          >
            <span 
              className={`text-lg md:text-xl font-bold ${
                item.highlight 
                  ? 'text-white' 
                  : 'text-emerald-300'
              }`}
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              {item.text}
            </span>
            <span className="mx-6 text-emerald-500 text-2xl">•</span>
          </div>
        ))}
      </motion.div>

      {/* Gradient Overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-emerald-900 to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-emerald-900 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default ScrollingText;
