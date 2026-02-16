import { defineType, defineField } from "sanity";

export default defineType({
  name: "reviewsSection",
  title: "Reviews Section",
  type: "document",
  fields: [
    // Heading
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "What Our Clients Say",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "subheading",
      title: "Subheading",
      type: "text",
      rows: 2,
      initialValue:
        "Don't just take our word for it. Here's what our customers say.",
    }),

    // Stats
    defineField({
      name: "stats",
      title: "Statistics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "number",
              title: "Number",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "number",
              subtitle: "label",
            },
          },
        },
      ],
    }),

    // Reviews
    defineField({
      name: "reviews",
      title: "Customer Reviews",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Customer Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "date",
              title: "Date",
              type: "string",
              description: "Example: December 2024",
            }),
            defineField({
              name: "service",
              title: "Service Type",
              type: "string",
            }),
            defineField({
              name: "rating",
              title: "Rating (1-5)",
              type: "number",
              validation: (Rule) => Rule.min(1).max(5).required(),
            }),
            defineField({
              name: "review",
              title: "Review Text",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "service",
            },
          },
        },
      ],
    }),

    // CTA Section
    defineField({
      name: "ctaHeading",
      title: "CTA Heading",
      type: "string",
      initialValue: "Ready to Experience the Difference?",
    }),

    defineField({
      name: "ctaText",
      title: "CTA Text",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "ctaButtonText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "Book Your Cleaning Today",
    }),

    defineField({
      name: "ctaButtonLink",
      title: "CTA Button Link",
      type: "string",
      initialValue: "/booking",
    }),
  ],
});
