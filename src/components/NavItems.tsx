"use client";

import React from "react";
import { useState } from "react";
import { PRODUCT_CATEGORIES } from "@/config";
import NavItem from "./NavItem";
const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>();
  return (
    <div className="flex">
      {PRODUCT_CATEGORIES.map((product, i) => {
          const handleOpen = () => {
              // TO BE REMEMBERED !!
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };
        {
          console.log(activeIndex);
        }
        const isOpen = i === activeIndex;
        return (
          <NavItem
            isOpen={isOpen}
            handleOpen={handleOpen}
            Category={product}
            key={product.label}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
