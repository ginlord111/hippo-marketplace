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
import { formatPrice } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
const Cart = () => {
  const fee = 1
  const cartCount = 0;
  return (
    <Sheet>
      <SheetTrigger className='group -m-2 flex items-center p-2'>
      <ShoppingCart aria-aria-hidden='true' className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'/>
        <span className='ml02 text-sm font-medium text-gray-700 group-hover:text-gray-800'>0</span>
      </SheetTrigger>
    <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
      <SheetHeader className='space-y-2.5 pr-6'>
       <SheetTitle> Cart (0)</SheetTitle>
      </SheetHeader>
      {cartCount > 0 ? (
        <>
         <div className='flex flex-col pr-6 gap-3'>
          Cart Items 
          <div className='space-y-4 pr-6'>
            <Separator />
            <div className='space-y-1.5 text-sm'>
              <div className='flex'>
                <span className='flex-1'>Shipping</span>
                <span>Free</span>
              </div>
              <div className='flex gap-1'>
                <span className='flex-1'>Transaction Fee </span>
                <span>{formatPrice(fee)}</span>
              </div>
              <div className='flex gap-1'>
                <span className='flex-1'>Total</span>
                <span>{formatPrice(fee)}</span>
              </div>
            </div>
          </div>
          <SheetFooter>
            <SheetTrigger asChild>
            <Link href='/cart' className={buttonVariants({
                className:'w-full'
              })}>
              Continue to Checkout
              </Link>
            </SheetTrigger>
          </SheetFooter>
        </div>
        </>
      ) : (
        <>
        <div className='flex flex-col items-center justify-center space-y-2 w-full h-full'>
          <div className='relative mb-4 h-60 w-60 text-muted-foreground'>
          <Image 
          fill 
          alt='No image available'
          src='/hippo-empty-cart.png'
          />
          </div>
      
        </div>
        </>
      )}
    </SheetContent>
    </Sheet>
  )
}

export default Cart