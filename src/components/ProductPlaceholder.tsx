import React from "react";
import { Skeleton } from "./ui/skeleton";

const ProductPlaceholder = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="relative bg-zinc-400 aspect-video overflow-hidden rounded-xl">
        <Skeleton className="w-full h-full" />
      </div>
      <Skeleton className="w-2/3 mt-4 h-4 rounded-lg bg-zinc-400" />
      <Skeleton className="w-16 mt-2 h-4 rounded-lg bg-zinc-400" />
      <Skeleton className="w-12 mt-2 h-4 rounded-lg bg-zinc4500" />
    </div>
  );
};

export default ProductPlaceholder;
