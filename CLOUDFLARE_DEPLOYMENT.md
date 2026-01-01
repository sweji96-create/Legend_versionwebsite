# Cloudflare Pages Deployment Guide

This document provides instructions for deploying the Nashco Global website to Cloudflare Pages.

## Prerequisites

- A Cloudflare account
- Access to your GitHub repository
- The Nashco Global website files

## Deployment Steps

### Method 1: Direct Git Integration (Recommended)

1. **Login to Cloudflare Dashboard**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to **Workers & Pages**

2. **Create New Pages Project**
   - Click **Create application**
   - Select **Pages** tab
   - Click **Connect to Git**

3. **Connect Your Repository**
   - Authorize Cloudflare to access your GitHub account
   - Select the `sweji96-create/Legend_versionwebsite` repository
   - Choose the `copilot/enhance-image-placement` branch

4. **Configure Build Settings**
   ```
   Framework preset: None (Static site)
   Build command: (leave empty)
   Build output directory: /
   Root directory: /
   ```

5. **Environment Variables**
   - No environment variables needed for this static site

6. **Deploy**
   - Click **Save and Deploy**
   - Cloudflare will build and deploy your site
   - Your site will be available at: `https://your-project.pages.dev`

### Method 2: Direct Upload (Alternative)

If Git integration doesn't work:

1. **Create Direct Upload**
   - In Cloudflare Pages, click **Create application**
   - Select **Upload assets**

2. **Upload Files**
   - Upload all files from the repository:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `images/` folder with both SVG files
     - `_headers` file
     - `_redirects` file

3. **Deploy**
   - Click **Deploy site**
   - Your site will be live immediately

## Configuration Files

### `_headers`
Configures HTTP headers for security and caching:
- Content Security Policy (CSP) to allow external images and fonts
- Caching policies for static assets
- Security headers (X-Frame-Options, etc.)

### `_redirects`
Handles routing for the single-page application:
- Redirects all routes to `index.html` with 200 status

## Troubleshooting

### Issue: "Build failed" or "No index.html found"

**Solution:**
- Ensure build command is empty (this is a static site)
- Set build output directory to `/` (root)
- Verify `index.html` is in the repository root

### Issue: External images not loading

**Solution:**
- Check the `_headers` file is properly configured
- Ensure CSP allows `https:` and `http:` for `img-src`
- Verify external image URLs are accessible

### Issue: Fonts not loading (Google Fonts)

**Solution:**
- The `_headers` file includes:
  - `style-src` allows `https://fonts.googleapis.com`
  - `font-src` allows `https://fonts.gstatic.com`
- Check browser console for CSP errors

### Issue: 404 errors on refresh

**Solution:**
- Ensure `_redirects` file exists in the repository
- The file should contain: `/* /index.html 200`

### Issue: WhatsApp button not working

**Solution:**
- Update the placeholder phone number `971XXXXXXXXX` in:
  - `index.html` (line 342)
  - `script.js` (line 236)

## Custom Domain

To use a custom domain:

1. **Add Domain in Cloudflare Pages**
   - Go to your Pages project
   - Click **Custom domains**
   - Click **Set up a custom domain**

2. **Configure DNS**
   - Add your domain
   - Follow Cloudflare's instructions to update DNS records
   - Wait for DNS propagation (can take up to 24 hours)

3. **SSL/TLS**
   - Cloudflare automatically provisions SSL certificates
   - Your site will be served over HTTPS

## Performance

Cloudflare Pages provides:
- ✅ Global CDN distribution
- ✅ Automatic SSL/TLS certificates
- ✅ DDoS protection
- ✅ Web Application Firewall (WAF)
- ✅ HTTP/2 and HTTP/3 support
- ✅ Brotli compression
- ✅ Asset optimization

## Build Information

- **Framework**: Static HTML/CSS/JavaScript
- **Build Time**: Instant (no build process)
- **Node Version**: Not required
- **Dependencies**: None

## Support

For Cloudflare Pages-specific issues:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)

For website-specific issues:
- Contact: info@nashcoglobal.com
- Repository: [sweji96-create/Legend_versionwebsite](https://github.com/sweji96-create/Legend_versionwebsite)

---

**Last Updated**: January 2026
