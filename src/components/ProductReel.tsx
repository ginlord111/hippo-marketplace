"use client";
import Link from "next/link";
import { title } from "process";
import React from "react";
import { buttonVariants } from "./ui/button";
import { TQueryValidator } from "../lib/query-validator";
import { trpc } from "../trpc";
import { Product } from "@/payload-types";
import ProductListing from "./ProductListing";
interface ProductReelTypes {
  title?: string;
  href: string;
  query: TQueryValidator;
}
const ProductReel = (props: ProductReelTypes) => {
  const FALLBACK_LIMIT = 4;
  const { title, href, query } = props;
  const { data: items, isLoading } = trpc.getInfinitProduct.useInfiniteQuery(
    {
      limit: query.limit ?? FALLBACK_LIMIT,
      query,
    },
    {
      getNextPageParam: (lastpage) => lastpage.nextPage,
    }
  );
  const products = items?.pages.flatMap((item) => item.products);
  let itemsToSell: (Product | null)[] = [];
  if (products && products.length) {
    itemsToSell = products;
  } else if (isLoading) {
    itemsToSell = new Array(query.limit ?? FALLBACK_LIMIT);
  }

  console.log("data", items);

  return (
    <section className="px-20">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl lg:text-2xl">{title && title}</h1>
        <div>
          <Link href={href} className={buttonVariants({ variant: "link" })}>
            Shop now <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="mt-6 flex items-center w-full">
          <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-7 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
            {itemsToSell.map((item, index) => (
              <ProductListing item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReel;
