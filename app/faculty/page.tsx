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
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
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

type Faculty = {
  id: number;
  name: string;
  designation: string;
  qualification: string;
  specialization?: string;
  image?: string;
  email?: string;
};

function FacultyCard({ faculty }: { faculty: Faculty }) {
  const interests = (faculty.specialization ?? "")
    .split(",")
    .map((i) => i.trim())
    .filter(Boolean);
  const interestsText = interests.length ? interests.join(", ") : "";

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border bg-primary/10 shadow-md hover:shadow-lg transition-shadow h-[520px]">
      {/* Image (uniform size, white background around the photo) */}
      <div className="relative h-[260px] overflow-hidden flex items-end justify-center bg-white">
        <Image
          src={faculty.image || "/placeholder.svg"}
          alt={faculty.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-contain object-bottom w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="flex-1 bg-background p-5 text-center">
        <h3 className="text-xl font-bold tracking-tight text-primary">{faculty.name}</h3>
        <p className="mt-1 text-sm uppercase tracking-wide text-muted-foreground">
          <b>{faculty.designation}</b>
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{faculty.qualification}</p>

        <p className="mt-4 text-sm font-semibold text-primary">Research Interests:</p>
        <p className="mt-1 text-sm leading-6 text-foreground">{interestsText}</p>

        <div className="mt-4 border-t pt-3 text-xs text-muted-foreground">
          <Mail className="inline-block mr-2 h-4 w-4" />
          {faculty.email}
        </div>
      </div>
    </div>
  );
}

const facultyMembers = [
  // {
  //   id: 2,
  //   name: "Dr. Binit Patel ",
  //   designation: "Principal,IIIM",
  //   qualification:
  //     "PhD, MBA(Marketing),BE(Computer Science), EP(BA),CORe - Harvard Business School (Online)",
  //   specialization: "Marketing, Consumer Behavior, General & IT Management",
  //   image: "/assets/faculty/2_Dr. Binit Patel.png",
  //   email: "principal.iiim@charusat.ac.in",
  // },
  {
    id: 3,
    name: "Dr. Rajesh Sadhwani",
    designation: "Dean (FMS)",
    qualification:
      "Ph.D. (Finance), MBA (Finance), BSc. (Electronics)",
    specialization:
      "Financial Technology and Management,Derivatives and Risk Management",
    image: "/assets/Faculty_Photos/Dr. Rajesh Sadhwani.png",
    email: "dean.fms@charusat.ac.in",
  },
  {
    id: 1,
    name: "Dr. Reshma Sable",
    designation: "Principal",
    qualification:
      "PhD, MBA(HRM), M.Ed., MSc, BEd., BSc, NET-HR/IR, NET-Education, SET-Education",
    specialization: "Organisational Behaviour, Emotional Intelligence",
    image: "/assets/Faculty_Photos/Dr. Reshma Sable.png",
    email: "principal.iiim@charusat.ac.in",
  },

  {
    id: 4,
    name: "Dr. Mukesh Pal",
    designation: "Assistant Professor",
    qualification: "Ph.D., MBA (Marketing (Major) and Finance)",
    specialization: "Human Resource Management, Organizational Behavior",
    image: "/assets/Faculty_Photos/Dr. Mukesh Pal.png",
    email: "mukeshpal.mba@charusat.ac.in",
  },
  {
    id: 5,
    name: "Ms. Dharti Patel",
    designation: "Assistant Professor",
    qualification: "PhD Pursuing,MBA(Finance),BCom",
    specialization: "Financial Management",
    image: "assets/faculty/5_Ms. Dharti Patel.png",
    email: " dhartipatel.mba@charusat.ac.in",
  },
  {
    id: 6,
    name: "Dr. Hardi Raval",
    designation: "Assistant Professor & Placement Coordinator",
    qualification: "PhD, MBA(HR)",
    specialization: "Human Resources Management",
    image: "/assets/Faculty_Photos/Dr. Hardi Raval.png",
    email: "hardiraval.mba@charusat.ac.in",
  },
  {
    id: 7,
    name: "Dr. Gaurav Rajput",
    designation: "Assistant Professor",
    qualification: "MBA, UGC-NET",
    specialization: "FM, BE, ME, AM, FSS, DRM, IAPM",
    image: "/assets/Faculty_Photos/Dr. Gaurav Rajput.png",
    email: "gauravrajput.mba@charusat.ac.in",
  },
  {
    id: 8,
    name: "Mr. Kirti Patel",
    designation: "Assistant Professor",
    qualification: "PhD(Pursuing),MBA(Marketing),BBA",
    specialization: "Business Alliance & Development, Marketing Management",
    image: "/assets/Faculty_Photos/Mr. Kirti Patel.png",
    email: "kirtipatel.mba@charusat.ac.in",
  },
  {
    id: 9,
    name: "Dr. Geeta Marmat",
    designation: "Assistant Professor",
    qualification: "PhD, MBA(Marketing), M.Sc., B.Sc.",
    specialization: "Marketing & Consumer Behaviour",
    image: "/assets/Faculty_Photos/Dr. Geeta Marmat.png",
    email: "geetamarmat.mba@charusat.ac.in",
  },
  {
    id: 10,
    name: "Dr. Archana Sarkar",
    designation: "Assistant Professor",
    qualification: "Ph.D(Management), UGC-NET, MBA(Marketing)",
    specialization: "Marketing Management, Research, Entrepreneurship",
    image: "/assets/Faculty_Photos/Dr. Archana Sarkar.png",
    email: "archanasarkar.mba@charusat.ac.in",
  },
  
  {
    id: 12,
    name: "Dr. Poonam Amrutia",
    designation: "Assistant Professor",
    qualification: "PhD, MBA",
    specialization: "Marketing Management, Consumer Behaviour, Sustainability",
    image: "/assets/Faculty_Photos/Ms. Poonam Amrutia.png",
    email: "poonamamrutia.mba@charusat.ac.in",
  },
  {
    id: 13,
    name: "Ms. Margi Mehta",
    designation: "Assistant Professor",
    qualification: "PhD(Pursuing),MBA(Marketing),BBA",
    specialization: "Marketing Management",
    image: "/assets/Faculty_Photos/Ms. Margi Mehta.png",
    email: "margimehta.mba@charusat.ac.in",
  },

  {
    id: 14,
    name: "Dr. Jaimin Trivedi",
    designation: "Assistant Professor",
    qualification: "PhD, M.Phil., MCom",
    specialization: "Accounting, Finance, Business Laws",
    image: "/assets/Faculty_Photos/Dr. Jaymin Trivedi.png",
    email: "jaimintrivedi.mba@charusat.ac.in",
  },
  {
    id: 15,
    name: "Dr. Divyang Purohit",
    designation: "Assistant Professor",
    qualification: "PhD, MBA (Marketing), B.E. (Mechanical)",
    specialization: "Marketing, Entrepreneurship, International Business, HRM",
    image: "/assets/Faculty_Photos/Dr. Divyang Purohit.png",
    email: "divyangpurohit.mba@charusat.ac.in",
  },
  {
    id: 16,
    name: "Ms. Khushboo Bhatt",
    designation: "Assistant Professor",
    qualification: "PhD(Pursuing),MBA(Marketing),BBA",
    specialization:
      "Project Management, General Management, Organizational Behaviour",
    image: "/assets/Faculty_Photos/Ms. Khusboo Bhatt.png",
    email: "khushboobhatt.mba@charusat.ac.in",
  },
  {
    id: 17,
    name: "Dr. Shabana Anjum",
    designation: "Assistant Professor",
    qualification: "PhD,MBA,BCom",
    specialization: "H.R., Organisational Behaviour",
    image: "/assets/Faculty_Photos/Dr. Shabana Anjum.png",
    email: "shabanaanjum.mba@charusat.ac.in",
  },
  {
    id: 18,
    name: "Mr. Mahendra H Prajapati",
    designation: "Assistant Professor",
    qualification: "MBA,BCA",
    specialization: "Marketing and IT",
    image: "/assets/Faculty_Photos/Mr. Mahendra Prajapati.png",
    email: "mahendraprajapati.mba@charusat.ac.in",
  },
  {
    id: 19,
    name: "Dr. Gopalbhai G Shah",
    designation: "Assistant Professor",
    qualification: "PhD,M.Sc.(IT),M.Sc.(Statistics)",
    specialization: "Data Mining, Statistical Application, Data Analytics",
    image: "/assets/Faculty_Photos/Dr. Gopal Shah.png",
    email: "gopalshah.mba@charusat.ac.in",
  },

  {
    id: 20,
    name: "Ms. Khushali N Pathak",
    designation: "Assistant Professor",
    qualification: " PhD(Pursuing),MBA,BBA",
    specialization:
      "HR Management, Organizational Behaviour, Marketing Management, General Management",
    image: "/assets/Faculty_Photos/Ms. Khushali Pathak.png",
    email: "khushalipathak.mba@charusat.ac.in",
  },
  {
    id: 21,
    name: "Mr. Surpalsinh B Rathod",
    designation: "Assistant Professor",
    qualification: " PhD(Pursuing),MBA,BBA",
    specialization: "Finance/Accounting",
    image: "/assets/Faculty_Photos/Mr. Surpalsinh Rathod.png",
    email: "surpalrathod.mba@charusat.ac.in",
  },
  {
    id: 22,
    name: "Ms. Rania Pathan",
    designation: "Assistant Professor",
    qualification: " PhD(Pursuing),MBA(Finance)",
    specialization: "Financial Accounting",
    image: "/assets/Faculty_Photos/Ms. Rania Pathan.png",
    email: "raniapathan.mba@charusat.ac.in",
  },
  {
    id: 23,
    name: "Mr. Brijesh Patel",
    designation: "Assistant Professor",
    qualification: " PhD(Pursuing),MHRM",
    specialization:
      "HR Management, Organisational Behaviour, Industrial Relations/Labour laws",
    image: "/assets/Faculty_Photos/Mr. Brijesh Patel.png",
    email: "brijeshpatel.mba@charusat.ac.in",
  },
  {
    id: 24,
    name: "Ms. Foram Pathak",
    designation: "Assistant Professor",
    qualification: " PhD(Pursuing),MHRM",
    specialization:
      "HR Management, Organisational Behaviour, Industrial Relations/Labour laws",
    image: "assets/faculty/24_Ms. Foram Pathak.png",
    email: "forampathak.mba@charusat.ac.in",
  },

  {
    id: 25,
    name: "Mrs. Nikita R. Chhasatiya",
    designation: "Assistant Professor",
    qualification: " PhD(Pursuing),MBA",
    specialization: "Human Resources Management, Organizational Behaviour",
    image: "/assets/Faculty_Photos/Ms. Nikita Chhasatiya.png",
    email: "nikitachhasatiya.mba@charusat.ac.in",
  },
  {
    id: 26,
    name: "Ms. Riddhi Soneji",
    designation: "Assistant Professor",
    qualification: " PhD(Pursuing),MBA",
    specialization: "Human Resources Management, Organizational Behaviour",
    image: "/assets/Faculty_Photos/Ms. Riddhi Soneji.png",
    email: "riddhisoneji.mba@charusat.ac.in",
  },
  {
    id: 27,
    name: "Ms. Ojisha Bhardwaj",
    designation: "Assistant Professor",
    qualification: " MBA",
    specialization: "Law,HR",
    image: "assets/faculty/27_Dr. Ojisha Bhardwaj.png",
    email: "ojishabhardwaj.mba@charusat.ac.in",
  },
  {
    id: 28,
    name: "Dr. Mehul Shah",
    designation: "Assistant Professor",
    qualification: " PhD,MBA",
    specialization:
      "Quantitative Techniques, Operation Research , Strategic Management",
    image: "assets/faculty/28_Dr. Mehul Shah.png",
    email: "mehulshah.mba@charusat.ac.in",
  },
  {
    id: 29, 
    name: "Ms. Aashita Agrawal",
    designation: "Assistant Professor",
    qualification: " MBA(Finance + Marketing)",
    specialization: "Business Analytics, Finance, Marketing",
    image: "/assets/Faculty_Photos/Ms. Aashita Agrawal.png",
    email: "aashitaagrawal.mba@charusat.ac.in",
  },
  {
    id: 30,
    name: "Mrs. S. Subhashree",
    designation: "Assistant Professor",
    qualification: " PhD(Pursuing),M.Phil.,M.Com.",
    specialization: "Marketing Management, Human Resource Management",
    image: "/assets/Faculty_Photos/Ms. Subhashree S.png",
    email: "subhashrees.mba@charusat.ac.in",
  },
  {
    id: 31,
    name: "Dr. Nilam Parmar",
    designation: "Assistant Professor",
    qualification: "PhD,M.Com.,BBA,PGDBM,DTP",
    specialization:
      "Business Analytics, Marketing Management, Financial Management",
    image: "/assets/Faculty_Photos/Dr. Nilam Parmar.png",
    email: "nilamparmar.mba@charusat.ac.in",
  },
  {
    id: 311,
    name: "Dr. Sumetha Madhu",
    designation: "Assistant Professor",
    qualification: "Ph.D., M.Phil. M.Com",
    specialization: "Marketing Management, Human Resource Management",
    image: "/assets/Faculty_Photos/Dr. Sumetha Madhu.png",
    email: "sumethamadhu.mba@charusat.ac.in",
  },
  
  {
    id: 32,
    name: "Mr. Snehalkumar Patel",
    designation:
      "Lab Technician, Technical Associate, Online Education (Audio-Video Recording and Editing)",
    qualification: " PhD(Purshing),MSc.IT,BIT",
    specialization: "Microsoft Specialist and Certified Professional",
    image: "/assets/Faculty_Photos/Mr. Snehal Patel.png",
    email: "snehalpatel.mba@charusat.ac.in",
  },
  {
    id: 33,
    name: "Mr. Dipak Patel",
    designation: "Librarian",
    qualification: " MLib,BA",
    specialization: "Information Collection Development and Management System",
    image: "/assets/Faculty_Photos/Dipak Patel.png",
    email: "dipakpatel.lib@charusat.ac.in",
  },
  {
    id: 34,
    name: "Mr. Divyesh Patel",
    designation: "Office Assistant",
    qualification: "B.Com",
    specialization: "Information Collection Development and Management System",
    image: "/assets/Faculty_Photos/Mr. Divyesh Patel.png",
    email: "divyeshpatel.mba@charusat.ac.in",
  },
  {
    id: 35,
    name: "Mr. Ishan Patel",
    designation: "Office Assistant",
    qualification: " M.Tech(EVD),B.Tech(EC)",
    specialization: "VLSI, Management",
    image: "/assets/Faculty_Photos/Mr. Ishan Patel.png",
    email: "ishanpatel.mba@charusat.ac.in",
  },
  {
    id: 36,
    name: "Mr. Amit Patel",
    designation: "Office Attendant",
    qualification: "10th Pass",
    specialization: "Operation of the Office Management",
    image: "/assets/Faculty_Photos/Mr. Amit Patel.png",
    email: "---",
  },
  {
    id: 37,
    name: "Mr. Jinal Patel",
    designation: "Office Attendant",
    qualification: " B.Com ",
    specialization: "Operation of the Office Management",
    image: "/assets/Faculty_Photos/Mr. Jinal Patel.png",
    email: "---",
  },
];
