import { contactEmail } from "@/lib/brand";

/** Legal entity — set via env in production before public launch. */
export const legalEntity = {
  companyName:
    process.env.NEXT_PUBLIC_LEGAL_COMPANY ??
    "CapCon GmbH",
  legalForm: process.env.NEXT_PUBLIC_LEGAL_LEGAL_FORM ?? "Gesellschaft mit beschränkter Haftung",
  addressLine1:
    process.env.NEXT_PUBLIC_LEGAL_ADDRESS_LINE1 ?? "Musterstraße 1",
  addressLine2:
    process.env.NEXT_PUBLIC_LEGAL_ADDRESS_LINE2 ?? "80331 München, Deutschland",
  email: contactEmail,
  phone: process.env.NEXT_PUBLIC_LEGAL_PHONE ?? "",
  registerCourt: process.env.NEXT_PUBLIC_LEGAL_REGISTER_COURT ?? "Amtsgericht München",
  registerNumber: process.env.NEXT_PUBLIC_LEGAL_REGISTER_NUMBER ?? "HRB [eintragen]",
  vatId: process.env.NEXT_PUBLIC_LEGAL_VAT_ID ?? "DE[USt-IdNr. eintragen]",
  responsiblePerson:
    process.env.NEXT_PUBLIC_LEGAL_RESPONSIBLE ?? "[Vertretungsberechtigte Person eintragen]",
  dataProtectionContact:
    process.env.NEXT_PUBLIC_LEGAL_DPO_EMAIL ?? contactEmail,
  hostingProvider:
    process.env.NEXT_PUBLIC_LEGAL_HOSTING_PROVIDER ?? "Vercel Inc.",
  hostingRegion:
    process.env.NEXT_PUBLIC_LEGAL_HOSTING_REGION ?? "United States / EU (region-dependent)",
} as const;
