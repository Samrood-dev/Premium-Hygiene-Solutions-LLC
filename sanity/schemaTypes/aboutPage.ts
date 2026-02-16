import { defineType, defineField } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    // Main Heading
    defineField({
      name: "heading",
      title: "Main Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // Left Section (Mission, Vision, Experience)
    defineField({
      name: "sections",
      title: "About Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Section Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),

    // Why Choose Us Title
    defineField({
      name: "whyChooseTitle",
      title: "Why Choose Us Title",
      type: "string",
      initialValue: "Why Choose Us?",
    }),

    // Why Choose Us Points
    defineField({
      name: "whyChoosePoints",
      title: "Why Choose Us Points",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
