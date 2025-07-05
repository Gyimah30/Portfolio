# Modern Personal Portfolio Website

A clean, responsive, and modern personal portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing your work as a web developer, graphic designer, and security enthusiast.

## Features

- **Modern Design**: Clean, minimalist design with a professional tech-focused aesthetic
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Subtle scroll animations and hover effects
- **Project Filtering**: Filter projects by category (Web Development, Graphic Design, Security)
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **SEO Optimized**: Proper meta tags and semantic HTML

## Color Scheme

- **Primary Blue**: #3B82F6
- **Dark Gray**: #1F2937
- **Light Gray**: #6B7280
- **Background**: #FFFFFF
- **Light Background**: #F8FAFC

## Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: 28-36px
- **Body Text**: 16-18px

## File Structure

```
Portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization Guide

### 1. Personal Information

Update the following in `index.html`:

- **Name**: Replace "Your Name" with your actual name
- **Profile Picture**: Replace the placeholder image URL with your photo
- **Contact Information**: Update email, WhatsApp, LinkedIn, and GitHub links
- **About Section**: Customize the bio and skills

### 2. Projects

Add your own projects by duplicating the project card structure:

```html
<div class="project-card" data-category="web">
    <div class="project-image">
        <img src="your-project-image.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span class="tag">Technology</span>
        </div>
        <div class="project-links">
            <a href="#" class="btn btn-small">Live Demo</a>
            <a href="#" class="btn btn-small btn-outline">GitHub</a>
        </div>
    </div>
</div>
```

### 3. Blog Posts

Add your blog posts by duplicating the blog card structure:

```html
<article class="blog-card">
    <div class="blog-image">
        <img src="blog-image.jpg" alt="Blog Title">
    </div>
    <div class="blog-content">
        <div class="blog-meta">
            <span class="blog-date">Date</span>
            <span class="blog-category">Category</span>
        </div>
        <h3>Blog Title</h3>
        <p>Blog excerpt...</p>
        <a href="#" class="read-more">Read More →</a>
    </div>
</article>
```

### 4. Skills

Update the skills section in the About section to match your expertise.

### 5. Colors and Styling

Modify the CSS variables in `styles.css` to change the color scheme:

```css
/* Primary colors */
--primary-blue: #3B82F6;
--dark-gray: #1F2937;
--light-gray: #6B7280;
```

## Sections Included

1. **Hero Section**: Name, tagline, and profile picture
2. **About Section**: Bio and skills breakdown
3. **Projects Section**: Showcase of your work with filtering
4. **Blog Section**: Articles and learning journey
5. **Contact Section**: Contact form and social links
6. **Footer**: Copyright and social icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Optimized images with placeholder URLs
- Minimal JavaScript for fast loading
- CSS animations for smooth interactions
- Responsive images and layouts

## Getting Started

1. Download or clone the files
2. Open `index.html` in your browser
3. Customize the content as needed
4. Replace placeholder images with your own
5. Update contact information and social links
6. Deploy to your preferred hosting service

## Deployment

You can deploy this portfolio to:

- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Easy deployment with drag-and-drop
- **Vercel**: Fast deployment with Git integration
- **Any web hosting service**: Traditional hosting providers

## Customization Tips

- **Images**: Use high-quality images for projects and profile picture
- **Content**: Keep descriptions concise and engaging
- **Links**: Ensure all project and social media links are working
- **SEO**: Add meta descriptions and keywords for better search visibility
- **Analytics**: Consider adding Google Analytics to track visitors

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing your portfolio or have questions, feel free to reach out!

---

**Note**: Remember to replace all placeholder content with your actual information before deploying your portfolio. 