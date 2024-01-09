'use client'
import { trpc } from "@/trpc"
import { Loader2, XCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
interface VerifyEmailProps{
  token:string
}

const VerifyEmail = ({token}:VerifyEmailProps) => {
  const {isError, data, isLoading} = trpc.auth.verifyEmail.useQuery({token})
    if(isError){
    return (
      <div className="flex flex-col items-center justify-center space-y-3">
        <XCircle className="text-red-600 h-10 w-10"/>
        <p className="font-bold text-2xl">There was a problem</p>
        <p className="text-sm text-muted-foreground whitespace-nowrap">Your token is not valid or might be expired. Please try again</p>
      </div>
    )
    }
      else if(data?.sucess){
        return (
          <div className="flex flex-col items-center justify-center ">
            <div className="relative mb-5 h-60 w-60 ">
            <Image 
            src='/hippo-email-sent.png'
            alt='EMAIL WAS VERIFIED'
            fill
            />
            </div>
            <h3 className="font-semibold text-2xl mb-2">Your email was verified</h3>
            <p className="text-sm text-muted-foreground">Thank you for verifying your email</p>
          <Link className={`${buttonVariants({variant:'link'})} text-xl`} href='/sign-in'>Sign in</Link>
          
          </div>
        )
      }
    
      else if(isLoading){
        return (
          <div className="flex flex-col items-center justify-center space-y-3">
          <Loader2 className="animate-spin text-zinc-500 h-10 w-10"/>
          <p className="font-bold text-2xl">Verifying...</p>
          <p className="text-sm text-muted-foreground whitespace-nowrap">Please wait</p>
        </div>
        )
      }
  
  
}

export default VerifyEmail