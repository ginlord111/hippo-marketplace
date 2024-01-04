import { formSchema } from '@/app/(auth)/sign-up/constant'
import { publicProcedure, router } from './trpc'
import { getPayloadClient } from '@/get-payload'
import { TRPCError } from '@trpc/server'


export const authRouter = router({
    createPayloadUser:publicProcedure.input(formSchema).
    mutation(async ({input}) =>{
        const {username, password} = input
        const payload = await getPayloadClient()

        const {docs:user} = await payload.find({
            collection:'user',
            where:{
                username:{
                    username:username
                }
            }
        })
        if(user.length!==0){
            throw new TRPCError ({code:'PARSE_ERROR'})
        }

        await payload.create({
            collection:'users',
            data:{}
        })
    })
 

})