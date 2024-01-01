'use client'
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { ShoppingCart } from 'lucide-react'
import { Separator } from '@radix-ui/react-separator';
const Cart = () => {
  const cartCount = 1;
  return (
    <Sheet>
      <SheetTrigger className='group -m-2 flex items-center p-2'>
      <ShoppingCart aria-aria-hidden='true' className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'/>
        <span className='ml02 text-sm font-medium text-gray-700 group-hover:text-gray-800'>0</span>
      </SheetTrigger>
    <SheetContent className='flex w-full flex-co pr-0 sm:max-w-lg'>
      <SheetHeader className='space-y-2.5 pr-6'>
       <SheetTitle> Cart (0)</SheetTitle>
      </SheetHeader>
      {cartCount > 0 ? (
        <>
        <div className='flex items-center flex-col pr-6'>
          Cart Items 
          <div className='space-y-4 pr-6'>
            <Separator />
            <div className='space-6-1.5 text-sm'>
              <div className='flex gap-2'>
                <span className='flex-1'>Shipping </span>
                <span>Free</span>
              </div>
            </div>
          </div>
        </div>
        </>
      ) : (
        <>
        <div>
          No items
        </div>
        </>
      )}
    </SheetContent>
    </Sheet>
  )
}

export default Cart