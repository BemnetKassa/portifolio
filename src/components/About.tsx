
import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      technologies: ['html','css', 'Tailwind CSS', 'shadcn-ui', 'framer-motion', 'javaScript', 'typescript', 'React', 'Next.js', ]
    },
    {
      category: 'Backend',
      icon: <Server className="w-6 h-6" />,
      technologies: ['Node.js', 'Express', 'PHP']
    },
    {
      category: 'Database',
      icon: <Database className="w-6 h-6" />,
      technologies: [ 'MongoDB', 'PostgreSQL', 'MySQL', 'mongoose',]
    },
  
    {
      category: 'Tools',
      icon: <Code className="w-6 h-6" />,
      technologies: ['Git', 'GitHub', 'prisma', 'VS Code', 'Postman', 'Figma', 'Chrome DevTools']
    },
    {
      category: 'Design',
      icon: <Palette className="w-6 h-6" />,
      technologies: ['UI/UX', 'Figma', 'Adobe XD', 'Photoshop',]
    }
  ];

  return (
    <section id="about" className="py-20 section-padding bg-card/50">
      <div className="max-width-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer with year of experience creating 
            digital solutions that bridge the gap between design and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <div className="space-y-6 animate-fade-in">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                My journey into web development started during my Software Engineering studies, 
                where I discovered my passion for creating user-centric websites. I love 
                the challenge of turning complex problems into simple, beautiful solutions.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community. 
                I believe in continuous learning and staying up-to-date with industry trends.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I'm currently seeking internship opportunities and freelance projects where 
                I can contribute to meaningful products and continue growing as a developer.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">planty</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right Column - Tech Stack */}
          <div className="space-y-6 animate-slide-in">
            <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
            
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={skill.category}
                  className="bg-background/50 rounded-lg p-6 hover-lift border border-border hover:border-primary/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-lg">{skill.category}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
