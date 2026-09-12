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
    // IMPORTANT:
    // Only control the INITIAL state here.
    // Do NOT run the close animation on mount.
    // ---------------------------------------------------

    gsap.set(content, {
      x: 0,
      opacity: 1,
    });

    gsap.set(visual, {
      x: 0,
      opacity: 1,
    });

    gsap.set(graphics, {
      display: "flex",
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      pointerEvents: "auto",
    });

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

    return () => {
      // Only kill THIS entrance timeline.
      // Do not kill all tweens on the refs.
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
    // INITIAL RENDER
    // ---------------------------------------------------
    //
    // When showEnquiry is false on the first render,
    // the initial setup above has already handled the
    // correct state.
    //
    // We do NOT run a close animation here.
    // ---------------------------------------------------

    if (!showEnquiry) {
      gsap.set(content, {
        x: 0,
      });

      gsap.set(form, {
        display: "none",
        opacity: 0,
        scale: 0.97,
        x: 25,
        y: 15,
        filter: "blur(7px)",
        pointerEvents: "none",
      });

      gsap.set(graphics, {
        display: "flex",
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
        pointerEvents: "auto",
      });

      return;
    }

    // ---------------------------------------------------
    // OPEN ENQUIRY
    // ---------------------------------------------------

    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.inOut",
      },
    });

    timeline

      // Move left content slightly left
      .to(
        content,
        {
          x: -20,
          duration: 0.45,
        },
        0
      )

      // Fade / move image away
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

      // Hide image after animation
      .set(graphics, {
        display: "none",
        pointerEvents: "none",
      })

      // Prepare form
      .set(form, {
        display: "block",
        opacity: 0,
        scale: 0.97,
        x: 25,
        y: 15,
        filter: "blur(7px)",
        pointerEvents: "auto",
      })

      // Bring form in
      .to(form, {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
        duration: 0.55,
      });

    return () => {
      timeline.kill();
    };
  }, [showEnquiry]);

  // =====================================================
  // CLOSE ENQUIRY
  // =====================================================

  useLayoutEffect(() => {
    if (!showEnquiry) {
      return;
    }

    // This effect intentionally does nothing.
    // The actual close animation is handled below
    // using a stable ref to track the previous state.
  }, []);

  // =====================================================
  // CLOSE ANIMATION
  // =====================================================

  const previousEnquiryState = useRef(false);

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

    // Skip first render.
    if (!previousEnquiryState.current && !showEnquiry) {
      previousEnquiryState.current = showEnquiry;
      return;
    }

    // Only run when changing FROM open -> closed.
    if (
      previousEnquiryState.current === true &&
      showEnquiry === false
    ) {
      gsap.killTweensOf([
        content,
        graphics,
        form,
      ]);

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.inOut",
        },
      });

      timeline

        // Move form out
        .to(
          form,
          {
            opacity: 0,
            scale: 0.97,
            x: 25,
            y: 15,
            filter: "blur(7px)",
            duration: 0.35,
            pointerEvents: "none",
          },
          0
        )

        // Hide form
        .set(form, {
          display: "none",
        })

        // Prepare image
        .set(graphics, {
          display: "flex",
          opacity: 0,
          scale: 0.96,
          x: 25,
          y: 0,
          filter: "blur(7px)",
          pointerEvents: "auto",
        })

        // Bring image back
        .to(
          graphics,
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            duration: 0.6,
          }
        )

        // Restore content
        .to(
          content,
          {
            x: 0,
            duration: 0.45,
          },
          "<"
        );

      previousEnquiryState.current = showEnquiry;

      return () => {
        timeline.kill();
      };
    }

    previousEnquiryState.current = showEnquiry;
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