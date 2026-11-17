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
//                [label](https://url) for a link that opens in a new tab.
//                An item can also be { figures: [...] } to show charts
//                between paragraphs (see renderDescriptionItem)
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
      { h: "Motivation" },
      "What if you could feel virtual surfaces without losing the ability to interact with the physical world? Phantom Touch explores this question through a **DIY haptic glove built from low-cost components**. The project investigates **wearable vibrotactile feedback** while keeping the **fingertips exposed** for touching real objects.",
      "This design responds to a challenge in hand-tracked XR: users can **reach for virtual objects** and gesture naturally with their bare hands, but interactions such as typing can feel ungrounded without tactile feedback. Existing haptic gloves offer ways to address this, but their hardware can limit experimentation with actuator placement and configuration. Phantom Touch takes a **modular approach**, making it easier to reposition or replace components as the design evolves.",
      { h: "Related Work" },
      "Prior research helped shape that approach. [Preechayasomboon and Rombokas (2021)](https://doi.org/10.3389/frvir.2021.738613) demonstrated **Haplets**, finger-worn vibrotactile devices that leave the fingertips free, which informed the placement of Phantom Touch's actuators on the backs of the fingers. [Tran et al. (2023)](https://doi.org/10.1145/3544548.3581473) examined how tactile feedback through the fingernail can enrich on-body touch input, including button-like sensations. [Chan et al. (2021)](https://doi.org/10.1109/WHC49131.2021.9517177) introduced **Hasti**, which synthesizes vibrotactile feedback and contact sounds during virtual texture interactions, pointing to a possible future direction for Phantom Touch.",
      { h: "Building the Glove", label: "Phase 1 (Complete)" },
      { h: "Prototype", level: 2 },
      "I began by assembling a low-cost prototype and establishing a way to trigger haptic patterns. The glove uses one **ERM vibration motor and DRV2605L motor driver per finger**. Each DRV2605L has a **fixed I²C address (0x5A) that cannot be changed**, so with all five on one bus, a command meant for one finger would reach every finger. A **TCA9548A 8-channel I²C multiplexer** solves this: it sits between the ESP32-S3 and the drivers, gives each driver its own channel, and lets the firmware select one finger at a time. It needs only two pins on the ESP32-S3, which has just two I²C controllers, and the second runs the OLED. The trade-off is that fingers are updated **one after another rather than at once**, which shows up later in the latency results. The glove also has a 1200 mAh LiPo battery with power-management circuitry, three capacitive touch sensors, and an OLED display for menu navigation and debugging.",
      "An **ESP32-S3** gives the prototype both Bluetooth Low Energy (BLE) and 2.4 GHz Wi-Fi connectivity, so I can compare the options as the system develops. The electronics sit on flexible perfboard attached with Velcro, making the fabric removable for cleaning. Replaceable adhesive tabs hold the motors in place while I investigate their placement.",
      "The prototype can already play haptic patterns from its embedded interface and a PC-based BLE client. With this basic feedback loop working, I **measured latency over BLE and Wi-Fi** to choose how commands should reach the glove in the next phase.",
      { h: "Latency Evaluation", level: 2 },
      "**Methods:** I added a latency benchmark to the firmware and wrote a **Python script on the PC that sends test commands and records the results**. Commands go out over **BLE, Wi-Fi (UDP) or wired USB**, with USB as the baseline. The glove timestamps each command twice, on arrival and once its motor drivers have been written, and reports both over USB. Continuous clock synchronization over that USB link keeps the PC and glove clocks aligned to within **±0.3 ms**. Every measurement therefore covers only the **outgoing trip**, from the moment a command leaves the PC until the glove has commanded the motor; the timestamps are sent back afterwards, and their travel time back to the PC is not counted.",
      "Each link ran the same test matrix of **4,450 commands**, **22,250** across five configurations. It covered **one to five fingers per command** in random order, **five fingers as one command versus five separate commands**, sustained streams from **10 to 200 commands per second**, and an **emergency stop with all five motors running**. For Wi-Fi, I also measured the effect of its default **power-saving mode** and of **sharing the radio with BLE**. Bench testing also exposed a hardware issue: both radios connected reliably only at reduced transmit power, which I am now investigating as a possible power-supply problem.",
      {
        figures: [
          {
            id: "percentiles",
            src: "images/projects/phantom-touch/latency-percentiles.png",
            srcDark: "images/projects/phantom-touch/latency-percentiles-dark.png",
            alt: "Median, 95th and 99th percentile latency per link: USB 6, 9 and 10 ms, none lost; BLE 17, 35 and 46 ms, none lost; Wi-Fi 10, 35 and 77 ms, none lost; Wi-Fi with power saving 72, 177 and 222 ms, none lost; Wi-Fi with power saving and BLE coexistence 31, 107 and 181 ms, 3.1% of commands lost.",
            caption: "**Median, p95 and p99 by link**, pooled over 1,600 commands per link (1–5 fingers and emergency stop). Labels give the three values and the share of commands lost. Wi-Fi has the lower median, but BLE has fewer very late commands.",
            wide: true,
          },
        ],
      },
      "Two Wi-Fi configurations were set aside after this comparison (@fig:percentiles). With **power saving on**, the radio sleeps between the router's beacons and only collects waiting messages when it wakes, which pushed the median to **72 ms** and the 99th percentile to **222 ms**. With **power saving on and BLE running**, the two radios share one antenna and take turns, so Wi-Fi commands waited for BLE's time slots: about **3% of commands were lost** and the 99th percentile reached **181 ms**. On the ESP32-S3, Wi-Fi power saving cannot be turned off while BLE is active, so this is also the only way to run both radios at once. Neither configuration is usable for haptic feedback, so the rest of the analysis compares USB, BLE and Wi-Fi with power saving off.",
      {
        figures: [
          {
            id: "fingers",
            src: "images/projects/phantom-touch/latency-by_fingers.png",
            srcDark: "images/projects/phantom-touch/latency-by_fingers-dark.png",
            alt: "Box plots of latency for one to five fingers per command over USB, BLE and Wi-Fi with power saving off. USB medians step up from about 3.6 to 7.8 ms. BLE sits between about 15 and 19 ms and Wi-Fi between about 8 and 12 ms, with much wider spread.",
            caption: "**Fingers per command** over USB, BLE and Wi-Fi (power saving off). Boxes span the 25th to 75th percentile and whiskers the 5th to 95th. Each extra finger adds about 1 ms, clearest on the USB baseline.",
            wide: true,
          },
        ],
      },
      "On the USB baseline, latency rises by about **1 ms per finger** (@fig:fingers), from a median of **3.6 ms** for one finger to **7.8 ms** for five. The glove's timestamps place the whole increase in the I²C stage, while transfer time over the link stays constant. Because the drivers share one address, the multiplexer must switch to each finger's channel before that driver can be written, so fingers are updated one after another on a 100 kHz bus. The radios carry the same cost, but their own variation largely hides it.",
      "**Results and Conclusion:** **Based on these measurements, BLE is the better wireless link for the glove.** Although Wi-Fi had the lower median (**Wi-Fi 10 ms vs BLE 17 ms**), BLE had **fewer very late commands**: 99th percentile **BLE 46 ms vs Wi-Fi 77 ms** (@fig:percentiles). For touch feedback, consistency matters more than raw speed: Wi-Fi's occasional very late pulse is more disruptive than BLE's steady extra few milliseconds. BLE also avoids keeping Wi-Fi power saving off, which likely costs battery (not yet measured).",
      "**Limitations:** Each timing runs from the moment the PC sent a command (over USB, BLE or Wi-Fi) to the moment the glove finished writing it to the motor driver. It does not include the time the ERM motor takes to spin up, or whether the vibration felt on time to the wearer. All runs were on a bench, close to the router. Once the Unity prototype is working, Phase 2 will measure the full path, from a key press in Unity to the vibration on the finger, and test with participants whether they notice a delay.",
      { h: "Connecting XR Interactions", label: "Phase 2 (In Progress)" },
      "The next step is to connect virtual interaction events to the glove. I plan to use a **Unity keyboard prototype** in which each key produces two tactile events: one when a finger touches the key and another when it is pressed. To relay these events to individual actuators, I will evaluate existing BLE tools or build a custom tool if current options do not support the data capture, analysis, and frequency control I need.",
      "Early **Meta Quest 3** experiments also surfaced a hardware constraint: electronics mounted on the back of the hand appeared to interfere with hand tracking. I plan to move them to a wristband and then reassess tracking performance. Once the system is integrated, I can examine **touch-to-haptic latency, typing speed and accuracy, tracking performance, and user experience**.",
      { h: "Future Work" },
      "Together, these phases establish a platform for exploring how wearable feedback can support interaction in XR. Future work could compare ERM motors with **LRAs or voice-coil actuators**, then investigate how actuator choice affects tactile perception. Building on Hasti, I also hope to explore **texture feedback** informed by properties in 3D surface maps, such as normal and roughness maps. Tools such as UEVR and flat-to-VR mods may offer additional environments for testing the interface.",
      { h: "Research Direction" },
      "**Phantom Touch reflects the kind of research I want to pursue during my PhD: developing novel physical interfaces and investigating how they shape human interaction with virtual environments.** Through this independent work, I'm building experience in **literature-informed experimental design, embedded systems, XR development, and instrumented prototyping**. I'm eager to bring these capabilities into a collaborative XR research lab, working with researchers to **refine interaction techniques, conduct perceptual evaluations, and develop more effective wearable interfaces for immersive computing**.",
    ],
    tags: [
      "Wearable Haptics", "Multimodal Interaction", "Tactile Perception", "XR Interfaces",
    ],
    link: "",
    imageURL: "media/thumbnails/phantom-touch-square-poster.jpg",
    videoURL: "media/thumbnails/phantom-touch-square.mp4",
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
      "Embedded Systems", "Wireless Connectivity", "Android Development", "Portable Hardware Design",
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
    title: "Robo-Barista",
    subtitle: "VR-Guided Robot Manipulation",
    date: "2026",
    context: "Personal project",
    inProgress: true,
    description: [
      "What if teaching a robot a new task were as intuitive as demonstrating it with your own hands in VR? That's the idea behind Robo-Barista, an ongoing project exploring **VR teleoperation and robot learning from human demonstrations**. I'm developing an interface that uses a **6DoF VR controller to manipulate a six-axis robotic arm**, with the goal of recording movements and eventually training the robot to reproduce tasks. Coffee preparation is just the first challenge.",
      "The initial focus is establishing **reliable VR-to-robot control**, translating controller movements into robotic actions while accounting for **coordinate transformations, motion constraints, and latency**. I plan to capture **timestamped motion trajectories** for future learning experiments.",
      "For the first test scenario, the robot will **replace coffee pods**. I've retrofitted the coffee maker with a **3D-printed sector gear and stepper-driven pinion** to automate lid operation. A **non-contact water-level sensor** and pump manage refilling, while a **time-of-flight (ToF) sensor** verifies cup placement. An **ESP32-S3 running micro-ROS** coordinates the embedded hardware.",
      "This project combines my experience in **XR development, spatial interaction design, and hardware prototyping** to connect human movement with robotic control. Through it, I aim to deepen my understanding of **robot kinematics, motion planning, and learning from demonstrations**, investigating how immersive interfaces can make robotic manipulation more intuitive and accessible.",
    ],
    tags: ["VR Teleoperation", "Human-Robot Interaction", "ESP32", "Robotics", "3D Printing"],
    link: "",
    images: [
      { src: "images/thumbnails/square/vr-robot-arm.jpg", alt: "3D-printed, servo-driven 6-axis robot arm held up on a desk in front of a monitor" },
      { src: "images/projects/robot-arm/coffee-maker-lid.jpg", alt: "Single-serve coffee maker retrofitted with a stepper motor and 3D-printed sector gear that opens and closes its lid" },
    ],
    newTab: false,
  },
  {
    title: "Flow State Timer",
    subtitle: "Pomodoro, With Fewer Interruptions.",
    date: "2026",
    context: "Personal project",
    description: [
      "Getting started is usually the hardest part of any task. But once I'm finally focused and making progress, I want to finish the task at hand, not stop halfway through because a timer says it's time for a break. Unfortunately, that's exactly what most Pomodoro timers do.",
      "So I decided to build my own, with two simple rules: **don't interrupt me when I'm focused**, and **don't let my five-minute breaks turn into thirty**.",
      "The timer starts with a traditional **25-minute countdown**, but instead of sounding an alarm, it quietly transitions into **Flow State mode**, counting upward until I'm ready to stop. Breaks, however, are a different story. When a planned break ends, the timer tracks the extra minutes and triggers a **repeating haptic reminder** until I stop it. It's deliberately annoying, and that's kind of the point.",
      "What started as a weekend project built from spare electronics lying around became a functional physical interface combining an **ESP8266, OLED display, capacitive touch controls, and vibration motor**. It also **logs focused work sessions across different projects to Arduino Cloud**, allowing me to track my productivity over time. It's since become my **daily driver**.",
      "Beyond solving a personal frustration, this project demonstrates my ability to **design and prototype physical interfaces**, combining **embedded programming, sensor integration, haptic feedback, and cloud-connected hardware**. These are the same foundational skills I'm building upon in my work on **wearable XR interfaces**, where thoughtful hardware design and tactile feedback can enable more intuitive interactions between people and technology.",
    ],
    tags: [
      "Tangible Interfaces", "Haptic Interaction", "Physical Computing", "Human-Centered Design",
    ],
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
    title: "Blending Realities",
    subtitle: "Less Setup, More XR.",
    date: "Feb 2024",
    context: "Workshop · UT Austin · With Bezi, a browser-based XR prototyping platform",
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
    title: "Unity Optimization for Meta Quest",
    subtitle: "More FPS, Less Nausea.",
    date: "Nov 2023",
    context: "Talk · UT Austin",
    description: [
      "You can build the most visually stunning and immersive VR experience, but none of it matters if the headset struggles to maintain a stable frame rate. Poor performance can quickly turn immersion into discomfort, leaving participants reaching for a bottle of water or, in the worst case, a bucket.",
      "To address this challenge, I delivered a **technical talk at UT Austin**, focusing on optimizing Unity-based VR applications for standalone Meta Quest headsets.",
      "The talk explored practical techniques for balancing **visual fidelity, rendering performance, and user comfort**, including **occlusion culling, static batching, Level of Detail (LOD), baked lighting and shadows, and light and reflection probes**. I also demonstrated advanced techniques such as **dynamically switching between precomputed lightmaps** to simulate interactive lighting changes without the performance overhead of real-time lighting.",
      "Through hands-on demonstrations, participants learned to identify rendering bottlenecks, monitor frame rates, and evaluate optimization strategies using **Meta Quest Developer Hub and OVR Metrics Tool**.",
      "The goal was to help students build **visually compelling, performance-efficient VR experiences** that minimize performance-related discomfort and provide a more reliable foundation for immersive interaction and user studies.",
    ],
    tags: [
      "XR Performance Optimization", "Real-Time Rendering", "Unity", "Meta Quest", "Usability",
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
    title: "Beheld Health",
    subtitle: "Engineering Human-Centered Interfaces",
    date: "2024–Present",
    context: "Frontend & UX Engineer · Beheld Health Inc.",
    description: [
      "**A technically sophisticated system is only useful if people can use it effectively.** At Beheld Health, a healthcare startup originating from **UT Austin's Dell Medical School**, I work at the intersection of **UX design, software engineering, and human-centered technology**.",
      "As the **Frontend and UX Engineer**, I lead the development of a production **React Native application** supporting healthcare outreach teams. My work involves designing intuitive scheduling and task-management interfaces, integrating communication through **Twilio**, and translating complex workflows into accessible experiences. I also oversee **frontend architecture, reusable UI components, performance optimization, and application reliability** across iOS and Android, collaborating closely with researchers and healthcare professionals.",
      "**This experience has strengthened my ability to design, develop, and deploy user-centered applications across mobile platforms.** I aim to bring these skills into XR research labs, contributing to **intuitive spatial interfaces, companion mobile applications for wearable devices, and experimental systems** that connect immersive software with physical hardware.",
    ],
    tags: [
      "Mobile Performance Optimization", "Human-Centered Design", "Cross-Platform Development",
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
    title: "Clarista",
    subtitle: "Building a No-Code Data Platform",
    date: "2020–2022",
    context: "Frontend Lead · Clarista Inc.",
    description: [
      "**Complex data doesn't have to mean complicated interfaces.** At Clarista, I **led the frontend team** developing a no-code platform that made data transformation, exploration, and visualization more intuitive through visual interaction.",
      "Our core deliverables included **Flows**, a drag-and-drop data transformation editor built with **React, Redux, and D3.js**, allowing users to construct complex data pipelines without writing code. We also developed **data cataloging, lineage visualization, and a real-time analytics dashboard builder**, enabling users to explore data relationships and create customizable visualizations. My responsibilities included **frontend architecture, technical leadership, rapid prototyping, and developing a reusable design system** across these modules.",
      "**This experience strengthened my ability to translate complex information and workflows into intuitive visual interfaces.** I aim to bring these skills into XR research labs, contributing to **spatial interface design, interactive data visualization, reusable UI systems, and rapid prototyping** of experimental applications.",
    ],
    tags: [
      "Data Visualization", "Design Systems", "Technical Leadership", "MERN Stack",
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
// With figs (from numberFigures), @fig:id becomes a "Figure N" link to that figure.
function formatText(value, figs) {
  let html = escapeHTML(value)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  if (figs) {
    html = html.replace(/@fig:([\w-]+)/g, (m, id) => {
      const f = figs.get(id);
      return f ? `<a class="fig-ref" href="#${f.anchor}">Figure ${f.n}</a>` : m;
    });
  }
  return html;
}

// Numbers an entry's figures in reading order, like a paper: Figure 1, Figure 2...
// Returns Map id -> { n, anchor }; figures without an id are numbered but can't be cited.
function numberFigures(title, description) {
  const slug = String(title).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const figs = new Map();
  let n = 0;
  [].concat(description).forEach((item) => {
    (item && item.figures || []).forEach((f) => {
      n += 1;
      const anchor = `${slug}-fig-${f.id || n}`;
      f._num = { n, anchor };
      if (f.id) figs.set(f.id, f._num);
    });
  });
  return figs;
}

// A description item is one of:
//   "text"                      a paragraph (supports **bold** and [label](url))
//   { h, level, label }         a paper-style heading: level 1 = section (default),
//                               level 2 = subsection; label is an optional line above
//                               the title, e.g. "Phase 1 (Complete)"
//   { figures: [...] }          charts shown between paragraphs. Each figure:
//                               { id, src, srcDark, alt, caption, wide }. Figures are
//                               numbered per entry ("Figure 1."); cite one in text with
//                               @fig:<id>. srcDark replaces src in the dark theme; wide
//                               spans the full text column.
function renderDescriptionItem(item, figs) {
  if (typeof item === "string") return `<p class="work-desc">${formatText(item, figs)}</p>`;
  if (item.h) {
    const tag = item.level === 2 ? "h5" : "h4";
    const label = item.label ? `<span class="work-h-label">${escapeHTML(item.label)}</span>` : "";
    return `<${tag} class="work-h work-h${item.level === 2 ? 2 : 1}">${label}<span class="work-h-title">${escapeHTML(item.h)}</span></${tag}>`;
  }
  const figures = (item.figures || [])
    .map(({ src, srcDark, alt, caption, wide, _num }) => {
      const img = (file, cls, hidden) =>
        `<a class="${cls}" href="${file}" target="_blank" rel="noopener"${hidden ? ' aria-hidden="true" tabindex="-1"' : ""}>
          <img src="${file}" alt="${hidden ? "" : escapeHTML(alt || "")}" loading="lazy" />
        </a>`;
      const label = _num ? `<span class="fig-label">Figure ${_num.n}.</span> ` : "";
      return `<figure class="work-figure${wide ? " is-wide" : ""}"${_num ? ` id="${_num.anchor}"` : ""}>
          ${img(src, "fig-light", false)}
          ${srcDark ? img(srcDark, "fig-dark", true) : ""}
          ${caption || label ? `<figcaption>${label}${formatText(caption || "", figs)}</figcaption>` : ""}
        </figure>`;
    })
    .join("");
  return `<div class="work-figures">${figures}</div>`;
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
              <button type="button" class="video-btn video-expand" aria-label="Enlarge video">${ICON_EXPAND}</button>
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
          ${(() => {
            const figs = numberFigures(title, description);
            return [].concat(description).map((d) => renderDescriptionItem(d, figs)).join("");
          })()}
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

const ICON_EXPAND = svgIcon('<path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>');

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

// ---------- Lightbox: charts and timeline videos open large, centered ----------
// Native <dialog>: centered over a backdrop, Esc closes, focus stays inside.
const ICON_CLOSE = svgIcon('<path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>');
let lightbox;
let lightboxRestore = null; // runs on close (e.g. resume the inline video)

function getLightbox() {
  if (lightbox) return lightbox;
  lightbox = document.createElement("dialog");
  lightbox.className = "lightbox";
  lightbox.setAttribute("aria-label", "Enlarged view");
  lightbox.innerHTML = `
    <button type="button" class="lightbox-close" aria-label="Close">${ICON_CLOSE}</button>
    <div class="lightbox-content"></div>
    <p class="lightbox-caption"></p>`;
  document.body.appendChild(lightbox);
  lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
  // A click on the backdrop lands on the dialog itself, not its children
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener("close", () => {
    lightbox.querySelector(".lightbox-content").innerHTML = ""; // stops the enlarged video
    document.documentElement.classList.remove("lightbox-open");
    if (lightboxRestore) lightboxRestore();
    lightboxRestore = null;
  });
  return lightbox;
}

function openLightbox(node, captionHTML, label, onClose) {
  const box = getLightbox();
  box.querySelector(".lightbox-content").replaceChildren(node);
  const caption = box.querySelector(".lightbox-caption");
  caption.innerHTML = captionHTML || "";
  caption.hidden = !captionHTML;
  box.setAttribute("aria-label", label || "Enlarged view");
  lightboxRestore = onClose || null;
  document.documentElement.classList.add("lightbox-open");
  box.showModal();
  box.querySelector(".lightbox-close").focus();
}

function openFigure(figure) {
  // Enlarge whichever rendering (light or dark) is showing right now
  const link = [...figure.querySelectorAll("a")].find((a) => a.offsetParent !== null) || figure.querySelector("a");
  const src = figure.querySelector(".fig-light img");
  const img = document.createElement("img");
  img.src = link.getAttribute("href");
  img.alt = src ? src.alt : "";
  const caption = figure.querySelector("figcaption");
  openLightbox(img, caption ? caption.innerHTML : "", "Enlarged chart");
}

function openVideo(root) {
  const inline = root.querySelector("video");
  const wasPlaying = !inline.paused;
  inline.pause();
  const video = document.createElement("video");
  video.src = inline.currentSrc || inline.src;
  video.poster = inline.poster;
  video.controls = true; // full controls here, including sound and fullscreen
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.addEventListener("loadedmetadata", () => (video.currentTime = inline.currentTime), { once: true });
  if (!reduceMotion) video.autoplay = true;
  const title = root.closest(".work-item")?.querySelector(".work-title")?.textContent.trim();
  openLightbox(video, "", title ? `${title} video` : "Enlarged video", () => {
    inline.currentTime = video.currentTime || inline.currentTime;
    if (wasPlaying) inline.play();
  });
}

// One delegated listener covers every list, including re-rendered ones
document.addEventListener("click", (e) => {
  const figureLink = e.target.closest(".work-figure a");
  if (figureLink) {
    e.preventDefault(); // the link stays as a no-JS fallback to the full image
    openFigure(figureLink.closest(".work-figure"));
    return;
  }
  const expand = e.target.closest(".video-expand");
  const video = e.target.closest(".has-video video");
  if (expand || video) {
    e.preventDefault();
    openVideo((expand || video).closest(".has-video"));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  renderTimeline("work-list", work);
  renderTimeline("personal-list", personal);
  renderTimeline("talks-list", talks);
  renderTimeline("prototypes-list", prototypes);
});
