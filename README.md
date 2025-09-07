# Mon Journal Intime - Hugo Theme

A warm, minimalist Hugo theme designed for intimate personal journaling, inspired by the aesthetics of a Moleskine notebook.

## ✨ Features

### 🎨 **Design & Aesthetics**
- **Moleskine-inspired color palette**: Ivory background (`#F5F1E6`) with ink blue links (`#3A4E7A`)
- **Typography**: Merriweather/Lora for body text, Caveat for handwritten-style titles
- **Dark mode toggle**: 🌙/☀️ button for comfortable nighttime writing
- **Minimal & warm**: Distraction-free design focused on content

### 📝 **Journal Features**
- **Dated entries**: Format "DD Month YYYY – Title" (e.g., "7 septembre 2025 – Nuit agitée")
- **Poetic categories**: Fragments, Émotions, Réflexions, Éclaircies
- **Mood indicators**: Subtle colored dots reflecting emotional states
- **Related entries**: Intelligent recommendations based on tags, categories, and mood
- **No visual distractions**: Zero transitions, hover effects, or animations

### 🏠 **Content Structure**
- **Homepage**: Chronological feed with date + title + excerpt + "Read more"
- **About page**: Authentic presentation of the project's intentions
- **Archives**: All entries organized by poetic categories
- **Contact**: Minimal contact form approach

### 🌙 **Dark Mode**
- Seamless toggle between light and dark themes
- FOUC prevention for smooth navigation
- Preferences saved in localStorage

## 🚀 Getting Started

### Prerequisites
- [Hugo](https://gohugo.io/) (Extended version >= 0.118.0)

### Installation

1. **Clone this repository**:
```bash
git clone <repository-url>
cd mon-journal
```

2. **Install the theme**:
The theme is already included in `themes/journal-intime/`

3. **Start the development server**:
```bash
hugo server
```

4. **Visit your site**:
Open http://localhost:1313 in your browser

## 📁 Project Structure

```
mon-journal/
├── content/
│   ├── posts/           # Journal entries
│   ├── a-propos.md      # About page
│   ├── archives.md      # Archives page
│   └── contact.md       # Contact page
├── themes/journal-intime/
│   ├── layouts/
│   ├── static/
│   └── theme.toml
├── hugo.toml           # Hugo configuration
├── spec.md            # Design specifications
└── README.md
```

## ✍️ Writing Entries

Create a new journal entry:

```bash
hugo new posts/DD-month-YYYY-title.md
```

### Entry Front Matter
```yaml
+++
date = '2025-09-07T23:30:00+02:00'
draft = false
title = "7 septembre 2025 – Nuit agitée"
categories = ["Fragments"]  # or "Émotions", "Réflexions", "Éclaircies"
tags = ["sommeil", "pensées", "nuit"]
mood = "melancholic"  # "hopeful", "peaceful", "introspective", "neutral"
summary = "Brief excerpt for the homepage"
+++

Your intimate thoughts here...
```

## 🎨 Customization

### Colors
The theme uses CSS custom properties defined in `themes/journal-intime/static/css/style.css`:

```css
:root {
    --bg-color: #F5F1E6;      /* Moleskine ivory */
    --text-color: #2B2B2B;    /* Dark gray text */
    --title-color: #1C1C1C;   /* Deep black titles */
    --link-color: #3A4E7A;    /* Ink blue links */
    --link-hover: #6A85B6;    /* Lighter blue hover */
    --border-color: #D6CFC4;  /* Subtle borders */
    --bg-secondary: #FAF8F3;  /* Secondary background */
}
```

### Typography
- **Body text**: Merriweather, Lora, Georgia (serif)
- **Titles**: Caveat (handwritten style)
- **Import**: Fonts are loaded from Google Fonts

## 🌍 Configuration

Key settings in `hugo.toml`:

```toml
baseURL = 'https://your-domain.com/'
languageCode = 'fr-fr'
DefaultContentLanguage = "fr"
title = 'Mon Journal Intime'
theme = 'journal-intime'

[params]
  author = "Your Name"
  description = "Fragments d'ombre et éclats de lumière"
```

## 📖 Philosophy

This theme is designed for **authentic personal expression**:

- **Intimacy over performance**: Focus on genuine reflection rather than audience engagement
- **Simplicity over features**: Minimal distractions to encourage writing
- **Warmth over coldness**: Human, approachable design inspired by handwritten journals
- **Respect for vulnerability**: Thoughtful presentation of personal content

## 🤝 Contributing

This is a personal project, but suggestions and improvements are welcome:

1. Open an issue for bugs or feature requests
2. Fork and submit pull requests for improvements
3. Respect the intimate, minimal philosophy of the theme

## 📄 License

This project is open source. Feel free to use and adapt for your own personal journaling needs.

---

*"We write to taste life twice, in the moment and in retrospection."* — Anaïs Nin

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>