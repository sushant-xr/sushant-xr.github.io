// Work entries, shown newest first on the landing page.
// To add an entry, copy one object and edit the fields.
//   date:        label shown in the timeline (e.g. "Feb 2024")
//   description: one or two sentences shown under the title
//   newTab:      true for external links (e.g. GitHub)
//   inProgress:  true shows an "In progress" label
//   link:        leave empty ("") if there's no page yet; the button is hidden
const work = [
  {
    title: "The Wristband Project",
    date: "Aug 2026",
    context: "Personal project",
    inProgress: true,
    description:
      "An ongoing personal project. Details coming soon.",
    tags: [],
    link: "",
    imageURL: "images/thumbnails/square/wristband-placeholder.svg",
    newTab: false,
  },
  {
    title: "Teleoperating a Robot Arm through VR",
    date: "Jul 2026",
    context: "Personal project",
    inProgress: true,
    description:
      "Controlling a 3D-printed, servo-driven robot arm from virtual reality. Details coming soon.",
    tags: ["Virtual Reality", "Robotics", "Teleoperation"],
    link: "",
    imageURL: "images/thumbnails/square/vr-robot-arm.jpg",
    newTab: false,
  },
  {
    title: "Flow State Timer: Rethinking Pomodoro",
    date: "Jun 2026",
    context: "Personal project",
    description:
      "A tangible focus device that starts with a short, adjustable commitment and then becomes an open-ended stopwatch, helping people start working without telling them when to stop.",
    tags: ["Physical Computing", "Interaction Design", "Haptics", "HCI"],
    link: "/flow-state-timer.html",
    imageURL: "images/thumbnails/square/flow-state-timer.jpg",
    newTab: false,
  },
  {
    title: "Blending Realities: A Mixed Reality Workshop",
    date: "Feb 2024",
    context: "Immersive Media Studio · UT Austin",
    description:
      "Designed and ran a beginner-friendly hands-on workshop where participants built their first mixed reality experience on Meta Quest, emphasizing creativity over technical complexity.",
    tags: ["Mixed Reality", "Bezi", "Meta Quest", "Workshop"],
    link: "/workshop-blending-realities.html",
    imageURL: "images/thumbnails/square/blending-realities.jpg",
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
    imageURL: "images/thumbnails/square/cozy-craft.jpg",
    newTab: true,
  },
  {
    title: "Unity Optimizations for Meta Quest",
    date: "Nov 2023",
    context: "Talk · UT Austin",
    description:
      "A talk on optimizing Unity projects to run smoothly on standalone Meta Quest headsets, with live demos of techniques such as occlusion culling in the Unity editor.",
    tags: ["Talk", "Unity", "Meta Quest", "Performance"],
    link: "",
    imageURL: "images/thumbnails/square/unity-quest-talk.jpg",
    newTab: false,
  },
  {
    title: "Elixir Expedition: Embodied Agents in VR",
    date: "2023",
    context: "Virtual Environments · UT Austin",
    description:
      "A VR game built in Unity to support user studies on embodied agents, evaluating body ownership, presence, immersion, fear, and system usability (SUS).",
    tags: ["Virtual Reality", "Unity", "Blender", "C#", "User Study"],
    link: "/elixir-expedition.html",
    imageURL: "images/thumbnails/square/elixir-expedition.jpg",
    newTab: false,
  },
  {
    title: "Flows: No-Code Editor for Data Transformation",
    date: "2022",
    context: "Frontend Lead · Clarista Inc.",
    description:
      "A drag-and-drop editor that lets data scientists and analysts merge, split, and filter data without code. Led the front-end, design system, and coded prototypes.",
    tags: ["Web App", "React", "Design Systems", "Figma"],
    link: "./no-code-editor.html",
    imageURL: "images/thumbnails/square/no-code-editor.jpg",
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
    .map(({ title, date, context, description, tags, link, imageURL, newTab, inProgress }) => {
      const target = newTab ? ' target="_blank" rel="noopener"' : "";
      const tagItems = tags
        .map((tag) => `<li class="tag">${escapeHTML(tag)}</li>`)
        .join("");
      const image = `<img src="${imageURL}" alt="" loading="lazy" />`;
      const media = link
        ? `<a class="work-media" href="${link}"${target} tabindex="-1" aria-hidden="true">${image}</a>`
        : `<div class="work-media">${image}</div>`;
      const heading = link
        ? `<a href="${link}"${target}>${escapeHTML(title)}</a>`
        : escapeHTML(title);
      const badge = inProgress ? ` <span class="badge-progress">In progress</span>` : "";
      const button = link
        ? `<a class="btn-link" href="${link}"${target}>
            ${newTab ? "View on GitHub" : "Read more"} <span aria-hidden="true">→</span>
          </a>`
        : "";
      return `
      <li class="work-item${inProgress ? " is-progress" : ""}">
        <div class="work-marker" aria-hidden="true"></div>
        ${media}
        <div class="work-body">
          <p class="work-meta"><time>${escapeHTML(date)}</time> · ${escapeHTML(context)}${badge}</p>
          <h3 class="work-title">${heading}</h3>
          <p class="work-desc">${escapeHTML(description)}</p>
          ${tagItems ? `<ul class="tags" aria-label="Tags">${tagItems}</ul>` : ""}
          ${button}
        </div>
      </li>`;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", renderWork);
