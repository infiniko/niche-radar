"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center ">
      <NavigationMenu className="">
        <NavigationMenuList className="flex justify-between items-center py-3">
          <NavigationMenuItem className="text-2xl font-bold bg-linear-to-r from-primary to-pink-400 bg-clip-text text-transparent">
            Niche Radar
          </NavigationMenuItem>
          <NavigationMenuItem className="flex gap-2">
            <Button variant="secondary" className="rounded-full">
              <Link href="./signin">Sign in</Link>
            </Button>
            <Button className="rounded-full">
              <Link href="./signin">Get Started</Link>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
