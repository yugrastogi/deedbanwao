import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { gsap } from "gsap";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

const Hero = () => {
  const [showEnquiry, setShowEnquiry] =
    useState(false);

  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const visualRef = useRef(null);
  const graphicsRef = useRef(null);
  const formRef = useRef(null);

  const animationRef = useRef(null);
  const hasMountedRef = useRef(false);

  // =====================================================
  // INITIAL HERO SETUP + ENTRANCE
  // =====================================================

  useLayoutEffect(() => {
    const content = contentRef.current;
    const visual = visualRef.current;
    const graphics = graphicsRef.current;
    const form = formRef.current;

    if (
      !content ||
      !visual ||
      !graphics ||
      !form
    ) {
      return;
    }

    // ---------------------------------------------------
    // INITIAL CONTENT STATE
    // ---------------------------------------------------

    gsap.set(content, {
      x: 0,
      opacity: 1,
    });

    // ---------------------------------------------------
    // INITIAL VISUAL STATE
    // ---------------------------------------------------

    gsap.set(visual, {
      x: 0,
      opacity: 1,
    });

    // ---------------------------------------------------
    // INITIAL IMAGE STATE
    // ---------------------------------------------------

    gsap.set(graphics, {
      display: "flex",
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      pointerEvents: "auto",
    });

    // ---------------------------------------------------
    // INITIAL FORM STATE
    // ---------------------------------------------------

    gsap.set(form, {
      display: "none",
      opacity: 0,
      scale: 0.97,
      x: 25,
      y: 15,
      filter: "blur(7px)",
      pointerEvents: "none",
    });

    // ---------------------------------------------------
    // HERO ENTRANCE
    // ---------------------------------------------------

    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    timeline
      .from(content, {
        x: -35,
        opacity: 0,
        duration: 0.8,
      })
      .from(
        visual,
        {
          x: 35,
          opacity: 0,
          duration: 0.85,
        },
        "-=0.55"
      )
      .from(
        graphics,
        {
          y: 18,
          opacity: 0,
          scale: 0.98,
          duration: 0.7,
        },
        "-=0.55"
      );

    hasMountedRef.current = true;

    return () => {
      timeline.kill();
    };
  }, []);

  // =====================================================
  // ENQUIRY OPEN / CLOSE
  // =====================================================

  useLayoutEffect(() => {
    const content = contentRef.current;
    const graphics = graphicsRef.current;
    const form = formRef.current;

    if (
      !content ||
      !graphics ||
      !form
    ) {
      return;
    }

    // ---------------------------------------------------
    // Don't run transition on initial render
    // ---------------------------------------------------

    if (!hasMountedRef.current) {
      return;
    }

    // ---------------------------------------------------
    // Kill any previous transition
    // ---------------------------------------------------

    if (animationRef.current) {
      animationRef.current.kill();
      animationRef.current = null;
    }

    // ===================================================
    // OPEN ENQUIRY
    // ===================================================

    if (showEnquiry) {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.inOut",
        },
      });

      animationRef.current = timeline;

      // -------------------------------------------------
      // Make sure image is currently available
      // -------------------------------------------------

      gsap.set(graphics, {
        display: "flex",
        pointerEvents: "auto",
      });

      // -------------------------------------------------
      // Move content + image away together
      // -------------------------------------------------

      timeline
        .to(
          content,
          {
            x: -20,
            duration: 0.45,
          },
          0
        )

        .to(
          graphics,
          {
            opacity: 0,
            scale: 0.96,
            x: 25,
            filter: "blur(7px)",
            duration: 0.4,
          },
          0
        )

        // ------------------------------------------------
        // Only hide image AFTER fade-out is complete
        // ------------------------------------------------

        .set(graphics, {
          display: "none",
          pointerEvents: "none",
        })

        // ------------------------------------------------
        // Prepare form
        // ------------------------------------------------

        .set(form, {
          display: "block",
          opacity: 0,
          scale: 0.97,
          x: 25,
          y: 15,
          filter: "blur(7px)",
          pointerEvents: "auto",
        })

        // ------------------------------------------------
        // Bring form in
        // ------------------------------------------------

        .to(form, {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          duration: 0.55,
        });

      return () => {
        if (animationRef.current === timeline) {
          timeline.kill();
          animationRef.current = null;
        }
      };
    }

    // ===================================================
    // CLOSE ENQUIRY
    // ===================================================

    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.inOut",
      },
    });

    animationRef.current = timeline;

    // ---------------------------------------------------
    // FORM REVERSES OPENING
    // ---------------------------------------------------

    timeline
      .to(
        form,
        {
          opacity: 0,
          scale: 0.97,
          x: 25,
          y: 15,
          filter: "blur(7px)",
          pointerEvents: "none",
          duration: 0.55,
        },
        0
      )

      // -------------------------------------------------
      // IMPORTANT:
      // Hide form only AFTER its animation is finished
      // -------------------------------------------------

      .set(form, {
        display: "none",
      })

      // -------------------------------------------------
      // IMPORTANT:
      // Explicitly restore image to its starting state
      // -------------------------------------------------

      .set(graphics, {
        display: "flex",
        opacity: 0,
        scale: 0.96,
        x: 25,
        y: 0,
        filter: "blur(7px)",
        pointerEvents: "auto",
      })

      // -------------------------------------------------
      // Bring image back
      // -------------------------------------------------

      .to(
        graphics,
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          duration: 0.55,
        },
        0.12
      )

      // -------------------------------------------------
      // Restore content at same time as image
      // -------------------------------------------------

      .to(
        content,
        {
          x: 0,
          duration: 0.45,
        },
        0.12
      );

    return () => {
      if (animationRef.current === timeline) {
        timeline.kill();
        animationRef.current = null;
      }
    };
  }, [showEnquiry]);

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <section
      ref={heroRef}
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-white
      "
    >
      <HeroBackground />

      <HeroContent
        contentRef={contentRef}
        visualRef={visualRef}
        graphicsRef={graphicsRef}
        formRef={formRef}
        showEnquiry={showEnquiry}
        setShowEnquiry={setShowEnquiry}
      />
    </section>
  );
};

export default Hero;