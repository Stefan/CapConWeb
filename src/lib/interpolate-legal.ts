import { legalEntity } from "@/lib/legal";

const PLACEHOLDERS: Record<string, string> = {
  "{{companyName}}": legalEntity.companyName,
  "{{legalForm}}": legalEntity.legalForm,
  "{{addressLine1}}": legalEntity.addressLine1,
  "{{addressLine2}}": legalEntity.addressLine2,
  "{{email}}": legalEntity.email,
  "{{phoneLine}}": legalEntity.phone ? `Telefon: ${legalEntity.phone}` : "",
  "{{responsiblePerson}}": legalEntity.responsiblePerson,
  "{{registerLine}}":
    legalEntity.registerCourt && legalEntity.registerNumber
      ? `Registergericht: ${legalEntity.registerCourt}, ${legalEntity.registerNumber}`
      : "",
  "{{vatLine}}": legalEntity.vatId ? `USt-IdNr.: ${legalEntity.vatId}` : "",
  "{{dpoEmail}}": legalEntity.dataProtectionContact,
  "{{hostingProvider}}": legalEntity.hostingProvider,
  "{{hostingRegion}}": legalEntity.hostingRegion,
};

export function interpolateLegalText(text: string): string {
  let result = text;
  for (const [key, value] of Object.entries(PLACEHOLDERS)) {
    result = result.replaceAll(key, value);
  }
  return result.replace(/\n\s*\n/g, "\n").trim();
}
