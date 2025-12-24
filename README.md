# Landing Page Project

A modern, responsive landing page built with Next.js, React, and TypeScript. Features a beautiful UI with smooth animations, carousel sections, and optimal performance.

## 🚀 Features

- **Modern UI/UX**: Clean and professional design with smooth animations
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Built with Next.js for optimal performance
- **TypeScript**: Type-safe development experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Component Architecture**: Reusable, modular components
- **Carousel/Slider**: Interactive carousel sections for content display
- **Icon Library**: Lucide React icons for beautiful iconography

## 📋 Project Structure

```
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   └── favicon.ico              # Favicon
├── components/                   # React components
│   ├── layout/                  # Layout components
│   │   └── Navbar/              # Navigation bar
│   ├── HomeSections/            # Home page sections
│   │   ├── HeroSection/         # Hero banner section
│   │   ├── Projects/            # Projects showcase
│   │   │   ├── Projects.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectTabs.tsx
│   │   ├── Partners/            # Partners section
│   │   ├── News/                # News/Blog section
│   │   └── ...                  # Other sections
│   └── shared/                  # Shared components
│       ├── PrimaryBtn/          # Primary button
│       ├── Slider/              # Carousel slider
│       │   ├── Slider.tsx
│       │   └── CarouselControls.tsx
│       └── SwipPhoto/           # Photo component
├── lib/                         # Utility functions and helpers
├── public/                      # Static assets
│   └── images/                  # Image files
├── .next/                       # Next.js build output
├── components.json              # Component configuration
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Project dependencies
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Class Utilities**: [clsx](https://github.com/lukeed/clsx) & [class-variance-authority](https://cva.style/)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Run Production Build Locally
```bash
npm start
```

### Linting
```bash
npm run lint
```

## 📝 Key Components

### HeroSection
Main banner section with call-to-action buttons and engaging content.

### Projects
Showcase of projects with:
- Project cards with images and descriptions
- Tabbed interface for filtering
- Carousel navigation controls

### Partners
Display of partner logos in a carousel format.

### News
Blog/news section featuring latest articles and updates.

### Navbar
Responsive navigation bar with:
- Logo/branding
- Navigation links
- Mobile menu support
- Active link highlighting

### Slider/Carousel
Reusable carousel component with:
- Smooth transitions
- Navigation controls
- Responsive design
- Touch/swipe support

## 🎨 Styling

The project uses **Tailwind CSS** for styling with custom configurations:
- Custom color palette
- Responsive breakpoints
- Custom spacing and sizing
- Animation utilities

Refer to `tailwind.config.ts` for detailed configuration.

## 📱 Responsive Design

The project is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)

## 🔧 Configuration Files

- **`next.config.ts`**: Next.js configuration and optimizations
- **`tsconfig.json`**: TypeScript compiler options
- **`tailwind.config.ts`**: Tailwind CSS customization
- **`components.json`**: Component library configuration
- **`eslint.config.mjs`**: ESLint rules for code quality
- **`postcss.config.mjs`**: PostCSS configuration for CSS processing

## 📚 Dependencies

Key production dependencies:
- `next`: React framework
- `react` & `react-dom`: UI library
- `tailwindcss`: Styling framework
- `lucide-react`: Icon library
- `clsx`: Utility for conditional classNames
- `class-variance-authority`: CSS class composition

See `package.json` for the complete list.

## 🚀 Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS minification with Tailwind
- Server-side rendering for better SEO
- Optimized bundle size

## 🎯 Features in Development

Additional features that can be added:
- Dark mode support
- Multi-language support (i18n)
- Form validation and submission
- Analytics integration
- SEO meta tags customization
- Animation library integration

## 📖 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👥 Support

For issues, questions, or suggestions, please open an issue in the repository.
