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

    gsap.killTweensOf([
      content,
      visual,
      graphics,
      form,
    ]);

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
      timeline.kill();

      gsap.killTweensOf([
        content,
        visual,
        graphics,
        form,
      ]);
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

    // ===================================================
    // OPEN ENQUIRY
    // ===================================================

    if (showEnquiry) {
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
    }

    // ===================================================
    // CLOSE ENQUIRY
    // ===================================================

    else {
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
    }

    return () => {
      timeline.kill();

      gsap.killTweensOf([
        content,
        graphics,
        form,
      ]);
    };
  }, [showEnquiry]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="
        relative

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