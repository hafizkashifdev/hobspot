const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");
const indexTsxPath = path.join(assetsDir, "index.tsx");

const pages = [
  {
    name: "Library 01",
    backRoute: "/Library",
    title: "Document",
  },
  {
    name: "Library 02",
    backRoute: "/Library",
    title: "Create New Folder",
  },
  {
    name: "Library 03",
    backRoute: "/Library",
    title: "Upload Document",
  },
  {
    name: "Library 04",
    backRoute: "/Library",
    title: "Grid View",
  },
  {
    name: "Library 05",
    backRoute: "/Library",
    title: "Playbooks",
  },
  {
    name: "Library 06",
    backRoute: "/Library",
    title: "Snippets",
  },
  {
    name: "Library 07",
    backRoute: "/Library",
    title: "Coaching Playlists ",
  },
  {
    name: "Library 08",
    backRoute: "/Library",
    title: "Find Recording",
  },
  {
    name: "Library 09",
    backRoute: "/Library",
    title: "Recorded Calls",
  },
  {
    name: "Library 10",
    backRoute: "/Library",
    title: "All Calls",
  },
  {
    name: "Library 11",
    backRoute: "/Library",
    title: "Create New Folder",
  },
  {
    name: "Library 12",
    backRoute: "/Library",
    title: "Create New Folder",
  },
  {
    name: "Library 13",
    backRoute: "/Library",
    title: "Create Playbook",
  },
  {
    name: "Library 14",
    backRoute: "/Library",
    title: "Create snippet",
  },
  {
    name: "Library 15",
    backRoute: "/Library",
    title: "Grid View",
  },
  {
    name: "Library 16",
    backRoute: "/Library",
    title: "Grid View",
  },
  {
    name: "Library 17",
    backRoute: "/Library",
    title: "Email",
  },
  {
    name: "Library 18",
    backRoute: "/Library",
    title: "Meeting Scheduler",
  },
  {
    name: "Library 19",
    backRoute: "/Library",
    title: "Files & Folder",
  },
  {
    name: "Library 20",
    backRoute: "/Library",
    title: "Stock Images",
  },
  {
    name: "Library 21",
    backRoute: "/Library",
    title: "Whatsapp",
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
