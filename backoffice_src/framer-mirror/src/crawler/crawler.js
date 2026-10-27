/**
 * Framer Mirror Crawler
 * Scrapes bodamariysimon.framer.website and generates modular app.js and assets
 */
import fs from 'fs';
import path from 'path';
import https from 'https';

const TARGET_URL = 'https://bodamariysimon.framer.website/';
const MIRROR_DIR = path.resolve('src/mirror');
const ASSETS_DIR = path.join(MIRROR_DIR, 'assets');

// Ensure directories exist
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}

function downloadBinary(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', reject);
    });
  });
}

async function run() {
  console.log(`[Crawler] Fetching HTML from ${TARGET_URL}...`);
  const html = await fetchUrl(TARGET_URL);

  // Extract all images
  const imgMatches = html.match(/https:\/\/framerusercontent\.com\/images\/[a-zA-Z0-9_\-\.]+/g) || [];
  const uniqueImages = [...new Set(imgMatches)];
  console.log(`[Crawler] Found ${uniqueImages.length} images to mirror.`);

  for (const imgUrl of uniqueImages) {
    const filename = path.basename(imgUrl.split('?')[0]);
    const dest = path.join(ASSETS_DIR, filename);
    if (!fs.existsSync(dest)) {
      console.log(` - Downloading ${filename}...`);
      try {
        await downloadBinary(imgUrl, dest);
      } catch (err) {
        console.warn(` Failed to download ${filename}`, err.message);
      }
    }
  }

  // Extract videos
  const videoMatches = html.match(/https:\/\/[^\s"'<>]+\.mp4/g) || [];
  for (const vidUrl of [...new Set(videoMatches)]) {
    const filename = path.basename(vidUrl);
    const dest = path.join(ASSETS_DIR, filename);
    if (!fs.existsSync(dest)) {
      console.log(` - Downloading video ${filename}...`);
      try {
        await downloadBinary(vidUrl, dest);
      } catch (err) {
        console.warn(` Failed to download ${filename}`, err.message);
      }
    }
  }

  console.log('[Crawler] Assets downloaded to src/mirror/assets.');
}

run().catch(console.error);
