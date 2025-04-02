import React from "react";
import { FileText } from "lucide-react"; // Import PDF icon

function NewsletterPage() {
  const newsletters = [
    {
      id: 20252,
      title: "February 2025 Newsletter",
      description:
        "Catch up on the latest updates, events, and achievements at IIIM for February 2025.",
      link: "/assets/files/newsletters/2025/February-2025.pdf",
    },
    {
      id: 20251,
      title: "January 2025 Newsletter",
      description:
        "Catch up on the latest updates, events, and achievements at IIIM for January 2025.",
      link: "/assets/files/newsletters/2025/January-2025.pdf",
    },
    {
      id: 202412,
      title: "December 2024 Newsletter",
      description:
        "Catch up on the latest updates, events, and achievements at IIIM for December 2024.",
      link: "/assets/files/newsletters/2024/December-2024.pdf",
    },
    {
      id: 202411,
      title: "November 2024 Newsletter",
      description:
        "Catch up on the latest updates, events, and achievements at IIIM for November 2024.",
      link: "/assets/files/newsletters/2024/November-2024.pdf",
    },
    {
      id: 202410,
      title: "October 2024 Newsletter",
      description:
        "Catch up on the latest updates, events, and achievements at IIIM for October 2024.",
      link: "/assets/files/newsletters/2024/October-2024.pdf",
    },
    {
      id: 202409,
      title: "September 2024 Newsletter",
      description:
        "Catch up on the latest updates, events, and achievements at IIIM for September 2024.",
      link: "/assets/files/newsletters/2024/September-2024.pdf",
    },
    {
      id: 202408,
      title: "August 2024 Newsletter",
      description:
        "Catch up on the latest updates, events, and achievements at IIIM for August 2024.",
      link: "/assets/files/newsletters/2024/August-2024.pdf",
    },
    {
      id: 202407,
      title: "July 2024 Newsletter",
      description:
        "Catch up on the latest updates, events, and achievements at IIIM for July 2024.",
      link: "/assets/files/newsletters/2024/July-2024.pdf",
    },
    {
      id: 202406,
      title: "June 2024 Newsletter",
      description:
        "Catch up on the latest updates, events, and achievements at IIIM for June 2024.",
      link: "/assets/files/newsletters/2024/June-2024.pdf",
    },
    {
      id: 202405,
      title: "May 2024 Newsletter",
      description:
        "Catch up on the latest updates, events, and achievements at IIIM for May 2024.",
      link: "/assets/files/newsletters/2024/May-2024.pdf",
    },
    {
      id: 202404,
      title: "April 2024 Newsletter",
      description:
        "Catch up on the latest updates, events, and achievements at IIIM for April 2024.",
      link: "/assets/files/newsletters/2024/April-2024.pdf",
    },
    {
      id: 202403,
      title: "March 2024 Newsletter",
      description:
        "Catch up on the latest updates, events, and achievements at IIIM for March 2024.",
      link: "/assets/files/newsletters/2024/March-2024.pdf",
    },

    // Add more newsletters as needed
  ];

  return (
    <section className="py-12 md:py-12 bg-muted/50">
      <div className="container space-y-8 ">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 ">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-2xl font-bold text-primary">
            IIIM Newsletter
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Stay Updated with Our Monthly Newsletters
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-base">
            Download our monthly newsletters to explore the latest updates,
            events, and achievements at IIIM.
          </p>
        </div>

        {/* Newsletter List */}
        <div className="space-y-4  mx-auto max-w-3xl">
          {newsletters.map((newsletter) => (
            <div
              key={newsletter.id}
              className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md transition hover:shadow-lg"
            >
              <div>
                <h3 className="text-lg font-bold text-primary">
                  {newsletter.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {newsletter.description}
                </p>
              </div>
              <a
                href={newsletter.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <FileText className="h-5 w-5" />
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsletterPage;
