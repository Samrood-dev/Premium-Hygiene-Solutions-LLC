import { defineType, defineField } from "sanity";

export default defineType({
  name: "howWeWork",
  title: "How We Work Section",
  type: "document",
  fields: [
    // Section Heading
    defineField({
      name: "heading",
      title: "Section Heading",
      type: "string",
      initialValue: "How we work",
      validation: (Rule) => Rule.required(),
    }),

    // Steps
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "number",
              title: "Step Number",
              type: "string",
              description: "Example: 01, 02, 03",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Step Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "desc",
              title: "Step Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "number",
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
});
