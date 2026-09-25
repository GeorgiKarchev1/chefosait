import notes from "@/content/site-copy.json";

// Website copy includes the user's requested edits. The original Notes export
// remains unchanged in content/notes.json and chefotextove.md.
function pairs(paragraphs: string[]) {
  return paragraphs.flatMap((title, index) =>
    index % 2 === 0 ? [{ title, description: paragraphs[index + 1] }] : []
  );
}

export const homeCopy = {
  headline: notes.home.paragraphs[0],
  lead: notes.home.paragraphs[1],
  paragraphs: notes.home.paragraphs.slice(2, 4),
  actions: notes.home.paragraphs[4].split("\n").map((label) => label.slice(1, -1)),
};

export const aboutCopy = {
  title: notes.about.title,
  headline: notes.about.paragraphs[0],
  paragraphs: notes.about.paragraphs.slice(1, 5),
  principleTitle: notes.about.paragraphs[5],
  principle: notes.about.paragraphs[6],
  closing: notes.about.paragraphs[7],
};

export const servicesCopy = {
  title: notes.services.title,
  headline: notes.services.paragraphs[0],
  description: notes.services.paragraphs[1],
  items: pairs(notes.services.paragraphs.slice(2)),
};

export const whyUsCopy = {
  title: notes.whyUs.title,
  headline: notes.whyUs.paragraphs[0],
  items: pairs(notes.whyUs.paragraphs.slice(1, 11)),
  closingTitle: notes.whyUs.paragraphs[11],
  closing: notes.whyUs.paragraphs[12],
};

export const processCopy = {
  title: notes.process.title,
  headline: notes.process.paragraphs[0],
  steps: pairs(notes.process.paragraphs.slice(1)),
};

export const introductionCopy = {
  // “Сдм сайт” is the note's filename; its first paragraph is the public title.
  title: notes.introduction.paragraphs[0],
  headline: notes.introduction.paragraphs[1],
  paragraphs: notes.introduction.paragraphs.slice(2, 5),
  closing: notes.introduction.paragraphs[5],
};
