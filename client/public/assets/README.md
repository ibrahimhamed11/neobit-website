# Assets Directory

This directory contains all static assets for the NeoBit website.

## Structure

```
assets/
├── fonts/          # Font files and font CSS
│   └── fonts.css   # Font definitions
├── images/         # Image assets
│   └── neobit-logo.png
└── README.md       # This file
```

## Fonts

The project uses **Droid Sans** font family:
- Regular (400)
- Bold (700)

Fonts are loaded via Google Fonts CDN in `fonts/fonts.css`.

To add custom local fonts:
1. Place font files (.woff2, .woff, .ttf) in the `fonts/` directory
2. Update `fonts.css` with @font-face declarations
3. Reference the font-family in your CSS

## Images

All images should be placed in the `images/` directory and referenced using the path:
```
/assets/images/filename.ext
```

Current images:
- `neobit-logo.png` - Main NeoBit logo
