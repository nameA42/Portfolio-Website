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
  {
    title: "CyberSk8er",
    description: "Skate, flip, and jump off ramps to rack up points. Keep your battery charged in this cyberpunk infinite runner built with Phaser.",
    tags: ["Phaser", "Platformer", "Browser", "Arcade"],
    url: "https://namea1.itch.io/cybersk8er",
    image: "https://img.itch.zone/aW1nLzg5NjE4MzUucG5n/347x500/eSiiIj.png"
  },
  {
    title: "Suits Please",
    description: "A short parody of Papers Please set in a soviet-style dystopia. Glory to the Heartland! Built with p5.js, features an interactive tutorial.",
    tags: ["p5.js", "Browser", "Strategy", "Parody"],
    url: "https://namea1.itch.io/suits-please",
    image: "https://img.itch.zone/aW1nLzg5NjE4NjUucG5n/347x500/4WAWQX.png"
  },
  {
    title: "BloodMafia",
    description: "Play as a hitman in 1920s New York. Appease the Blood Don by dealing with goons on his turf — a difficult pixel art arcade platformer.",
    tags: ["Construct", "Platformer", "Browser", "Pixel Art"],
    url: "https://namea1.itch.io/bloodmafia",
    image: "https://img.itch.zone/aW1nLzUzNjU4NDkucG5n/347x500/4yc1G9.png"
  },
  {
    title: "In God's Image",
    description: "You are the second child of god — rule over hell forever, or suffer an early death as the lord of heaven. A text-based interactive fiction adventure.",
    tags: ["Twine", "Browser", "Adventure", "Interactive Fiction"],
    url: "https://namea1.itch.io/in-gods-image",
    image: "https://img.itch.zone/aW1nLzUxODE4MTQucG5n/347x500/zwktpX.png"
  },
  {
    title: "Watcher",
    description: "PANOPTICON. A first-person atmospheric horror experience built in Unreal Engine exploring surveillance and the gaze. Rated 5/5 stars.",
    tags: ["Unreal", "Horror", "Atmospheric", "3D"],
    url: "https://namea1.itch.io/watcher",
    image: "https://img.itch.zone/aW1nLzExNjY0ODMwLnBuZw==/347x500/QmpiDm.png"
  },
  {
    title: "WindChimes UE5",
    description: "A technical demo showcasing Unreal Engine 5's Meta Sounds system to produce realistic wind chime audio in real time.",
    tags: ["Unreal", "Audio", "Meta Sounds", "Demo"],
    url: "https://namea1.itch.io/windchimes",
    image: "https://img.itch.zone/aW1nLzE0MDM0NTEzLnBuZw==/347x500/oJQGMs.png"
  },
  {
    title: "Blades Bane",
    description: "BIGA GameJam submission — a top-down 2D physics brawler where you command units to kill orcs. Built in Godot.",
    tags: ["Godot", "Browser", "Arcade", "GameJam"],
    url: "https://namea1.itch.io/blades-bane",
    image: "https://img.itch.zone/aW1nLzEzMzA5NjQ4LnBuZw==/347x500/AY6uYr.png"
  },
  {
    title: "Ms. Ing is Missing",
    description: "A dressup auto-battler spy game. Send agents to work and solve events that pop up during the party. Made with Phaser by DripFrog Studios.",
    tags: ["Phaser", "Browser", "Strategy", "Auto Battler"],
    url: "https://namea1.itch.io/miss-ing-is-missing",
    image: "https://img.itch.zone/aW1nLzE0MDMzMTg5LnBuZw==/347x500/XoVnpo.png"
  },
  {
    title: "Base Blaster",
    description: "A CMPM 170 group prototype using Kenta Cho's crisp-game-lib. Part of a series with Number Cruncher, Morse Encoder, and Speed Binary.",
    tags: ["JavaScript", "Browser", "Course Project", "Arcade"],
    url: "https://namea1.itch.io/base-blaster",
    image: "https://img.itch.zone/aW1nLzE0MTU2NTU4LnBuZw==/347x500/P1OvT0.png"
  },
  {
    title: "CMPM171 Group Project",
    description: "A collaborative game developed as part of UCSC's CMPM 171 advanced game design course.",
    tags: ["Browser", "Course Project"],
    url: "https://namea1.itch.io/cmpm171",
    icon: "🎓"
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
