import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

// Videos data with comprehensive content
const videosData = [
    {
        id: 1,
        title: "MSME Registration Complete Guide 2024",
        description: "Comprehensive step-by-step guide to MSME registration in India. Learn about Udyam registration, required documents, and benefits.",
        category: "Tutorial",
        duration: "15:30",
        thumbnail: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample video - replace with actual video URL
        views: "125K",
        likes: "2.3K",
        date: "2024-01-15",
        featured: true,
        tags: ["MSME", "Registration", "Tutorial", "Guide"]
    },
    {
        id: 2,
        title: "Startup Funding Options in India",
        description: "Explore various funding avenues available for Indian startups including government schemes, venture capital, and angel investors.",
        category: "Education",
        duration: "12:45",
        thumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample video - replace with actual video URL
        views: "89K",
        likes: "1.8K",
        date: "2024-01-12",
        featured: false,
        tags: ["Funding", "Startups", "Investment", "Finance"]
    },
    {
        id: 3,
        title: "Success Story: From Idea to IPO",
        description: "Inspiring journey of a startup that grew from a small idea to a successful IPO with our guidance and support.",
        category: "Success Story",
        duration: "18:20",
        thumbnail: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample video - replace with actual video URL
        views: "156K",
        likes: "3.2K",
        date: "2024-01-10",
        featured: true,
        tags: ["Success", "IPO", "Growth", "Case Study"]
    },
    {
        id: 4,
        title: "Digital Marketing for MSMEs",
        description: "Learn effective digital marketing strategies specifically designed for small and medium enterprises to boost online presence.",
        category: "Marketing",
        duration: "14:15",
        thumbnail: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample video - replace with actual video URL
        views: "67K",
        likes: "1.4K",
        date: "2024-01-08",
        featured: false,
        tags: ["Digital Marketing", "MSME", "Online Presence", "Strategy"]
    },
    {
        id: 5,
        title: "Legal Compliance for Startups",
        description: "Essential legal requirements and compliance procedures that every startup must know to operate smoothly in India.",
        category: "Legal",
        duration: "16:30",
        thumbnail: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample video - replace with actual video URL
        views: "43K",
        likes: "980",
        date: "2024-01-05",
        featured: false,
        tags: ["Legal", "Compliance", "Startups", "Regulations"]
    },
    {
        id: 6,
        title: "Export Opportunities for Indian MSMEs",
        description: "Discover global market opportunities and learn how to expand your MSME business internationally with proper guidance.",
        category: "Business Growth",
        duration: "13:45",
        thumbnail: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample video - replace with actual video URL
        views: "78K",
        likes: "1.6K",
        date: "2024-01-03",
        featured: false,
        tags: ["Export", "International", "MSME", "Global Markets"]
    },
    {
        id: 7,
        title: "Technology Adoption for Small Businesses",
        description: "How small businesses can leverage technology to improve efficiency, reduce costs, and scale operations effectively.",
        category: "Technology",
        duration: "11:20",
        thumbnail: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample video - replace with actual video URL
        views: "52K",
        likes: "1.1K",
        date: "2024-01-01",
        featured: false,
        tags: ["Technology", "Digital Transformation", "Efficiency", "Automation"]
    },
    {
        id: 8,
        title: "Client Testimonials & Reviews",
        description: "Hear from our satisfied clients about their experience working with us and how we helped them achieve their business goals.",
        category: "Testimonials",
        duration: "9:30",
        thumbnail: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample video - replace with actual video URL
        views: "34K",
        likes: "720",
        date: "2023-12-30",
        featured: false,
        tags: ["Testimonials", "Reviews", "Client Stories", "Feedback"]
    },
    {
        id: 9,
        title: "Workshop Highlights: MSME Certification",
        description: "Highlights from our recent MSME certification workshop where we helped 50+ businesses get their certificates.",
        category: "Workshop",
        duration: "7:45",
        thumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample video - replace with actual video URL
        views: "28K",
        likes: "650",
        date: "2023-12-28",
        featured: false,
        tags: ["Workshop", "Certification", "MSME", "Training"]
    }
];

// Custom hook for visibility
// const useAlwaysVisible = () => {
//     const [isVisible, setIsVisible] = useState(true);
//     
//     useEffect(() => {
//         setIsVisible(true);
//     }, []);
//     
//     return isVisible;
// };

export default function Videos({ className = "" }) {
    // const alwaysVisible = useAlwaysVisible();
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Get unique categories
    const categories = ["All", ...new Set(videosData.map(video => video.category))];

    // Filter videos by category
    const filteredVideos = selectedCategory === "All" 
        ? videosData 
        : videosData.filter(video => video.category === selectedCategory);

    // Animation variants
    const fadeUp = { 
        visible: { opacity: 1, y: 0 }
    };
    const slideLeft = { 
        visible: { opacity: 1, x: 0 }
    };
    const slideRight = { 
        visible: { opacity: 1, x: 0 }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatDuration = (duration) => {
        return duration;
    };

    return (
        <div 
            className={`mt-[70px] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden ${className}`} 
            style={{ backgroundColor: '#FFFFFF' }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Video Icons */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-4xl opacity-10"
                        animate={{
                            x: [0, 100, -50, 0],
                            y: [0, -80, 40, 0],
                            rotate: [0, 360, -360, 0],
                            scale: [0.5, 1.2, 0.8, 0.5],
                        }}
                        transition={{
                            duration: 20 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 2,
                        }}
                        style={{
                            left: `${10 + i * 12}%`,
                            top: `${20 + i * 8}%`,
                        }}
                    >
                        🎥
                    </motion.div>
                ))}
                
                {/* Animated Lines */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={`line-${i}`}
                        className="absolute h-1 bg-gradient-to-r from-pitama-green-300/40 to-pitama-teal-300/40"
                        animate={{
                            scaleX: [0, 1, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.8,
                        }}
                        style={{
                            width: `${200 + i * 50}px`,
                            left: `${5 + i * 15}%`,
                            top: `${30 + i * 10}%`,
                            transform: `rotate(${i * 15}deg)`,
                        }}
                    />
                ))}
            </div>

            {/* Header Section */}
            <div className="relative z-10 text-center mb-16">
                <motion.div
                    initial="visible"
                    animate="visible"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeUp}
                    transition={{ duration: 0.2004 }}
                >
                    <motion.div 
                        className="text-8xl mb-6"
                        animate={{ 
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        🎥
                    </motion.div>
                    
                    <motion.h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <span className="text-gray-900">Video</span>
                        <span className="bg-gradient-to-r from-pitama-green-500 via-pitama-teal-500 to-pitama-green-500 bg-clip-text text-transparent"> Gallery</span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2004, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        Watch our comprehensive video content covering MSME registration, funding strategies, success stories, and expert insights to help your business grow.
                    </motion.p>
                </motion.div>
            </div>

            {/* Category Filter */}
            <motion.div 
                className="relative z-10 mb-12 flex items-center gap-3 flex-wrap justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2004, delay: 0.4 }}
            >
                {categories.map((category, index) => (
                    <motion.button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`text-sm px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                            selectedCategory === category 
                                ? "bg-gradient-to-r from-pitama-green-500 to-pitama-teal-500 text-white shadow-lg" 
                                : "bg-white text-gray-700 border-2 border-gray-300 hover:border-pitama-green-300 hover:shadow-md"
                        }`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2003, delay: 0.6 + index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {category}
                    </motion.button>
                ))}
            </motion.div>

            {/* Featured Videos */}
            {selectedCategory === "All" && (
                <motion.div
                    className="relative z-10 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2004, delay: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Videos</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {videosData.filter(video => video.featured).map((video, index) => (
                            <motion.div
                                key={video.id}
                                className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group cursor-pointer"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2004, delay: 1.0 + index * 0.1 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                onClick={() => setSelectedVideo(video)}
                            >
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={video.thumbnail} 
                                        alt={video.title}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    
                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <div className="w-0 h-0 border-l-[12px] border-l-pitama-green-500 border-y-[8px] border-y-transparent ml-1" />
                                        </motion.div>
                                    </div>
                                    
                                    {/* Duration */}
                                    <div className="absolute bottom-4 right-4">
                                        <span className="px-2 py-1 bg-black/70 text-white text-sm font-semibold rounded">
                                            {formatDuration(video.duration)}
                                        </span>
                                    </div>
                                    
                                    {/* Featured Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-gradient-to-r from-pitama-green-500 to-pitama-teal-500 text-white text-sm font-semibold rounded-full">
                                            Featured
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pitama-green-600 transition-colors">
                                        {video.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                                        {video.description}
                                    </p>
                                    
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <div className="flex items-center gap-4">
                                            <span>{video.views} views</span>
                                            <span>{video.likes} likes</span>
                                        </div>
                                        <span>{formatDate(video.date)}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Videos Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {filteredVideos.map((video, index) => (
                    <motion.div
                        key={video.id}
                        initial="visible"
                        animate="visible"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={index % 2 === 0 ? slideLeft : slideRight}
                        transition={{ duration: 0.2004, delay: index * 0.1 }}
                        className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group cursor-pointer"
                        whileHover={{ 
                            scale: 1.05, 
                            y: -10,
                            transition: { 
                                duration: 0.2003, 
                                ease: [0.68, -0.55, 0.265, 1.55]
                            }
                        }}
                        onClick={() => setSelectedVideo(video)}
                    >
                        {/* Video Thumbnail */}
                        <div className="relative overflow-hidden">
                            <img 
                                src={video.thumbnail} 
                                alt={video.title}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            
                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className="w-0 h-0 border-l-[10px] border-l-pitama-green-500 border-y-[6px] border-y-transparent ml-1" />
                                </motion.div>
                            </div>
                            
                            {/* Duration */}
                            <div className="absolute bottom-3 right-3">
                                <span className="px-2 py-1 bg-black/70 text-white text-xs font-semibold rounded">
                                    {formatDuration(video.duration)}
                                </span>
                            </div>
                            
                            {/* Category */}
                            <div className="absolute top-3 left-3">
                                <span className="px-2 py-1 bg-white/90 text-gray-800 text-xs font-semibold rounded-full">
                                    {video.category}
                                </span>
                            </div>
                        </div>
                        
                        {/* Video Info */}
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-pitama-green-600 transition-colors line-clamp-2">
                                {video.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                                {video.description}
                            </p>
                            
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                <div className="flex items-center gap-3">
                                    <span>{video.views} views</span>
                                    <span>{video.likes} likes</span>
                                </div>
                                <span>{formatDate(video.date)}</span>
                            </div>
                            
                            {/* Tags */}
                            <div className="flex gap-2 flex-wrap">
                                {video.tags.slice(0, 2).map((tag) => (
                                    <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedVideo(null)} />
                    
                    <motion.div
                        className="relative z-10 max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-auto max-h-[90vh] border border-gray-100"
                        initial={{ y: 50, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 50, opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2003, ease: [0.68, -0.55, 0.265, 1.55] }}
                    >
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-3xl">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">{selectedVideo.title}</h2>
                                <p className="text-gray-600 mt-1">{selectedVideo.views} views • {formatDate(selectedVideo.date)}</p>
                            </div>
                            <motion.button
                                onClick={() => setSelectedVideo(null)}
                                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                ×
                            </motion.button>
                        </div>
                        
                        {/* Video Player */}
                        <div className="p-6">
                            <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-lg">
                                <iframe
                                    src={selectedVideo.videoUrl}
                                    title={selectedVideo.title}
                                    className="absolute top-0 left-0 w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            
                            {/* Video Description */}
                            <div className="mt-6">
                                <p className="text-gray-700 leading-relaxed mb-4">{selectedVideo.description}</p>
                                
                                <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">Duration:</span>
                                        <span>{formatDuration(selectedVideo.duration)}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">Views:</span>
                                        <span>{selectedVideo.views}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">Likes:</span>
                                        <span>{selectedVideo.likes}</span>
                                    </div>
                                </div>
                                
                                {/* Tags */}
                                <div className="flex gap-3 flex-wrap">
                                    {selectedVideo.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-gradient-to-r from-pitama-green-100 to-pitama-teal-100 text-pitama-green-700 rounded-full text-sm font-medium">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}

// PropTypes
Videos.propTypes = {
    className: PropTypes.string,
};
