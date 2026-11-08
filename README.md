# Personal Development Portfolio — The Making of Me

> **Author:** Phạm Hữu Khôi  
> **Major:** Computer Science; Applied Data Science  
> **Institution:** VN-UK Institute for Research and Executive Education (VNUK) — The University of Danang  
> **Course:** Personal Development Planning (PDP)  
> **Academic Cycle:** 2024–2025  

---

## 📌 Project Overview

This repository hosts the **Personal Development Portfolio** website for **Phạm Hữu Khôi**, developed in fulfillment of the Personal Development Planning curriculum at VNUK.

Built strictly with **Pure Vanilla Web Standards (HTML5, CSS3, JavaScript)**, the project requires zero build pipelines, package managers, or third-party framework dependencies. It is structured for instant 1-click deployment on **GitHub Pages**.

### 🌟 Key Design & Architectural Highlights

- **Executive Aesthetic:** Minimalist monochrome canvas paired with Emerald Green (`#059669`) highlights and the clean, modern **Inter** sans-serif typography.
- **Editorial Balance:** Tightly constrained 860px centered reading column with justified paragraph alignments (`text-align: justify;`) on both margins.
- **Icon-Free & Distraction-Free:** Elimination of decorative icons and multi-colored clutter in favor of crisp typographic hierarchy.
- **Responsive & Accessible:** Fully adaptive across desktop, tablet, and mobile displays with interactive modal lightbox inspection for field artifacts.

---

## 🗂️ Project Directory Structure

```text
Portfolio/
├── .gitignore                      # Git ignore rules for OS & IDE artifacts
├── index.html                      # Root entry point (configured for GitHub Pages)
├── README.md                       # Project repository documentation
├── assets/
│   ├── css/
│   │   └── styles.css              # Custom styling, CSS variables & responsive rules
│   ├── js/
│   │   └── script.js               # Navigation spy, progress bar & modal inspection
│   └── images/
│       ├── 3x3 tournament.jpg      # Artifact #05: Athletic conditioning & stamina
│       ├── AI_BigData.jpg          # Artifact #04: Technology symposium & career vision
│       ├── Clubfair.jpg            # Artifact #01: Public outreach & communication
│       ├── clubfair2.jpg           # Artifact #02: Volunteer squad mobilization
│       ├── innovation_SV.jpg       # Artifact #03: Student research & critical defense
│       ├── myAvatar.jpg            # Author profile portrait (Phạm Hữu Khôi)
│       └── noel.jpg                # Artifact #06: Community gathering & social support
└── docs/
    ├── GUIDELINE_PDP.md            # Original VNUK PDP Curriculum Syllabus & Guidelines
    └── notes/                      # Activity note files
        ├── 3x3 tournament.txt
        ├── AI_BigData.txt
        ├── Clubfair.txt
        ├── innovation_SV.txt
        └── noel.txt
```

---

## 🚀 How to Run Locally

Because this project uses vanilla web technologies, no installation is required:

1. Clone or download the repository:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```
2. Double-click `index.html` to open it in any modern browser (Chrome, Edge, Safari, Firefox).
3. Alternatively, launch a lightweight local server:
   ```bash
   # Python 3
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000`.

---

## 🌐 Deploying to GitHub Pages (1-Click)

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal Development Portfolio by Pham Huu Khoi"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. In your repository on GitHub:
   - Navigate to **Settings** > **Pages** (under the "Code and automation" sidebar).
   - Under **Build and deployment** > **Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and `/ (root)`.
   - Click **Save**.
3. Within 1–2 minutes, your portfolio will be live at:
   `https://<your-username>.github.io/<repo-name>/`

---

## 👤 Author Contact

- **Student:** Phạm Hữu Khôi
- **Email:** [hukopham101070@gmail.com](mailto:hukopham101070@gmail.com)
- **Phone:** [0917969280](tel:0917969280)
- **University:** VN-UK Institute for Research and Executive Education — The University of Danang

---
*© 2024–2025 Phạm Hữu Khôi. All rights reserved.*
