import { useEffect, useRef, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { gsap } from "gsap";

import Navbar from "./components/Navbar/Navbar";
import Disclaimer from "./components/Disclaimer/Disclaimer";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";

// =====================================================
// DISCLAIMER STORAGE KEY
// =====================================================

const DISCLAIMER_STORAGE_KEY =
  "deedbanwao-disclaimer-accepted";

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
        title:
          "DeedBanwao | Property Documentation & Deed Drafting in Meerut",
      },
      {
        id: "services",
        title:
          "DeedBanwao | Property Deed & Documentation Services in Meerut",
      },
      {
        id: "process",
        title:
          "DeedBanwao | Property Documentation Process in Meerut",
      },
      {
        id: "why-us",
        title:
          "DeedBanwao | Trusted Property Documentation in Meerut",
      },
      {
        id: "faq",
        title:
          "DeedBanwao | Property Documentation FAQs | Meerut",
      },
    ];

    const handleScroll = () => {
      // -------------------------------------------------
      // POSITION WE USE TO DETERMINE ACTIVE SECTION
      // -------------------------------------------------

      const scrollPosition =
        window.scrollY + 180;

      let currentSection = "home";

      sections.forEach(
        (sectionItem) => {
          const element =
            document.getElementById(
              sectionItem.id
            );

          if (!element) return;

          const sectionTop =
            element.offsetTop;

          if (
            scrollPosition >=
            sectionTop
          ) {
            currentSection =
              sectionItem.id;
          }
        }
      );

      setSection(currentSection);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
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
      home:
        "DeedBanwao | Property Documentation & Deed Drafting in Meerut",

      services:
        "DeedBanwao | Property Deed & Documentation Services in Meerut",

      process:
        "DeedBanwao | Property Documentation Process in Meerut",

      "why-us":
        "DeedBanwao | Trusted Property Documentation in Meerut",

      faq:
        "DeedBanwao | Property Documentation FAQs | Meerut",

      contact:
        "DeedBanwao | Contact | Property Documentation in Meerut",
    };

    document.title =
      titles[section] ||
      "DeedBanwao | Property Documentation & Deed Drafting in Meerut";
  }, [section]);

  return null;
};

// =====================================================
// ANIMATED ROUTES
// GSAP PAGE TRANSITION
// =====================================================

const AnimatedRoutes = () => {
  const location = useLocation();

  const pageRef = useRef(null);

  // =====================================================
  // PAGE ENTER ANIMATION
  // =====================================================

  useEffect(() => {
    if (!pageRef.current) return;

    const page = pageRef.current;

    // Kill any animation already running
    gsap.killTweensOf(page);

    // -----------------------------------------------------
    // CONTACT PAGE
    // -----------------------------------------------------

    if (
      location.pathname === "/contact"
    ) {
      gsap.fromTo(
        page,
        {
          opacity: 0,
          y: 24,
          filter: "blur(7px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.75,
          ease: "power3.out",
        }
      );

      return;
    }

    // -----------------------------------------------------
    // HOME PAGE
    // -----------------------------------------------------

    gsap.fromTo(
      page,
      {
        opacity: 0,
        y: 18,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.7,
        ease: "power3.out",
      }
    );
  }, [location.pathname]);

  // =====================================================
  // ROUTES
  // =====================================================

  return (
    <div
      ref={pageRef}
      className="min-h-screen"
    >
      <Routes location={location}>
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
    </div>
  );
};

// =====================================================
// WEBSITE
// =====================================================

const Website = () => {
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

      {/* =====================================================
          ANIMATED ROUTES
      ===================================================== */}

      <AnimatedRoutes />
    </BrowserRouter>
  );
};

// =====================================================
// APP
// =====================================================

const App = () => {
  const [disclaimerAccepted, setDisclaimerAccepted] =
    useState(() => {
      return (
        localStorage.getItem(
          DISCLAIMER_STORAGE_KEY
        ) === "true"
      );
    });

  // =====================================================
  // WEBSITE + DISCLAIMER
  //
  // The actual website stays mounted behind the modal.
  // The disclaimer blocks interaction until accepted.
  // =====================================================

  return (
    <>
      <Website />

      {!disclaimerAccepted && (
        <Disclaimer
          onProceed={() =>
            setDisclaimerAccepted(true)
          }
        />
      )}
    </>
  );
};

export default App;