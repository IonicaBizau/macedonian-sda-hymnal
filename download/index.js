import macedonianSdaHymnal from "../lib/index.js";
import fs from "fs/promises";

const __dirname = new URL(".", import.meta.url).pathname;

(async () => {
    for (let i = 1; i <= 340; ++i) {
        try {
            const song = await macedonianSdaHymnal(i);
            const filename = `hymn-${i.toString().padStart(3, "0")}.json`;
            await fs.writeFile(`${__dirname}/json/${filename}`, JSON.stringify(song, null, 4));
            console.log(`Saved hymn ${i} to ${filename}`);
        } catch (e) {
            console.error(`Error for hymn ${i}:`, e);
        }
    }
})();