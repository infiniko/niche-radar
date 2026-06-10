"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="">
      <NavigationMenu>
        <NavigationMenuList className="w-full fixed lg:px-5 xl:px-[8%] py-3 flex items-center justify-between z-50 ">
          <NavigationMenuItem className="text-2xl font-bold bg-linear-to-r from-primary to-secondary-foreground bg-clip-text text-transparent">
            Niche Radar
          </NavigationMenuItem>
          <NavigationMenuItem className="flex gap-2">
            <Button variant="secondary" className="rounded-full">
              <Link href="./signin">Sign in</Link>
            </Button>
            <Button className="rounded-full">
              <Link href="./register">Get Started</Link>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
