import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import demoPosts from "../Data/EnhancedBlog";

export default function BlogPage({ initialPosts = null }) {
    const posts = initialPosts || demoPosts;

    // UI state
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeTag, setActiveTag] = useState("");
    const [visibleCount, setVisibleCount] = useState(6); // load more step
    const [selectedPost, setSelectedPost] = useState(null);

    // debounce query
    useEffect(() => {
        const t = setTimeout(() => setDebouncedQuery(query.trim().toLowerCase()), 300);
        return () => clearTimeout(t);
    }, [query]);

    // derive categories and tags
    const categories = useMemo(() => {
        const s = new Set(posts.map((p) => p.category).filter(Boolean));
        return ["All", ...Array.from(s)];
    }, [posts]);

    const tags = useMemo(() => {
        const s = new Set();
        posts.forEach((p) => (p.tags || []).forEach((t) => s.add(t)));
        return Array.from(s).sort();
    }, [posts]);

    // filtered posts
    const filtered = useMemo(() => {
        let arr = posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
        if (activeCategory !== "All") arr = arr.filter((p) => p.category === activeCategory);
        if (activeTag) arr = arr.filter((p) => (p.tags || []).includes(activeTag));
        if (debouncedQuery) {
            arr = arr.filter(
                (p) =>
                    p.title.toLowerCase().includes(debouncedQuery) ||
                    (p.excerpt || "").toLowerCase().includes(debouncedQuery) ||
                    (p.author || "").toLowerCase().includes(debouncedQuery)
            );
        }
        return arr;
    }, [posts, activeCategory, activeTag, debouncedQuery]);

    // featured post is first post or latest in filtered list
    const featured = filtered[0] || posts[0];
    const gridPosts = filtered.slice(1, visibleCount); // exclude featured from grid

    // reset visibleCount when filters change
    useEffect(() => {
        setVisibleCount(6);
    }, [activeCategory, activeTag, debouncedQuery]);

    // modal/reader focus
    const closeRef = useRef(null);
    const postsRef = useRef(null);
    
    useEffect(() => {
        if (selectedPost) setTimeout(() => closeRef.current?.focus(), 50);
    }, [selectedPost]);

    // Scroll to results only when user explicitly searches
    const scrollToResults = () => {
        if (postsRef.current) {
            postsRef.current.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    };

    // helper format
    const formatDate = (d) => {
        try {
            return new Date(d).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
        } catch {
            return d;
        }
    };

    return (
        <div className="min-h-screen pt-[75px] bg-gradient-to-br from-emerald-50 via-white to-teal-50">
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
                
                {/* Green Geometric Objects - Reduced for Performance */}
                {[...Array(6)].map((_, i) => {
                    const shapes = [
                        "w-12 h-12 sm:w-16 sm:h-16 rounded-full",
                        "w-10 h-10 sm:w-14 sm:h-14 rounded-lg",
                        "w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-emerald-400/20",
                        "w-8 h-8 sm:w-12 sm:h-12 transform rotate-45",
                        "w-14 h-14 sm:w-18 sm:h-18 rounded-lg transform rotate-12",
                        "w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                    ];
                    
                    return (
                        <motion.div
                            key={i}
                            className={`absolute ${shapes[i % shapes.length]} bg-gradient-to-r from-emerald-400/15 to-teal-400/15`}
                            animate={{
                                x: [0, 80, -40, 0],
                                y: [0, -60, 30, 0],
                                rotate: [0, 90, -90, 0],
                                scale: [0.7, 1.2, 0.8, 0.7],
                            }}
                            transition={{
                                duration: 15 + i * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 2,
                            }}
                            style={{
                                left: `${15 + i * 15}%`,
                                top: `${25 + i * 10}%`,
                            }}
                        />
                    );
                })}
                
                {/* Animated Lines - Green Theme */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={`line-${i}`}
                        className="absolute h-1 sm:h-2 bg-gradient-to-r from-emerald-400/20 to-teal-400/20"
                        animate={{
                            scaleX: [0, 1, 0],
                            opacity: [0, 0.4, 0],
                        }}
                        transition={{
                            duration: 4 + i * 1,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 1.5,
                        }}
                        style={{
                            width: `${150 + i * 30}px`,
                            left: `${20 + i * 25}%`,
                            top: `${30 + i * 20}%`,
                            transform: `rotate(${45 + i * 30}deg)`,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                {/* Header */}
                <motion.header 
                    className="mb-16 text-center"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2001, delay: 0.1 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.div 
                        className="text-6xl mb-6"
                        animate={{ 
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        📖
                    </motion.div>
                    <motion.h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2002, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.span 
                            className="text-gray-900"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2002, delay: 0.3 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Stories of
                        </motion.span>
                        <motion.span 
                            className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent"
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2002, delay: 0.4 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {" "}Impact
                        </motion.span>
                    </motion.h1>
                    <motion.p 
                        className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2002, delay: 0.5 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Inspiring articles, guides, and stories about environmental conservation, and empowerment initiatives across India.
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div 
                        className="mt-12 flex justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2002, delay: 0.6 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <div className="w-full md:w-1/2">
                            <label className="relative block">
                                <span className="sr-only">Search posts</span>
                                <motion.input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            scrollToResults();
                                        }
                                    }}
                                    placeholder="Search articles, authors, keywords..."
                                    className="w-full rounded-2xl border-2 border-gray-300 px-6 py-4 pr-12 text-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 shadow-lg"
                                    whileFocus={{ scale: 1.02 }}
                                />
                                <motion.div 
                                    className="absolute right-4 top-0 bottom-0 flex items-center justify-center text-gray-400 text-xl cursor-pointer hover:text-emerald-500 transition-colors"
                                    animate={{ 
                                        scale: query ? [1, 1.2, 1] : 1,
                                        rotate: query ? [0, 10, -10, 0] : 0
                                    }}
                                    transition={{ duration: 0.2001 }}
                                    onClick={scrollToResults}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    🔍
                                </motion.div>
                            </label>
                            
                            {/* Search Status Indicator */}
                            {query && (
                                <motion.div 
                                    className="mt-2 text-center"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <div className="flex items-center justify-center gap-3">
                                        {filtered.length > 0 && (
                                            <motion.button
                                                onClick={scrollToResults}
                                                className="text-xs px-3 py-1 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                View Results ↓
                                            </motion.button>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>

                    {/* Category Filters */}
                    <motion.div 
                        className="mt-8 flex items-center gap-3 flex-wrap justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2002, delay: 0.7 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        {categories.map((c, index) => (
                            <motion.button
                                key={c}
                                onClick={() => {
                                    setActiveCategory(c);
                                    setActiveTag("");
                                }}
                                className={`text-sm px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                    activeCategory === c 
                                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg" 
                                        : "bg-white text-gray-700 border-2 border-gray-300 hover:border-emerald-300 hover:shadow-md"
                                }`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2002, delay: 0.8 + index * 0.1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {c}
                            </motion.button>
                        ))}
                    </motion.div>
                </motion.header>

                {/* Featured */}
                {featured && (
                    <motion.article 
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2001, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <motion.div 
                            className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group"
                            initial={{ opacity: 0, x: -120, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.2001, delay: 0.3, ease: [0.05001, 0.46, 0.45, 0.94] }}
                            viewport={{ once: false, amount: 0.2 }}
                            whileHover={{ scale: 1.02, y: -10 }}
                        >
                            <div className="relative overflow-hidden">
                                <img src={featured.image} alt={featured.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold rounded-full">
                                        Featured
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center justify-between gap-4 mb-4">
                                    <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 text-sm font-semibold rounded-full">
                                        {featured.category}
                                    </span>
                                    <div className="text-sm text-gray-500">{formatDate(featured.date)} • {featured.author}</div>
                                </div>

                                <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{featured.title}</h2>
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">{featured.excerpt}</p>

                                <div className="flex items-center justify-between">
                                    <motion.button
                                        onClick={() => setSelectedPost(featured)}
                                        className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Read Full Article
                                    </motion.button>

                                    <div className="flex gap-2">
                                        {(featured.tags || []).slice(0, 3).map((t) => (
                                            <span key={t} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
                                                #{t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.aside 
                            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 flex flex-col"
                            initial={{ opacity: 0, x: 120, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.2001, delay: 0.4, ease: [0.05001, 0.46, 0.45, 0.94] }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h3>
                            <ul className="space-y-4">
                                {posts.slice(0, 4).map((p, index) => (
                                    <motion.li 
                                        key={p.id} 
                                        className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
                                        onClick={() => setSelectedPost(p)}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2002, delay: 0.5 + index * 0.1 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <img src={p.image} alt={p.title} className="w-20 h-16 object-cover rounded-xl flex-shrink-0" />
                                        <div className="flex-1">
                                            <h4 className="text-sm font-semibold text-gray-900 hover:text-emerald-600 transition-colors line-clamp-2">
                                                {p.title}
                                            </h4>
                                            <div className="text-xs text-gray-500 mt-1">{formatDate(p.date)}</div>
                                            <div className="text-xs text-emerald-600 font-medium mt-1">{p.category}</div>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.aside>
                    </motion.article>
                )}

                {/* tags filter */}
                <motion.div 
                    className="mb-12 flex items-center gap-3 flex-wrap justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2002, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.button
                        onClick={() => setActiveTag("")}
                        className={`text-sm px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                            activeTag === "" 
                                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg" 
                                : "bg-white text-gray-700 border-2 border-gray-300 hover:border-emerald-300 hover:shadow-md"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        All Tags
                    </motion.button>
                    {tags.map((t, index) => (
                        <motion.button
                            key={t}
                            onClick={() => setActiveTag((s) => (s === t ? "" : t))}
                            className={`text-sm px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                activeTag === t 
                                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg" 
                                    : "bg-white text-gray-700 border-2 border-gray-300 hover:border-emerald-300 hover:shadow-md"
                            }`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2002, delay: 0.3 + index * 0.05 }}
                            viewport={{ once: false, amount: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            #{t}
                        </motion.button>
                    ))}
                </motion.div>

                {/* posts grid */}
                <motion.section 
                    ref={postsRef} 
                    aria-labelledby="articles" 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.2002, delay: 0.1 }}
                    viewport={{ once: false, amount: 0.15 }}
                >
                    {gridPosts.map((p, index) => (
                        <motion.article
                            key={p.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group cursor-pointer"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -120 : 120, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.2001, delay: index * 0.1, ease: [0.05001, 0.46, 0.45, 0.94] }}
                            viewport={{ once: false, amount: 0.2 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            onClick={() => setSelectedPost(p)}
                        >
                            <div className="relative overflow-hidden">
                                <img src={p.image} alt={p.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold rounded-full">
                                        {p.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                    <div className="font-medium">{p.author}</div>
                                    <div>{formatDate(p.date)}</div>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                                    {p.title}
                                </h4>
                                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {p.excerpt}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2 flex-wrap">
                                        {(p.tags || []).slice(0, 2).map((t) => (
                                            <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
                                                #{t}
                                            </span>
                                        ))}
                                    </div>

                                    <motion.button 
                                        className="text-sm text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                                        whileHover={{ x: 5 }}
                                    >
                                        Read More →
                                    </motion.button>
                                </div>
                            </div>
                        </motion.article>
                    ))}

                    {filtered.length <= 1 && (
                        <motion.div 
                            className="col-span-full text-center py-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2002 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
                            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                        </motion.div>
                    )}
                </motion.section>

                {/* load more */}
                {filtered.length > gridPosts.length + 1 && (
                    <motion.div 
                        className="mt-16 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2002, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.button
                            onClick={() => setVisibleCount((c) => c + 6)}
                            className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Load More Articles
                        </motion.button>
                    </motion.div>
                )}

                
            </div>

            {/* Article modal / reader */}
            <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedPost(null)} />

                        <motion.div
                            className="relative z-10 max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-auto max-h-[90vh] border border-gray-100"
                            initial={{ y: 50, opacity: 0, scale: 0.9 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 50, opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2003, ease: [0.68, -0.55, 0.265, 1.55] }}
                        >
                            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-3xl">
                                <div className="flex items-center gap-4">
                                    <span className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold rounded-full">
                                        {selectedPost.category}
                                    </span>
                                    <h2 className="text-2xl font-bold text-gray-900">{selectedPost.title}</h2>
                                </div>
                                <motion.button
                                    onClick={() => setSelectedPost(null)}
                                    aria-label="Close"
                                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    ref={closeRef}
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </motion.button>
                            </div>

                            <div className="p-8">
                                {selectedPost.image && (
                                    <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-80 object-cover rounded-2xl mb-8 shadow-lg" />
                                )}

                                <div className="flex items-center gap-6 text-sm text-gray-600 mb-8 pb-6 border-b border-gray-200">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">Author:</span>
                                        <span>{selectedPost.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">Date:</span>
                                        <span>{formatDate(selectedPost.date)}</span>
                                    </div>
                                </div>

                                <div className="prose max-w-none">
                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">{selectedPost.excerpt}</p>
                                    <div className="text-gray-800 leading-relaxed space-y-4">
                                        {selectedPost.body.split('\n').map((paragraph, index) => (
                                            <p key={index} className="text-base leading-relaxed">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                                    <div className="flex gap-3 flex-wrap">
                                        {(selectedPost.tags || []).map((t) => (
                                            <span key={t} className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-medium">
                                                #{t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// PropTypes
BlogPage.propTypes = {
    initialPosts: PropTypes.array,
};
