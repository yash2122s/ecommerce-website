const https = require('https');
const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

// Image URLs to download
const images = [
    {
        url: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
        filename: 'team1.jpg'
    },
    {
        url: 'https://images.pexels.com/photos/3760583/pexels-photo-3760583.jpeg',
        filename: 'team2.jpg'
    },
    {
        url: 'https://images.pexels.com/photos/3760265/pexels-photo-3760265.jpeg',
        filename: 'team3.jpg'
    },
    {
        url: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg',
        filename: 'men.jpg'
    },
    {
        url: 'https://images.pexels.com/photos/6567608/pexels-photo-6567608.jpeg',
        filename: 'women.jpg'
    },
    {
        url: 'https://images.pexels.com/photos/6567609/pexels-photo-6567609.jpeg',
        filename: 'kids.jpg'
    }
];

// Function to download an image
function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }

            const filePath = path.join(imagesDir, filename);
            const fileStream = fs.createWriteStream(filePath);

            response.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Downloaded ${filename}`);
                resolve();
            });

            fileStream.on('error', (err) => {
                fs.unlink(filePath, () => reject(err));
            });
        }).on('error', reject);
    });
}

// Download all images
async function downloadAllImages() {
    try {
        for (const image of images) {
            await downloadImage(image.url, image.filename);
        }
        console.log('All images downloaded successfully!');
    } catch (error) {
        console.error('Error downloading images:', error);
    }
}

downloadAllImages(); 