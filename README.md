# Benjamin Pratt — Portfolio Website

A personal portfolio site hosted via GitHub Pages.

## Setup

1. Push this repo to GitHub (repo name can be anything).
2. Go to **Settings → Pages → Source → Deploy from branch → `main` / `/ (root)`**.
3. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

   For a cleaner URL (e.g. `https://nameA42.github.io/`) name the repo **`nameA42.github.io`** — then it deploys at the root.

## Adding or Removing Projects

Open **`js/projects.js`** — it's the only file you need to touch.

Each project is an object in the `PROJECTS` array:

```js
{
  title: "My Game",
  description: "A short description.",
  tags: ["Godot", "Platformer"],       // used for filter buttons
  url: "https://namea1.itch.io/...",   // where the card links to
  image: "assets/img/thumb.png",       // optional screenshot
  icon: "🎮"                           // optional emoji fallback
}
```

- **Add** — paste a new object into the array.
- **Remove** — delete the object.
- **Reorder** — drag objects up/down in the array.

## Adding a Thumbnail

1. Put your image in `assets/img/`.
2. Set `image: "assets/img/your-file.png"` on the project.

## Updating the Resume

The resume is currently linked from `assets/img/Ben Pratt Resume View.pdf`.
Replace that file with your updated PDF — keep the filename the same, or update the `href` in `index.html` (search for `resume-btn`).
