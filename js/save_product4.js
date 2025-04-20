const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

// Base64 string of the leather boots image
const imageBase64 = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/...`; // Note: Base64 string would be very long

// Remove the data URL prefix and decode
const base64Data = imageBase64.replace(/^data:image\/jpeg;base64,/, '');
const imageBuffer = Buffer.from(base64Data, 'base64');

// Save the image
const filePath = path.join(imagesDir, 'product4.jpg');
fs.writeFileSync(filePath, imageBuffer);
console.log('Leather boots image saved successfully!'); 