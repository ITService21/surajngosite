import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHandshake, FaBuilding } from "react-icons/fa";
import Select from "react-select";
import PropTypes from "prop-types";
import { useModal } from "../Context/ModalContext";
import { API_ENDPOINTS } from "../config/api";

const PARTNERSHIP_TYPES = [
    "Strategic Partner", "Technology Partner", "Financial Partner", "Government Partner", "Industry Partner"
];

const BUSINESS_CATEGORIES = [
    "Technology", "Manufacturing", "Services", "Healthcare", "Education", "Finance", "Retail", "Other"
];

const COMPANY_SIZE_OPTIONS = [
    { value: "1-10", label: "1-10 employees" },
    { value: "11-50", label: "11-50 employees" },
    { value: "51-200", label: "51-200 employees" },
    { value: "201-500", label: "201-500 employees" },
    { value: "500+", label: "500+ employees" }
];

export default function PartnerModal({ open, onClose }) {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        website: '',
        partnershipType: '',
        businessCategory: '',
        companySize: '',
        location: '',
        description: '',
        expectations: '',
        message: ''
    });
    const [sending, setSending] = useState(false);
    const [phoneError, setPhoneError] = useState('');
    const { closeModal } = useModal();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        // Validate phone number
        if (name === 'phone') {
            // Allow only digits
            const phoneValue = value.replace(/\D/g, '');
            setFormData({
                ...formData,
                phone: phoneValue
            });
            
            // Validate length
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

    const handlePartnershipTypeSelect = (type) => {
        setFormData({
            ...formData,
            partnershipType: type
        });
    };

    const handleBusinessCategorySelect = (category) => {
        setFormData({
            ...formData,
            businessCategory: category
        });
    };

    const handleCompanySizeChange = (selectedOption) => {
        setFormData({
            ...formData,
            companySize: selectedOption ? selectedOption.value : ''
        });
    };

    const isValid = () =>
        formData.companyName.trim() &&
        formData.contactPerson.trim() &&
        formData.email.trim() &&
        formData.phone.trim() &&
        formData.phone.length === 10 &&
        formData.partnershipType.trim() &&
        formData.message.trim();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isValid()) {
            if (formData.phone.length !== 10) {
                toast.error('Phone number must be exactly 10 digits');
            } else {
                toast.error('Please fill all required fields.');
            }
            return;
        }
        setSending(true);
        try {
            const res = await fetch(API_ENDPOINTS.SEND_FORM_MAIL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: "info@growstartup.in",
                    subject: "Partnership Inquiry - " + formData.companyName,
                    fields: {
                        "Company Name": formData.companyName,
                        "Contact Person": formData.contactPerson,
                        "Email": formData.email,
                        "Phone": formData.phone,
                        "Website": formData.website,
                        "Partnership Type": formData.partnershipType,
                        "Business Category": formData.businessCategory,
                        "Company Size": formData.companySize,
                        "Location": formData.location,
                        "Company Description": formData.description,
                        "Partnership Expectations": formData.expectations,
                        "Message": formData.message
                    }
                })
            });
            if (res.ok) {
                toast.success('Partnership inquiry sent successfully! We will contact you soon.');
                setFormData({
                    companyName: '',
                    contactPerson: '',
                    email: '',
                    phone: '',
                    website: '',
                    partnershipType: '',
                    businessCategory: '',
                    companySize: '',
                    location: '',
                    description: '',
                    expectations: '',
                    message: ''
                });
                // Close modal after successful submission
                setTimeout(() => {
                    closeModal();
                    onClose();
                }, 2000);
            } else {
                toast.error('Failed to send inquiry. Please try again.');
            }
        } catch {
            toast.error('Failed to send inquiry. Please try again.');
        }
        setSending(false);
    };

    // Modal animation
    const modalVariants = {
        hidden: { opacity: 0, y: -40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2003 } },
        exit: { opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.2 } }
    };

    if (!open) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
            >
                <motion.div
                    className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.2003 }}
                    style={{ border: "2px solid #F85710" }}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => {
                            closeModal();
                            onClose();
                        }}
                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold z-10"
                        aria-label="Close"
                    >
                        ×
                    </button>

                    {/* Header */}
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-gradient-to-r from-pitama-green-500 to-pitama-teal-500 rounded-full flex items-center justify-center">
                                <FaHandshake className="text-white text-xl" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800" style={{ color: "#F85710" }}>
                                    Become a Partner
                                </h2>
                                <p className="text-sm text-gray-500">
                                    Join our network of trusted partners and grow together
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="p-6 space-y-6" onSubmit={handleSubmit}>
                        {/* Company Information */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                <FaBuilding className="text-pitama-green-500" />
                                Company Information
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Company Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 rounded-lg border border-pitama-green-300 focus:border-pitama-green-500 text-sm"
                                        placeholder="Your Company Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Contact Person <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="contactPerson"
                                        value={formData.contactPerson}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 rounded-lg border border-pitama-green-300 focus:border-pitama-green-500 text-sm"
                                        placeholder="Your Name"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 rounded-lg border border-pitama-green-300 focus:border-pitama-green-500 text-sm"
                                        placeholder="your@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Phone <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        maxLength="10"
                                        className={`w-full px-3 py-2 rounded-lg border text-sm ${
                                            phoneError ? 'border-red-500 focus:border-red-500' : 'border-pitama-green-300 focus:border-pitama-green-500'
                                        }`}
                                        placeholder="10 digit mobile number"
                                    />
                                    {phoneError && (
                                        <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Website
                                    </label>
                                    <input
                                        type="url"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 rounded-lg border border-pitama-green-300 focus:border-pitama-green-500 text-sm"
                                        placeholder="https://yourcompany.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Company Size
                                    </label>
                                    <Select
                                        options={COMPANY_SIZE_OPTIONS}
                                        value={COMPANY_SIZE_OPTIONS.find(option => option.value === formData.companySize) || null}
                                        onChange={handleCompanySizeChange}
                                        placeholder="Select Company Size"
                                        isClearable
                                        className="text-sm"
                                        styles={{
                                            control: (provided, state) => ({
                                                ...provided,
                                                minHeight: '40px',
                                                borderColor: state.isFocused ? '#F85710' : '#F97316',
                                                borderWidth: '1px',
                                                borderRadius: '8px',
                                                boxShadow: state.isFocused ? '0 0 0 1px #F85710' : 'none',
                                                '&:hover': {
                                                    borderColor: '#F85710'
                                                }
                                            }),
                                            placeholder: (provided) => ({
                                                ...provided,
                                                fontSize: '14px',
                                                color: '#9CA3AF'
                                            }),
                                            singleValue: (provided) => ({
                                                ...provided,
                                                fontSize: '14px',
                                                color: '#374151'
                                            }),
                                            option: (provided, state) => ({
                                                ...provided,
                                                fontSize: '14px',
                                                backgroundColor: state.isSelected ? '#F85710' : state.isFocused ? '#FED7AA' : 'white',
                                                color: state.isSelected ? 'white' : '#374151',
                                                '&:hover': {
                                                    backgroundColor: state.isSelected ? '#F85710' : '#FED7AA'
                                                }
                                            })
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 rounded-lg border border-pitama-green-300 focus:border-pitama-green-500 text-sm"
                                    placeholder="City, State, Country"
                                />
                            </div>
                        </div>

                        {/* Partnership Details */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                <FaHandshake className="text-pitama-green-500" />
                                Partnership Details
                            </h3>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Partnership Type <span className="text-red-500">*</span>
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {PARTNERSHIP_TYPES.map(type => (
                                        <button
                                            type="button"
                                            key={type}
                                            className={`px-3 py-2 rounded-full border-2 font-semibold text-sm transition-all duration-200 ${
                                                formData.partnershipType === type
                                                    ? 'bg-pitama-green-500 text-white border-pitama-green-500'
                                                    : 'bg-white text-pitama-green-700 border-pitama-green-300 hover:bg-pitama-green-50'
                                            }`}
                                            onClick={() => handlePartnershipTypeSelect(type)}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Business Category
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {BUSINESS_CATEGORIES.map(category => (
                                        <button
                                            type="button"
                                            key={category}
                                            className={`px-3 py-2 rounded-full border-2 font-semibold text-sm transition-all duration-200 ${
                                                formData.businessCategory === category
                                                    ? 'bg-pitama-green-500 text-white border-pitama-green-500'
                                                    : 'bg-white text-pitama-green-700 border-pitama-green-300 hover:bg-pitama-green-50'
                                            }`}
                                            onClick={() => handleBusinessCategorySelect(category)}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Company Description
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className="w-full px-3 py-2 rounded-lg border border-pitama-green-300 focus:border-pitama-green-500 text-sm resize-none"
                                    placeholder="Tell us about your company..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Partnership Expectations
                                </label>
                                <textarea
                                    name="expectations"
                                    value={formData.expectations}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className="w-full px-3 py-2 rounded-lg border border-pitama-green-300 focus:border-pitama-green-500 text-sm resize-none"
                                    placeholder="What do you expect from this partnership?"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Additional Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={4}
                                    className="w-full px-3 py-2 rounded-lg border border-pitama-green-300 focus:border-pitama-green-500 text-sm resize-none"
                                    placeholder="Any additional information or questions..."
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={sending}
                            className="my-[300px] w-full py-3 bg-gradient-to-r from-pitama-green-500 to-pitama-teal-500 text-white font-bold rounded-lg shadow hover:scale-105 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                            whileHover={{ scale: sending ? 1 : 1.03 }}
                            whileTap={{ scale: sending ? 1 : 0.97 }}
                        >
                            {sending ? "Sending Inquiry..." : "Submit Partnership Inquiry"}
                        </motion.button>
                    </form>

                    <ToastContainer position="top-right" autoClose={5000} />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

// PropTypes
PartnerModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};
