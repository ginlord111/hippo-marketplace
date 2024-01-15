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
    {
      name:"product_files",
      type:"relationship",
      required:true,
      relationTo:"product_files",
      hasMany:false,
    },
    {
      name:"approvedForSale",
      type:"select",
      options:[
        {
          label:"Pending Verification",
          value:"Pending"
        },
        {
          label:"Approved",
          value:"Approved"
        },
        {
          label:"Denied",
          value:"Denied",
        },
      ],
      defaultValue:"Pending",
      access:{
        create:({req})=>(req.user.role === "admin"),
        read:({req})=>(req.user.role === "admin"),
        update:({req})=>(req.user.role === "admin"),
      }
    },
    {
      name:"productID",
      type:"text",
      required:true,
      access:{
        create:()=>false,
        read:()=>false,
        update:()=>false,
      },
      admin:{
        hidden:true,
      },
    },
    {
      name:"stripeID",
      type:"text",
      required:true,
      access:{
        create:()=>false,
        read:()=>false,
        update:()=>false,
      },
      admin:{
        hidden:true,
      },
    },
    {
      name:"images",
      type:"array",
      label:"Product Images",
      fields:[
        {
          name:"images",
          relationTo:"media",
          type:"upload",
          required:true,
        },
      ]
    }
    
  ],
};
