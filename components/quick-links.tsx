import Link from "next/link"
import { BookOpen, Calendar, Clock, FileText, GraduationCap, LayoutDashboard, Library, Users } from "lucide-react"

export function QuickLinks() {
  return (
    <section className="bg-primary/5 py-8">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="flex flex-col items-center justify-center rounded-lg p-4 text-center transition-colors hover:bg-primary/10"
            >
              <div className="rounded-full bg-primary/10 p-2 mb-2">
                <link.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium">{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const quickLinks = [
  {
    title: "Admissions",
    href: "#",
    icon: GraduationCap,
  },
  {
    title: "Programs",
    href: "#",
    icon: BookOpen,
  },
  {
    title: "Faculty",
    href: "#",
    icon: Users,
  },
  {
    title: "Library",
    href: "#",
    icon: Library,
  },
  {
    title: "Events",
    href: "#",
    icon: Calendar,
  },
  {
    title: "Placements",
    href: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Research",
    href: "#",
    icon: FileText,
  },
  {
    title: "Timetable",
    href: "#",
    icon: Clock,
  },
]

