# Neobrutalism Desktop OS Portfolio

A modern React + Tailwind CSS personal portfolio web application built with a bold, high-contrast **Neobrutalism Desktop Aesthetic** (inspired by the iconic 21st.dev `ekmas` template).

---

## 🎨 Theme & Aesthetic Configuration

### 1. Canvas & Ink
- **Canvas Grid Background**: `#F4F4F0` with subtle geometric grid lines (`.bg-grid-canvas`).
- **Stark Black Ink**: `#000000` for all text, borders, and hard shadows.

### 2. Vibrant Accent Palette
- **Acid Yellow**: `#FFE600` (`bg-brutal-yellow`, `hover:bg-[#FFF04D]`)
- **Hot Pink**: `#FF499E` (`bg-brutal-pink`, `hover:bg-[#FF6DB2]`)
- **Electric Cyan**: `#00F0FF` (`bg-brutal-cyan`, `hover:bg-[#4DF4FF]`)
- **Cyber Lime**: `#23F365` (`bg-brutal-lime`)
- **Neon Purple**: `#A055FF` (`bg-brutal-purple`)

### 3. Typography
- **Display Typography**: `Space Grotesk` (weights 400-700) & `Archivo Black` for bold retro headers.
- **Monospace Typography**: `JetBrains Mono` for window tags, terminal shell, and badges.

### 4. Neobrutalist Borders & Hard Drop Shadows
- **Solid Borders**: `border-[3px] border-black` (`.border-brutal`)
- **Hard Offset Shadows**:
  - Standard Window / Card: `shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]` (`.shadow-brutal`)
  - Compact / Badge: `shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]` (`.shadow-brutal-sm`)
  - Elevated / Focus: `shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]` (`.shadow-brutal-lg`)
- **Tactile Button Micro-Interactions**:
  - Hover: `hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`
  - Active Press: `active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`

---

## 🖥️ Desktop OS Architecture

- **Top OS System Bar (`TopBar.tsx`)**:
  - Retro OS brand badge (`⚡ DEV.OS`) with launcher dropdown menu
  - Real-time digital clock with seconds ticking
  - Live system status badge (`ONLINE // AVAILABLE FOR HIRE`)
  - Web Audio 8-bit sound effects toggle (with retro synthesizer beeps)
  - Battery & Wi-Fi system telemetry

- **Interactive Desktop Canvas (`DesktopCanvas.tsx`)**:
  - Desktop shortcut icons with bold black borders and color tiles (`bio.exe`, `projects.app`, `skills.sys`, `terminal.sh`, `mail.exe`, `audio.wav`)
  - Drag-and-drop window management with dynamic z-index layering

- **Neobrutalism Window Manager (`Window.tsx`)**:
  - Title bar with file path tag and traffic-light controls (Hot Pink close, Acid Yellow minimize, Electric Cyan maximize)
  - Draggable handle and smooth maximize/restore toggling

- **Apps & Windows Included**:
  1. `AboutWindow.tsx` (`bio.exe`): Bio, metrics, stats, resume download, status badges.
  2. `ProjectsWindow.tsx` (`projects.app`): Filterable repertoire with live demo & github links.
  3. `SkillsWindow.tsx` (`skills.sys`): Continuous marquee ticker, progress bars, and architecture philosophy.
  4. `TerminalWindow.tsx` (`terminal.sh`): Interactive CLI with working commands (`help`, `about`, `projects`, `skills`, `contact`, `theme`, `date`, `clear`, `sudo`).
  5. `ContactWindow.tsx` (`mail.exe`): Encoded transmission dispatch form with direct social networks.
  6. `AudioPlayerWindow.tsx` (`audio.wav`): Retro stereo cassette player with animated equalizer bars.

- **Floating Bottom Dock (`Dock.tsx`)**:
  - Centered floating dock with active window indicator lights and tooltips.

---

## 🚀 Running the Project

```bash
# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
