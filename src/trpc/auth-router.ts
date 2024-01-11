import { formSchema } from '../app/(auth)/constant'
import { publicProcedure, router } from './trpc'
import { getPayloadClient } from '../get-payload'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'


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
            throw new TRPCError ({code:'CONFLICT'}) // WILL THROW THE ERROR IF THE EMAIL IS ALREADY USED
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
    }),
 
    verifyEmail:publicProcedure.input(z.object({token:z.string()})).
    query(async ({input}) => {
    const {token } = input 
        const payload = await getPayloadClient()
     const isVerified =   payload.verifyEmail({
            collection:'user',
            token:token
        })
        if (!isVerified){
            throw new TRPCError({code:'UNAUTHORIZED'})
        }
        return {sucess:true}

        /// useMutation is used to mutate or change the data while the query is just reading it
    }),
    signInUser:publicProcedure.input(formSchema).
    mutation(async({input, ctx} )=> {
        const{res} = ctx
        const {usernameOremail, password} = input
        const payload = await getPayloadClient()
        try {
            const login = await payload.login({
            collection:'user',
            data:{
                email:usernameOremail,
                password:password,
            },
            res,
            })
            return {succes:true, login}
        } catch (error) {
          return new TRPCError({code:'UNAUTHORIZED'})
        }
    }),
    
})