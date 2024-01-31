import { BeforeChangeHook } from "payload/dist/collections/config/types";
import { Access, CollectionConfig } from "payload/types";
import { User } from "@/payload-types";
import payload from "payload";
const addUser: BeforeChangeHook = ({ req, data }) => {
  const user = req.user as User | null;
  return { ...data, user: user?.id };
};
// const youOrPurchased: Access = async ({ req }) => {
//   const user = req.user as User | undefined;
//   if (user?.role === "admin") return true;
//   if (!user) return;

//   const {docs:products} = await payload.find({
//     collection: "product",
//     depth:0, /// DEPT = 0 BECAUSE WE JUST NEED THE ID OF THE PRODUCT NOT ALL FIELDS
//     where: {
//       user: {
//         equals: user.id,
//       },
//     },
//   });

//   const ownProduct = products.map((product) => (product.product_files)).flat()
// };
export const ProductFiles: CollectionConfig = {
  slug: "product_files",
  admin: {
    hidden: ({ user }) => user.role !== "admin",
  },
  hooks: {
    beforeChange: [addUser],
  },
  access: {
    // read: youOrPurchased,
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
