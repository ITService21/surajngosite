import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "../config/api";
import {
    FaInstagram,
    FaLinkedinIn,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaEnvelope,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        // Simple email validation
        if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)) {
            toast.error('Please enter a valid email address.');
            setIsSubscribed(false);
            return;
        }
        setProcessing(true);
        try {
            const res = await fetch(API_ENDPOINTS.SEND_FORM_MAIL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: "info@pitamaindia.org",
                    subject: "Newsletter signup",
                    fields: {
                        Email: email
                    }
                })
            });
            if (res.ok) {
                setIsSubscribed(true);
                toast.success('Thank you for subscribing! Stay updated on our initiatives.');
                setEmail('');
                setTimeout(() => setIsSubscribed(false), 10000);
            } else {
                toast.error('An error occurred. Please try again.');
                setIsSubscribed(false);
            }
        } catch {
            toast.error('An error occurred. Please try again.');
            setIsSubscribed(false);
        } finally {
            setProcessing(false);
        }
    };

    return (
        <footer className="bg-emerald-900 text-white py-10">
            {/* Newsletter Subscription Section */}
            <div className="max-w-6xl mx-auto px-4 mb-8">
                <div className="rounded-2xl p-6 md:p-8 border border-white/10 bg-gradient-to-r from-emerald-800/50 to-teal-800/50">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2 text-white">
                                <FaEnvelope className="text-emerald-400" />
                                Join Our Green Movement
                            </h3>
                            <p className="text-white/80 text-sm">
                                Subscribe to receive updates on our environmental initiatives, volunteer opportunities, and inspiring stories of change.
                            </p>
                        </div>
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <div className="relative flex-1">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-3 pr-12 rounded-lg border-0 text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    required
                                />
                                <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                            </div>
                            <button
                                type="submit"
                                disabled={processing || isSubscribed}
                                className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-emerald-600 transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {processing ? 'Processing...' : isSubscribed ? '✓ Subscribed!' : '🌱 Subscribe'}
                            </button>
                        </form>
                    </div>
                    {errorMsg && (
                        <div className="mt-4 text-center">
                            <p className="text-red-400 text-sm">{errorMsg}</p>
                        </div>
                    )}
                    {isSubscribed && (
                        <div className="mt-4 text-center">
                            <p className="text-white/90 text-sm">
                                Thank you for joining our community! Together, we can create a greener India. 💚
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">

                {/* About */}
                <div className="col-span-2 md:col-span-1 lg:col-span-1">
                    <h2 className="text-lg font-semibold mb-4 text-center md:text-left">🌿 Pitama India</h2>
                    <p className="text-gray-400 text-sm">
                        Greening India, Empowering Lives. We work towards environmental conservation, women empowerment, animal welfare, and quality education for all.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link to="/" className="hover:text-emerald-400 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
                        <li><Link to="/about-us/overview" className="hover:text-emerald-400 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Our Story</Link></li>
                        <li><Link to="/services/all" className="hover:text-emerald-400 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Our Initiatives</Link></li>
                        <li><Link to="/contact-us" className="hover:text-emerald-400 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Get Involved</Link></li>
                    </ul>
                </div>

                {/* Our Initiatives */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Our Initiatives</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link to="/services/funding" className="hover:text-emerald-400 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>🌳 Environment</Link></li>
                        <li><Link to="/services/certificate" className="hover:text-emerald-400 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>🐾 Animal Welfare</Link></li>
                        <li><Link to="/services/marketing" className="hover:text-emerald-400 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>👩 Women Empowerment</Link></li>
                        <li><Link to="/services/education" className="hover:text-emerald-400 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>📚 Education</Link></li>
                    </ul>
                </div>

                {/* About & Resources */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">About & Resources</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link to="/about-us/mission" className="hover:text-emerald-400 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>🎯 Mission</Link></li>
                        <li><Link to="/about-us/vision" className="hover:text-emerald-400 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>🔭 Vision</Link></li>
                        <li><Link to="/about-us/team" className="hover:text-emerald-400 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>👥 Our Team</Link></li>
                        <li><Link to="/donate" className="hover:text-emerald-400 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>💖 Donate</Link></li>
                        <li><Link to="/about-us/terms" className="hover:text-emerald-400 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>📜 Terms</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="flex items-start gap-2">
                            <FaWhatsapp className="mt-1 flex-shrink-0 text-green-400" /> 
                            <a href="https://wa.me/917065999599" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">+91 7065999599</a>
                        </li>
                        <li className="flex items-start gap-2">
                            <FaPhoneAlt className="mt-1 flex-shrink-0" /> 
                            <a href="tel:+917065999599" className="hover:text-emerald-400 transition-colors">+91 7065999599</a>
                        </li>
                        <li className="flex items-start gap-2">
                            <FaEnvelope className="mt-1 flex-shrink-0" /> 
                            <a href="mailto:info@pitamaindia.org" className="hover:text-emerald-400 transition-colors">info@pitamaindia.org</a>
                        </li>
                        <li className="flex items-start gap-2">
                            <FaMapMarkerAlt className="mt-1 flex-shrink-0" /> 
                            <span>New Delhi, India</span>
                        </li>
                    </ul>
                    <div className="mt-4">
                        <h4 className="text-md font-semibold mb-3">Follow Us</h4>
                        <div className="flex space-x-3">
                            <a href="https://www.instagram.com/pitama_india?igsh=Ynk1dDQ3cTN3eXJm&utm_source=qr" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-emerald-500 transition" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://www.youtube.com/@PitamaIndia" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-emerald-500 transition" aria-label="YouTube">
                                <FaYoutube />
                            </a>
                            <a href="https://www.linkedin.com/company/pitamaindia/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-emerald-500 transition" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Pitama India — Greening India, Empowering Lives 💚</p>
                <p className="mt-2 text-xs">Making a difference, one life at a time.</p>
            </div>
        </footer>
    );
}
