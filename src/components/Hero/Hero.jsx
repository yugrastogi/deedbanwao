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

  const previousEnquiryState =
    useRef(false);

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
    // INITIAL CONTENT
    // ---------------------------------------------------

    gsap.set(content, {
      x: 0,
      opacity: 1,
    });

    // ---------------------------------------------------
    // INITIAL VISUAL
    // ---------------------------------------------------

    gsap.set(visual, {
      x: 0,
      opacity: 1,
    });

    // ---------------------------------------------------
    // INITIAL IMAGE
    // ---------------------------------------------------

    gsap.set(graphics, {
      display: "flex",
      visibility: "visible",
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      pointerEvents: "auto",
    });

    // ---------------------------------------------------
    // INITIAL FORM
    // ---------------------------------------------------

    gsap.set(form, {
      display: "none",
      visibility: "hidden",
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
      timeline.kill();
    };
  }, []);

  // =====================================================
  // ENQUIRY TRANSITION
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

    const isMobile =
      window.matchMedia(
        "(max-width: 1023px)"
      ).matches;

    // ===================================================
    // FIRST RENDER
    // ===================================================

    if (
      previousEnquiryState.current === false &&
      showEnquiry === false
    ) {
      previousEnquiryState.current = false;
      return;
    }

    // ---------------------------------------------------
    // STOP PREVIOUS TRANSITION
    // ---------------------------------------------------

    gsap.killTweensOf([
      content,
      graphics,
      form,
    ]);

    // ===================================================
    // OPEN
    // ===================================================

    if (
      previousEnquiryState.current === false &&
      showEnquiry === true
    ) {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.inOut",
        },
      });

      if (isMobile) {
        // ------------------------------------------------
        // MOBILE OPEN
        // ------------------------------------------------

        timeline

          .to(
            content,
            {
              x: 0,
              duration: 0.45,
            },
            0
          )

          .to(
            graphics,
            {
              opacity: 0,
              scale: 0.96,
              x: 0,
              y: -5,
              filter: "blur(7px)",
              duration: 0.4,
            },
            0
          )

          .set(graphics, {
            display: "none",
            visibility: "hidden",
            pointerEvents: "none",
          })

          .set(form, {
            display: "block",
            visibility: "visible",
            opacity: 0,
            scale: 0.97,
            x: 0,
            y: 20,
            filter: "blur(7px)",
            pointerEvents: "auto",
          })

          .to(form, {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            duration: 0.55,
          })

          .add(() => {
            requestAnimationFrame(() => {
              form.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            });
          });
      } else {
        // ------------------------------------------------
        // DESKTOP OPEN
        // ------------------------------------------------

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

          .set(graphics, {
            display: "none",
            visibility: "hidden",
            pointerEvents: "none",
          })

          .set(form, {
            display: "block",
            visibility: "visible",
            opacity: 0,
            scale: 0.97,
            x: 25,
            y: 15,
            filter: "blur(7px)",
            pointerEvents: "auto",
          })

          .to(form, {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            duration: 0.55,
          });
      }

      previousEnquiryState.current = true;

      return () => {
        timeline.kill();
      };
    }

    // ===================================================
    // CLOSE
    // ===================================================

    if (
      previousEnquiryState.current === true &&
      showEnquiry === false
    ) {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.inOut",
        },
      });

      if (isMobile) {
        // ------------------------------------------------
        // MOBILE CLOSE
        // ------------------------------------------------

        timeline

          .to(
            form,
            {
              opacity: 0,
              scale: 0.97,
              x: 0,
              y: 20,
              filter: "blur(7px)",
              duration: 0.55,
              pointerEvents: "none",
            },
            0
          )

          .set(form, {
            display: "none",
            visibility: "hidden",
          })

          .set(
            graphics,
            {
              display: "flex",
              visibility: "visible",
              opacity: 0,
              scale: 0.96,
              x: 0,
              y: -5,
              filter: "blur(7px)",
              pointerEvents: "auto",
            },
            0
          )

          .to(
            graphics,
            {
              visibility: "visible",
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              filter: "blur(0px)",
              duration: 0.4,
            },
            0.15
          )

          .to(
            content,
            {
              x: 0,
              duration: 0.45,
            },
            0.15
          )

          .add(() => {
            requestAnimationFrame(() => {
              content.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            });
          }, 0);
      } else {
        // ------------------------------------------------
        // DESKTOP CLOSE
        // ------------------------------------------------

        timeline

          .to(
            form,
            {
              opacity: 0,
              scale: 0.97,
              x: 25,
              y: 15,
              filter: "blur(7px)",
              duration: 0.55,
              pointerEvents: "none",
            },
            0
          )

          .set(form, {
            display: "none",
            visibility: "hidden",
          })

          .set(
            graphics,
            {
              display: "flex",
              visibility: "visible",
              opacity: 0,
              scale: 0.96,
              x: 25,
              y: 0,
              filter: "blur(7px)",
              pointerEvents: "auto",
            },
            0
          )

          .to(
            graphics,
            {
              visibility: "visible",
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              filter: "blur(0px)",
              duration: 0.4,
            },
            0.15
          )

          .to(
            content,
            {
              x: 0,
              duration: 0.45,
            },
            0.15
          );
      }

      previousEnquiryState.current = false;

      return () => {
        timeline.kill();
      };
    }

    previousEnquiryState.current =
      showEnquiry;
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