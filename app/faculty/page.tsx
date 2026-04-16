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
          quality={70}
          //sizes="(min-width: 1024px) 25vw, 50vw"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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

        <p className="mt-4 text-sm font-semibold text-primary">Areas of Expertise :</p>
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
  {
    id: 0,
    name: "Dr. Binit Patel ",
    designation: "Registrar",
    qualification:
      "PhD, MBA (Marketing), BE (Computer Science), EP-BA (IIM, Kozhikode), CORe - Harvard Business School (Online)",
    specialization: "Marketing, Consumer Behavior, Business Analytics",
    image: "/assets/faculty/BinitSir_3.jpg",
    email: "registrar@charusat.ac.in",
  },
  {
    id: 1,
    name: "Dr. Rajesh Sadhwani",
    designation: "Dean (FMS)",
    qualification:
      "PhD, MBA (Finance), eMasters (FTM), BSc (Electronics), DFM, and FDP (IIIM-A)",
    specialization:
      "Financial Technology & Management, Financial Derivatives & Risk Management",
    image: "/assets/Faculty_Photos/1_Dr. Rajesh Sadhwani.webp",
    email: "dean.fms@charusat.ac.in",
  },
  {
    id: 2,
    name: "Dr. Reshma Sable",
    designation: "Principal",
    qualification:
      "PhD, MBA (HRM), MEd, MSc, BEd, BSc, UGC-NET (HR & IR), UGC-NET & SET (Education)",
    specialization: "Organisational Behaviour, Emotional Intelligence",
    image: "/assets/Faculty_Photos/2_Dr. Reshma Sable.webp",
    email: "principal.iiim@charusat.ac.in",
  },

  {
    id: 3,
    name: "Dr. Mukesh Pal",
    designation: "Assistant Professor",
    qualification: "PhD, MBA (Marketing), CAIIB, BBA, UGC-NET (Management)",
    specialization: "Marketing, Banking & Financial Services",
    image: "/assets/Faculty_Photos/3_Dr. Mukesh Pal.webp",
    email: "mukeshpal.mba@charusat.ac.in",
  },  
  {
    id: 4,
    name: "Ms. Dharti Patel",
    designation: "Assistant Professor",
    qualification: "PhD (Pursuing), MBA (Finance), BCom",
    specialization: "Financial Management and Accounting",
    image: "/assets/faculty/5_Ms. Dharti Patel.png",
    email: " dhartipatel.mba@charusat.ac.in",
  },
  {
    id: 5,
    name: "Dr. Hardi Raval",
    designation: "Assistant Professor",
    qualification: "PhD, MBA (HR & Pharmaceutical Science), PGDSM, BPharm",
    specialization: "Human Resource Management, Organizational Behaviour",
    image: "/assets/Faculty_Photos/5_Dr. Hardi Raval.webp",
    email: "hardiraval.mba@charusat.ac.in",
  },
  {
    id: 6,
    name: "Dr. Gaurav Rajput",
    designation: "Assistant Professor",
    qualification: "PhD, MBA (Finance), MCom, BCom, UGC-NET (Management)",
    specialization: "Finance, General Management",
    image: "/assets/Faculty_Photos/6_Dr. Gaurav Rajput.webp",
    email: "gauravrajput.mba@charusat.ac.in",
  },
  {
    id: 7,
    name: "Mr. Kirti Patel",
    designation: "Assistant Professor",
    qualification: "PhD (Pursuing), MBA (Marketing), BBA",
    specialization: "Marketing Management",
    image: "/assets/Faculty_Photos/7_Mr. Kirti Patel.webp",
    email: "kirtipatel.mba@charusat.ac.in",
  },
  {
    id: 8,
    name: "Dr. Geeta Marmat",
    designation: "Assistant Professor",
    qualification: "PhD, MBA (Marketing Management), MSc, BSc, UGC-NET (Management)",
    specialization: "Consumer Behavior, Branding ",
    image: "/assets/Faculty_Photos/8_Dr. Geeta Marmat.webp",
    email: "geetamarmat.mba@charusat.ac.in",
  },
  {
    id: 9,
    name: "Dr. Archana Sarkar",
    designation: "Assistant Professor",
    qualification: "PhD, MBA (Marketing), BBA, UGC-NET (Management)",
    specialization: "Marketing Analytics, Research Methods for Management",
    image: "/assets/Faculty_Photos/9_Dr. Archana Sarkar.webp",
    email: "archanasarkar.mba@charusat.ac.in",
  },
  
  {
    id: 10,
    name: "Dr. Poonam Amrutia",
    designation: "Assistant Professor",
    qualification: "PhD, MBA (Marketing), BCom",
    specialization: "Marketing Management, Consumer Behaviour",
    image: "/assets/Faculty_Photos/10_Ms. Poonam Amrutia.webp",
    email: "poonamamrutia.mba@charusat.ac.in",
  },
  {
    id: 11,
    name: "Ms. Margi Mehta",
    designation: "Assistant Professor",
    qualification: "PhD (Pursuing), MBA (Marketing), BBA",
    specialization: "Consumer Behaviour, Digital Marketing",
    image: "/assets/Faculty_Photos/11_Ms. Margi Mehta.webp",
    email: "margimehta.mba@charusat.ac.in",
  },

  {
    id: 12,
    name: "Dr. Jaimin Trivedi",
    designation: "Assistant Professor",
    qualification: "PhD, MPhil (Commerce), MCom, BCom, LLM",
    specialization: "Accounting & Finance, Business Laws",
    image: "/assets/Faculty_Photos/12_Dr. Jaymin Trivedi.webp",
    email: "jaimintrivedi.mba@charusat.ac.in",
  },
  {
    id: 13,
    name: "Dr. Divyang Purohit",
    designation: "Assistant Professor",
    qualification: "PhD, MBA (Marketing), BE",
    specialization: "Marketing, Entrepreneurship",
    image: "/assets/Faculty_Photos/13_Dr. Divyang Purohit.webp",
    email: "divyangpurohit.mba@charusat.ac.in",
  },
  {
    id: 14,
    name: "Dr. Khushboo Bhatt",
    designation: "Assistant Professor",
    qualification: "PhD, MBA (Project Management), BBA",
    specialization:
      "Emotional Intelligence, Strategic Management",
    image: "/assets/Faculty_Photos/14_Dr. Khusboo Bhatt.webp",
    email: "khushboobhatt.mba@charusat.ac.in",
  },
  {
    id: 15,
    name: "Dr. Shabana Anjum",
    designation: "Assistant Professor",
    qualification: "PhD, MBA (HRM), BCom",
    specialization: "Human Resource Management, Organizational Behaviour",
    image: "/assets/Faculty_Photos/15_Dr. Shabana Anjum.webp",
    email: "shabanaanjum.mba@charusat.ac.in",
  },
  {
    id: 16,
    name: "Mr. Mahendra H Prajapati",
    designation: "Assistant Professor",
    qualification: "PhD (Pursuing), MBA (Marketing), BCA",
    specialization: "Marketing Management, Information Technology",
    image: "/assets/Faculty_Photos/16_Mr. Mahendra Prajapati.webp",
    email: "mahendraprajapati.mba@charusat.ac.in",
  },
  {
    id: 17,
    name: "Dr. Gopalbhai G Shah",
    designation: "Assistant Professor",
    qualification: "PhD, MSc (Statistics), MSc-IT,PGDCA, BSc",
    specialization: "Data Analytics, Statistics",
    image: "/assets/Faculty_Photos/17_Dr. Gopal Shah.webp",
    email: "gopalshah.mba@charusat.ac.in",
  },

  {
    id: 18,
    name: "Ms. Khushali Pathak",
    designation: "Assistant Professor",
    qualification: "PhD (Pursuing), MBA (HRM), BBA",
    specialization:
      "Human Resource Management, Marketing Management",
    image: "/assets/Faculty_Photos/18_Ms. Khushali Pathak.webp",
    email: "khushalipathak.mba@charusat.ac.in",
  },
  {
    id: 19,
    name: "Mr. Surpalsinh Rathod",
    designation: "Assistant Professor",
    qualification: "PhD (Pursuing), MBA (Finance), BBA",
    specialization: "Financial Management, Applied Corporate Finance",
    image: "/assets/Faculty_Photos/19_Mr. Surpalsinh Rathod.webp",
    email: "surpalrathod.mba@charusat.ac.in",
  },
  {
    id: 20,
    name: "Ms. Rania Pathan",
    designation: "Assistant Professor",
    qualification: "PhD (Pursuing), MBA (Finance), BCom",
    specialization: "Cost and Management Accounting, Financial Management",
    image: "/assets/Faculty_Photos/20_Ms. Rania Pathan.webp",
    email: "raniapathan.mba@charusat.ac.in",
  },
  {
    id: 21,
    name: "Mr. Brijesh Patel",
    designation: "Assistant Professor",
    qualification: "PhD (Pursuing), MHRM, BCom, DCA",
    specialization:
      "Organisational Behaviour, Industrial Relations & Labour laws",
    image: "/assets/Faculty_Photos/21_Mr. Brijesh Patel.webp",
    email: "brijeshpatel.mba@charusat.ac.in",
  },
  {
    id: 22,
    name: "Ms. Foram Pathak",
    designation: "Assistant Professor",
    qualification: "Ph.D. (Pursuing), MBA (Marketing), MS, BSc",
    specialization:
      "Organisational Behaviour, Human Resource Management",
    image: "/assets/Faculty_Photos/22_Ms. Foram Pathak.webp",
    email: "forampathak.mba@charusat.ac.in",
  },

  {
    id: 23,
    name: "Mrs. Nikita R. Chhasatiya",
    designation: "Teaching Assistant",
    qualification: "PhD (Pursuing), MBA (HRM), BBA",
    specialization: "Human Resource Management, Organizational Behaviour",
    image: "/assets/Faculty_Photos/23_Ms. Nikita Chhasatiya.webp",
    email: "nikitachhasatiya.mba@charusat.ac.in",
  },
  {
    id: 24,
    name: "Ms. Riddhi Soneji",
    designation: "Teaching Assistant ",
    qualification: "MBA (Marketing), BBA",
    specialization: "Marketing Management, General Management",
    image: "/assets/Faculty_Photos/24_Ms. Riddhi Soneji.webp",
    email: "riddhisoneji.mba@charusat.ac.in",
  },
  {
    id: 25,
    name: "Ms. Ojisha Bhardwaj",
    designation: "Assistant Professor",
    qualification: "PhD (Pursuing), MCom (HRM), MCA, LLB, BBA, AIBCE, UGC-Net",
    specialization: "Human Resource Management , Law",
    image: "/assets/Faculty_Photos/25_Ms. Ojisha Bhardwaj.webp",
    email: "ojishabhardwaj.mba@charusat.ac.in",
  },
  {
    id: 26,
    name: "Dr. Mehul Shah",
    designation: "Assistant Professor",
    qualification: "PhD, MBA (Marketing), BE",
    specialization:
      "Business Analytics, Strategic Management",
    image: "/assets/Faculty_Photos/26_Dr. Mehul Shah.webp",
    email: "mehulshah.mba@charusat.ac.in",
  },
  {
    id: 27, 
    name: "Ms. Aashita Agrawal",
    designation: "Assistant Professor",
    qualification: "MBA (Finance & Marketing), BCom",
    specialization: "Business Analytics, Finance",
    image: "/assets/Faculty_Photos/27_Ms. Aashita Agrawal.webp",
    email: "aashitaagrawal.mba@charusat.ac.in",
  },
  {
    id: 28,
    name: "Ms. S.Subhashree",
    designation: "Assistant Professor",
    qualification: "PhD (Pursuing), MPhil (Commerce), MCom, BCom, DCCM, TN-SET (Commerce)",
    specialization: "Marketing Management, Human Resource Management",
    image: "/assets/Faculty_Photos/28_Ms. Subhashree S.webp",
    email: "subhashrees.mba@charusat.ac.in",
  },
  {
    id: 29,
    name: "Dr. Nilam Parmar",
    designation: "Assistant Professor",
    qualification: "PhD, MCom, BBA, PGDBM, DTP",
    specialization:
      "Business Analytics, Marketing Management",
    image: "/assets/Faculty_Photos/29_Dr. Nilam Parmar.webp",
    email: "nilamparmar.mba@charusat.ac.in",
  },
  {
    id: 30,
    name: "Dr. Sumetha Madhu",
    designation: "Assistant Professor",
    qualification: "PhD, MPhil, MCom, BCom",
    specialization: "Marketing, Consumer Behaviour",
    image: "/assets/Faculty_Photos/30_Dr. Sumetha Madhu.webp",
    email: "sumethamadhu.mba@charusat.ac.in",
  },
  {
    id: 31,
    name: "Dr. Amin Vohra",
    designation: "Assistant Professor",
    qualification: "PhD, MPhil, MCom, BCom, GSET(Commerce)",
    specialization: "Accounting & Financial  Management, Consumer Behaviour",
    image: "/assets/Faculty_Photos/31_Dr. Amin Vohra.webp",
    email: "aminvohra.mba@charusat.ac.in",
  },
  {
    id: 32,
    name: "Mr. Snehalkumar Patel",
    designation:
      "Sr. Lab Technician, Tech. Associate & Examination (Online Education)",
    qualification: "PhD (Pursuing), Msc-IT, BIT",
    specialization: "Netwoking, Consumer Behaviour",
    image: "/assets/Faculty_Photos/32_Mr. Snehalkumar Patel.webp",
    email: "snehalpatel.mba@charusat.ac.in",
  },
  {
    id: 33,
    name: "Mr. Dipak Patel",
    designation: "Library Executive",
    qualification: "MLib, BA",
    specialization: "Information Collection Development and Management System",
    image: "/assets/Faculty_Photos/33_Dipak Patel.webp",
    email: "dipakpatel.lib@charusat.ac.in",
  },
  {
    id: 34,
    name: "Mr. Divyesh Patel",
    designation: "Office Assistant",
    qualification: "BA",
    specialization: "Office Work",
    image: "/assets/Faculty_Photos/34_Mr. Divyesh Patel.webp",
    email: "divyeshpatel.mba@charusat.ac.in",
  },
  {
    id: 35,
    name: "Mr. Ishan Patel",
    designation: "Office Assistant",
    qualification: "MTech (EVD) , BTech ",
    specialization: "Digital Communication, General Management",
    image: "/assets/Faculty_Photos/35_Mr. Ishan Patel.webp",
    email: "ishanpatel.mba@charusat.ac.in",
  },
  {
    id: 36,
    name: "Mr. Amit Patel",
    designation: "Office Attendant",
    qualification: "10th Pass",
    specialization: "Office Management",
    image: "/assets/Faculty_Photos/36_Mr. Amit Patel.webp",
    email: "---",
  },
  { 
    id: 37,
    name: "Mr. Jinal Patel",
    designation: "Office Attendant",
    qualification: " BCom ",
    specialization: "General Management",
    image: "/assets/Faculty_Photos/37_Mr. Jinal Patel.webp",
    email: "---",
  },
];
