const fs = require('fs');
const path = require('path');

// Source and destination paths
const sourcePath = '../Fashify_client-master/src/Images';
const destinationPath = './images';

// Create destination directory if it doesn't exist
if (!fs.existsSync(destinationPath)) {
    fs.mkdirSync(destinationPath, { recursive: true });
}

// Copy images
try {
    const files = fs.readdirSync(sourcePath);
    files.forEach(file => {
        const sourceFile = path.join(sourcePath, file);
        const destFile = path.join(destinationPath, file);
        fs.copyFileSync(sourceFile, destFile);
        console.log(`Copied ${file} successfully`);
    });
    console.log('All images copied successfully');
} catch (error) {
    console.error('Error copying images:', error);
} 