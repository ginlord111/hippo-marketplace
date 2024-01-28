import { Access, CollectionConfig } from "payload/types";
const yourOwnOrder: Access = ({ req: { user } }) => {
  if (user?.role === "admin") return true;
  return {
    user: {
      equals: user?.id,
    },
  };
};
const Orders: CollectionConfig = {
  slug: "orders",
  admin: {
    useAsTitle: "Your Orders",
    description: "Summary of orders",
  },
  access: {
    read: yourOwnOrder,
  },
  fields: [
    {
      name: "_isPaid",
      type: "checkbox",
      access: {
        read: ({ req }) => req.user.role === "admin",
        create: () => false,
        update: () => false,
      },
      admin: {
        hidden: true,
      },
      required: true,
    },
  ],
};
