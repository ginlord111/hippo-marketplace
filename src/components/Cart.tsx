
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
const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger>
      <ShoppingCart className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'/>
      </SheetTrigger>
    </Sheet>
  )
}

export default Cart