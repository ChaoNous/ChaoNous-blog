const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

const animes = {
    'fate-zero.webp': 10087,
    'oregairu.webp': 14813,
    'steinsgate.webp': 9253,
    'deathnote.webp': 1535,
    'demonslayer.webp': 38000,
    'sao.webp': 11757,
    'aot.webp': 16498
};

const outputDir = path.join(__dirname, 'public/assets/anime');

async function downloadAndConvert() {
    for (const [filename, malId] of Object.entries(animes)) {
        const outputPath = path.join(outputDir, filename);
        try {
            await fs.access(outputPath);
            console.log(`[Skip] ${filename} already exists.`);
            continue;
        } catch (e) {
            // File doesn't exist, proceed
        }

        console.log(`Fetching MAL data for ${filename} (ID: ${malId})...`);
        try {
            // First get the image URL from Jikan API
            const apiRes = await fetch(`https://api.jikan.moe/v4/anime/${malId}`);
            if (!apiRes.ok) {
                console.error(`Jikan API failed for ${malId}:`, apiRes.statusText);
                continue;
            }
            const data = await apiRes.json();
            const url = data.data.images.webp.large_image_url || data.data.images.jpg.large_image_url;

            // Wait a bit to respect Jikan API rate limits (3 requests per second)
            await new Promise(r => setTimeout(r, 600));

            console.log(`Downloading image from ${url}...`);
            const response = await fetch(url);
            if (!response.ok) {
                console.error(`Failed to download ${url}: ${response.statusText}`);
                continue;
            }
            const buffer = await response.arrayBuffer();
            
            await sharp(Buffer.from(buffer))
                .webp({ quality: 80 })
                .toFile(outputPath);
                
            console.log(`[Success] Saved ${filename}`);
        } catch (error) {
            console.error(`[Error] Failed to process ${filename}:`, error);
        }
    }
}

downloadAndConvert();
