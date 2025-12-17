import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const [counts, setCounts] = useState({
    trees: 0,
    animals: 0,
    women: 0,
    volunteers: 0
  });
  const navigate = useNavigate();
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      const animateCount = (target, key) => {
        let current = 0;
        const increment = target / steps;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, stepDuration);
      };

      animateCount(400, 'trees');
      animateCount(100, 'animals');
      animateCount(200, 'women');
      animateCount(50, 'volunteers');
    }
  }, [isInView]);

  const initiatives = [
    {
      icon: "🌳",
      title: "Environmental Conservation",
      description: "Tree plantation drives, cleanliness campaigns, and green initiatives for a sustainable India",
      link: "/services/environment"
    },
    {
      icon: "🐾",
      title: "Animal Welfare & Feeding",
      description: "Daily feeding programs and care for stray animals with compassion and dignity",
      link: "/services/animal-feeding"
    },
    {
      icon: "👩",
      title: "Women Empowerment",
      description: "Skill development and livelihood training programs for rural women's financial independence",
      link: "/services/marketing"
    },
    {
      icon: "📚",
      title: "Education for All",
      description: "Quality education access for underprivileged children, lighting the path to a brighter future",
      link: "/services/education"
    }
  ];


  return (
    <div className="relative py-20 px-4 overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>
      {/* New Animated Background */}
      <div className="absolute inset-0">
        {/* Animated Wave Background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(45deg, 
                rgba(34, 197, 94, 0.1) 0%, 
                rgba(255, 255, 255, 0.05) 25%, 
                rgba(34, 197, 94, 0.1) 50%, 
                rgba(255, 255, 255, 0.05) 75%, 
                rgba(34, 197, 94, 0.1) 100%)`,
              backgroundSize: '400% 400%'
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Floating Leaves */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 opacity-20"
            style={{
              background: `linear-gradient(45deg, #22C55E, #14B8A6)`,
              clipPath: 'ellipse(50% 30% at 50% 50%)',
              left: `${15 + i * 15}%`,
              top: `${10 + i * 12}%`
            }}
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -40, 20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 0.8, 1]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Animated Dots Pattern */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-500 rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
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
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full"></div>
          
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-5xl flex gap-[10px] md:gap-[14px] lg:gap-[18px] text-normal md:text-6xl lg:text-7xl font-black mb-6 relative" style={{fontFamily: 'Quicksand, sans-serif'}}>
              <motion.span 
                className="text-gray-800 block"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                About
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent block"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  scale: [1, 1.1, 1, 1.05, 1]
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3,
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradient 3s ease infinite'
                }}
              >
                Us
              </motion.span>
            </h2>
 
          </motion.div>
          
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-6 font-bold" style={{fontFamily: 'Nunito, sans-serif'}}>
              <span className="relative">
                We are{" "}
                <motion.span 
                  className="text-emerald-600 font-black mx-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ 
                    opacity: 1,
                    scale: 1,
                    textShadow: [
                      '0 0 0px rgba(34, 197, 94, 0)',
                      '0 0 20px rgba(34, 197, 94, 0.5)',
                      '0 0 0px rgba(34, 197, 94, 0)'
                    ]
                  }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.4,
                    textShadow: {
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5
                    }
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  Pitama India
                </motion.span>
                💚
              </span>
            </p>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-medium" style={{fontFamily: 'Nunito, sans-serif'}}>
              <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Greening India, Empowering Lives
              </span>
            </p>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal" 
              style={{fontFamily: 'Nunito, sans-serif'}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              When communities grow, nature heals. When women rise, families rise. When animals are protected, society becomes humane.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Initiatives Grid with Scroll Animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.15 }}
        >
          {initiatives.map((initiative, index) => {
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
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-3xl transition-all duration-500 group relative overflow-hidden cursor-pointer"
              >
              {/* Animated Background - Only Background Changes */}
              <motion.div 
                className="absolute inset-0 rounded-3xl"
                initial={{ 
                  background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)'
                }}
                whileHover={{ 
                  background: [
                    'linear-gradient(135deg, rgba(34,197,94,0.05) 0%, rgba(20,184,166,0.03) 50%, rgba(255,255,255,1) 100%)',
                    'linear-gradient(135deg, rgba(20,184,166,0.05) 0%, rgba(34,197,94,0.03) 50%, rgba(255,255,255,1) 100%)',
                    'linear-gradient(135deg, rgba(34,197,94,0.05) 0%, rgba(20,184,166,0.03) 50%, rgba(255,255,255,1) 100%)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Animated Border Effect */}
              <motion.div 
                className="absolute inset-0 rounded-3xl border-2 border-transparent"
                initial={{ 
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, transparent, transparent) border-box'
                }}
                whileHover={{ 
                  background: [
                    'linear-gradient(white, white) padding-box, linear-gradient(45deg, rgba(34,197,94,0.3), rgba(20,184,166,0.3)) border-box',
                    'linear-gradient(white, white) padding-box, linear-gradient(45deg, rgba(20,184,166,0.3), rgba(34,197,94,0.3)) border-box',
                    'linear-gradient(white, white) padding-box, linear-gradient(45deg, rgba(34,197,94,0.3), rgba(20,184,166,0.3)) border-box'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10" onClick={() => navigate(initiative.link)}>
                {/* Icon */}
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center text-white text-3xl mb-6 shadow-2xl relative"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {initiative.icon}
                </motion.div>
                
                {/* Content */}
                <h3 
                  className="text-xl font-black mb-4 leading-tight" 
                  style={{color: '#000000', fontFamily: 'Quicksand, sans-serif'}}
                >
                  {initiative.title}
                </h3>
                
                <p 
                  className="text-gray-600 leading-relaxed text-sm" 
                  style={{fontFamily: 'Nunito, sans-serif'}}
                >
                  {initiative.description}
                </p>
              </div>
              
              {/* Animated Decorative Elements */}
              <motion.div 
                className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
              <motion.div 
                className="absolute bottom-6 left-6 w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5 + 1
                }}
              />
              
              {/* Animated Corner Accents */}
              <motion.div 
                className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl"
                initial={{ 
                  background: 'linear-gradient(135deg, transparent 0%, transparent 100%)'
                }}
                whileHover={{ 
                  background: [
                    'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, transparent 100%)',
                    'linear-gradient(135deg, rgba(20,184,166,0.1) 0%, transparent 100%)',
                    'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, transparent 100%)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Stats Section with Scroll Animation */}
        <motion.div 
          ref={statsRef}
          className="mt-16 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{backgroundColor: '#14532d'}}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.05, 0.46, 0.45, 0.94] }}
          viewport={{ once: false, amount: 0.2 }}
         >
          {/* Enhanced Background Effects */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-xl animate-pulse"></div>
          
          <div className="relative z-10">
            <h3 
              className="text-4xl md:text-5xl font-black text-white mb-6" 
              style={{fontFamily: 'Quicksand, sans-serif'}}
            >
              <span className="bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
                Our Impact So Far 💚
              </span>
            </h3>
            
            <p 
              className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto font-medium" 
              style={{fontFamily: 'Nunito, sans-serif'}}
            >
              Together, we&apos;re building a greener, kinder, and more equitable India
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { key: 'trees', number: 400, suffix: '+', label: "Trees Planted", icon: "🌳" },
                { key: 'animals', number: 50, suffix: '+', label: "Animals  Feeding", icon: "🐾" },
                { key: 'women', number: 100, suffix: '+', label: "Women Empowered", icon: "👩" },
                { key: 'volunteers', number: 50, suffix: '+', label: "Active Volunteers", icon: "🤝" }
              ].map((stat, index) => {
                return (
                  <div
                    key={index}
                    className="text-center group"
                  >
                  <motion.div 
                    className="text-4xl md:text-5xl font-black mb-3 relative" 
                    style={{color: '#22C55E', fontFamily: 'Quicksand, sans-serif'}}
                    animate={{
                      textShadow: isInView ? [
                        '0 0 0px rgba(34, 197, 94, 0)',
                        '0 0 20px rgba(34, 197, 94, 0.5)',
                        '0 0 0px rgba(34, 197, 94, 0)'
                      ] : '0 0 0px rgba(34, 197, 94, 0)'
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <span className="text-2xl mr-2">{stat.icon}</span>
                    {counts[stat.key]}{stat.suffix}
                  </motion.div>
                  
                  <div 
                    className="text-gray-300 text-sm font-medium uppercase tracking-wider" 
                    style={{fontFamily: 'Nunito, sans-serif'}}
                  >
                    {stat.label}
                  </div>
                  
                  {/* Static Underline */}
                  <div 
                    className="w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-2 group-hover:w-full transition-all duration-500"
                  />
                </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;
