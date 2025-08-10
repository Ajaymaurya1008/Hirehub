# HireHub Web Application

![HireHub Web App](https://res.cloudinary.com/dfh7pmyj0/image/upload/v1720192555/03_svrfvx.png)

> **🌐 Web Application** for the HireHub job search platform

This is the Next.js web application component of the HireHub project. Built with Next.js 14 and Tailwind CSS, it provides a responsive web experience for job seekers to browse, search, and apply for jobs from any device.

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Navigate to web directory
cd web

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (optimized)
- **Responsive Design**: Mobile-first approach
- **Performance**: Next.js optimizations (Image, Font, etc.)

## 📁 Project Structure

```
web/
├── app/                    # Next.js App Router pages
│   ├── (dashboard)/       # Dashboard routes
│   ├── privacy/           # Privacy policy page
│   ├── terms/             # Terms of service page
│   ├── favicon.ico        # App favicon
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── components/            # Reusable components
│   └── Navbar.jsx         # Navigation component
├── public/               # Static assets
│   ├── next.svg          # Next.js logo
│   └── vercel.svg        # Vercel logo
├── tailwind.config.js    # Tailwind configuration
└── next.config.mjs       # Next.js configuration
```

## 🌐 Features

### Core Functionality

- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface with Tailwind CSS
- **Fast Performance**: Next.js optimizations for speed
- **SEO Optimized**: Built-in SEO features from Next.js
- **Accessibility**: WCAG compliant design

### User Experience

- **Cross-Platform**: Works on all modern browsers
- **Progressive Web App**: Can be installed on mobile devices
- **Fast Loading**: Optimized images and fonts
- **Smooth Navigation**: Client-side routing with Next.js

## 🚀 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Development Workflow

1. **Start Development Server:**

   ```bash
   npm run dev
   ```

2. **Edit Pages:**

   - Modify `app/page.js` for the home page
   - Add new routes in the `app/` directory
   - Update components in `components/` directory

3. **Styling:**
   - Use Tailwind CSS classes for styling
   - Global styles in `app/globals.css`
   - Configure Tailwind in `tailwind.config.js`

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. **Connect Repository:**

   - Push your code to GitHub
   - Connect your repository to Vercel

2. **Automatic Deployment:**

   - Vercel automatically detects Next.js
   - Deploys on every push to main branch
   - Provides preview deployments for PRs

3. **Environment Variables:**
   - Add any required environment variables in Vercel dashboard
   - Configure custom domains if needed

### Other Platforms

You can also deploy to other platforms:

- **Netlify**: Use the Next.js build output
- **Railway**: Direct deployment from GitHub
- **DigitalOcean App Platform**: Containerized deployment

## 🧪 Testing & Quality

### Code Quality

```bash
# Run linter
npm run lint

# Check for TypeScript errors (if using TypeScript)
npm run type-check
```

### Performance Testing

- Use Next.js built-in performance monitoring
- Lighthouse CI for automated performance testing
- Vercel Analytics for real-world performance data

## 📊 App Information

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS 3.4.1
- **Deployment**: Vercel
- **Live URL**: [hirehub-web.vercel.app](https://hirehub-web.vercel.app/)
- **Repository**: Part of HireHub monorepo

## 🔗 Related Links

- **🌐 Live Site**: [hirehub-web.vercel.app](https://hirehub-web.vercel.app/)
- **📱 Mobile App**: [Google Play Store](https://play.google.com/store/apps/details?id=com.ajaymaurya1008.hirehub)
- **📚 Main Project**: [HireHub Repository](../README.md)
- **📖 Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes and commit them (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow Next.js best practices and conventions
- Use Tailwind CSS for styling
- Ensure responsive design for all screen sizes
- Test on multiple browsers and devices
- Maintain good accessibility standards
- Update documentation for new features

## 📞 Support

- **Email**: ajaykvmaurya@gmail.com
- **Issues**: [GitHub Issues](https://github.com/yourusername/hirehub/issues)
- **Documentation**: [Next.js Docs](https://nextjs.org/docs)

## 📚 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS
- [Vercel Documentation](https://vercel.com/docs) - learn about Vercel deployment

---

**Part of the [HireHub Project](../README.md) - Built with ❤️ by Ajay Maurya**
