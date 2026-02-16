# Ionity Today Assets — Hosting Requirements & Setup

## Platform

- **Host**: GitHub Pages (static site hosting)
- **Source**: `main` branch, root `/`
- **Engine**: Static HTML (no build step required)
- **Custom domain** (optional): Configure via `CNAME` file

---

## Requirements

### Repository Setup

1. **GitHub repository** — public (required for free GitHub Pages)
2. **Branch**: `main` (default)
3. **Entry point**: `index.html` at repository root

### GitHub Pages Activation

1. Navigate to repository **Settings → Pages**
2. Under **Build and deployment**:
   - **Source**: Deploy from a branch
   - **Branch**: `main` / `/ (root)`
3. Click **Save**
4. Site will be available at:
   ```
   https://<username>.github.io/assets-ionity/
   ```

### Custom Domain (Optional)

1. Add your domain to `CNAME` file (one line, e.g., `assets.ionity.today`)
2. In repo **Settings → Pages → Custom domain**, enter the same domain
3. Configure DNS:
   - **CNAME record**: `assets.ionity.today` → `<username>.github.io`
   - Or **A records** pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
4. Enable **Enforce HTTPS**

---

## File Size & Limits

| Constraint | Limit |
|------------|-------|
| Repository size | 1 GB (recommended) |
| Individual file | 100 MB max |
| GitHub Pages site | 1 GB max |
| Bandwidth | 100 GB / month (soft) |
| Builds | 10 per hour |

---

## Dependencies

**None.** The asset gallery is a single self-contained `index.html` with:
- Inline CSS (no external stylesheets)
- Inline JavaScript (no frameworks or npm packages)
- No build tools, bundlers, or server-side processing

### Browser Support

- Chrome 80+
- Firefox 78+
- Safari 14+
- Edge 80+

---

## Recommended Git Configuration

```bash
# Initialize and push
git init
git add .
git commit -m "Initial commit: Ionity Today asset library"
git branch -M main
git remote add origin https://github.com/<username>/assets-ionity.git
git push -u origin main
```

---

## Security

- All assets served over HTTPS (enforced by GitHub Pages)
- No server-side code or API keys
- XMP metadata sidecar included for provenance tracking
- Content-Security-Policy can be set via `<meta>` tag in `index.html`

---

## Maintenance

- **Add new assets**: Place files in `assets/Images/`, then update the `assets` array in `index.html`
- **Remove assets**: Delete the file and remove the corresponding entry from the `assets` array
- **Update metadata**: Edit `ionity.today.xmp` for XMP sidecar changes

---

*Last updated: 2026-02-16*
