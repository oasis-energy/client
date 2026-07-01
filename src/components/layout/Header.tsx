"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
  NavigationMenuContent
} from "@/components/ui/navigation-menu";

export function Header() {
  const aboutRoutes = [
    { name: "About Us", href: "/about", description: "Learn about Oasis Energy's mission and vision." },
    { name: "About Avatar™", href: "/avatar", description: "Discover the revolutionary Avatar™ wind turbines." },
  ];

  const mainRoutes = [
    { name: "Solutions", href: "/solutions" },
    { name: "Products", href: "/products" },
    { name: "Partners", href: "/partners" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Image 
            src="/brand-icon.svg" 
            alt="Oasis Energy Icon" 
            width={48}
            height={48} 
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain shrink-0"
            priority
          />
          <div className="flex flex-col justify-center">
            <span className="text-lg sm:text-xl lg:text-3xl font-extrabold tracking-tight font-heading whitespace-nowrap">
              <span className="text-[#1e3a8a]">Oasis</span> <span className="text-accent">Energy</span>
            </span>
            <span className="block text-[0.65rem] lg:text-[0.85rem] font-medium text-muted-foreground -mt-0.5 tracking-wide whitespace-nowrap">
              Let&apos;s grab the free energy
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              
              {/* About Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {aboutRoutes.map((route) => (
                      <li key={route.href}>
                        <Link href={route.href} legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-800 dark:focus:bg-slate-800">
                            <div className={`text-sm font-medium leading-none ${route.name.includes("Avatar") ? "text-emerald-600 dark:text-emerald-400" : ""}`}>
                              {route.name}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400 mt-1">
                              {route.description}
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Standalone Avatar Link */}
              <NavigationMenuItem>
                <Link href="/avatar" legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-emerald-600 font-bold hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300`}>
                    Avatar™
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Other Routes */}
              {mainRoutes.map((route) => (
                <NavigationMenuItem key={route.href}>
                  <Link href={route.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {route.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden xl:flex items-center gap-4 shrink-0">
          <Button variant="ghost" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground whitespace-nowrap" asChild>
            <Link href="/contact?subject=lead">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden flex items-center shrink-0">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="xl:hidden" />}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="p-6 overflow-y-auto">
              <div className="flex flex-col space-y-6 mt-6">
                <Link href="/" className="text-lg font-semibold border-b pb-2">
                  Home
                </Link>
                
                <div className="flex flex-col space-y-3">
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">About</span>
                  {aboutRoutes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`text-lg font-medium transition-colors hover:text-accent pl-2 ${route.name.includes("Avatar") ? "text-emerald-600" : ""}`}
                    >
                      {route.name}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col space-y-3 pt-4 border-t">
                  <Link
                    href="/avatar"
                    className="text-lg font-bold text-emerald-600 transition-colors hover:text-emerald-700"
                  >
                    Avatar™
                  </Link>
                  {mainRoutes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className="text-lg font-medium transition-colors hover:text-accent"
                    >
                      {route.name}
                    </Link>
                  ))}
                </div>

                <div className="pt-4 border-t flex flex-col gap-3">
                  <Button variant="outline" asChild className="w-full justify-center h-12">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button className="w-full justify-center bg-accent hover:bg-accent/90 text-accent-foreground h-12" asChild>
                    <Link href="/contact?subject=lead">Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
