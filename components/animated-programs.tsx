"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  GraduationCap,
  Users,
  Clock,
  ArrowRight,
  Calendar,
  Award,
  Briefcase,
} from "lucide-react";

export function AnimatedPrograms() {
  const [activeTab, setActiveTab] = useState("all");

  const programs = {
    all: [
      {
        title: "MBA",
        subtitle: "Master of Business Administration",
        description:
          "A two-year full-time program with specializations in Marketing, Finance, Human Resources, and Operations Management.",
        icon: GraduationCap,
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=300&width=500?height=300&width=500",
        features: [
          { icon: Clock, text: "2 Years Full-time" },
          { icon: Calendar, text: "June Intake" },
          { icon: Award, text: "AICTE Approved" },
          { icon: Briefcase, text: "Industry Internship" },
        ],
      },
      {
        title: "BBA",
        subtitle: "Bachelor of Business Administration",
        description:
          "A three-year undergraduate program focusing on fundamental business concepts and management principles.",
        icon: BookOpen,
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=300&width=500",
        features: [
          { icon: Clock, text: "3 Years Full-time" },
          { icon: Calendar, text: "June Intake" },
          { icon: Award, text: "UGC Approved" },
          { icon: Briefcase, text: "Summer Internship" },
        ],
      },
      {
        title: "Executive MBA",
        subtitle: "For Working Professionals",
        description:
          "A flexible program designed for working professionals to enhance their management skills while continuing their careers.",
        icon: Users,
        image:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=300&width=500",
        features: [
          { icon: Clock, text: "18 Months" },
          { icon: Calendar, text: "Weekend Classes" },
          { icon: Award, text: "AICTE Approved" },
          { icon: Briefcase, text: "Industry Projects" },
        ],
      },
    ],
    postgraduate: [
      {
        title: "MBA",
        subtitle: "Master of Business Administration",
        description:
          "A two-year full-time program with specializations in Marketing, Finance, Human Resources, and Operations Management.",
        icon: GraduationCap,
        image: "/placeholder.svg?height=300&width=500",
        features: [
          { icon: Clock, text: "2 Years Full-time" },
          { icon: Calendar, text: "June Intake" },
          { icon: Award, text: "AICTE Approved" },
          { icon: Briefcase, text: "Industry Internship" },
        ],
      },
      {
        title: "Executive MBA",
        subtitle: "For Working Professionals",
        description:
          "A flexible program designed for working professionals to enhance their management skills while continuing their careers.",
        icon: Users,
        image: "/placeholder.svg?height=300&width=500",
        features: [
          { icon: Clock, text: "18 Months" },
          { icon: Calendar, text: "Weekend Classes" },
          { icon: Award, text: "AICTE Approved" },
          { icon: Briefcase, text: "Industry Projects" },
        ],
      },
    ],
    undergraduate: [
      {
        title: "BBA",
        subtitle: "Bachelor of Business Administration",
        description:
          "A three-year undergraduate program focusing on fundamental business concepts and management principles.",
        icon: BookOpen,
        image: "/placeholder.svg?height=300&width=500",
        features: [
          { icon: Clock, text: "3 Years Full-time" },
          { icon: Calendar, text: "June Intake" },
          { icon: Award, text: "UGC Approved" },
          { icon: Briefcase, text: "Summer Internship" },
        ],
      },
    ],
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-muted/20">
      <div className="container space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Academic Excellence
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Academic Programs
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            IIIM offers a range of undergraduate and postgraduate programs
            designed to prepare students for leadership roles in the global
            business environment.
          </p>

          <Tabs
            defaultValue="all"
            className="w-full max-w-md"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All Programs</TabsTrigger>
              <TabsTrigger value="postgraduate">Postgraduate</TabsTrigger>
              <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {programs[activeTab].map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 },
                }}
              >
                <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                        {program.subtitle}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <program.icon className="h-6 w-6 text-primary" />
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <feature.icon className="h-4 w-4 text-primary" />
                          <span className="text-sm">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full group">
                      Program Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* <div className="flex justify-center pt-8">
          <Button variant="outline" size="lg">
            View All Academic Programs
          </Button>
        </div>
        */}
      </div>
    </section>
  );
}
