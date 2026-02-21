# Public Assets Directory Structure

This directory contains all static assets for the Kommon webapp. Here's the recommended organization:

## Current Structure

### Brand Assets (Root Level)
- `webapp_logo.svg` - Main logo for web applications (100x100, scaled 0.8)
- `website_logo.svg` - Logo with wordmark for websites (200x200) 
- `wordmark.svg` - Text-only "Kommon" in Nunito font (220x60)
- `socials_logo.svg` - Social media version with tagline "Find Your Community." (600x200)
- `ads_logo.svg` - Advertisement version (400x150)

### Default Assets
- `next.svg` - Next.js default favicon
- `vercel.svg` - Vercel deployment logo
- `file.svg` - File icon
- `globe.svg` - Globe icon  
- `window.svg` - Window icon

## Recommended Directory Structure

### `/images/` - General Images
```
/images/
├── /landing/          # Landing page specific images
│   ├── hero-bg.jpg    # Hero section background
│   ├── features/      # Feature illustration images
│   ├── testimonials/  # Student/testimonial photos
│   └── universities/  # University logos and photos
├── /ui/              # UI elements and icons
│   ├── icons/        # Custom icons
│   ├── illustrations/ # Custom illustrations
│   └── patterns/     # Background patterns
├── /housing/         # Housing-related images
│   ├── apartments/   # Apartment photos
│   ├── rooms/        # Room photos
│   └── neighborhoods/ # Neighborhood images
└── /users/           # User-related images
    ├── avatars/      # Default avatar images
    └── placeholders/ # Profile placeholders
```

### `/documents/` - Document Assets
```
/documents/
├── privacy-policy.pdf
├── terms-of-service.pdf
└── housing-guide.pdf
```

### `/favicons/` - Favicon Variations
```
/favicons/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
└── android-chrome-*.png
```

## Usage Guidelines

### Image Optimization
- Use WebP format for photos when possible
- Use SVG for logos and icons
- Optimize images before adding to repository
- Consider responsive image sizes (mobile, tablet, desktop)

### Naming Conventions
- Use kebab-case for file names (e.g., `hero-background.jpg`)
- Be descriptive but concise
- Include size indicators when relevant (e.g., `logo-small.svg`)

### File Size Recommendations
- Hero images: < 500KB
- Feature images: < 200KB  
- Thumbnails: < 50KB
- Icons: < 10KB

## Adding New Images

1. Choose appropriate subdirectory based on image purpose
2. Optimize image for web (compress, resize, convert format if needed)
3. Use descriptive, kebab-case naming
4. Update this README if adding new categories
5. Consider adding alt text descriptions for accessibility

## Brand Consistency

All images should maintain Kommon brand guidelines:
- Colors: Hearth (#C86A50), Sage (#A3B1A2), Sunlight (#F3DDA4), Ink (#2E3A4B), Foundation (#F7F5F2)
- Fonts: Nunito (headings), Lora (body text)
- Community Threshold symbol integration when appropriate
- University-focused, safety-first messaging
