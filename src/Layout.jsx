import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AppRoutes } from "./routes/AppRoutes";
import Loader from "./components/Loader";

const Layout = () => {
  const location = useLocation();
  const [loadingState, setLoadingState] = useState("loading"); // "loading" veya "content" durumu
  const [previousWidth, setPreviousWidth] = useState(window.innerWidth);
  const [previousPathname, setPreviousPathname] = useState(location.pathname);
  const animationTimeout = useRef(null);

  const breakpoints = [480, 768, 992];

  // Animasyonu başlatır
  const startAnimation = () => {
    setLoadingState("loading");

    if (animationTimeout.current) {
      clearTimeout(animationTimeout.current);
    }

    animationTimeout.current = setTimeout(() => {
      setLoadingState("content");
    }, 1000); // 1 saniye loader görünsün
  };

  // Sayfa yüklendiğinde animasyonu başlat
  useEffect(() => {
    const handleLoad = () => {
      startAnimation();
    };
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      if (animationTimeout.current) {
        clearTimeout(animationTimeout.current);
      }
    };
  }, []);

  // URL değiştiğinde animasyonu başlat
  useEffect(() => {
    if (location.pathname !== previousPathname) {
      startAnimation();
      setPreviousPathname(location.pathname);
    }
  }, [location.pathname, previousPathname]);

  // Ekran boyutu değişimlerini izleyerek animasyonu başlatır
  useEffect(() => {
    const debounce = (func, wait) => {
      let timeout;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
      };
    };
     
    const handleResize = debounce(() => {
      const currentWidth = window.innerWidth;

      const isPreviousCrossingBreakpoint = breakpoints.some(
        (bp) =>
          (previousWidth < bp && currentWidth >= bp) ||
          (previousWidth >= bp && currentWidth < bp)
      );

      if (isPreviousCrossingBreakpoint) {
        startAnimation();
      }

      setPreviousWidth(currentWidth);
    }, 200); // 200ms debounce süresi

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [previousWidth, breakpoints]);

  return (
    <div className="flex flex-col relative">
      {/* Loader sadece "loading" durumunda gösteriliyor */}
      {loadingState === "loading" && (
        <div className="flex items-center justify-center h-screen w-full">
          <Loader />
        </div>
      )}

      {/* Ana içerik "content" durumunda gösteriliyor */}
      {loadingState === "content" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <AppRoutes />
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default Layout;
