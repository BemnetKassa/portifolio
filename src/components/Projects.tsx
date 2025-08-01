
import React, { useState } from 'react';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from '@/components/ui/button';
import fruitPic from '../picture/p1.jpg';
import AMUpic from '../picture/amu.jpg';

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
      id: '4',
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
      id: '5',
      title: 'Recipe Finder App-coming soon!',
      description: 'Mobile-first recipe application with ingredient-based search and meal planning.',
      longDescription: 'Developed a mobile-first recipe application featuring ingredient-based search, meal planning, shopping lists, and nutritional information with offline capabilities.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'Firebase', 'Redux', 'Recipe API'],
      githubUrl: 'https://github.com',
      date: 'Aug 2024',
      featured: false
    },
    {
      id: '6',
      title: 'Fitness Tracker-coming soon!',
      description: 'Personal fitness tracking application with workout plans and progress analytics.',
      longDescription: 'Created a comprehensive fitness tracking app with workout planning, progress tracking, exercise library, and detailed analytics to help users achieve their fitness goals.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      technologies: ['Flutter', 'Django', 'PostgreSQL', 'JWT'],
      githubUrl: 'https://github.com',
      date: 'Jul 2024',
      featured: false
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 section-padding">
      <div className="max-width-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        {/* Show More/Less Button */}
        {projects.length > 4 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {showAll ? 'Show Less' : `Show All Projects (${projects.length})`}
            </Button>
          </div>
        )}

        {/* GitHub CTA */}
        <div className="mt-16 text-center p-8 bg-card rounded-xl border border-border">
          <h3 className="text-2xl font-semibold mb-4">Want to see more?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Check out my GitHub for more projects, contributions to open source, 
            and code samples that demonstrate my development skills.
          </p>
          <Button
            onClick={() => window.open('https://github.com', '_blank')}
            size="lg"
            className="bg-primary hover:bg-primary/90"
          >
            Visit My GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
