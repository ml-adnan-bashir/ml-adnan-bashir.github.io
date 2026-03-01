# Adnan Bashir - Enhanced Professional Portfolio

A sophisticated, production-ready portfolio website showcasing ML research, projects, publications, teaching, professional journey, and personal interests. Features dark cyan neon aesthetic, responsive design, and interactive elements.

## ✨ Features

### Core Professional Pages
- **Home (index.html)** - Hero section, featured projects, stats, contact form
- **Projects (projects.html)** - 4 shipped ML systems (DRIFT, TSX, DSX, DRUM) with detailed metrics
- **Publications (publications.html)** - 6 peer-reviewed research papers with full information
- **Research (research.html)** - Research interests, active projects, collaboration details
- **Teaching (teaching.html)** - 3 courses (Network Security, Data Analytics, Professional Practices)
- **Journey (journey.html)** - Professional timeline 2012-2026, skills progression, milestones

### Personal Pages
- **Interests (interests.html)** - Professional interests, passions, core values, fun facts
- **Games (games.html)** - Browser-based games (Chrome Dinosaur, Agar.io, 2048, Wordle, etc.)
- **Memes (memes.html)** - Tech humor collection with category placeholders
- **Drawings (drawings.html)** - Community artwork submission system

### Advanced Features
- **Password-Protected Gallery (gallery.html)**
  - 100 image slots with dynamic loading
  - Password authentication (zodiac sign + mother's name)
  - Lightbox viewer with navigation
  - Automatic handling of missing images
  - Privacy-protected personal photos

- **Interactive Navigation**
  - Dropdown "More" menu for additional pages
  - Active page highlighting
  - Smooth scrolling
  - Mobile hamburger menu (coming in mobile optimization)

- **Design Elements**
  - Dark cyan neon aesthetic
  - Animated gradient backgrounds
  - Glassmorphism effects
  - Hover animations and transitions
  - Fully responsive layout
  - Custom scrollbar styling

## 📁 File Structure

```
portfolio/
├── index.html              # Homepage with hero and featured projects
├── projects.html           # 4 ML systems showcase
├── publications.html       # 6 peer-reviewed papers
├── research.html           # Research interests and active projects
├── teaching.html           # Teaching page with 3 courses
├── journey.html            # Professional timeline 2012-2026
├── interests.html          # Personal interests and values
├── games.html              # Browser-based games collection
├── memes.html              # Tech humor collection
├── drawings.html           # Artwork submission system
├── gallery.html            # Password-protected photo gallery
├── styles.css              # Unified stylesheet (all pages)
├── script.js               # JavaScript interactions and gallery auth
├── README.md               # This file
├── DEPLOYMENT_GUIDE.md     # GitHub Pages deployment instructions
├── QUICK_START.md          # 30-minute quick start checklist
└── .gitignore              # Git ignore rules
```

## 🚀 Quick Start

### Local Development
1. Download all files
2. Open `index.html` in your browser
3. No build process needed—edit and refresh!

### GitHub Pages Deployment

**Option A: Git Command Line (Recommended)**
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git branch -M main
git push -u origin main
```

**Option B: GitHub Web Interface**
1. Create repository: `YOUR_USERNAME.github.io`
2. Upload files via GitHub web interface
3. Done! Site will be live at `https://YOUR_USERNAME.github.io`

## ✏️ Customization

### Update Critical Information
In all files, replace:
- `adnan@example.com` → Your email
- `adnanbashir` (Calendly) → Your Calendly username
- `adnanbashir` (GitHub) → Your GitHub username
- `YOUR_FORM_ID` → Your Formspree form ID

### Set Up Contact Form
1. Visit [formspree.io](https://formspree.io)
2. Create form with your email
3. Copy form ID
4. Update in index.html: `action="https://formspree.io/f/YOUR_FORM_ID"`

### Configure Gallery Access
**In gallery.html**, update password:
```javascript
const correctPassword = 'sagittariusfattima'; // Change to: zodiac + mother's name
```

### Customize Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --accent-cyan: #00d9ff;
  --accent-magenta: #ff006e;
  --accent-purple: #8338ec;
  /* ... modify as needed ... */
}
```

### Update Social Links
In footer (all pages):
```html
<li><a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank">LinkedIn</a></li>
<li><a href="https://github.com/YOUR_USERNAME" target="_blank">GitHub</a></li>
```

### Add Personal Content
- **Projects**: Edit projects.html with your projects
- **Publications**: Update publications.html with your papers
- **Teaching**: Customize teaching.html with your courses
- **Journey**: Fill timeline entries in journey.html
- **Interests**: Update interests.html with your interests
- **Gallery**: Add images to `images/image1.jpg`, `image2.jpg`, etc.

## 📱 Browser Support

- Chrome/Edge (latest) ✓
- Firefox (latest) ✓
- Safari (latest) ✓
- Mobile browsers ✓
- IE11 (limited support)

## 🎯 Page Details

### Projects Page
Showcases 4 production ML systems:
- **DRIFT** - Distributed Real-time Inference Framework (Enterprise)
- **DRUM** - Distributed Real-time Unsupervised Modeling (Research)
- **TSX** - Time-Series eXplainability (Healthcare)
- **DSX** - Data Systems eXperience (Architecture)

Each includes: description, metrics, tech stack, highlights

### Publications Page
6 peer-reviewed papers with:
- Publication year and venue
- Authors and abstract
- Key highlights
- Links to PDF, DOI, and repository

### Teaching Page
3 academic courses:
- **Network Security** (BS Cyber Security, Semester 4)
- **Data Analytics** (MS Cyber Psychology, Semester 2)
- **Professional Practices** (BS Cyber Security, Semester 8)

Each includes: course description, topics, format, tools, assessment

### Journey Page
Professional timeline 2012-2026:
- Timeline entries with years and accomplishments
- Skills progression through 6 career phases
- Key milestones and achievements

### Games Page
Interactive games with external links:
- Google Chrome Dinosaur
- Agar.io
- Slither.io
- 2048
- Flappy Bird
- Wordle

### Password-Protected Gallery
Features:
- 100 image slots (image1.jpg to image100.jpg)
- Authentication with password
- Lightbox viewer
- Arrow key navigation
- Dynamic image detection

## 🔒 Gallery Password

Password format: `[zodiac_sign][mother's_first_name]` (lowercase, no spaces)

Examples:
- Sagittarius + Fatima = `sagittariusfattima`
- Capricorn + Amara = `capricornamara`

## 🎨 Design System

### Color Palette
- **Accent Cyan**: #00d9ff
- **Accent Magenta**: #ff006e
- **Accent Purple**: #8338ec
- **Dark Background**: #0a0e27
- **Darker Background**: #050810
- **Text Primary**: #f0f9ff
- **Text Secondary**: #94a3b8

### Typography
- **Heading Font**: Space Mono (monospace)
- **Body Font**: Poppins (sans-serif)

### Effects
- Glassmorphism with backdrop-filter
- Animated gradient backgrounds
- Box shadows and glows
- Smooth transitions (0.2s - 0.5s)

## 📱 Mobile Optimization

The portfolio is fully responsive with breakpoints at:
- Desktop: Full featured layout
- Tablet (768px): Adjusted grid columns
- Mobile (480px): Single column, optimized navigation

## 🔧 Troubleshooting

**Site not loading?**
- Ensure repository name is `YOUR_USERNAME.github.io`
- Check all files are in root directory
- Wait 2 minutes for GitHub Pages to build

**Styling looks broken?**
- Clear browser cache (Ctrl+Shift+Delete)
- Verify `styles.css` is in same directory as HTML files
- Check file names are exact

**Links not working?**
- Use relative paths: `projects.html` not `/projects.html`
- Don't use absolute paths
- Test locally before pushing to GitHub

**Contact form not working?**
- Verify Formspree ID in form action
- Confirm you verified email in Formspree
- Check form submission in browser console

**Gallery authentication failing?**
- Verify password matches zodiac + mother's name
- Check for lowercase spelling
- No spaces between parts

## 🚀 Advanced Customization

### Add New Page
1. Create HTML file (e.g., `newpage.html`)
2. Copy structure from existing page
3. Update navigation links
4. Add styles in `<style>` tag or `styles.css`
5. Push to GitHub

### Modify Navigation
Edit `.nav-menu` in HTML files to add/remove pages

### Create Custom Sections
Use provided `.content-card`, `.timeline-item`, `.project-card` classes

### Add Images
Place in same directory or create `images/` folder:
```
images/
├── image1.jpg
├── image2.jpg
└── image100.jpg
```

## 📚 Dependencies

- Google Fonts (Poppins, Space Mono)
- No external JavaScript libraries
- No build tools required
- Pure HTML5, CSS3, Vanilla JavaScript

## 📞 Support & Updates

- Check **DEPLOYMENT_GUIDE.md** for detailed deployment help
- Check **QUICK_START.md** for 30-minute setup checklist
- Test locally before pushing to GitHub
- Use browser DevTools (F12) to debug issues

## 🎓 Learning Resources

- [Google Fonts Documentation](https://fonts.google.com)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [GitHub Pages Documentation](https://pages.github.com)
- [Formspree Documentation](https://formspree.io/docs)

## 📄 License

This portfolio template is provided as-is. Feel free to customize and use for your own professional website.

---

**Version**: 2.0 (Enhanced)  
**Last Updated**: 2026  
**Status**: Production Ready

Ready to showcase your work! 🚀

