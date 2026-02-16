import { defineType, defineField } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    // Company Name
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // Logo
    defineField({
      name: "logo",
      title: "Company Logo",
      type: "image",
      options: { hotspot: true },
    }),

    // Description
    defineField({
      name: "description",
      title: "Company Description",
      type: "text",
      rows: 3,
    }),

    // Quick Links
    defineField({
      name: "quickLinks",
      title: "Quick Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Link Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "href",
              title: "Link URL / Anchor",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),

    // Contact Info
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),

    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),

    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 2,
    }),

    // Copyright Text (optional custom text)
    defineField({
      name: "copyrightText",
      title: "Copyright Text",
      type: "string",
      description: "Example: All rights reserved.",
      initialValue: "All rights reserved.",
    }),
  ],
});
