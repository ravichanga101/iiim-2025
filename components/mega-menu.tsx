"use client";

import * as React from "react";
import Link from "next/link";
import MobileMenu from "@/components/mobile-menu";
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

export function MegaMenu() {
  return (
    <>
      <span className="hidden md:block">
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
                  <ListItem
                    href="/student-activities"
                    title="Student Activities"
                  >
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
                  <ListItem
                    href="/old-question-papers"
                    title="Old Question Papers"
                  >
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
      </span>

      <MobileMenu />
    </>
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
