import PRODUCT_CATEGORIES from "../config/index"
import { CollectionConfig } from "payload/types";

export const Product: CollectionConfig = {
  slug: "product",
  admin: {
    useAsTitle: "name",
  },
  access: {},
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "user",
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name:"description",
      label:"Product Details",
      type:"textarea"
    },
    {
      name:"price",
      label:"Price in USD",
      min:0,
      max:1000,
      type:"number",
      required:true,
    },
    {
      name:'category',
      label:'Category',
      type:'select',
      required:true,
      options:PRODUCT_CATEGORIES.map(({label, value}) => ({label, value}))
    },
  ],
};
