import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FloatingWhatsApp from "./Components/FloatingWhatsApp";
import ScrollToTop from "./Components/ScrollToTop";
import { ModalProvider, useModal } from "./Context/ModalContext";
import AutoPopupModal from "./Components/AutoPopupModal";
import FormModal from "./Components/FormModal";

// Pages
import AnimatedBanner from "./Binner/Binner";
import ContactUs from "./Pages/Contact";
import CompanyOverview from "./Pages/CompanyOverview";
import ServicesPage from "./Pages/Services";
import BlogPage from "./Pages/Blog";

// About Us Pages
import Mission from "./Pages/AboutUs/Mission";
import Vision from "./Pages/AboutUs/Vision";
import OurTeam from "./Pages/AboutUs/OurTeam";
import TermsOfAgreement from "./Pages/AboutUs/TermsOfAgreement";
import Donation from "./Pages/AboutUs/Donation";

// Service Pages
import AllServices from "./Pages/Services/AllServices";
import FundingConsultant from "./Pages/Services/FundingConsultant";
import CertificateConsultant from "./Pages/Services/CertificateConsultant";
import MarketingServices from "./Pages/Services/MarketingServices";
import LegalServices from "./Pages/Services/LegalServices";
import CommunityHealth from "./Pages/Services/CommunityHealth";
import CommunityDevelopment from "./Pages/Services/CommunityDevelopment";

// Gallery Pages
import Albums from "./Pages/Gallery/Albums";
import Videos from "./Pages/Gallery/Videos";
import { useEffect } from "react";


// Inner component to access modal context
function AppContent() {
  const { showFormModal, closeFormModal } = useModal();

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<AnimatedBanner />} />
            <Route path="/home" element={<AnimatedBanner />} />
            <Route path="/contact-us" element={<ContactUs />} />
            
            {/* About Us Routes */}
            <Route path="/about-us/overview" element={<CompanyOverview />} />
            <Route path="/about-us/mission" element={<Mission />} />
            <Route path="/about-us/vision" element={<Vision />} />
            <Route path="/about-us/team" element={<OurTeam />} />
            <Route path="/about-us/terms" element={<TermsOfAgreement />} />
            
            {/* Donation Route */}
            <Route path="/donate" element={<Donation />} />
            
            {/* Services Routes */}
            <Route path="/service" element={<ServicesPage />} />
            <Route path="/services/all" element={<AllServices />} />
            <Route path="/services/environment" element={<FundingConsultant />} />
            <Route path="/services/animal-feeding" element={<CertificateConsultant />} />
            <Route path="/services/marketing" element={<MarketingServices />} />
            <Route path="/services/education" element={<LegalServices />} />
            <Route path="/services/health" element={<CommunityHealth />} />
            <Route path="/services/community" element={<CommunityDevelopment />} />
            
            {/* Gallery Routes */}
            <Route path="/gallery/albums" element={<Albums />} />
            <Route path="/gallery/videos" element={<Videos />} />
            
            {/* Blog Route */}
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
      
        <Footer />
        <FloatingWhatsApp />
        <AutoPopupModal />
        
        {/* Centralized FormModal - Single Instance */}
        <FormModal 
          open={showFormModal} 
          onClose={closeFormModal} 
        />
      </div>
    </Router>
  );
}

function App() {
  useEffect(() => {
    localStorage.setItem('isAnyModalOpen', 'false');
  }, []);
  
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  );
}

export default App;
