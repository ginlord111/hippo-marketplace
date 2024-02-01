import { BeforeChangeHook } from "payload/dist/collections/config/types";
import { Access, CollectionConfig } from "payload/types";
import { User } from "@/payload-types";
import payload from "payload";
const addUser: BeforeChangeHook = ({ req, data }) => {
  const user = req.user as User | null;
  return { ...data, user: user?.id };
};
const youOrPurchased: Access = async ({ req }) => {
  const user = req.user as User | null;
  if (!user) return false;
  if (user?.role === "admin") return true;

  const { docs: products } = await payload.find({
    collection: "product",
    depth: 0, /// DEPT = 0 BECAUSE WE JUST NEED THE ID OF THE PRODUCT NOT ALL FIELDS
    where: {
      user: {
        equals: user.id,
      },
    },
  });

  const ownProduct = products.map((product) => product.product_files).flat();

  const { docs: orders } = await payload.find({
    collection: "orders",
    depth: 2,
    where: {
      user: {
        equals: user.id,
      },
    },
  });
  const purchasedProductFile = orders
    .map((order) => {
      return order.product.map((prod) => {
        if (typeof prod === "string") {
          return req.payload.logger.error("Error typescript, cannot find id");
        }
        return typeof prod.product_files === "string"
          ? prod.product_files
          : prod.product_files.id;
      });
    })
    .filter(Boolean)
    .flat();

  return {
    id: {
      in: [...ownProduct, ...purchasedProductFile],
    },
  };
};
export const ProductFiles: CollectionConfig = {
  slug: "product_files",
  admin: {
    hidden: ({ user }) => user.role !== "admin",
  },
  hooks: {
    beforeChange: [addUser],
  },
  access: {
    read: youOrPurchased,
    update: ({ req }) => req.user.role === "admin",
    delete: ({ req }) => req.user.role === "admin",
  },
  upload: {
    staticDir: "product_files",
    staticURL: "/product_files",
    mimeTypes: ["image/*", "font/*", "application/postscript"],
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "user",
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
  ],
};
