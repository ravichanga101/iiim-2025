// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import {
//   BookOpen,
//   Calendar,
//   ChevronRight,
//   GraduationCap,
//   Mail,
//   MapPin,
//   Phone,
//   Users,
//   ArrowRight,
// } from "lucide-react";

import { EnhancedHero } from "@/components/enhanced-hero";
//import { QuickLinks } from "@/components/quick-links";
import { CollaborationsSection } from "@/components/collaborations-section";
import { EnhancedRecruiters } from "@/components/enhanced-recruiters";
//import { MegaMenu } from "@/components/mega-menu";
import { StatsCounter } from "@/components/stats-counter";
import { AnimatedPrograms } from "@/components/animated-programs";
import { TestimonialsSection } from "@/components/testimonials-section";
import CTA from "@/components/cta";
import AboutIIIM from "@/components/about-iiim";
import CampusLife from "@/components/campus-life";

export default function Home() {
  return (
    <div>
      <main className="flex-1">
        <EnhancedHero />

        <AboutIIIM />
        {/* Learning and Development Section */}
        <section className="container py-12 md:py-12 lg:py-12 bg-primary/5">
          <div className="mx-auto max-w-6xl space-y-16">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-2xl font-bold text-primary">
                Best Practices
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Skill Development
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
                At IIIM, we focus on fostering innovation, research, and
                holistic growth to prepare students for the challenges of the
                modern world.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75h4.5m-4.5 4.5h4.5m-9-9h13.5a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25v-9A2.25 2.25 0 014.5 4.5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">
                  Project-Based Learning
                </h3>
                <p className="text-muted-foreground">
                  Engage in hands-on projects that bridge the gap between theory
                  and practice, fostering critical thinking and problem-solving
                  skills.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 0v13m0-13c-3.866 0-7 3.134-7 7h14c0-3.866-3.134-7-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">
                  State-of-the-Art Research Facilities
                </h3>
                <p className="text-muted-foreground">
                  Access cutting-edge research labs and resources to explore
                  innovative ideas and contribute to groundbreaking discoveries.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 0v13m0-13c-3.866 0-7 3.134-7 7h14c0-3.866-3.134-7-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Holistic Development</h3>
                <p className="text-muted-foreground">
                  Participate in activities that nurture your personal,
                  professional, and ethical growth, preparing you for a
                  well-rounded future.
                </p>
              </div>
            </div>
          </div>
        </section>
        <StatsCounter />
        <AnimatedPrograms />

        <CollaborationsSection />

        <TestimonialsSection />

        <EnhancedRecruiters />

        <CampusLife />

        <CTA />
      </main>
    </div>
  );
}
