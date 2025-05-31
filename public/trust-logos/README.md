# Trust Logos Directory

This directory contains logo files of partner companies and customers for display in the trust section of the website.

## Requirements for Logo Files

- File formats: SVG (preferred) or PNG with transparency
- Naming convention: Use either kebab-case (`company-name.svg`) or simple names (`companyname.svg`)
- Image specifications:
  - Optimal height: At least 40px for proper display
  - Ideal aspect ratio: Approximately 3:1 to 5:1 (width:height)
  - For best results: Ensure logos have transparent backgrounds
  
## Implementation Details

- The logos are displayed in a horizontally scrolling marquee
- Each logo has a consistent height (40px desktop, 28px mobile)
- Logos are automatically formatted for alt text (e.g., `company-name.svg` → "Company Name")
- Users with reduced motion preferences will see a static display

## Adding New Logos

1. Add the logo file to this directory
2. Follow the naming convention
3. The new logo will automatically appear in the marquee

The system will handle the rest, including proper sizing and accessibility features. 