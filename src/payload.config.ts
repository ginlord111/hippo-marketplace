import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";
import { buildConfig } from "payload/config";
import dotenv from "dotenv";
dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});
import { Media } from "./collections/Media";
import { Users } from "./collections/User";
import { Product } from "./collections/Product";
import { ProductFiles } from "./collections/ProductFiles";
import { Orders } from "./collections/Orders";
export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [Users, Product, Media, ProductFiles, Orders],
  routes: {
    admin: "/sell",
  },

  admin: {
    user: "user",
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "Hippo Marketplace",
      favicon: "/favicon.ico",
      ogImage: "/thumbnail.jpg",
    },
  },
  rateLimit: {
    max: 2000,
  },

  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
});
