import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import PlaywrightProject from "./pages/projects/PlaywrightProject";
import FlipkartAutomationProject from "./pages/projects/FlipkartAutomationProject";
import EcommerceApiAutomationProject from "./pages/projects/EcommerceApiAutomationProject";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-7DSTM8H0C6", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return (
    <>
      <AnimatePresence
        mode="wait"
        onExitComplete={() =>
          window.scrollTo({ top: 0, left: 0, behavior: "instant" })
        }
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />

          <Route
            path="/projects/:id"
            element={<ProjectDetail />}
          />

          <Route
            path="/projects/playwright-automation"
            element={<PlaywrightProject />}
          />

          <Route
            path="/projects/flipkart-automation"
            element={<FlipkartAutomationProject />}
          />

          <Route
            path="/projects/ecommerce-api-automation"
            element={<EcommerceApiAutomationProject />}
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;