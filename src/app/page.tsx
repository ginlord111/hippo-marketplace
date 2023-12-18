import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex-col items-center max-w-3xl cursor-pointer">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Your marketplace for high-quality <span className="text-blue-600">Digital Assets</span>.
      </h1>
      <p className="mt-8 text-lg max-w-prose text-muted-foreground">
        Welcome to Hippo. Every asset on our platform is verified on our team to ensture our highest quality digital assets</p>
      </div>
    </MaxWidthWrapper>
  );
}
