"use client";
import { Product } from "@/payload-types";
import React, { useState } from "react";
import ProductPlaceholder from "./ProductPlaceholder";
import Image from 'next/image'
interface ProductListingProps {
  item: Product | null;
  index: number;
}
const ProductListing = ({ item, index }: ProductListingProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  if (!item || !isVisible) {
    return <ProductPlaceholder />;
  }
return (
  <div className="flex flex-col w-full">
    <div className="relative aspect-square w-full overflow-hidden rounded-xl">
    </div>
  </div>
)
};

export default ProductListing;
