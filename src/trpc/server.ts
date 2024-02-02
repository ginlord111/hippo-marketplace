import { z } from "zod";
import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";
import { QueryValidator } from "../lib/query-validator";
import { getPayloadClient } from "../get-payload";

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
      const { query, cursor  } = input;
      const { sort, limit, ...queryOpts } = query;
      const page = cursor || 1;
      const parsedQueryOpts: Record<string, { equals: string }> = {};
      Object.entries(queryOpts).forEach(([key, value]) => {
        parsedQueryOpts[key] = {
          equals: value,
        };
      });
      const payload = await getPayloadClient();
      const {
        docs: products,
        hasNextPage,
        nextPage,
      } = await payload.find({
        collection: "product",
        where: {
          approvedForSale: {
            equals: "Approved",
          },
          ...parsedQueryOpts, ///   TO BE REMEMBER
        },
        sort,
        depth: 1,
        limit,
        page,
      });
      return {
        products,
        nextPage: hasNextPage && nextPage,
      };
    }),
});

export type AppRouter = typeof appRouter;
