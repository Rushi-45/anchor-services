# 🚀 Netlify Deployment Guide

Complete step-by-step guide to deploy your Anchor Services website to Netlify.

## Prerequisites

- ✅ GitHub account (or GitLab/Bitbucket)
- ✅ Netlify account (free tier works perfectly)
- ✅ Your code pushed to a Git repository

---

## Step 1: Prepare Your Repository

### 1.1 Push Your Code to GitHub

If you haven't already, push your code to GitHub:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Ready for Netlify deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/anchor-services.git

# Push to GitHub
git push -u origin main
```

**Note:** Make sure `.env.local` is in your `.gitignore` (it already is) - we'll add environment variables in Netlify.

---

## Step 2: Create Netlify Account & New Site

### 2.1 Sign Up / Log In to Netlify

1. Go to [https://www.netlify.com](https://www.netlify.com)
2. Click **"Sign up"** (or **"Log in"** if you have an account)
3. Choose **"Sign up with GitHub"** (recommended for easy deployment)

### 2.2 Create New Site from Git

1. Once logged in, click **"Add new site"** → **"Import an existing project"**
2. Choose **"GitHub"** (or your Git provider)
3. Authorize Netlify to access your repositories
4. Select your **`anchor-services`** repository

---

## Step 3: Configure Build Settings

Netlify should auto-detect Next.js, but verify these settings:

### Build Settings:
- **Base directory:** (leave empty)
- **Build command:** `npm run build`
- **Publish directory:** `.next`

**Note:** The `netlify.toml` file we created will handle this automatically, but you can verify in the Netlify dashboard.

---

## Step 4: Add Environment Variables

This is **CRITICAL** - Your app won't work without these!

### 4.1 Go to Site Settings

1. In your Netlify dashboard, go to your site
2. Click **"Site settings"** → **"Environment variables"**
3. Click **"Add variable"**

### 4.2 Add All Required Variables

Add each of these variables one by one:

#### Formspree Configuration
```
NEXT_PUBLIC_FORMSPREE_ENDPOINT = https://formspree.io/f/your-form-id
```

#### WhatsApp Configuration
```
NEXT_PUBLIC_WHATSAPP_NUMBER = 7016552650
```

#### SEO Configuration
```
NEXT_PUBLIC_WEBSITE_URL = https://your-site-name.netlify.app
```

#### Company Information
```
NEXT_PUBLIC_COMPANY_NAME = Professional Anchoring Services
NEXT_PUBLIC_COMPANY_EMAIL = contact@anchorservices.com
NEXT_PUBLIC_COMPANY_PHONE = +1 234 567 8900
NEXT_PUBLIC_COUNTRY_CODE = US
```

#### Developer Information (for footer)
```
NEXT_PUBLIC_DEVELOPER_NAME = Your Name
NEXT_PUBLIC_DEVELOPER_EMAIL = your.email@example.com
NEXT_PUBLIC_DEVELOPER_WEBSITE = https://yourwebsite.com
NEXT_PUBLIC_DEVELOPER_GITHUB = https://github.com/yourusername
NEXT_PUBLIC_DEVELOPER_LINKEDIN = https://linkedin.com/in/yourprofile
```

#### Optional: Search Engine Verification
```
NEXT_PUBLIC_GOOGLE_VERIFICATION = your_google_verification_code
NEXT_PUBLIC_BING_VERIFICATION = your_bing_verification_code
```

#### Optional: Social Media
```
NEXT_PUBLIC_TWITTER_SITE = @yourhandle
NEXT_PUBLIC_FACEBOOK_URL = https://facebook.com/yourpage
NEXT_PUBLIC_TWITTER_URL = https://twitter.com/yourhandle
NEXT_PUBLIC_LINKEDIN_URL = https://linkedin.com/company/yourcompany
NEXT_PUBLIC_INSTAGRAM_URL = https://instagram.com/yourhandle
```

**Important:** 
- Replace all placeholder values with your actual information
- After adding variables, you'll need to **redeploy** for them to take effect

---

## Step 5: Deploy!

### 5.1 Initial Deployment

1. After configuring everything, click **"Deploy site"**
2. Netlify will:
   - Install dependencies (`npm install`)
   - Build your site (`npm run build`)
   - Deploy to a unique URL (e.g., `https://random-name-123.netlify.app`)

### 5.2 Wait for Build to Complete

- Build typically takes 2-5 minutes
- You'll see the build log in real-time
- If there are errors, check the build log

---

## Step 6: Custom Domain (Optional)

### 6.1 Add Custom Domain

1. Go to **"Site settings"** → **"Domain management"**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `anchorservices.com`)
4. Follow Netlify's DNS configuration instructions

### 6.2 Update Environment Variables

After setting up your custom domain, update:
```
NEXT_PUBLIC_WEBSITE_URL = https://yourdomain.com
```

Then redeploy.

---

## Step 7: Verify Deployment

### 7.1 Test Your Site

Visit your Netlify URL and check:
- ✅ Homepage loads correctly
- ✅ Form page works (`/form`)
- ✅ Form submission works (check your Formspree email)
- ✅ Footer displays correctly
- ✅ WhatsApp button works
- ✅ All images load
- ✅ Animations work

### 7.2 Test Form Submission

1. Fill out the form completely
2. Submit it
3. Check your email (the one configured in Formspree)
4. Verify you received the form data

---

## Step 8: Continuous Deployment

### 8.1 Automatic Deployments

Netlify automatically deploys when you push to your main branch:
- Push to `main` → Automatic deployment
- Push to other branches → Preview deployments

### 8.2 Manual Deployments

1. Go to **"Deploys"** tab
2. Click **"Trigger deploy"** → **"Deploy site"**

---

## Troubleshooting

### Build Fails

**Error: "Build command failed"**
- Check build logs for specific errors
- Ensure all dependencies are in `package.json`
- Verify Node version (should be 18+)

**Error: "Module not found"**
- Make sure all imports use correct paths
- Check `tsconfig.json` path aliases

### Environment Variables Not Working

- Variables must start with `NEXT_PUBLIC_` to be accessible in the browser
- After adding variables, **redeploy** the site
- Check variable names for typos

### Form Not Submitting

- Verify `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is correct
- Check Formspree dashboard for submission logs
- Verify Formspree form is active

### Images Not Loading

- Check image paths (should be relative to `/public`)
- Verify images exist in the repository
- Check Next.js Image component configuration

---

## Quick Checklist

Before deploying, make sure:

- [ ] Code is pushed to GitHub
- [ ] `netlify.toml` exists in root directory
- [ ] All environment variables are added in Netlify
- [ ] Formspree endpoint is configured
- [ ] WhatsApp number is set
- [ ] Website URL matches your Netlify domain
- [ ] Developer information is added (for footer)
- [ ] Test build locally: `npm run build`

---

## Post-Deployment

### Update SEO Settings

1. Update `NEXT_PUBLIC_WEBSITE_URL` with your final domain
2. Add Google Search Console verification
3. Submit sitemap (if you create one)
4. Test with Google Rich Results Test

### Monitor Performance

- Check Netlify Analytics (if enabled)
- Monitor form submissions in Formspree
- Check site speed with PageSpeed Insights

---

## Support

If you encounter issues:
1. Check Netlify build logs
2. Check browser console for errors
3. Verify all environment variables
4. Test locally first: `npm run build && npm start`

---

**Congratulations! 🎉 Your site should now be live on Netlify!**

