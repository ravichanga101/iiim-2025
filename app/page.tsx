import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Calendar,
  ChevronRight,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Users,
  ArrowRight,
} from "lucide-react";

import { EnhancedHero } from "@/components/enhanced-hero";
import { QuickLinks } from "@/components/quick-links";
import { CollaborationsSection } from "@/components/collaborations-section";
import { EnhancedRecruiters } from "@/components/enhanced-recruiters";
import { MegaMenu } from "@/components/mega-menu";
import { StatsCounter } from "@/components/stats-counter";
import { AnimatedPrograms } from "@/components/animated-programs";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <GraduationCap className="h-6 w-6 text-primary" /> */}
            <div className="flex flex-col">
              {/* <span className="text-sm font-bold">IIIM</span>
              <span className="text-xs text-muted-foreground">CHARUSAT</span> */}
              <Image
                src="./assets/iiim.png"
                alt="IIIM Logo"
                width={70}
                height={70}
                className="p-3"
              />
            </div>
          </div>
          <MegaMenu />

          <div className="flex items-center gap-2">
            <Button size="sm" className="text-lg font-bold">
              Apply Now
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <EnhancedHero />

        {/* <QuickLinks /> */}

        <section className="container py-6 md:py-24 lg:py-32">
          <div className="mx-auto grid max-w-[58rem] grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                About IIIM
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Excellence in Management Education
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Indukaka Ipcowala Institute of Management (IIIM) is a premier
                business school and a constituent of Charotar University of
                Science and Technology (CHARUSAT).
              </p>
              <p className="text-muted-foreground">
                Established in 2006, IIIM has emerged as one of the leading
                management institutes in Gujarat, offering high-quality
                education with a focus on holistic development of students. Our
                programs are designed to prepare future business leaders with
                strong ethical values and global perspective.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="group">
                  Download Brochure for more info
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline">Virtual Tour</Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://plus.unsplash.com/premium_photo-1682974406904-15916a7501f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=600&width=600"
                alt="IIIM Campus"
                width={600}
                height={600}
                className="rounded-lg object-cover shadow-lg transition-transform hover:scale-105 duration-500"
              />
            </div>
          </div>

          <div className="mx-auto  rounded-lg  p-4 text-center  my-6">
            <h3 className="inline-block text-2xl font-bold rounded-lg bg-primary/10 px-3 py-1 text-primary">
              Vision
            </h3>

            <p className="my-4  text-muted-foreground md:text-xl">
              Apply now to IIIM-CHARUSAT and kickstart your career with top
              companies across industries.
            </p>
            <h3 className="inline-block text-2xl font-bold rounded-lg bg-primary/10 px-3 py-1 text-primary">
              Mission
            </h3>
            <p className="my-4  text-muted-foreground md:text-xl">
              Apply now to IIIM-CHARUSAT and kickstart your career with top
              companies across industries.
            </p>
            {/* <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button variant="secondary" size="lg" className="group">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              >
                Download Placement Brochure
              </Button>
            </div> */}
          </div>
          {/* <div className="mx-auto max-w-5xl space-y-16 text-center">
          
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary">
                Vision
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
                To emerge as an eminent management institute for meeting the
                needs of society by creation and dissemination of world-class
                knowledge.
              </p>
            </div>

           
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary">
                Mission
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
                To develop leaders with excellent entrepreneurial and managerial
                qualities.
              </p>
            </div>
          </div> */}
        </section>
        {/* Learning and Development Section */}
        <section className="container py-12 md:py-12 lg:py-12 bg-primary/5">
          <div className="mx-auto max-w-6xl space-y-16">
            {/* Section Header */}
            <div className="text-center space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
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

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Project-Based Learning */}
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

              {/* State-of-the-Art Research Facilities */}
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

              {/* Holistic Development */}
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

        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Campus Life
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Vibrant Campus Experience
              </h2>
              <p className="text-muted-foreground">
                At IIIM, we believe in holistic development. Our campus offers
                state-of-the-art facilities, vibrant student activities, and a
                conducive environment for learning and growth.
              </p>
              <ul className="grid gap-2">
                {campusFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <feature.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="./assets/campus/vc1.jpg?height=300&width=300"
                alt="Campus Image 1"
                width={300}
                height={300}
                className="rounded-lg object-cover shadow-md transition-transform hover:scale-105 duration-500"
              />
              <Image
                src="./assets/campus/vc2.jpg?height=300&width=300"
                alt="Campus Image 2"
                width={300}
                height={300}
                className="rounded-lg object-cover mt-8 shadow-md transition-transform hover:scale-105 duration-500"
              />
              <Image
                src="./assets/campus/vc3.jpg?height=300&width=300"
                alt="Campus Image 3"
                width={300}
                height={300}
                className="rounded-lg object-cover shadow-md transition-transform hover:scale-105 duration-500"
              />
              <Image
                src="./assets/campus/vc4.jpg?height=300&width=300"
                alt="Campus Image 4"
                width={300}
                height={300}
                className="rounded-lg object-cover mt-8 shadow-md transition-transform hover:scale-105 duration-500"
              />
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
          <div className="container space-y-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Shape Your Future?
              </h2>
              <p className="max-w-[700px] md:text-xl">
                Join IIIM-CHARUSAT and embark on a journey of academic
                excellence and professional growth.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button variant="secondary" size="lg" className="group">
                  Apply Now
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
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
      </main>
      <footer className="border-t bg-background">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {/* <GraduationCap className="h-6 w-6 text-primary" /> */}
                <div className="flex flex-col">
                  {/* <span className="text-sm font-bold">IIIM</span>
                  <span className="text-xs text-muted-foreground">
                    CHARUSAT
                  </span> */}
                  <Image
                    src="./assets/iiim.png"
                    alt="IIIM Logo"
                    width={50}
                    height={50}
                    className="p-2"
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Indukaka Ipcowala Institute of Management (IIIM), a constituent
                of Charotar University of Science and Technology (CHARUSAT).
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Faculty
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Research
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Student Portal
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Library
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Career Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    News & Updates
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    CHARUSAT Campus, Highway, Changa, Anand, Gujarat 388421,
                    India
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <Link
                    href="tel:+912697265011"
                    className="text-muted-foreground hover:text-primary"
                  >
                    +91-7043520693
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <Link
                    href="mailto:info.i2im@charusat.ac.in"
                    className="text-muted-foreground hover:text-primary"
                  >
                    principal.iiim@charusat.ac.in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Indukaka Ipcowala Institute of
              Management (IIIM). All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const campusFeatures = [
  {
    text: "Modern classrooms and lecture halls",
    icon: BookOpen,
  },
  {
    text: "Well-equipped computer labs",
    icon: Users,
  },
  {
    text: "Comprehensive library resources",
    icon: BookOpen,
  },
  {
    text: "Sports and recreation facilities",
    icon: Users,
  },
  {
    text: "Active student clubs and organizations",
    icon: Calendar,
  },
];
