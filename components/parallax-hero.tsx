"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function ParallaxHero() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current || !textRef.current) return

      const scrollPosition = window.scrollY
      const parallaxSpeed = 0.5

      // Parallax effect for background
      parallaxRef.current.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`

      // Fade and slide effect for text
      const opacity = Math.max(1 - scrollPosition / 700, 0)
      const translateY = scrollPosition * 0.3
      textRef.current.style.opacity = opacity.toString()
      textRef.current.style.transform = `translateY(${-translateY}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "120%", // Extra height for parallax movement
          top: "-10%",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div ref={textRef} className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Indukaka Ipcowala Institute of Management
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-white/90 md:text-xl">
            Shaping future business leaders through excellence in education, research, and innovation
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Explore Programs
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Virtual Campus Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

