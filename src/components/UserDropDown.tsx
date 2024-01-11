'use client'
import React from "react";
import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
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
        <div className="flex items-center justify-center text-black p-3 text-xs font-semibold">
          <div className="flex flex-col items-center">
            <p>{user.email}</p>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <Link href='/sell'>Seller Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={LogoutUser()}>
                 Log out
            </DropdownMenuItem>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDown;
