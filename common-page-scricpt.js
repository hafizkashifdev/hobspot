const fs = require('fs');
const path = require('path');

// Define the base directory
const baseDir = path.join(__dirname, 'src', 'app', '(pages)');
const assetsDir = path.join(__dirname, 'src', 'assets');

// List of pages to create
const pages = [
  "Amendment Comparison - Application of Act",
  "Amendment Comparison",

];

// Convert to PascalCase
const toPascalCase = str =>
  str
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');

// Convert to kebab-case
const toKebabCase = str =>
  str
    .replace(/[&/()]+/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .toLowerCase()
    .replace(/^-+|-+$/g, '');

for (const title of pages) {
  const kebab = toKebabCase(title);
  const pascal = toPascalCase(title);
  const imageName = `${pascal}Image`;
 const svgFile = `${imageName}.svg`;

  // Create directory for the page
  const dir = path.join(baseDir, kebab);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  // Create page.tsx
  const pageContent = `import { ${imageName} } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ${pascal}Page = () => {
  return (
    <CommonPage
      pageTitle={\`Mental Health / Mental Health Act 1983 / ${title}\`}
      src={${imageName}}
      backRoute="/"
    />
  );
};

export default ${pascal}Page;
`;
  fs.writeFileSync(path.join(dir, 'page.tsx'), pageContent, 'utf8');

  // Append to existing index.tsx in assets
  const indexTsxPath = path.join(assetsDir, 'index.tsx');
  const imageExport = `export { default as ${imageName} } from "./${svgFile}";\n`;
  fs.appendFileSync(indexTsxPath, imageExport);
}

console.log("Pages and image exports have been created.");