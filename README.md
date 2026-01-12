# Carthage Space Sciences Program Website

A modern, content-managed website for the Carthage College Space Sciences Program built with Astro, featuring Decap CMS for easy content editing.

## Features

- 🚀 **Modern Stack**: Built with Astro for optimal performance
- ✏️ **Visual Content Editing**: Decap CMS provides a user-friendly interface for managing content
- 🎨 **Carthage Branding**: Full integration of official Carthage College brand guidelines
- 📱 **Responsive Design**: Works seamlessly on all devices
- 🔄 **Automated Deployment**: GitHub Actions automatically deploys to GitHub Pages

## Content Types

The CMS supports the following content types:
- **Student Bios**: Profiles of program participants
- **News & Updates**: Program announcements and news stories
- **Projects & Experiments**: Research project showcases
- **Publications**: Academic papers and presentations
- **Resources**: Learning materials and documentation
- **Media Coverage**: Press and media appearances
- **Photo Galleries**: Image collections from events and experiments
- **Partners & Sponsors**: Logos and information about collaborators

## Getting Started

### Prerequisites

- Node.js 18 or higher
- Git
- A GitHub account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kmcrosby/crosby-projects.git
   cd crosby-projects
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:4321/crosby-projects/`

### Building for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

## Using the CMS

### Initial Setup

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to Pages
   - Set Source to "GitHub Actions"

2. **Set up Netlify Identity (for authentication)**
   - Go to [Netlify](https://app.netlify.com)
   - Create a new site (can be a placeholder)
   - Enable Identity in site settings
   - Enable Git Gateway
   - Copy your site URL

3. **Update CMS Configuration**
   - Edit `public/admin/config.yml`
   - Update the backend configuration with your site details

### Accessing the CMS

Once deployed, access the CMS at:
```
https://kmcrosby.github.io/crosby-projects/admin/
```

### Adding Content

1. Log in to the CMS at `/admin/`
2. Choose a content type from the sidebar
3. Click "New [Content Type]"
4. Fill in the form fields
5. Click "Publish"
6. Changes will automatically deploy to the live site

### Managing Users

Students and collaborators can be given CMS access through Netlify Identity:
1. Go to your Netlify site dashboard
2. Navigate to Identity
3. Invite users via email
4. They'll receive an invitation to set up their account

## Customization

### Updating Carthage Branding

Brand colors and typography are defined in `src/styles/global.css`. To update:

1. Edit the CSS variables in the `:root` selector
2. Colors follow the official Carthage brand guidelines
3. Fonts use web-safe fallbacks (Arial for sans-serif, Times New Roman for serif)

### Contact Form Setup

The contact form uses Formspree for form handling:

1. Go to [Formspree](https://formspree.io)
2. Create a free account
3. Create a new form
4. Copy the form endpoint URL
5. Update `src/pages/contact.astro` line 67:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

## Project Structure

```
crosby-projects/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── admin/
│   │   ├── index.html         # CMS admin interface
│   │   └── config.yml         # CMS configuration
│   └── images/                # Static images
├── src/
│   ├── components/            # Reusable components
│   ├── content/               # CMS content files
│   │   ├── students/
│   │   ├── news/
│   │   ├── projects/
│   │   ├── publications/
│   │   ├── resources/
│   │   ├── media/
│   │   ├── galleries/
│   │   ├── partners/
│   │   └── pages/
│   ├── layouts/
│   │   └── BaseLayout.astro  # Main layout template
│   ├── pages/                # Page routes
│   │   ├── index.astro       # Home page
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── join.astro
│   └── styles/
│       └── global.css        # Global styles
├── astro.config.mjs          # Astro configuration
├── package.json
└── README.md
```

## Deployment

The site automatically deploys when you push to the `main` branch:

1. Make your changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. GitHub Actions will build and deploy automatically
4. Site will be live at `https://kmcrosby.github.io/crosby-projects/`

## Adding a Custom Domain (Optional)

1. Purchase a domain (e.g., `carthagespace.com`)
2. In your repository settings:
   - Go to Pages
   - Add your custom domain
3. In your domain registrar:
   - Add a CNAME record pointing to `kmcrosby.github.io`
4. Update `astro.config.mjs`:
   ```javascript
   export default defineConfig({
     site: 'https://carthagespace.com',
     base: '/',
     // ...
   });
   ```

## Troubleshooting

### Build Errors

If the build fails:
1. Check the GitHub Actions log for specific errors
2. Ensure all dependencies are listed in `package.json`
3. Test the build locally with `npm run build`

### CMS Not Loading

1. Ensure GitHub Pages is enabled
2. Check that Netlify Identity is properly configured
3. Verify the backend configuration in `config.yml`

### Images Not Displaying

1. Ensure images are in `public/images/uploads/`
2. Check that image paths in content start with `/images/uploads/`
3. Rebuild and redeploy the site

## Support

For questions or issues:
- Email: [Contact program director]
- GitHub Issues: [Repository URL]/issues

## License

© 2026 Carthage College Space Sciences Program. All rights reserved.
