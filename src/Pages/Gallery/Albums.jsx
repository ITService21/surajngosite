// import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

// Albums data with relevant images from Pexels
const albumsData = [
    {
        id: 1,
        title: "Startup Success Stories",
        description: "Inspiring journeys of entrepreneurs who built successful businesses with our guidance and support.",
        category: "Success Stories",
        imageCount: 24,
        coverImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        date: "2024-01-15",
        featured: true
    },
    {
        id: 2,
        title: "MSME Registration Events",
        description: "Documenting our MSME registration workshops, seminars, and training sessions across Gujarat.",
        category: "Events",
        imageCount: 18,
        coverImage: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        date: "2024-01-10",
        featured: false
    },
    {
        id: 3,
        title: "Funding Consultation Sessions",
        description: "Behind-the-scenes look at our funding consultation sessions and client meetings.",
        category: "Consultations",
        imageCount: 15,
        coverImage:      "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"        ,
        date: "2024-01-08",
        featured: false
    },
    {
        id: 4,
        title: "Certificate Award Ceremonies",
        description: "Celebrating our clients' achievements as they receive their MSME certificates and awards.",
        category: "Awards",
        imageCount: 20,
        coverImage:"https://images.pexels.com/photos/3184475/pexels-photo-3184475.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
        date: "2024-01-05",
        featured: true
    },
    {
        id: 5,
        title: "Team Building Activities",
        description: "Our team's journey, training sessions, and team building activities that strengthen our bond.",
        category: "Team",
        imageCount: 16,
        coverImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        date: "2024-01-03",
        featured: false
    },
    {
        id: 6,
        title: "Office & Infrastructure",
        description: "A glimpse into our modern office space, meeting rooms, and work environment in Gandhinagar.",
        category: "Office",
        imageCount: 12,
        coverImage: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        date: "2024-01-01",
        featured: false
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

export default function Albums({ className = "" }) {
    // const alwaysVisible = useAlwaysVisible();
    // Modals disabled - no images available yet
    // const [selectedAlbum, setSelectedAlbum] = useState(null);
    // const [selectedImage, setSelectedImage] = useState(null);

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

    return (
        <div 
            className={`mt-[70px] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden ${className}`} 
            style={{ backgroundColor: '#FFFFFF' }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Photo Icons */}
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
                        📸
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
                        📸
                    </motion.div>
                    
                    <motion.h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <span className="text-gray-900">Photo</span>
                        <span className="bg-gradient-to-r from-pitama-green-500 via-pitama-teal-500 to-pitama-green-500 bg-clip-text text-transparent"> Albums</span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2004, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        Explore our collection of photos showcasing our journey, success stories, events, and the vibrant MSME ecosystem we&apos;re building in Gandhinagar.
                    </motion.p>
                </motion.div>
            </div>

            {/* Albums Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {albumsData.map((album, index) => (
                    <motion.div
                        key={album.id}
                        initial="visible"
                        animate="visible"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={index % 2 === 0 ? slideLeft : slideRight}
                        transition={{ duration: 0.2004, delay: index * 0.1 }}
                        className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group"
                        whileHover={{ 
                            scale: 1.05, 
                            y: -10,
                            transition: { 
                                duration: 0.2003, 
                                ease: [0.68, -0.55, 0.265, 1.55]
                            }
                        }}
                    >
                        {/* Album Cover */}
                        <div className="relative overflow-hidden">
                            <img 
                                src={album.coverImage} 
                                alt={album.title}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            
                            {/* Featured Badge */}
                            {album.featured && (
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-gradient-to-r from-pitama-green-500 to-pitama-teal-500 text-white text-sm font-semibold rounded-full">
                                        Featured
                                    </span>
                                </div>
                            )}
                            
                            {/* Image Count */}
                            {/* <div className="absolute top-4 right-4">
                                <span className="px-3 py-1 bg-black/50 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                                    {album.imageCount} photos
                                </span>
                            </div> */}
                            
                            {/* Category */}
                            <div className="absolute bottom-4 left-4">
                                <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-semibold rounded-full">
                                    {album.category}
                                </span>
                            </div>
                        </div>
                        
                        {/* Album Info */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pitama-green-600 transition-colors">
                                {album.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                {album.description}
                            </p>
                            
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-500">
                                    {formatDate(album.date)}
                                </div>
                                {/* <div className="text-gray-400 font-medium text-sm">
                                    Coming Soon
                                </div> */}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// PropTypes
Albums.propTypes = {
    className: PropTypes.string,
};
