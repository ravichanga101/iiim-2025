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
        {/* <div className="container py-4 text-right">
          <Link href="/" varient="outline" size="sm" className="text-sm">
            ← Back
          </Link>
        </div> */}

        <section className="container mb-12">
          {/* <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Tabs defaultValue="all" className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="professors">Professors</TabsTrigger>
                <TabsTrigger value="associate">Associate</TabsTrigger>
                <TabsTrigger value="assistant">Assistant</TabsTrigger>
                <TabsTrigger value="non-teaching">Non Teaching</TabsTrigger>
              </TabsList>
            </Tabs>
             <div className="relative max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search faculty..."
                className="pl-8"
              />
            </div> 
          </div> */}
          <div className="rounded-lg bg-primary/10 p-2 my-10 text-center shadow-md">
            <h3 className="text-xl font-bold text-primary">
              Management Studies
            </h3>
          </div>
          <Tabs defaultValue="all">
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                {facultyMembers.map((faculty) => (
                  <FacultyCard key={faculty.id} faculty={faculty} />
                ))}
              </div>
            </TabsContent>
            {/* <TabsContent value="professors" className="mt-0">
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
            </TabsContent> */}
          </Tabs>
        </section>
      </main>
    </div>
  );
}

function FacultyCard({ faculty }) {
  return (
    <div className="group overflow-hidden  border bg-background shadow-sm transition-all hover:shadow-md">
      <div className="aspect-[1/1] overflow-hidden">
        <Image
          src={faculty.image || "/placeholder.svg"}
          alt={faculty.name}
          width={275}
          height={275}
          className="h-full w-full object-cover border-2 border-black transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold">{faculty.name}</h3>
        <p className="text-sm text-primary">{faculty.designation}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {faculty.qualification}
        </p>
        <p className="mt-2 text-sm">{faculty.specialization}</p>
        <p className="mt-2 text-xs">
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
    designation: "Dean(FMS)",
    qualification: "Ph.D., MBA(HRM),M.Ed.,MSc",
    specialization: "Organisational Behaviour, Emotional Intelligence",
    image: "/assets/faculty_photo/ReshmaSable.webp?height=275&width=275",
    email: "dean.fms@charusat.ac.in",
  },
  {
    id: 2,
    name: "Dr. Binit Patel ",
    designation: "Principal,IIIM",
    qualification:
      "Ph.D., MBA(Marketing),BE(Computer Science), EP(BA),CORe - Harvard Business School (Online)",
    specialization: "Marketing, Consumer Behavior, General & IT Management",
    image: "/assets/faculty_photo/BinitPatel.webp",
    email: "principal.iiim@charusat.ac.in",
  },
  {
    id: 3,
    name: "Dr. Rajesh Sadhwani",
    designation: "Assistant Professor",
    qualification: "Ph.D., MBA, M.Com",
    specialization: "Financial Management, Investment Analysis",
    image: "/assets/faculty_photo/RajeshSadhwani.webp",
    email: "rajeshsadhwani.mba@charusat.ac.in",
  },
  {
    id: 4,
    name: "Dr. Mukesh Pal",
    designation: "Assistant Professor",
    qualification: "Ph.D., MBA",
    specialization: "Human Resource Management, Organizational Behavior",
    image: "/assets/faculty_photo/Mukesh%20Pal.jpg",
    email: "mukeshpal.mba@charusat.ac.in",
  },
  {
    id: 5,
    name: "Dr. Geeta Marmat",
    designation: "Assistant Professor",
    qualification: "Ph.D., MBA(Marketing), M.Sc., B.Sc.",
    specialization: "Marketing & Consumer Behaviour",
    image: "/assets/faculty_photo/Geeta%20Marmat.jpg",
    email: "geetamarmat.mba@charusat.ac.in",
  },
  {
    id: 6,
    name: "Dr. Gaurav Rajput",
    designation: "Assistant Professor",
    qualification: "MBA, UGC-NET",
    specialization: "Marketing Research, Digital Marketing",
    image: "/assets/faculty_photo/Gaurav%20Rajput.jpg",
    email: "gauravrajput.mba@charusat.ac.in",
  },
  {
    id: 7,
    name: "Dr. Hardi Raval",
    designation: "Assistant Professor",
    qualification: "Ph.D., MBA(HR)",
    specialization: "Human Resources Management",
    image: "/assets/faculty_photo/Hardi%20Raval.jpg",
    email: "hardiraval.mba@charusat.ac.in",
  },
  {
    id: 8,
    name: "Dr. Jaimin Trivedi",
    designation: "Assistant Professor",
    qualification: "Ph.D., M.Phil., MCom",
    specialization: "Accounting, Finance, Business Laws",
    image: "/assets/faculty_photo/Jaimin%20Trivedi.jpg",
    email: "jaimintrivedi.mba@charusat.ac.in",
  },
  {
    id: 9,
    name: "Dr. Ruma Pal",
    designation: "Assistant Professor",
    qualification: "Ph.D.,MBA,BCom",
    specialization: "Serivce & Retail Marketing",
    image: "/assets/faculty_photo/RumaPal.webp",
    email: "rumapal.mba@charusat.ac.in",
  },
  {
    id: 10,
    name: "Dr. Archana Sarkar",
    designation: "Assistant Professor",
    qualification: "Ph.D.,MBA(Marketing),BBA",
    specialization: "Marketing Management/ Entrepreneurship",
    image: "/assets/faculty_photo/ArchanaSarkar.webp",
    email: "archanasarkar.mba@charusat.ac.in",
  },
  {
    id: 11,
    name: "Mr. Kirti Patel",
    designation: "Assistant Professor",
    qualification: "MBA(Marketing),BBA",
    specialization: "Marketing & Brand Management, Business Environment",
    image: "/assets/faculty_photo/Kirti%20Patel.jpg",
    email: "kirtipatel.mba@charusat.ac.in",
  },
  {
    id: 12,
    name: "Ms. Dharti Patel",
    designation: "Assistant Professor",
    qualification: "MBA(Finance),BCom",
    specialization: "Financial Management",
    image: "/assets/faculty_photo/Dharti%20Patel.jpg",
    email: " dhartipatel.mba@charusat.ac.in",
  },
  {
    id: 13,
    name: "Dr. Poonam Amrutia",
    designation: "Assistant Professor",
    qualification: "Ph.D.,MBA",
    specialization: "Marketing Management, Consumer Behaviour, Sustainability",
    image: "/assets/faculty_photo/Dr.%20Poonam%20Amrutia.webp",
    email: "poonamamrutia.mba@charusat.ac.in",
  },
  {
    id: 14,
    name: "Ms. Margi Mehta",
    designation: "Assistant Professor",
    qualification: "Ph.D (Pursuing),MBA(Marketing),BBA",
    specialization: "Marketing Management",
    image: "/assets/faculty_photo/Margi%20Mehta.webp",
    email: "margimehta.mba@charusat.ac.in",
  },
  {
    id: 15,
    name: "Ms. Khushboo Bhatt",
    designation: "Assistant Professor",
    qualification: "Ph.D (Pursuing),MBA(Marketing),BBA",
    specialization:
      "Project Management, General Management, Organizational Behaviour",
    image: "/assets/faculty_photo/khushboo-bhatt.png",
    email: "khushboobhatt.mba@charusat.ac.in",
  },
  {
    id: 16,
    name: "Dr. Shabana Anjum",
    designation: "Assistant Professor",
    qualification: "Ph. D.,MBA,BCom",
    specialization: "H.R., Organisational Behaviour",
    image: "/assets/faculty_photo/shabana-anjum.png",
    email: "shabanaanjum.mba@charusat.ac.in",
  },
  {
    id: 17,
    name: "Dr. Mahendra H Prajapati",
    designation: "Assistant Professor",
    qualification: "Ph. D.,MBA,BCA",
    specialization: "Marketing and IT",
    image: "/assets/faculty_photo/mahendra.png",
    email: "mahendraprajapati.mba@charusat.ac.in",
  },
  {
    id: 18,
    name: "Dr. Gopalbhai G Shah",
    designation: "Assistant Professor",
    qualification: "Ph. D., M.Sc.(IT), M.Sc. (Statistics)",
    specialization: "Data Mining, Statistical Application, Data Analytics",
    image: "/assets/faculty_photo/Gopalbhai.png",
    email: "gopalshah.mba@charusat.ac.in",
  },
  // {
  //   id: 19,
  //   name: "Ms. Aditi Mishra",
  //   designation: "Assistant Professor",
  //   qualification: "Ph. D., M.Sc.(IT), M.Sc. (Statistics)",
  //   specialization: "Data Mining, Statistical Application, Data Analytics",
  //   image: "/assets/faculty_photo/aditi-mishra.png",
  //   email: "aditimishra.mba@charusat.ac.in",
  // },
  {
    id: 20,
    name: "Khushali N Pathak",
    designation: "Assistant Professor",
    qualification: " Ph. D. (Pursuing),MBA,BBA",
    specialization:
      "HR Management, Organizational Behaviour, Marketing Management, General Management",
    image: "/assets/faculty_photo/Khushali-pathak.png",
    email: "khushalipathak.mba@charusat.ac.in",
  },
  {
    id: 21,
    name: "Mr. Surpalsinh B Rathod",
    designation: "Assistant Professor",
    qualification: " Ph. D. (Pursuing),MBA,BBA",
    specialization: "Finance/Accounting",
    image: "/assets/faculty_photo/surpalsinh-rathod.png",
    email: "surpalrathod.mba@charusat.ac.in",
  },
  {
    id: 22,
    name: "Mr. Brijesh Patel",
    designation: "Assistant Professor",
    qualification: " Ph. D. (Pursuing),MHRM",
    specialization:
      "HR Management, Organisational Behaviour, Industrial Relations/Labour laws",
    image: "/assets/faculty_photo/BirjeshPatel.jpg",
    email: "brijeshpatel.mba@charusat.ac.in",
  },
  {
    id: 23,
    name: "Ms. Rania Pathan",
    designation: "Assistant Professor",
    qualification: " Ph. D. (Pursuing),MBA(Finance)",
    specialization: "Financial Accounting",
    image: "/assets/faculty_photo/RaniaPathan.jpg",
    email: "raniapathan.mba@charusat.ac.in",
  },
  {
    id: 24,
    name: "Mrs. Nikita R. Chhasatiya",
    designation: "Assistant Professor",
    qualification: " Ph. D. (Pursuing),MBA",
    specialization: "Human Resources Management, Organizational Behaviour",
    image: "/assets/faculty_photo/Nikita%20Chhasatiya.jpg",
    email: "nikitachhasatiya.mba@charusat.ac.in",
  },
  {
    id: 25,
    name: "Mr. Maharshi Patel",
    designation: "Office Assistant",
    qualification: " MCA",
    specialization: "Microsoft Office, Computer Application",
    image: "/assets/faculty_photo/MaharshiPatel.png",
    email: "maharshipatel.cs@charusat.ac.in",
  },
  {
    id: 26,
    name: "Mr. Snehalkumar Patel",
    designation: "Lab Technician, Technical Associate of Online Education",
    qualification: " BSc.IT, MSc.IT",
    specialization: "Microsoft Specialist and Certified Professional",
    image: "/assets/faculty_photo/Snehalkumar%20Patel.png",
    email: "snehalpatel.mba@charusat.ac.in",
  },
  {
    id: 27,
    name: "Mr. Dipak Patel",
    designation: "Librarian",
    qualification: " BA, M. Lib",
    specialization: "Information collection development and management system",
    image: "/assets/faculty_photo/Dipak%20Patel.jpg",
    email: "dipakpatel.lib@charusat.ac.in",
  },
];
