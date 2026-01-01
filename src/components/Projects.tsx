import React, { useState } from 'react';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from '@/components/ui/button';
import fruitPic from '../picture/p1.jpg';
import AMUpic from '../picture/amu.jpg';
import ThreeDCarousel, { ThreeDCarouselItem } from './3d_carosel';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Sample projects data - easily replaceable with real data
  const projects: Project[] = [
    {
      id: '1',
      title: 'Fruit delivery web app',
      description: 'A full-stack fruit delivery web solution with modern system integration.',
      longDescription: 'Built a comprehensive fruit delivery platform featuring user authentication, product management, shopping cart functionality, payment processing, this project aims to delivery fruits from Arba-Minch to other part of the country.',
      image: fruitPic,
      technologies: [ 'html', 'CSS', 'Node.js', 'mySQL', 'php', 'javaScript'],
      githubUrl: 'https://github.com/BemnetKassa/Fruit-delivery-web-app',
      liveUrl: '',
      date: 'Dec 2024',
      featured: true
    },
    {
      id: '2',
      title: 'Online voting system',
      description: 'This is a web-based voting platform designed for the AMU Tech Hub project showcase to allow students and participants to vote for their favorite projects in a fair and user-friendly way.',
      longDescription: 'This project is a full-stack web application for managing and conducting live voting on projects, built with Node.js, Express, and vanilla JavaScript.',
      image: AMUpic,
      technologies: ['Node.js', 'javaScript', 'express'],
      githubUrl: 'https://github.com/BemnetKassa/final-project-voting-system',
      liveUrl: '',
      date: 'april 2025',
      featured: true
    },
   
      {
      id: '3',
      title: 'Smart Menu web app',
      description: 'a smart menu web application that allows users to browse and order food from a digital menu using QR codes.',
      longDescription: 'This project is a full-stack web application that enables restaurants to create digital menus accessible via QR codes, allowing customers to easily browse and place orders from their smartphones.',
      image: 'src/picture/hero-dining.jpg',
      technologies: ['vite', 'TypeScript', 'React', 'Tailwind CSS', 'shadcn-ui', 'node.js', 'express', 'MongoDB'],
      githubUrl: 'https://github.com/BemnetKassa/Smart-menu',
      date: 'Jul 2024',
      featured: false
    },
    {
      id: '4',
      title: 'Buy any car web app',
      description: 'A car marketplace web application that allows users to buy and sell cars online.',
      longDescription: 'This project is a full-stack web application that provides a platform for users to browse, buy, and sell cars online, featuring admin authentication, car listings, search functionality.',
      image: 'src/picture/cars.jpg',
      technologies: ['React', 'Node.js', 'Express'],
      githubUrl: 'https://github.com/BemnetKassa/buy-any-car',
      liveUrl: 'https://buy-anycar.vercel.app/landingPage/dashboard',
      date: 'Jul 2024',
      featured: false
    },
     {
      id: '5',
      title: 'Weather Dashboard-coming soon!',
      description: 'A responsive weather application with location-based forecasts and interactive maps.',
      longDescription: 'Created a comprehensive weather dashboard featuring current conditions, 7-day forecasts, interactive maps, and location-based weather alerts with beautiful data visualizations.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'D3.js', 'Weather API', 'Mapbox', 'Sass'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      date: 'Oct 2024',
      featured: false
    },
    {
      id: '6',
      title: 'Social Media Dashboard-coming soon!',
      description: 'Analytics dashboard for social media management with data visualization.',
      longDescription: 'Built a comprehensive social media analytics dashboard with real-time metrics, engagement tracking, content scheduling, and detailed reporting features.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      technologies: ['Vue.js', 'Express.js', 'Chart.js', 'MySQL', 'Docker'],
      githubUrl: 'https://github.com',
      date: 'Sep 2024',
      featured: false
    },
    {
      id: '7',
      title: 'Fitness Tracker-coming soon!',
      description: 'Personal fitness tracking application with workout plans and progress analytics.',
      longDescription: 'Created a comprehensive fitness tracking app with workout planning, progress tracking, exercise library, and detailed analytics to help users achieve their fitness goals.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      technologies: ['vite', 'TypeScript', 'React', 'Tailwind CSS', 'shadcn-ui', 'node.js', 'express', 'MongoDB'],
      githubUrl: 'https://github.com',
      date: 'Jul 2024',
      featured: false
    },

  ];

  const carouselItems: ThreeDCarouselItem[] = projects.map((project, index) => ({
    id: index,
    title: project.title,
    brand: project.date, // Using date for the 'brand' field
    description: project.description,
    longDescription: project.longDescription,
    tags: project.technologies,
    imageUrl: project.image,
    link: project.liveUrl || project.githubUrl,
  }));

  return (
    <section id="projects" className="py-20 section-padding">
      <div className="max-width-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </div>

        {/* All Projects Carousel */}
        <div className="mb-24">
          <ThreeDCarousel items={carouselItems} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
