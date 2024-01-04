import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "user",
  auth:true,
  access:{
    read:() => true,
    create:() =>true,
  },
  fields: [
    {
      name: "role",
      type: "select",
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "User",
          value: "user",
        },
      ],
    },
  ],
};
