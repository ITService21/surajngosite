import { motion } from "framer-motion";

function VisionMission() {
    return (
        <section className="relative py-20 px-4 overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>
            {/* Beautiful Animated Background */}
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
                        className="absolute text-lg opacity-20"
                        animate={{
                            y: [0, -40, 0],
                            x: [0, 20, -10, 0],
                            scale: [0.8, 1.2, 0.9, 1.1, 0.8],
                            opacity: [0.1, 0.25, 0.1, 0.2, 0.1],
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

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Fast Header Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h2 
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6" 
                        style={{fontFamily: 'Quicksand, sans-serif'}}
                    >
                        <motion.span 
                            className="text-gray-800 block"
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Our
                        </motion.span>
                        <motion.span 
                            className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent block"
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Mission & Vision 💚
                        </motion.span>
                    </h2>
                    
                    <motion.div 
                        className="w-32 h-1 mx-auto bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    />
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: false, amount: 0.15 }}
                >
                    {/* Mission Card */}
            <motion.div
                        initial={{ opacity: 0, x: -120, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.05, 0.46, 0.45, 0.94] }}
                        viewport={{ once: false, amount: 0.2 }}
                        whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }}
                        className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden cursor-pointer"
                    >
                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                                🎯
                            </div>
                            
                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h3 className="text-2xl md:text-3xl font-black mb-4" style={{color: '#000000', fontFamily: 'Quicksand, sans-serif'}}>
                                    Our Mission
                                </h3>
                                
                                <p className="text-gray-600 leading-relaxed text-lg mb-4" style={{fontFamily: 'Nunito, sans-serif'}}>
                                    To create a sustainable, compassionate, and equitable India by protecting the environment, rescuing and caring for animals, empowering women, and providing quality education to underprivileged children.
                                </p>
                                <p className="text-gray-500 leading-relaxed text-base" style={{fontFamily: 'Nunito, sans-serif'}}>
                                    We believe that when communities grow, nature heals. When women rise, families rise. When animals are protected, society becomes humane. Together, we can make India more sustainable and kind.
                                </p>
                            </motion.div>
                        </div>
            </motion.div>

                    {/* Vision Card */}
            <motion.div
                        initial={{ opacity: 0, x: 120, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.05, 0.46, 0.45, 0.94] }}
                        viewport={{ once: false, amount: 0.2 }}
                        whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }}
                        className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden cursor-pointer"
                    >
                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                                👁️
                            </div>
                            
                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h3 className="text-2xl md:text-3xl font-black mb-4" style={{color: '#000000', fontFamily: 'Quicksand, sans-serif'}}>
                                    Our Vision
                                </h3>
                                
                                <p className="text-gray-600 leading-relaxed text-lg mb-4" style={{fontFamily: 'Nunito, sans-serif'}}>
                                    A greener planet, a kinder society, a brighter future, and empowered communities. We envision an India where every tree is valued, every animal is treated with dignity, and every person has the opportunity to thrive.
                                </p>
                                <p className="text-gray-500 leading-relaxed text-base" style={{fontFamily: 'Nunito, sans-serif'}}>
                                    Our vision extends beyond charity to create systemic change—building a movement of compassionate citizens who believe in collective action for the common good.
                </p>
            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Why Join Us Section */}
                <motion.div
                    className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4" style={{fontFamily: 'Quicksand, sans-serif'}}>
                            Why Join Our Movement? 🌱
                        </h3>
                        <p className="text-gray-600" style={{fontFamily: 'Nunito, sans-serif'}}>
                            Every action counts. Here&apos;s what we&apos;re fighting for:
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: "🌳", stat: "100+ tonnes", text: "of waste generated daily in India - we're changing that" },
                            { icon: "🐾", stat: "100+", text: "stray animals need care and compassion" },
                            { icon: "👩", stat: "50%", text: "of rural women lack steady livelihood opportunities" },
                            { icon: "📚", stat: "150+", text: "of children still struggle for quality education" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <div className="text-2xl font-bold text-emerald-600 mb-2" style={{fontFamily: 'Quicksand, sans-serif'}}>
                                    {item.stat}
                                </div>
                                <p className="text-gray-600 text-sm" style={{fontFamily: 'Nunito, sans-serif'}}>
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default VisionMission;
