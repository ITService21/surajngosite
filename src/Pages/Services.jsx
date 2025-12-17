// ServicesPage.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import demoServices from "../Data/demoServices";



const CATEGORIES = ["All", "Business Setup", "Business Growth", "Business Expansion", "Business Protection"];

export default function ServicesPage({ services = demoServices }) {
    const [activeCategory, setActiveCategory] = useState("All");
    const [modalOpen, setModalOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", phone: "", service: "" });
    const [errors, setErrors] = useState({});
    const closeButtonRef = useRef(null);
    const lastFocusedRef = useRef(null);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setModalOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        if (modalOpen) {
            lastFocusedRef.current = document.activeElement;
            setTimeout(() => {
                if (closeButtonRef.current) closeButtonRef.current.focus();
            }, 60);
        } else {
            if (lastFocusedRef.current?.focus) lastFocusedRef.current.focus();
        }
    }, [modalOpen]);

    const filtered = activeCategory === "All" ? services : services.filter((s) => s.category === activeCategory);

    function validate() {
        const e = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
        if (!form.phone.match(/^[0-9\-\+\s]{7,15}$/)) e.phone = "Valid phone required";
        return e;
    }

    async function handleSubmit(ev) {
        ev.preventDefault();
        const e = validate();
        setErrors(e);
        if (Object.keys(e).length) return;
        setSubmitting(true);
        await new Promise((r) => setTimeout(r, 900));
        setSubmitting(false);
        setModalOpen(false);
        alert("Thanks! We'll contact you shortly (demo).");
        setForm({ name: "", email: "", phone: "", service: "" });
    }

    // Animations
    const modalBackdrop = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    const flyIn = { hidden: { x: 40, opacity: 0 }, visible: { x: 0, opacity: 1 } };
    const flyLeft = { hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } };

    return (
        <div className="min-h-screen bg-white pt-[75px]">
            {/* Header */}
            <header className="bg-white/60 py-10 border-b">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Our 360° Business Support</h1>
                    <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Empowering Startups and MSMEs at every stage — from launch to legacy.</p>

                    {/* Filter pills */}
                    <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
                        {CATEGORIES.map((cat) => {
                            const active = cat === activeCategory;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-shadow ${active
                                            ? "bg-blue-600 text-white shadow-lg"
                                            : "bg-white text-slate-700 border hover:shadow-sm"
                                        }`}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <section className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Left info */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28">
                            <div className="text-6xl font-extrabold text-slate-200">04</div>
                            <h2 className="text-3xl font-extrabold text-slate-900 -mt-10">Business Protection</h2>
                            <div className="mt-4 text-slate-600">
                                Protect what you’ve built — from compliance to IP and contracts, our experts cover the legal ground.
                            </div>

                            <div className="mt-6">
                                <button
                                    onClick={() => setModalOpen(true)}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow"
                                >
                                    Talk to our Business expert
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Services grid filtered */}
                    <div className="lg:col-span-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {filtered.map((s) => (
                                <article key={s.id} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-2xl">
                                            {s.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                                            <p className="text-sm text-slate-600 mt-2">{s.desc}</p>
                                            <div className="mt-4 flex items-center justify-between">
                                                <div className="text-xs text-slate-500">{s.category}</div>
                                                <button
                                                    onClick={() => {
                                                        setForm((f) => ({ ...f, service: s.title }));
                                                        setModalOpen(true);
                                                    }}
                                                    className="px-3 py-1 rounded-full bg-blue-600 text-white text-sm"
                                                >
                                                    Talk
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}

                            {filtered.length === 0 && (
                                <div className="col-span-full text-center py-12 text-slate-500 bg-white rounded-2xl shadow">
                                    No services under <span className="font-semibold">{activeCategory}</span>
                                </div>
                            )}
                        </div>

                        {/* helper box */}
                        <div className="mt-8 bg-blue-50 border-l-4 border-red-400 rounded-xl p-6 flex gap-6 items-start">
                            <div className="w-12 h-12 rounded-md bg-white flex items-center justify-center text-blue-600">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M12 2l3 6 6 .5-4.5 3.8L19 20l-7-4-7 4 1.5-7.7L3 8.5 9 8 12 2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Still Confused?</h4>
                                <p className="text-sm text-slate-600 mt-2">We’ll guide you step-by-step — no jargon, just helpful support.</p>
                                <div className="mt-4">
                                    <button onClick={() => setModalOpen(true)} className="px-4 py-2 rounded-full bg-blue-600 text-white">
                                        Talk to our Business expert →
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* extra content to lengthen page */}
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl p-6 shadow">Additional content card - details</div>
                            <div className="bg-white rounded-2xl p-6 shadow">Another content card</div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Floating CTA */}
            <button
                onClick={() => setModalOpen(true)}
                className="fixed right-6 bottom-6 z-40 inline-flex items-center gap-3 px-4 py-3 rounded-full bg-blue-700 text-white shadow-lg hover:scale-105"
                aria-label="Book Consultation"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 8l7.5 5L18 8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 15V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Book Consultation
            </button>

            {/* Modal */}
            <AnimatePresence>
                {modalOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={modalBackdrop}
                    >
                        <motion.div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setModalOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        <motion.div
                            className="relative z-10 w-full max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2"
                            initial={{ scale: 0.98, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.98, opacity: 0 }}
                        >
                            {/* Left */}
                            <motion.div className="bg-blue-800 text-white p-6 md:p-8 flex flex-col gap-6" variants={flyLeft}>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-md bg-white/10 flex items-center justify-center text-white">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M3 8l7.5 5L18 8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21 15V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">Start Your MSME Growth Journey</h3>
                                        <p className="text-sm text-blue-100/90 mt-1">Book your growth consultation with our experts.</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-3">
                                    <div className="h-24 bg-white/10 rounded-md" />
                                    <div className="h-24 bg-white/10 rounded-md" />
                                    <div className="h-24 bg-white/10 rounded-md" />
                                </div>

                                <div className="mt-auto">
                                    <h4 className="text-sm font-semibold text-blue-100">Our branches</h4>
                                    <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-blue-100/90">
                                        <li>Gandhinagar (HQ)</li>
                                        <li>Vadodara</li>
                                        <li>Dholpur</li>
                                        <li>Chennai</li>
                                        <li>Pune</li>
                                        <li>Bengaluru</li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Right form */}
                            <motion.div className="p-6 md:p-8" variants={flyIn}>
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-2xl font-bold text-slate-900">Book Consultation</h3>
                                    <button ref={closeButtonRef} onClick={() => setModalOpen(false)} aria-label="Close" className="p-2 rounded-md text-slate-500 hover:bg-slate-100">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M6 18L18 6M6 6l12 12" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>

                                <p className="text-sm text-slate-600 mt-2">Fill in the details and we'll reach out within 24 hours to schedule a call.</p>

                                <form className="mt-4 grid grid-cols-1 gap-3" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="text-sm text-slate-700">Full name *</label>
                                        <input
                                            className={`mt-1 w-full rounded-md border px-3 py-2 ${errors.name ? "border-red-400" : "border-slate-200"}`}
                                            value={form.name}
                                            onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label className="text-sm text-slate-700">Email address *</label>
                                        <input
                                            className={`mt-1 w-full rounded-md border px-3 py-2 ${errors.email ? "border-red-400" : "border-slate-200"}`}
                                            value={form.email}
                                            onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                                            placeholder="johndoe@example.com"
                                        />
                                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <label className="text-sm text-slate-700">Contact number *</label>
                                        <input
                                            className={`mt-1 w-full rounded-md border px-3 py-2 ${errors.phone ? "border-red-400" : "border-slate-200"}`}
                                            value={form.phone}
                                            onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                                            placeholder="10-digit mobile number"
                                        />
                                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                                    </div>

                                    <div>
                                        <label className="text-sm text-slate-700">Service of interest</label>
                                        <select
                                            className="mt-1 w-full rounded-md border px-3 py-2 border-slate-200"
                                            value={form.service}
                                            onChange={(e) => setForm((s) => ({ ...s, service: e.target.value }))}
                                        >
                                            <option value="">Select (optional)</option>
                                            {services.map((s) => (
                                                <option key={s.id} value={s.title}>
                                                    {s.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="flex items-center gap-3 mt-2">
                                        <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white shadow">
                                            {submitting ? "Booking..." : "Book Consultation"}
                                        </button>

                                        <button type="button" onClick={() => window.open("tel:+1234567890")} className="px-4 py-2 rounded-full border text-slate-700">
                                            Call us
                                        </button>
                                    </div>

                                    <p className="text-xs text-slate-500 mt-2">By submitting, you agree to our Terms & Privacy. We’ll use your details to contact you about your enquiry.</p>
                                </form>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
