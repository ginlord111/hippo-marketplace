import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

export default buildConfig({
    serverURL:process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections:[],
    routes:{
        admin:'/sell'
    },
    admin:{},
    editor:slateEditor({}),
    db:mongooseAdapter({url:'300'})
})