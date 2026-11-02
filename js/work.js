// Work entries, shown newest first on the landing page.
// To add an entry, copy one object and edit the fields.
//   date:        label shown in the timeline (e.g. "Feb 2024")
//   description: one or two sentences shown under the title
//   newTab:      true for external links (e.g. GitHub)
const work = [
  {
    title: "Blending Realities: A Mixed Reality Workshop",
    date: "Feb 2024",
    context: "Immersive Media Studio · UT Austin",
    description:
      "Designed and ran a beginner-friendly hands-on workshop where participants built their first mixed reality experience on Meta Quest, emphasizing creativity over technical complexity.",
    tags: ["Mixed Reality", "Bezi", "Meta Quest", "Workshop"],
    link: "/workshop-blending-realities.html",
    imageURL: "images/thumbnails/blending-realities.png",
    newTab: false,
  },
  {
    title: "Cozy Craft: WebXR Furniture Preview",
    date: "Dec 2023",
    context: "JavaScript Programming · UT Austin",
    description:
      "An augmented reality module built with WebXR and integrated into an e-commerce portal, letting shoppers place furniture in their own room before purchasing.",
    tags: ["Augmented Reality", "WebXR", "JavaScript"],
    link: "https://github.com/sushantkamble-dev/cozy-craft-ar",
    imageURL: "images/thumbnails/cozy-craft.png",
    newTab: true,
  },
  {
    title: "Paw Finder",
    date: "Dec 2023",
    context: "Web Application Development · UT Austin",
    description:
      "A server-rendered Next.js app connecting local shelters with potential adopters through pet listings and location-based recommendations.",
    tags: ["Web App", "Next.js", "MongoDB", "Figma"],
    link: "https://github.com/sushantkamble-dev/paw-finder",
    imageURL: "images/thumbnails/paw-finder.png",
    newTab: true,
  },
  {
    title: "Elixir Expedition: Embodied Agents in VR",
    date: "2023",
    context: "Virtual Environments · UT Austin",
    description:
      "A VR game built in Unity to support user studies on embodied agents, evaluating body ownership, presence, immersion, fear, and system usability (SUS).",
    tags: ["Virtual Reality", "Unity", "Blender", "C#", "User Study"],
    link: "/elixir-expedition.html",
    imageURL: "images/thumbnails/elixir-expedition.png",
    newTab: false,
  },
  {
    title: "Kanban Board",
    date: "May 2023",
    context: "Personal project",
    description:
      "A simplified Trello-style project management tool for creating boards and cards to organize tasks.",
    tags: ["Web App", "React", "Firebase"],
    link: "https://github.com/sushantkamble-dev/kanban-board",
    imageURL: "images/thumbnails/kanban-board.png",
    newTab: true,
  },
  {
    title: "Flows: No-Code Editor for Data Transformation",
    date: "2022",
    context: "Frontend Lead · Clarista Inc.",
    description:
      "A drag-and-drop editor that lets data scientists and analysts merge, split, and filter data without code. Led the front-end, design system, and coded prototypes.",
    tags: ["Web App", "React", "Design Systems", "Figma"],
    link: "./no-code-editor.html",
    imageURL: "images/thumbnails/no-code-editor.png",
    newTab: false,
  },
];

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[c]);
}

function renderWork() {
  const list = document.getElementById("work-list");
  if (!list) return;

  list.innerHTML = work
    .map(({ title, date, context, description, tags, link, imageURL, newTab }) => {
      const target = newTab ? ' target="_blank" rel="noopener"' : "";
      const tagItems = tags
        .map((tag) => `<li class="tag">${escapeHTML(tag)}</li>`)
        .join("");
      return `
      <li class="work-item">
        <div class="work-marker" aria-hidden="true"></div>
        <a class="work-media" href="${link}"${target} tabindex="-1" aria-hidden="true">
          <img src="${imageURL}" alt="" loading="lazy" />
        </a>
        <div class="work-body">
          <p class="work-meta"><time>${escapeHTML(date)}</time> · ${escapeHTML(context)}</p>
          <h3 class="work-title"><a href="${link}"${target}>${escapeHTML(title)}</a></h3>
          <p class="work-desc">${escapeHTML(description)}</p>
          <ul class="tags" aria-label="Tags">${tagItems}</ul>
          <a class="btn-link" href="${link}"${target}>
            ${newTab ? "View on GitHub" : "Read more"} <span aria-hidden="true">→</span>
          </a>
        </div>
      </li>`;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", renderWork);
