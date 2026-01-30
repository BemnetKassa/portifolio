import React, { useState } from 'react';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from '@/components/ui/button';
import fruitPic from '../picture/p1.jpg';
import AMUpic from '../picture/amu.jpg';
import fuelOps from '../picture/refueling.jpg';
import cars from '../picture/cars.jpg';
import hotel from '../picture/room.webp'

import ThreeDCarousel, { ThreeDCarouselItem } from './3d_carosel';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Sample projects data - easily replaceable with real data
  const projects: Project[] = [
    {
      id: '1',
      title: 'Fruit delivery web app',
      description: 'A full-stack fruit delivery web solution with modern system integration.',
      longDescription: 'my first real life project Built a comprehensive fruit delivery platform featuring user authentication, product management, shopping cart functionality, payment processing, this project aims to delivery fruits from Arba-Minch to other part of the country.',
      image: fruitPic,
      technologies: [ 'html', 'CSS', 'vanilla JavaScript', 'mySQL', 'php', ],
      githubUrl: 'https://github.com/BemnetKassa/Fruit-delivery-web-app',
      liveUrl: '',
      date: 'Dec 2023',
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
      date: 'april 2024',
      featured: true
    },
   
      {
      id: '3',
      title: 'Smart Menu web app',
      description: 'a smart menu web application that allows users to browse and order food from a digital menu using QR codes.',
      longDescription: 'This project is a full-stack web application that enables restaurants to create digital menus accessible via QR codes, allowing customers to easily browse and place orders from their smartphones.',
      image: 'src/picture/hero-dining.jpg',
      technologies: ['vite',  'React', 'Tailwind CSS', 'shadcn-ui', 'node.js', 'express', 'MongoDB'],
      githubUrl: 'https://github.com/BemnetKassa/Smart-menu',
      liveUrl: 'https://smart-menu-six.vercel.app/',
      date: 'Jul 2024',
      featured: false
    },
    {
      id: '4',
      title: 'Buy any car web app',
      description: 'A car marketplace web application that allows users to buy and sell cars online.',
      longDescription: 'This project is a full-stack web application that provides a platform for users to browse, buy, and sell cars online, featuring admin authentication, car listings, search functionality.',
      image: cars,
      technologies: ['nextjs','Tailwind CSS','Node.js', 'Express', 'supabase'],
      githubUrl: 'https://github.com/BemnetKassa/buy-any-car',
      liveUrl: 'https://buy-anycar.vercel.app/landingPage/dashboard',
      date: 'sep 2025',
      featured: false
    },
    {
      id: '5',
      title: 'FuelOps - Fuel management system',
      description: 'A fuel management web application that allows users to track and manage fuel consumption.',
      longDescription: 'This project is a full-stack web application that provides a platform for users to monitor and manage fuel consumption, featuring admin authentication, fuel logs, and reporting functionality. which is planed to takle the fuel black market issue in ethiopia',
      image: fuelOps,
      technologies: ['nextjs','Tailwind CSS','Node.js', 'Express', 'supabase'],
      githubUrl: 'https://github.com/BemnetKassa/Hotel-booking-and-room-management-system/tree/main/frontend',
      liveUrl: 'https://fuelops-last.vercel.app/',
      date: 'mar 2025',
      featured: false
    },
    {
      id: '6',
      title: 'Hotel room booking web app',
      description: 'A hotel room booking web application that allows users to book rooms online.',
      longDescription: '.This project is a full-stack web application that provides a platform for users to browse, book, and manage hotel room reservations online, featuring admin authentication, room listings, search functionality.',
      image: hotel,
      technologies: ['nextjs','Tailwind CSS','Node.js', 'Express', 'supabase'],
      githubUrl: 'https://github.com/BemnetKassa/Hotel-booking-and-room-management-system/tree/main/frontend',
      liveUrl: 'https://hotel-booking-and-room-management-s-two.vercel.app/public/dashboard',
      date: 'apr 2025',
      featured: false
    },
     {
      id: '7',
      title: 'Weather Dashboard-coming soon!',
      description: 'A responsive weather application with location-based forecasts and interactive maps.',
      longDescription: 'Created a comprehensive weather dashboard featuring current conditions, 7-day forecasts, interactive maps, and location-based weather alerts with beautiful data visualizations.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
      technologies: ['next.js',],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      date: 'coming 2026',
      featured: false
    },
    {
      id: '8',
      title: 'Fitness Tracker-coming soon!',
      description: 'Personal fitness tracking application with workout plans and progress analytics.',
      longDescription: 'Created a comprehensive fitness tracking app with workout planning, progress tracking, exercise library, and detailed analytics to help users achieve their fitness goals.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      technologies: ['vite', 'TypeScript', 'React', 'Tailwind CSS', 'shadcn-ui', 'node.js', 'express', 'MongoDB'],
      githubUrl: 'https://github.com',
      date: 'coming 2026',
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
    liveUrl: project.liveUrl && project.liveUrl !== '' ? project.liveUrl : undefined,
    githubUrl: project.githubUrl && project.githubUrl !== '' ? project.githubUrl : undefined,
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
