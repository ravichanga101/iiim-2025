"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      quote:
        "IIIM, CHARUSAT provides excellent infrastructure, caring and intellectual faculties. Case based teaching approach broadened my perspectives on Management Issues. It has become helpful in my current role at McDonald's Canada.",
      name: "Kesha Patel",
      position: "National Operations Coordinator (Mc Donalds, Canada)",
      batch: "MBA 2018",
      image:
        "https://plus.unsplash.com/premium_photo-1661683653197-ca2d0aab80eb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=100&width=100",
    },
    {
      quote:
        "IIIM, CHARUSAT has developed my overall personality and boosted confidence in me. Competitive knowledge imparted during my graduation by learned faculty has brightened my career options.",
      name: "Anushka Makwana",
      position: "(IIM, Udaipur)",
      batch: "MBA 2019",
      image:
        "https://plus.unsplash.com/premium_photo-1661683653197-ca2d0aab80eb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=100&width=100",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-2xl font-bold text-primary">
            Success Stories
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            What Our Alumni Say
          </h2>
          <p className="max-w-[700px] text-muted-foreground">
            Hear from our successful graduates about their experiences at
            IIIM-CHARUSAT and how it shaped their careers.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl overflow-hidden px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Card className="border-none bg-transparent shadow-none">
                <CardContent className="pt-6">
                  <div className="relative mb-8 text-center">
                    <Quote className="absolute -top-6 left-1/2 h-12 w-12 -translate-x-1/2 text-primary/20" />
                    <p className="text-lg md:text-xl italic text-center">
                      "{testimonials[current].quote}"
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-center justify-center">
                  {/* <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-primary mb-3">
                    <Image
                      src={testimonials[current].image || "/placeholder.svg"}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div> */}
                  <div className="text-center">
                    <h4 className="font-bold">{testimonials[current].name}</h4>
                    <p className="text-sm text-primary">
                      {testimonials[current].position}
                    </p>
                    {/* <p className="text-xs text-muted-foreground">
                      {testimonials[current].batch}
                    </p> */}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all ${
                  current === index ? "w-8 bg-primary" : "w-2 bg-primary/30"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
