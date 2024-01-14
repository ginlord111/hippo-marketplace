import { CollectionConfig } from "payload/types";

export const Media:CollectionConfig = {
    slug:"media",
    hooks:{
        beforeChange:[
           ({req, data})=> ({...data, user:req.user.id})
        ]
    },
    upload:{
        staticURL:'/media',
        staticDir:'media',
        imageSizes:[
            {
                name:'thumbnail',
                width:400,
                height:300,
                position:'centre',
            },
            {
                name:'card',
                width:768,
                height:1024,
                position:'centre',
            },
            {
                name:'tablet',
                width:1024,
                height:undefined,
                position:'centre',
            },
            
        ],
        mimeTypes:['images/*'],
    },
    fields:[
        {
            name:'user',
            type:'relationship',
            relationTo:'user',
            required:true,
            admin:{
                condition:()=>false,
            },
            hasMany:false,
        }
    ]

}