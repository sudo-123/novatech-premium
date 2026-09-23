# 🚀 NovaTech — Premium Tech & Electronics Storefront

A sleek, dark-themed e-commerce front end for a premium electronics brand — built with plain HTML, CSS, and JavaScript. No frameworks, no build step, no backend required.

> Browse products, filter by category, add items to a persistent cart, and check out the site's own built-in **SEO audit dashboard**.

---

## ✨ Features

- 🛍️ **Product Catalog** — Browse premium tech products (audio, wearables, computers, gaming, cameras) with filtering and sorting
- 🔍 **Product Detail Pages** — Image galleries, color/variant selection, specs, and features
- 🛒 **Persistent Shopping Cart** — Add, update, and remove items, with cart state saved in `localStorage`
- 📄 **Core Pages** — Home, Products, About, Contact, all fully responsive
- 📊 **Built-in SEO Dashboard** — A self-contained SEO auditing tool that analyzes meta tags, headings, structured data, and Open Graph tags for any page on the site
- 🧩 **JSON-LD Structured Data** — Organization and product schema injected automatically for better search visibility
- 📱 **Fully Responsive** — Dedicated responsive styles for mobile, tablet, and desktop
- 🎨 **Custom Design System** — Dark, glassy "premium" UI built entirely with custom CSS (no UI library)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom design system, no framework) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter) & [Outfit](https://fonts.google.com/specimen/Outfit) via Google Fonts |
| Storage | Browser `localStorage` (cart persistence) |
| SEO | Custom JS audit engine + JSON-LD schema injection |

No package manager or build tools are required to run the site.

---

## 📂 Project Structure

```
novatech-premium/
├── index.html              # Home page
├── products.html            # Product catalog with filters
├── product-detail.html      # Single product view
├── cart.html                 # Shopping cart
├── about.html                 # About / brand story
├── contact.html               # Contact form
├── seo-dashboard.html         # SEO audit tool
├── css/
│   ├── style.css              # Core design system
│   ├── home.css
│   ├── products.css
│   ├── cart.css
│   ├── dashboard.css
│   └── responsive.css
├── js/
│   ├── app.js                 # Cart manager & core app logic
│   ├── products.js            # Product data & catalog logic
│   ├── product-detail.js
│   ├── cart.js
│   ├── schema.js              # JSON-LD structured data injection
│   ├── seo-analyzer.js        # SEO audit engine
│   └── animations.js
├── robots.txt
└── sitemap.xml
```

---

## 🚀 Getting Started

This is a static site — no installation needed.

### Option 1: Just open it
Clone the repo and open `index.html` directly in your browser.

```bash
git clone https://github.com/sudo-123/novatech-premium.git
cd novatech-premium
open index.html   # macOS
# or double-click index.html on Windows/Linux
```

### Option 2: Serve it locally (recommended)
Running through a local server avoids any browser quirks with relative paths and `localStorage`.

```bash
# Using Python
python3 -m http.server 8000

# Using Node (npx)
npx serve .
```

Then visit `http://localhost:8000`.

---

## 📄 Pages Overview

| Page | Description |
|---|---|
| **Home** (`index.html`) | Landing page with hero, featured products, and brand highlights |
| **Products** (`products.html`) | Full catalog with category/price/rating filters |
| **Product Detail** (`product-detail.html`) | Individual product view with gallery and specs |
| **Cart** (`cart.html`) | Review and manage cart items, persisted across sessions |
| **About** (`about.html`) | Brand story and mission |
| **Contact** (`contact.html`) | Contact form and support info |
| **SEO Dashboard** (`seo-dashboard.html`) | Run an on-page SEO audit — meta tags, headings, structured data, and more |

---

## 🗺️ Roadmap

- [ ] Connect to a real backend / product API
- [ ] Add checkout & payment flow
- [ ] Add user accounts and order history
- [ ] Add automated tests

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push and open a Pull Request

---

## 📜 License

_No license has been specified for this project yet. Consider adding a `LICENSE` file (e.g. MIT) so others know how they can use this code._

---

## 📬 Contact

Have questions or suggestions? Open an issue on this repository.
