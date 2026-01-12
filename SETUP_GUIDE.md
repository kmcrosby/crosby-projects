# Setup Guide for Carthage Space Sciences Website

## Quick Start Summary

Your website is now ready to be deployed! Here's what you need to do next:

### Step 1: Push to GitHub (Do this first!)

```bash
cd /path/to/crosby-projects
git add .
git commit -m "Initial website setup with Decap CMS"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to https://github.com/kmcrosby/crosby-projects
2. Click "Settings"
3. Click "Pages" in the left sidebar
4. Under "Build and deployment" → "Source", select **"GitHub Actions"**
5. Save

Your site will automatically build and deploy!

### Step 3: Set Up CMS Authentication

To allow you and students to edit content through the CMS interface, you need to set up authentication:

#### Option A: Netlify Identity (Recommended - Easiest)

1. **Create a Netlify account**
   - Go to https://app.netlify.com
   - Sign up for free

2. **Create a site (just for identity)**
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select `kmcrosby/crosby-projects`
   - Keep all default build settings
   - Click "Deploy site"

3. **Enable Identity & Git Gateway**
   - In your Netlify site dashboard, go to "Identity"
   - Click "Enable Identity"
   - Go to "Settings and usage"
   - Under "Registration preferences", select "Invite only"
   - Scroll down to "Services" → "Git Gateway"
   - Click "Enable Git Gateway"

4. **Update your config**
   The config is already set up correctly in `public/admin/config.yml`

5. **Invite users**
   - In Netlify Identity tab, click "Invite users"
   - Enter email addresses for yourself and students
   - They'll receive invitations to set up accounts

#### Option B: GitHub Backend (Alternative)

If you prefer not to use Netlify, you can use GitHub authentication directly:

1. **Update `public/admin/config.yml`:**
   ```yaml
   backend:
     name: github
     repo: kmcrosby/crosby-projects
     branch: main
   ```

2. **Create GitHub OAuth App:**
   - Go to GitHub Settings → Developer settings → OAuth Apps
   - Click "New OAuth App"
   - Fill in:
     - Application name: Carthage Space Sciences CMS
     - Homepage URL: https://kmcrosby.github.io/crosby-projects/
     - Authorization callback URL: https://api.netlify.com/auth/done
   - Save the Client ID and Client Secret

3. **Set up external OAuth client:**
   You'll need a backend service to handle OAuth. Options include:
   - Netlify (easiest, use Option A instead)
   - Self-hosted OAuth client
   - Third-party services like Auth0

**Recommendation:** Use Option A (Netlify Identity) - it's free, easy, and handles everything for you.

### Step 4: Set Up Contact Form

1. **Create Formspree account**
   - Go to https://formspree.io
   - Sign up for free (50 submissions/month)

2. **Create a new form**
   - Click "New Form"
   - Name it "Carthage Space Sciences Contact"
   - Copy the form endpoint URL (looks like `https://formspree.io/f/YOUR_FORM_ID`)

3. **Update the contact page**
   - Edit `src/pages/contact.astro`
   - On line 67, replace `YOUR_FORM_ID` with your actual form ID:
     ```html
     action="https://formspree.io/f/YOUR_ACTUAL_FORM_ID"
     ```
   - Commit and push the change

## Accessing Your Site

After deployment completes (usually 2-5 minutes):

- **Live Site:** https://kmcrosby.github.io/crosby-projects/
- **CMS Admin:** https://kmcrosby.github.io/crosby-projects/admin/

## Adding Content

### Your First Login

1. Go to https://kmcrosby.github.io/crosby-projects/admin/
2. Click "Login with Netlify Identity"
3. Accept the invitation email you received
4. Set your password
5. You're in!

### Adding a Student Bio

1. Log into the CMS
2. Click "Student Bios" in the left sidebar
3. Click "New Student Bios"
4. Fill in the form:
   - Name: John Doe
   - Photo: Upload an image
   - Major: Physics
   - Year: Junior
   - Research Focus: Propellant transfer in microgravity
   - Bio: Write a few paragraphs about the student
   - Accomplishments: Add any awards or achievements
5. Click "Publish"
6. Wait 2-5 minutes for the site to rebuild
7. The bio will appear on the Students page!

### Adding News

1. Click "News & Updates"
2. Click "New News & Updates"
3. Fill in:
   - Title: "Program Wins NASA TechLeap Prize"
   - Date: Select today's date
   - Summary: Brief summary
   - Content: Full article text
   - External Link (optional): Link to news source
4. Publish!

### Adding Projects

1. Click "Projects & Experiments"
2. Click "New Projects & Experiments"
3. Add project details, images, and team members
4. Publish!

## Giving Students Access

### Inviting Students

1. Log into Netlify
2. Go to your site → Identity
3. Click "Invite users"
4. Enter student email addresses
5. They'll receive invitation emails

### Setting Permissions

Students can:
- Add/edit their own bios
- Add project updates
- Upload images to galleries
- Add news items

Students cannot:
- Delete other students' content
- Change site settings
- Modify pages (like About, Contact)

To restrict what students can do, you can update the CMS config later.

## Customization

### Updating Colors

Edit `src/styles/global.css` and modify the color variables:

```css
:root {
  --carthage-red: #D0202E;
  --carthage-blue: #3AB0C8;
  /* etc. */
}
```

### Adding New Pages

1. Create a new file in `src/pages/` (e.g., `newpage.astro`)
2. Use the same layout structure as other pages
3. Add a link in the navigation (`src/layouts/BaseLayout.astro`)

### Modifying Navigation

Edit `src/layouts/BaseLayout.astro` around line 30 to add/remove/reorder navigation items.

## Troubleshooting

### Site Not Building

1. Check GitHub Actions:
   - Go to your repo → Actions tab
   - Look for failed workflows
   - Click to see error details

2. Common issues:
   - Missing dependencies → Run `npm install` locally
   - Syntax errors → Check the error log
   - Build failures → Test locally with `npm run build`

### CMS Not Loading

1. Check Netlify Identity is enabled
2. Verify Git Gateway is enabled
3. Make sure you're logged in
4. Clear browser cache and try again

### Content Not Appearing

1. Content needs time to build (2-5 minutes)
2. Check the GitHub Actions build status
3. Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
4. Verify content was published (not saved as draft)

### Images Not Showing

1. Ensure images are uploaded through the CMS
2. Check that images are in `public/images/uploads/`
3. Verify image paths start with `/images/uploads/`
4. Try a smaller image (< 5MB)

## Adding a Custom Domain (Later)

When you're ready for a professional domain:

1. **Purchase domain** (e.g., carthagespace.com)
   - Recommended: Namecheap, Google Domains, Cloudflare

2. **Update GitHub Pages settings**
   - Go to repo Settings → Pages
   - Enter your custom domain
   - Save

3. **Update DNS records**
   In your domain registrar:
   - Add a CNAME record: `www` → `kmcrosby.github.io`
   - Add A records for apex domain (if needed)

4. **Update site config**
   Edit `astro.config.mjs`:
   ```javascript
   site: 'https://carthagespace.com',
   base: '/',
   ```

5. **Wait for DNS propagation** (can take up to 24 hours)

## Maintenance

### Regular Tasks

- **Weekly:** Check for new content submissions
- **Monthly:** Review and update outdated information
- **As needed:** Add news, update student bios, upload new images

### Backups

Your content is automatically backed up in GitHub. Every change is saved in version history.

To restore old content:
1. Go to GitHub repo
2. Navigate to `src/content/`
3. View file history
4. Restore previous version if needed

## Need Help?

- **Astro Documentation:** https://docs.astro.build
- **Decap CMS Documentation:** https://decapcms.org/docs/
- **Formspree Support:** https://help.formspree.io
- **GitHub Pages Guide:** https://docs.github.com/en/pages

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Enable GitHub Pages
3. ✅ Set up Netlify Identity
4. ✅ Configure Formspree
5. ✅ Test the CMS
6. ✅ Add your first content
7. ✅ Invite students
8. 🎉 Share your new website!

Your site is ready to go live. Good luck! 🚀
