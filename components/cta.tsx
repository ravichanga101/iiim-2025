import React from "react";
import { ChevronRight, Rocket } from "lucide-react"; // Import Rocket icon
import Link from "next/link";

function CTA() {
  return (
    <section
      className="text-primary-foreground py-12 md:py-24 lg:py-32"
      style={{
        backgroundImage: "url('/assets/hero-slider/slider_2.webp')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container   p-8 w-2/4 sm:w-3/4  bg-primary space-y-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Shape Your Future
          </h2>
          <p className="max-w-[700px] md:text-xl">
            Join IIIM-CHARUSAT and embark on a journey of academic excellence
            and professional growth.
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            {/* Apply Now Button */}
            <Link
              href="https://admission.charusat.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3  
               font-semibold text-primary transition hover:bg-secondary/90"
            >
              <Rocket className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Apply Now
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Career Button with Rocket Icon */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
