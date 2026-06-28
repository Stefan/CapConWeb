import { createLegalSubpage } from "@/app/[locale]/legal-subpage";

const { generateMetadata, Page } = createLegalSubpage({ titleKey: "terms" });

export { generateMetadata };
export default Page;
