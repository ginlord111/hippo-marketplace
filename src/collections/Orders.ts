import { Access, CollectionConfig } from "payload/types";
const yourOwnOrder: Access = ({ req: { user } }) => {
  if (user?.role === "admin") return true;
  return {
    user: {
      equals: user?.id,
    },
  };
};
export const Orders: CollectionConfig = {
  slug: "orders",
  admin: {
    useAsTitle: "Your Orders",
    description: "Summary of orders",
  },
  access: {
    read: yourOwnOrder,
    create:({req})=>req.user.role === 'admin',
    update:({req})=>req.user.role === "admin",
    delete:({req})=>req.user.role === "admin",
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
    {
      name:'user',
      type:"relationship",
      relationTo:'user',
      required:true,
      hasMany:true,
      admin: {
        hidden: true,
      },
    }
  ],
};
