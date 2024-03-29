"use client";
import React, { useEffect, useRef } from "react";
import PRODUCT_CATEGORIES from "@/config";
import NavItem from "./NavItem";
import { useState } from "react";
import { useOnClickOutside } from "@/hooks/use-click-outside";
const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>();
  const isAnyOpen = activeIndex !== null;
  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(navRef, () => setActiveIndex(null)); // for closing  the navbar if user click outside the div element

  // FOR CLOSING THE NAV ITEMS WHEN USER PRESS ESCAPE IN KEYBOARD
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    }

      document.addEventListener("keydown", handler);
      return () => {
        document.removeEventListener("keydown", handler);
      };
    
  }, []);

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
        };
        const isOpen = i === activeIndex;
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
