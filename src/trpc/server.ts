import { z } from "zod";
import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";
import { QueryValidator } from "@/lib/query-validator";
import { getPayloadClient } from "@/get-payload";

export const appRouter = router({
  auth: authRouter,
  getInfinitProduct: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100),
        cursor: z.number().nullish(),
        query: QueryValidator,
      })
    )
    .query(async ({ input }) => {
      const { query, cursor } = input;
      const { sort, limit, ...queryOpts } = query;

      const payload = await getPayloadClient();
      const { docs: products } = await payload.find({
        collection: "product",
        where: {
          approvedForSale: {
            equals: "Approved",
          },
        },
        sort,
        depth: 1,
        limit,
      });
    }),
});

export type AppRouter = typeof appRouter;
