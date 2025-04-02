"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";
import Image from "next/image";

// Mega menu data structure
const menuItems = [
  {
    title: "Home",
    href: "/",
    // submenu: [
    //   {
    //     title: "Overview",
    //     items: [
    //       { title: "Our History", href: "/about/history" },
    //       { title: "Mission & Vision", href: "/about/mission-vision" },
    //       { title: "Leadership", href: "/about/leadership" },
    //       { title: "Accreditation", href: "/about/accreditation" },
    //     ],
    //   },
    //   {
    //     title: "Campus",
    //     items: [
    //       { title: "Campus Tour", href: "/about/campus-tour" },
    //       { title: "Facilities", href: "/about/facilities" },
    //       { title: "Location & Maps", href: "/about/location" },
    //       { title: "Virtual Tour", href: "/about/virtual-tour" },
    //     ],
    //   },
    //   {
    //     title: "Community",
    //     items: [
    //       { title: "Alumni", href: "/about/alumni" },
    //       { title: "Partners", href: "/about/partners" },
    //       { title: "Careers at IIIM", href: "/about/careers" },
    //       { title: "News & Events", href: "/about/news-events" },
    //     ],
    //   },
    // ],
  },
  // {
  //   title: "Academics",
  //   href: "/academics",
  //   submenu: [
  //     {
  //       title: "Programs",
  //       items: [
  //         { title: "Undergraduate", href: "/academics/undergraduate" },
  //         { title: "Postgraduate", href: "/academics/postgraduate" },
  //         { title: "Doctoral", href: "/academics/doctoral" },
  //         { title: "Certificate Courses", href: "/academics/certificate" },
  //       ],
  //     },
  //     {
  //       title: "Departments",
  //       items: [
  //         {
  //           title: "Information Technology",
  //           href: "/academics/departments/it",
  //         },
  //         {
  //           title: "Data Science",
  //           href: "/academics/departments/data-science",
  //         },
  //         {
  //           title: "Business Management",
  //           href: "/academics/departments/business",
  //         },
  //         {
  //           title: "Digital Marketing",
  //           href: "/academics/departments/marketing",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Resources",
  //       items: [
  //         { title: "Academic Calendar", href: "/academics/calendar" },
  //         { title: "Library", href: "/academics/library" },
  //         { title: "Research", href: "/academics/research" },
  //         { title: "Faculty Directory", href: "/academics/faculty" },
  //       ],
  //     },
  //   ],
  // },
  {
    title: "Programs",
    href: "/#programs",
  },

  // {
  //   title: "Student Life",
  //   href: "/student-life",
  //   submenu: [
  //     {
  //       title: "Campus Experience",
  //       items: [
  //         { title: "Housing", href: "/student-life/housing" },
  //         { title: "Dining", href: "/student-life/dining" },
  //         { title: "Health & Wellness", href: "/student-life/health" },
  //         { title: "Safety & Security", href: "/student-life/safety" },
  //       ],
  //     },
  //     {
  //       title: "Activities",
  //       items: [
  //         { title: "Clubs & Organizations", href: "/student-life/clubs" },
  //         { title: "Events & Activities", href: "/student-life/events" },
  //         { title: "Sports & Recreation", href: "/student-life/sports" },
  //         { title: "Arts & Culture", href: "/student-life/arts" },
  //       ],
  //     },
  //     {
  //       title: "Support Services",
  //       items: [
  //         { title: "Academic Advising", href: "/student-life/advising" },
  //         { title: "Career Services", href: "/student-life/career" },
  //         { title: "Counseling", href: "/student-life/counseling" },
  //         { title: "Disability Services", href: "/student-life/disability" },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "Research",
  //   href: "/research",
  //   submenu: [
  //     {
  //       title: "Research Areas",
  //       items: [
  //         { title: "Data Analytics", href: "/research/data-analytics" },
  //         { title: "Artificial Intelligence", href: "/research/ai" },
  //         {
  //           title: "Information Systems",
  //           href: "/research/information-systems",
  //         },
  //         {
  //           title: "Digital Transformation",
  //           href: "/research/digital-transformation",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Resources",
  //       items: [
  //         { title: "Research Centers", href: "/research/centers" },
  //         { title: "Publications", href: "/research/publications" },
  //         { title: "Conferences", href: "/research/conferences" },
  //         { title: "Partnerships", href: "/research/partnerships" },
  //       ],
  //     },
  //     {
  //       title: "Opportunities",
  //       items: [
  //         { title: "Student Research", href: "/research/student-research" },
  //         { title: "Research Grants", href: "/research/grants" },
  //         { title: "Collaborations", href: "/research/collaborations" },
  //         { title: "Innovation Hub", href: "/research/innovation" },
  //       ],
  //     },
  //   ],
  // },
  {
    title: "Faculty & Staff",
    href: "/faculty",
  },
  {
    title: "Student Corner",
    href: "/student-corner",
    submenu: [
      {
        title: "Student Resources",
        items: [
          // {
          //   title: "Student Activities",
          //   href: "/assets/files/Student-Activities.pdf",
          //   target: "_blank",
          // },
          {
            title: "Students Handbook",
            href: "https://drive.google.com/drive/folders/1QbifpxXCIHsIMx09Hsnkc71fOvKb-v_c",
            target: "_blank",
          },
          // {
          //   title: "Community Extension Services",
          //   href: "https://drive.google.com/drive/folders/1ZB0dOEH_F2UwH1I9lPhfhEcYYQ2lbnx3",
          //   target: "_blank",
          // },

          // {
          //   title: "Guidance & Counseling",
          //   href: "/assets/files/Guidance-Counseling.pdf",
          //   target: "_blank",
          // },
          {
            title: "Academic Calendar",
            href: "/assets/files/IIIM-Calendar-2024-25.pdf",
            target: "_blank",
          },
          {
            title: "Syllabus",
            href: "https://drive.google.com/drive/folders/1ZB0dOEH_F2UwH1I9lPhfhEcYYQ2lbnx3",
            target: "_blank",
          },
          {
            title: "Downloads",
            href: "https://drive.google.com/drive/folders/10-XqFw6ISXnDeyajK8oB3YIIj6NfrIyO",
            target: "_blank",
          },
          {
            title: "Old-Question Papers",
            href: "https://drive.google.com/drive/u/0/folders/1U1hIPybwqdsF9Nn_K6QKom0Kg5yAWCaW",
            target: "_blank",
          },
        ],
      },
      {
        title: "Important Links",
        items: [
          {
            title: "Transcripts",
            href: "https://charusat.edu.in:912/OthPaymentApp/",
            target: "_blank",
          },
          {
            title: "University Results",
            href: "https://charusat.edu.in:912/Uniexamresult/",
            target: "_blank",
          },
          {
            title: "e-Governance",
            href: "http://egov.charusat/",
            target: "_blank",
          },
          {
            title: "Pay Fees",
            href: "https://support.charusat.edu.in/FeesPaymentApp/",
            target: "_blank",
          },
        ],
      },
      // {
      //   title: "Academic Resources",
      //   items: [
      //     {
      //       title: "Academic Calendar",
      //       href: "/assets/files/IIIM-Calendar-2024-25.pdf",
      //       target: "_blank",
      //     },
      //     {
      //       title: "Syllabus",
      //       href: "https://drive.google.com/drive/folders/1ZB0dOEH_F2UwH1I9lPhfhEcYYQ2lbnx3",
      //       target: "_blank",
      //     },
      //     {
      //       title: "Downloads",
      //       href: "https://drive.google.com/drive/folders/10-XqFw6ISXnDeyajK8oB3YIIj6NfrIyO",
      //       target: "_blank",
      //     },
      //     {
      //       title: "Old-Question Papers",
      //       href: "https://drive.google.com/drive/u/0/folders/1U1hIPybwqdsF9Nn_K6QKom0Kg5yAWCaW",
      //       target: "_blank",
      //     },
      //   ],
      // },
    ],
  },
  {
    title: "Newsletter",
    href: "https://google.charusat.ac.in/",
    target: "_blank",
  },
  {
    title: "Alumni",
    href: "https://alumni.charusat.ac.in/",
    target: "_blank",
  },
  {
    title: "Careers",
    href: "https://www.charusat.ac.in/careers",
    target: "_blank",
  },
  {
    title: "Admissions",
    href: "https://admission.charusat.ac.in",
    target: "_blank",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(
    null
  );
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMobile();
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus when switching between mobile and desktop
  useEffect(() => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
    setMobileSubmenuOpen(null);
  }, [isMobile]);

  // Handle desktop mega menu
  const handleMouseEnter = (title: string) => {
    if (!isMobile) {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout); // Clear any pending close timeout
        setHoverTimeout(null);
      }
      setOpenMenu(title);
    }
  };

  const handleMouseLeave = () => {
    console.log("mouse leave event");
    if (!isMobile) {
      const timeout = setTimeout(() => {
        setOpenMenu(null); // Close the menu after a delay
      }, 5000); // Adjust the delay (in milliseconds) as needed
      setHoverTimeout(timeout);
    }
  };
  const handleSubmenuMouseEnter = (openMenu) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout); // Prevent closing when hovering over the submenu
      setHoverTimeout(null);
    }
    setOpenMenu(openMenu);
  };

  const handleSubmenuMouseLeave = () => {
    if (!isMobile) {
      const timeout = setTimeout(() => {
        setOpenMenu(null); // Close the menu after a delay
      }, 200); // Adjust the delay (in milliseconds) as needed
      setHoverTimeout(timeout);
    }
  };

  // Toggle mobile submenu
  const toggleMobileSubmenu = (title: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === title ? null : title);
  };

  // Close mobile menu when ESC key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setOpenMenu(null);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm dark:bg-gray-900/95"
          : "bg-white dark:bg-gray-900"
      )}
    >
      {/* Top bar with contact info */}
      {/* <div className="hidden border-b bg-muted/40 px-4 py-1 dark:border-gray-800 sm:block">
        <div className="container mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <span>Email: info@iiim.edu</span>
            <span>Phone: +91 1234 567890</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/alumni" className="hover:underline">
              Alumni
            </Link>
            <Link href="/careers" className="hover:underline">
              Careers
            </Link>
            <Link href="/news" className="hover:underline">
              News
            </Link>
          </div>
        </div>
      </div> */}

      {/* Main navigation */}
      <div className="container mx-auto px-2">
        <div className="flex h-12 items-center justify-between md:h-16">
          {/* Logo */}
          {/* <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary">
              <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-primary-foreground">
                II
              </div>
            </div>
            <span className="text-xl font-bold">IIIM</span>
          </Link> */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              alt="IIM logo"
              src="./assets/iiim.png"
              height={80}
              width={80}
              className="h-10 w-10 p-1 md:h-16 md:w-16 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block" ref={menuRef}>
            <nav className="relative">
              <ul className="flex space-x-1">
                {menuItems.map((item) => (
                  <li
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      target={item.target || "_self"}
                      className={cn(
                        "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                        openMenu === item.title &&
                          "bg-accent text-accent-foreground"
                      )}
                      onClick={(e) => {
                        if (item.submenu) {
                          e.preventDefault();
                          setOpenMenu(
                            openMenu === item.title ? null : item.title
                          );
                        }
                      }}
                      aria-expanded={openMenu === item.title}
                      aria-haspopup={item.submenu ? "true" : "false"}
                    >
                      {item.title}
                      {item.submenu && (
                        <ChevronDown
                          className={cn(
                            "ml-1 h-4 w-4 transition-transform duration-200",
                            openMenu === item.title && "rotate-180"
                          )}
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mega Menu Container - Positioned outside the nav to avoid overflow issues */}
            <div
              className="absolute left-0 right-0 top-full z-50 mx-auto"
              style={{ width: "90%" }}
            >
              {menuItems.map((item) =>
                item.submenu && openMenu === item.title ? (
                  <div
                    key={`megamenu-${item.title}`}
                    className="container mx-auto px-4"
                    onMouseEnter={() => handleSubmenuMouseEnter(item.title)} // Keep menu open when hovering over submenu
                    onMouseLeave={handleSubmenuMouseLeave} // Close menu when leaving submenu
                    role="button"
                  >
                    <div
                      className={cn(
                        "mx-auto   rounded-md border bg-card p-6 shadow-lg",
                        "transition-all duration-200 ease-in-out",
                        "opacity-100 translate-y-0"
                      )}
                      style={{
                        maxHeight: "calc(100vh - 12rem)",
                        overflowY: "auto",
                        width: "50%",
                      }}
                    >
                      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2 mx-10">
                        {item.submenu.map((section) => (
                          <div key={section.title} className="space-y-3">
                            <h3 className="font-semibold text-primary">
                              {section.title}
                            </h3>
                            <ul className="space-y-2">
                              {section.items.map((subItem) => (
                                <li key={subItem.title}>
                                  <Link
                                    href={subItem.href}
                                    target={subItem.target || "_self"}
                                    className="group flex items-center rounded-md px-4 py-1 text-sm transition-colors hover:bg-muted"
                                  >
                                    <span>{subItem.title}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>

          {/* CTA and Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            {/* <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button> */}
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="https://admission.charusat.ac.in" target="_blank">
                Apply Now
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-all duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        style={{ top: "32px" }}
      >
        <div
          className={cn(
            "fixed inset-x-0 top-2 z-40 h-[calc(100vh-4rem)] overflow-y-auto bg-background pb-2 shadow-lg transition-transform duration-300 ease-in-out md:hidden",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="container divide-y">
            {/* <div className="py-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </div> */}

            {menuItems.map((item) => (
              <div key={item.title} className="py-2">
                {item.submenu ? (
                  <button
                    onClick={() => toggleMobileSubmenu(item.title)}
                    className="flex w-full items-center justify-between py-3 text-left text-lg font-medium"
                    aria-expanded={mobileSubmenuOpen === item.title}
                  >
                    {item.title}
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform duration-200",
                        mobileSubmenuOpen === item.title && "rotate-180"
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}

                {/* Mobile Submenu */}
                {item.submenu && (
                  <div
                    className={cn(
                      "mt-2 space-y-4 pl-4 overflow-hidden transition-all duration-300 ease-in-out",
                      mobileSubmenuOpen === item.title
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    )}
                  >
                    {item.submenu.map((section) => (
                      <div key={section.title} className="space-y-2">
                        <h3 className="text-md font-semibold text-primary">
                          {section.title}
                        </h3>
                        <ul className="space-y-2 pl-2">
                          {section.items.map((subItem) => (
                            <li key={subItem.title}>
                              <Link
                                href={subItem.href}
                                className="flex items-center py-2 text-sm"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <ChevronRight className="mr-1 h-3 w-3 text-primary" />
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="py-4">
              <Button asChild className="w-full">
                <Link
                  href="/admissions/apply"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Apply Now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
