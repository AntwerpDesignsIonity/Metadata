# Ionity Today - Metadata & Asset Library

## 🌐 Overview

**Ionity Today Metadata & Asset Library** is a comprehensive, SEO-optimized repository hosting brand assets, metadata, and resources for Ionity/Antwerp Designs. This repository serves as a central hub for images, logos, icons, and machine-readable metadata for integration into web projects, APIs, and documentation.

## 🚀 Live Deployment

- **GitHub Pages**: [https://antwerpdesignsionity.github.io/Metadata/](https://antwerpdesignsionity.github.io/Metadata/)
- **Custom Domain**: [https://metadata.ionity.today](https://metadata.ionity.today) *(if DNS configured)*

## 📁 Repository Structure

```
Metadata/
├── index.html                              # Main asset gallery (single-page app)
├── assets/
│   └── Images/                             # Brand images, logos, icons
├── ionity-api.json                         # JSON API endpoint with full metadata
├── ionity.yaml                             # YAML configuration
├── ionity.today.xmp                        # XMP metadata sidecar
├── ionity-johan-wilhelm-van-antwerp-director.js  # JavaScript config
├── manifest.json                           # Web App Manifest (PWA)
├── sitemap.xml                             # SEO sitemap
├── robots.txt                              # Search engine crawler instructions
├── browserconfig.xml                       # Microsoft tile configuration
├── CNAME                                   # Custom domain configuration
├── _headers                                # HTTP headers (Netlify/Cloudflare)
├── _config.yml                             # Jekyll/GitHub Pages config
├── .nojekyll                               # Bypass Jekyll processing
├── README.md                               # Main documentation
├── HOSTING.md                              # This file
├── requirements.md                         # Hosting requirements
└── LICENSE                                 # License information
```

## 🎯 Key Features

### SEO Optimization
- ✅ Comprehensive meta tags (title, description, keywords)
- ✅ Open Graph protocol for social sharing
- ✅ Twitter Card metadata
- ✅ JSON-LD structured data (Schema.org)
- ✅ Geo-location tags
- ✅ Canonical URLs
- ✅ Sitemap.xml for search engines
- ✅ Robots.txt with proper directives

### Metadata Formats
- **JSON API** (`ionity-api.json`) - Complete metadata in JSON format
- **YAML** (`ionity.yaml`) - Configuration file format
- **XMP** (`ionity.today.xmp`) - Adobe XMP sidecar metadata
- **JavaScript** (`ionity-johan-wilhelm-van-antwerp-director.js`) - JS config object
- **Web Manifest** (`manifest.json`) - PWA manifest

### Asset Management
- Searchable and filterable asset gallery
- Support for PNG, SVG, JPEG formats
- Preview thumbnails for all images
- Direct download links
- Responsive design

### Performance
- Single-page application (no framework overhead)
- Inline CSS and JavaScript (no external dependencies)
- Lazy loading for images
- Optimized for GitHub Pages

## 🔧 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main` → `/` (root)
   - Click Save

2. **Access your site**:
   ```
   https://[username].github.io/Metadata/
   ```

3. **Custom Domain (Optional)**:
   - Update `CNAME` file with your domain (e.g., `metadata.ionity.today`)
   - Configure DNS:
     - Add CNAME record: `metadata.ionity.today` → `[username].github.io`
   - Enable "Enforce HTTPS" in GitHub Pages settings

### Option 2: Netlify

1. **Deploy via Git**:
   - Connect your GitHub repository
   - Build command: (leave empty - static site)
   - Publish directory: `/` (root)

2. **Custom Domain**:
   - Add domain in Netlify dashboard
   - Follow DNS configuration instructions

### Option 3: Cloudflare Pages

1. **Connect Repository**:
   - Link your GitHub account
   - Select the repository
   - Build command: (none)
   - Build output directory: `/`

2. **Headers**:
   - Cloudflare will automatically use `_headers` file

### Option 4: Vercel

```bash
npm install -g vercel
vercel --prod
```

## 📊 SEO Features Explained

### Meta Tags
The site includes comprehensive meta tags for optimal search engine visibility:
- Standard HTML meta tags
- Open Graph for Facebook/LinkedIn
- Twitter Cards for Twitter
- Geo-location tags for local SEO
- Mobile-friendly viewport settings

### Structured Data (JSON-LD)
Two structured data blocks are included:
1. **Organization Schema** - Describes Ionity as an organization
2. **WebSite Schema** - Describes the asset library site

This enables rich snippets in Google search results.

### Sitemap
`sitemap.xml` helps search engines discover all pages and resources:
- Main index page
- API endpoints
- Metadata files
- Update frequency and priority hints

### Robots.txt
Allows all search engines to index the site while excluding:
- Git files and directories
- License and configuration files

## 🔗 API Endpoints

### JSON API
```
GET https://antwerpdesignsionity.github.io/Metadata/ionity-api.json
```

**Response**: Complete metadata about Ionity, including:
- Identity and legal information
- Contact details
- Capabilities and tech stack
- Social media links
- SEO data

### YAML Configuration
```
GET https://antwerpdesignsionity.github.io/Metadata/ionity.yaml
```

### XMP Metadata
```
GET https://antwerpdesignsionity.github.io/Metadata/ionity.today.xmp
```

## 🎨 Integration Examples

### Fetch Metadata in JavaScript
```javascript
fetch('https://antwerpdesignsionity.github.io/Metadata/ionity-api.json')
  .then(response => response.json())
  .then(data => {
    console.log('Ionity Metadata:', data);
    console.log('Primary URL:', data.endpoints.primary);
  });
```

### Load Configuration
```html
<script src="https://antwerpdesignsionity.github.io/Metadata/ionity-johan-wilhelm-van-antwerp-director.js"></script>
<script>
  const seo = IonityConfig.getSeoData();
  console.log(seo.title);
</script>
```

### Embed Logo
```html
<img src="https://antwerpdesignsionity.github.io/Metadata/assets/Images/ionity-logo-edited.png" 
     alt="Ionity Logo" />
```

## 🌍 Custom Domain Setup

### DNS Configuration

**For CNAME (Subdomain)**:
```
Type: CNAME
Name: metadata
Value: antwerpdesignsionity.github.io
TTL: 3600
```

**For A Records (Apex Domain)**:
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
TTL: 3600
```

### Update CNAME File
```bash
echo "metadata.ionity.today" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

## 📱 Progressive Web App (PWA)

The site includes a `manifest.json` file making it installable as a PWA:
- Can be added to home screen on mobile devices
- Offline-capable (with service worker, if added)
- Standalone app experience

## 🔒 Security

### Headers
The `_headers` file includes security best practices:
- `X-Frame-Options: SAMEORIGIN` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `X-XSS-Protection` - Cross-site scripting protection
- `Referrer-Policy` - Controls referrer information

### HTTPS
- GitHub Pages enforces HTTPS automatically
- All assets served over secure connections

## 📈 Analytics (Optional)

To add Google Analytics or similar:

1. Add tracking code to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🛠️ Maintenance

### Adding New Assets
1. Place image files in `assets/Images/`
2. Update the `assets` array in `index.html`:
```javascript
const assets = [
  { name: 'New Logo', file: 'new-logo.png' },
  // ... existing assets
];
```
3. Commit and push changes

### Updating Metadata
- Edit `ionity-api.json` for JSON API updates
- Edit `ionity.yaml` for YAML config updates
- Edit `ionity.today.xmp` for XMP metadata

## 📞 Support & Contact

- **Primary**: [https://www.ionity.today](https://www.ionity.today)
- **Email**: johan@ionity.today
- **GitHub**: [AntwerpDesignsIonity](https://github.com/AntwerpDesignsIonity)
- **LinkedIn**: [linkedin.com/in/ionity](https://www.linkedin.com/in/ionity)

## 📄 License

© 2018-2026 Ionity (Pty) Ltd. All rights reserved.  
See [LICENSE](LICENSE) file for details.

---

**Built by**: Johan Wilhelm van Antwerp  
**Organization**: Ionity / Antwerp Designs / AEDI  
**Location**: Pretoria, South Africa  
**Tagline**: *Building Tomorrow, Today. Anything is Possible with God.*
