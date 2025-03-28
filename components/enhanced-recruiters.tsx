"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, ArrowRight } from "lucide-react";

export function EnhancedRecruiters() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Top recruiters with actual company names
  const topRecruiters = [
    {
      name: "Tata Consultancy Services",
      logo: "./assets/company_logo/tcs.jpg?height=100&width=200 ",
    },
    {
      name: "Asian Paints",
      logo: "./assets/company_logo/ap.jpg?height=100&width=200",
    },
    {
      name: "Bajaj",
      logo: "./assets/company_logo/bajaj.jpg?height=100&width=200",
    },
    {
      name: "Reliance Industries",
      logo: "./assets/company_logo/axis.jpg?height=100&width=200",
    },
    {
      name: "HDFC Bank",
      logo: "./assets/company_logo/induslnd.jpg?height=100&width=200",
    },
    {
      name: "ICICI Bank",
      logo: "./assets/company_logo/john.jpg?height=100&width=200",
    },
    {
      name: "Larsen & Toubro",
      logo: "./assets/company_logo/stemmons.jpg?height=100&width=200",
    },
    {
      name: "KPMG",
      logo: "./assets/company_logo/kpmg.jpg?height=100&width=200",
    },
    {
      name: "Berger",
      logo: "./assets/company_logo/berger.jpg?height=100&width=200",
    },
    {
      name: "Digicon",
      logo: "./assets/company_logo/digicon.jpg?height=100&width=200",
    },
    {
      name: "KPMG",
      logo: "./assets/company_logo/dhyey.jpg?height=100&width=200",
    },
    { name: "SNL", logo: "./assets/company_logo/snl.jpg?height=100&width=200" },
    {
      name: "Tech Mahindra",
      logo: "./assets/company_logo/evosys.jpg?height=100&width=200",
    },
    {
      name: "HCL Technologies",
      logo: "./assets/company_logo/icici.jpg?height=100&width=200",
    },
    {
      name: "fincare",
      logo: "./assets/company_logo/lomosq.jpg?height=100&width=200",
    },
  ];

  // Placement statistics
  const placementStats = [
    {
      label: "Placement Rate",
      value: "98%",
      description: "of eligible students placed",
    },
    {
      label: "Average Package",
      value: "₹8.5 LPA",
      description: "for MBA graduates",
    },
    {
      label: "Highest Package",
      value: "₹18 LPA",
      description: "in 2023 placements",
    },
    {
      label: "Recruiting Companies",
      value: "150+",
      description: "across various sectors",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-white">
      <div className="container space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Career Opportunities
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Prestigious Recruiters
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            IIIM-CHARUSAT has a strong network of industry partners who
            regularly recruit our talented graduates.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {placementStats.map((stat, index) => (
            <Card
              key={index}
              className="text-center overflow-hidden transition-all hover:shadow-md"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-primary">
                  {stat.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-medium">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="overflow-hidden border-none bg-gradient-to-r from-primary/5 to-primary/10 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              Top Recruiting Partners
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div
              ref={ref}
              className="grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-5"
            >
              {topRecruiters.map((recruiter, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 text-center"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s ease ${
                      index * 0.05
                    }s, transform 0.5s ease ${index * 0.05}s`,
                  }}
                >
                  <div className="relative h-16 w-full bg-white rounded-lg p-2">
                    <Image
                      src={recruiter.logo || "/placeholder.svg"}
                      alt={recruiter.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* <span className="text-xs font-medium">{recruiter.name}</span> */}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
