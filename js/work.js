// Landing page lists, each shown newest first.
//   work:     research & prototyping  -> rendered into #work-list
//   personal: personal projects       -> rendered into #personal-list
//   talks:    talks and workshops     -> rendered into #talks-list
//   prototypes: web app prototypes    -> rendered into #prototypes-list
// To add an entry, copy one object and edit the fields.
//   date:        label shown in the timeline (e.g. "Feb 2024")
//   description: text shown under the title; use an array for several
//                paragraphs, and **double asterisks** for bold
//   newTab:      true for external links (e.g. GitHub)
//   inProgress:  true shows an "In progress" label
//   link:        leave empty ("") if there's no page yet; the button is hidden
const work = [
  {
    title: "Phantom Touch: A Multimodal Wearable Interface for VR",
    date: "Nov 2026",
    context: "Independent research project",
    inProgress: true,
    description: [
      "Phantom Touch is a **wearable interface prototype** exploring how virtual interactions can produce physical sensations while keeping the **fingerpads free** for direct contact with the real world. The proposed design places actuators on the **nails or backs of the fingers**, with electronics at the wrist. Using **Meta Quest hand tracking**, it aims to let users feel virtual interactions while remaining able to handle physical objects without removing the wearable.",
      "The first phase, now complete, used inexpensive vibration motors, **ESP32 electronics**, and a small **Unity keyboard demonstration** to establish reliable communication between virtual events and individual fingers. This first stage provides the foundation for the central research direction: translating **UV-indexed height and roughness maps** into **movement-dependent tactile feedback** using **linear resonant actuators**. Planned experiments will investigate how tracking uncertainty, finger movement, and actuator response affect the surface features users can distinguish.",
      "Informed by research in wearable haptics and texture rendering, Phantom Touch is being designed as an **extensible platform for multisensory VR interaction**. Phase 3 will explore specialist-supervised **electrical muscle stimulation** to simulate recoil at the wrist for FPS shooters, and longer-term directions include **thermal feedback**. The prototype is currently in development, with planned evaluations of texture perception, comfort, and the ability to transition between physical and virtual interactions.",
    ],
    tags: ["Haptics", "Wearables", "Meta Quest 3", "Unity", "ESP32"],
    link: "/phantom-touch.html",
    imageURL: "images/thumbnails/square/wristband-placeholder.svg",
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
    imageURL: "media/thumbnails/elixir-youtube-square-poster.jpg",
    videoURL: "media/thumbnails/elixir-youtube-square.mp4",
    newTab: false,
  },
  {
    title: "Solar-Assisted Smartphone Charging Case",
    date: "2018",
    context: "Engineering case study · Undergraduate",
    description: [
      "Solar-powered calculators have existed for decades, so why couldn't we use the same principle to extend a smartphone's battery life? This question inspired us to develop an **Arduino-based solar charging case** that could harvest ambient light and supplement a smartphone's battery. We iterated through multiple hardware and enclosure designs, balancing energy-harvesting efficiency, portability, and the challenge of maintaining a slim form factor.",
      "The system uses **solar panels to harvest energy from available light**, including low-intensity ambient light under suitable conditions. An **energy-harvesting circuit** manages the collected power and stores it in an array of supercapacitors, which act as temporary energy buffers. A regulated boost and charging circuit then transfers the accumulated energy to the case's rechargeable battery. We also developed a companion **Android application** to control charging, allowing users to limit the phone's charge to approximately 80% to help reduce battery degradation.",
      "I co-developed this prototype with a business school colleague, combining hardware prototyping, embedded systems, mobile application development, and product design. We registered the project as a startup venture through our undergraduate university's **Technology Business Incubation Center**, where we received mentorship and research funding under the **Make in India** initiative.",
    ],
    tags: ["Arduino", "Hardware Prototyping", "Energy Harvesting", "Android"],
    link: "",
    imageURL: "media/thumbnails/smart-mod-square-poster.jpg",
    videoURL: "media/thumbnails/smart-mod-square.mp4",
    newTab: false,
  },
];

const personal = [
  {
    title: "Teleoperating a Robot Arm through VR",
    date: "2026",
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
    date: "2026",
    context: "Personal project",
    description:
      "A tangible focus device that starts with a short, adjustable commitment and then becomes an open-ended stopwatch, helping people start working without telling them when to stop.",
    tags: ["Physical Computing", "Interaction Design", "Haptics", "HCI"],
    link: "",
    imageURL: "media/thumbnails/flow-state-timer-square-poster.jpg",
    videoURL: "media/thumbnails/flow-state-timer-square.mp4",
    newTab: false,
  },
];

const talks = [
  {
    title: "Blending Realities: A Mixed Reality Workshop",
    date: "Feb 2024",
    context: "Workshop · UT Austin · In collaboration with Bezi",
    description: [
      "As a **Bezi Fellow**, I co-organized and facilitated a beginner-friendly XR workshop in collaboration with Bezi, a browser-based platform for designing and prototyping 3D and XR experiences, as part of a five-person team.",
      "We chose **Bezi over Unity** for its accessibility, eliminating the need for software installation and allowing participants to explore XR through WebXR. Our team developed an interactive demo that participants could recreate during the workshop, introducing fundamental 3D design concepts and optimization techniques, including lossless texture optimization.",
      "For many participants, this was their first exposure to XR technology. The most rewarding part was watching them transition from following instructions to experimenting with their own creative ideas through hands-on prototyping.",
      "We concluded the workshop by sharing a comprehensive Notion resource with tutorials and learning materials, enabling participants to continue exploring XR development independently, even without owning a VR headset.",
    ],
    tags: ["Mixed Reality", "Bezi", "Figma", "Meta Quest"],
    link: "",
    imageURL: "media/thumbnails/blending-realities-merged-poster.jpg",
    videoURL: "media/thumbnails/blending-realities-merged.mp4",
    newTab: false,
  },
  {
    title: "Unity Optimizations for Meta Quest",
    date: "Nov 2023",
    context: "Talk · Virtual Environments · UT Austin",
    description: [
      "I delivered a technical talk at UT Austin as part of the **Virtual Environments** course, focusing on optimizing Unity-based VR experiences for standalone Meta Quest headsets and addressing performance challenges that can affect immersion and contribute to motion sickness.",
      "The session covered essential VR development and optimization techniques, including **interpupillary distance (IPD) calibration, occlusion culling, static batching, Level of Detail (LOD), baked lighting and shadows, and light and reflection probes**. I also demonstrated advanced techniques, such as dynamically switching between precomputed lightmaps to simulate lighting changes in response to user interactions, such as turning lights on and off.",
      "Through live demonstrations, attendees learned to identify performance bottlenecks, evaluate rendering performance, and validate their optimizations using **Meta Quest Developer Hub and OVR Metrics Tool**. The goal was to help students improve the performance and frame-rate stability of their VR projects, minimize potential sources of motion sickness, and create more comfortable and reliable experiences for their user studies.",
    ],
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

// Escapes text, then turns **phrase** into bold.
function formatText(value) {
  return escapeHTML(value).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
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
          ${[].concat(description).map((p) => `<p class="work-desc">${formatText(p)}</p>`).join("")}
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
