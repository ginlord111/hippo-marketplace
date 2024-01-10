"use client";
import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import { formSchema } from "../constant";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trpc } from "@/trpc";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const page = () => {
    const searchParams = useSearchParams()
    const router = useRouter();
    const isSeller = searchParams.get("as") === 'selller'

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      usernameOremail: "",
      password: "",
    },
  });

  const { mutate, isLoading } = trpc.auth.createPayloadUser.useMutation({
    onError: (err) => {
      if (err.data?.code === "CONFLICT") {
        toast.error("Email is already exist");
        return;
      }
      toast.error("Something went wrong"); // FOR UNKNOWN OTHER ERROR LIKE SERVER ERROR
    },
  });
  const onSubmit = ({
    usernameOremail,
    password,
  }: z.infer<typeof formSchema>) => {
    mutate({ usernameOremail, password });

    console.log(mutate);
  };

  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-5">
        <div className="mx-auto flex w-full flex-col justify-center space-y-3 ">
          <div className="flex flex-col items-center space-y-3 text-center">
            <Icons.logo className="h-20 w-20" />
            <div className="text-2xl font-bold">Sign in an account</div>
            <Link
              href="sign-in"
              className={buttonVariants({
                variant: "link",
                className: "gap-1",
              })}
            >
              Don&apos;t have an account? Click here
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className=" grid gap-2 lg:px-[200px]">
                  {/* EMAIL FIELD */}
                  <div className="grid gap-1 py-2">
                    <FormField
                      control={form.control}
                      name="usernameOremail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* PASSWORD FIELD */}
                  <div className="grid gap-1 py-2">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Password"
                              {...field}
                              type="password"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" className="w-full md:w-[50%] mx-auto">
                    Sign in
                  </Button>
                </div>
              </form>
            </Form>
            <div className="relative">
                <div className="flex items-center inset-0 absolute">
             <span className=" border-t w-full "> </span>
            
                </div>
                <div className="relative flex justify-center items-center uppercase">

                <span className="text-muted-foreground text-xs px-3 bg-background">or</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
