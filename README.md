# Nashco Global Website

A professional, responsive, and bilingual corporate website for Nashco Global - a multi-sector leader in the GCC delivering excellence in chemicals, automotive, manufacturing, and trading since 1994.

## Features

### ✨ Ultra-Modern Design
- **Responsive Design**: Flawless display across mobile, tablet, and desktop devices
- **Parallax Effects**: Stunning parallax background images on hero sections
- **Smooth Animations**: AOS (Animate On Scroll) library integration for elegant transitions
- **Professional Color Scheme**: Gulf Sea & Sky Modern palette (Deep Gulf Blue, Teal, Light Sky Blue)

### 🌍 Bilingual Support
- **English & Arabic**: Complete bilingual content with seamless language toggle
- **RTL Support**: Proper right-to-left text direction for Arabic
- **Local Storage**: Remembers user's language preference
- **Professional Translations**: Accurate, culturally appropriate Arabic translations

### 🚀 SEO Optimized
- **Unique Meta Tags**: Custom titles, descriptions, and keywords for each page
- **JSON-LD Structured Data**: Schema.org markup for organizations and services
- **robots.txt & sitemap.xml**: Search engine optimization files included
- **Alt Text**: Bilingual alt text for all images
- **Semantic HTML5**: Proper heading hierarchy and semantic tags

### 📱 Fully Responsive
- **Mobile-First**: Optimized for mobile devices (320-480px)
- **Tablet Support**: Perfect layouts for tablets (481-1024px)
- **Desktop Excellence**: Stunning wide-screen layouts (1025px+)
- **Touch-Friendly**: Large buttons and easy navigation on mobile

### 🎨 Rich Interactions
- **Mobile Menu**: Smooth hamburger menu with animations
- **Form Validation**: Client-side validation for contact form
- **FAQ Accordion**: Interactive FAQ section
- **Image Gallery**: Lightbox gallery with zoom functionality
- **Testimonial Carousel**: Auto-rotating testimonials
- **Animated Counters**: Statistics with count-up animations
- **Lazy Loading**: Images load as you scroll for better performance

## Pages

1. **Home (index.html)**: Hero section, company intro, services overview, why choose us, testimonials, CTA
2. **About Us (about.html)**: Company history, interactive timeline, mission/vision, core values, team section
3. **Zahy Al Khaleej (zahy-al-khaleej.html)**: Chemicals division, refrigerants, services, gallery, sustainability
4. **Automotive (automotive.html)**: Automotive solutions, OEM parts, assembly solutions, technical support
5. **Manufacturing (manufacturing.html)**: Manufacturing capabilities, CNC machining, fabrication, quality control
6. **Trading (trading.html)**: Global trading services, supply chain, logistics, customs compliance
7. **Contact (contact.html)**: Contact form, information, FAQ accordion, location details

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with Flexbox and Grid
- **Vanilla JavaScript**: No heavy frameworks, pure performance
- **AOS Library**: Smooth scroll animations
- **Google Fonts**: Poppins (Latin) and Cairo (Arabic)
- **SVG Graphics**: Scalable vector icons and logo

## File Structure

```
Legend_versionwebsite/
├── index.html              # Home page
├── about.html             # About Us page
├── zahy-al-khaleej.html   # Chemicals division page
├── automotive.html        # Automotive page
├── manufacturing.html     # Manufacturing page
├── trading.html           # Trading page
├── contact.html           # Contact page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
├── images/                # Image assets (placeholder)
├── robots.txt             # Search engine directives
├── sitemap.xml            # XML sitemap
├── .gitignore             # Git ignore file
└── README.md              # This file
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/sweji96-create/Legend_versionwebsite.git
   cd Legend_versionwebsite
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No build process required - works instantly!

3. **For development**
   - Use Live Server extension in VS Code for hot reload
   - Or use Python's simple HTTP server:
     ```bash
     python -m http.server 8000
     ```

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Optimized Images**: Lazy loading for better performance
- **Minimal Dependencies**: Only AOS library (lightweight)
- **Clean Code**: Well-organized, commented, and maintainable
- **Fast Loading**: < 3s load time on average connection

## Customization

### Changing Colors
Edit CSS variables in `css/style.css`:
```css
:root {
  --deep-gulf-blue: #003087;
  --teal: #00A1D6;
  --light-sky-blue: #A5D8FF;
  /* ... */
}
```

### Adding Content
- Duplicate existing sections
- Maintain bilingual structure (`.en` and `.ar` classes)
- Add data-aos attributes for animations

### Language Toggle
Language preference is stored in localStorage. The toggle button switches between English and Arabic with smooth transitions.

## SEO Best Practices Implemented

✅ Unique titles and descriptions per page
✅ Structured data (JSON-LD)
✅ Semantic HTML
✅ Alt text for images
✅ robots.txt and sitemap.xml
✅ Canonical URLs
✅ Mobile-friendly
✅ Fast loading times

## Accessibility

- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation support
- ✅ High contrast text
- ✅ Semantic HTML structure
- ✅ Alt text for all images

## Future Enhancements

- [ ] Add actual image assets to `/images` folder
- [ ] Implement backend for contact form submission
- [ ] Add Google Maps integration
- [ ] Implement blog section
- [ ] Add more case studies and portfolio items
- [ ] Integrate analytics (Google Analytics)
- [ ] Add chat widget for customer support

## Credits

- **Design & Development**: Nashco Global Web Team
- **Fonts**: Google Fonts (Poppins, Cairo)
- **Animations**: AOS Library
- **Icons**: Custom SVG graphics

## License

© 2024 Nashco Global. All Rights Reserved.

---

**Established 1994** | Diversified Excellence Across GCC
