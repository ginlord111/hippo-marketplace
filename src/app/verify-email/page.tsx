import React from "react";
import Image from "next/image";
interface VerifyEmailProps {
  searchParams: {
    [key: string]: string | undefined | string[];
  };
}
// THIS INTERFACE IS FOR DYNAMIC INTERFACE THAT CAN HAVE MANY KEYS THAT ARE UNKNOWN AND TYPECRIPT WONT CATCH AN ERROR
const VerifyEmail = ({ searchParams }: VerifyEmailProps) => {
  const token = searchParams.token;

  return (
    <div className="container relative flex pt-20- flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-cocl justify-center space-y-6 sm:w-[350px]">
        {token && typeof token === "string" ? (
          <div className="grid grid-gap-6"></div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center">
            <div className="relative mb-4 h-60 60  text-muted-foreground">
              <Image src="/hippo-email-sent.png" alt="Hippo Email Sent" fill />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
