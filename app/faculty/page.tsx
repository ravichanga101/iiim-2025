"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Search } from "lucide-react";
import Link from "next/link";

export default function FacultyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="bg-primary/10 py-12 md:py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Distinguished Faculty
              </h1>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Meet the exceptional educators and researchers who are shaping
                the future of management education at IIIM-CHARUSAT.
              </p>
            </div>
          </div>
        </section>
        <div className="container py-4 text-right">
          <Link href="/" varient="outline" size="sm" className="text-sm">
            ← Back
          </Link>
        </div>

        <section className="container py-12">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Tabs defaultValue="all" className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="professors">Professors</TabsTrigger>
                <TabsTrigger value="associate">Associate</TabsTrigger>
                <TabsTrigger value="assistant">Assistant</TabsTrigger>
                <TabsTrigger value="non-teaching">Non Teaching</TabsTrigger>
              </TabsList>
            </Tabs>
            {/* <div className="relative max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search faculty..."
                className="pl-8"
              />
            </div> */}
          </div>

          <Tabs defaultValue="all">
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {facultyMembers.map((faculty) => (
                  <FacultyCard key={faculty.id} faculty={faculty} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="professors" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {facultyMembers
                  .filter(
                    (f) =>
                      f.designation.includes("Professor") &&
                      !f.designation.includes("Associate") &&
                      !f.designation.includes("Assistant")
                  )
                  .map((faculty) => (
                    <FacultyCard key={faculty.id} faculty={faculty} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="associate" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {facultyMembers
                  .filter((f) => f.designation.includes("Associate Professor"))
                  .map((faculty) => (
                    <FacultyCard key={faculty.id} faculty={faculty} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="assistant" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {facultyMembers
                  .filter((f) => f.designation.includes("Assistant Professor"))
                  .map((faculty) => (
                    <FacultyCard key={faculty.id} faculty={faculty} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  );
}

function FacultyCard({ faculty }) {
  return (
    <div className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
      <div className="aspect-[3/4] overflow-hidden">
        <Image
          src={faculty.image || "/placeholder.svg"}
          alt={faculty.name}
          width={300}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold">{faculty.name}</h3>
        <p className="text-sm text-primary">{faculty.designation}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {faculty.qualification}
        </p>
        <p className="mt-2 text-sm">{faculty.specialization}</p>
        <p className="mt-2 text-sm">
          {" "}
          <Mail className="inline-block mr-2 h-4 w-4" />
          {faculty.email}
        </p>
      </div>
    </div>
  );
}

const facultyMembers = [
  {
    id: 1,
    name: "Dr. Reshma Sable",
    designation: "Professor & I/C. Dean(FMS)",
    qualification: "Ph.D., MBA(HRM),M.Ed.,MSc",
    specialization: "Organisational Behaviour, Emotional Intelligence",
    image: "/assets/faculty_photo/ReshmaSable.webp?height=400&width=300",
    email: "dean.fms@charusat.ac.in",
  },
  {
    id: 2,
    name: "Dr. Binit Patel ",
    designation: "Professor & I/c. Principal",
    qualification: "Ph.D., MBA(Marketing),BE(Computer Science)",
    specialization: "Marketing, Consumer Behavior, General & IT Management",
    image: "/assets/faculty_photo/BinitPatel.webp?height=400&width=300",
    email: "principal.iiim@charusat.ac.in",
  },
  {
    id: 3,
    name: "Dr. Rajesh Sadhwani",
    designation: "Associate Professor",
    qualification: "Ph.D., MBA, M.Com",
    specialization: "Financial Management, Investment Analysis",
    image: "/assets/faculty_photo/RajeshSadhwani.webp?height=400&width=300",
  },
  {
    id: 4,
    name: "Dr. Mukesh Pal",
    designation: "Associate Professor",
    qualification: "Ph.D., MBA",
    specialization: "Human Resource Management, Organizational Behavior",
    image: "/assets/faculty_photo/Mukesh%20Pal.jpg?height=400&width=300",
  },
  {
    id: 5,
    name: "Dr. Geeta Marmat",
    designation: "Assistant Professor",
    qualification: "Ph.D., MBA(Marketing), M.Sc., B.Sc.",
    specialization: "Marketing & Consumer Behaviour",
    image: "/assets/faculty_photo/Geeta%20Marmat.jpg?height=400&width=300",
    email: "geetamarmat.mba@charusat.ac.in",
  },
  {
    id: 6,
    name: "Dr. Gaurav Rajput",
    designation: "Assistant Professor",
    qualification: "MBA, UGC-NET",
    specialization: "Marketing Research, Digital Marketing",
    image: "/assets/faculty_photo/Gaurav%20Rajput.jpg?height=400&width=300",
    email: "gauravrajput.mba@charusat.ac.in",
  },
  {
    id: 7,
    name: "Dr. Pradeep Kumar",
    designation: "Assistant Professor",
    qualification: "Ph.D., MBA",
    specialization: "Business Analytics, Information Systems",
    image: "/assets/faculty_photo/?height=400&width=300",
  },
  {
    id: 8,
    name: "Prof. Anand Mehta",
    designation: "Assistant Professor",
    qualification: "MBA, M.Phil., UGC-NET",
    specialization: "Financial Accounting, Corporate Finance",
    image: "/assets/faculty_photo/?height=400&width=300",
  },
];
