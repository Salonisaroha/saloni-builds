# Saloni Saroha - Personal Portfolio

A modern, responsive personal portfolio website built with Angular 18, TypeScript, and SCSS. Features glassmorphism design, smooth animations, and a fully responsive layout.

## 🚀 Features

- **Modern UI/UX**: Glassmorphism design with neon highlights
- **Smooth Animations**: Angular Animations API for fade-in, slide-up effects
- **Typewriter Effect**: Animated text in hero section
- **Responsive Design**: Mobile-first approach, works on all devices
- **Interactive Components**: 
  - Animated navigation bar
  - Project cards with hover effects
  - Skills grid with icons
  - Timeline/Experience section
  - Contact form with Formspree integration
- **Performance Optimized**: Lazy loading, optimized assets

## 🛠️ Tech Stack

- **Framework**: Angular 18
- **Language**: TypeScript
- **Styling**: SCSS
- **Animations**: Angular Animations
- **Forms**: Angular Reactive Forms
- **Email Service**: Formspree

## 📁 Project Structure

```
src/app/
├── components/
│   ├── navbar/          # Navigation bar component
│   ├── hero/            # Hero section with typewriter
│   ├── about/           # About section
│   ├── skills/          # Skills grid component
│   ├── experience/      # Timeline/Experience component
│   ├── projects/        # Projects showcase
│   ├── certifications/  # Certifications showcase
│   ├── contact/         # Contact form
│   └── footer/          # Footer component
├── data/
│   ├── personal-info.ts # Personal information
│   ├── projects.ts      # Projects data
│   ├── skills.ts        # Skills data
│   ├── experience.ts    # Experience data
│   └── certifications.ts # Certifications data
├── assets/
│   └── certificates/    # Certificate images (PNG)
├── animations.ts        # Reusable animations
├── app.component.ts     # Main app component
└── app.config.ts        # App configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

## 🏗️ Build

### Development Build
```bash
npm run build
```

### Production Build
```bash
npm run build --configuration production
```

The build artifacts will be stored in the `dist/personal_portfolio/browser/` directory.

## 📧 Formspree Configuration

The contact form is configured with Formspree for email handling:

1. The form is already configured with endpoint: `https://formspree.io/f/mnjjvqre`
2. Messages submitted through the contact form will be sent directly to your email
3. No additional setup required - the form is ready to use
4. Formspree provides:
   - Spam protection
   - Form validation
   - Email notifications
   - Free tier: 50 submissions/month

### To use your own Formspree form:
1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Replace the endpoint URL in `src/app/components/contact/contact.component.ts`

## 🚀 Deployment

### Deploy to Netlify

Quick deploy:
1. Push code to GitHub
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist/personal_portfolio`
5. Deploy automatically

### Manual Deployment
1. Build the project:
```bash
npm run build --configuration production
```
2. Upload the `dist/personal_portfolio` folder to Netlify

### Netlify Configuration
Create a `netlify.toml` file in the root directory:
```toml
[build]
  command = "npm run build"
  publish = "dist/personal_portfolio"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🎨 Customization

### Update Personal Information

Edit the data files in `src/app/data/`:
- `personal-info.ts` - Name, summary, contact info
- `projects.ts` - Your projects
- `skills.ts` - Your skills
- `experience.ts` - Your work experience
- `certifications.ts` - Your certifications

### Add Certificate Images

1. Add your certificate PNG files to `src/assets/certificates/`
2. Update the `imageUrl` paths in `src/app/data/certifications.ts`
3. See [CERTIFICATES_SETUP.md](./CERTIFICATES_SETUP.md) for detailed instructions

### Styling

Global styles are in `src/styles.scss`. Component-specific styles are in each component's `.scss` file.

### Colors

Update CSS variables in `src/styles.scss`:
```scss
:root {
  --primary-color: #00d9ff;
  --secondary-color: #ff00ff;
  --bg-dark: #0a0a0f;
  // ... more variables
}
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 968px
- Desktop: > 968px

## 🎯 Features Breakdown

### Hero Section
- Animated typewriter effect
- Gradient background orbs
- Call-to-action buttons
- Scroll indicator

### About Section
- Personal summary
- Soft skills tags
- Interests display
- Profile image placeholder

### Skills Section
- Categorized skills grid
- Skill level indicators
- Hover animations

### Experience Section
- Timeline layout
- Company details
- Achievements list
- Technology tags

### Projects Section
- Project cards with hover effects
- GitHub links
- Technology badges
- Responsive grid

### Certifications Section
- Certificate cards with images
- Hover effects and zoom
- Credential verification links
- Issue dates and IDs
- Responsive grid layout

### Contact Section
- Contact form with validation
- Formspree integration
- Social links
- Error handling

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Saloni Saroha**
- GitHub: [@Salonisaroha](https://github.com/Salonisaroha)
- LinkedIn: [saloni-saroha](https://www.linkedin.com/in/saloni-saroha/)
- Email: salonisaroha5@gmail.com

## 🙏 Acknowledgments

- Design inspired by modern portfolio websites
- Icons from various open-source libraries
- Fonts from Google Fonts (Inter)

---

Built with ❤️ using Angular
"# saloni-builds" 
