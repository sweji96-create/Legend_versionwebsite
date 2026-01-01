# Nashco Global - Corporate Website

A production-ready bilingual (English/Arabic) single-page corporate website for Nashco Global, GCC industrial leader since 1994.

## 🌟 Features

### Bilingual Support
- **English & Arabic** with seamless language toggle
- **RTL Layout** for Arabic text direction
- **Dynamic Content Translation** for all sections
- **Bilingual Image Alt Text** for accessibility

### Responsive Design
- **Desktop**: Optimized for screens up to 1400px
- **Tablet**: Adaptive layout for 768px-1024px
- **Mobile**: Mobile-first design for 375px+
- **Vast Spacing**: 10-14rem section padding for premium feel
- **Touch-Friendly**: All interactions optimized for mobile

### Core Sections
1. **Hero Section** - Full-bleed Dubai skyline with call-to-action
2. **About Us** - Company history and statistics
3. **Zahy al Khaleej** - Parent group information
4. **Automotive Division** - Premium parts and components
5. **Manufacturing Division** - State-of-the-art facilities
6. **Trading Division** - International trade operations
7. **Chemical Solutions** - Industrial chemical products
8. **Contact Us** - Contact form with WhatsApp integration

### Interactive Features
- ✅ Smooth scrolling navigation
- ✅ Mobile hamburger menu
- ✅ WhatsApp floating button with pulse animation
- ✅ Contact form with WhatsApp integration
- ✅ Scroll-triggered animations
- ✅ Active navigation highlighting
- ✅ Language preference persistence

### Performance & Accessibility
- ✅ Lazy loading images
- ✅ Intersection Observer API
- ✅ Semantic HTML5 structure
- ✅ ARIA labels for screen readers
- ✅ Keyboard navigation support
- ✅ Print-friendly styles
- ✅ Reduced motion support
- ✅ High contrast mode support

## 🚀 Getting Started

### Option 1: Simple HTTP Server (Python)
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000

### Option 2: Live Server (VS Code)
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Node.js HTTP Server
```bash
npx http-server -p 8000
```

## 📁 File Structure

```
Legend_versionwebsite/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── images/
│   ├── nashco-logo.svg      # Main company logo
│   └── zahy-group-logo.svg  # Parent group logo
└── README.md          # This file
```

## 🎨 Customization

### Replace Logo Files
The website currently uses SVG placeholder logos. Replace these files with actual company logos:
- `images/nashco-logo.svg` - Main Nashco Global logo (recommended: 400x150px)
- `images/zahy-group-logo.svg` - Zahy Group logo (recommended: 200x200px)

### Update WhatsApp Number
Replace placeholder phone number in two locations:
1. **index.html** line 341: `https://wa.me/971XXXXXXXXX`
2. **script.js** line 236: `https://wa.me/971XXXXXXXXX`

Change `971XXXXXXXXX` to actual WhatsApp business number (e.g., `971501234567`)

### Update Contact Information
Edit contact details in `index.html` (Contact Us section):
- Address
- Email
- Phone number

### Customize Colors
Main brand colors are defined in `styles.css` CSS variables:
```css
:root {
    --primary-color: #c41e3a;      /* Nashco Red */
    --secondary-color: #1a472a;    /* Nashco Green */
    --accent-color: #2d5f3f;       /* Accent Green */
}
```

### Change External Images
Premium external images are used for sections. To replace:
1. Locate the `<img>` tags in `index.html`
2. Update the `src` attribute with new image URLs
3. Update `data-en` and `data-ar` alt text attributes

## 🌐 Browser Support

- ✅ Chrome/Edge (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ iOS Safari (latest 2 versions)
- ✅ Chrome for Android (latest version)

## 📱 Testing

### Desktop Testing
1. Open in browser at standard resolution (1920x1080)
2. Test language toggle
3. Test navigation scrolling
4. Verify all sections display correctly

### Mobile Testing
1. Open browser DevTools (F12)
2. Toggle device toolbar
3. Test with iPhone/Android presets
4. Verify mobile menu works
5. Test touch interactions

### RTL Testing
1. Click language toggle to switch to Arabic
2. Verify text flows right-to-left
3. Check that layout mirrors properly
4. Test navigation in RTL mode

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid & Flexbox
- **Vanilla JavaScript** - No frameworks required
- **Google Fonts** - Inter (English), Tajawal (Arabic)
- **External Images** - Premium stock photography

## 📝 Notes

### Image Sources
All external images are properly licensed stock photos:
- Hero: iStock Dubai skyline
- Automotive: Euro Parts automotive components
- Manufacturing: UAE Media Office facility
- Trading: Jebel Ali Port
- Chemicals: Oil & Gas Middle East refinery
- Other: Unsplash business images

### Language Persistence
The website remembers user language preference using `localStorage`, so visitors will see their preferred language on return visits.

### Form Handling
The contact form redirects to WhatsApp instead of using a backend. For email-based form submission, integrate with a backend service or form handler like Formspree.

## 🔒 Security

- ✅ No external scripts (except Google Fonts)
- ✅ `rel="noopener noreferrer"` on external links
- ✅ No inline JavaScript
- ✅ CSP-friendly structure

## 📄 License

Copyright © 2026 Nashco Global. All rights reserved.

## 🤝 Support

For questions or support, contact: info@nashcoglobal.com

---

**Built with ❤️ for Nashco Global**
