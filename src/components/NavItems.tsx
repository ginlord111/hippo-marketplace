"use client";

import React, { useRef } from "react";
import { useState } from "react";
import { PRODUCT_CATEGORIES } from "@/config";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-click-outside";
const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>();
  const isAnyOpen = activeIndex!==null;
  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(navRef, ()=>setActiveIndex(null)) // for closing  the navbar if user click outside the div element

  return (
    <div className="flex items-center h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((product, i) => {
          const handleOpen = () => {
          if (activeIndex === i) {
            // TO BE REMEMBERED !!
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        }
        const isOpen = i === activeIndex 
        return (
          <NavItem
            isOpen={isOpen}
            handleOpen={handleOpen}
            category={product}
            key={product.label}
            isAnyOpen={isAnyOpen}
       
          />
        );
      })}
    </div>
  );
};

export default NavItems;
