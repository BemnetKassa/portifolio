
import React, { useState } from 'react';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Sample projects data - easily replaceable with real data
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern payment integration and admin dashboard.',
      longDescription: 'Built a comprehensive e-commerce platform featuring user authentication, product management, shopping cart functionality, payment processing with Stripe, and an admin dashboard for inventory management.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      date: 'Dec 2024',
      featured: true
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      longDescription: 'Developed a full-featured task management app with real-time collaboration, drag-and-drop functionality, team management, and notification system using modern web technologies.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      technologies: ['Next.js', 'TypeScript', 'Socket.io', 'MongoDB', 'Redis'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      date: 'Nov 2024',
      featured: true
    },
    {
      id: '3',
      title: 'Weather Dashboard',
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
      title: 'Social Media Dashboard',
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
      title: 'Recipe Finder App',
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
      title: 'Fitness Tracker',
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
