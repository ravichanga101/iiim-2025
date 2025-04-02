import React from "react";
import Image from "next/image";
import { BookOpen, Calendar, Users } from "lucide-react";

function CampusLife() {
  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container space-y-8">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-2xl font-bold text-primary">
            Campus Life
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Vibrant Campus Experience
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-base">
            At IIIM, we believe in holistic development. Our campus offers
            state-of-the-art facilities, vibrant student activities, and a
            conducive environment for learning and growth.
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-wrap justify-center align-middle gap-4">
          <Image
            src="./assets/campus/vc1.jpg"
            alt="Campus Image 1"
            width={200}
            height={200}
            className="rounded-lg object-cover shadow-md transition-transform hover:scale-105 duration-500"
          />
          <Image
            src="./assets/campus/vc2.jpg"
            alt="Campus Image 2"
            width={200}
            height={200}
            className="rounded-lg object-cover shadow-md transition-transform hover:scale-105 duration-500"
          />
          <Image
            src="./assets/campus/vc3.jpg"
            alt="Campus Image 3"
            width={200}
            height={200}
            className="rounded-lg object-cover shadow-md transition-transform hover:scale-105 duration-500"
          />
          <Image
            src="./assets/campus/vc4.jpg"
            alt="Campus Image 4"
            width={200}
            height={200}
            className="rounded-lg object-cover shadow-md transition-transform hover:scale-105 duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default CampusLife;
