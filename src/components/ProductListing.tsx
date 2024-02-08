"use client";
import { Product } from "@/payload-types";
import React, { useEffect, useState } from "react";
import ProductPlaceholder from "./ProductPlaceholder";
import Image from "next/image";
import PRODUCT_CATEGORIES from "../config/index";
import { formatPrice } from "@/lib/utils";
import ImageSlider from "./ImageSlider";
import { Media } from "@/payload-types";
interface ProductListingProps {
  item: Product | null;
  index: number;
}
const ProductListing = ({ item, index }: ProductListingProps) => {
  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === item?.category
  )?.label;
  const validUrl = item?.images?.map(({ images }) => images) as Media[];
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [index]);

  if (!item || !isVisible) {
    return <ProductPlaceholder />;
  }
  return (
    <div className="flex flex-col w-full space-y-1">
      <ImageSlider urls={validUrl} />
      <h3 className="text-sm font-bold text-gray-700">{item.name}</h3>
      <p>{label}</p>
      <p className="text-sm font-bold">{formatPrice(item.price)}</p>
    </div>
  );
};

export default ProductListing;
