import { createLegalSubpage } from "@/app/[locale]/legal-subpage";

const { generateMetadata, Page } = createLegalSubpage({
  titleKey: "cookies",
  path: "/cookies",
});

export { generateMetadata };
export default Page;
