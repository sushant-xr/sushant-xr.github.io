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
    title: "Phantom Touch: Designing a Multimodal Wearable Interface for Immersive VR",
    date: "2026",
    context: "Independent research project",
    inProgress: true,
    description: [
      "Phantom Touch is an independent XR research project exploring how **wearable haptic interfaces can translate virtual interactions into physical sensations** while preserving natural interactions with the physical world. The design positions actuators on the backs of the fingers, leaving the **fingerpads exposed** for direct physical contact.",
      "Informed by prior research on **fingernail haptics, finger-worn tactile interfaces (Haplets), and virtual texture synthesis (Hasti)**, the project investigates how hand tracking, actuator placement, and tactile rendering influence the perception of virtual surfaces.",
      "**Phase 1 (In Progress)** focuses on establishing a low-latency communication pipeline between Meta Quest 3, Unity, and wearable hardware. A virtual keyboard detects finger-specific touch events and transmits compact binary data through a **real-time telemetry stream** to dedicated haptic middleware. The middleware forwards commands via **Bluetooth Low Energy (BLE) to individual ESP32-S3 modules**, which control low-cost **ERM vibration motors mounted at the finger end-effectors**.",
      "**Phase 2** will investigate **movement-dependent texture rendering**, translating UV-indexed height and roughness maps into dynamic haptic patterns using **linear resonant actuators (LRAs)**. Their faster response and more precise vibration control make them better suited for rendering closely spaced tactile events. Planned experiments will explore the **perceptual limits of tactile fidelity**, identifying how surface detail, finger movement, and tracking accuracy affect users' ability to distinguish virtual textures.",
      "Future directions include **Peltier-based thermal feedback** and specialist-supervised **electrical muscle stimulation (EMS)** to simulate recoil and resistance at virtual interaction boundaries.",
    ],
    tags: [
      "Wearable Haptics", "Multimodal Interaction", "Tactile Perception", "XR Interfaces",
      "Unity", "C#", "Meta Quest 3", "ESP32-S3", "BLE", "DRV2605L", "ERM/LRA Actuators",
    ],
    link: "",
    imageURL: "images/thumbnails/square/wristband-placeholder.svg",
    newTab: false,
  },
  {
    title: "Elixir Expedition: Exploring Action-Dependent Perception and Environmental Awareness in Immersive VR",
    date: "2023",
    context: "Virtual Environments · UT Austin",
    description: [
      "Elixir Expedition is an exploratory XR research project investigating how users perceive and respond to changes in immersive virtual environments. Developed as a four-person team project in Unity for Meta Quest 3, the experience explores **perceptual awareness, change blindness, and embodied interaction** within an interactive ancient Egyptian environment.",
      "My primary contributions focused on **experimental design, VR prototype development, and performance optimization** for standalone VR hardware. I designed and implemented interaction mechanisms that connected participants' physical actions to environmental responses. For example, participants could illuminate their surroundings by bringing a burning torch into contact with a firepit and holding it there to ignite it.",
      "The experience also incorporated **attention-dependent environmental transformations**. Using head orientation and proximity-based detection, the system introduced changes to objects and spatial layouts when participants looked away, allowing us to explore whether these alterations were subsequently noticed.",
      "We conducted an exploratory study with **eight participants**, examining their awareness and recollection of environmental changes through post-experience feedback. While the small sample and limited surviving data constrain the findings, the project provided valuable experience in designing and evaluating interactive VR systems.",
      "This work strengthened my interest in **perception-aware XR interfaces, embodied interaction, and adaptive virtual environments**.",
    ],
    tags: [
      "Perceptual Awareness", "Change Blindness", "Embodied Interaction", "XR Interfaces",
      "Unity", "C#", "Meta Quest 3", "XR Interaction Toolkit",
    ],
    link: "",
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
    title: "Robo-Barista: Automating My Morning Coffee",
    date: "2026",
    context: "Personal project",
    inProgress: true,
    description: [
      "I'm not much of a morning person, but I do love waking up to a fresh cup of coffee. So, naturally, I decided the most reasonable solution was to build a **6-axis robotic arm** and **automate my coffee maker** instead of spending two minutes making it myself.",
      "The robotic arm is being developed to **remove used coffee pods and load fresh ones**, while a custom mechanical assembly handles the brewing mechanism. I designed a **3D-printed sector gear and stepper-driven pinion** to increase torque, allowing the machine to close its lid and puncture the coffee pod automatically.",
      "To make the process more autonomous, I integrated a **non-contact water level sensor and pump** to maintain the reservoir, along with a **time-of-flight (ToF) sensor** to detect whether a cup is positioned correctly before brewing. An **ESP32 microcontroller** coordinates the sensors, motors, and mechanical components.",
      "The entire system is designed to connect with **Alexa**, triggering a sequence of actions when I **dismiss my morning alarm**: refill the reservoir, replace the coffee pod, and start brewing.",
      "It's a slightly overengineered solution to a very small problem, but that's half the fun of building things.",
    ],
    link: "",
    images: [
      { src: "images/thumbnails/square/vr-robot-arm.jpg", alt: "3D-printed, servo-driven 6-axis robot arm held up on a desk in front of a monitor" },
      { src: "images/projects/robot-arm/coffee-maker-lid.jpg", alt: "Single-serve coffee maker retrofitted with a stepper motor and 3D-printed sector gear that opens and closes its lid" },
    ],
    newTab: false,
  },
  {
    title: "Flow State Timer: Rethinking Pomodoro",
    date: "2026",
    context: "Personal project",
    description: [
      "Getting started is usually the hardest part of any task. But once I'm finally focused and making progress, the last thing I want is a timer going off and telling me to take a break. Unfortunately, that's exactly what most Pomodoro timers do.",
      "So I decided to build my own.",
      "The idea is simple: use the timer to **overcome the initial resistance to starting a task**, not to interrupt the momentum once it's there. I built a small hardware timer that starts with a traditional **25-minute countdown**. Once the time is up, instead of sounding an alarm, it quietly switches to **Flow State mode**, counting upward and tracking how much longer I continue working.",
      "The prototype uses an **ESP8266 microcontroller, an OLED display, capacitive touch controls, and a vibration motor** for subtle **haptic feedback**. It also **tracks time across different projects**, giving me a better picture of where my focused hours go.",
      "What started as a small experiment to fix something that annoyed me has become my **daily driver**. It's a simple change to the Pomodoro technique, but one that fits the way I actually like to work.",
    ],
    link: "",
    images: [
      { src: "images/projects/flow-state-timer/flow-state-timer-1.jpg", alt: "Flow State Timer on a desk, its OLED screen reading Flow State +13:52, Keep Going, above minus, zero and plus touch buttons" },
      { src: "images/projects/flow-state-timer/flow-state-timer-2.jpg", alt: "Flow State Timer internals laid out: a hand-wired perfboard, an ESP8266 board and a 1200 mAh battery module" },
      { src: "images/projects/flow-state-timer/flow-state-timer-3.jpg", alt: "Side view of the assembled Flow State Timer showing its stacked circuit boards held between fingers" },
    ],
    newTab: false,
  },
];

const talks = [
  {
    title: "Blending Realities: A Mixed Reality Workshop",
    date: "Feb 2024",
    context: "Workshop · UT Austin · In collaboration with Bezi",
    description: [
      "Getting started with XR development can be intimidating, especially when your first steps involve installing a game engine, configuring a development environment, and figuring out where to begin. We wanted to make that first experience a little less overwhelming and a lot more fun.",
      "As a **Bezi Fellow**, I worked with a team of five to organize and facilitate a **beginner-friendly XR workshop** in collaboration with Bezi, a **browser-based platform** for designing and prototyping 3D and XR experiences.",
      "We deliberately chose **Bezi over Unity** to lower the barrier to entry. No complicated installations, no expensive hardware requirements, just a browser and a willingness to experiment. Our team built an **interactive demo** that participants could recreate during the session, introducing **3D interaction design, WebXR, and practical optimization techniques**, including lossless texture optimization.",
      "For many attendees, this was their **first hands-on experience with XR**. My favorite part was watching participants move beyond the tutorial and start experimenting with their own ideas, turning a guided exercise into something uniquely theirs.",
      "We wrapped up by sharing a **Notion learning resource** with tutorials, references, and materials to help everyone continue building XR experiences independently, even without a VR headset.",
      "The goal wasn't just to teach a tool. It was to make XR feel like something anyone could start creating.",
    ],
    tags: ["Mixed Reality", "Bezi", "Figma", "Meta Quest"],
    link: "",
    imageURL: "media/thumbnails/blending-realities-merged-poster.jpg",
    videoURL: "media/thumbnails/blending-realities-merged.mp4",
    newTab: false,
  },
  {
    title: "Unity Optimization for Meta Quest: Building Comfortable, High-Performance VR Experiences",
    date: "Nov 2023",
    context: "Workshop · Virtual Environments · UT Austin",
    description: [
      "You can build the most visually stunning and immersive VR experience, but none of it matters if the headset struggles to maintain a stable frame rate. Poor performance can quickly turn immersion into discomfort, leaving participants reaching for a bottle of water or, in the worst case, a bucket.",
      "To address this challenge, I delivered a **technical workshop at UT Austin** as part of the **Virtual Environments** course, focusing on optimizing Unity-based VR applications for standalone Meta Quest headsets.",
      "The workshop explored practical techniques for balancing **visual fidelity, rendering performance, and user comfort**, including **interpupillary distance (IPD) calibration, occlusion culling, static batching, Level of Detail (LOD), baked lighting and shadows, and light and reflection probes**. I also demonstrated advanced techniques such as **dynamically switching between precomputed lightmaps** to simulate interactive lighting changes without the performance overhead of real-time lighting.",
      "Through hands-on demonstrations, participants learned to identify rendering bottlenecks, monitor frame rates, and evaluate optimization strategies using **Meta Quest Developer Hub and OVR Metrics Tool**.",
      "The goal was to help students build **visually compelling, performance-efficient VR experiences** that minimize performance-related discomfort and provide a more reliable foundation for immersive interaction and user studies.",
    ],
    tags: [
      "VR Performance Optimization", "Rendering Techniques", "User Comfort", "Standalone XR",
      "Unity", "Meta Quest", "Meta Quest Developer Hub", "OVR Metrics Tool",
    ],
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
    title: "Clarista: Building a No-Code Data Platform",
    date: "2020–2022",
    context: "Frontend Lead · Clarista Inc.",
    description: [
      "Working with large datasets shouldn't always require writing complex SQL queries or navigating complicated tools. At Clarista, I **led the frontend team** building a **no-code data platform** designed to make data transformation, exploration, and visualization more intuitive and accessible.",
      "One of our core deliverables was **Flows**, a **visual data transformation editor** built using **React, Redux, and D3.js**. The interface enabled users to build transformation pipelines through an interactive **drag-and-drop canvas**, connecting operations to merge, filter, split, and manipulate datasets without writing code.",
      "Our work extended across several interconnected modules, including **data cataloging, data lineage visualization, and a real-time analytics dashboard builder**. The dashboard builder allowed users to arrange and customize charts on a visual canvas and publish interactive dashboards, bringing data exploration and reporting into the same platform.",
      "Beyond development, I was responsible for **frontend architecture, technical decision-making, rapid prototyping**, and coordinating the team's deliverables. I also led the development of a **reusable design system**, collaborating with designers and backend engineers to maintain consistent interactions across modules.",
    ],
    tags: ["React", "Redux", "D3.js", "Design Systems", "Data Visualization", "Rapid Prototyping"],
    link: "",
    imageURL: "media/thumbnails/clarista-square-poster.jpg",
    videoURL: "media/thumbnails/clarista-square.mp4",
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
    .map(({ title, date, context, description, tags, link, imageURL, videoURL, images, newTab, inProgress }) => {
      const target = newTab ? ' target="_blank" rel="noopener"' : "";
      const tagItems = (tags || [])
        .map((tag) => `<li class="tag">${escapeHTML(tag)}</li>`)
        .join("");
      let media;
      if (images && images.length) {
        // images: [{ src, alt }, ...] -> auto-advancing carousel
        const slides = images
          .map(({ src, alt }, i) => `<img class="carousel-slide${i === 0 ? " is-active" : ""}" src="${src}" alt="${escapeHTML(alt || "")}" />`)
          .join("");
        const dots = images.length > 1
          ? `<div class="carousel-dots">${images
              .map((_, i) => `<button type="button" class="carousel-dot${i === 0 ? " is-active" : ""}" aria-label="Show image ${i + 1} of ${images.length}"></button>`)
              .join("")}</div>`
          : "";
        media = `<div class="work-media carousel" aria-roledescription="carousel" aria-label="${escapeHTML(title)} photos">${slides}${dots}</div>`;
      } else {
        const image = videoURL
          ? `<video src="${videoURL}" poster="${imageURL}" muted loop playsinline preload="metadata"${reduceMotion ? "" : " autoplay"}></video>`
          : `<img src="${imageURL}" alt="" loading="lazy" />`;
        media = link
          ? `<a class="work-media" href="${link}"${target} tabindex="-1" aria-hidden="true">${image}</a>`
          : `<div class="work-media">${image}</div>`;
      }
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

  list.querySelectorAll(".carousel").forEach(initCarousel);
}

function initCarousel(root) {
  const slides = root.querySelectorAll(".carousel-slide");
  const dots = root.querySelectorAll(".carousel-dot");
  if (slides.length < 2) return;
  let index = 0;
  let timer = null;

  const show = (next) => {
    slides[index].classList.remove("is-active");
    dots[index].classList.remove("is-active");
    index = (next + slides.length) % slides.length;
    slides[index].classList.add("is-active");
    dots[index].classList.add("is-active");
  };
  const start = () => {
    if (reduceMotion || timer) return;
    timer = setInterval(() => show(index + 1), 3500);
  };
  const stop = () => { clearInterval(timer); timer = null; };

  dots.forEach((dot, i) => dot.addEventListener("click", () => { show(i); stop(); start(); }));
  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);
  root.addEventListener("focusin", stop);
  root.addEventListener("focusout", start);
  start();
}

document.addEventListener("DOMContentLoaded", () => {
  renderTimeline("work-list", work);
  renderTimeline("personal-list", personal);
  renderTimeline("talks-list", talks);
  renderTimeline("prototypes-list", prototypes);
});
