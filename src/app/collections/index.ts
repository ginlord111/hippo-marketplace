import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
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
