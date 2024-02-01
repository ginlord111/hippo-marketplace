import Link from "next/link";
import { title } from "process";
import React from "react";
import { buttonVariants } from "./ui/button";
interface ProductReelTypes {
  title: string;
  href: string;
}
const ProductReel = (props: ProductReelTypes) => {
  const { title, href } = props;
  return (
    <section>
      <div className="flex justify-between px-20 ">
        <h1 className="font-bold text-2xl">{title && title}</h1>
        <div>
          <Link href={href} className={buttonVariants({ variant: "link" })}>
            Shop now <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="mt-6 flex items-center w-full">
          <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-7 md:grid-cols-4 md:gap-y-10 lg:gap-x-8"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductReel;
