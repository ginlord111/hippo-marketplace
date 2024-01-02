import express from 'express'
import type { Payload } from 'payload';
import { getPayloadClient } from './get-payload';
import { nextAppHandler } from './next-utils';



const app = express();
const PORT = Number(process.env.PORT) || 3000;

const start = async() =>{

    const payload = await getPayloadClient({
        initOption:{
            express:app,
            onInit: async (cms:Payload) =>{
                cms.logger.info(`Admin url ${cms.getAdminURL()}`)
            }
        }
    })
}
start()

app.use((req, res) => nextAppHandler(req, res))



app.listen(PORT)
 