const fs = require("fs");
const path = require("path");

// === Setup Paths ===
const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");
const indexTsxPath = path.join(assetsDir, "index.tsx");

// === Helpers ===
const toPascalCase = (str) =>
  str
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

const toKebabCase = (str) =>
  str
    .replace(/[&/()]+/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");

// === Data: Define All Pages Here ===
const pages = [
  {
    title: "SEMI",
    imageRoutes: [
      "/FCA Application / E-Money New Authorisation &  Registration / AEMI",
      "/Identification details and timings 1",
      "/Identification details and timings 2",
      "/Identification details and timings 3",
      "/SEMI",
      "/SEMI1",
      "/Conditions for registration 2",
      "/Conditions for registration 1",
      "/ Business plan",
      "/Capital resources and requirements",
      "/Capital resources and requirements 1",
      "/Capital resources and requirements 2",
      "/Safeguarding measures ",
      "/Unrelated payment services",
      "/Governance arrangements and risk management",
      "/Qualifying holdings and close links",
      "/Procedure to Monitor, Handle, and Follow Up on Security Incidents and Customer Complaints",
      "/Process in place to file, monitor, track and restrict access to sensitive payment data",
      "/The principles and definitions applicable to the collection of statistical data on performance, transactions and fraud",
      "/Security policy",
      "/Fees and levies",
      "/SEMI2"
    ],
    buttonTitles: ["Reference Doc","KEY TERMS"],
    buttonRoutes: ["/FCA Application / E-Money New Authorisation &  Registration / AEMI","/TERMS IN APPLICATION PACK"],
  },
];

// === Main Page Generator ===
for (const page of pages) {
  const { title, pageTitle, backRoute, imageRoutes, buttonTitles, buttonRoutes } = page;
  const pascal = toPascalCase(title);
  const kebab = toKebabCase(title);

  // Convert imageRoutes to kebab-case at runtime if not already
  const processedImageRoutes = imageRoutes.map(route => toKebabCase(route));
  const imageNames = processedImageRoutes.map((_, i) => `${pascal}Image${i + 1}`);

  // Convert buttonRoutes to kebab-case at runtime if not already
  const processedButtonRoutes = buttonRoutes.map(route => toKebabCase(route));

  // === Create Unique Folder ===
  let dir = path.join(baseDir, kebab);
  let suffix = 1;
  while (fs.existsSync(dir)) {
    dir = path.join(baseDir, `${kebab}-section${suffix++}`);
  }
  fs.mkdirSync(dir, { recursive: true });

  // === Create Page Content ===
  const imageImports = imageNames
    .map((name) => `import { ${name} } from "@/assets";`)
    .join("\n");

  const imageArray = imageNames
    .map(
      (name, i) =>
        `        { src: ${name}, route: "${imageRoutes[i]}", alt: "Image ${
          i + 1
        }" },`
    )
    .join("\n");

  const buttonProps = processedButtonRoutes
    .map(
      (route, i) =>
        `      amendmentButtonRoute${
          i + 1
        }="${route}"\n      amendmentButtonTitle${i + 1}="${buttonTitles[i]}"`
    )
    .join("\n");

  const pageContent = `"use client";
import React from "react";
${imageImports}
import MultiImagesAmendmentComparisonBtn from "@/components/common-page-multi-images-two-amendment-btn";

const ${pascal}Page = () => {
  return (
    <MultiImagesAmendmentComparisonBtn
      images={[
${imageArray}
      ]}
      pageTitle="${pageTitle}"
      backRoute="${backRoute}"
${buttonProps}
    />
  );
};

export default ${pascal}Page;
`;

  // === Write page.tsx ===
  fs.writeFileSync(path.join(dir, "page.tsx"), pageContent, "utf8");
  console.log(`✅ Created: ${dir}/page.tsx`);

  // === Update assets/index.tsx with image exports ===
  for (const imageName of imageNames) {
    const svgFile = `${imageName}.svg`;
    const exportLine = `export { default as ${imageName} } from "./${svgFile}";\n`;

    let shouldAppend = true;
    if (fs.existsSync(indexTsxPath)) {
      const content = fs.readFileSync(indexTsxPath, "utf8");
      if (content.includes(exportLine.trim())) {
        shouldAppend = false;
      }
    }

    if (shouldAppend) {
      fs.appendFileSync(indexTsxPath, exportLine);
      console.log(`➕ Exported ${imageName} to index.tsx`);
    }
  }
}

console.log("🎉 All pages and image exports created.");