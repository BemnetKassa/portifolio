
import React from 'react';
import { motion } from 'framer-motion';
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a creative and passionate full-stack developer with a strong drive for building impactful digital experiences. My expertise bridges the gap between design and technology, delivering solutions that are both beautiful and functional.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="prose prose-lg max-w-none">
              <motion.p
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                My journey began in Software Engineering, where I discovered a passion for crafting user-centric web applications.
                <motion.span
                  className="block text-lg font-semibold gradient-text mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  I thrive on transforming complex challenges into <span className="bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent">elegant, scalable, component-based, and intuitive solutions.</span>
                </motion.span>
              </motion.p>
              <motion.p
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Outside of coding, I explore new technologies, contribute to open-source, and share insights with the developer community. I believe in lifelong learning and staying ahead of industry trends.
              </motion.p>
              <motion.p
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                I'm actively seeking internship and freelance opportunities to contribute to innovative products and grow as a developer.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <div className="text-center">
                <motion.div className="text-2xl font-bold text-primary" initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>10+</motion.div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <motion.div className="text-2xl font-bold text-primary" initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, delay: 1 }}>2+</motion.div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <motion.div className="text-2xl font-bold text-primary" initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, delay: 1.2 }}>20+</motion.div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Tech Stack */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  className="bg-background/50 rounded-lg p-6 hover-lift border border-border hover:border-primary/30"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
