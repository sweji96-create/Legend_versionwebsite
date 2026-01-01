# Assets Needed

This file documents the assets that should be added to this directory before or after deployment.

## Required Assets

### 1. Nashco Global Logo
- **Filename:** `logo.png` or `logo.svg`
- **Current:** Using placeholder from stock site
- **Location in code:** `index.html` line 55
- **Specifications:**
  - Format: PNG or SVG (SVG preferred)
  - Transparent background
  - Minimum size: 400px width
  - Optimized for web

### 2. Favicon
- **Filename:** `favicon.ico` (root) or replace `favicon-placeholder.svg`
- **Current:** SVG placeholder provided
- **Specifications:**
  - Multiple sizes: 16x16, 32x32, 48x48
  - ICO format for `favicon.ico`
  - SVG for modern browsers

### 3. Social Media Preview Image (OG Image)
- **Filename:** `og-image.jpg`
- **Current:** Not provided (referenced in meta tags)
- **Location in code:** `index.html` lines 20, 27
- **Specifications:**
  - Dimensions: 1200 x 630 pixels
  - Format: JPG or PNG
  - File size: < 1MB
  - Content: Nashco Global branding + tagline

## Optional Assets

### 4. Zahy Group Logo (if applicable)
- **Filename:** `zahy-group-logo.png`
- **Current:** Not included
- **Needed if:** Nashco Global is part of Zahy Group
- **Usage:** Footer, "Part of" section

### 5. Local Copies of Service Images
Currently using external URLs. Consider downloading:
- `hero-background.png` (1920x1080)
- `about-background.jpg` (1920x1080)
- `chemicals-service.jpg` (800x600)
- `automotive-service.jpg` (800x600)
- `manufacturing-service.jpg` (800x600)

## Image Optimization Guidelines

Before adding any image:
1. Compress using TinyPNG, ImageOptim, or similar
2. Use WebP format with JPG/PNG fallback
3. Generate responsive sizes (1x, 2x for retina)
4. Add appropriate alt text in HTML

## Current External Images

These work fine but could be replaced with owned/licensed images:

1. Logo: `https://t3.ftcdn.net/jpg/04/42/78/58/360_F_442785872_f9YDbJtF8VHCa2JK13H2cNo6NYKMLhOa.jpg`
2. Hero BG: `https://www.uaefreezones.com/assets/img/dubai-industrial-city-min.png`
3. About BG: `https://cdn.shortpixel.ai/spai/q_lossless+ret_img+to_webp/thecondorgroup.com/wp-content/uploads/2022/03/Untitled-design-33.jpg`
4. Chemicals: `https://www.nsenergybusiness.com/wp-content/uploads/sites/4/2020/08/refinery-3613526_640-1.jpg`
5. Automotive: `https://douradoautoservice.com/wp-content/uploads/2025/07/Find-Exclusive-Luxury-Car-Parts.jpeg`
6. Manufacturing: `https://www.oilandgasmiddleeast.com/cloud/2021/07/27/Petro-web_0.jpg`
