import {createTRPCReact} from '@trpc/react-query'
import { AppRouter } from './server'
import { authRouter } from './auth-router'
export const trpc = createTRPCReact<AppRouter>({
})