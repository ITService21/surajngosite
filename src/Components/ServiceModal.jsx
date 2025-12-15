import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import FormModal from "./FormModal";
import EligibilityChecker from "./EligibilityChecker";
import { API_ENDPOINTS } from "../config/api";
import { 
    FaTimes, 
    FaExternalLinkAlt, 
    FaCheckCircle, 
    FaFileAlt, 
    FaClock, 
    FaRupeeSign,
    FaUser,
    FaBuilding,
    FaHandshake,
    FaCalculator,
} from "react-icons/fa";

const ServiceModal = ({ isOpen, onClose, service }) => {
    const [showBookConsultant, setShowBookConsultant] = useState(false);
    const [showEligibilityChecker, setShowEligibilityChecker] = useState(false);
    // const [hasTriggeredForm, setHasTriggeredForm] = useState(false);
    const applicationProcessRef = useRef(null);
    const [consultantForm, setConsultantForm] = useState({
        name: '',
        email: '',
        phone: '',
        service: service?.name || '',
        message: ''
    });

    // Close FormModal when ServiceModal closes
    useEffect(() => {
        if (!isOpen) {
            setShowBookConsultant(false);
            // setHasTriggeredForm(false);
        }
    }, [isOpen]);

    // Disabled: Auto-opening FormModal when Application Process is visible
    // useEffect(() => {
    //     if (!isOpen || !applicationProcessRef.current || hasTriggeredForm) return;

    //     const currentRef = applicationProcessRef.current;
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting && !hasTriggeredForm) {
    //                     console.log('🎯 Application Process section is visible - opening FormModal');
    //                     setShowBookConsultant(true);
    //                     setHasTriggeredForm(true);
    //                 }
    //             });
    //         },
    //         {
    //             threshold: 0.3, // Trigger when 30% of the element is visible
    //             rootMargin: '0px 0px -50px 0px' // Trigger a bit before it's fully visible
    //         }
    //     );

    //     observer.observe(currentRef);

    //     return () => {
    //         if (currentRef) {
    //             observer.unobserve(currentRef);
    //         }
    //     };
    // }, [isOpen, hasTriggeredForm]);

    const handleConsultantSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(API_ENDPOINTS.SEND_FORM_MAIL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: "info@growstartup.in",
                    subject: `Book Consultant - ${service?.name}`,
                    fields: consultantForm
                })
            });
            if (res.ok) {
                toast.success('Consultation request submitted successfully! We will contact you soon.');
                setShowBookConsultant(false);
                setConsultantForm({ name: '', email: '', phone: '', service: service?.name || '', message: '' });
            } else {
                toast.error('Failed to submit request. Please try again later.');
            }
        } catch {
            toast.error('Failed to submit request. Please try again later.');
        }
    };

    if (!service) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="text-4xl">{service.icon}</div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">{service.name}</h2>
                                        <p className="text-gray-600">{service.description}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <FaTimes className="text-gray-500" />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6">
                            {/* Key Information */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {service.amount && (
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <div className="flex items-center gap-2 mb-2">
                                            <FaRupeeSign className="text-blue-600" />
                                            <span className="font-semibold text-gray-900">Loan Amount</span>
                                        </div>
                                        <p className="text-2xl font-bold text-blue-600">{service.amount}</p>
                                    </div>
                                )}
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <div className="flex items-center gap-2 mb-2">
                                        <FaClock className="text-green-600" />
                                        <span className="font-semibold text-gray-900">Processing Time</span>
                                    </div>
                                    <p className="text-lg font-semibold text-green-600">{service.processingTime}</p>
                                </div>
                                {service.interestRate ? (
                                    <div className="bg-pitama-green-50 p-4 rounded-lg">
                                        <div className="flex items-center gap-2 mb-2">
                                            <FaCheckCircle className="text-pitama-green-600" />
                                            <span className="font-semibold text-gray-900">Interest Rate</span>
                                        </div>
                                        <p className="text-lg font-semibold text-pitama-green-600">{service.interestRate}</p>
                                    </div>
                                ) : service.validity ? (
                                    <div className="bg-pitama-green-50 p-4 rounded-lg">
                                        <div className="flex items-center gap-2 mb-2">
                                            <FaCheckCircle className="text-pitama-green-600" />
                                            <span className="font-semibold text-gray-900">Validity</span>
                                        </div>
                                        <p className="text-lg font-semibold text-pitama-green-600">{service.validity}</p>
                                    </div>
                                ) : (
                                    <div className="bg-pitama-green-50 p-4 rounded-lg">
                                        <div className="flex items-center gap-2 mb-2">
                                            <FaCheckCircle className="text-pitama-green-600" />
                                            <span className="font-semibold text-gray-900">Type</span>
                                        </div>
                                        <p className="text-lg font-semibold text-pitama-green-600">Registration</p>
                                    </div>
                                )}
                            </div>

                            {/* Detailed Information */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Eligibility Criteria */}
                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <FaUser className="text-blue-600" />
                                        Eligibility Criteria
                                    </h3>
                                    <ul className="space-y-2">
                                        {service.eligibility.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Required Documents */}
                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <FaFileAlt className="text-blue-600" />
                                        Required Documents
                                    </h3>
                                    <ul className="space-y-2">
                                        {service.documents.map((doc, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <FaFileAlt className="text-blue-500 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">{doc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <FaCheckCircle className="text-blue-600" />
                                    Key Benefits
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Eligibility Checker Button */}
                            <div className="bg-gradient-to-r from-pitama-green-50 to-pitama-teal-50 p-6 rounded-xl border-2 border-pitama-green-200">
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                                        <FaCalculator className="text-pitama-green-600" />
                                        Check Your Eligibility
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Find out which government loans and grants you&apos;re eligible for based on your profile
                                    </p>
                                    <button
                                        onClick={() => setShowEligibilityChecker(true)}
                                        className="bg-gradient-to-r from-pitama-green-500 to-pitama-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-pitama-green-600 hover:to-pitama-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
                                    >
                                        <FaCalculator />
                                        Check Eligibility
                                    </button>
                                </div>
                            </div>

                            {/* Application Process */}
                            <div 
                                ref={applicationProcessRef}
                                className="bg-white border border-gray-200 p-6 rounded-xl"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <FaBuilding className="text-blue-600" />
                                    Application Process
                                </h3>
                                <div className="space-y-4">
                                    {service.process.map((step, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{step.title}</h4>
                                                <p className="text-gray-600">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* External Links */}
                            <div className="bg-yellow-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <FaExternalLinkAlt className="text-yellow-600" />
                                    Official Resources
                                </h3>
                                <div className="space-y-3">
                                    {service.links.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <FaExternalLinkAlt className="text-blue-600" />
                                            <div>
                                                <p className="font-semibold text-gray-900">{link.title}</p>
                                                <p className="text-sm text-gray-600">{link.description}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Book Consultant Button */}
                            <div className="text-center pt-6 border-t border-gray-200">
                                <button
                                    onClick={() => setShowBookConsultant(true)}
                                    className="bg-gradient-to-r from-pitama-green-500 to-pitama-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-pitama-green-600 hover:to-pitama-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
                                >
                                    <FaHandshake />
                                    Book Free Consultation
                                </button>
                                <p className="text-gray-600 text-sm mt-2">
                                    Get personalized guidance from our MSME experts
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Book Consultant Modal */}
                    <AnimatePresence>
                        {showBookConsultant && (
                            <motion.div
                                className="fixed inset-0 z-60 flex items-center justify-center p-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                                    onClick={() => setShowBookConsultant(false)}
                                />
                                <motion.div
                                    className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-bold text-gray-900">Book Free Consultation</h3>
                                        <button
                                            onClick={() => setShowBookConsultant(false)}
                                            className="p-2 hover:bg-gray-100 rounded-full"
                                        >
                                            <FaTimes className="text-gray-500" />
                                        </button>
                                    </div>
                                    
                                    <form onSubmit={handleConsultantSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={consultantForm.name}
                                                onChange={(e) => setConsultantForm({...consultantForm, name: e.target.value})}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                            <input
                                                type="email"
                                                required
                                                value={consultantForm.email}
                                                onChange={(e) => setConsultantForm({...consultantForm, email: e.target.value})}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                            <input
                                                type="tel"
                                                required
                                                value={consultantForm.phone}
                                                onChange={(e) => setConsultantForm({...consultantForm, phone: e.target.value})}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                                            <input
                                                type="text"
                                                value={consultantForm.service}
                                                readOnly
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                                            <textarea
                                                value={consultantForm.message}
                                                onChange={(e) => setConsultantForm({...consultantForm, message: e.target.value})}
                                                rows={3}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-[#1D4ED8] to-[#1D4ED8] text-white py-3 rounded-lg font-semibold hover:from-[#1E40AF] hover:to-[#1E40AF] transition-all duration-200"
                                        >
                                            Submit Request
                                        </button>
                                    </form>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}

            {/* FormModal */}
            <FormModal
                open={showBookConsultant}
                onClose={() => {
                    setShowBookConsultant(false);
                    // Keep ServiceModal open when FormModal is closed
                }}
            />

            {/* EligibilityChecker */}
            <EligibilityChecker
                isOpen={showEligibilityChecker}
                onClose={() => setShowEligibilityChecker(false)}
            />
        </AnimatePresence>
    );
};

ServiceModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    service: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        icon: PropTypes.string,
        amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        processingTime: PropTypes.string,
        interestRate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        validity: PropTypes.string,
        eligibility: PropTypes.arrayOf(PropTypes.string),
        documents: PropTypes.arrayOf(PropTypes.string),
        benefits: PropTypes.arrayOf(PropTypes.string),
        process: PropTypes.arrayOf(PropTypes.string),
        links: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            url: PropTypes.string
        }))
    })
};

export default ServiceModal;
