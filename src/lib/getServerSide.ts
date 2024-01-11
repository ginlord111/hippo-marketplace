import { NextRequest } from "next/server"
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies"
import { User } from "../payload-types"
export  const getServerSide = async (cookies:NextRequest['cookies'] | ReadonlyRequestCookies  ) =>{
    const token = cookies.get('payload-token')?.value
    
    const meRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`, {
        method:'GET',
        credentials:'include',
        headers:{
            Authorization:`JWT ${token}`,
            'Content-Type': 'application/json',
        },
})
const {user} =await meRes.json() as {user:User | null}

return {user}
}

