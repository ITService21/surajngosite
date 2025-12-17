import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaBuilding,
  FaHandHoldingHeart,
  FaLeaf,
  FaPaw,
  FaUsers,
  FaGraduationCap,
  FaTree,
  FaHeart,
  FaBullseye,
  FaEye,
  FaFileContract,
  FaDonate,
  FaHeartbeat,
  FaHandsHelping,
} from "react-icons/fa";

export const NavbarLinks = [
  {
    name: "HOME",
    link: "/home",
    icon: FaHome,
    subLinks: [],
    class: ""
  },
  {
    name: "ABOUT US",
    icon: FaInfoCircle,
    subLinks: [
      { name: "Our Story", link: "/about-us/overview", icon: FaBuilding },
      { name: "Mission", link: "/about-us/mission", icon: FaBullseye },
      { name: "Vision", link: "/about-us/vision", icon: FaEye },
      // { name: "Our Team", link: "/about-us/team", icon: FaUserFriends },
      { name: "Terms of Agreement", link: "/about-us/terms", icon: FaFileContract },
    ],
  },
  {
    name: "OUR INITIATIVES",
    class: "",
    icon: FaHandHoldingHeart,
    subLinks: [
      { name: "All Programs", link: "/services/all", icon: FaHeart },
      { name: "Environmental Conservation", link: "/services/environment", icon: FaLeaf },
      { name: "Animal Welfare", link: "/services/animal-feeding", icon: FaPaw },
      { name: "Women Empowerment", link: "/services/marketing", icon: FaUsers },
      { name: "Education", link: "/services/education", icon: FaGraduationCap },
    ],
  },
  // {
  //   name: "GALLERY",
  //   link: null,
  //   class: "",
  //   icon: FaImages,
  //   subLinks: [
  //     { name: "Photo Albums", link: "/gallery/albums", icon: FaImages },
  //   ],
  // },
  {
    name: "DONATE",
    link: "/donate",
    class: "",
    icon: FaDonate,
    subLinks: [],
  },
  {
    name: "BLOG",
    link: "/blog",
    class: "",
    icon: FaTree,
    subLinks: [],
  },
  {
    name: "GET INVOLVED",
    link: "/contact-us",
    class: "",
    icon: FaEnvelope,
    subLinks: [],
  },
];

export default NavbarLinks;
