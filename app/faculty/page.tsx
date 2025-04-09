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
    <div className="group flex flex-col overflow-hidden w-[260px] max-w-[400px] border bg-primary/10 shadow-sm transition-all hover:shadow-md rounded-xl mx-auto">
      {/* Faculty Image */}
      <div className="overflow-hidden mx-auto p-4">
        <Image
          src={faculty.image || "/placeholder.svg"}
          alt={faculty.name}
          width={165}
          height={165}
          className="mx-auto object-cover border-2 border-red-600 transition-transform duration-300 rounded-xl"
        />
      </div>

      {/* Faculty Info */}
      <div className="flex flex-col flex-1 p-4 text-center">
        <h3 className="font-bold text-lg">{faculty.name}</h3>
        <p className="text-sm text-primary">{faculty.designation}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {faculty.qualification}
        </p>
        <p className="mt-2 text-sm">{faculty.specialization}</p>

        {/* Email Section */}
        <div className="mt-auto pt-4 text-xs">
          <Mail className="inline-block mr-2 h-4 w-4" />
          {faculty.email}
        </div>
      </div>
    </div>
  );
}

const facultyMembers = [
  {
    id: 1,
    name: "Dr. Reshma Sable",
    designation: "Dean(FMS)",
    qualification: "PhD, MBA(HRM),M.Ed.,MSc",
    specialization: "Organisational Behaviour, Emotional Intelligence",
    image: "/assets/faculty/1_Dr. Reshma Sable.png",
    email: "dean.fms@charusat.ac.in",
  },
  {
    id: 2,
    name: "Dr. Binit Patel ",
    designation: "Principal,IIIM",
    qualification:
      "PhD, MBA(Marketing),BE(Computer Science), EP(BA),CORe - Harvard Business School (Online)",
    specialization: "Marketing, Consumer Behavior, General & IT Management",
    image: "/assets/faculty/2_Dr. Binit Patel.png",
    email: "principal.iiim@charusat.ac.in",
  },
  {
    id: 3,
    name: "Dr. Rajesh Sadhwani",
    designation: "Assistant Professor",
    qualification: "PhD, MBA, M.Com",
    specialization: "Financial Management, Investment Analysis",
    image: "/assets/faculty/3_Dr. Rajesh Sadhwani.png",
    email: "rajeshsadhwani.mba@charusat.ac.in",
  },
  {
    id: 4,
    name: "Dr. Mukesh Pal",
    designation: "Assistant Professor",
    qualification: "PhD, MBA",
    specialization: "Human Resource Management, Organizational Behavior",
    image: "/assets/faculty/4_Dr. Mukesh Pal.png",
    email: "mukeshpal.mba@charusat.ac.in",
  },
  {
    id: 5,
    name: "Ms. Dharti Patel",
    designation: "Assistant Professor",
    qualification: "MBA(Finance),BCom",
    specialization: "Financial Management",
    image: "/assets/faculty/5_Ms. Dharti Patel.png",
    email: " dhartipatel.mba@charusat.ac.in",
  },
  {
    id: 6,
    name: "Dr. Hardi Raval",
    designation: "Assistant Professor",
    qualification: "PhD, MBA(HR)",
    specialization: "Human Resources Management",
    image: "/assets/faculty/6_Dr. Hardi Raval.png",
    email: "hardiraval.mba@charusat.ac.in",
  },
  {
    id: 7,
    name: "Dr. Gaurav Rajput",
    designation: "Assistant Professor",
    qualification: "MBA, UGC-NET",
    specialization: "Marketing Research, Digital Marketing",
    image: "/assets/faculty/7_Dr. Gaurav Rajput.png",
    email: "gauravrajput.mba@charusat.ac.in",
  },
  {
    id: 8,
    name: "Mr. Kirti Patel",
    designation: "Assistant Professor",
    qualification: "PhD(Pursuing),MBA(Marketing),BBA",
    specialization: "Marketing & Brand Management, Business Environment",
    image: "/assets/faculty/8_Mr. Kirti Patel.png",
    email: "kirtipatel.mba@charusat.ac.in",
  },
  {
    id: 9,
    name: "Dr. Geeta Marmat",
    designation: "Assistant Professor",
    qualification: "PhD, MBA(Marketing), M.Sc., B.Sc.",
    specialization: "Marketing & Consumer Behaviour",
    image: "/assets/faculty/9_Dr. Geeta Marmat.png",
    email: "geetamarmat.mba@charusat.ac.in",
  },
  {
    id: 10,
    name: "Dr. Archana Sarkar",
    designation: "Assistant Professor",
    qualification: "PhD,MBA(Marketing),BBA",
    specialization: "Marketing Management/ Entrepreneurship",
    image: "/assets/faculty/10_Dr. Archana Sarkar.png",
    email: "archanasarkar.mba@charusat.ac.in",
  },
  {
    id: 11,
    name: "Dr. Ruma Pal",
    designation: "Assistant Professor",
    qualification: "PhD,MBA,BCom",
    specialization: "Serivce & Retail Marketing",
    image: "/assets/faculty/11_Dr. Ruma Pal.png",
    email: "rumapal.mba@charusat.ac.in",
  },
  {
    id: 12,
    name: "Dr. Poonam Amrutia",
    designation: "Assistant Professor",
    qualification: "PhD, MBA",
    specialization: "Marketing Management, Consumer Behaviour, Sustainability",
    image: "/assets/faculty/12_Dr. Poonam Amrutia.png",
    email: "poonamamrutia.mba@charusat.ac.in",
  },
  {
    id: 13,
    name: "Ms. Margi Mehta",
    designation: "Assistant Professor",
    qualification: "PhD(Pursuing),MBA(Marketing),BBA",
    specialization: "Marketing Management",
    image: "/assets/faculty/13_Ms. Margi Mehta.png",
    email: "margimehta.mba@charusat.ac.in",
  },

  {
    id: 14,
    name: "Dr. Jaimin Trivedi",
    designation: "Assistant Professor",
    qualification: "PhD, M.Phil., MCom",
    specialization: "Accounting, Finance, Business Laws",
    image: "/assets/faculty/14_Dr. Jaimin Trivedi.png",
    email: "jaimintrivedi.mba@charusat.ac.in",
  },
  {
    id: 15,
    name: "Dr. Divyang Purohit",
    designation: "Assistant Professor",
    qualification: "PhD, MBA (Marketing), B.E. (Mechanical)",
    specialization: "Marketing, Entrepreneurship, International Business, HRM",
    image: "/assets/faculty/15_Dr. Divyang Purohit.png",
    email: "divyangpurohit.mba@charusat.ac.in",
  },
  {
    id: 16,
    name: "Ms. Khushboo Bhatt",
    designation: "Assistant Professor",
    qualification: "PhD(Pursuing),MBA(Marketing),BBA",
    specialization:
      "Project Management, General Management, Organizational Behaviour",
    image: "/assets/faculty/16_Ms. Khushboo Bhatt.png",
    email: "khushboobhatt.mba@charusat.ac.in",
  },
  {
    id: 17,
    name: "Dr. Shabana Anjum",
    designation: "Assistant Professor",
    qualification: "PhD,MBA,BCom",
    specialization: "H.R., Organisational Behaviour",
    image: "/assets/faculty/17_Dr. Shabana Anjum.png",
    email: "shabanaanjum.mba@charusat.ac.in",
  },
  {
    id: 18,
    name: "Dr. Mahendra H Prajapati",
    designation: "Assistant Professor",
    qualification: "PhD,MBA,BCA",
    specialization: "Marketing and IT",
    image: "/assets/faculty/18_Mr. Mahendra H Prajapati.png",
    email: "mahendraprajapati.mba@charusat.ac.in",
  },
  {
    id: 19,
    name: "Dr. Gopalbhai G Shah",
    designation: "Assistant Professor",
    qualification: "PhD,M.Sc.(IT),M.Sc.(Statistics)",
    specialization: "Data Mining, Statistical Application, Data Analytics",
    image: "/assets/faculty/19_Dr. Gopalbhai G Shah.png",
    email: "gopalshah.mba@charusat.ac.in",
  },

  {
    id: 20,
    name: "Khushali N Pathak",
    designation: "Assistant Professor",
    qualification: " PhD(Pursuing),MBA,BBA",
    specialization:
      "HR Management, Organizational Behaviour, Marketing Management, General Management",
    image: "/assets/faculty/20_Ms. Khushali Pathak.png",
    email: "khushalipathak.mba@charusat.ac.in",
  },
  {
    id: 21,
    name: "Mr. Surpalsinh B Rathod",
    designation: "Assistant Professor",
    qualification: " PhD(Pursuing),MBA,BBA",
    specialization: "Finance/Accounting",
    image: "/assets/faculty/21_Mr. Surpalsinh B Rathod.png",
    email: "surpalrathod.mba@charusat.ac.in",
  },
  {
    id: 22,
    name: "Ms. Rania Pathan",
    designation: "Assistant Professor",
    qualification: " PhD(Pursuing),MBA(Finance)",
    specialization: "Financial Accounting",
    image: "/assets/faculty/22_Ms. Rania Pathan.png",
    email: "raniapathan.mba@charusat.ac.in",
  },
  {
    id: 23,
    name: "Mr. Brijesh Patel",
    designation: "Assistant Professor",
    qualification: " PhD(Pursuing),MHRM",
    specialization:
      "HR Management, Organisational Behaviour, Industrial Relations/Labour laws",
    image: "/assets/faculty/23_Mr. Brijesh Patel.png",
    email: "brijeshpatel.mba@charusat.ac.in",
  },
  {
    id: 24,
    name: "Ms. Foram Pathak",
    designation: "Assistant Professor",
    qualification: " PhD(Pursuing),MHRM",
    specialization:
      "HR Management, Organisational Behaviour, Industrial Relations/Labour laws",
    image: "/assets/faculty/24_Ms. Foram Pathak.png",
    email: "forampathak.mba@charusat.ac.in",
  },

  {
    id: 25,
    name: "Mrs. Nikita R. Chhasatiya",
    designation: "Assistant Professor",
    qualification: " PhD(Pursuing),MBA",
    specialization: "Human Resources Management, Organizational Behaviour",
    image: "/assets/faculty/25_Mrs. Nikita R. Chhasatiya.png",
    email: "nikitachhasatiya.mba@charusat.ac.in",
  },
  {
    id: 26,
    name: "Ms. Riddhi Soneji",
    designation: "Assistant Professor",
    qualification: " PhD(Pursuing),MBA",
    specialization: "Human Resources Management, Organizational Behaviour",
    image: "/assets/faculty/26_Ms Riddhi Soneji.png",
    email: "riddhisoneji.mba@charusat.ac.in",
  },
  {
    id: 27,
    name: "Dr. Ojisha Bhardwaj",
    designation: "Assistant Professor",
    qualification: " PhD(Pursuing),MBA",
    specialization: "Human Resources Management, Organizational Behaviour",
    image: "/assets/faculty/27_Dr. Ojisha Bhardwaj.png",
    email: "ojishabhardwaj.mba@charusat.ac.in",
  },
  {
    id: 28,
    name: "Dr. Mehul Shah",
    designation: "Assistant Professor",
    qualification: " PhD,MBA",
    specialization:
      "Quantitative techniques, Operation Research , Strategic Management",
    image: "/assets/faculty/28_Dr. Mehul Shah.png",
    email: "mehulshah.mba@charusat.ac.in",
  },
  {
    id: 29,
    name: "Ms. Aashita Agrawal",
    designation: "Assistant Professor",
    qualification: " MBA(Finance + Marketing)",
    specialization: "Human Resources Management, Organizational Behaviour",
    image: "/assets/faculty/29_Ms. Aashita Agrawal.png",
    email: "aashitaagrawal.mba@charusat.ac.in",
  },
  {
    id: 30,
    name: "Mrs. S. Subhashree",
    designation: "Assistant Professor",
    qualification: " PhD(Pursuing),M.Phil.,M.Com.",
    specialization: "Marketing Management, Human Resource Management",
    image: "/assets/faculty/30_Mrs. S. Subhashree.png",
    email: "subhashrees.mba@charusat.ac.in",
  },
  {
    id: 31,
    name: "Ms. Nilam Parmar",
    designation: "Assistant Professor",
    qualification: "PhD(Pursuing),M.Com.,BBA",
    specialization:
      "Business Analytics, Marketing Management, Financial Management",
    image: "/assets/faculty/31_Ms_NilamParmar.jpg",
    email: "nilamparmar.mba@charusat.ac.in",
  },
  {
    id: 32,
    name: "Mr. Snehalkumar Patel",
    designation:
      "Lab Technician, Technical Associate, Online Education (Audio-Video Recording and Editing)",
    qualification: " PhD(Purshing),MSc.IT,BIT",
    specialization: "Microsoft Specialist and Certified Professional",
    image: "/assets/faculty/NT_1_Mr. Snehalkumar Patel.png",
    email: "snehalpatel.mba@charusat.ac.in",
  },
  {
    id: 33,
    name: "Mr. Dipak Patel",
    designation: "Librarian",
    qualification: " MLib,BA",
    specialization: "Information Collection Development and Management System",
    image: "/assets/faculty/NT_2_Mr. Dipak Patel.png",
    email: "dipakpatel.lib@charusat.ac.in",
  },
  {
    id: 34,
    name: "Mr. Divyesh Patel",
    designation: "Office Assistant",
    qualification: "B.Com",
    specialization: "Information collection development and management system",
    image: "/assets/faculty/NT_3_Divyesh Patel.png",
    email: "divyeshpatel.mba@charusat.ac.in",
  },
  {
    id: 35,
    name: "Mr. Ishan Patel",
    designation: "Office Assistant",
    qualification: " M.Tech(EVD),B.Tech(EC)",
    specialization: "VLSI, Management",
    image: "/assets/faculty/NT_4_Mr. Ishan Patel.png",
    email: "ishanpatel.mba@charusat.ac.in",
  },
  {
    id: 36,
    name: "Mr. Amit Patel",
    designation: "Office Attendant",
    qualification: "10th Pass",
    specialization: "Operation of the office Management",
    image: "/assets/faculty/NT_5_Mr. Amit Patel.png",
    email: "---",
  },
  {
    id: 37,
    name: "Mr. Jinal Patel",
    designation: "Office Attendant",
    qualification: " B.Com ",
    specialization: "Operation of the office Management",
    image: "/assets/faculty/NT_6_Mr. Jinal Patel.png",
    email: "---",
  },
];
