# Tejaswi's Exam Prep

A small React + Vite app to help a high schooler prep for final exams in **Biology**, **Chemistry**, and **Physics**.

For each subtopic the student gets:

- a quick "Watch" section that links to (or embeds) a short YouTube explainer
- a multiple-choice quiz with explanations after each answer
- per-topic and per-subject progress saved in the browser

## Run it

```bash
cd TejaswiQuiz
npm install
npm run dev
```

Vite will open the app at <http://localhost:5173>. To build a static version for hosting:

```bash
npm run build
npm run preview
```

## How the app is organized

```
src/
  App.jsx                     ← top-level router (dashboard / subject / subtopic)
  main.jsx                    ← React entry point
  styles.css                  ← all styles
  data/
    curriculum.js             ← subjects, subtopics, video info, sample MCQs ← edit this
  hooks/
    useProgress.js            ← localStorage-backed progress tracker
  components/
    Dashboard.jsx             ← three subject cards + overall stats
    SubjectView.jsx           ← list of subtopics for a subject
    SubtopicView.jsx          ← video + quiz for one subtopic
    VideoPlayer.jsx           ← embeds YouTube or shows a search button
    Quiz.jsx                  ← multiple-choice quiz with explanations
    ProgressBar.jsx           ← reusable bar
```

## Editing the content

Everything you'll want to change is in **`src/data/curriculum.js`**.

### Adding/replacing questions

Each subtopic has a `questions` array. Each question is:

```js
{
  q: "Question text",
  options: ["A", "B", "C", "D"],
  correct: 0,                    // index of the correct option (0 = A, 1 = B, …)
  explanation: "Why this is the right answer."
}
```

When you share your context for the question types you want, paste examples and I'll mirror them by editing this file.

### Embedding a specific video

By default each subtopic shows a "Find videos on YouTube" button (always works, opens a search). To embed a specific video instead:

1. Open the YouTube video.
2. Copy the part after `v=` in the URL — e.g. `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → `dQw4w9WgXcQ`.
3. In `src/data/curriculum.js`, set `videoId` for that subtopic:

```js
{
  id: 'newtons-laws',
  name: "Newton's Laws (F = ma)",
  searchQuery: 'Newton laws of motion F=ma explained',
  videoId: 'dQw4w9WgXcQ',   // ← paste the ID here
  ...
}
```

The "More videos on YouTube" link stays visible underneath as a backup.

### Adding a new subject or subtopic

Add a new key to the `curriculum` object (or push into an existing subject's `subtopics`). Each subject needs `id`, `name`, `icon`, `color`, `accent`, `description`, and `subtopics`. The dashboard picks up new subjects automatically.

## Progress tracking

Progress is stored in `localStorage` under the key `tejaswi-quiz-progress-v1`. Each subtopic tracks attempts, best score, last score, and timestamp. The dashboard's "Reset all progress" button clears it; each subtopic also has its own "Reset" link.

## Defaults at a glance

- **Biology** — Cell Structure, Cell Division, DNA & Protein Synthesis, Genetics, Evolution, Ecology, Photosynthesis & Respiration, Human Body Systems
- **Chemistry** — Atomic Structure, Periodic Table, Bonding, Stoichiometry, Gas Laws, Acids & Bases, Reactions, Thermochemistry
- **Physics** — Kinematics, Newton's Laws, Energy & Work, Momentum, Waves, Electricity, Magnetism, Optics

The questions in there now are **placeholders** so you can see the full app working end-to-end. Replace them with real ones based on the practice context you'll provide.
