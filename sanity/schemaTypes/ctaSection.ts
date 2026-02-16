import { defineType, defineField } from "sanity";

export default defineType({
  name: "ctaSection",
  title: "CTA Section",
  type: "document",
  fields: [
    // Heading
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "REACH OUT TO US TODAY TO BOOK A SERVICE",
      validation: (Rule) => Rule.required(),
    }),

    // Button Text
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      initialValue: "GET NOW",
      validation: (Rule) => Rule.required(),
    }),

    // Button Link
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "string",
      initialValue: "/booking",
      validation: (Rule) => Rule.required(),
    }),

    // Optional: Background Color (future flexibility)
    defineField({
      name: "backgroundVariant",
      title: "Background Variant",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Dark", value: "dark" },
          { title: "Light", value: "light" },
        ],
        layout: "radio",
      },
      initialValue: "primary",
    }),
  ],
});
