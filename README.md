
# Bemnet Kassa - Full Stack Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases professional development skills and projects, designed to attract internship opportunities and freelance clients.

## 🚀 Features

- **Modern Design**: Clean, professional dark theme with blue accents
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Subtle transitions and hover effects
- **Reusable Components**: Modular architecture for easy maintenance
- **Project Showcase**: Dynamic project cards with filtering
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Components**: shadcn/ui components
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel, Netlify, or any modern hosting

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation with smooth scrolling
│   ├── Hero.tsx            # Hero section with CTA buttons
│   ├── About.tsx           # About section with skills
│   ├── Projects.tsx        # Projects showcase
│   ├── ProjectCard.tsx     # Reusable project card component
│   ├── Contact.tsx         # Contact form and info
│   └── Footer.tsx          # Footer with links and social
├── pages/
│   └── Index.tsx           # Main page layout
└── styles/
    └── index.css           # Global styles and design system
```

## 🎨 Design System

### Colors
- **Background**: Dark navy (`hsl(222 84% 5%)`)
- **Cards**: Lighter dark (`hsl(217 33% 8%)`)
- **Primary**: Bright blue (`hsl(217 91% 60%)`)
- **Text**: Light colors for contrast

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarchy**: Clear size scaling (4xl for heroes, proper line heights)

### Components
- **Rounded corners**: 0.75rem default radius
- **Shadows**: Subtle elevation
- **Hover effects**: Scale and color transitions
- **Animations**: Fade-in and slide-in effects

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Building for Production

```bash
npm run build
```

The build files will be in the `dist/` directory.

## ✏️ Customization

### Personal Information

1. **Update personal details** in:
   - `src/components/Hero.tsx` - Name, title, description
   - `src/components/About.tsx` - Bio, skills, stats
   - `src/components/Contact.tsx` - Contact information
   - `src/components/Footer.tsx` - Footer details

2. **Replace placeholder image** in Hero section:
   - Add your professional photo to `public/`
   - Update the image source in `Hero.tsx`

### Projects

1. **Edit the projects array** in `src/components/Projects.tsx`:
   ```typescript
   const projects: Project[] = [
     {
       id: '1',
       title: 'Your Project Name',
       description: 'Brief description',
       image: 'path/to/your/image.jpg',
       technologies: ['React', 'Node.js', '...'],
       githubUrl: 'https://github.com/yourusername/repo',
       liveUrl: 'https://your-live-demo.com',
       date: 'Month Year',
       featured: true
     },
     // Add more projects...
   ];
   ```

2. **Add project images** to `public/` directory

### Styling

1. **Colors**: Update the color scheme in `src/index.css`:
   ```css
   :root {
     --primary: your-new-primary-color;
     --background: your-background-color;
     /* etc... */
   }
   ```

2. **Fonts**: Change fonts in `tailwind.config.ts` and add Google Fonts to `index.html`

### Contact Form

The contact form currently shows a success toast. To make it functional:

1. **Add form backend** (e.g., Formspree, Netlify Forms, or custom API)
2. **Update the `handleSubmit` function** in `src/components/Contact.tsx`

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Configure redirects for SPA routing

### Other Hosts
Any static hosting service will work (GitHub Pages, Firebase Hosting, etc.)

## 📝 SEO Tips

1. **Update meta tags** in `index.html`
2. **Add your social media links**
3. **Include relevant keywords** in your content
4. **Optimize images** (use WebP format when possible)
5. **Add structured data** for better search results

## 🤝 Contributing

This is a personal portfolio template, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have questions or need help customizing this portfolio:

- **Email**: bemnet@example.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

**Happy coding!** 🚀 Make this portfolio your own and land that dream job or client!
