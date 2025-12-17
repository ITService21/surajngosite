import { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { API_ENDPOINTS } from "../config/api";
import "react-toastify/dist/ReactToastify.css";

const INITIATIVE_OPTIONS = [
  "Environmental Conservation",
  "Animal Welfare",
  "Women Empowerment",
  "Education",
  "Volunteer",
  "Corporate Partnership",
  "Donate"
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    initiative: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [phoneError, setPhoneError] = useState("");

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
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
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
          subject: "Website Contact Form",
          fields: {
            Name: formData.name,
            Phone: formData.phone,
            Email: formData.email,
            Organization: formData.organization || "Not specified",
            "Area of Interest": formData.initiative || "Not specified",
            Message: formData.message,
          },
        }),
      });
      if (res.ok) {
        toast.success("Thank you for reaching out! We'll contact you soon. 💚");
        setFormData({ name: "", email: "", phone: "", organization: "", initiative: "", message: "" });
      } else {
        toast.error("Failed to send. Please try again.");
      }
    } catch {
      toast.error("Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    { icon: FaPhone, label: "Phone", value: "+91 7065999599", href: "tel:+917065999599" },
    { icon: FaEnvelope, label: "Email", value: "info@pitamaindia.org", href: "mailto:info@pitamaindia.org" },
    { icon: FaMapMarkerAlt, label: "Address", value: "Dholpur, Rajasthan", href: null },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com/pitamaindia", label: "Facebook" },
    { icon: FaInstagram, href: "https://www.instagram.com/pitama_india/?igsh=Ynk1dDQ3cTN3eXJm&utm_source=qr#", label: "Instagram" },
    { icon: FaTwitter, href: "https://twitter.com/pitamaindia", label: "Twitter" },
    { icon: FaYoutube, href: "https://youtube.com/@pitamaindia", label: "YouTube" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "Quicksand, sans-serif" }}>
            <span className="text-gray-800">Get </span>
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Involved</span>
            <span className="ml-2">💚</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "Nunito, sans-serif" }}>
            Join our movement and be part of the change. Together, we can create a greener, kinder India.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white">
                      <item.icon className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-lg font-bold text-gray-800 hover:text-emerald-600 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-bold text-gray-800">{item.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4" style={{ fontFamily: "Quicksand, sans-serif" }}>
                Follow Us 💚
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>

            {/* Ways to Help */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4" style={{ fontFamily: "Quicksand, sans-serif" }}>
                Ways to Contribute 🌱
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["🤝 Volunteer", "💚 Donate", "🏢 CSR Partner", "📢 Spread Word"].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-700 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: "Quicksand, sans-serif" }}>
              Send Us a Message 🌱
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="10 digit number"
                    maxLength="10"
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all ${
                      phoneError ? "border-red-500" : "border-emerald-200 focus:border-emerald-500"
                    }`}
                    required
                  />
                  {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Organization</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Company/School (optional)"
                    className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">Area of Interest</label>
                <div className="flex flex-wrap gap-2">
                  {INITIATIVE_OPTIONS.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({ ...formData, initiative: option })}
                      className={`px-3 py-2 rounded-full text-xs font-semibold transition-all ${
                        formData.initiative === option
                          ? "bg-emerald-500 text-white"
                          : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how you'd like to contribute..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none transition-all resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-xl shadow-lg transition-all disabled:opacity-50"
                whileHover={{ scale: sending ? 1 : 1.02 }}
                whileTap={{ scale: sending ? 1 : 0.98 }}
              >
                {sending ? "Sending..." : "🌱 Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
