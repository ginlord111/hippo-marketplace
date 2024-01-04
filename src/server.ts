import express from 'express'
import type { Payload } from 'payload';
import { getPayloadClient } from './get-payload';
import { nextApp, nextAppHandler } from './next-utils';
import * as trpcExpress from '@trpc/server/adapters/express'
import { appRouter } from './trpc/server';


const app = express();
const PORT = Number(process.env.PORT) || 3000;

const createContext= ({req, res}:trpcExpress.CreateExpressContextOptions) => {
    return {req, res};
}

const start = async() =>{
    const payload = await getPayloadClient({
        initOption:{
            express:app,
            onInit: async (cms:Payload) =>{
                cms.logger.info(`Admin url ${cms.getAdminURL()}`)
            }
        }
    })
    app.use('api/trpc', trpcExpress.createExpressMiddleware({
        router:appRouter,
        createContext:createContext,

    }))
    app.use((req, res) => nextAppHandler(req, res))

    nextApp.prepare().then(() =>{
        app.listen(PORT, async () =>{
            
        })
    })
}
start()





 