'use client'
import React from 'react'
import { Button } from './ui/button'
import { PRODUCT_CATEGORIES } from '@/config'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
type Category = typeof PRODUCT_CATEGORIES[number]
interface NavitemProps{
    Category:Category,
    handleOpen:()=>void,
    isOpen:boolean,
}
const NavItem = ({Category, handleOpen, isOpen}:NavitemProps) => {
  return (
    <div className='flex relative items-center'>
        <Button className='gap-1.5'onClick={handleOpen} 
        variant={isOpen ? 'secondary' : 'ghost'}>
          {Category.label}
          <ChevronDown className={cn('h-4 w-4 transition-all text-muted-foreground', isOpen && 'rotate-180' )}/>
        </Button>
    </div>
  )
}

export default NavItem