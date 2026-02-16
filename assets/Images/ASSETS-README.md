# Asset Images - Important Notice

## 📸 Placeholder Assets Included

This directory contains **placeholder SVG assets** to make the site functional out of the box. These are generic placeholders with the Ionity branding.

## 🎨 Add Your Own Assets

To fully populate this gallery with your actual brand assets:

### Step 1: Add Your Image Files
Place your actual image files in this directory:
- PNG files for raster graphics (logos, icons, photos)
- SVG files for vector graphics (scalable logos, icons)
- JPEG files for photographs

### Step 2: Update the Asset Registry
Edit `index.html` and update the `assets` array around line 494:

```javascript
const assets = [
  { name: 'Ionity Logo (Transparent)', file: '-transparrent-ionity-logo-edited - Copy.png' },
  { name: 'Ionity Logo (Transparent) SVG', file: '-transparrent-ionity-logo-edited - Copy.svg' },
  // ... add your assets here
];
```

### Step 3: Commit and Push
```bash
git add assets/Images/*
git commit -m "Add brand assets"
git push
```

## 📋 Current Placeholder Files

The following SVG placeholders are included:
- `icon-512.svg` - 512×512 app icon
- `icon-192.svg` - 192×192 app icon  
- `apple-touch-icon.svg` - Apple touch icon
- `ionity-social-card.svg` - Social media card
- `ionity-logo-edited.svg` - Main logo

## 🔄 Replace These

To match your actual branding:
1. Export your logo/icons as PNG and SVG
2. Name them descriptively (e.g., `my-brand-logo-dark.png`)
3. Add them to this directory
4. Update the asset registry in `index.html`
5. Delete or replace the placeholder SVGs

## ℹ️ Image Specifications

### Icons
- **App Icon**: 512×512 pixels, PNG or SVG
- **Favicon**: 192×192 pixels, PNG
- **Apple Touch Icon**: 180×180 pixels, PNG

### Social Cards
- **Open Graph**: 1200×630 pixels, PNG or JPEG
- **Twitter Card**: 1200×630 pixels, PNG or JPEG

### Logos
- **Vector**: SVG format (scalable)
- **Raster**: PNG with transparency
- Sizes: Various (provide multiple sizes if needed)

## 🎯 Best Practices

1. **Use descriptive filenames**: `ionity-logo-dark-transparent.png`
2. **Optimize file sizes**: Compress PNGs, minify SVGs
3. **Provide multiple formats**: Both PNG and SVG when possible
4. **Include variants**: Light/dark mode versions
5. **Add alt text**: Update the `name` property in the assets array

---

**Note**: The current assets are functional placeholders. Replace them with your actual brand materials for a complete experience.
