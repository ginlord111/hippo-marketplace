import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const perks = [
    {
    name:'Instant Delivery',
    icon: ArrowDownToLine,
    description:'Get your assets delivered to your email in seconds and download them right away',
  },
  {
    name:'Guaranteed Quality',
    icon:CheckCircle,
    description:'Every asset on our platform is verified by our team to ensure our highest quality product',
  },
  {
    name:'For the Planet',
    icon:Leaf,
    description:"We've pledge 1% of sales to the preservation and restoration of the natural"
  }
  ]
  return (
    <>
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
    <section className="border-t border-gray-200 bg-gray-50">
    <MaxWidthWrapper>
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
      {perks.map((perk) => (
        <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
          <div className="md:flex-shrink-0 flex justify-center">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            {<perk.icon  className="w-1/3 h-1/3"/>}
          </div>
          </div>
          <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
            <h3 className="text-base font-medium text-gray-900">
              {perk.name}
            </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            {perk.description}
            </p>
          </div>
        </div>
      ))}
      </div>
    </MaxWidthWrapper>
    </section>
    </>
  );
}
