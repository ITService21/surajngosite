import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function Partners({ className = "" }) {
    return (
        <section 
            className={`w-full min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative overflow-hidden ${className}`} 
        >
            {/* Enhanced Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-pitama-green-50 via-white to-pitama-teal-50"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating Orbs */}
                <motion.div 
                    className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-pitama-green-200 to-pitama-green-300 rounded-full blur-3xl opacity-20"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute top-1/3 right-20 w-72 h-72 bg-gradient-to-br from-red-200 to-pink-300 rounded-full blur-3xl opacity-20"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, -30, 0],
                        y: [0, 50, 0],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
                <motion.div 
                    className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-yellow-200 to-pitama-green-300 rounded-full blur-3xl opacity-15"
                    animate={{
                        scale: [1, 1.4, 1],
                        x: [0, -50, 0],
                        y: [0, -40, 0],
                        opacity: [0.15, 0.25, 0.15]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />

                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-br from-pitama-green-400 to-pitama-teal-400 rounded-full"
                        animate={{
                            y: [0, -100, 0],
                            x: [0, Math.random() * 100 - 50, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                        }}
                        transition={{
                            duration: 5 + Math.random() * 3,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "easeInOut"
                        }}
                        style={{
                            left: `${10 + i * 12}%`,
                            top: `${20 + (i % 3) * 25}%`,
                        }}
                    />
                ))}
            </div>

            {/* No Data Yet Section */}
            <motion.div 
                className="relative z-10 flex flex-col items-center justify-center text-center min-h-[60vh]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2004, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <motion.div
                    className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-12 md:p-20 border border-white/50 relative overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {/* Card Background Decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pitama-green-50/50 via-transparent to-pitama-teal-50/50 pointer-events-none"></div>
                    
                    {/* Icon with enhanced design */}
                    <motion.div 
                        className="relative inline-flex items-center justify-center w-40 h-40 mb-8"
                        initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.5 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        {/* Animated ring */}
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-br from-pitama-green-400 to-pitama-teal-500 rounded-full"
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                        <div className="absolute inset-2 bg-white rounded-full"></div>
                        <motion.div 
                            className="relative z-10 bg-gradient-to-br from-pitama-green-100 via-pitama-green-50 to-pitama-teal-100 rounded-full w-32 h-32 flex items-center justify-center"
                            animate={{
                                boxShadow: [
                                    "0 0 20px rgba(251, 146, 60, 0.3)",
                                    "0 0 40px rgba(239, 68, 68, 0.5)",
                                    "0 0 20px rgba(251, 146, 60, 0.3)"
                                ]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <motion.span 
                                className="text-7xl"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                📋
                            </motion.span>
                        </motion.div>
                    </motion.div>
                    
                    {/* Main Heading with enhanced gradient */}
                    <motion.h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 relative"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2004, delay: 0.5 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <span className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-600 bg-clip-text text-transparent relative">
                            Building Our Partner Network
                            <motion.span 
                                className="absolute inset-0 bg-gradient-to-r from-pitama-green-400 via-red-400 to-pitama-green-400 bg-clip-text text-transparent opacity-0"
                                animate={{ opacity: [0, 0.3, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                Building Our Partner Network
                            </motion.span>
                        </span>
                    </motion.h1>
                    
                    {/* Animated decorative lines */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <motion.div 
                            className="h-1 bg-gradient-to-r from-transparent via-pitama-green-400 to-pitama-green-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 60 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            viewport={{ once: false, amount: 0.3 }}
                        />
                        <motion.div 
                            className="w-3 h-3 bg-gradient-to-br from-pitama-green-400 to-pitama-teal-500 rounded-full"
                            animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div 
                            className="h-1 bg-gradient-to-l from-transparent via-red-400 to-pitama-teal-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 60 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            viewport={{ once: false, amount: 0.3 }}
                        />
                    </div>
                    
                    {/* Subtitle with better styling */}
                    <motion.p 
                        className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2004, delay: 0.7 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        We&apos;re actively establishing strategic partnerships with leading organizations. Exciting collaborations are on the horizon!
                    </motion.p>

                    {/* Enhanced Coming Soon Badge */}
                    <motion.div 
                        className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pitama-green-100 via-pitama-green-50 to-pitama-teal-100 border-2 border-pitama-green-300 rounded-full shadow-lg relative overflow-hidden"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2004, delay: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)" }}
                    >
                        {/* Animated shimmer effect */}
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                            animate={{ x: [-200, 400] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                        
                        <motion.span 
                            className="text-3xl relative z-10"
                            animate={{ 
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            ⏳
                        </motion.span>
                        <span className="text-base font-bold bg-gradient-to-r from-pitama-green-600 to-pitama-teal-600 bg-clip-text text-transparent relative z-10">
                            Coming Soon
                        </span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

// PropTypes
Partners.propTypes = {
    className: PropTypes.string,
};
