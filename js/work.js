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
    title: "Phantom Touch: Feeling the Virtual Without Losing Touch With the Physical",
    date: "2026",
    context: "Independent research project",
    inProgress: true,
    description: [
      "What if you could feel virtual surfaces without losing the ability to interact with the physical world? That's the idea behind Phantom Touch, an independent XR research project exploring **wearable haptics and tactile perception**. The interface places **actuators on the backs of the fingers**, keeping the **fingerpads exposed** for everyday physical interactions.",
      "Building on research in **fingernail haptics, wearable tactile interfaces (Haplets), and virtual texture synthesis (Hasti)**, I'm investigating how hand tracking, actuator placement, and hardware limitations affect our perception of virtual surfaces.",
      "**Phase 1 (In Progress)** focuses on getting the fundamentals right: establishing a **low-latency communication pipeline** between Unity, Meta Quest 3, and the wearable hardware. A virtual keyboard captures finger-specific touch events and streams **compact binary telemetry** to custom haptic middleware, which relays commands via **Bluetooth Low Energy (BLE) to ESP32-S3 modules** controlling low-cost **ERM vibration motors** at the finger end-effectors.",
      "**Phase 2** takes this further by exploring **movement-dependent texture rendering** using UV-indexed height and roughness maps. I'll replace ERMs with faster-responding **linear resonant actuators (LRAs)** to generate more precisely timed tactile patterns and investigate the **perceptual limits of surface fidelity**: how much texture detail can we actually distinguish before finer differences become imperceptible?",
      "Future explorations include **Peltier-based thermal feedback** and specialist-supervised **electrical muscle stimulation (EMS)** for simulating recoil and resistance at virtual boundaries.",
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
    title: "Elixir Expedition: Exploring Perception and Environmental Awareness in Immersive VR",
    date: "2023",
    context: "Virtual Environments · UT Austin",
    description: [
      "How much of a virtual world do we actually notice, and what happens when that world changes while we're not looking? These questions inspired **Elixir Expedition**, an exploratory XR research project investigating **change blindness, perceptual awareness, and embodied interaction** within an immersive ancient Egyptian environment.",
      "Developed as a **four-person team project** using Unity and Meta Quest 3, the experience combined physical interactions with subtle environmental transformations. My primary contributions focused on **experimental design, VR prototype development, and performance optimization** for standalone VR hardware.",
      "I designed interaction mechanisms that connected participants' actions to environmental responses. For example, players could illuminate dark spaces by holding a burning torch against a firepit. Meanwhile, the environment could change without their immediate awareness. Using **head orientation and proximity-based detection**, the system altered objects and spatial layouts when participants looked away, allowing us to explore whether they noticed these changes upon returning.",
      "We conducted an **exploratory study with eight participants**, examining their awareness and recollection of environmental changes through post-experience feedback. While the small sample and limited surviving data prevent definitive conclusions, the project offered practical experience in designing and evaluating perception-driven VR interactions.",
      "This experience sparked my interest in **perception-aware XR interfaces** and how virtual environments might adapt to human behavior.",
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
    title: "Solar-Assisted Smartphone Charging Case: Making the Most of Every Bit of Sunlight",
    date: "2018",
    context: "Engineering case study · Undergraduate",
    description: [
      "Solar-powered calculators have been around for decades, quietly running on whatever light they can get. So we wondered, **why couldn't we use the same idea to give smartphones a little extra battery life?**",
      "That question led us to develop a **solar-assisted smartphone charging case**, exploring whether we could harvest enough energy from everyday light exposure to supplement a phone's battery without turning its case into a bulky power bank.",
      "We experimented with several hardware configurations and enclosure designs, trying to balance **energy efficiency, portability, and a slim form factor**. The system uses small solar panels to collect energy from sunlight and suitable ambient lighting conditions. An **energy-harvesting circuit** stores the collected energy in an array of supercapacitors before transferring it through a regulated charging circuit to a rechargeable battery.",
      "We also built a companion **Android application** to manage charging behavior, including the ability to set a charging limit of approximately 80% to help reduce long-term battery wear.",
      "I developed the prototype alongside a business school colleague, combining **electronics, Arduino-based prototyping, mobile development, and product design**. We eventually registered the project as a startup venture through our university's **Technology Business Incubation Center**, receiving mentorship and research funding through the **Make in India initiative**.",
      "It was our first real attempt at turning a simple \"what if?\" into a physical product, and a crash course in how much engineering goes into making something small, practical, and genuinely useful.",
    ],
    tags: ["Arduino", "Solar Energy Harvesting", "Supercapacitors", "Android", "Hardware Prototyping", "Product Design"],
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
    tags: ["ESP32", "Robotics", "3D Printing", "IoT"],
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
      "Getting started is usually the hardest part of any task. But once I'm finally focused and making progress, I want to finish the task at hand, not stop halfway through because a timer says it's time for a break. Unfortunately, that's exactly what most Pomodoro timers do.",
      "So I decided to build my own, with two simple rules: **don't interrupt me when I'm focused**, and **don't let my five-minute breaks turn into thirty**.",
      "The timer starts with a traditional **25-minute countdown**, but instead of sounding an alarm, it quietly transitions into **Flow State mode**, counting upward and tracking the extra time I spend working. No forced breaks, just uninterrupted momentum until I'm ready to stop.",
      "Breaks, however, are a different story. I've lost count of how many times I've said, \"I'll be back in five minutes,\" only to return half an hour later. So I added a **break-tracking mode** that counts the minutes beyond my planned break and triggers a **repeating haptic reminder** until I stop it. It's deliberately annoying, and that's kind of the point.",
      "I built the device using an **ESP8266, OLED display, capacitive touch controls, and a vibration motor**. It also **tracks focused work across different projects**.",
      "What started as a small experiment has become my **daily driver**. It leaves me alone when I'm productive and holds me accountable when I'm procrastinating.",
    ],
    tags: ["ESP8266", "OLED", "Capacitive Touch", "Haptic Feedback"],
    link: "",
    images: [
      { src: "images/projects/flow-state-timer/flow-state-timer-1.jpg", alt: "Flow State Timer on a desk, its OLED screen reading Flow State +13:52, Keep Going, above minus, zero and plus touch buttons" },
      { src: "images/projects/flow-state-timer/flow-state-timer-session-complete.jpg", alt: "Flow State Timer screen reading Session Complete, PhD Research, 48:55, Flow Recorded" },
      { src: "images/projects/flow-state-timer/flow-state-timer-2.jpg", alt: "Flow State Timer internals laid out: a hand-wired perfboard, an ESP8266 board and a 1200 mAh battery module" },
      { src: "images/projects/flow-state-timer/flow-state-timer-3.jpg", alt: "Side view of the assembled Flow State Timer showing its stacked circuit boards held between fingers" },
      { src: "images/projects/flow-state-timer/flow-state-timer-break-over.jpg", alt: "Flow State Timer screen reading Break Over, +01:27, Return to Desk" },
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
    title: "Beheld Health: Building Technology for Human-Centered Care",
    date: "2024–Present",
    context: "Frontend & UX Engineer · Beheld Health Inc.",
    description: [
      "Healthcare is complicated enough without making the people delivering care struggle with the technology meant to support them. At Beheld Health, a healthcare startup originating from **UT Austin's Dell Medical School**, I've been working on making that experience a little easier.",
      "As the Frontend and UX Engineer, I **lead the design, development, and maintenance** of a **React Native mobile application** that helps healthcare outreach teams connect with participants, manage their daily workflows, and document interactions.",
      "One of my key contributions was designing a **smart scheduling and task-management interface** that helps callers prioritize outreach, organize follow-ups, and keep track of participant engagement. I also developed **integrated communication features using Twilio**, enabling voice calls, SMS, multimedia messaging, and notifications directly within the application.",
      "Beyond individual features, I've been responsible for **frontend architecture, reusable UI components, performance optimization, analytics, and CI/CD pipelines** supporting both iOS and Android.",
    ],
    tags: [
      "Human-Computer Interaction", "UX Engineering", "Mobile Development", "Healthcare Technology",
      "React Native", "TypeScript", "Expo", "Twilio", "Node.js", "AWS", "Sentry",
    ],
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
    tags: [
      "Interaction Design", "Data Visualization", "Frontend Leadership", "Design Systems",
      "React", "Redux", "D3.js", "JavaScript", "REST APIs",
    ],
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
        const arrows = images.length > 1
          ? `<button type="button" class="carousel-arrow carousel-prev" aria-label="Previous image"><span aria-hidden="true">‹</span></button>
             <button type="button" class="carousel-arrow carousel-next" aria-label="Next image"><span aria-hidden="true">›</span></button>`
          : "";
        media = `<div class="work-media carousel" aria-roledescription="carousel" aria-label="${escapeHTML(title)} photos">${slides}${arrows}${dots}</div>`;
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
  let userPaused = false; // set once the visitor navigates manually

  const show = (next) => {
    slides[index].classList.remove("is-active");
    dots[index].classList.remove("is-active");
    index = (next + slides.length) % slides.length;
    slides[index].classList.add("is-active");
    dots[index].classList.add("is-active");
  };
  const start = () => {
    if (reduceMotion || userPaused || timer) return;
    timer = setInterval(() => show(index + 1), 3500);
  };
  const stop = () => { clearInterval(timer); timer = null; };
  // Manual navigation stops auto-advance for good
  const goTo = (i) => { userPaused = true; stop(); show(i); };

  dots.forEach((dot, i) => dot.addEventListener("click", () => goTo(i)));
  root.querySelector(".carousel-prev").addEventListener("click", () => goTo(index - 1));
  root.querySelector(".carousel-next").addEventListener("click", () => goTo(index + 1));
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
