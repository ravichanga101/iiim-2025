"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
//import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function MegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Home Link */}
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "text-lg font-bold" // Add bold and larger font size
              )}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Resources Link */}
        <NavigationMenuItem>
          <Link href="/resources" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "text-lg font-bold" // Add bold and larger font size
              )}
            >
              Resources
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Faculty Link */}
        <NavigationMenuItem>
          <Link href="/faculty" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "text-lg font-bold" // Add bold and larger font size
              )}
            >
              Faculty
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Student Corner Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg font-bold">
            Student Corner
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/student-handbook" title="Student Handbook">
                Access the student handbook for guidelines and policies.
              </ListItem>
              <ListItem href="/student-activities" title="Student Activities">
                Explore various student activities and events.
              </ListItem>
              <ListItem href="/help" title="Help">
                Get assistance and support for your queries.
              </ListItem>
              <ListItem href="/pay-fees" title="Pay Fees">
                Pay your fees online securely.
              </ListItem>
              <ListItem href="/university-result" title="University Result">
                Check your university results online.
              </ListItem>
              <ListItem href="/downloads" title="Downloads">
                Download important forms and documents.
              </ListItem>
              <ListItem href="/old-question-papers" title="Old Question Papers">
                Access previous years' question papers for preparation.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Newsletter Link */}
        <NavigationMenuItem>
          <Link href="/newsletter" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "text-lg font-bold" // Add bold and larger font size
              )}
            >
              Newsletter
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Career Link */}
        <NavigationMenuItem>
          <Link href="/career" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "text-lg font-bold" // Add bold and larger font size
              )}
            >
              Career
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Contact Link */}
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "text-lg font-bold" // Add bold and larger font size
              )}
            >
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-lg font-bold", // Add bold and larger font size
            className
          )}
          {...props}
        >
          <div className="text-lg font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
