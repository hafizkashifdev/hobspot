const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");
const indexTsxPath = path.join(assetsDir, "index.tsx");

const pages = [
  {
    name: "Settings Data Management 01",
    backRoute: "/Settings Data Management",
    title: "Properties",
  },
  {
    name: "Settings Data Management 02",
    backRoute: "/Settings Data Management",
    title: "Groups",
  },
  {
    name: "Settings Data Management 03",
    backRoute: "/Settings Data Management",
    title: "Deals",
  },
  {
    name: "Settings Data Management 04",
    backRoute: "/Settings Data Management",
    title: "Campaigns",
  },
  {
    name: "Settings Data Management 05",
    backRoute: "/Settings Data Management",
    title: "Lists",
  },
  {
    name: "Settings Data Management 06",
    backRoute: "/Settings Data Management",
    title: "Marketing Events",
  },
  {
    name: "Settings Data Management 07",
    backRoute: "/Settings Data Management",
    title: "Work Flows",
  },
  {
    name: "Settings Data Management 08",
    backRoute: "/Settings Data Management",
    title: "Objects",
  },
  {
    name: "Settings Data Management 09",
    backRoute: "/Settings Data Management",
    title: "Archived",
  },
  {
    name: "Settings Data Management 10",
    backRoute: "/Settings Data Management",
    title: "Object Library",
  },
  {
    name: "Settings Data Management 11",
    backRoute: "/Settings Data Management",
    title: "Companies",
  },
  {
    name: "Settings Data Management 12",
    backRoute: "/Settings Data Management",
    title: "Enable or Disable Objects",
  },
  {
    name: "Settings Data Management 13",
    backRoute: "/Settings Data Management",
    title: "Leads",
  },
  {
    name: "Settings Data Management 14",
    backRoute: "/Settings Data Management",
    title: "Configure Object Settings",
  },
  {
    name: "Settings Data Management 15",
    backRoute: "/Settings Data Management",
    title: "Contacts",
  },
  {
    name: "Settings Data Management 16",
    backRoute: "/Settings Data Management",
    title: "Deal Configuration Options",
  },
  {
    name: "Settings Data Management 17",
    backRoute: "/Settings Data Management",
    title: "Products",
  },
  {
    name: "Settings Data Management 18",
    backRoute: "/Settings Data Management",
    title: "Orders",
  },
  {
    name: "Settings Data Management 19",
    backRoute: "/Settings Data Management",
    title: "Pipeline Customization",
  },
  {
    name: "Settings Data Management 20",
    backRoute: "/Settings Data Management",
    title: "Quote",
  },
  {
    name: "Settings Data Management 21",
    backRoute: "/Settings Data Management",
    title: "Carts",
  },
  {
    name: "Settings Data Management 22",
    backRoute: "/Settings Data Management",
    title: "Listings",
  },
  {
    name: "Settings Data Management 23",
    backRoute: "/Settings Data Management",
    title: "Record & Display Customization",
  },
  {
    name: "Settings Data Management 24",
    backRoute: "/Settings Data Management",
    title: "Import and Export",
  },
  {
    name: "Settings Data Management 25",
    backRoute: "/Settings Data Management",
    title: "Subscriptions",
  },
  {
    name: "Settings Data Management 26",
    backRoute: "/Settings Data Management",
    title: "Custom Objects",
  },
  {
    name: "Settings Data Management 27",
    backRoute: "/Settings Data Management",
    title: "Appointment",
  },
  {
    name: "Settings Data Management 28",
    backRoute: "/Settings Data Management",
    title: "Data backup & restore",
  },
  {
    name: "Settings Data Management 29",
    backRoute: "/Settings Data Management",
    title: "Tickets",
  },
  {
    name: "Settings Data Management 30",
    backRoute: "/Settings Data Management",
    title: "Services",
  },
  {
    name: "Settings Data Management 31",
    backRoute: "/Settings Data Management",
    title: "Translations",
  },
  {
    name: "Settings Data Management 32",
    backRoute: "/Settings Data Management",
    title: "Invoices",
  },
  {
    name: "Settings Data Management 33",
    backRoute: "/Settings Data Management",
    title: "Create Properties",
  },
  {
    name: "Settings Data Management 34",
    backRoute: "/Settings Data Management",
    title: "Details",
  },
  {
    name: "Settings Data Management 35",
    backRoute: "/Settings Data Management",
    title: "Field Type",
  },
  {
    name: "Settings Data Management 36",
    backRoute: "/Settings Data Management",
    title: "Manage Access to",
  },
  {
    name: "Settings Data Management 37",
    backRoute: "/Settings Data Management",
    title: "Conditional Logic",
  },
  {
    name: "Settings Data Management 38",
    backRoute: "/Settings Data Management",
    title: "Object Configuration Options",
  },
  {
    name: "Settings Data Management 39",
    backRoute: "/Settings Data Management",
    title: "Courses",
  },
  {
    name: "Settings Data Management 40",
    backRoute: "/Settings Data Management",
    title: "Data Enrichment",
  },
  {
    name: "Settings Data Management 41",
    backRoute: "/Settings Data Management",
    title: "Forecast",
  },
  {
    name: "Settings Data Management 42",
    backRoute: "/Settings Data Management",
    title: "Activities",
  },
];

const toPascalCase = (str) =>
  str
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

const toKebabCase = (str) =>
  str
    .trim()
    .replace(/[&/()]+/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");

for (const page of pages) {
  const { name, title } = page;
  let { backRoute } = page;

  if (!name || typeof name !== "string" || !name.trim()) {
    console.log("[SKIP] Invalid or empty page name. Skipping entry.");
    continue;
  }

  const kebabBase = toKebabCase(name);
  const pascalBase = toPascalCase(name);

  // Determine directory name and image index
  let dir = path.join(baseDir, kebabBase);
  let finalKebab = kebabBase;
  let imageIndex = "";
  let dirSuffix = 0;

  while (fs.existsSync(dir) && dirSuffix < 100) {
    dirSuffix++;
    finalKebab = `${kebabBase}-section${dirSuffix}`;
    dir = path.join(baseDir, finalKebab);
    imageIndex = String(dirSuffix);
  }

  if (dirSuffix >= 100) {
    console.log(`[ERROR] Too many duplicates for '${name}'. Skipping.`);
    continue;
  }

  const imageName = `${pascalBase}Image${imageIndex}`;
  const svgFile = `${imageName}.svg`;
  const pascalComponent = `${pascalBase}Page${imageIndex}`;

  if (backRoute && typeof backRoute === "string") {
    backRoute = `/${toKebabCase(backRoute)}`;
  }

  // Create directory
  fs.mkdirSync(dir, { recursive: true });
  console.log(`✅ Created directory: ${dir}`);

  // Write page.tsx
  const pageContent = `import { ${imageName} } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ${pascalComponent} = () => {
  return (
    <CommonPage
      pageTitle={\`${title}\`}
      src={${imageName}}
      backRoute="${backRoute}"
    />
  );
};

export default ${pascalComponent};
`;

  fs.writeFileSync(path.join(dir, "page.tsx"), pageContent, "utf8");
  console.log(`✅ page.tsx created in: ${dir}`);

  // Write image export
  const imageExport = `export { default as ${imageName} } from "./${svgFile}";\n`;

  if (fs.existsSync(indexTsxPath)) {
    const content = fs.readFileSync(indexTsxPath, "utf8");
    if (!content.includes(imageExport.trim())) {
      fs.appendFileSync(indexTsxPath, imageExport);
      console.log(`✅ Export added to index.tsx: ${imageName}`);
    } else {
      console.log(`⚠️ Export for ${imageName} already exists. Skipped.`);
    }
  } else {
    fs.writeFileSync(indexTsxPath, imageExport);
    console.log(`✅ index.tsx created and export written.`);
  }
}

console.log("\n🎉 Page generation complete.");
