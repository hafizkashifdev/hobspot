const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");
const indexTsxPath = path.join(assetsDir, "index.tsx");

const pages = [
  {
    name: "Settings Tools 01",
    backRoute: "/Settings Tools",
    title: "Meetings",
  },
  {
    name: "Settings Tools 02",
    backRoute: "/Settings Tools",
    title: "Calling",
  },
  {
    name: "Settings Tools 03",
    backRoute: "/Settings Tools",
    title: "Inbox & help Desk",
  },
  {
    name: "Settings Tools 04",
    backRoute: "/Settings Tools",
    title: "SMS settings",
  },
  {
    name: "Settings Tools 05",
    backRoute: "/Settings Tools",
    title: "Payments",
  },
  {
    name: "Settings Tools 06",
    backRoute: "/Settings Tools",
    title: "AI Assistants",
  },
  {
    name: "Settings Tools 07",
    backRoute: "/Settings Tools",
    title: "Marketing",
  },
  {
    name: "Settings Tools 08",
    backRoute: "/Settings Tools",
    title: "Content",
  },
  {
    name: "Settings Tools 09",
    backRoute: "/Settings Tools",
    title: "Case Studies",
  },
  {
    name: "Settings Tools 10",
    backRoute: "/Settings Tools",
    title: "Pages",
  },
  {
    name: "Settings Tools 11",
    backRoute: "/Settings Tools",
    title: "Knowledge Base",
  },
  {
    name: "Settings Tools 12",
    backRoute: "/Settings Tools",
    title: "Podcasts (Reach your audience)",
  },
  {
    name: "Settings Tools 13",
    backRoute: "/Settings Tools",
    title: "Private Content",
  },
  {
    name: "Settings Tools 14",
    backRoute: "/Settings Tools",
    title: "Customer Portal ( General & Template)",
  },
  {
    name: "Settings Tools 15",
    backRoute: "/Settings Tools",
    title: "Sales Workspace",
  },
  {
    name: "Settings Tools 16",
    backRoute: "/Settings Tools",
    title: "Call setup",
  },
  {
    name: "Settings Tools 17",
    backRoute: "/Settings Tools",
    title: "Blocked Numbers List",
  },
  {
    name: "Settings Tools 18",
    backRoute: "/Settings Tools",
    title: "Interactive Voice Response",
  },
  {
    name: "Settings Tools 19",
    backRoute: "/Settings Tools",
    title: "Transcription & Analysis",
  },
  {
    name: "Settings Tools 20",
    backRoute: "/Settings Tools",
    title: "Permissions ( Show the leads  & Deals Tab)",
  },
  {
    name: "Settings Tools 21",
    backRoute: "/Settings Tools",
    title: "Inboxes",
  },
  {
    name: "Settings Tools 22",
    backRoute: "/Settings Tools",
    title: "Ads",
  },
  {
    name: "Settings Tools 23",
    backRoute: "/Settings Tools",
    title: "Domains & URLs",
  },
  {
    name: "Settings Tools 24",
    backRoute: "/Settings Tools",
    title: "Help Desk",
  },
  {
    name: "Settings Tools 25",
    backRoute: "/Settings Tools",
    title: "Email",
  },
  {
    name: "Settings Tools 26",
    backRoute: "/Settings Tools",
    title: "Reply Recommendations",
  },
  {
    name: "Settings Tools 27",
    backRoute: "/Settings Tools",
    title: "Tracking",
  },
  {
    name: "Settings Tools 28",
    backRoute: "/Settings Tools",
    title: "Data backup & restore",
  },
  {
    name: "Settings Tools 29",
    backRoute: "/Settings Tools",
    title: "Configuration",
  },
  {
    name: "Settings Tools 30",
    backRoute: "/Settings Tools",
    title: "SMTP",
  },
  {
    name: "Settings Tools 31",
    backRoute: "/Settings Tools",
    title: "Availability Management",
  },
  {
    name: "Settings Tools 32",
    backRoute: "/Settings Tools",
    title: "SubScriptions",
  },
  {
    name: "Settings Tools 33",
    backRoute: "/Settings Tools",
    title: "Campaigns",
  },
  {
    name: "Settings Tools 34",
    backRoute: "/Settings Tools",
    title: "Meeting Configuration",
  },
  {
    name: "Settings Tools 35",
    backRoute: "/Settings Tools",
    title: "Meeting Rotations (Create a Rotation)",
  },
  {
    name: "Settings Tools 36",
    backRoute: "/Settings Tools",
    title: "Allow & Deny List",
  },
  {
    name: "Settings Tools 37",
    backRoute: "/Settings Tools",
    title: "SubScriptions Type",
  },
  {
    name: "Settings Tools 38",
    backRoute: "/Settings Tools",
    title: "Forms",
  },
  {
    name: "Settings Tools 39",
    backRoute: "/Settings Tools",
    title: "Social",
  },
  {
    name: "Settings Tools 40",
    backRoute: "/Settings Tools",
    title: "Themes & Modules",
  },
  {
    name: "Settings Tools 41",
    backRoute: "/Settings Tools",
    title: "Blog",
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
