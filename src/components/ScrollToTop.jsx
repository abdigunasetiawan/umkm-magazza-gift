import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll ke paling atas setiap kali path berubah
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
