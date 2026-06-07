# Mohammad Ammar — Personal Portfolio

A production-ready personal portfolio website built with pure HTML, CSS, and JavaScript. Designed for GitHub Pages deployment with an institutional analytics command center aesthetic.

## Live Demo

```
https://theammarngp-makes.github.io
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
