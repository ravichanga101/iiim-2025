import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react"; // Import the tick mark icon

export function CollaborationsSection() {
  const collaborations = [
    "Assumption University, Thailand",
    "Universitas Sumatera Utara, Indonesia ",
    "University of Exeter, UK",
    "PCSD@OECD, France",
    "British Council | IELTS",
    "Indian Institute of Management – Ahmedabad (IIM-A)",
    "Indian Institute of Management – Bangalore (IIM-B)",
    "NSE Academy Ltd. (NAL)",
    "All India Management Association (AIMA)",
    "Ahmedabad Management Association (AMA)",
    "Confederation of Indian Industry (CII)",
    "Federation of Gujarat Industries (FGI)",
    "Vadodara Chamber of Commerce & Industries (VCCI)",
    "Gujarat Social Infrastructure Development Board Society (GSIDS)",
    "Indian Space Research Organization (ISRO)",
    "State Bank of India (SBI)",
    "eChai",
  ];

  return (
    <section className="py-12 md:py-12 bg-muted/50">
      <div className="container space-y-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-2xl font-bold text-primary">
            Collaborations
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Esteemed Collaborations
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            IIIM-CHARUSAT has partnered with leading organizations and
            institutions worldwide to foster academic excellence and innovation.
          </p>
        </div>

        {/* Collaborations Box */}
        <div className="mx-auto max-w-xl rounded-lg border border-primary bg-white p-6 shadow-lg">
          <ul className="space-y-1 text-muted-foreground text-xl md:text-base">
            {collaborations.map((collab, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />{" "}
                {/* Tick mark icon */}
                <span className="text-primary text-sm">{collab}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        {/* <div className="mt-8 text-center">
          <Link href="/collaborations">
            <Button className="px-6 py-3 text-lg font-semibold">
              Explore More Collaborations
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
}
