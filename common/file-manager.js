import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, '../');
const dataDir = path.join(rootDir, 'data');

function saveReport(data) {
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
    }

    const now = new Date();
    const fileName = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}-${String(now.getHours()).padStart(2, '0')}.${String(now.getMinutes()).padStart(2, '0')}.${String(now.getSeconds()).padStart(2, '0')}.json`;

    const filePath = path.join(dataDir, fileName);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`Response saved to: ${filePath}`);
}


export { saveReport };