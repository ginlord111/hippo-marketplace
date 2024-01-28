import { User } from "@/payload-types";
import { Access, CollectionConfig } from "payload/types";

const isAdminOrUserHasAccess: Access = async ({ req }) => {
  const user = req.user as User | undefined;
  if (!user) {
    return false;
  }

  if (user.role === "admin") {
    return true;
  }
  return {
    user: {
      equals: req.user.id,
    },
  };
};

export const Media: CollectionConfig = {
  slug: "media",
  hooks: {
    beforeChange: [({ req, data }) => ({ ...data, user: req.user.id })],
  },
  access: {
    read: async ({ req }) => {
      const user = req.user;
      const referer = req.headers.referer;
      if (!user || referer?.includes("sell")) {
        return true;
      }
      return isAdminOrUserHasAccess({ req });
    },
    delete: ({ req }) => isAdminOrUserHasAccess({ req }),
    update: ({ req }) => isAdminOrUserHasAccess({ req }),
  },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        height: undefined,
        position: "centre",
      },
    ],
    mimeTypes: ["images/*"],
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "user",
      required: true,
      admin: {
        condition: () => false,
      },
      hasMany: false,
    },
  ],
};
