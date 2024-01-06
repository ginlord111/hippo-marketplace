
import { formSchema } from '../app/(auth)/sign-up/constant'
import { publicProcedure, router } from './trpc'
import { getPayloadClient } from '../get-payload'
import { TRPCError } from '@trpc/server'


export const authRouter = router({
    createPayloadUser:publicProcedure.input(formSchema).
    mutation(async ({input}) =>{
        const {usernameOremail, password} = input
        const payload = await getPayloadClient()

        const {docs:user} = await payload.find({
            collection:'user',
            where:{
             email:{
                  equals:usernameOremail,
                }
            },
        })
        if(user.length!==0){
            throw new TRPCError ({code:'PARSE_ERROR'})
        }
        await payload.create({
           collection:'user',
        data:{
            email:usernameOremail,
            password:password,
            role:'user',
        }
        })
        return {succes:true, sentToEmail:usernameOremail};
    })
 

})