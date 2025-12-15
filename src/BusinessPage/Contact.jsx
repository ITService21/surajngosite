import { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import { API_ENDPOINTS } from "../config/api";

const INITIATIVE_OPTIONS = [
    "Environmental Conservation", "Animal Welfare", "Women Empowerment", "Education", "Community Health", "Volunteer"
];

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organization: '',
        initiative: '',
        message: ''
    });
    const [phoneError, setPhoneError] = useState('');
    const [sending, setSending] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        // Validate phone number
        if (name === 'phone') {
            const phoneValue = value.replace(/\D/g, '');
            setFormData({
                ...formData,
                phone: phoneValue
            });
            
            if (phoneValue.length > 0 && phoneValue.length !== 10) {
                setPhoneError('Phone number must be exactly 10 digits');
            } else {
                setPhoneError('');
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleInitiativeSelect = (initiative) => {
        setFormData({
            ...formData,
            initiative: initiative
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
            toast.error('Please fill in all required fields.');
            return;
        }
        
        if (formData.phone.length !== 10) {
            toast.error('Phone number must be exactly 10 digits');
            return;
        }
        
        setSending(true);
        try {
            const res = await fetch(API_ENDPOINTS.SEND_FORM_MAIL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: "info@pitamaindia.org",
                    subject: "Volunteer/Contact Form Submission",
                    fields: {
                        Name: formData.name,
                        Phone: formData.phone,
                        Email: formData.email,
                        Organization: formData.organization,
                        "Area of Interest": formData.initiative,
                        Message: formData.message
                    }
                })
            });
            
            if (res.ok) {
                toast.success('Thank you for reaching out! We will contact you soon. 💚');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    organization: '',
                    initiative: '',
                    message: ''
                });
            } else {
                toast.error('Failed to send message. Please try again.');
            }
        } catch {
            toast.error('Failed to send message. Please try again.');
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="relative py-20 px-4 overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>
            {/* Animated Background */}
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

                {/* Simple floating elements */}
                {[...Array(2)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-6 h-6 bg-emerald-500/20 rounded-full"
                        style={{
                            left: `${20 + i * 60}%`,
                            top: `${30 + i * 40}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            scale: [0.8, 1.1, 0.8],
                        }}
                        transition={{
                            duration: 6 + i * 2,
                            repeat: Infinity,
                            delay: i * 3,
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
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section */}
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
                            Get
                        </motion.span>
                        <motion.span 
                            className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent block"
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Involved 💚
                        </motion.span>
                    </h2>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        style={{fontFamily: 'Nunito, sans-serif'}}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Join our movement and be part of the change. Every action counts!
                    </motion.p>
                </motion.div>

            <motion.div
                className="grid lg:grid-cols-2 gap-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                {/* Left Content */}
                    <motion.div 
                        className="space-y-8"
                        initial={{ opacity: 0, x: -120, y: 30 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.05, 0.46, 0.45, 0.94] }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <h3 className="text-3xl md:text-4xl font-black mb-6" style={{color: '#000000', fontFamily: 'Quicksand, sans-serif'}}>
                                Let&apos;s Create 
                                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"> Change Together</span>
                    </h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8" style={{fontFamily: 'Nunito, sans-serif'}}>
                                Whether you want to volunteer, donate, partner, or simply learn more about our initiatives, 
                                we&apos;d love to hear from you. Together, we can build a greener, kinder India.
                            </p>
                        </motion.div>

                                {/* Contact Information Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {[
                                        {
                                            icon: "📍",
                                            title: "Location",
                                            details: ["New Delhi, India"],
                                            color: "from-emerald-500 to-teal-500"
                                        },
                                        {
                                            icon: "📧",
                                            title: "Email",
                                            details: ["info@pitamaindia.org"],
                                            color: "from-teal-500 to-emerald-500"
                                        },
                                        {
                                            icon: "📞",
                                            title: "Call",
                                            details: ["+91 98765 43210"],
                                            color: "from-emerald-500 to-green-500"
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
                                            whileHover={{ scale: 1.02, y: -3, transition: { duration: 0.3 } }}
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 30 }}
                                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                        >
                                            <div className="relative z-10 text-center">
                                                <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-white text-lg shadow-lg mx-auto mb-3`}>
                                                    {item.icon}
                                                </div>
                                                <h4 className="text-sm font-bold text-gray-800 mb-1" style={{fontFamily: 'Quicksand, sans-serif'}}>
                                                    {item.title}
                                                </h4>
                                                {item.details.map((detail, i) => (
                                                    <p key={i} className="text-xs text-gray-600" style={{fontFamily: 'Nunito, sans-serif'}}>
                                                        {detail}
                                                    </p>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Ways to Help Section */}
                                <motion.div
                                    className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                >
                                    {[
                                        {
                                            icon: "🤝",
                                            title: "Volunteer",
                                            description: "Join our team"
                                        },
                                        {
                                            icon: "💚",
                                            title: "Donate",
                                            description: "Support our cause"
                                        },
                                        {
                                            icon: "🌱",
                                            title: "Partner",
                                            description: "Corporate CSR"
                                        },
                                        {
                                            icon: "📢",
                                            title: "Spread Word",
                                            description: "Share our mission"
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-100 hover:border-emerald-200 transition-all duration-300 group"
                                            whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.3 } }}
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                        >
                                            <div className="text-center">
                                                <div className="text-2xl mb-2">
                                                    {item.icon}
                                                </div>
                                                <h4 className="text-sm font-bold text-gray-800 mb-1" style={{fontFamily: 'Quicksand, sans-serif'}}>
                                                    {item.title}
                                                </h4>
                                                <p className="text-xs text-gray-600" style={{fontFamily: 'Nunito, sans-serif'}}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Why Join Section */}
                                <motion.div
                                    className="mt-6 bg-gradient-to-r from-gray-50 to-emerald-50 rounded-xl p-6 border border-gray-200"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.2 }}
                                    viewport={{ amount: 0.3 }}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-800 mb-3" style={{fontFamily: 'Quicksand, sans-serif'}}>
                                                🌟 Why Join Pitama India?
                                            </h4>
                                            <ul className="space-y-2 text-sm text-gray-600" style={{fontFamily: 'Nunito, sans-serif'}}>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                                                    Make real, measurable impact
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                                                    Join a community of change-makers
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                                                    Flexible volunteer opportunities
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                                                    Transparent and accountable
                                                </li>
                    </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-800 mb-3" style={{fontFamily: 'Quicksand, sans-serif'}}>
                                                💚 Start Your Journey
                                            </h4>
                                            <p className="text-sm text-gray-600 mb-4" style={{fontFamily: 'Nunito, sans-serif'}}>
                                                Ready to make a difference? Fill out the form and we&apos;ll connect you with the right initiative based on your interests.
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold">
                                                    🌳 Environment
                                                </span>
                                                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-semibold">
                                                    🐾 Animals
                                                </span>
                                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                                                    👩 Women
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden"
                    initial={{ opacity: 0, x: 120, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.05, 0.46, 0.45, 0.94] }}
                    viewport={{ once: false, amount: 0.2 }}
                    whileHover={{ scale: 1.01, y: -3, transition: { duration: 0.3 } }}
                >
                    <div className="relative z-10">
                        <motion.h3 
                            className="text-2xl md:text-3xl font-black mb-8" 
                            style={{color: '#000000', fontFamily: 'Quicksand, sans-serif'}}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Join Our Movement 🌱
                        </motion.h3>
                            
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                        {[
                                            { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
                                            { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email' },
                                            { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '10 digit mobile number' },
                                            { name: 'organization', label: 'Organization (Optional)', type: 'text', placeholder: 'Your company or school name' }
                                        ].map((field, index) => (
                                            <motion.div
                                                key={field.name}
                                                initial={{ opacity: 0, x: 30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                            >
                                                <label className="block text-gray-700 text-sm font-semibold mb-2" style={{fontFamily: 'Nunito, sans-serif'}}>
                                                    {field.label}
                            </label>
                            <input
                                                    type={field.type}
                                                    name={field.name}
                                                    value={formData[field.name]}
                                                    onChange={handleInputChange}
                                                    placeholder={field.placeholder}
                                                    maxLength={field.name === 'phone' ? "10" : undefined}
                                                    className={`w-full px-4 py-3 rounded-xl border-2 focus:ring-0 focus:outline-none transition-all duration-300 bg-gradient-to-r from-gray-50 to-white focus:from-white focus:to-emerald-50 shadow-sm focus:shadow-lg ${
                                                        field.name === 'phone' && phoneError 
                                                            ? 'border-red-500 focus:border-red-500' 
                                                            : 'border-emerald-300 focus:border-emerald-500'
                                                    }`}
                            />
                                                {field.name === 'phone' && phoneError && (
                                                    <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                                                )}
                        </motion.div>
                                        ))}

                                        {/* Initiative Selection */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.9 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                        >
                                            <label className="block text-gray-700 text-sm font-semibold mb-2" style={{fontFamily: 'Nunito, sans-serif'}}>
                                                Area of Interest <span className="text-gray-400">(optional)</span>
                            </label>
                                            <div className="flex flex-wrap gap-2">
                                                {INITIATIVE_OPTIONS.map(initiative => (
                                                    <button
                                                        type="button"
                                                        key={initiative}
                                                        className={`px-3 py-2 rounded-full border-2 font-semibold text-sm transition-all duration-200 ${
                                                            formData.initiative === initiative
                                                                ? 'bg-emerald-500 text-white border-emerald-500'
                                                                : 'bg-white text-emerald-700 border-emerald-300 hover:bg-emerald-50'
                                                        }`}
                                                        onClick={() => handleInitiativeSelect(initiative)}
                                                    >
                                                        {initiative}
                                                    </button>
                                                ))}
                                            </div>
                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 1.0 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                        >
                                            <label className="block text-gray-700 text-sm font-semibold mb-2" style={{fontFamily: 'Nunito, sans-serif'}}>
                                Message
                            </label>
                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Tell us how you'd like to contribute or any questions you have..."
                                rows="4"
                                                className="w-full px-4 py-3 rounded-xl border-2 border-emerald-300 focus:ring-0 focus:border-emerald-500 focus:outline-none transition-all duration-300 bg-gradient-to-r from-gray-50 to-white focus:from-white focus:to-emerald-50 shadow-sm focus:shadow-lg resize-none"
                                            />
                        </motion.div>

                        <motion.button
                            type="submit"
                            disabled={sending}
                            whileHover={{ scale: sending ? 1 : 1.02, y: sending ? 0 : -2, transition: { duration: 0.3 } }}
                            whileTap={{ scale: sending ? 1 : 0.98 }}
                            className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-xl shadow-lg transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{fontFamily: 'Nunito, sans-serif'}}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.1 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {sending ? 'Sending...' : '🌱 Join the Movement →'}
                        </motion.button>
                    </form>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <ToastContainer 
                position="top-right" 
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{ 
                    zIndex: 99999,
                    top: '20px',
                    right: '20px'
                }}
                toastStyle={{
                    background: '#fff',
                    color: '#333',
                    fontSize: '14px',
                    fontWeight: '500',
                    borderRadius: '8px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
                }}
            />
        </section>
    );
};

export default ContactSection;
