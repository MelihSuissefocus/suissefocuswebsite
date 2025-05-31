# Hero Video Assets

This directory contains the video assets for the website's hero section.

## Required Files
- `hero-1080p.mp4` - High-resolution video (1920×1080, optimized to ~10MB)
- `hero-720p.mp4` - Mobile-friendly version (1280×720, ~6MB)
- `hero-poster.jpg` - Static placeholder image (1920×1080)

## Technical Specifications

### Video Files
- Format: MP4 with H.264 encoding
- Framerate: 30 fps
- Duration: 10-15 seconds (looping)
- Bitrate: 
  - 1080p: ~6-8 Mbps (target ~10MB file size)
  - 720p: ~3-4 Mbps (target ~6MB file size)
- Audio: None (videos are muted)

### Poster Image
- Format: JPG
- Resolution: 1920×1080
- Compression: Medium-high quality (80-85%)
- Size target: < 200KB

## Optimization Tips
1. Use a tool like FFmpeg for compression:
   ```
   ffmpeg -i source.mp4 -vf scale=1920:1080 -c:v libx264 -preset slow -crf 22 -an hero-1080p.mp4
   ffmpeg -i source.mp4 -vf scale=1280:720 -c:v libx264 -preset slow -crf 23 -an hero-720p.mp4
   ```

2. For the poster image:
   ```
   ffmpeg -i hero-1080p.mp4 -ss 00:00:03 -frames:v 1 -q:v 2 hero-poster.jpg
   ```

3. Further optimize with tools like:
   - [Handbrake](https://handbrake.fr/) for videos
   - [ImageOptim](https://imageoptim.com/) for the poster image

## Implementation Notes
The videos are implemented with lazy loading through an IntersectionObserver in the HeroVideoBackground component, ensuring they don't block initial page load or affect Core Web Vitals.

The component also respects user preferences like `prefers-reduced-motion` and `navigator.connection.saveData`. 