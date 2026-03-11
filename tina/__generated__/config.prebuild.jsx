// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
    }
  },
  schema: {
    collections: [
      {
        name: "litter",
        label: "Litters",
        path: "content/litters",
        format: "json",
        ui: {
          router: ({ document }) => `/litters/${document._sys.filename}`,
          filename: {
            readonly: false,
            slugify: (values) => `${values?.slug || values?.title?.toLowerCase().replace(/ /g, "-")}`
          }
        },
        fields: [
          { type: "boolean", name: "active", label: "Active (uncheck to hide this litter)", ui: { defaultValue: true } },
          { type: "string", name: "title", label: "Breed Title", required: true },
          { type: "string", name: "slug", label: "URL Slug (e.g. saint-lucy)", required: true },
          { type: "string", name: "breeder", label: "Breeder (e.g. John & Kathy Yarnelle)" },
          { type: "string", name: "generation", label: "Generation (e.g. F1B)" },
          { type: "string", name: "priceRange", label: "Price Range (e.g. $1,200 \u2014 $2,000)" },
          { type: "string", name: "litterTitle", label: "Litter Title (e.g. Lucy x Bonsai)" },
          { type: "string", name: "dateOfBirth", label: "Date of Birth" },
          { type: "string", name: "takeHomeDate", label: "Take Home Date" },
          { type: "string", name: "estimatedSize", label: "Estimated Size" },
          { type: "string", name: "grooming", label: "Grooming Frequency" },
          { type: "string", name: "temperament", label: "Temperament", ui: { component: "textarea" } },
          { type: "string", name: "deposit", label: "Deposit Amount (e.g. $400)" },
          { type: "string", name: "contact", label: "Contact (e.g. Kathy - (260) 410-7925)" },
          { type: "string", name: "damName", label: "Dam Name" },
          { type: "string", name: "damDesc", label: "Dam Description" },
          { type: "image", name: "damPhoto", label: "Dam Photo" },
          { type: "string", name: "sireName", label: "Sire Name" },
          { type: "string", name: "sireDesc", label: "Sire Description" },
          { type: "image", name: "sirePhoto", label: "Sire Photo" },
          {
            type: "object",
            name: "puppies",
            label: "Available Puppies",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "Puppy" }) },
            fields: [
              { type: "string", name: "name", label: "Puppy Name" },
              { type: "string", name: "gender", label: "Gender", options: ["Girl", "Boy"] },
              { type: "string", name: "price", label: "Price (e.g. $1,200)" },
              { type: "string", name: "status", label: "Status", options: ["Available", "Reserved", "Sold"] },
              {
                type: "object",
                name: "photos",
                label: "Puppy Photos",
                list: true,
                fields: [
                  { type: "image", name: "src", label: "Photo" },
                  { type: "string", name: "alt", label: "Alt text" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "previousPuppies",
            label: "Previous Puppy Photos",
            list: true,
            fields: [
              { type: "image", name: "src", label: "Photo" },
              { type: "string", name: "alt", label: "Alt text" }
            ]
          }
        ]
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Page Title" },
          { type: "string", name: "heroHeading", label: "Hero Heading" },
          { type: "string", name: "heroSubtext", label: "Hero Subtext", ui: { component: "textarea" } }
        ]
      },
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        fields: [
          { type: "string", name: "announcementBar", label: "Announcement Bar Text" },
          { type: "string", name: "phone", label: "Primary Phone (Brooke)" },
          { type: "string", name: "email", label: "Email" },
          { type: "string", name: "instagramUrl", label: "Instagram URL" },
          { type: "string", name: "cashappUrl", label: "CashApp URL" }
        ]
      },
      {
        name: "reviews",
        label: "Reviews",
        path: "content/reviews",
        format: "json",
        fields: [
          {
            type: "object",
            name: "reviewImages",
            label: "Review Screenshots",
            list: true,
            fields: [
              { type: "image", name: "src", label: "Review Screenshot" },
              { type: "string", name: "alt", label: "Reviewer Name" }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
