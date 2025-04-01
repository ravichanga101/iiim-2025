import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe } from "lucide-react";

export function CollaborationsSection() {
  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Global Network
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Top International & National Collaborations
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            IIIM-CHARUSAT has established strategic partnerships with leading
            institutions worldwide to enhance academic excellence and research
            opportunities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* International Collaborations */}
          <Card className="overflow-hidden">
            <CardHeader className="pb-0">
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                International Collaborations
              </CardTitle>
              <CardDescription>
                Our global partnerships with prestigious universities and
                institutions
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {internationalCollaborations.map((collab, index) => (
                  <li key={index}>
                    <span className="font-medium">{collab.name}</span> -{" "}
                    {collab.country}
                  </li>
                ))}
              </ul>
            </CardContent>
            {/* <CardFooter>
              <Button variant="outline" className="w-full">
                View All International Partners
              </Button>
            </CardFooter> */}
          </Card>

          {/* National Collaborations */}
          <Card className="overflow-hidden">
            <CardHeader className="pb-0">
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                National Collaborations
              </CardTitle>
              <CardDescription>
                Our partnerships with leading Indian universities and
                organizations
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {nationalCollaborations.map((collab, index) => (
                  <li key={index}>
                    <span className="font-medium">{collab.name}</span> -{" "}
                    {collab.location}
                  </li>
                ))}
              </ul>
            </CardContent>
            {/* <CardFooter>
              <Button variant="outline" className="w-full">
                View All National Partners
              </Button>
            </CardFooter> */}
          </Card>
        </div>

        <div className="mx-auto max-w-3xl rounded-lg bg-primary/5 p-6 text-center">
          <h3 className="text-xl font-bold">Benefits of Our Collaborations</h3>
          <ul className="mt-4 grid gap-2 text-left sm:grid-cols-2">
            <li className="flex items-start gap-2">
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
                className="h-5 w-5 text-primary shrink-0"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Student Exchange Programs</span>
            </li>
            <li className="flex items-start gap-2">
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
                className="h-5 w-5 text-primary shrink-0"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Faculty Exchange Programs</span>
            </li>
            <li className="flex items-start gap-2">
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
                className="h-5 w-5 text-primary shrink-0"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Joint Research Projects</span>
            </li>
            <li className="flex items-start gap-2">
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
                className="h-5 w-5 text-primary shrink-0"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>International Conferences</span>
            </li>
            <li className="flex items-start gap-2">
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
                className="h-5 w-5 text-primary shrink-0"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Dual Degree Programs</span>
            </li>
            <li className="flex items-start gap-2">
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
                className="h-5 w-5 text-primary shrink-0"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Industry Internships</span>
            </li>
          </ul>
          {/* <div className="mt-6">
            <Link href="/collaborations">
              <Button>Get more details</Button>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}

const internationalCollaborations = [
  {
    name: "Harvard Business School",
    country: "USA",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    name: "London School of Economics",
    country: "UK",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    name: "INSEAD",
    country: "France",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    name: "National University of Singapore",
    country: "Singapore",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    name: "University of Toronto",
    country: "Canada",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    name: "Tsinghua University",
    country: "China",
    logo: "/placeholder.svg?height=100&width=200",
  },
];

const nationalCollaborations = [
  {
    name: "IIM Ahmedabad",
    location: "Gujarat",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    name: "IIT Bombay",
    location: "Maharashtra",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    name: "XLRI Jamshedpur",
    location: "Jharkhand",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    name: "ISB Hyderabad",
    location: "Telangana",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    name: "TISS Mumbai",
    location: "Maharashtra",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    name: "Delhi University",
    location: "Delhi",
    logo: "/placeholder.svg?height=100&width=200",
  },
];
