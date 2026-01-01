# Nashco Global Website - Deployment Guide

## 🚀 Deployment to Cloudflare Pages

### Prerequisites
- A Cloudflare account (free tier is sufficient)
- This GitHub repository connected to your Cloudflare account

### Deployment Steps

#### 1. Connect GitHub Repository to Cloudflare Pages

1. **Log in to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com/
   - Navigate to "Workers & Pages" from the sidebar

2. **Create New Pages Project**
   - Click "Create application"
   - Select "Pages" tab
   - Click "Connect to Git"

3. **Connect Repository**
   - Authorize Cloudflare to access your GitHub account
   - Select the `Legend_versionwebsite` repository
   - Click "Begin setup"

4. **Configure Build Settings**
   ```
   Project name: nashco-global (or your preferred name)
   Production branch: main
   Build command: (leave empty - it's a static site)
   Build output directory: /
   Root directory: /
   ```

5. **Environment Variables**
   - None required for this static site

6. **Deploy**
   - Click "Save and Deploy"
   - Wait 1-2 minutes for deployment to complete
   - Your site will be live at: `https://nashco-global.pages.dev`

#### 2. Custom Domain Setup (Optional)

1. **Add Custom Domain**
   - In your Pages project, go to "Custom domains"
   - Click "Set up a custom domain"
   - Enter your domain (e.g., `nashcoglobal.com`)

2. **Update DNS Records**
   - Cloudflare will provide you with DNS records to add
   - If your domain is already on Cloudflare, it will auto-configure
   - If not, add the CNAME record pointing to your Pages URL

3. **SSL Certificate**
   - Cloudflare automatically provisions SSL certificates
   - Your site will be accessible via HTTPS within minutes

#### 3. Post-Deployment Configuration

##### Performance Optimization
1. **Enable Caching**
   - Cloudflare Pages automatically caches static assets
   - No additional configuration needed

2. **Auto Minification** (Optional)
   - Go to Cloudflare Dashboard > Speed > Optimization
   - Enable "Auto Minify" for HTML, CSS, and JavaScript

3. **Brotli Compression**
   - Automatically enabled by Cloudflare
   - No configuration needed

##### Analytics Setup

**Option 1: Cloudflare Web Analytics (Recommended)**
1. Go to your Cloudflare dashboard
2. Navigate to "Web Analytics"
3. Click "Add a site"
4. Copy the provided script
5. Add it to `index.html` before the closing `</body>` tag:
```html
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "YOUR_TOKEN_HERE"}'></script>
```

**Option 2: Google Analytics**
1. Create a Google Analytics 4 property
2. Copy the tracking code
3. Add it to `index.html` in the `<head>` section:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

##### Contact Form Backend Integration

The current form is client-side only. To make it functional, integrate one of these free services:

**Option 1: Formspree (Recommended)**
1. Sign up at https://formspree.io/ (free tier: 50 submissions/month)
2. Create a new form and get your form endpoint
3. Update `index.html` line 291:
```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: Web3Forms**
1. Sign up at https://web3forms.com/ (free tier: 250 submissions/month)
2. Get your access key
3. Update `index.html` line 291-292:
```html
<form id="contactForm" action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
```

**Option 3: Cloudflare Workers (Advanced)**
- Create a Cloudflare Worker to handle form submissions
- Forward submissions to your email or a webhook

#### 4. Update WhatsApp Number

Update the WhatsApp contact number in `index.html`:
1. Find the WhatsApp button (you'll add this)
2. Replace the number with your actual business number
3. Format: `https://wa.me/966XXXXXXXXX` (country code + number, no spaces or +)

### File Structure

```
Legend_versionwebsite/
├── index.html              # Main HTML file
├── styles.css              # Stylesheet
├── script.js               # JavaScript functionality
├── favicon.ico             # Website icon (add your own)
├── robots.txt              # Search engine directives
├── sitemap.xml             # Site structure for SEO
├── assets/
│   └── images/
│       ├── favicon-placeholder.svg
│       └── whatsapp.svg
├── DEPLOYMENT.md           # This file
└── README.md               # Project documentation
```

### Deployment Checklist

Before going live, ensure:

- [x] All images are optimized and loading correctly
- [ ] Contact form is connected to a backend service
- [ ] WhatsApp button has the correct business number
- [ ] Favicon is added (replace placeholder)
- [ ] Custom domain is configured (if applicable)
- [ ] SSL certificate is active
- [ ] Analytics tracking is set up
- [ ] Meta tags are accurate (titles, descriptions, og:image)
- [ ] Test on mobile, tablet, and desktop
- [ ] Test Arabic/RTL layout
- [ ] All links are working
- [ ] Console has no errors
- [ ] Page speed is optimized

### Alternative Hosting Platforms

This static site can also be deployed to:

#### Netlify
1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: `/`
4. Deploy site

#### Vercel
1. Import your GitHub repository
2. Framework preset: Other
3. Build command: (leave empty)
4. Output directory: `/`
5. Deploy

#### GitHub Pages
1. Go to repository Settings > Pages
2. Source: Deploy from a branch
3. Branch: `main` / root
4. Save and wait for deployment

### Maintenance

**Regular Updates:**
- Keep content fresh and up-to-date
- Monitor analytics for user behavior
- Update contact information as needed
- Refresh images periodically

**Performance Monitoring:**
- Use Cloudflare Analytics to track visitors
- Monitor page load times
- Check for broken links monthly
- Update dependencies (if any are added)

### Troubleshooting

**Issue: Images not loading**
- Check that all image paths are relative
- Verify images exist in the assets folder
- Check browser console for 404 errors

**Issue: Form not working**
- Verify form action URL is correct
- Check that form backend service is active
- Test with a simple submission

**Issue: Arabic/RTL not working**
- Clear browser cache
- Check that script.js is loading correctly
- Verify language toggle button is functional

**Issue: SSL certificate pending**
- Wait 24-48 hours for propagation
- Ensure DNS records are correct
- Contact Cloudflare support if issues persist

### Support

For deployment issues:
- Cloudflare Pages docs: https://developers.cloudflare.com/pages/
- Cloudflare Community: https://community.cloudflare.com/

For website issues:
- Check browser console for errors
- Review script.js for any JavaScript errors
- Ensure all resources are loading correctly

---

**Last Updated:** January 2026
**Version:** 1.0.0
