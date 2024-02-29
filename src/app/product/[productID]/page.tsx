import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'

interface ProductDetailProps{
  params:{
    productID:string,
  }
}
const ProductDetail = ({params}:ProductDetailProps) => {
  return (
<MaxWidthWrapper  className='bg-white'>
<div className='bg-white'>
<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl '>
  <div className='lg:max-w-lg lg:self-end'>

  </div>
</div>
</div>
</MaxWidthWrapper>
  )
}

export default ProductDetail 