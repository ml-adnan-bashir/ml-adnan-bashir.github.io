# Portfolio Setup Checklist

Complete this checklist to get your enhanced portfolio live in under an hour.

## 📋 Pre-Setup (5 minutes)

- [ ] Download all files from outputs folder
- [ ] Create folder on your computer (e.g., `my-portfolio`)
- [ ] Extract all files to this folder
- [ ] Gather required information:
  - [ ] Your email address
  - [ ] Your zodiac sign (for gallery)
  - [ ] Your mother's first name
  - [ ] Calendly username
  - [ ] GitHub username

## 🔧 Critical Updates (10 minutes)

**Find & Replace in ALL files:**

- [ ] Replace `adnan@example.com` with your email
- [ ] Replace `adnanbashir` (Calendly) with your Calendly username
- [ ] Replace `adnanbashir` (GitHub) with your GitHub username
- [ ] Replace `YOUR_FORM_ID` with your Formspree ID (see setup below)

**Special Updates:**

- [ ] In `gallery.html`, update password:
  ```javascript
  const correctPassword = 'zodiac_sign + mother_first_name';
  // Example: 'sagittariusfattima'
  ```

## 📧 Setup Formspree (5 minutes)

1. [ ] Go to https://formspree.io
2. [ ] Create new form
3. [ ] Enter your email address
4. [ ] Copy your form ID (format: `xxxxx`)
5. [ ] Update in `index.html`:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

## 📸 Setup Gallery (5 minutes)

1. [ ] Create `images` folder in same directory as HTML files
2. [ ] Add your photos:
   - [ ] `image1.jpg`
   - [ ] `image2.jpg`
   - [ ] ... up to `image100.jpg`
3. [ ] Test password with format: `zodiac + mother's name` (lowercase, no spaces)

## 📝 Customize Content (15 minutes)

### Projects Page (`projects.html`)
- [ ] Replace DRIFT project details
- [ ] Replace DRUM project details
- [ ] Replace TSX project details
- [ ] Replace DSX project details
- [ ] Update metrics and tech stacks
- [ ] Update links if applicable

### Publications Page (`publications.html`)
- [ ] Replace 6 publications with yours
- [ ] Update authors, venues, years
- [ ] Update abstracts
- [ ] Update PDF/link URLs

### Teaching Page (`teaching.html`)
- [ ] Update 3 courses:
  - [ ] Network Security → Your course 1
  - [ ] Data Analytics → Your course 2
  - [ ] Professional Practices → Your course 3
- [ ] Update topics, format, tools
- [ ] Update teaching philosophy

### Journey Page (`journey.html`)
- [ ] Update timeline entries:
  - [ ] 2024-2026 entry
  - [ ] 2022-2024 entry
  - [ ] 2020-2022 entry
  - [ ] 2017-2020 entry
  - [ ] 2015-2017 entry
  - [ ] 2013-2015 entry
  - [ ] 2012-2013 entry
- [ ] Update skills progression
- [ ] Update milestones

### Research Page (`research.html`)
- [ ] Update research statement
- [ ] Update 6 research areas
- [ ] Update active projects
- [ ] Update collaboration sections

### Interests Page (`interests.html`)
- [ ] Update professional interests
- [ ] Update personal passions
- [ ] Update core values
- [ ] Update fun facts

### Home Page (`index.html`)
- [ ] Update hero title
- [ ] Update hero subtitle
- [ ] Update hero description
- [ ] Verify featured projects links

## 🧪 Test Locally (10 minutes)

### Desktop Testing
- [ ] Open `index.html` in browser
- [ ] Click through all 11 pages
- [ ] Test all navigation links
- [ ] Test contact form (try submitting)
- [ ] Test Calendly link
- [ ] Test social media links
- [ ] Test games page links
- [ ] Test gallery with password

### Mobile Testing
- [ ] Open DevTools (F12)
- [ ] Toggle device toolbar (Ctrl+Shift+M)
- [ ] Test responsive design:
  - [ ] Tablet view (768px)
  - [ ] Mobile view (375px)
- [ ] Test mobile navigation
- [ ] Test touch interactions
- [ ] Verify no layout breaks

### Content Verification
- [ ] Verify all your information is correct
- [ ] Check spelling and grammar
- [ ] Verify all links are current
- [ ] Check image quality (if added)
- [ ] Verify colors and styling

## 🚀 GitHub Deployment (10 minutes)

### Create GitHub Repository
- [ ] Go to https://github.com/new
- [ ] Name: `YOUR_USERNAME.github.io` (exactly)
- [ ] Make it PUBLIC
- [ ] Create repository

### Upload Files
Choose one method:

**Method A: Using Git (Recommended)**
```bash
# [ ] Navigate to your portfolio folder
cd path/to/portfolio

# [ ] Initialize git
git init

# [ ] Add all files
git add .

# [ ] Make first commit
git commit -m "Initial portfolio"

# [ ] Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git

# [ ] Push to GitHub
git branch -M main
git push -u origin main
```

**Method B: Using GitHub Web Interface**
- [ ] Go to your repository on github.com
- [ ] Click "Add file" → "Upload files"
- [ ] Drag all files into upload area
- [ ] Write commit message
- [ ] Click "Commit changes"

## ✅ Verify Deployment (5 minutes)

- [ ] Wait 1-2 minutes for GitHub to build
- [ ] Visit: `https://YOUR_USERNAME.github.io`
- [ ] Verify home page loads
- [ ] Test all pages load correctly
- [ ] Verify styling is correct
- [ ] Test contact form
- [ ] Test all links work
- [ ] Check on mobile device

## 📱 Optional Enhancements

- [ ] Add more images to gallery
- [ ] Add tech memes to memes page
- [ ] Customize color scheme in styles.css
- [ ] Add profile photo (hero section)
- [ ] Add custom favicon
- [ ] Setup Google Analytics
- [ ] Create custom domain (optional)

## 🎯 Final Verification

- [ ] All pages accessible from navigation
- [ ] All links work correctly
- [ ] Contact form submits (check email)
- [ ] Gallery password works
- [ ] Mobile view responsive
- [ ] Social media links correct
- [ ] No console errors (F12 → Console)
- [ ] Page loads quickly

## 📢 Share Your Portfolio

- [ ] Share on LinkedIn
- [ ] Add to GitHub profile
- [ ] Share in email signature
- [ ] Add to resume
- [ ] Share on social media
- [ ] Send to colleagues/mentors

## 🎉 You're Done!

Congratulations! Your professional portfolio is now live and showcasing your:
- ✅ ML research and projects
- ✅ Publications and impact
- ✅ Teaching and education
- ✅ Professional journey
- ✅ Interests and passions

**Estimated Time**: 45-60 minutes  
**Difficulty**: Easy (no coding required)  
**Status**: Ready to deploy! 🚀

---

## ⚠️ Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Site shows 404 | Repository name must be `YOUR_USERNAME.github.io` |
| Styling broken | Clear cache (Ctrl+Shift+Delete), verify styles.css location |
| Links don't work | Use relative paths: `projects.html` not `/projects.html` |
| Contact form not working | Verify Formspree ID and confirmed email |
| Gallery password fails | Check: lowercase spelling, zodiac + mother's name, no spaces |
| Images not showing | Verify image names are exact: `image1.jpg` (case-sensitive) |
| Mobile view broken | Check breakpoints in DevTools, refresh cache |

---

## 📞 Support Resources

- **README.md** - Comprehensive documentation
- **ENHANCEMENT_SUMMARY.md** - Overview of all features
- **DEPLOYMENT_GUIDE.md** - Detailed deployment help
- **Browser Console** - Press F12 → Console for errors
- **GitHub Pages** - https://pages.github.com

---

**Last Updated**: 2026  
**Version**: 2.0  
**Status**: Production Ready

Good luck! Your portfolio is going to look amazing! ✨
