const fs = require('fs');
const path = require('path');

// Directories
const scriptsDir = path.join(__dirname, 'scripts');
const extensionDir = path.join(__dirname, 'extension', 'scripts');

// Ensure the extension/scripts directory exists
if (!fs.existsSync(extensionDir)) {
    fs.mkdirSync(extensionDir, { recursive: true });
}

// Read all script files from scriptsDir
const scriptFiles = fs.readdirSync(scriptsDir).filter(file => file.endsWith('.js'));

// Copy each script to extension/scripts/
scriptFiles.forEach(file => {
    const src = path.join(scriptsDir, file);
    const dest = path.join(extensionDir, file);
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} to extension/scripts/`);
});

console.log('Build completed.');
