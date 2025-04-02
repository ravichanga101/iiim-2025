"use client";

import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function EnhancedHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      title: "Indukaka Ipcowala Institute of Management",
      subtitle:
        "Shaping future business leaders through excellence in education, research, and innovation",
      image: "./assets/hero-slider/slider_1.webp?height=1080&width=1920",
      cta: "Apply Now",
      secondaryCta: "Virtual Campus Tour",
    },
    {
      title: "Excellence in Management Education",
      subtitle:
        "Ranked among the top management institutes in Gujarat with state-of-the-art facilities",
      image: "./assets/hero-slider/slider_2.webp?height=1080&width=1920",
      cta: "Apply Now",
      secondaryCta: "Student Testimonials",
    },
    {
      title: "Industry-Integrated Curriculum",
      subtitle:
        "Learn from industry experts and gain practical experience through our industry partnerships",
      image: "./assets/hero-slider/slider_1.webp?height=1080&width=1920",
      cta: "Apply Now",
      secondaryCta: "Placement Records",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current || !textRef.current) return;

      const scrollPosition = window.scrollY;
      const parallaxSpeed = 0.5;

      // Parallax effect for background
      parallaxRef.current.style.transform = `translateY(${
        scrollPosition * parallaxSpeed
      }px)`;

      // Fade and slide effect for text
      const opacity = Math.max(1 - scrollPosition / 700, 0);
      const translateY = scrollPosition * 0.3;
      textRef.current.style.opacity = opacity.toString();
      textRef.current.style.transform = `translateY(${-translateY}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[95vh] overflow-hidden">
      {/* Animated Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${slides[currentSlide].image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "120%", // Extra height for parallax movement
          top: "-10%",
        }}
      />

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/10" />

      {/* Content */}
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div ref={textRef} className="max-w-3xl space-y-6">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {slides[currentSlide].title}
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-lg text-white/90 md:text-xl">
              {slides[currentSlide].subtitle}
            </p>
          </motion.div>

          <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
            {/* <Link
              href="https://admission.charusat.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3  
               font-semibold text-primary transition hover:bg-secondary/90"
            > */}
            <Link href="https://admission.charusat.ac.in/" target="_blank">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 group"
              >
                {slides[currentSlide].cta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            {/* </Link> */}
            {/* <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              {slides[currentSlide].secondaryCta}
            </Button> */}
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 pt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? "w-8 bg-primary" : "w-2 bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animated shapes */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 h-full w-full"
          style={{ fill: "white" }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,213.2,141.14c67.6,0,123.64-16.1,180.32-39.94Z" />
        </svg> */}
      </div>
    </section>
  );
}
