import { useEffect, useRef, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { gsap } from "gsap";

import Navbar from "./components/Navbar/Navbar";
import FloatingContactActions from "./components/FloatingContactActions/FloatingContactActions";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";

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
  // ROUTE-AWARE SEO METADATA
  // Keep the brand name consistent and expose the correct
  // canonical URL and description for each route.
  // =====================================================

  useEffect(() => {
    const isContact = location.pathname.replace(/\/$/, "") === "/contact";
    const pageTitle = isContact
      ? "Contact DeedBanwao | Property Documentation in Meerut"
      : "DeedBanwao | Property Documentation & Deed Drafting in Meerut";
    const description = isContact
      ? "Contact DeedBanwao in Meerut for property deed drafting, documentation, stamp duty guidance and registration assistance. Call or WhatsApp to discuss your requirement."
      : "DeedBanwao helps with property deed drafting and documentation in Meerut, Uttar Pradesh, including sale deeds, gift deeds, rent agreements, stamp duty guidance and registration assistance.";
    const canonicalUrl = isContact
      ? "https://deedbanwao.com/contact"
      : "https://deedbanwao.com/";

    document.title = pageTitle;

    const setMeta = (selector, attribute, value) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        const [key, name] = attribute;
        element.setAttribute(key, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', ["name", "description"], description);
    setMeta('meta[property="og:title"]', ["property", "og:title"], pageTitle);
    setMeta('meta[property="og:description"]', ["property", "og:description"], description);
    setMeta('meta[property="og:url"]', ["property", "og:url"], canonicalUrl);
    setMeta('meta[name="twitter:title"]', ["name", "twitter:title"], pageTitle);
    setMeta('meta[name="twitter:description"]', ["name", "twitter:description"], description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [location.pathname]);

  // =====================================================
  // UPDATE BROWSER TAB TITLE
  // =====================================================

  useEffect(() => {
    const titles = {
      home:
        "DeedBanwao | Property Documentation & Deed Drafting in Meerut",

      services:
        "DeedBanwao | Property Documentation & Deed Drafting in Meerut",

      process:
        "DeedBanwao | Property Documentation & Deed Drafting in Meerut",

      "why-us":
        "DeedBanwao | Trusted Property Documentation & Deed Drafting in Meerut",

      faq:
        "DeedBanwao | Property Documentation & Deed Drafting FAQs | Meerut",

      contact:
        "DeedBanwao | Contact | Property Documentation & Deed Drafting in Meerut",
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

      <FloatingContactActions />

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
  return <Website />;
};

export default App;
