/**
 * ============================================================
 *  PROJECTS DATA
 * ============================================================
 *  To ADD a project: copy one of the objects below and fill
 *  in your info. Add it anywhere inside the array.
 *
 *  To REMOVE a project: delete its entire { ... } block.
 *
 *  Fields:
 *    title       (required) - Name of the project
 *    description (required) - Short 1-2 sentence description
 *    tags        (required) - Array of strings, e.g. ["Godot", "Platformer"]
 *                             Tags automatically appear as filter buttons.
 *    url         (required) - Link when the card is clicked (itch.io, GitHub, etc.)
 *    image       (optional) - URL or path to a thumbnail image
 *    icon        (optional) - Emoji shown when no image is provided. Default: "🎮"
 * ============================================================
 */

const PROJECTS = [

  // -------------------------------------------------------
  //  GAMES
  // -------------------------------------------------------
  {
    title: "CyberSk8er",
    description: "As lead coder on a four-person team, I designed and built the physics systems for this cyberpunk infinite runner. Skate, flip, and launch off ramps to rack up points — but keep your battery charged or it's game over.",
    tags: ["Phaser", "Platformer", "Browser", "Arcade", "Team"],
    url: "https://namea1.itch.io/cybersk8er",
    image: "https://img.itch.zone/aW1nLzg5NjE4MzUucG5n/347x500/eSiiIj.png"
  },
  {
    title: "Suits Please",
    description: "A solo parody of Papers Please built in p5.js for class. Enforce the dress code in a soviet-style dystopia — Glory to the Heartland! Features a fully interactive tutorial.",
    tags: ["p5.js", "Browser", "Strategy", "Parody", "Solo"],
    url: "https://namea1.itch.io/suits-please",
    image: "https://img.itch.zone/aW1nLzg5NjE4NjUucG5n/347x500/4WAWQX.png"
  },
  {
    title: "BloodMafia",
    description: "I handled the majority of coding and art for this class project, building all core mechanics and systems. Play as a hitman cleaning up 1920s New York for the Blood Don in a difficult pixel art arcade platformer.",
    tags: ["Construct", "Platformer", "Browser", "Pixel Art", "Team"],
    url: "https://namea1.itch.io/bloodmafia",
    image: "https://img.itch.zone/aW1nLzUzNjU4NDkucG5n/347x500/4yc1G9.png"
  },
  {
    title: "In God's Image",
    description: "A solo Twine interactive fiction piece made for class. Two paths — heaven and hell — mirror each other as choices from a moral blank slate, showing good and evil as perspectives rather than absolutes. Both roads end in death, and love.",
    tags: ["Twine", "Browser", "Adventure", "Interactive Fiction", "Solo"],
    url: "https://namea1.itch.io/in-gods-image",
    image: "https://img.itch.zone/aW1nLzUxODE4MTQucG5n/347x500/zwktpX.png"
  },
  {
    title: "Watcher",
    description: "PANOPTICON. A solo first-person atmospheric horror experience built in Unreal Engine for class — the horror isn't a monster, it's the dread of being seen. Rated 5/5 stars.",
    tags: ["Unreal", "Horror", "Atmospheric", "3D", "Solo"],
    url: "https://namea1.itch.io/watcher",
    image: "https://img.itch.zone/aW1nLzExNjY0ODMwLnBuZw==/347x500/QmpiDm.png"
  },
  {
    title: "WindChimes UE5",
    description: "I built the wind chime simulation and integrated my teammates' work for this class technical demo. Each chime is physically simulated — pitch and resonance generated procedurally from pipe length and strike velocity using UE5's Meta Sounds system.",
    tags: ["Unreal", "Audio", "Meta Sounds", "Demo", "Team"],
    url: "https://namea1.itch.io/windchimes",
    image: "https://img.itch.zone/aW1nLzE0MDM0NTEzLnBuZw==/347x500/oJQGMs.png"
  },
  {
    title: "Blades Bane",
    description: "A solo BIGA GameJam entry built in Godot. You're not commanding the hero — you ARE the sword. Command units to slay orcs in this top-down physics brawler, where friendly fire is always on.",
    tags: ["Godot", "Browser", "Arcade", "GameJam", "Solo"],
    url: "https://namea1.itch.io/blades-bane",
    image: "https://img.itch.zone/aW1nLzEzMzA5NjQ4LnBuZw==/347x500/AY6uYr.png"
  },
  {
    title: "Ms. Ing is Missing",
    description: "Built with the same four-person team as CyberSk8er, I led the coding including the random agent generation and clue systems. A dressup auto-battler spy game — outfit your agents and send them to solve the chaos unfolding at the party.",
    tags: ["Phaser", "Browser", "Strategy", "Auto Battler", "Team"],
    url: "https://namea1.itch.io/miss-ing-is-missing",
    image: "https://img.itch.zone/aW1nLzE0MDMzMTg5LnBuZw==/347x500/XoVnpo.png"
  },
  {
    title: "Base Blaster",
    description: "My solo entry in a CMPM 170 series of micro-games built with Kenta Cho's crisp-game-lib. Race to convert numbers into an ever-increasing base before time runs out — a deceptively simple arcade survival challenge.",
    tags: ["JavaScript", "Browser", "Course Project", "Arcade", "Solo"],
    url: "https://namea1.itch.io/base-blaster",
    image: "https://img.itch.zone/aW1nLzE0MTU2NTU4LnBuZw==/347x500/P1OvT0.png"
  },

  // -------------------------------------------------------
  //  RESEARCH
  // -------------------------------------------------------
  {
    title: "LLM Game Rule Understanding Through Out-of-Distribution Fine-Tuning",
    description: "Best Paper Nominee — AIIDE 2025. As 2nd author, I designed and ran the experiments, led the analysis, and co-wrote the paper. We introduce a framework for generating datasets to benchmark and train LLMs on rule understanding using Solitaire card game variants and a custom GDL, showing fine-tuning improves both in- and out-of-distribution rule comprehension.",
    tags: ["Research", "LLM", "Game AI", "AIIDE 2025", "Team"],
    url: "https://ojs.aaai.org/index.php/AIIDE/article/view/36804",
    icon: "📄"
  },
  {
    title: "Rule Synergy Analysis using LLMs: State of the Art and Implications",
    description: "Under review — IEEE Transactions on Games. As 2nd author, I ran and analyzed experiments and conducted deep analysis of LLM failure mode patterns. We built a Slay the Spire card synergy dataset and evaluated LLMs on classifying positive, negative, and neutral card interactions.",
    tags: ["Research", "LLM", "Game AI", "IEEE ToG", "Team"],
    url: "https://arxiv.org/abs/2508.19484",
    icon: "📄"
  },
  {
    title: "Layered Selection Prompting (Pewter Classic)",
    description: "I contributed conceptual design, key feature implementation, and bug fixing to this research tool. LSP lets users shape a top-down 2D game world by prompting directly within the game space, with an LLM agent (Pewter) acting as the implementer of user intent.",
    tags: ["Research", "LLM", "TypeScript", "Game AI", "Team"],
    url: "https://github.com/collectioncard/Layered-Selection-Prompting/",
    icon: "🤖"
  },
  {
    title: "Pewter Platformer",
    description: "I led a team of undergraduates to explore whether LLMs can reason about physics, building on the Pewter agent framework to control a platformer via LangChain tool calls. I scoped the research direction, built key prototypes, and guided the team's expansion of each feature.",
    tags: ["Research", "LLM", "TypeScript", "Game AI", "Team"],
    url: "https://github.com/nameA42/Pewter-The-Platformer",
    icon: "🤖"
  },
  {
    title: "WFC Demo",
    description: "A solo JavaScript implementation of the Wave Function Collapse algorithm built as a teaching resource. Designed to help students understand WFC from the ground up through a clean, readable implementation.",
    tags: ["Research", "JavaScript", "Teaching", "Procedural Generation", "Solo"],
    url: "https://github.com/nameA42/WFCDemo",
    icon: "🧩"
  },

  // -------------------------------------------------------
  //  MODDING
  // -------------------------------------------------------
  {
    title: "Disaster Prone",
    description: "A multi-month live-service Valheim mod built solo for Twitch streamer Narc. Weighted random disasters — meteors, fish rain, 100 dragons — strike on a timer with full Twitch chat integration, chatter-named mobs, point redemption triggers, OBS overlays, and a boss-scaled difficulty system.",
    tags: ["Modding", "C#", "Valheim", "Twitch", "Solo"],
    url: "https://github.com/nameA42/ValheimDisasterProneMod",
    icon: "💥"
  },
  {
    title: "AOC Meters",
    description: "When Ashes of Creation launched with no meters and no modding support, I built my own using Python computer vision on the game's chat log. Shared with my guild, the tool parsed damage and XP in real time with deduplication logic to handle the game's unstable and repetitive chat UI.",
    tags: ["Modding", "Python", "Computer Vision", "Solo"],
    url: "https://github.com/nameA42/AOC_Meters",
    icon: "📊"
  },
  {
    title: "Moggies YouTube Mods",
    description: "Solo modding work for Moggies (45K YouTube subs), a challenge-run gaming channel. I built fully custom mods for each video — Fallout 4, Rimworld, and Kenshi — live-updating them during recording and digging through existing mods to make each challenge concept possible.",
    tags: ["Modding", "Solo"],
    url: "https://www.youtube.com/@Moggies",
    icon: "🎬"
  },

  // -------------------------------------------------------
  //  ADD YOUR NEXT PROJECT HERE — copy the template below:
  // -------------------------------------------------------
  // {
  //   title: "My New Game",
  //   description: "A short description of what the game is about.",
  //   tags: ["Godot", "Platformer"],
  //   url: "https://namea1.itch.io/my-new-game",
  //   image: "assets/img/my-new-game.png",  // local file or external URL
  //   icon: "🎮"                            // emoji fallback if no image
  // },
];
