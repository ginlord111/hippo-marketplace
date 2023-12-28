"use client";
import React from "react";
import { Button } from "./ui/button";
import { PRODUCT_CATEGORIES } from "@/config";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
type Category = (typeof PRODUCT_CATEGORIES)[number];
interface NavitemProps {
  Category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen:boolean;
}
const NavItem = ({ Category, handleOpen, isOpen, isAnyOpen }: NavitemProps) => {
  return (
    <div className="flex relative items-center">
      <Button
        className="gap-1.5"
        onClick={handleOpen}
        variant={isOpen ? "secondary" : "ghost"}
      >
        {Category.label}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-all text-muted-foreground",
            isOpen && "rotate-180"
          )}
        />
      </Button>
      {isOpen ? (
        <div
          className={cn(
            "absolute inset-x-0 top-full text-sm text-muted-foreground",
            isAnyOpen && "animate-in fade-in-10 slide-in-from-top-5"
          )}
        >
        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
            <div className="relative bg-white">
            <div className="mx-auto max-w-7xl px-8">
            <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
            <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
              {Category.featured.map((features) => (
                  <div key={features.name} className="group relative text-base sm:text-sm w-[500px]">
                  <div className="relative  aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <Image src={features.imageSrc} 
                alt="IMAGE" 
                fill
                 className="object-cover object-center" 
                />
                 </div>
                  <Link href={features.href} className="mt-6 block font-medium text-gray-900">{features.name}</Link>
                  <p className="mt-1" aria-hidden="true">Shop Now</p>
                </div>
              ))}
            </div>
            </div>
                  
            </div>
            </div> 
            

        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
