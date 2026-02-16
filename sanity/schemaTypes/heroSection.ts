import { defineType, defineField } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Main Heading",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      initialValue: "AED",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "priceSuffix",
      title: "Price Suffix",
      type: "string",
      initialValue: "/ HOUR",
    }),

    defineField({
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
      initialValue: "Book A Cleaning Now",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "primaryButtonLink",
      title: "Primary Button Link",
      type: "string",
      initialValue: "/booking",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      description: "Used for both display and tel: link",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
