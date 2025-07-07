const fs = require("fs");
const path = require("path");

// Define the base directory
const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");

// List of pages to create, each with a title and a custom amendmentButtonRoute
const pages = [
  {
    title: "Part VII Management of Property and Affairs of Patients",
    amendmentButtonRoute: "/Amendment Comparison - Part VII Management of Property and Affairs of Patients"
  },
//   {
//     title: "Visiting patients",
//     amendmentButtonRoute: "/AC Visiting Patients"
//   },
//   {
//     title: "After care",
//     amendmentButtonRoute: "/AC  After-care"
//   },
//  {
//     title: "Functions of the Secretary of States",
//     amendmentButtonRoute: "/AC Functions of the Secretary of State"
//   },
  
];

// Convert to PascalCase
const toPascalCase = (str) =>
  str
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");


// Convert to kebab-case
const toKebabCase = (str) =>
  str
    .replace(/[&^/()]+/g, "") // Remove &, ^, /, (, )
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");

// Convert to kebab-case for routes (e.g., amendmentButtonRoute)
const toKebabRoute = (str) =>
  str
    .replace(/[&^/()]+/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");



for (const { title, amendmentButtonRoute } of pages) {
  const kebab = toKebabCase(title);
  const pascal = toPascalCase(title);
  const imageName = `${pascal}Image`;
  const svgFile = `${imageName}.svg`;

  // Create directory for the page
  const dir = path.join(baseDir, kebab);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  // Always kebab-case the amendmentButtonRoute
  const kebabAmendmentButtonRoute = amendmentButtonRoute ? `/${toKebabRoute(amendmentButtonRoute)}` : '';

  // Create page.tsx using AmendmentComparison
  const pageContent = `"use client";

import { ${imageName} } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ${pascal}Page = () => {
  return (
    <AmendmentComparison
      pageTitle={\`Mental Health / Mental Health  Act 1983 / Part VII / ${title}\`}
      src={${imageName}}
      backRoute="/schedule-act-1983"
      amendmentButtonRoute="${kebabAmendmentButtonRoute}"
    />
  );
};

export default ${pascal}Page;
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), pageContent, "utf8");

  // Append to existing index.tsx in assets
  const indexTsxPath = path.join(assetsDir, "index.tsx");
  const imageExport = `export { default as ${imageName} } from "./${svgFile}";\n`;
  if (fs.existsSync(indexTsxPath)) {
    const indexContent = fs.readFileSync(indexTsxPath, "utf8");
    if (!indexContent.includes(imageExport.trim())) {
      fs.appendFileSync(indexTsxPath, imageExport);
      console.log(`Export for image '${imageName}' added to index.tsx.`);
    } else {
      console.log(`Export for image '${imageName}' already exists in index.tsx. Skipping export.`);
    }
  } else {
    fs.appendFileSync(indexTsxPath, imageExport);
    console.log(`Export for image '${imageName}' added to index.tsx.`);
  }
}

console.log("Pages and image exports have been created.");
