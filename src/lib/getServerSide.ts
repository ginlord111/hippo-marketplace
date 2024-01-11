import { NextRequest } from "next/server"
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies"
import { User } from "../payload-types"
export  const getServerSide = async (cookies:NextRequest['cookies'] | ReadonlyRequestCookies  ) =>{
    const token = cookies.get('payload-token')?.value
    
    const userData = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`, {
        headers:{
            Authorization: `JWT ${token}`,
        },

})
    const {user} = await userData.json() as {user:User | null}

        return {user}
}

