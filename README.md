# QIU AI Video Innovation Challenge 2026 - Web Platform

A premium, highly interactive, and futuristic web platform for the **QIU AI Video Innovation Challenge 2026**. Designed with a cyberpunk/sci-fi HUD (Heads-Up Display) aesthetic, featuring interactive smooth animations, custom media elements, and responsiveness across all platforms.

---

## 🌟 Key Features

1. **Futuristic HUD Styling**:
   - Cyberpunk colors: Neon Blue (`#00f0ff`), Neon Pink (`#ff007f`), Neon Violet (`#b44fff`).
   - Glassmorphic panels, notched sci-fi corners, corner brackets, and dynamic grid overlays.
   - Glitch title animations and custom hover interactions.
2. **Interactive Video Showcase**:
   - Advanced custom video player playing the **QIU AI Video Innovation Challenge Final 4K** video.
   - Immersive HUD overlay overlaying recording status metrics (SYS_REC_ON, 4K_UHD).
   - Custom controllers (seek bar, time display, play/pause, volume slider, mute, and fullscreen toggle).
   - IntersectionObserver integration to automatically pause the video when scrolled out of view.
3. **Interactive Components**:
   - Responsive horizontal timeline page.
   - Interactive scoring metrics page with customizable SVG 3D-effect cylinder/donut charts.
   - Page Snap scroll system container.
   - Custom dynamic cursor trailing elements (active on desktop hover only).
4. **Mobile Optimizations**:
   - Header navigation links automatically switch to a swipeable horizontal carousel with centering logic.
   - Mobile-friendly responsive styling adjusting text alignment and swapping component layers.
5. **No Text Highlight / Selection**:
   - Enforced site-wide `-webkit-user-select: none; user-select: none;` layout to feel like a native application interface.

---

## 🛠 Technology Stack

- **Structure**: HTML5
- **Style**: Vanilla CSS (TailwindCSS avoided for maximum flexibility and clean animations)
- **Logic**: Vanilla Javascript (Modern ES6 modules & custom event listeners)
- **Hosting**: Firebase Hosting

---

## 📂 Directory Structure

```
├── (VO)QIU AI Video Innovation Challenge Final 4K.mp4  # Showcase 4K Video
├── ai video page.html                                  # Standalone AI video page view
├── index.html                                          # Home page entrypoint
├── firebase.json                                       # Firebase deployment settings
├── package.json                                        # Scripts and project dependencies
├── Logo.png                                            # QIU logo asset
├── Poster.png                                          # Poster image asset
├── QIU Logo Black.png                                  # Black background logo asset
├── QR Code.png                                         # QR registration asset
└── README.md                                           # Project documentation (this file)
```

---

## 🔄 Workflow & Deployment

### 1. Local Testing
To preview the website locally, run a dev server:
```bash
# Using standard http-server or live-server
npx http-server .
```
Or use the npm script if configured.

### 2. Deployment
The site is configured to deploy via **Firebase Hosting**:
```bash
# Login to Firebase
npx -y firebase-tools login

# Deploy static hosting files to live site
npx -y firebase-tools deploy
```

---

## 📝 Recent Updates & Changelog

- **Global Interaction Restrictions**: Changed styling rules (`*, *::before, *::after`) to apply `user-select: none` across all pages. Users can only press/click buttons and links but cannot highlight or copy texts.
- **Showcase Player Video**: Replaced `./trailer.mp4` source with the high-resolution `./(VO)QIU AI Video Innovation Challenge Final 4K.mp4` file.
- **Mobile Header Optimization**:
  - Restructured mobile carousel layout by shortening the `.nav-menu` width to `140px` and adjusting its horizontal padding.
  - Adjusted the mobile Register button (`.header-cta`) with optimized padding, a broader clip-path slant, and margin spacing.
  - This ensures the Register button is fully shown, clearly readable, and shifted slightly leftward to prevent cropping at the edge of the mobile screen.
