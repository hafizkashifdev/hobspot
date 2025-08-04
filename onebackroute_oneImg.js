const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");
const indexTsxPath = path.join(assetsDir, "index.tsx");

const pages = [
  { name: "Account Management Account Details", backRoute: "/settings-account-management" },
  { name: "Account Management Setting General 1", backRoute: "/settings-account-management" },
  { name: "Account Management Branding", backRoute: "/settings-account-management" },
  { name: "Account Management User Default", backRoute: "/settings-account-management" },
  { name: "Account Management Notification Profiles", backRoute: "/settings-account-management" },
  { name: "Account Management Currencies", backRoute: "/settings-account-management" },
  { name: "Account Management Data Hosting", backRoute: "/settings-account-management" },
  { name: "Account Management Feature Release", backRoute: "/settings-account-management" },
  { name: "Account Management Audit Log", backRoute: "/settings-account-management" },
  { name: "Account Management Events", backRoute: "/settings-account-management" },
  { name: "Account Management Analyse", backRoute: "/settings-account-management" },
  { name: "Account Management Notifications", backRoute: "/settings-account-management" },
  { name: "Account Management User & Teams", backRoute: "/settings-account-management" },
  { name: "Account Management Users", backRoute: "/settings-account-management" },
  { name: "Account Management Seats", backRoute: "/settings-account-management" },
  { name: "Account Management Teams", backRoute: "/settings-account-management" },
  { name: "Account Management Permission Set", backRoute: "/settings-account-management" },
  { name: "Account Management Presets", backRoute: "/settings-account-management" },
  { name: "Account Management Product Update", backRoute: "/settings-account-management" },
  { name: "Account Management New to you", backRoute: "/settings-account-management" },
  { name: "Account Management Recommended for you", backRoute: "/settings-account-management" },
  { name: "Account Management Scheduled for release", backRoute: "/settings-account-management" },
  { name: "Account Management All Products update live", backRoute: "/settings-account-management" },
  { name: "Account Management All Products update beta", backRoute: "/settings-account-management" },
  { name: "Account Management All product update in development", backRoute: "/settings-account-management" },
  { name: "Account Management All products update in sunset", backRoute: "/settings-account-management" },
  { name: "Account Management Integrations", backRoute: "/settings-account-management" },
  { name: "Account Management Connected Apps", backRoute: "/settings-account-management" },
  { name: "Account Management My Apps", backRoute: "/settings-account-management" },
  { name: "Account Management Notification Configuration", backRoute: "/settings-account-management" },
  { name: "Account Management Private App", backRoute: "/settings-account-management" },
  { name: "Account Management Market Contacts ", backRoute: "/settings-account-management" },
  { name: "Account Management Email Service PRovider", backRoute: "/settings-account-management" },
  { name: "Account Management Marketplace Download", backRoute: "/settings-account-management" },
  { name: "Account Management Marketplace (Themes)", backRoute: "/settings-account-management" },
  { name: "Account Management Marketplace (Module)", backRoute: "/settings-account-management" },
  { name: "Account Management Reports & Analytics Tracking", backRoute: "/settings-account-management" },
  { name: "Account Management Tracking Code", backRoute: "/settings-account-management" },
  { name: "Account Management Tracking Code TC", backRoute: "/settings-account-management" },
  { name: "Account Management Advance Tracking", backRoute: "/settings-account-management" },
  { name: "Account Management Analytics Views", backRoute: "/settings-account-management" },
  { name: "Account Management Tracking URL", backRoute: "/settings-account-management" },
  { name: "Account Management Privacy & Consent", backRoute: "/settings-account-management" },
  { name: "Account Management Data Privacy", backRoute: "/settings-account-management" },
  { name: "Account Management Consent Options", backRoute: "/settings-account-management" },
  { name: "Account Management Cookies", backRoute: "/settings-account-management" },
  { name: "Account Management Data Privacy Dashboard", backRoute: "/settings-account-management" },
  { name: "Account Management Data Privacy & Consent", backRoute: "/settings-account-management" },
  { name: "Account Management Security", backRoute: "/settings-account-management" },
  { name: "Account Management Security Health Checkup ", backRoute: "/settings-account-management" },
  { name: "Account Management Settings & Activity", backRoute: "/settings-account-management" },
  { name: "Account Management Approvals", backRoute: "/settings-account-management" },
  { name: "Account Management Web Content- set up approval", backRoute: "/settings-account-management" },
  { name: "Account Management Routing", backRoute: "/settings-account-management" },
  { name: "Account Management Rulesets", backRoute: "/settings-account-management" },
  { name: "Account Management Skills", backRoute: "/settings-account-management" },
  { name: "Account Management AI", backRoute: "/settings-account-management" },
  { name: "Account Management Access", backRoute: "/settings-account-management" },
  { name: "Account Management Data sources", backRoute: "/settings-account-management" },
  { name: "Account Management Commerce accounts", backRoute: "/settings-account-management" },
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
  const { name } = page;
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
      pageTitle={\`${name}\`}
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
