const fs = require("fs");
const path = require("path");

// Define the base directory
const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");

// List of pages to create, each with a name and a custom backRoute
const pages = [
  {
    name: "Identification details and timings 1",
    backRoute: "/semi",
  },
  {
    name: "Identification details and timings 1",
    backRoute: "/semi",
  },
  {
    name: "Identification details and timings 2",
    backRoute: "/semi",
  },
  {
    name: "Identification details and timings 3",
    backRoute: "/semi",
  },
  {
    name: "SEMI",
    backRoute: "/semi",
  },
  {
    name: "Conditions for registration 2",
    backRoute: "/semi",
  },
  {
    name: "Conditions for registration 1",
    backRoute: "/semi",
  },
  {
    name: " Business plan",
    backRoute: "/semi",
  },
  {
    name: "Capital resources and requirements",
    backRoute: "/semi",
  },
  {
    name: "Capital resources and requirements 2",
    backRoute: "/semi",
  },
  {
    name: "Safeguarding measures ",
    backRoute: "/semi",
  },
  {
    name: "Unrelated payment services",
    backRoute: "/semi",
  },
  {
    name: "Governance arrangements and risk management",
    backRoute: "/semi",
  },
  {
    name: "Qualifying holdings and close links",
    backRoute: "/semi",
  },
  {
    name: "Procedure to Monitor, Handle, and Follow Up on Security Incidents and Customer Complaints",
    backRoute: "/semi",
  },
  {
    name: "Process in place to file, monitor, track and restrict access to sensitive payment data",
    backRoute: "/semi",
  },
  {
    name: "The principles and definitions applicable to the collection of statistical data on performance, transactions and fraud",
    backRoute: "/semi",
  },
  {
    name: "Security policy",
    backRoute: "/semi",
  },
  {
    name: "Fees and levies",
    backRoute: "/semi",
  },
  // {
  //   name: "Part 10 -Supplementary",
  //   backRoute: "/schedule-act-1964-supplementary"
  // },
  // Add more objects as needed
];

// Convert to PascalCase
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
    console.log(
      `[SKIP] Could not generate valid names for name: '${name}'. Skipping.`
    );
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
    console.log(
      `[ERROR] Too many duplicate directories for '${name}'. Skipping.`
    );
    continue;
  }
  if (finalKebab !== kebabBase) {
    console.log(
      `Directory for page '${name}' already exists. Created: ${finalKebab}`
    );
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
      pageTitle={\`${name}\`}
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
        console.log(
          `Export for image '${imageName}' already exists in index.tsx. Skipping export.`
        );
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
 