import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { interpolateLegalText } from "../src/lib/interpolate-legal.ts";
import { legalEntity } from "../src/lib/legal.ts";

describe("interpolateLegalText", () => {
  it("replaces all legal entity placeholders", () => {
    const text = [
      "{{companyName}}",
      "{{legalForm}}",
      "{{addressLine1}}",
      "{{addressLine2}}",
      "{{email}}",
      "{{responsiblePerson}}",
      "{{dpoEmail}}",
      "{{hostingProvider}}",
      "{{hostingRegion}}",
    ].join(" | ");

    const result = interpolateLegalText(text);

    assert.match(result, new RegExp(legalEntity.companyName));
    assert.match(result, new RegExp(legalEntity.addressLine1));
    assert.match(result, new RegExp(legalEntity.email));
    assert.match(result, new RegExp(legalEntity.dataProtectionContact));
    assert.doesNotMatch(result, /\{\{/);
  });

  it("builds register and VAT lines when configured", () => {
    const result = interpolateLegalText("{{registerLine}} — {{vatLine}}");
    assert.match(result, /Registergericht:/);
    assert.match(result, /USt-IdNr\./);
  });

  it("omits empty phone line placeholder content", () => {
    const result = interpolateLegalText("Tel: {{phoneLine}} Ende");
    if (legalEntity.phone) {
      assert.match(result, /Telefon:/);
    } else {
      assert.equal(result, "Tel:  Ende".trim());
    }
  });

  it("replaces repeated placeholders consistently", () => {
    const result = interpolateLegalText("{{email}} / {{email}}");
    assert.equal(
      result,
      `${legalEntity.email} / ${legalEntity.email}`,
    );
  });

  it("trims collapsed blank lines", () => {
    const result = interpolateLegalText("Line one\n\n\nLine two");
    assert.equal(result, "Line one\nLine two");
  });
});

describe("localized legal pages use interpolatable placeholders", () => {
  it("ja privacy sections contain Japanese headings and placeholders", async () => {
    const { jaPages } = await import("../src/i18n/legal/locales/ja.ts");
    const controller = jaPages.privacy.sections[0]!;
    assert.match(controller.heading, /管理者/);
    assert.match(controller.paragraphs[0]!, /\{\{companyName\}\}/);
    assert.match(interpolateLegalText(controller.paragraphs[0]!), /Orkivo Technologies/);
  });

  it("ko privacy includes PIPA section", async () => {
    const { koPages } = await import("../src/i18n/legal/locales/ko.ts");
    const pipa = koPages.privacy.sections.find((s) => s.heading.includes("PIPA"));
    assert.ok(pipa);
    assert.match(pipa!.paragraphs[0]!, /\{\{dpoEmail\}\}/);
  });
});
