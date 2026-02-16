# Quick Start Guide - Ionity Metadata Repository

## 🚀 Get Started in 5 Minutes

This guide will help you quickly deploy and use the Ionity Metadata & Asset Library.

## Step 1: Clone or Fork

### Option A: Fork the Repository
1. Click the "Fork" button on GitHub
2. Clone your fork:
```bash
git clone https://github.com/YOUR-USERNAME/Metadata.git
cd Metadata
```

### Option B: Use as Template
1. Click "Use this template" on GitHub
2. Create your new repository
3. Clone it locally

## Step 2: Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** in the left sidebar
3. Under "Source":
   - Branch: `main`
   - Folder: `/` (root)
4. Click **Save**
5. Wait 1-2 minutes for deployment

Your site will be live at:
```
https://YOUR-USERNAME.github.io/Metadata/
```

## Step 3: Add Your Assets (Optional)

1. Place your images in `assets/Images/` directory
2. Edit `index.html` and update the `assets` array:

```javascript
const assets = [
  { name: 'My Logo', file: 'my-logo.png' },
  { name: 'My Icon', file: 'my-icon.svg' },
  // ... add more assets
];
```

3. Commit and push:
```bash
git add .
git commit -m "Add my assets"
git push
```

## Step 4: Customize Metadata

### Update ionity-api.json
Edit the file to include your information:
```json
{
  "identity": {
    "name": "Your Brand",
    "legal_name": "Your Company Ltd",
    "founder": "Your Name"
  },
  "contact": {
    "email": "you@yourdomain.com"
  }
}
```

### Update index.html Meta Tags
Change the title and description in `<head>`:
```html
<title>Your Brand — Asset Library</title>
<meta name="description" content="Your description here...">
```

## Step 5: Configure Custom Domain (Optional)

### Update CNAME
```bash
echo "assets.yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

### Configure DNS
Add a CNAME record:
```
Type: CNAME
Name: assets (or metadata, or www)
Value: YOUR-USERNAME.github.io
TTL: 3600
```

### Enable HTTPS
In GitHub Pages settings, check "Enforce HTTPS"

## 🎯 Usage Examples

### Access the Site
Open in browser:
```
https://YOUR-USERNAME.github.io/Metadata/
```

### Fetch Metadata via API
```javascript
fetch('https://YOUR-USERNAME.github.io/Metadata/ionity-api.json')
  .then(res => res.json())
  .then(data => console.log(data));
```

### Use an Asset
```html
<img src="https://YOUR-USERNAME.github.io/Metadata/assets/Images/logo.png" 
     alt="Logo">
```

## 📊 Verify SEO

### 1. Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit sitemap: `https://YOUR-USERNAME.github.io/Metadata/sitemap.xml`

### 2. Test Rich Results
Visit: [Rich Results Test](https://search.google.com/test/rich-results)
Enter your URL and verify structured data

### 3. Check Mobile-Friendly
Visit: [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## 🛠️ Common Customizations

### Change Colors
Edit CSS variables in `index.html`:
```css
:root {
  --primary: #0d1b2a;      /* Background */
  --accent: #00c6ff;        /* Brand color */
  --text: #e0e6ed;          /* Text color */
}
```

### Add Google Analytics
Insert before `</head>` in `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Update Footer Links
Edit the footer section in `index.html`:
```html
<footer>
  <p>&copy; 2026 <a href="https://yoursite.com">Your Brand</a></p>
</footer>
```

## 📱 Test Your Site

### Desktop
- Chrome DevTools (F12)
- Check console for errors
- Verify responsive design

### Mobile
- Chrome DevTools mobile emulation
- Test on actual devices
- Check touch interactions

## 🔍 Troubleshooting

### Site Not Loading
- Wait 2-5 minutes after enabling Pages
- Check GitHub Actions tab for build status
- Verify `index.html` is in root directory

### Images Not Showing
- Confirm images are in `assets/Images/`
- Check file names match exactly (case-sensitive)
- Verify paths in assets array

### Custom Domain Not Working
- Verify CNAME file content
- Check DNS propagation (can take 24-48 hours)
- Ensure DNS record points to `USERNAME.github.io`

### SEO Not Working
- Submit sitemap to search engines
- Wait 1-2 weeks for indexing
- Verify robots.txt allows crawling

## 📚 Next Steps

1. **Read Full Documentation**
   - [HOSTING.md](HOSTING.md) - Deployment options
   - [SEO-GUIDE.md](SEO-GUIDE.md) - SEO optimization

2. **Customize Content**
   - Add your own assets
   - Update metadata files
   - Personalize branding

3. **Monitor Performance**
   - Set up Google Analytics
   - Configure Search Console
   - Track visitor metrics

4. **Share Your Site**
   - Post on social media
   - Add to your portfolio
   - Link from main website

## 🆘 Get Help

- **Documentation**: [README.md](README.md)
- **Issues**: [GitHub Issues](https://github.com/AntwerpDesignsIonity/Metadata/issues)
- **Original Project**: [ionity.today](https://www.ionity.today)

## ✅ Checklist

After setup, verify:
- [ ] Site loads at GitHub Pages URL
- [ ] All images display correctly
- [ ] Metadata files accessible
- [ ] Search filters work
- [ ] Mobile responsive
- [ ] Custom domain configured (if using)
- [ ] Sitemap submitted to search engines
- [ ] Analytics tracking (if added)

---

**Ready to Deploy?** Follow the steps above and your site will be live in minutes!

**Questions?** Create an issue or check the documentation.

**Happy Hosting! 🚀**
