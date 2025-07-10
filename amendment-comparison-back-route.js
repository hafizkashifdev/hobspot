const fs = require("fs");
const path = require("path");
 
// Define the base directory
const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");
 
// List of pages to create, each with a name and a custom backRoute
const pages = [
  {
    name: "PISP_API  Section 3:  Business Plan ",
    backRoute: "/PISP_API"
  },
   {
    name: "PISP_API  Section 4:  Structural organisation ",
    backRoute: "/PISP_API"
  },
   {
    name: "PISP_API Section 5:  Evidence of initial capital ",
    backRoute: "/PISP_API"
  },
   {
    name: "PISP_API Section 8:  Procedure to monitor, handle and follow up on a  security incident and security related customer complaints.",
    backRoute: "/PISP_API"
  },
   {
    name: "PISP_API Section 14",
    backRoute: "/PISP_API"
  },
   {
    name: "PISP_API Section 15",
    backRoute: "/PISP_API"
  },
   {
    name: "PISP_API Section 18 Fees and levies",
    backRoute: "/PISP_API"
  },
   {
    name: "PISP_API  Filling in the Form",
    backRoute: "/PISP_API"
  },
   {
    name: "PISP_API  Section 6:  Measures to safeguard the funds of payment service users",
    backRoute: "/PISP_API"
  },
   {
    name: "PISP_API Section 7:  Procedure to monitor, handle and follow up on a  security incident and security related customer complaints",
    backRoute: "/PISP_API"
  },
   {
    name: "PISP_API The principles and definitions applicable to the collection of statistical data on performance, transactions and fraud",
    backRoute: "/PISP_API"
  },
   {
    name: "PISP_API  Section 1: Identification Details and Timings",
    backRoute: "/PISP_API"
  },
  {
    name: "PISP_API Process in place to file, monitor, track and restrict access to sensitive payment data",
    backRoute: "/PISP_API"
  },
  {
    name: "PISP_API Security policy document",
    backRoute: "/PISP_API"
  },
  {
    name: "PISP_API Section 16 Professional indemnity insurance (PII) or comparable guarantee",
    backRoute: "/PISP_API"
  },
   {
    name: "PISP_API  Section 2: Programme of Operations",
    backRoute: "/PISP_API"
  },
  {
    name: "PISP_API  Business continuity arrangements",
    backRoute: "/PISP_API"
  },
  {
    name: "PPISP_API Internal control mechanisms to comply with obligations in relation to money laundering and terrorist financing",
    backRoute: "/PISP_API"
  },
    {
    name: "PISP_API Section 17 Professional indemnity insurance (PII) or comparable guarantee",
    backRoute: "/PISP_API"
  },
];
<<<<<<< HEAD
 
// Convert to PascalCase
=======

>>>>>>> 91979db719e1359d7e70ebbad04db73ea9b2ff01
const toPascalCase = (str) =>
  str
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
 
// Convert to kebab-case
const toKebabCase = (str) =>
  str
    .replace(/[&/()]+/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");
 
for (const page of pages) {
  const { name } = page;
  let { backRoute } = page;
  if (!name || typeof name !== "string" || !name.trim()) {
    console.log("[SKIP] Invalid or empty page name. Skipping entry.");
    continue;
  }
  const kebabBase = toKebabCase(name);
  const pascal = toPascalCase(name);
  if (!kebabBase || !pascal) {
    console.log(`[SKIP] Could not generate valid names for name: '${name}'. Skipping.`);
    continue;
  }
  const imageName = `${pascal}Image`;
  const svgFile = `${imageName}.svg`;
 
  // Convert backRoute to kebab-case at runtime
  if (backRoute && typeof backRoute === "string") {
    backRoute = toKebabCase(backRoute);
    backRoute = `/${backRoute.replace(/^\/+/, "")}`; // Ensure leading slash
  }
 
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
    console.log(`[ERROR] Too many duplicate directories for '${name}'. Skipping.`);
    continue;
  }
  if (finalKebab !== kebabBase) {
    console.log(`Directory for page '${name}' already exists. Created: ${finalKebab}`);
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
 
  // Create page.tsx
  const pageContent = `import { ${imageName} } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";
 
const ${pascal}Page = () => {
  return (
    <CommonPage
<<<<<<< HEAD
      pageTitle={\`FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / ${name}\`}
=======
      pageTitle={"TERMS IN APPLICATION PACK"}
>>>>>>> 33e3af25333241bd405cf281aec890dd3f46c6a0
      src={${imageName}}
      backRoute=\"${backRoute}\"
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
