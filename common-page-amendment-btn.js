const fs = require("fs");
const path = require("path");

// Define the base directory
const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");

// List of pages to create, each with a custom backRoute
const pages = [
  
  {
    title: "Removal to and from Scotland",
    ButtonRoute: " Removal to and from Scotland AC",
  },
   {
    title: "Removal of patients to Channel Islands or Isle of Man",
    ButtonRoute: "Removal of patients to Channel Islands or Isle of Man AC",
  },
   {
    title: "Removal of patients to Northern Ireland",
    ButtonRoute: "Removal of patients to Northern Ireland AC",
  },
   {
    title: "Removal of aliens",
    ButtonRoute: "Removal of aliens AC",
  },
   {
    title: " Return of patients absent without leave",
    ButtonRoute: " Return of patients absent without leave AC",
  },
   {
    title: "General",
    ButtonRoute: " General AC",
  },
 

];

// Convert to PascalCase
const toPascalCase = (str) =>
  str
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");


// Convert to kebab-case (for directory and image names)
const toKebabCase = (str) =>
  str
    .replace(/[&/()]+/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");

// Convert to kebab-case for backRoute
const toKebabRoute = (str) =>
  str
    .replace(/[&/()]+/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");


for (const page of pages) {
  const { title, ButtonRoute } = page;
  if (!title || typeof title !== "string" || !title.trim()) {
    console.log("[SKIP] Invalid or empty page title. Skipping entry.");
    continue;
  }
  const kebabBase = toKebabCase(title);
  const pascal = toPascalCase(title);
  if (!kebabBase || !pascal) {
    console.log(`[SKIP] Could not generate valid names for title: '${title}'. Skipping.`);
    continue;
  }
  const imageName = `${pascal}Image`;
  const svgFile = `${imageName}.svg`;

  // Check for existing directory and create a unique one if needed
  let dir = path.join(baseDir, kebabBase);
  let dirSuffix = 1;
  let finalKebab = kebabBase;
  let maxTries = 100;
  while (fs.existsSync(dir) && dirSuffix < maxTries) {
    finalKebab = `${kebabBase}-section${dirSuffix}`;
    dir = path.join(baseDir, finalKebab);
    dirSuffix++;
  }
  if (dirSuffix >= maxTries) {
    console.log(`[ERROR] Too many duplicate directories for '${title}'. Skipping.`);
    continue;
  }
  if (finalKebab !== kebabBase) {
    console.log(`Directory for page '${title}' already exists. Created: ${finalKebab}`);
  }
  if (!fs.existsSync(dir)) {
    try {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Directory created: ${dir}`);
    } catch (err) {
      console.log(`[ERROR] Failed to create directory '${dir}':`, err.message);
      continue;
    }
  } else {
    console.log(`[SKIP] Directory already exists and was not created: ${dir}`);
  }

  // Always kebab-case the ButtonRoute for amendmentButtonRoute
  const kebabAmendmentButtonRoute = ButtonRoute ? `/${toKebabRoute(ButtonRoute)}` : '';

  // Create page.tsx
  const pageContent = `import { ${imageName} } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ${pascal}Page = () => {
  return (
    <AmendmentComparison
      pageTitle={\`Mental Health / Mental Health  Act 1983 / Part VII / ${title}\`}
      src={${imageName}}
      backRoute="/mental-health-act-1983"
      amendmentButtonRoute="${kebabAmendmentButtonRoute}"
    />
  );
};

export default ${pascal}Page;
`;
  try {
    fs.writeFileSync(path.join(dir, "page.tsx"), pageContent, "utf8");
    console.log(`page.tsx created in: ${dir}`);
  } catch (err) {
    console.log(`[ERROR] Failed to write page.tsx in '${dir}':`, err.message);
    continue;
  }

  // Append to existing index.tsx in assets
  const indexTsxPath = path.join(assetsDir, "index.tsx");
  const imageExport = `export { default as ${imageName} } from "./${svgFile}";\n`;
  let shouldWriteExport = true;
  if (fs.existsSync(indexTsxPath)) {
    try {
      const indexContent = fs.readFileSync(indexTsxPath, "utf8");
      if (indexContent.includes(imageExport.trim())) {
        shouldWriteExport = false;
        console.log(`Export for image '${imageName}' already exists in index.tsx. Skipping export.`);
      }
    } catch (err) {
      console.log(`[ERROR] Failed to read index.tsx:`, err.message);
      shouldWriteExport = false;
    }
  }
  if (shouldWriteExport) {
    try {
      fs.appendFileSync(indexTsxPath, imageExport);
      console.log(`Export for image '${imageName}' added to index.tsx.`);
    } catch (err) {
      console.log(`[ERROR] Failed to append export to index.tsx:`, err.message);
    }
  }
}


console.log("Pages and image exports have been created.");
