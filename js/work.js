// Landing page lists, each shown newest first.
//   work:     research projects       -> rendered into #work-list
//   personal: personal projects       -> rendered into #personal-list
//   talks:    talks and workshops     -> rendered into #talks-list
//   prototypes: web app prototypes    -> rendered into #prototypes-list
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
    title: "Elixir Expedition: Embodied Agents in VR",
    date: "Dec 2023",
    context: "Virtual Environments · UT Austin",
    description:
      "A VR game built in Unity to support user studies on embodied agents, evaluating body ownership, presence, immersion, fear, and system usability (SUS).",
    tags: ["Virtual Reality", "Unity", "Blender", "C#", "User Study"],
    link: "/elixir-expedition.html",
    imageURL: "media/thumbnails/elixir-square-poster.jpg",
    videoURL: "media/thumbnails/elixir-square.mp4",
    newTab: false,
  },
];

const personal = [
  {
    title: "Teleoperating a Robot Arm through VR",
    date: "",
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
    date: "",
    context: "Personal project",
    description:
      "A tangible focus device that starts with a short, adjustable commitment and then becomes an open-ended stopwatch, helping people start working without telling them when to stop.",
    tags: ["Physical Computing", "Interaction Design", "Haptics", "HCI"],
    link: "",
    imageURL: "media/thumbnails/flow-state-timer-square-poster.jpg",
    videoURL: "media/thumbnails/flow-state-timer-square.mp4",
    newTab: false,
  },
  {
    title: "Smart Mod: Solar Phone Charging Case",
    date: "",
    context: "Personal project · Undergraduate",
    description:
      "An Arduino-enabled phone case powered by solar energy and controllable over Bluetooth, built with a friend from business school. It earned recognition from our university's technology business incubation department.",
    tags: ["Arduino", "Hardware Prototyping", "Bluetooth"],
    link: "",
    imageURL: "media/thumbnails/smart-mod-square-poster.jpg",
    videoURL: "media/thumbnails/smart-mod-square.mp4",
    newTab: false,
  },
];

const talks = [
  {
    title: "Blending Realities: A Mixed Reality Workshop",
    date: "Feb 2024",
    context: "Workshop · Immersive Media Studio · UT Austin",
    description:
      "Designed and ran a beginner-friendly hands-on workshop where participants built their first mixed reality experience on Meta Quest, emphasizing creativity over technical complexity.",
    tags: ["Mixed Reality", "Bezi", "Meta Quest"],
    link: "/workshop-blending-realities.html",
    imageURL: "media/thumbnails/blending-realities-square-poster.jpg",
    videoURL: "media/thumbnails/blending-realities-square.mp4",
    newTab: false,
  },
  {
    title: "Unity Optimizations for Meta Quest",
    date: "Nov 2023",
    context: "Talk · UT Austin",
    description:
      "A talk on optimizing Unity projects to run smoothly on standalone Meta Quest headsets, with live demos of techniques such as occlusion culling in the Unity editor.",
    tags: ["Unity", "Meta Quest", "Performance"],
    link: "",
    imageURL: "images/thumbnails/square/unity-quest-talk.jpg",
    newTab: false,
  },
];

// videoURL (optional): a short muted looping clip used as the thumbnail
// instead of imageURL; imageURL is then used as the poster frame.
const prototypes = [
  {
    title: "Beheld Caller App",
    date: "2024–Present",
    context: "UX Engineer · Beheld Health Inc.",
    description: "Details coming soon.",
    tags: [],
    link: "",
    imageURL: "images/thumbnails/square/beheld-placeholder.svg",
    newTab: false,
  },
  {
    title: "Flows: No-Code Editor for Data Transformation",
    date: "2020–2022",
    context: "Frontend Lead · Clarista Inc.",
    description:
      "Played a central role in creating the initial prototype and leading the front-end team for a drag-and-drop platform that lets data teams merge, split, and filter data without writing code.",
    tags: ["React", "Design Systems", "Rapid Prototyping"],
    link: "/no-code-editor.html",
    imageURL: "media/thumbnails/flows-square-poster.jpg",
    videoURL: "media/thumbnails/flows-square.mp4",
    newTab: false,
  },
  {
    title: "Dashboard Builder for Realtime Analytics",
    date: "2020–2022",
    context: "Proof of concept · Clarista Inc.",
    description:
      "Led the proof of concept for dragging and dropping charts onto a canvas, with consistent layouts, customization options, and real-time dashboard publishing.",
    tags: ["React", "Data Visualization", "Proof of Concept"],
    link: "",
    imageURL: "media/thumbnails/dashboard-square-poster.jpg",
    videoURL: "media/thumbnails/dashboard-square.mp4",
    newTab: false,
  },
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[c]);
}

function renderTimeline(listId, items) {
  const list = document.getElementById(listId);
  if (!list) return;

  list.innerHTML = items
    .map(({ title, date, context, description, tags, link, imageURL, videoURL, newTab, inProgress }) => {
      const target = newTab ? ' target="_blank" rel="noopener"' : "";
      const tagItems = tags
        .map((tag) => `<li class="tag">${escapeHTML(tag)}</li>`)
        .join("");
      const image = videoURL
        ? `<video src="${videoURL}" poster="${imageURL}" muted loop playsinline preload="metadata"${reduceMotion ? "" : " autoplay"}></video>`
        : `<img src="${imageURL}" alt="" loading="lazy" />`;
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
          <p class="work-meta">${date ? `<time>${escapeHTML(date)}</time> · ` : ""}${escapeHTML(context)}${badge}</p>
          <h3 class="work-title">${heading}</h3>
          <p class="work-desc">${escapeHTML(description)}</p>
          ${tagItems ? `<ul class="tags" aria-label="Tags">${tagItems}</ul>` : ""}
          ${button}
        </div>
      </li>`;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderTimeline("work-list", work);
  renderTimeline("personal-list", personal);
  renderTimeline("talks-list", talks);
  renderTimeline("prototypes-list", prototypes);
});
