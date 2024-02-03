import { appRouter } from "@/trpc/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createContext } from "@/server";
const handler = (req: Request) => {
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    //@ts-expect-error
    createContext: () => {},
  });
};

// export {handler as POST, handler as GET, handler as PUT}
