import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import PropTypes from "prop-types";
import { useModal } from "../Context/ModalContext";


/* Comprehensive NGO Data */
const myData = {
    company: {
        name: "Pitama India",
        tagline: "Greening India, Empowering Lives",
        description: `At Pitama India, we believe in building a world where every individual, every animal, and every community can thrive. Guided by our four pillars, Environmental Conservation, Education, Animal Welfare, and Community & Women Empowerment. we work to create meaningful and lasting impact.

We empower women and underserved communities through education, skill development, health, and nutrition initiatives. We protect and restore our environment through tree plantation, water conservation, and cleanliness drives. We rescue, rehabilitate, and care for animals while spreading awareness about their welfare.

Driven by compassion, sustainability, and a commitment to positive change, we aim to foster a society that is educated, equitable, and environmentally conscious.

We warmly welcome collaboration with CSR teams, institutions, organizations, and individuals who share our vision to create sustainable social and environmental impact. Together, we can amplify our efforts and build a greener, kinder, and more empowered world.`,
        heroImage: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1400&h=800&fit=crop",
        email: "info@pitamaindia.org",
        website: "https://pitamaindia.org",
        founded: "2025",
        location: "Dholpur, Rajasthan",
        teamSize: "50+ Volunteers"
    },
    vision: { 
        title: "Our Vision", 
        text: `To build a world where every individual, animal, and community thrives in a healthy, educated, and sustainable environment, where opportunities are accessible to all, nature is preserved, and compassion guides every action.` 
    },
    mission: { 
        title: "Our Mission", 
        text: `Our mission is to create lasting impact by empowering women and communities through education and skill development, protecting and conserving the environment, ensuring the welfare of animals, and supporting underserved populations with initiatives that improve health, nutrition, and opportunities for growth.`
    },
    stats: [
        { label: "Trees Planted", value: 400 },
        { label: "Animals  Feeding", value: 100 },
        { label: "Women Empowered", value: 100 },
        { label: "Active Volunteers", value: 50 },
        // { label: "Communities Served", value: 50 }
    ],
    services: [
        {
            title: "Environmental Conservation",
            description: "Tree plantation drives, cleanliness campaigns, waste recycling programs, and climate awareness initiatives across urban and rural India.",
            icon: "🌳"
        },
        {
            title: "Animal Welfare",
            description: "Daily animal feeding programs, community feeding stations, veterinary care camps, nutrition programs for stray animals.",
            icon: "🐾"
        },
        {
            title: "Women Empowerment",
            description: "Skill development training, financial literacy programs, self-help groups, and entrepreneurship support for rural women.",
            icon: "👩"
        },
        {
            title: "Education for All",
            description: "Free tuition centers, digital literacy programs, scholarship support, and career counseling for underprivileged children.",
            icon: "📚"
        },
    ],
    achievements: [
        "Planted 400+ trees across 5 cities in India",
        " Feeding 100+ stray animals",
        "Empowered 200+ rural women with livelihood skills",  
        "Provided free education to 150+ underprivileged children",
        "Organized 10+ cleanliness and awareness campaigns",
        "Built partnerships with 10+ corporate CSR programs"
    ],
    team: [
        {
            name: "Dr. Priya Sharma",
            position: "Founder & Director",
            experience: "15+ years in social sector",
            expertise: "Environmental Policy, NGO Management"
        },
        {
            name: "Rahul Verma",
            position: "Head of Operations",
            experience: "10+ years in non-profit",
            expertise: "Program Management, Volunteer Coordination"
        },
        {
            name: "Dr. Sneha Gupta",
            position: "Animal Welfare Lead",
            experience: "8+ years as veterinarian",
            expertise: "Animal Feeding, Veterinary Care"
        },
        {
            name: "Kavita Singh",
            position: "Women Empowerment Head",
            experience: "12+ years in development",
            expertise: "Skill Development, Microfinance"
        }
    ],
    links: [
        { label: "Our Initiatives", href: "/services/all" },
        { label: "Impact Stories", href: "/blog" },
        { label: "Get Involved", href: "/contact-us" },
        { label: "Donate", href: "/contact-us" }
    ],
};

export default function CompanyOverview({ data = myData, onContactClick = null, className = "" }) {
    const { isAnyModalOpen, openFormModal } = useModal();
    
    const fadeUp = { 
        visible: { opacity: 1, y: 0 }
    };

    // Enhanced Stat subcomponent
    function Stat({ label, value }) {
        const ref = useRef(null);
        const inView = useInView(ref, { once: true, margin: "-10% 0% -10% 0%" });
        const [n, setN] = useState(0);
        const [hasAnimated, setHasAnimated] = useState(false);

        useEffect(() => {
            if (inView && !hasAnimated) {
                setHasAnimated(true);
                let startTime = null;
                const duration = 2000;
                
                const animate = (currentTime) => {
                    if (!startTime) startTime = currentTime;
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                    const currentValue = Math.floor(easeOutCubic * value);
                    setN(currentValue);
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                };
                
                requestAnimationFrame(animate);
            }
        }, [inView, value, hasAnimated]);

        return (
            <motion.div 
                ref={ref} 
                className="relative p-6 bg-gradient-to-br from-white via-emerald-50 to-teal-50 rounded-2xl shadow-xl border border-emerald-100 text-center overflow-hidden group"
                initial={{ opacity: 1, scale: 1, y: 0 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
                whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 25px 50px rgba(34, 197, 94, 0.2)",
                    transition: { duration: 0.3 }
                }}
            >
                {/* Animated Background */}
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100"
                    animate={{
                        background: [
                            "linear-gradient(45deg, rgba(34,197,94,0.1) 0%, rgba(20,184,166,0.05) 50%, rgba(34,197,94,0.1) 100%)",
                            "linear-gradient(45deg, rgba(20,184,166,0.1) 0%, rgba(34,197,94,0.05) 50%, rgba(20,184,166,0.1) 100%)",
                            "linear-gradient(45deg, rgba(34,197,94,0.1) 0%, rgba(20,184,166,0.05) 50%, rgba(34,197,94,0.1) 100%)"
                        ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <div className="relative z-10">
                    <motion.div 
                        className="text-3xl sm:text-4xl font-black leading-tight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {n.toLocaleString()}+
                    </motion.div>
                    <motion.div 
                        className="text-sm sm:text-base text-gray-700 mt-2 font-semibold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {label}
                    </motion.div>
            </div>
            </motion.div>
        );
    }
    
    Stat.propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
    };

    const handleContact = (e) => {
        if (typeof onContactClick === "function") return onContactClick(e);
        if (!isAnyModalOpen) {
            openFormModal();
        }
    };

    const safe = (arr) => (Array.isArray(arr) ? arr : []);

    if (!data || !data.company) {
        return (
            <div className="min-h-[180px] flex items-center justify-center p-6 text-center">
                <div>
                    <p className="font-semibold">No data provided</p>
                    <p className="text-sm text-gray-500">Pass a `data` prop to render the component.</p>
                </div>
            </div>
        );
    }

    return (
        <section 
            className={`mt-[40px] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden ${className}`} 
            style={{ backgroundColor: '#FFFFFF' }}
        >

            {/* Hero Section */}
            <motion.div 
                className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                {/* Left: text */}
                <motion.div
                    initial={{ opacity: 0, x: -120, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.05, 0.46, 0.45, 0.94] }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.h1 
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4"
                        style={{fontFamily: 'Quicksand, sans-serif'}}
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.span 
                            className="text-gray-900"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Pitama
                        </motion.span>
                        <motion.span 
                            className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {" "}India
                        </motion.span>
                        <br />
                        <motion.span 
                            className="text-gray-900 text-2xl sm:text-3xl"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            💚
                        </motion.span>
                    </motion.h1>

                    {data.company.tagline && (
                        <motion.p 
                            className="mt-2 text-lg sm:text-xl text-emerald-600 mb-4 font-bold"
                            style={{fontFamily: 'Nunito, sans-serif'}}
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {data.company.tagline}
                        </motion.p>
                    )}

                    {data.company.description && (
                        <motion.p 
                            className="mt-4 text-base sm:text-lg text-gray-700 max-w-prose leading-relaxed mb-6"
                            style={{fontFamily: 'Nunito, sans-serif'}}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {data.company.description}
                        </motion.p>
                    )}

                    {/* Company Info Cards */}
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        {[
                            { label: "Founded", value: data.company.founded, icon: "🌱" },
                            { label: "Location", value: data.company.location, icon: "📍" },
                            { label: "Team Size", value: data.company.teamSize, icon: "🤝" }
                        ].map((info, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div 
                                    key={index}
                                    className="relative bg-gradient-to-br from-white via-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100 shadow-lg overflow-hidden group"
                                    initial={{ opacity: 0, x: isEven ? -80 : 80, y: 30 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.05, 0.46, 0.45, 0.94] }}
                                    whileHover={{ 
                                        scale: 1.02, 
                                        y: -3,
                                        transition: { duration: 0.3 }
                                    }}
                                    viewport={{ once: false, amount: 0.3 }}
                                >
                                <div className="relative z-10">
                                    <div className="text-2xl mb-2">{info.icon}</div>
                                    <div className="text-sm font-semibold text-emerald-600 mb-1">{info.label}</div>
                                    <div className="text-lg font-bold text-gray-800">{info.value}</div>
                                </div>
                            </motion.div>
                        );
                        })}
                    </motion.div>

                    <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <button
                            onClick={handleContact}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-400 hover:shadow-lg transition-all duration-300"
                            aria-label="Join our movement"
                        >
                            🌱 Join Our Movement
                        </button>
                    </div>
                </motion.div>

                {/* Right: image + stats */}
                <motion.div
                    initial={{ opacity: 0, x: 120, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.05, 0.46, 0.45, 0.94] }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="space-y-6"
                >
                    {data.company.heroImage ? (
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={data.company.heroImage}
                                alt={`${data.company.name} hero`}
                                className={`w-full object-cover h-64 sm:h-80 md:h-96 lg:h-[500px]`}
                                loading="lazy"
                            />
                        </div>
                    ) : null}

                    {/* Stats */}
                    {safe(data.stats).length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {safe(data.stats).map((s) => (
                                <Stat key={s.label} {...s} />
                            ))}
                        </div>
                    )}
                </motion.div>
            </motion.div>

            {/* Vision & Mission Section */}
            <motion.div 
                className="mb-20 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 via-teal-50/30 to-emerald-50/50 rounded-3xl"></div>
                
                <div className="relative z-10 p-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <motion.h2 
                            className="text-3xl sm:text-4xl font-bold mb-4"
                            style={{fontFamily: 'Quicksand, sans-serif'}}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <motion.span 
                                className="text-gray-900"
                            >
                                Our
                            </motion.span>
                            <motion.span 
                                className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent"
                            >
                                {" "}Vision
                            </motion.span>
                            <motion.span 
                                className="text-gray-900"
                            >
                                {" "}&{" "}
                            </motion.span>
                            <motion.span 
                                className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent"
                            >
                                Mission 💚
                            </motion.span>
                        </motion.h2>
                        <motion.p 
                            className="text-lg text-gray-600 max-w-3xl mx-auto"
                            style={{fontFamily: 'Nunito, sans-serif'}}
                        >
                            Guiding principles that drive our commitment to a better India
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    >
                      {data?.mission && (
                            <motion.div
                                initial={{ opacity: 0, x: 120, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5, ease: [0.05, 0.46, 0.45, 0.94] }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group"
                                whileHover={{ 
                                    scale: 1.02,
                                    y: -5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="relative z-10">
                                    <div className="text-5xl mb-6">🎯</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{fontFamily: 'Quicksand, sans-serif'}}>{data.mission.title || "Mission"}</h3>
                                    <p className="text-gray-700 leading-relaxed" style={{fontFamily: 'Nunito, sans-serif'}}>{data.mission.text}</p>
                                </div>
                            </motion.div>
                        )}
                        {data?.vision && (
                            <motion.div
                                initial={{ opacity: 0, x: -120, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: [0.05, 0.46, 0.45, 0.94] }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group"
                                whileHover={{ 
                                    scale: 1.02,
                                    y: -5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="relative z-10">
                                    <div className="text-5xl mb-6">👁️</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{fontFamily: 'Quicksand, sans-serif'}}>{data.vision.title || "Vision"}</h3>
                                    <p className="text-gray-700 leading-relaxed" style={{fontFamily: 'Nunito, sans-serif'}}>{data.vision.text}</p>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </motion.div>

            {/* Founder's Message Section */}
            <motion.div 
                className="mb-20 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/40 rounded-3xl"></div>
                
                <div className="relative z-10 p-8 md:p-12">
                    <motion.div
                        className="text-center mb-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <motion.h2 
                            className="text-3xl sm:text-4xl font-bold mb-4"
                            style={{fontFamily: 'Quicksand, sans-serif'}}
                        >
                            <motion.span className="text-gray-900">Founder&apos;s</motion.span>
                            <motion.span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                                {" "}Message 💌
                            </motion.span>
                        </motion.h2>
                    </motion.div>

                    <motion.div 
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden">
                            {/* Quote decoration */}
                            <div className="absolute top-4 left-4 text-6xl text-emerald-100 font-serif">&ldquo;</div>
                            <div className="absolute bottom-4 right-4 text-6xl text-emerald-100 font-serif">&rdquo;</div>
                            
                            <div className="relative z-10 space-y-5 text-gray-700 leading-relaxed" style={{fontFamily: 'Nunito, sans-serif'}}>
                                <p className="text-lg font-semibold text-emerald-700 italic">
                                    We&apos;re not a big organization - yet.<br />
                                    We don&apos;t have grand success stories - yet.<br />
                                    We haven&apos;t planted a thousand trees or served a hundred communities - not yet.<br />
                                    <span className="text-emerald-600 font-bold">But what we do have is a clear intention.</span><br />
                                    And that&apos;s where all meaningful change begins.
                                </p>
                                
                                <p>
                                    <strong className="text-emerald-600">PITAMA INDIA</strong> was born out of a simple truth: that even one small act - feeding a stray, planting a sapling, teaching a child, supporting a woman - can change the course of someone&apos;s life. And if we multiply those small acts with the right support, care, and structure, we can change entire communities.
                                </p>
                                
                                <p>
                                    Right now, we are at the very beginning. We&apos;ve laid the foundation - legally, structurally, and thoughtfully. Our values are clear. Our objectives are aligned. Our heart is in the right place.
                                </p>
                                
                                <p className="font-medium text-gray-800">
                                    What we need now are hands and hearts who believe in starting something good, not because it&apos;s already proven, but because it&apos;s deeply needed.
                                </p>
                                
                                <p>
                                    If you&apos;re someone who believes in grassroots impact, in doing good quietly and honestly, in growing something from the ground up - <span className="text-emerald-600 font-semibold">I invite you to stand with us.</span>
                                </p>
                                
                                <p className="text-lg font-bold text-emerald-700 pt-2">
                                    We are just getting started. And this is your chance to be part of it from day one. 🌱
                                </p>
                            </div>
                            
                            {/* Founder signature */}
                            <motion.div 
                                className="mt-8 pt-6 border-t border-emerald-100 flex items-center gap-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                    SS
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800 text-lg" style={{fontFamily: 'Quicksand, sans-serif'}}>Suraj Singh</p>
                                    <p className="text-emerald-600 font-medium">Founder, Pitama India</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Initiatives Section */}
            {data.services && (
                <motion.div 
                    className="mb-20 relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: false, amount: 0.15 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-teal-50/20 to-emerald-50/30 rounded-3xl"></div>
                    
                    <div className="relative z-10 p-8">
                        <motion.div
                            className="text-center mb-12"
                        >
                            <motion.h2 
                                className="text-3xl sm:text-4xl font-bold mb-4"
                                style={{fontFamily: 'Quicksand, sans-serif'}}
                            >
                                <motion.span className="text-gray-900">Our</motion.span>
                                <motion.span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                                    {" "}Key Initiatives 💚
                                </motion.span>
                            </motion.h2>
                            <motion.p 
                                className="text-lg text-gray-600 max-w-3xl mx-auto"
                                style={{fontFamily: 'Nunito, sans-serif'}}
                            >
                                Areas where we&apos;re making a difference
                            </motion.p>
                        </motion.div>

                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {data.services.map((service, index) => {
                                const isEven = index % 2 === 0;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: isEven ? -120 : 120, y: 30 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.05, 0.46, 0.45, 0.94] }}
                                        viewport={{ once: false, amount: 0.2 }}
                                        className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group"
                                        whileHover={{ 
                                            scale: 1.02, 
                                            y: -5,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                    <div className="relative z-10">
                                        <div className="text-5xl mb-6">{service.icon}</div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4" style={{fontFamily: 'Quicksand, sans-serif'}}>{service.title}</h3>
                                        <p className="text-gray-600 leading-relaxed" style={{fontFamily: 'Nunito, sans-serif'}}>{service.description}</p>
                                    </div>
                                </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </motion.div>
            )}

            {/* Achievements Section */}
            {data.achievements && (
                <motion.div 
                    className="mb-20 relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: false, amount: 0.15 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/40 via-teal-50/30 to-emerald-50/40 rounded-3xl"></div>
                    
                    <div className="relative z-10 p-8">
                        <motion.div className="text-center mb-12">
                            <motion.h2 
                                className="text-3xl sm:text-4xl font-bold mb-4"
                                style={{fontFamily: 'Quicksand, sans-serif'}}
                            >
                                <motion.span className="text-gray-900">Our</motion.span>
                                <motion.span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                                    {" "}Impact & Achievements 🏆
                                </motion.span>
                            </motion.h2>
                            <motion.p 
                                className="text-lg text-gray-600 max-w-3xl mx-auto"
                                style={{fontFamily: 'Nunito, sans-serif'}}
                            >
                                Milestones in our journey of making a difference
                            </motion.p>
                        </motion.div>

                        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {data.achievements.map((achievement, index) => {
                                const isEven = index % 2 === 0;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: isEven ? -120 : 120, y: 30 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.05, 0.46, 0.45, 0.94] }}
                                        viewport={{ once: false, amount: 0.2 }}
                                        className="relative bg-white p-6 rounded-2xl border border-emerald-100 shadow-xl overflow-hidden group"
                                        whileHover={{ 
                                            scale: 1.02, 
                                            y: -3,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                    <div className="relative z-10 flex items-start gap-4">
                                        <div className="text-3xl">✅</div>
                                        <p className="text-gray-700 font-medium leading-relaxed" style={{fontFamily: 'Nunito, sans-serif'}}>{achievement}</p>
                                    </div>
                                </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </motion.div>
            )}

            {/* Call to Action */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 rounded-3xl p-12 text-center text-white overflow-hidden"
            >
                {/* Background elements */}
                <div className="absolute inset-0">
                    {[...Array(2)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-16 h-16 bg-white/5 rounded-full"
                            animate={{
                                scale: [0.8, 1.1, 0.8],
                            }}
                            transition={{
                                duration: 8 + i * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 4,
                            }}
                            style={{
                                left: `${30 + i * 40}%`,
                                top: `${30 + i * 30}%`,
                            }}
                        />
                    ))}
                </div>
                
                <div className="relative z-10">
                    <motion.h2 
                        className="text-4xl sm:text-5xl font-bold mb-6"
                        style={{fontFamily: 'Quicksand, sans-serif'}}
                    >
                        Ready to Make a Difference? 💚
                    </motion.h2>
                    <motion.p 
                        className="text-xl mb-8 opacity-90 max-w-3xl mx-auto"
                        style={{fontFamily: 'Nunito, sans-serif'}}
                    >
                        Join thousands of volunteers and supporters who are building a greener, kinder India together
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <motion.button
                            onClick={handleContact}
                            className="px-10 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            style={{fontFamily: 'Nunito, sans-serif'}}
                        >
                            🌱 Volunteer With Us
                        </motion.button>
                        <motion.a
                            href="mailto:info@pitamaindia.org"
                            className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-300"
                            whileHover={{ scale: 1.05, backgroundColor: "white", color: "#16a34a" }}
                            whileTap={{ scale: 0.95 }}
                            style={{fontFamily: 'Nunito, sans-serif'}}
                        >
                            📧 Contact Us
                        </motion.a>
                </motion.div>
            </div>
            </motion.div>
        </section>
    );
}

CompanyOverview.propTypes = {
    data: PropTypes.object,
    onContactClick: PropTypes.func,
    className: PropTypes.string,
};
