import { createLegalSubpage } from "@/app/[locale]/legal-subpage";

const { generateMetadata, Page } = createLegalSubpage({ titleKey: "accessibility" });

export { generateMetadata };
export default Page;
