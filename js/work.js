// Landing page lists, each shown newest first.
//   work:     research & prototyping  -> rendered into #work-list
//   personal: personal projects       -> rendered into #personal-list
//   talks:    talks and workshops     -> rendered into #talks-list
//   prototypes: web app prototypes    -> rendered into #prototypes-list
// To add an entry, copy one object and edit the fields.
//   date:        label shown in the timeline (e.g. "Feb 2024")
//   subtitle:    optional line shown under the title
//   description: text shown under the title; use an array for several
//                paragraphs, **double asterisks** for bold, and
//                [label](https://url) for a link that opens in a new tab
//   newTab:      true for external links (e.g. GitHub)
//   inProgress:  true shows an "In progress" label
//   link:        leave empty ("") if there's no page yet; the button is hidden
const work = [
  {
    title: "Phantom Touch",
    subtitle: "Exploring the Boundaries of Touch in XR. Literally.",
    date: "2026",
    context: "Independent research project",
    inProgress: true,
    description: [
      "What if you could feel virtual surfaces without losing the ability to interact with the physical world? That's the idea behind Phantom Touch, an independent XR research project exploring **wearable haptics and tactile perception**. The interface places **actuators on the backs of the fingers**, keeping the **fingerpads exposed** for everyday physical interactions.",
      "I began by reviewing existing research to understand current approaches and identify opportunities for further investigation. [**Haplets (2021)**](https://doi.org/10.3389/frvir.2021.738613) demonstrated wireless finger-worn haptics, [**Fingernail Haptics (CHI 2023)**](https://doi.org/10.1145/3544548.3581473) investigated tactile feedback through fingernail stimulation, and [**Hasti (2021)**](https://doi.org/10.1109/WHC49131.2021.9517177) explored virtual texture synthesis. These studies informed my hardware choices and research questions around **tracking uncertainty, actuator response, and perceptual fidelity**.",
      "**Phase 1 (In Progress)** focuses on building a **low-latency haptic communication pipeline** using Meta Quest 3 hand tracking, while accounting for limitations such as poor lighting, occlusion, and tracking uncertainty. After evaluating existing Bluetooth communication tools, I began developing **custom, extensible middleware** to support greater experimental control and future hardware integration. A Unity-based virtual keyboard is designed to stream finger-specific touch events as **compact binary telemetry**, which the middleware relays via **BLE to ESP32-S3 modules** controlling low-cost **ERM vibration motors**.",
      "**Phase 2** builds on this foundation to investigate **higher-fidelity, movement-dependent tactile rendering**. Using faster-responding **linear resonant actuators (LRAs)**, I plan to translate UV-indexed height and roughness maps into precisely timed haptic patterns. Controlled experiments will investigate the **perceptual limits of texture fidelity**, examining how surface detail, finger movement, and tracking uncertainty affect users' ability to distinguish virtual textures.",
      "Future directions include **Peltier-based thermal feedback** and specialist-supervised **electrical muscle stimulation (EMS)** for simulating recoil and resistance at virtual interaction boundaries.",
      "**Phantom Touch reflects the kind of research I want to pursue during my PhD: developing novel physical interfaces and investigating how they shape human interaction with virtual environments.** Through this independent work, I'm building experience in **literature-informed experimental design, embedded systems, XR development, and instrumented prototyping**. I'm eager to bring these capabilities into a collaborative XR research lab, working alongside researchers exploring similar challenges to **refine interaction techniques, conduct rigorous perceptual evaluations, and develop more effective wearable interfaces for immersive computing**.",
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
    title: "Elixir Expedition",
    subtitle: "Exploring Attention-Dependent Environmental Transformations in VR",
    date: "2023",
    context: "Virtual Environments · UT Austin",
    description: [
      "In immersive VR, the environment can change the moment you look away. But how much of that change do you actually notice when you look back? This question inspired **Elixir Expedition**, an exploratory XR research project investigating **change blindness, perceptual awareness, and embodied interaction**, and how these principles might inform the design of adaptive virtual environments.",
      "Developed as a **four-person team project** in Unity for Meta Quest 3, the experience placed participants in an interactive ancient Egyptian environment. My primary contributions included **experimental design, VR prototype development, and performance optimization** for standalone VR hardware.",
      "I designed interaction mechanisms connecting physical actions with environmental responses, such as illuminating dark spaces by holding a burning torch against a firepit. Meanwhile, **head orientation and proximity-based detection** enabled the environment to subtly modify objects and spatial layouts when participants looked away.",
      "We conducted an **exploratory study with eight participants**, examining their awareness and recollection of these transformations through post-experience feedback. The study helped frame questions about how interaction, attention, and environmental changes influence perception in VR.",
      "My biggest takeaway was that designing an immersive environment isn't just about what users see, but also what they notice. This project brought together my interests in human perception, experimental interaction design, and real-time XR development. It established a foundation I hope to build on in future XR research, combining **behavior-aware interaction techniques, optimized immersive prototypes, and controlled perceptual evaluations** to investigate how virtual environments can adapt to human behavior.",
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
    subtitle: "Exploring Energy-Efficient, Portable Hardware Design",
    date: "2018",
    context: "Engineering case study · Undergraduate",
    description: [
      "Building hardware that works on a desk is one thing. Making it **energy-efficient, compact, wireless, and practical enough to carry every day** is an entirely different challenge. My first experience tackling these constraints came from a simple question: if solar-powered calculators can run on ambient light, why couldn't we use the same principle to extend a smartphone's battery life?",
      "Together with a business school colleague, I developed a **solar-assisted smartphone charging case**, experimenting with hardware configurations and enclosure designs to balance **power efficiency, portability, and a slim form factor**.",
      "The prototype used miniature solar panels and an **energy-harvesting circuit** to collect energy from available light, storing it temporarily in an array of supercapacitors before transferring it to a rechargeable battery through regulated charging circuitry.",
      "We also developed a **companion Android application** that communicated wirelessly with the embedded hardware, allowing users to monitor and control the charging system directly from their smartphones.",
      "We registered the project through our university's **Technology Business Incubation Center**, receiving mentorship and research funding under the **Make in India initiative**.",
      "Although this wasn't an XR project, it shaped how I approach hardware development today. A working circuit is only the beginning; the real challenge is turning it into an **integrated, reliable, and usable device**. I'm now applying that mindset to **wearable XR interfaces**, where I want to combine **embedded systems, sensing, and physical actuation** to develop and evaluate new ways of interacting with virtual environments.",
    ],
    tags: [
      "Energy Harvesting", "Embedded Systems", "Wireless Communication", "Portable Hardware Design",
      "Arduino", "Solar Energy Harvesting", "Supercapacitors", "Android", "Hardware Prototyping",
    ],
    link: "",
    images: [
      { src: "images/projects/solar-case/solar-case-panel-raised.jpg", alt: "Opened charging case prototype: a battery, Bluetooth module and Arduino board mounted on the back of a phone, with the solar panel flap lifted behind them" },
      { src: "images/projects/solar-case/solar-case-final-design.jpg", alt: "Smart MOD phone case opened flat: a black back cover joined by a brown leather hinge to a flap holding a solar panel" },
      { src: "images/projects/solar-case/solar-case-render.jpg", alt: "3D render of the charging module enclosure, a dark shell with glowing blue circuit-trace patterns and cut-outs for ports" },
      { src: "images/projects/solar-case/solar-case-prototype-led.jpg", alt: "Built charging module prototype with its circuit-trace pattern lit up in pink, attached by a fabric hinge to a solar panel" },
    ],
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
    title: "Beheld Health: Engineering Human-Centered Interfaces",
    date: "2024–Present",
    context: "Frontend & UX Engineer · Beheld Health Inc.",
    description: [
      "**A technically sophisticated system is only useful if people can use it effectively.** At Beheld Health, a healthcare startup originating from **UT Austin's Dell Medical School**, I work at the intersection of **UX design, software engineering, and human-centered technology**.",
      "As the **Frontend and UX Engineer**, I lead the development of a production **React Native application** supporting healthcare outreach teams. My work involves designing intuitive scheduling and task-management interfaces, integrating communication through **Twilio**, and translating complex workflows into accessible experiences. I also oversee **frontend architecture, reusable UI components, performance optimization, and application reliability** across iOS and Android, collaborating closely with researchers and healthcare professionals.",
      "**This experience has strengthened my ability to design, develop, and deploy user-centered applications across mobile platforms.** I aim to bring these skills into XR research labs, contributing to **intuitive spatial interfaces, companion mobile applications for wearable devices, and experimental systems** that connect immersive software with physical hardware.",
    ],
    tags: [
      "HCI", "UX Design", "Interactive Systems", "Cross-Platform Development",
      "React Native", "TypeScript", "Expo", "Twilio", "Node.js",
    ],
    link: "",
    imageURL: "images/projects/beheld/beheld-outreach.jpg",
    images: [
      { src: "images/projects/beheld/beheld-outreach.jpg", alt: "Beheld app outreach screens: a participant card with Call and Text actions, and an in-app call connecting" },
      { src: "images/projects/beheld/beheld-call-outcome.jpg", alt: "Beheld app call documentation: recording the call outcome and choosing a reason the participant did not consent" },
      { src: "images/projects/beheld/beheld-enrolled.jpg", alt: "Beheld app scheduling: setting a weekly call plan and the enrolled participant list with connection statuses" },
    ],
    newTab: false,
  },
  {
    title: "Clarista: Building a No-Code Data Platform",
    date: "2020–2022",
    context: "Frontend Lead · Clarista Inc.",
    description: [
      "**Complex data doesn't have to mean complicated interfaces.** At Clarista, I **led the frontend team** developing a no-code platform that made data transformation, exploration, and visualization more intuitive through visual interaction.",
      "Our core deliverables included **Flows**, a drag-and-drop data transformation editor built with **React, Redux, and D3.js**, allowing users to construct complex data pipelines without writing code. We also developed **data cataloging, lineage visualization, and a real-time analytics dashboard builder**, enabling users to explore data relationships and create customizable visualizations. My responsibilities included **frontend architecture, technical leadership, rapid prototyping, and developing a reusable design system** across these modules.",
      "**This experience strengthened my ability to translate complex information and workflows into intuitive visual interfaces.** I aim to bring these skills into XR research labs, contributing to **spatial interface design, interactive data visualization, reusable UI systems, and rapid prototyping** of experimental applications.",
    ],
    tags: [
      "HCI", "Visual Interaction", "Data Visualization", "Design Systems", "Technical Leadership",
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

// Escapes text, then turns [label](https://url) into an external link
// and **phrase** into bold.
function formatText(value) {
  return escapeHTML(value)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function renderTimeline(listId, items) {
  const list = document.getElementById(listId);
  if (!list) return;

  list.innerHTML = items
    .map(({ title, subtitle, date, context, description, tags, link, imageURL, videoURL, images, newTab, inProgress }) => {
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
      } else if (videoURL) {
        // Looping clip with pause/play and restart controls
        media = `<div class="work-media has-video">
            <video src="${videoURL}" poster="${imageURL}" muted loop playsinline preload="metadata"${reduceMotion ? "" : " autoplay"}></video>
            <div class="video-controls">
              <button type="button" class="video-btn video-toggle" aria-label="Pause video">${ICON_PAUSE}</button>
              <button type="button" class="video-btn video-restart" aria-label="Restart video">${ICON_RESTART}</button>
            </div>
          </div>`;
      } else {
        const image = `<img src="${imageURL}" alt="" loading="lazy" />`;
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
          ${subtitle ? `<p class="work-subtitle">${escapeHTML(subtitle)}</p>` : ""}
          ${[].concat(description).map((p) => `<p class="work-desc">${formatText(p)}</p>`).join("")}
          ${tagItems ? `<ul class="tags" aria-label="Tags">${tagItems}</ul>` : ""}
          ${button}
        </div>
      </li>`;
    })
    .join("");

  list.querySelectorAll(".carousel").forEach(initCarousel);
  list.querySelectorAll(".has-video").forEach(initVideoControls);
}

const svgIcon = (path) =>
  `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">${path}</svg>`;
const ICON_PAUSE = svgIcon('<rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor"/>');
const ICON_PLAY = svgIcon('<path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" fill="currentColor"/>');
const ICON_RESTART = svgIcon('<path d="M4 12a8 8 0 1 0 2.34-5.66" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M4 4v5h5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>');

function initVideoControls(root) {
  const video = root.querySelector("video");
  const toggle = root.querySelector(".video-toggle");
  const restart = root.querySelector(".video-restart");

  // Keep the toggle's icon and label in sync with the video's actual state
  const sync = () => {
    const paused = video.paused;
    toggle.innerHTML = paused ? ICON_PLAY : ICON_PAUSE;
    toggle.setAttribute("aria-label", paused ? "Play video" : "Pause video");
    root.classList.toggle("is-paused", paused);
  };
  video.addEventListener("play", sync);
  video.addEventListener("pause", sync);
  sync();

  toggle.addEventListener("click", () => (video.paused ? video.play() : video.pause()));
  restart.addEventListener("click", () => {
    video.currentTime = 0;
    video.play();
  });
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
