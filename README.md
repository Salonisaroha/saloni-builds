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
  - Contact form with EmailJS integration
- **Performance Optimized**: Lazy loading, optimized assets

## 🛠️ Tech Stack

- **Framework**: Angular 18
- **Language**: TypeScript
- **Styling**: SCSS
- **Animations**: Angular Animations
- **Forms**: Angular Reactive Forms
- **Email Service**: EmailJS (optional)

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

## 📧 EmailJS Configuration

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update `src/app/components/contact/contact.component.ts`:
   - Uncomment the EmailJS import
   - Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY`
   - Uncomment the emailjs.send() call
   - Remove the setTimeout simulation

## 🚀 Deployment

### Deploy to Vercel

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

Quick deploy:
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

The `vercel.json` file is already configured for optimal deployment.

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
- EmailJS integration
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
