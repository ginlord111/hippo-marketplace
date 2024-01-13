'use client'
import React from "react";
import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { User } from "@/payload-types";
import { LogoutUser } from "@/hooks/user-logout";
const UserDropDown = ({ user }: { user: User }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <CircleUserRound className="w-[30px] h-[30px] text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white cursor-pointer">
        <div className="flex items-center justify-center text-black text-xs font-semibold">
            <DropdownMenuLabel>    
           {user.email}
            </DropdownMenuLabel>
           </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="font-semibold text-xs">
                <Link href='/sell'>Seller Dashboard</Link>
            </DropdownMenuItem >
            <DropdownMenuItem className="font-semibold text-xs" onClick={LogoutUser()} >
                 Log out
            </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDown;
