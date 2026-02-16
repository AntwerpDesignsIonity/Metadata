<div align="center">

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=900&size=60&duration=4000&pause=1000&color=00BFFF&center=true&vCenter=true&width=1200&height=120&lines=IONITY+%7C+Metadata+%26+Assets;AI+%E2%80%A2+IoT+%E2%80%A2+HARDWARE;Building+Tomorrow%2C+Today" alt="Typing SVG" width="100%" />
</a>

<br>

<a href="https://www.linkedin.com/in/ionity"><img src="https://img.shields.io/badge/Author-Johan_van_Antwerp-0056b3?style=for-the-badge&logo=linkedin" /></a>
<a href="https://www.ionity.today"><img src="https://img.shields.io/badge/System-IONITY_OS-000000?style=for-the-badge&logo=ubuntu" /></a>
<a href="https://google.com/maps/place/Pretoria"><img src="https://img.shields.io/badge/Region-South_Africa-00d2ff?style=for-the-badge&logo=google-maps&logoColor=black" /></a>
<a href="https://antwerpdesignsionity.github.io/Metadata/"><img src="https://img.shields.io/badge/Status-Live-00ff00?style=for-the-badge&logo=github" /></a>

</div>

---

> ### ❝ Building Tomorrow, Today. Anything is Possible with God. ❞

## 🌐 Live Site

**👉 [https://antwerpdesignsionity.github.io/Metadata/](https://antwerpdesignsionity.github.io/Metadata/)**

**Custom Domain**: [https://metadata.ionity.today](https://metadata.ionity.today) *(when DNS configured)*

---

## 📖 Overview

**Ionity Metadata & Asset Library** is a comprehensive, SEO-optimized repository serving as the central hub for:
- 🎨 **Brand Assets** - Logos, icons, images, and graphics
- 📊 **Metadata** - JSON, YAML, XMP, and JavaScript configuration files
- 🔗 **API Endpoints** - Machine-readable data for integration
- 📱 **Progressive Web App** - Installable asset gallery

This repository acts as the **pull factor for images and metadata** for all Ionity/Antwerp Designs projects, making it easy to reference assets and metadata across platforms.

---

## 🚀 Quick Start

### For Developers
```bash
# Clone the repository
git clone https://github.com/AntwerpDesignsIonity/Metadata.git
cd Metadata

# Open in browser (or deploy to GitHub Pages)
open index.html
```

### For Users
1. Visit [https://antwerpdesignsionity.github.io/Metadata/](https://antwerpdesignsionity.github.io/Metadata/)
2. Browse and download assets
3. Access metadata via API endpoints

📚 **Read the full guide**: [QUICKSTART.md](QUICKSTART.md)

---

## 📁 Repository Structure

```
Metadata/
├── index.html                  # 🎨 Interactive asset gallery (main page)
├── assets/
│   └── Images/                 # 🖼️ Brand logos, icons, and graphics
├── ionity-api.json            # 📊 JSON API endpoint (complete metadata)
├── ionity.yaml                # 📝 YAML configuration file
├── ionity.today.xmp           # 📄 XMP metadata sidecar
├── ionity-johan-wilhelm-van-antwerp-director.js  # ⚙️ JavaScript config
├── manifest.json              # 📱 Progressive Web App manifest
├── sitemap.xml                # 🗺️ SEO sitemap for search engines
├── robots.txt                 # 🤖 Crawler instructions
├── browserconfig.xml          # 🔲 Microsoft tile configuration
├── CNAME                      # 🌐 Custom domain configuration
├── _headers                   # 🔒 Security & performance headers
├── _config.yml                # ⚙️ Jekyll/GitHub Pages config
├── .nojekyll                  # 🚫 Bypass Jekyll processing
├── README.md                  # 📖 This file
├── HOSTING.md                 # 🚀 Deployment guide
├── QUICKSTART.md              # ⚡ Quick start guide
├── SEO-GUIDE.md               # 📈 SEO optimization guide
├── requirements.md            # 📋 Technical requirements
└── LICENSE                    # ⚖️ License information
```

---

## ✨ Key Features

### 🎯 SEO Optimized
- ✅ Comprehensive meta tags (Open Graph, Twitter Cards)
- ✅ JSON-LD structured data (Schema.org)
- ✅ XML sitemap for search engines
- ✅ Robots.txt with proper directives
- ✅ Geo-location tags for local SEO
- ✅ Rich snippets support

### 📊 Multiple Metadata Formats
- **JSON** - `ionity-api.json` - RESTful API endpoint
- **YAML** - `ionity.yaml` - Configuration format
- **XMP** - `ionity.today.xmp` - Adobe sidecar metadata
- **JavaScript** - Config object for web integration

### 🎨 Asset Gallery
- Searchable and filterable interface
- PNG, SVG, JPEG support
- Preview thumbnails
- Direct download links
- Mobile-responsive design

### 📱 Progressive Web App
- Installable on mobile devices
- Offline-capable (with service worker)
- App-like experience
- Fast loading times

### 🔗 API Endpoints
```
https://antwerpdesignsionity.github.io/Metadata/ionity-api.json
https://antwerpdesignsionity.github.io/Metadata/ionity.yaml
https://antwerpdesignsionity.github.io/Metadata/sitemap.xml
```

---

## 📖 Documentation

| Document | Description |
|----------|-------------|
| [QUICKSTART.md](QUICKSTART.md) | Get started in 5 minutes |
| [HOSTING.md](HOSTING.md) | Deployment options and setup |
| [SEO-GUIDE.md](SEO-GUIDE.md) | SEO optimization strategies |
| [requirements.md](requirements.md) | Technical requirements |

---

## 🔌 Integration Examples

### Fetch Metadata (JavaScript)
```javascript
fetch('https://antwerpdesignsionity.github.io/Metadata/ionity-api.json')
  .then(response => response.json())
  .then(data => {
    console.log('Ionity Data:', data);
    console.log('Primary URL:', data.endpoints.primary);
  });
```

### Load Configuration
```html
<script src="https://antwerpdesignsionity.github.io/Metadata/ionity-johan-wilhelm-van-antwerp-director.js"></script>
<script>
  const seo = IonityConfig.getSeoData();
  document.title = seo.title;
</script>
```

### Embed Logo
```html
<img src="https://antwerpdesignsionity.github.io/Metadata/assets/Images/ionity-logo-edited.png" 
     alt="Ionity Logo" 
     width="200">
```

### Access YAML (Python)
```python
import requests
import yaml

response = requests.get('https://antwerpdesignsionity.github.io/Metadata/ionity.yaml')
data = yaml.safe_load(response.text)
print(data['identity']['name'])
```

---

## 🏢 About Ionity

**Ionity** (formerly Antwerp Designs, Est. 2018) is a global ecosystem solutionist specializing in the convergence of AI, IoT, and high-performance hardware.

### Identity
* **Organization**: Ionity / Antwerp Designs / AEDI (Antwerp Ecosystems Designs Ionity)
* **Founder**: Johan Wilhelm van Antwerp
* **Author ID**: `9003135105083`
* **ORCID**: [0009-0005-7181-0347](https://orcid.org/0009-0005-7181-0347)
* **GitHub**: [@AntwerpDesignsIonity](https://github.com/AntwerpDesignsIonity)

### Capabilities
| Category | Details |
|----------|---------|
| **Core Markets** | Integrations, Cloud, EDGE, AI, IoT, Hardware, Software |
| **Specialization** | Hardware design and development, including power-saving units |
| **Industrial** | PdM, CMS, DAQ, F-iT, Cyber Security & Encryptions |
| **Roles** | Ecosystems Solutionist, IoT Engineer, Toolmaker |
| **Location** | Pretoria, South Africa (Global Intent) |

### Online Presence
| Platform | URL |
|----------|-----|
| **Primary Hub** | [ionity.today](https://www.ionity.today/) |
| **Profile** | [ionity.world](https://www.ionity.world/) |
| **LinkedIn** | [linkedin.com/in/ionity](https://www.linkedin.com/in/ionity) |
| **Facebook** | [Ionity Official](https://www.facebook.com/people/Ionity/61587016452256/) |
| **GitHub Org** | [Antwerp-Ecosystem-Designs-Ionity](https://github.com/Antwerp-Ecosystem-Designs-Ionity) |

---

## 📞 Contact

* **Email**: `johan@ionity.today` | `ai@ionity.today`
* **Services**: `services@ionity.world` | `admin@ionity.today`
* **Phone**: `+27 64 699 9877`
* **Location**: Pretoria, Gauteng, South Africa

---

## ⚖️ License & Rights

* **Copyright**: © 2018–2026 Antwerp Designs | Ionity (Pty) Ltd
* **Policy**: AED 986
* **License**: AED 900 (Hardware & Software)
* **Rights**: All rights reserved | TM² | CC BY-NC-SA 4.0

See [LICENSE](LICENSE) for full details.

---

## 🙏 Acknowledgments

> *"Building Tomorrow, Today. Anything is Possible with God."*

Built with precision, performance, and long-term stability in mind.

**Maintained by**: Johan Wilhelm van Antwerp  
**Last Updated**: 2026-02-16

