import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex-col items-center max-w-3xl cursor-pointer">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your marketplace for high-quality&nbsp;
  <span className="text-blue-600">Digital Assets</span>.
        </h1>
        <p className="mt-8 text-lg max-w-prose text-muted-foreground">
          Welcome to Hippo. Every asset on our platform is verified on our team
          to ensture our highest quality digital assets
        </p>
        <div className="flex flex-col  sm:flex-row gap-x-8 mt-4 justify-center items-center ">
          <Link href="/products" className={buttonVariants()}>
            Browse Trending
          </Link>


          
            <Button variant='ghost'>Our quality promise &rarr;</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
