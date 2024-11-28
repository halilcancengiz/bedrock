import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { AppRoutes } from './routes/AppRoutes';
import Loader from './components/Loader';

const Layout = () => {
  const location = useLocation();
  const [contentVisible, setContentVisible] = useState(false); // Başlangıçta false
  const [showLoader, setShowLoader] = useState(true); // Loader başlangıçta gösteriliyor
  const [previousWidth, setPreviousWidth] = useState(window.innerWidth);
  const [previousPathname, setPreviousPathname] = useState(location.pathname);

  const breakpoints = [480, 768, 992];

  const startAnimation = () => {
    setShowLoader(true);
    setContentVisible(false);

    setTimeout(() => {
      setShowLoader(false);
      setContentVisible(true);
    }, 1000); // 1 saniye loader görünsün
  };

  // Sayfa yüklendiğinde animasyonu başlat
  useEffect(() => {
    const handleLoad = () => {
      startAnimation();
    };
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // URL değiştiğinde animasyonu başlat
  useEffect(() => {
    if (location.pathname !== previousPathname) {
      startAnimation();
      setPreviousPathname(location.pathname);
    }
  }, [location.pathname, previousPathname]);

  // Breakpoint kontrolü ve animasyon tetikleme
  useEffect(() => {
    const handleResize = () => {
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
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [previousWidth, breakpoints]);

  return (
    <div className="flex flex-col relative">
      {/* Loader sadece `showLoader` true olduğunda görünüyor */}
      {showLoader && (
        <div className="flex items-center justify-center h-screen w-full">
          <Loader />
        </div>
      )}

      {/* Ana içerik `contentVisible` true olduğunda gösteriliyor */}
      {contentVisible && (
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
