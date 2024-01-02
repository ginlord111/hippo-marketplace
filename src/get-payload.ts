import dotenv from 'dotenv'
import path from 'path'
import payload from 'payload'
import type {InitOptions} from 'payload/config'
dotenv.config({
    path:path.resolve(__dirname, '../.env')
})


let cached = (global as any).payload

if(!cached){
    cached = (global as any).payload ={
        client:null,
        promise:null,
    }
}

interface Args {
    initOption?:Partial<InitOptions>
}

export const getPayloadClient = async ({initOption}:Args = {}) =>{

    if(!process.env.PAYLOAD_SECRET){
        throw new Error('PAYLOAD SECRET IS MISSING IN ENVIRONMENTAL VARIABLES')

    }

    if(cached.client){
        return cached.client
     }

     if(!cached.promise){
        cached.promise = payload.init({
            secret:process.env.PAYLOAD_SECRET,
            local:initOption?.express ? false : true,
            ...(initOption || {})
        })
     }
     	
     try {
        cached.client = await cached.promise;
     } catch (e:unknown) {
        cached.promise = null
        throw e;
        
     }

     

     return cached.client;
}

