import React from "react";
import Image from "next/image";
import VerifyEmail from "@/components/VerifyEmail";
interface VerifyEmailProps {
  searchParams: {
    [key: string]: string | undefined | string[];
  };
}

// THIS INTERFACE IS FOR DYNAMIC INTERFACE THAT CAN HAVE MANY KEYS THAT ARE UNKNOWN AND TYPECRIPT WONT CATCH AN ERROR
const page = ({ searchParams }:VerifyEmailProps) => {
  const token = searchParams.token;
  const toEmail = searchParams.to
    console.log(typeof token)
  return (
    <div className="container relative flex pt-20- flex-col items-center justify-center lg:px-0 h-screen">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]  items-center h-full">
        {token && typeof token === "string" ? (
          <div className="grid grid-gap-6">
            <VerifyEmail  token={token}/>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center w-full ">
            <div className="relative mb-4 h-60 w-60  text-muted-foreground">
              <Image 
              fill
              src="/hippo-email-sent.png"
               alt="Hippo Email Sent"  
               />
            </div>
            <h3 className="font-semibold text-2xl">Check Your Email</h3>
            <p className="text-muted-foreground text-center">We&apos;ve sent verification link to {toEmail ? (
            <span className="text-semibold text-center"> {toEmail}</span>
            ) : (<span> your email</span>)}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
