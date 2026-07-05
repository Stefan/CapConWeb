import assert from "node:assert/strict";
import test from "node:test";

import { featureIcons, painPointIcons } from "../src/lib/content-icons.ts";
import { getDictionary } from "../src/i18n/get-dictionary.ts";
import type { Locale } from "../src/i18n/config.ts";
import { siteVariants } from "../src/lib/variant.ts";

const locales: Locale[] = ["en", "de", "fr", "ja", "ko", "pl", "zh"];

test("every feature and pain-point id has an icon", () => {
  const missingFeatures: string[] = [];
  const missingPain: string[] = [];

  for (const variant of siteVariants) {
    for (const locale of locales) {
      const dict = getDictionary(locale, variant);
      for (const item of dict.features?.items ?? []) {
        if (!featureIcons[item.id]) {
          missingFeatures.push(`${variant}/${locale}: ${item.id}`);
        }
      }
      for (const item of dict.problem?.items ?? []) {
        if (!painPointIcons[item.id]) {
          missingPain.push(`${variant}/${locale}: ${item.id}`);
        }
      }
    }
  }

  assert.equal(
    missingFeatures.length,
    0,
    `Missing feature icons: ${missingFeatures.join(", ")}`,
  );
  assert.equal(
    missingPain.length,
    0,
    `Missing pain-point icons: ${missingPain.join(", ")}`,
  );
});
