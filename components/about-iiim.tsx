import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
function AboutIIIM() {
  return (
    <section className="container py-6 md:py-18 lg:py-24">
      <div className="mx-auto grid  grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col  space-y-4">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-2xl font-bold text-primary">
            About IIIM
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Excellence in Management Education
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Indukaka Ipcowala Institute of Management (IIIM) is a premier
            business school and a constituent of Charotar University of Science
            and Technology (CHARUSAT).
          </p>
          <p className="text-muted-foreground">
            Established in 2006, IIIM has emerged as one of the leading
            management institutes in Gujarat, offering high-quality education
            with a focus on holistic development of students. Our programs are
            designed to prepare future business leaders with strong ethical
            values and global perspective.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/assets/files/IIIM-Brochure.pdf" target="_blank">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 group"
              >
                Download Brochure for more info
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            {/* <Button variant="outline">Virtual Tour</Button> */}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-6">
          <Image
            src="/assets/IMG_3433.jpg?height=600&width=600"
            alt="IIIM Campus"
            width={600}
            height={600}
            className="rounded-lg object-cover shadow-lg transition-transform hover:scale-102 duration-500"
          />
          {/* Quality Policy Box */}
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="mt-16 grid gap-8 md:grid-cols-1">
        <div className="rounded-lg bg-primary/10 p-4 text-center shadow-md">
          <h3 className="text-xl font-bold text-primary">Quality Policy</h3>
          <p className="mt-2 text-muted-foreground md:text-lg">
            CHARUSAT is committed to quality in all its endeavors like
            teaching-learning, research and extension; to foster an intellectual
            culture; and develop graduates for a life of purpose,
            service and leadership.
          </p>
        </div>
        <div className="mt-2 grid gap-8 md:grid-cols-2">
          {/* Vision */}
          <div className="rounded-lg bg-primary/10 p-6 shadow-md">
            <h3 className="text-xl font-bold text-primary">Vision</h3>
            <p className="mt-4 text-muted-foreground md:text-lg">
              To emerge as an eminent management institute for meeting the needs
              of society by creation and dissemination of world-class knowledge.
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-lg bg-primary/10 p-6 shadow-md">
            <h3 className="text-xl font-bold text-primary">Mission</h3>
            <p className="mt-4 text-muted-foreground md:text-lg">
              To develop leaders with excellent enterpreneurial and managerial
              qualities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutIIIM;
