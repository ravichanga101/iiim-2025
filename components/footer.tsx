import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
function footer() {
  return (
    <footer
      className=" bg-background border-bg-primary border-t-8 border-t-primary "
      id="contact"
    >
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
                  width={80}
                  height={80}
                  className="p-2 w-16 h-20 inline"
                />
                <Image
                  src="./assets/charusatlogo.png"
                  alt="charusat Logo"
                  width={120}
                  height={80}
                  className="p-2 w-auto h-12 inline-flex"
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Indukaka Ipcowala Institute of Management (IIIM), a constituent of
              Charotar University of Science and Technology (CHARUSAT).
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/i2imcharusat/"
                className="text-muted-foreground hover:text-primary"
                target="_blank"
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
              {/* <Link
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
              </Link> */}
              {/* <Link
                href="https://x.com" // Replace with the actual X profile link
                className="text-muted-foreground hover:text-primary"
                target="_blank"
              >
                <span className="sr-only">X</span>
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
                  <path d="M17 3L7 21"></path>
                  <path d="M7 3l10 18"></path>
                </svg>
              </Link> */}
              <Link
                href="https://www.youtube.com/@iiim-charusat?feature=shared"
                className="text-muted-foreground hover:text-primary"
                target="_blank"
              >
                <span className="sr-only">YouTube</span>
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
                  <path d="M22.54 6.42A2.78 2.78 0 0 0 20.8 4.7C19.2 4.25 12 4.25 12 4.25s-7.2 0-8.8.45a2.78 2.78 0 0 0-1.74 1.72A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.74 1.72c1.6.45 8.8.45 8.8.45s7.2 0 8.8-.45a2.78 2.78 0 0 0 1.74-1.72A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/iiim_charusat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="text-muted-foreground hover:text-primary"
                target="_blank"
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
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/school/indukaka-ipcowala-institute-of-management/ "
                className="text-muted-foreground hover:text-primary"
                target="_blank"
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
                  href="https://www.charusat.ac.in/about"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#programs"
                  className="text-muted-foreground hover:text-primary"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="https://admission.charusat.ac.in/"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/faculty"
                  className="text-muted-foreground hover:text-primary"
                >
                  Faculty
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="text-muted-foreground hover:text-primary"
                >
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="http://egov.charusat"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary"
                >
                  e-Governance
                </Link>
              </li>
              <li>
                <Link
                  href="https://charusat.edu.in:912/OthPaymentApp/"
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                >
                  Transcript
                </Link>
              </li>
              {/* <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Library
                </Link>
              </li> */}
              <li>
                <Link
                  href="https://www.charusat.ac.in/careers"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="https://drive.google.com/drive/folders/1ZB0dOEH_F2UwH1I9lPhfhEcYYQ2lbnx3"
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                >
                  Syllabus
                </Link>
              </li>

              <li>
                <Link
                  href="https://drive.google.com/drive/folders/10-XqFw6ISXnDeyajK8oB3YIIj6NfrIyO"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary"
                >
                  Downloads
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
                  CHARUSAT Campus, Highway, Changa, Anand, Gujarat 388421, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <Link
                  href="tel:+912697265011"
                  className="text-muted-foreground hover:text-primary"
                >
                  +91-7043520693 / +91 2697 265172
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
  );
}

export default footer;
