import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";
import { getServerSide } from "../lib/getServerSide";
import {cookies} from 'next/headers'
const Navbar = async () => {
  const cookie = cookies()
  const user= await getServerSide(cookie);
  console.log(user)
  return (
     <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* TODO:MOBILE */}

              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo  className="h-10 w-10"/>
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-7 lg:block lg:self-stretch">
              <NavItems />
              </div>
              <div className="ml-auto flex">
             <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-4">
              {user ? null : (
              <Link className={buttonVariants({variant:'ghost'})} href='/sign-in'>Sign In</Link>)
              
              }
              {user ? <p>Log Out</p> : (
                <Link href='/sign-up' className={buttonVariants({variant:'ghost'})}>Create Account</Link>
              )}
              <div className="ml-4 flow-root">
                <Cart />
              </div>
             </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
