import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'

interface ProductDetailProps{
  params:{
    productID:string,
  }
}
const ProductDetail = ({params}:ProductDetailProps) => {
  return (
<MaxWidthWrapper>
  <h1>hello</h1>
</MaxWidthWrapper>
  )
}

export default ProductDetail 