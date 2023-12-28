"use client";

import React from "react";
import { useState } from "react";
import { PRODUCT_CATEGORIES } from "@/config";
import NavItem from "./NavItem";
const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>();
  const isAnyOpen = activeIndex!==null;
  return (
    <div className="flex items-center h-full">
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
