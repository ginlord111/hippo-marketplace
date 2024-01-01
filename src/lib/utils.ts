import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


  export function formatPrice (
    price:number | string , 
    option:{
      currency?:'USD' | 'EUR' | 'PHP' | 'BDT' | 'GBP',
      notation?: Intl.NumberFormatOptions['notation']
    } ={}
   )
   {
    const {currency = 'USD', notation  = 'compact'} = option;
    const numericPrice = typeof price === 'string' ? parseFloat(price) : price;


    return new Intl.NumberFormat('en-US', {
      style:'currency',
      currency:currency,
     notation,
      maximumFractionDigits:2,
    }).format(numericPrice)
   }
