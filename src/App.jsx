import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

// =====================================================
// PAGE TITLE
// Changes browser tab title based on current page/section
// =====================================================

const PageTitle = () => {
  const location = useLocation();

  const [section, setSection] = useState("home");

  // =====================================================
  // DETECT CURRENT SECTION WHILE SCROLLING
  // =====================================================

  useEffect(() => {
    // -----------------------------------------------------
    // CONTACT PAGE
    // -----------------------------------------------------

    if (location.pathname === "/contact") {
      setSection("contact");
      return;
    }

    // -----------------------------------------------------
    // HOME PAGE
    // -----------------------------------------------------

    if (location.pathname !== "/") {
      setSection("home");
      return;
    }

    const sections = [
      {
        id: "home",
        title: "DeedBanwao - Home",
      },
      {
        id: "services",
        title: "DeedBanwao - Services",
      },
      {
        id: "process",
        title: "DeedBanwao - Process",
      },
      {
        id: "why-us",
        title: "DeedBanwao - Why Us",
      },
      {
        id: "faq",
        title: "DeedBanwao - FAQs",
      },
    ];

    const handleScroll = () => {
      // -------------------------------------------------
      // POSITION WE USE TO DETERMINE THE ACTIVE SECTION
      // -------------------------------------------------

      const scrollPosition = window.scrollY + 180;

      let currentSection = "home";

      sections.forEach((sectionItem) => {
        const element =
          document.getElementById(sectionItem.id);

        if (!element) return;

        const sectionTop = element.offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = sectionItem.id;
        }
      });

      setSection(currentSection);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [location.pathname]);

  // =====================================================
  // UPDATE BROWSER TAB TITLE
  // =====================================================

  useEffect(() => {
    const titles = {
      home: "DeedBanwao - Home",
      services: "DeedBanwao - Services",
      process: "DeedBanwao - Process",
      "why-us": "DeedBanwao - Why Us",
      faq: "DeedBanwao - FAQs",
      contact: "DeedBanwao - Contact",
    };

    document.title =
      titles[section] || "DeedBanwao";
  }, [section]);

  return null;
};

// =====================================================
// APP
// =====================================================

const App = () => {
  return (
    <BrowserRouter>

      {/* =====================================================
          PAGE TITLE
      ===================================================== */}

      <PageTitle />

      {/* =====================================================
          GLOBAL NAVBAR
      ===================================================== */}

      <Navbar />

      <Routes>

        {/* =================================================
            HOME
        ================================================= */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* =================================================
            CONTACT
        ================================================= */}

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>
  );
};

export default App;