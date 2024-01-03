
import * as z from "zod"
export const formSchema = z.object({
    username: z.string().min(8, {
      message: "Username must be at least 8 characters.",
    }).email(),
    password: z.string().min(8, {
        message: "Passowod must be at least 8 characters.",
      }),
  })

