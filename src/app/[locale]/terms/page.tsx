import { createLegalSubpage } from "@/app/[locale]/legal-subpage";

const { generateMetadata, Page } = createLegalSubpage({
  titleKey: "terms",
  path: "/terms",
});

export { generateMetadata };
export default Page;
