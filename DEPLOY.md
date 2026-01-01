# QUICK START - Cloudflare Deployment

## ⚠️ CRITICAL: Use the Correct Branch!

**YOU MUST DEPLOY FROM: `copilot/enhance-image-placement`**

The main branch only has README.md. All website files are in `copilot/enhance-image-placement`.

---

## Option 1: Cloudflare Pages (Easiest - Recommended)

1. Go to: https://dash.cloudflare.com
2. Click: **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Select repository: `sweji96-create/Legend_versionwebsite`
4. **⚠️ IMPORTANT:** Select branch: `copilot/enhance-image-placement` (NOT main!)
5. Build settings:
   - Framework preset: **None**
   - Build command: **(leave empty)**
   - Build output directory: **/**
6. Click **Save and Deploy**

✅ Done! Your site will be at: `https://[your-project].pages.dev`

---

## Option 2: Cloudflare Pages (Manual Upload)

If Git doesn't work:

1. Download these files from the `copilot/enhance-image-placement` branch:
   - index.html
   - styles.css
   - script.js
   - images/ (folder with 2 SVG files)
   - _headers
   - _redirects

2. Go to: https://dash.cloudflare.com
3. Click: **Workers & Pages** → **Create application** → **Pages** → **Upload assets**
4. Drag and drop all files (including images folder)
5. Click **Deploy site**

✅ Done!

---

## Option 3: Cloudflare Workers (Command Line)

1. Open terminal in project directory
2. Make sure you're on the right branch:
   ```bash
   git checkout copilot/enhance-image-placement
   ```

3. Deploy with Wrangler:
   ```bash
   npx wrangler pages deploy . --project-name=nashco-global
   ```

✅ Done!

---

## Troubleshooting

### Problem: "Only README.md shows" or "Text file opens"
**Fix:** You're on the wrong branch!
- Go to Cloudflare Pages → Settings → Builds & deployments
- Change Production branch to: `copilot/enhance-image-placement`
- Retry deployment

### Problem: "Missing entry-point" error
**Fix:** Use this command:
```bash
npx wrangler pages deploy . --project-name=nashco-global
```

### Problem: "No index.html found"
**Fix:** Verify you're on branch `copilot/enhance-image-placement`, not main

---

## Need Help?

See `CLOUDFLARE_DEPLOYMENT.md` for detailed instructions.
