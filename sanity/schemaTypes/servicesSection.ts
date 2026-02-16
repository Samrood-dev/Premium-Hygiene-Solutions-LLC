import { defineType, defineField } from "sanity";

export default defineType({
  name: "servicesSection",
  title: "Services Section",
  type: "document",
  fields: [
    // Section Heading
    defineField({
      name: "heading",
      title: "Section Heading",
      type: "string",
      initialValue: "Our Services",
      validation: (Rule) => Rule.required(),
    }),

    // Services List
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Service Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "description",
              title: "Service Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "image",
              title: "Service Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "objectPosition",
              title: "Image Object Position (optional)",
              type: "string",
              description: "Example: object-bottom",
            }),

            defineField({
              name: "link",
              title: "Redirect Link",
              type: "string",
              initialValue: "/booking",
            }),
          ],
          preview: {
            select: {
              title: "title",
              media: "image",
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
});
