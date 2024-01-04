import { appRouter } from '@/trpc/server'
import {fetchRequestHandler} from '@trpc/server/adapters/fetch'
const handler = (req:Request) => {
fetchRequestHandler({
    endpoint:'/api/trpc',
    req,
    router:appRouter,
    createContext:()=>({}),
})

}

export {handler as POST, handler as GET, handler as PUT}