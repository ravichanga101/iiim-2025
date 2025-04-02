import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Building, TrendingUp } from "lucide-react";

export function RecruitersSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Career Opportunities
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Major Recruiters
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            IIIM-CHARUSAT has a strong network of industry partners who
            regularly recruit our talented graduates.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Placement Highlights
              </CardTitle>
              <CardDescription>
                Key statistics from our recent placements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="rounded-lg bg-muted p-4">
                  <div className="text-3xl font-bold text-primary">86%</div>
                  <div className="text-sm text-muted-foreground">
                    Placement Rate
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="text-3xl font-bold text-primary">
                    ₹4.5 LPA
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Average Package
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="text-3xl font-bold text-primary">₹12 LPA</div>
                  <div className="text-sm text-muted-foreground">
                    Highest Package
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="text-3xl font-bold text-primary">75+</div>
                  <div className="text-sm text-muted-foreground">
                    Recruiting Companies
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Detailed Placement Report
              </Button>
            </CardFooter>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                Top Recruiters
              </CardTitle>
              <CardDescription>
                Leading companies that recruit from IIIM-CHARUSAT
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5">
                {topRecruiters.map((recruiter, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    <div className="relative h-16 w-full">
                      <Image
                        src={recruiter.logo || "/placeholder.svg"}
                        alt={recruiter.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium">
                      {recruiter.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Recruiters
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <h3 className="text-center text-2xl font-bold">
            Industry-wise Recruiters
          </h3>

          <Carousel className="w-full">
            <CarouselContent>
              {industryRecruiters.map((industry, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {industry.industry}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        {industry.companies.map((company, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col items-center gap-2 text-center"
                          >
                            <div className="relative h-12 w-full">
                              <Image
                                src={company.logo || "/placeholder.svg"}
                                alt={company.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <span className="text-xs font-medium">
                              {company.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="mx-auto max-w-3xl rounded-lg bg-primary p-8 text-center text-primary-foreground">
          <h3 className="text-2xl font-bold">
            Ready to Join Our Success Story?
          </h3>
          <p className="mt-2 text-primary-foreground/90">
            Apply now to IIIM-CHARUSAT and kickstart your career with top
            companies across industries.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button variant="secondary" size="lg">
              Apply Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
            >
              Download Placement Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const topRecruiters = [
  {
    name: "Google",
    logo: "./assets/company_logo/tcs.jpg?height=100&width=200",
  },
  { name: "Microsoft", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Amazon", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Deloitte", logo: "/placeholder.svg?height=100&width=200" },
  { name: "KPMG", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Infosys", logo: "/placeholder.svg?height=100&width=200" },
  { name: "TCS", logo: "./assets/company_logo/tcs.jpg?height=100&width=200" },
  { name: "Wipro", logo: "/placeholder.svg?height=100&width=200" },
  { name: "HDFC Bank", logo: "/placeholder.svg?height=100&width=200" },
  { name: "ICICI Bank", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Reliance", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Tata Motors", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Unilever", logo: "/placeholder.svg?height=100&width=200" },
  { name: "P&G", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Coca-Cola", logo: "/placeholder.svg?height=100&width=200" },
];

const industryRecruiters = [
  {
    industry: "Technology",
    companies: [
      { name: "Google", logo: "/placeholder.svg?height=100&width=200" },
      { name: "Microsoft", logo: "/placeholder.svg?height=100&width=200" },
      { name: "Amazon", logo: "/placeholder.svg?height=100&width=200" },
      { name: "IBM", logo: "/placeholder.svg?height=100&width=200" },
    ],
  },
  {
    industry: "Consulting",
    companies: [
      { name: "Deloitte", logo: "/placeholder.svg?height=100&width=200" },
      { name: "KPMG", logo: "/placeholder.svg?height=100&width=200" },
      { name: "EY", logo: "/placeholder.svg?height=100&width=200" },
      { name: "PwC", logo: "/placeholder.svg?height=100&width=200" },
    ],
  },
  {
    industry: "Banking & Finance",
    companies: [
      { name: "HDFC Bank", logo: "/placeholder.svg?height=100&width=200" },
      { name: "ICICI Bank", logo: "/placeholder.svg?height=100&width=200" },
      { name: "SBI", logo: "/placeholder.svg?height=100&width=200" },
      { name: "Axis Bank", logo: "/placeholder.svg?height=100&width=200" },
    ],
  },
  {
    industry: "FMCG",
    companies: [
      { name: "Unilever", logo: "/placeholder.svg?height=100&width=200" },
      { name: "P&G", logo: "/placeholder.svg?height=100&width=200" },
      { name: "ITC", logo: "/placeholder.svg?height=100&width=200" },
      { name: "Nestle", logo: "/placeholder.svg?height=100&width=200" },
    ],
  },
  {
    industry: "Manufacturing",
    companies: [
      { name: "Tata Motors", logo: "/placeholder.svg?height=100&width=200" },
      { name: "Reliance", logo: "/placeholder.svg?height=100&width=200" },
      { name: "L&T", logo: "/placeholder.svg?height=100&width=200" },
      { name: "Mahindra", logo: "/placeholder.svg?height=100&width=200" },
    ],
  },
];
