import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const notes = JSON.parse(await readFile(new URL("../src/content/notes.json", import.meta.url), "utf8"));
const siteCopy = JSON.parse(await readFile(new URL("../src/content/site-copy.json", import.meta.url), "utf8"));
const markdown = await readFile(new URL("../chefotextove.md", import.meta.url), "utf8");
const expectedMarkdown = Object.values(notes)
  .map(({ title, paragraphs }) => `# ${title}\n\n${paragraphs.join("\n\n")}`)
  .join("\n\n---\n\n") + "\n";
assert.equal(markdown, expectedMarkdown, "Markdown and the Notes source differ");

const base = process.argv[2] ?? "http://127.0.0.1:3001";
const response = await fetch(base);
assert.equal(response.status, 200, "The local homepage must load successfully");
const html = await response.text();
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
assert.ok(main, "The page must contain its main content");

function plainText(html) {
  const entities = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " };
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, (match, entity) => {
      if (entity.startsWith("#x")) return String.fromCodePoint(parseInt(entity.slice(2), 16));
      if (entity.startsWith("#")) return String.fromCodePoint(Number(entity.slice(1)));
      return entities[entity] ?? match;
    })
    .replace(/\s+/g, " ")
    .trim();
}

// Square brackets in the original mark CTA buttons, not public-facing punctuation.
const blocks = Object.entries(siteCopy).flatMap(([key, note]) => [
  ...(["home", "introduction"].includes(key) ? [] : [note.title]),
  ...note.paragraphs.flatMap((paragraph) =>
    paragraph.startsWith("[") ? paragraph.split("\n").map((label) => label.slice(1, -1)) : [paragraph]
  ),
]);
const rendered = plainText(main);
const missing = blocks.filter((block) => !rendered.includes(plainText(block)));
assert.deepEqual(missing, [], "Some approved site text is missing or changed on the homepage");

const approved = new Set(blocks.map(plainText));
const prose = [...main.matchAll(/<(p|h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/g)]
  .map((match) => plainText(match[2]));
const unexpected = prose.filter((text) => !approved.has(text));
assert.deepEqual(unexpected, [], "Published prose must match the approved site copy");
assert.ok(!/[–—]|--/.test(prose.join(" ")), "Avoid long or repeated dashes in website prose");
assert.ok(!rendered.includes(notes.home.paragraphs[5]), "The removed trust bar must not return");
assert.ok(!main.includes('class="eyebrow text-accent-soft">СДМ КОНСТРУКТ'), "The removed hero label must not return");
console.log(`Verified ${blocks.length} approved text blocks and the unchanged ${Object.keys(notes).length}-note Markdown archive.`);
