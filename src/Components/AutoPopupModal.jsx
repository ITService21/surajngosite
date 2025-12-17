import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useModal } from "../Context/ModalContext";

export default function AutoPopupModal() {
  const location = useLocation();
  const { openFormModal, isAnyModalOpen } = useModal();
  const { initialPopup, setInitialPopup } = useState(false);
  // Check if user has dismissed popup permanently
  const isPopupDismissed = () => {
    return localStorage.getItem("popupDismissed") === "true";
  };
  useEffect(() => {
     setTimeout(() => {
        openFormModal();
     }, 100);
  }, []);

  useEffect(() => {
    if (isPopupDismissed()) {
      return;
    }

    const isHomePage =
      location.pathname === "/" || location.pathname === "/home";
    const initialDelay = isHomePage ? 100 : 90000; // 5s for home, 90s for others
    console.log("initialPopup", initialPopup);
    console.log(
      `⏰ Setting up popup: ${
        isHomePage ? "5 seconds (home)" : "90 seconds (other page)"
      }`
    );

    // Initial popup
    // const initialTimer = setTimeout(() => {
    // setInitialPopup(false);
    // console.log('✅ Opening initial popup');
    // if (initialPopup===false && !isAnyModalOpen) {
    //     setInitialPopup(true);
    //     openFormModal();
    // }
    // }, initialDelay);

    // Recurring popup every 90 seconds
    const recurringInterval = setInterval(() => {
      console.log(
        "✅ Opening recurring popup (90s interval)",
        localStorage.getItem("isAnyModalOpen"),
        isAnyModalOpen
      );
      if (
        localStorage.getItem("isAnyModalOpen") === "false" &&
        !isAnyModalOpen
      ) {
        openFormModal();
      }
    }, 90000);

    return () => {
      // clearTimeout(initialTimer);
      clearInterval(recurringInterval);
    };
  }, [location.pathname, openFormModal, isAnyModalOpen, initialPopup]);

  // This component doesn't render anything - it just manages timers
  return null;
}
