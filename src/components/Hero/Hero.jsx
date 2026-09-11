import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

const Hero = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const visualRef = useRef(null);
  const graphicsRef = useRef(null);
  const formRef = useRef(null);

  // =====================================================
  // HERO ENTRANCE ANIMATION
  // =====================================================

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(contentRef.current, {
          x: -35,
          opacity: 0,
          duration: 0.9,
        })
        .from(
          visualRef.current,
          {
            x: 45,
            opacity: 0,
            duration: 1,
          },
          "-=0.65"
        )
        .from(
          graphicsRef.current?.children || [],
          {
            y: 25,
            opacity: 0,
            scale: 0.97,
            stagger: 0.08,
            duration: 0.7,
          },
          "-=0.55"
        );
    }, heroRef);

    return () => context.revert();
  }, []);

  // =====================================================
  // ENQUIRY OPEN / CLOSE ANIMATION
  // =====================================================

  useLayoutEffect(() => {
    if (!graphicsRef.current || !formRef.current) return;

    const context = gsap.context(() => {
      if (showEnquiry) {
        const timeline = gsap.timeline({
          defaults: {
            ease: "power3.inOut",
          },
        });

        timeline
          .to(graphicsRef.current, {
            opacity: 0,
            scale: 0.96,
            y: -10,
            filter: "blur(10px)",
            duration: 0.45,
            pointerEvents: "none",
          })
          .set(graphicsRef.current, {
            display: "none",
          })
          .set(formRef.current, {
            display: "block",
          })
          .fromTo(
            formRef.current,
            {
              opacity: 0,
              scale: 0.97,
              y: 20,
              filter: "blur(8px)",
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.65,
            }
          );
      } else {
        const timeline = gsap.timeline({
          defaults: {
            ease: "power3.inOut",
          },
        });

        timeline
          .to(formRef.current, {
            opacity: 0,
            scale: 0.97,
            y: 15,
            filter: "blur(8px)",
            duration: 0.4,
          })
          .set(formRef.current, {
            display: "none",
          })
          .set(graphicsRef.current, {
            display: "block",
          })
          .fromTo(
            graphicsRef.current,
            {
              opacity: 0,
              scale: 0.96,
              y: 10,
              filter: "blur(10px)",
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.6,
            }
          );
      }
    }, heroRef);

    return () => context.revert();
  }, [showEnquiry]);

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
      {/* Background */}
      <HeroBackground />

      {/* Content */}
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