import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";

// Certificate data
const certificates = [
    {
        id: "gst-001",
        name: "GST Registration Certificate",
        description: "Official GST Registration Certificate issued by the Government of India, validating our compliance with Goods and Services Tax regulations.",
        issuer: "Government of India",
        pdfUrl: "/image/Grow-GST.pdf",
        icon: "📋",
        color: "from-emerald-500 to-teal-600",
        bgColor: "from-emerald-50 to-teal-50",
        borderColor: "border-emerald-300",
    },
    {
        id: "coi-002",
        name: "Certificate of Incorporation",
        description: "Official Certificate of Incorporation for Growstartup Advisors, issued by the Ministry of Corporate Affairs, Government of India.",
        issuer: "Ministry of Corporate Affairs",
        pdfUrl: "/image/COI- Growstartup Advisors.pdf",
        icon: "🏛️",
        color: "from-orange-500 to-red-600",
        bgColor: "from-orange-50 to-red-50",
        borderColor: "border-orange-300",
    },
];

// Certificate Card Component
function CertificateCard({ certificate, index }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleView = () => {
        window.open(certificate.pdfUrl, "_blank");
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = certificate.pdfUrl;
        link.download = certificate.pdfUrl.split("/").pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.div
            className={`relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden border-2 ${certificate.borderColor} group`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
        >
            {/* Card Header with Gradient */}
            <div className={`bg-gradient-to-r ${certificate.color} p-6 relative overflow-hidden`}>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: "20px 20px"
                    }}></div>
                </div>
                
                {/* Floating Badge */}
                <motion.div 
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full"
                    animate={isHovered ? { scale: 1.1, rotate: 3 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <span className="text-white font-semibold text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Verified
                    </span>
                </motion.div>

                {/* Icon */}
                <motion.div 
                    className="relative z-10 inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-4"
                    animate={isHovered ? { rotate: [0, -5, 5, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-5xl">{certificate.icon}</span>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white relative z-10 drop-shadow-sm">
                    {certificate.name}
                </h3>
                <p className="text-white/80 text-sm mt-2 font-medium">
                    Issued by: {certificate.issuer}
                </p>
            </div>

            {/* Card Body */}
            <div className={`p-6 bg-gradient-to-br ${certificate.bgColor}`}>
                <p className="text-gray-600 leading-relaxed mb-6">
                    {certificate.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    <motion.button
                        onClick={handleView}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 bg-gradient-to-r ${certificate.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View PDF
                    </motion.button>
                    <motion.button
                        onClick={handleDownload}
                        className="flex items-center justify-center gap-2 py-3 px-5 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl shadow-md hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                    </motion.button>
                </div>
            </div>

            {/* Decorative Corner */}
            <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${certificate.color} opacity-10 rounded-full blur-2xl`}></div>
        </motion.div>
    );
}

CertificateCard.propTypes = {
    certificate: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        issuer: PropTypes.string.isRequired,
        pdfUrl: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        bgColor: PropTypes.string.isRequired,
        borderColor: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

export default function Certifications({ className = "" }) {
    return (
        <section 
            className={`w-full min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative overflow-hidden ${className}`} 
        >
            {/* Enhanced Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating Orbs */}
                <motion.div 
                    className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-3xl opacity-20"
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
                    className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full blur-3xl opacity-15"
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
                        className="absolute w-2 h-2 bg-gradient-to-br from-orange-400 to-red-400 rounded-full"
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

            {/* Header Section */}
            <motion.div 
                className="relative z-10 text-center mb-16"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                {/* Trophy Badge */}
                <motion.div 
                    className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-100 via-orange-50 to-red-100 rounded-full mb-6 shadow-xl relative"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {/* Animated ring */}
                    <motion.div 
                        className="absolute -inset-1 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-30"
                        animate={{
                            scale: [1, 1.15, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.span 
                        className="text-5xl relative z-10"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        🏆
                    </motion.span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1 
                    className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
                        Our Certifications
                    </span>
                </motion.h1>

                {/* Decorative Lines */}
                <div className="flex items-center justify-center gap-3 mb-6">
                    <motion.div 
                        className="h-1 bg-gradient-to-r from-transparent via-orange-400 to-orange-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    />
                    <motion.div 
                        className="w-3 h-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-full"
                        animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div 
                        className="h-1 bg-gradient-to-l from-transparent via-red-400 to-red-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    />
                </div>

                {/* Subtitle */}
                <motion.p 
                    className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    Trusted credentials that validate our commitment to excellence and legal compliance in business consulting.
                </motion.p>
            </motion.div>

            {/* Certificates Grid */}
            <div className="relative z-10 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {certificates.map((certificate, index) => (
                    <CertificateCard 
                        key={certificate.id} 
                        certificate={certificate} 
                        index={index} 
                    />
                ))}
            </div>

            {/* Trust Banner */}
            <motion.div 
                className="relative z-10 mt-16 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-100">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">✅</span>
                        <span className="text-gray-700 font-medium">Government Verified</span>
                    </div>
                    <div className="w-px h-8 bg-gray-200"></div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">🔒</span>
                        <span className="text-gray-700 font-medium">Legally Compliant</span>
                    </div>
                    <div className="w-px h-8 bg-gray-200"></div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">🌟</span>
                        <span className="text-gray-700 font-medium">Trusted Partner</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

// PropTypes
Certifications.propTypes = {
    className: PropTypes.string,
};
