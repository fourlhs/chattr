# Chattr - AI Chatbot Landing Page

A clean, elegant landing page for Chattr, an AI-powered chatbot designed specifically for small businesses. Built with React and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional SaaS-style layout inspired by Stripe, Notion, and Intercom
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Interactive Components**: Smooth animations and hover effects
- **Modular Architecture**: Easy to customize and extend
- **Performance Optimized**: Fast loading with modern React practices

## 🎨 Design Highlights

- **Color Scheme**: Modern blue/teal gradient with clean whites and grays
- **Typography**: Inter font family for excellent readability
- **Spacing**: Generous whitespace for a clean, uncluttered feel
- **Shadows**: Subtle, modern shadow effects
- **Rounded Corners**: Consistent border radius throughout

## 📱 Sections Included

1. **Navigation Bar** - Sticky header with logo, menu, and CTA
2. **Hero Section** - Compelling headline with product mockup
3. **Benefits Section** - 3 key features with icons and stats
4. **How It Works** - 3-step setup process
5. **Testimonials** - Customer reviews and ratings
6. **Pricing** - Simple, transparent pricing plan
7. **Final CTA** - Strong call-to-action section
8. **Footer** - Company links and social media

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

1. **Clone or download** the project files
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   ```
4. **Open your browser** to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

## 🎯 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  primary: {
    // Your custom blue colors
  },
  teal: {
    // Your custom teal colors
  }
}
```

### Content
Update the content in each component file:
- `src/components/Hero.jsx` - Main headline and description
- `src/components/Benefits.jsx` - Feature cards
- `src/components/Pricing.jsx` - Pricing information
- `src/components/Testimonials.jsx` - Customer reviews

### Styling
Modify `src/index.css` for custom CSS classes and global styles.

## 📁 Project Structure

```
chattr-landing/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Benefits.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Pricing.jsx
│   │   ├── FinalCTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🎨 Design System

### Typography
- **Headlines**: Inter font, bold weights (600-700)
- **Body Text**: Inter font, regular weight (400)
- **Buttons**: Inter font, semibold weight (600)

### Spacing
- **Section Padding**: `py-20 px-4 sm:px-6 lg:px-8`
- **Card Padding**: `p-8`
- **Component Spacing**: `space-y-6`, `space-y-8`

### Colors
- **Primary**: Blue gradient (`from-primary-500 to-teal-500`)
- **Background**: Light gray (`bg-gray-50`)
- **Text**: Dark gray (`text-gray-900`)
- **Secondary Text**: Medium gray (`text-gray-600`)

## 🚀 Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Connect your repository to Vercel
2. Vercel will auto-detect the Vite configuration

### GitHub Pages
1. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repository-name"
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add script: `"deploy": "gh-pages -d dist"`
4. Build and deploy: `npm run build && npm run deploy`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ for small businesses**


