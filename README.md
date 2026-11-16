# somsubhro_portfolio

A high-contrast **Neobrutalism Desktop OS Portfolio** built with React, TypeScript, and Tailwind CSS for **Somsubhra Chakraborty** (Animator, Visual Designer & Storyteller).

---

## 🎨 Theme & Aesthetic Configuration

- **Canvas Grid Background**: `#F4F4F0` with subtle geometric grid lines (`.bg-grid-canvas`).
- **Stark Black Ink**: `#000000` for all text, 3px solid borders, and hard offset drop shadows.
- **Vibrant Accent Colors**:
  - **Acid Yellow**: `#FFE600`
  - **Hot Pink**: `#FF499E`
  - **Electric Cyan**: `#00F0FF`
  - **Cyber Lime**: `#23F365`
- **Typography**:
  - Display: `Space Grotesk` & `Archivo Black`
  - Monospace: `JetBrains Mono`

---

## 🖥️ Portfolio Architecture

1. **Top Status Bar (`TopStatusBar.tsx`)**:
   - Bold Brand Badge: `SOMSUBHRA.OS`
   - Live Status Pill: `● AVAILABLE FOR CREATIVE WORK`
   - Quick anchor links (`ABOUT_ME`, `CREATIVE_LAB`, `OFFLINE_MODE`)
   - Digital system clock

2. **Window 1 — `ABOUT_ME.exe` (Acid Yellow `#FFE600`)**:
   - High-contrast visual card with stylized `FRAME 01 / 24 FPS` animation viewfinder badge.
   - Oversized display name: **Somsubhra Chakraborty**.
   - Hot pink highlight badge: **Animator, Visual Designer & Storyteller**.
   - Personal bio and tactile primary CTA button (`EXPLORE MY CRAFT ↓`).

3. **Window 2 — `THE_CREATIVE_LAB.psd` (Electric Cyan `#00F0FF`)**:
   - Photoshop-inspired document context bar and tool shortcuts (`[V]`, `[M]`, `[L]`, `[B]`, `[P]`, `[T]`).
   - Prominent callout banner: *"Building emotional depth and character movement through every frame."*
   - Interactive Bento Grid showcasing the 6 daily creative skills:
     - Adobe Photoshop
     - Adobe Illustrator
     - Animation
     - Visual Storytelling
     - Poster Design
     - Textures & Compositions
   - Interactive layer inspector deep-dive panel.

4. **Window 3 — `OFFLINE_MODE.sav` (Hot Pink `#FF499E`)**:
   - Quote banner: *"Who you are as a person matters just as much as the work you create."*
   - Four distinct Neobrutalist sub-cards:
     1. **Strategy & Focus**: Playing Carrom and honing patience, precision, and angles.
     2. **Gaming Worlds**: Retro game cartridge card (*Genshin Impact*, *Neverness to Everness*, *Free Fire*, *Call of Duty: Mobile*).
     3. **Anime Inspiration**: Expressive storytelling, camera shifts, and kinetic *sakuga* motion.
     4. **Vibe & Community**: Kind, approachable, mentoring, and helping with Adobe design troubleshooting.

5. **Floating Bottom Dock (`BottomDock.tsx`)**:
   - Persistent dock pills for `ABOUT_ME.exe`, `THE_CREATIVE_LAB.psd`, and `OFFLINE_MODE.sav`.
   - Smooth restore & scroll mechanics: clicking any pill instantly un-minimizes/reopens and scrolls to that window.

6. **Footer (`Footer.tsx`)**:
   - Bold tactile social & contact links (Email, LinkedIn, Instagram, ArtStation, GitHub) and back-to-top trigger.

---

## 🚀 Development & Build

```bash
# Start local development server
npm run dev

# Compile TypeScript and build for production
npm run build

# Preview production bundle
npm run preview
```
