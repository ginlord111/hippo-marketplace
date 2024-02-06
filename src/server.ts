import express from "express";
import type { Payload } from "payload";
import { nextApp, nextAppHandler } from "./next-utils";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc/server";
import { inferAsyncReturnType } from "@trpc/server";
import { getPayloadClient } from "./get-payload";
const app = express();
const PORT = Number(process.env.PORT) || 3000;

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  return { res, req };
};

export type ExpressContext = inferAsyncReturnType<typeof createContext>; /// passing the type of the createContext

const start = async () => {
  const payload = await getPayloadClient({
    initOption: {
      express: app,
      onInit: async (cms: Payload) => {
        cms.logger.info(`Admin url ${cms.getAdminURL()}`);
      },
    },
  });

  app.use(
    "/api/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext: createContext,
    })
  );
  app.use((req, res) => nextAppHandler(req, res));

  nextApp.prepare().then(() => {
    app.listen(PORT, async () => {});
  });
};
start();
