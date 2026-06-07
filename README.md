# Mohammad Ammar — Personal Portfolio

A production-ready personal portfolio website built with pure HTML, CSS, and JavaScript. Designed for GitHub Pages deployment with an institutional analytics command center aesthetic.

## Live Demo

After deployment, your site will be available at:

```
https://theammarngp-makes.github.io/portfolio/
```

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # Complete stylesheet
├── script.js           # Animations & interactions
├── README.md           # This file
└── assets/
    ├── profile.jpg     # Profile photo
    ├── resume.pdf      # Resume (replace with your full resume)
    ├── favicon.png     # Site favicon
    └── project-images/
        ├── olist.jpg       # Olist Sales Analysis screenshot
        ├── cohort.jpg      # Cohort Retention screenshot
        ├── rfm.jpg         # RFM Segmentation screenshot
        └── reflection.jpg  # Daily Reflection Tree screenshot
```

## Features

- **Institutional analytics design** — Dark premium theme inspired by Bloomberg Terminal, Stripe, and modern fintech dashboards
- **Living hero environment** — Floating KPI cards, SQL terminal, analytics ticker, particles, parallax, and live metrics
- **Full portfolio sections** — About, Skills, Projects, Experience, Focus, Readiness, Analytics Lab, Career Mission, Resume, Contact
- **Real project screenshots** — Pulled from GitHub repositories
- **Formspree contact form** — With honeypot spam protection and success messaging
- **Micro-interactions** — Loading screen, scroll progress, animated counters, reveal animations
- **SEO optimized** — Meta tags, Open Graph, Twitter cards, favicon
- **Fully responsive** — Desktop, laptop, tablet, and mobile

## Tech Stack

- HTML5
- CSS3 (custom properties, glassmorphism, animations)
- Vanilla JavaScript (no frameworks, no build tools)
- Google Fonts (Inter, Space Grotesk, JetBrains Mono)
- Formspree (contact form backend)

## GitHub Pages Deployment

### Option 1: Deploy from `/portfolio` folder (Recommended)

1. **Create a new GitHub repository** named `portfolio` (or any name you prefer)

2. **Push the portfolio folder contents** to the repository:

   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio deployment"
   git branch -M main
   git remote add origin https://github.com/theammarngp-makes/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings → Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

4. **Wait 1–2 minutes** for deployment. Your site will be live at:
   ```
   https://theammarngp-makes.github.io/portfolio/
   ```

### Option 2: Deploy as User/Organization Site

If you want the site at `https://theammarngp-makes.github.io/` (without `/portfolio`):

1. Create a repository named **`theammarngp-makes.github.io`**
2. Push the contents of the `portfolio/` folder to the root of that repository
3. Enable GitHub Pages (same steps as above)
4. Site will be live at `https://theammarngp-makes.github.io/`

### Option 3: Deploy from a subfolder in an existing repo

If your portfolio lives inside a larger repository:

1. Push the `portfolio/` folder to your repo
2. In **Settings → Pages**, set the source folder to `/portfolio`
3. Site URL: `https://<username>.github.io/<repo-name>/`

## Customization Checklist

Before going live, update these items:

| Item | Location | Action |
|------|----------|--------|
| Resume | `assets/resume.pdf` | Replace with your full professional resume |
| Profile photo | `assets/profile.jpg` | Replace with your professional headshot |
| Open Graph URL | `index.html` `<meta property="og:url">` | Update to your live GitHub Pages URL |
| Formspree endpoint | `index.html` form `action` | Verify endpoint is active at formspree.io |

## Contact Form Setup

The contact form uses [Formspree](https://formspree.io):

- **Endpoint:** `https://formspree.io/f/mlgvrdnd`
- **Fields:** Name, Email, Company, Message
- **Spam protection:** Honeypot field (`_gotcha`)

To use your own Formspree account:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace the `action` URL in `index.html`

## Local Preview

No build step required. Open directly in a browser:

```bash
cd portfolio
python3 -m http.server 8080
```

Then visit `http://localhost:8080`

> **Note:** Some features (PDF embed, Formspree) work best over HTTP rather than the `file://` protocol.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

Personal portfolio — © Mohammad Ammar. All rights reserved.

## Author

**Mohammad Ammar**  
Data Analytics · Financial Analytics · Business Intelligence

- Email: theammarngp@gmail.com
- GitHub: [theammarngp-makes](https://github.com/theammarngp-makes)
