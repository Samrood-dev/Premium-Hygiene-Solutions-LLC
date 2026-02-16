import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { heroSection } from "./heroSection";
import { aboutPage } from "./aboutPage";
import { footer } from "./footer";
import howWeWork from "./howWeWork";
import reviewsSection from "./reviewsSection";
import servicesSection from "./servicesSection";
import ctaSection from "./ctaSection";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    heroSection,
    aboutPage,
    footer,
    howWeWork,
    reviewsSection,
    servicesSection,
    ctaSection,
  ],
};
