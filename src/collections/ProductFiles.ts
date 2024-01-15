import { BeforeChangeHook } from "payload/dist/collections/config/types";
import { CollectionConfig } from "payload/types";
import { User } from "@/payload-types";
const addUser:BeforeChangeHook =  ({req,data})=>{
const user = req.user as User | null
    return {...data, user:user?.id}
}
export const ProductFiles:CollectionConfig = {
slug:"product_files",
admin:{
    hidden:({user}) => user.role!== "admin"
},
hooks:{
    beforeChange:[addUser],
},
upload:{
    staticDir:'product_files',
    staticURL:'/product_files',
    mimeTypes:[
        'image/*',
        'font/*',
        'application/postscript',
    ],
},
fields:[
    {
        name:'user',
        type:'relationship',
        relationTo:'user',
        required:true,
        hasMany:false,
        admin:{
            condition:()=>false,
        }
    }
]
}