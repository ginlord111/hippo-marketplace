import React from "react";
import { Skeleton } from "./ui/skeleton";

const ProductPlaceholder = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="relative bg-zinc-500 aspect-video overflow-hidden rounded-xl">
        <Skeleton className="w-full h-full" />
      </div>
      <Skeleton className="w-2/3 mt-4 h-4 rounded-lg bg-zinc-500" />
      <Skeleton className="w-16 mt-2 h-4 rounded-lg bg-zinc-500" />
      <Skeleton className="w-12 mt-2 h-4 rounded-lg bg-zinc-500" />
    </div>
  );
};

export default ProductPlaceholder;
