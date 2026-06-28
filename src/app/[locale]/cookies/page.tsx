import { createLegalSubpage } from "@/app/[locale]/legal-subpage";

const { generateMetadata, Page } = createLegalSubpage({ titleKey: "cookies" });

export { generateMetadata };
export default Page;
