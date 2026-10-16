import {
  useLayoutEffect,
  useRef,
} from "react";

import { gsap } from "gsap";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const visualRef = useRef(null);

  // =====================================================
  // INITIAL HERO SETUP + ENTRANCE
  // =====================================================

  useLayoutEffect(() => {
    const content = contentRef.current;
    const visual = visualRef.current;

    if (
      !content ||
      !visual
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
      );

    return () => {
      timeline.kill();
    };
  }, []);

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
      />
    </section>
  );
};

export default Hero;
