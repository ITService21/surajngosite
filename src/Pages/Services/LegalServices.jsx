import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useCTAModal } from "../../hooks/useCTAModal";
import { useModal } from "../../Context/ModalContext";

// Child Education programs data
const educationPrograms = [
    {
        title: "School Enrollment Drives",
        description: "Identifying and enrolling out-of-school children in formal education to ensure every child has access to learning",
        features: [
            "Door-to-door surveys to identify out-of-school children",
            "Parent counseling and awareness sessions",
            "Documentation assistance for admissions",
            "Uniform and supplies distribution",
            "Regular follow-up for retention",
            "Bridge education for dropouts"
        ],
        icon: "🏫",
        impact: "0 Still figuring it out",
    },
    {
        title: "After-School Tutoring",
        description: "Daily homework help and academic support to improve learning outcomes for underprivileged children",
        features: [
            "Daily homework assistance",
            "Subject-specific tutoring",
            "Exam preparation support",
            "Reading and literacy programs",
            "Remedial classes for weak students",
            "Peer learning groups"
        ],
        icon: "✏️",
        impact: "0 Still figuring it out",
    },
    {
        title: "Digital Literacy Program",
        description: "Teaching computer skills and internet safety to prepare children for the digital age",
        features: [
            "Basic computer operations",
            "Internet usage and safety",
            "Educational software training",
            "Coding fundamentals",
            "Digital content creation",
            "Online learning resources access"
        ],
        icon: "💻",
        impact: "0 Still figuring it out",
    },
    {
        title: "Scholarship Programs",
        description: "Financial support for meritorious students from economically weaker sections to continue their education",
        features: [
            "Merit-based scholarships",
            "Need-based financial aid",
            "Higher education support",
            "Skill development sponsorship",
            "Exam fee assistance",
            "Career counseling"
        ],
        icon: "🎓",
        impact: "0 Still figuring it out",
    },
    {
        title: "Creative Learning Workshops",
        description: "Engaging children through art, music, and storytelling to foster creativity and holistic development",
        features: [
            "Art and craft sessions",
            "Music and dance classes",
            "Storytelling and drama",
            "Science experiments",
            "Environmental awareness activities",
            "Cultural programs"
        ],
        icon: "🎨",
        impact: "0 Still figuring it out",
    },
    {
        title: "Learning Resource Distribution",
        description: "Providing books, stationery, and educational materials to students who cannot afford them",
        features: [
            "Textbook distribution",
            "Stationery kits",
            "Educational toys and games",
            "Library setup in communities",
            "E-learning devices",
            "Science lab materials"
        ],
        icon: "📚",
        impact: "0 Still figuring it out",
    }
];

// Focus areas
const focusAreas = [
    {
        icon: "👶",
        title: "Early Childhood",
        description: "Pre-school education and early development programs"
    },
    {
        icon: "📖",
        title: "Primary Education",
        description: "Foundational literacy and numeracy for classes 1-5"
    },
    {
        icon: "🔬",
        title: "STEM Education",
        description: "Science, technology, engineering, and math focus"
    },
    {
        icon: "🌟",
        title: "Life Skills",
        description: "Soft skills, values education, and personality development"
    }
];

// Impact process
const processSteps = [
    {
        step: "01",
        title: "Identify",
        description: "Survey communities to find children needing educational support"
    },
    {
        step: "02",
        title: "Enroll",
        description: "Facilitate admission in schools with required documentation"
    },
    {
        step: "03",
        title: "Support",
        description: "Provide academic assistance, materials, and mentorship"
    },
    {
        step: "04",
        title: "Monitor",
        description: "Track progress and attendance to prevent dropouts"
    },
    {
        step: "05",
        title: "Empower",
        description: "Enable children to become confident, educated individuals"
    }
];

export default function LegalServices({ className = "" }) {
    const { ctaRef } = useCTAModal();
    const { isAnyModalOpen, openFormModal } = useModal();

    return (
        <section 
            className={`mt-[40px] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden ${className}`} 
            style={{ backgroundColor: '#FFFFFF' }}
        >
            {/* Enhanced Animated Background with Green Geometric Objects */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Animated Mesh Background */}
                <motion.div 
                    className="absolute inset-0 opacity-30"
                    animate={{
                        background: [
                            "radial-gradient(circle at 20% 50%, rgba(34,197,94,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16,185,129,0.15) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(34,197,94,0.15) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 20%, rgba(16,185,129,0.15) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(34,197,94,0.15) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(34,197,94,0.15) 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 50%, rgba(34,197,94,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16,185,129,0.15) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(34,197,94,0.15) 0%, transparent 50%)"
                        ]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Green Geometric Objects - Scattered Across Page */}
                {[...Array(12)].map((_, i) => {
                    const shapes = [
                        "w-16 h-16 sm:w-20 sm:h-20 rounded-full",
                        "w-12 h-12 sm:w-16 sm:h-16 rounded-full",
                        "w-20 h-20 sm:w-24 sm:h-24 rounded-full",
                        "w-14 h-14 sm:w-18 sm:h-18 rounded-lg",
                        "w-10 h-10 sm:w-14 sm:h-14 rounded-lg",
                        "w-16 h-16 sm:w-20 sm:h-20 rounded-lg",
                        "w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-emerald-400/30",
                        "w-0 h-0 border-l-[16px] border-r-[16px] border-b-[28px] border-l-transparent border-r-transparent border-b-emerald-400/30",
                        "w-12 h-12 sm:w-16 sm:h-16 transform rotate-45",
                        "w-8 h-8 sm:w-12 sm:h-12 transform rotate-45",
                        "w-14 h-14 sm:w-18 sm:h-18 rounded-lg transform rotate-12",
                        "w-10 h-10 sm:w-14 sm:h-14 rounded-lg transform -rotate-12"
                    ];
                    
                    return (
                        <motion.div
                            key={i}
                            className={`absolute ${shapes[i % shapes.length]} bg-gradient-to-r from-emerald-400/25 to-teal-400/25`}
                            animate={{
                                x: [0, 150, -80, 0],
                                y: [0, -120, 60, 0],
                                rotate: [0, 180, -180, 0],
                                scale: [0.6, 1.4, 1, 0.6],
                            }}
                            transition={{
                                duration: 20 + i * 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 1.2,
                            }}
                            style={{
                                left: `${5 + (i * 7) % 85}%`,
                                top: `${10 + (i * 8) % 70}%`,
                            }}
                        />
                    );
                })}
                
                {/* Floating education icons */}
                {['📚', '✏️', '🎓', '💡', '🌟', '📖'].map((emoji, i) => (
                    <motion.div
                        key={`emoji-${i}`}
                        className="absolute text-2xl sm:text-3xl opacity-20"
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 6 + i * 1,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 1.5,
                        }}
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + i * 12}%`,
                        }}
                    >
                        {emoji}
                    </motion.div>
                ))}
            </div>

            {/* Header Section */}
            <motion.div 
                className="relative z-10 text-center mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2002, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2001, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.div 
                        className="text-6xl sm:text-8xl mb-6"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2004, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                        animate={{ 
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1]
                        }}
                    >
                        📚
                    </motion.div>
                    
                    <motion.h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2002, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.span 
                            className="text-gray-900"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2002, delay: 0.5 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Child
                        </motion.span>
                        <motion.span 
                            className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent"
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2002, delay: 0.6 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {" "}Education
                        </motion.span>
                        <br />
                        <motion.span 
                            className="text-gray-900"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2002, delay: 0.7 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Initiative
                        </motion.span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2002, delay: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Lighting the path for millions of children struggling for quality education. Every child deserves the chance to learn, grow, and achieve their dreams.
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Programs Grid */}
            <motion.div 
                className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2002, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                {educationPrograms.map((program, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: isEven ? -120 : 120, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.2001, delay: 0.2 + index * 0.1, ease: [0.05001, 0.46, 0.45, 0.94] }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="relative bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group"
                            whileHover={{ 
                                scale: 1.02, 
                                y: -5,
                                transition: { duration: 0.2003 }
                            }}
                        >
                        <div className="relative z-10">
                            {/* Program Icon */}
                            <div className="text-4xl mb-4">{program.icon}</div>
                            
                            {/* Program Title */}
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {program.title}
                            </h3>
                            
                            {/* Program Description */}
                            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                                {program.description}
                            </p>
                            
                            {/* Features List */}
                            <div className="space-y-2 mb-4">
                                {program.features.slice(0, 3).map((feature, featureIndex) => (
                                    <div
                                        key={featureIndex}
                                        className="flex items-center gap-2 text-xs text-gray-700"
                                    >
                                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                            
                            {/* Impact Stats */}
                            <div className="flex gap-2">
                                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-2 rounded-lg border border-emerald-100 flex-1">
                                    <div className="text-xs font-semibold text-emerald-600">Impact</div>
                                    <div className="text-sm font-bold text-gray-800">{program.impact}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    );
                })}
            </motion.div>

            {/* Focus Areas Section */}
            <motion.div 
                className="relative z-10 mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2002, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2001, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.h2 
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2002, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Our Focus Areas
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2002, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Comprehensive educational support across different stages and aspects of learning
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.2002, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.15 }}
                >
                    {focusAreas.map((area, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isEven ? -120 : 120, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.2001, delay: 0.4 + index * 0.1, ease: [0.05001, 0.46, 0.45, 0.94] }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100"
                                whileHover={{ 
                                    scale: 1.02, 
                                    y: -3,
                                    transition: { duration: 0.2003 }
                                }}
                            >
                                <div className="text-4xl mb-4">{area.icon}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{area.title}</h3>
                                <p className="text-gray-600">{area.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* Process Section */}
            <motion.div 
                className="relative z-10 mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2002, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2001, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.h2 
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2002, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        How We Create Impact
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2002, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Our systematic approach to ensuring every child receives quality education
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-5 gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.2002, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.15 }}
                >
                    {processSteps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isEven ? -120 : 120, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.2001, delay: 0.4 + index * 0.1, ease: [0.05001, 0.46, 0.45, 0.94] }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="text-center"
                                whileHover={{ 
                                    scale: 1.02, 
                                    y: -3,
                                    transition: { duration: 0.2003 }
                                }}
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
                ref={ctaRef}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2004, delay: 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
                className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-3xl p-12 text-center text-white overflow-hidden"
            >
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-24 h-24 bg-white/10 rounded-full"
                            animate={{
                                x: [0, 80, -40, 0],
                                y: [0, -60, 30, 0],
                                scale: [0.5, 1.2, 0.8, 0.5],
                                rotate: [0, 180, 360, 0],
                            }}
                            transition={{
                                duration: 20 + i * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 2,
                            }}
                            style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + i * 10}%`,
                            }}
                        />
                    ))}
                </div>
                
                <div className="relative z-10">
                    <motion.h2 
                        className="text-4xl sm:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2001, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Support a Child&apos;s Education
                    </motion.h2>
                    <motion.p 
                        className="text-xl mb-8 opacity-90 max-w-3xl mx-auto"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2001, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Your contribution can transform a child&apos;s life. Sponsor a child&apos;s education, volunteer as a tutor, or donate learning materials. Every little effort counts!
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2001, delay: 0.5 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.button
                            onClick={() => { if (!isAnyModalOpen) { openFormModal(); } }}
                            className="px-10 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Sponsor a Child 💚
                        </motion.button>
                        <motion.a
                            href="https://wa.me/917065999599"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-300"
                            whileHover={{ scale: 1.05, backgroundColor: "white", color: "#10b981" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            WhatsApp: +91 7065999599
                        </motion.a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

// PropTypes
LegalServices.propTypes = {
    className: PropTypes.string,
};
