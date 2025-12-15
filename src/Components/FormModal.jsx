import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaLeaf, FaPaw, FaUsers, FaGraduationCap } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { API_ENDPOINTS } from "../config/api";
import PropTypes from "prop-types";

const INITIATIVE_OPTIONS = [
  { name: "Environmental Conservation", icon: FaLeaf },
  { name: "Animal Welfare", icon: FaPaw },
  { name: "Women Empowerment", icon: FaUsers },
  { name: "Education", icon: FaGraduationCap },
];

export default function FormModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    initiative: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      localStorage.setItem("isAnyModalOpen", "true");
    } else {
      document.body.style.overflow = "unset";
      localStorage.setItem("isAnyModalOpen", "false");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "phone") {
      const phoneValue = value.replace(/\D/g, "");
      setFormData({ ...formData, phone: phoneValue });
      
      if (phoneValue.length > 0 && phoneValue.length !== 10) {
        setPhoneError("Phone number must be exactly 10 digits");
      } else {
        setPhoneError("");
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    if (formData.phone.length !== 10) {
      toast.error("Phone number must be exactly 10 digits");
      return;
    }
    
    setSending(true);
    try {
      const res = await fetch(API_ENDPOINTS.SEND_FORM_MAIL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "info@pitamaindia.org",
          subject: "New Volunteer/Contact Inquiry",
          fields: {
            Name: formData.name,
            Phone: formData.phone,
            Email: formData.email,
            "Area of Interest": formData.initiative || "Not specified",
            Message: formData.message || "No message",
          },
        }),
      });

      if (res.ok) {
        toast.success("Thank you for reaching out! We'll contact you soon. 💚");
        setFormData({ name: "", email: "", phone: "", initiative: "", message: "" });
        setTimeout(() => onClose(), 2000);
      } else {
        toast.error("Failed to send. Please try again.");
      }
    } catch {
      toast.error("Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-600 p-6 rounded-t-3xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>
              <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "Quicksand, sans-serif" }}>
                🌱 Join Our Movement
              </h2>
              <p className="text-emerald-100 text-sm mt-1" style={{ fontFamily: "Nunito, sans-serif" }}>
                Become a part of the change!
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Name */}
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none transition-all duration-300"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none transition-all duration-300"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="10 digit mobile number"
                  maxLength="10"
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all duration-300 ${
                    phoneError ? "border-red-500" : "border-emerald-200 focus:border-emerald-500"
                  }`}
                  required
                />
                {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
              </div>

              {/* Initiative Selection */}
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>
                  Area of Interest
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {INITIATIVE_OPTIONS.map((option) => (
                    <button
                      key={option.name}
                      type="button"
                      onClick={() => setFormData({ ...formData, initiative: option.name })}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                        formData.initiative === option.name
                          ? "bg-emerald-500 text-white border-emerald-500"
                          : "bg-white text-gray-700 border-emerald-200 hover:border-emerald-400"
                      }`}
                    >
                      <option.icon className="text-sm" />
                      <span className="text-xs">{option.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how you'd like to contribute..."
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={sending}
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50"
                whileHover={{ scale: sending ? 1 : 1.02 }}
                whileTap={{ scale: sending ? 1 : 0.98 }}
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                {sending ? "Sending..." : "🌱 Join the Movement"}
              </motion.button>
            </form>
          </motion.div>

          <ToastContainer
            position="top-right"
            autoClose={3000}
            style={{ zIndex: 99999 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

FormModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
