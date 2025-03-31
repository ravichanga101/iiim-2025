import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
function CTA() {
  return (
    <section className="bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
      <div className="container space-y-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Shape Your Future?
          </h2>
          <p className="max-w-[700px] md:text-xl">
            Join IIIM-CHARUSAT and embark on a journey of academic excellence
            and professional growth.
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Link
              href="https://admission.charusat.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3  
               font-semibold text-primary transition hover:bg-secondary/90"
            >
              Apply Now
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            {/* <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Request Information
                </Button>
                */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
