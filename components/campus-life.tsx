import React from "react";
import Image from "next/image";
import { BookOpen, Calendar, Users } from "lucide-react";
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

function CampusLife() {
  return (
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
  );
}

export default CampusLife;
