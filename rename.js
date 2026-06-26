const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'src');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace colors
  content = content.replace(/accent-gold-hover/g, 'accent-primary-hover');
  content = content.replace(/accent-gold/g, 'accent-primary');

  // Replace names
  content = content.replace(/Sawsan Madi/gi, 'New Bella Donna');
  content = content.replace(/sawsanmadi\.com/gi, 'belladonnaclinic.com');
  content = content.replace(/Dr\. Sawsan/gi, 'Dr. Bella'); // just in case
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      replaceInFile(fullPath);
    }
  }
}

walk(directory);
console.log('Done renaming!');
