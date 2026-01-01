import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImg from '../picture/for the web.jpg';
import { AuroraTextEffect } from './animated-components/text_effect';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center section-padding bg-gradient-to-br from-background via-background to-card">
      <div className="max-width-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <AuroraTextEffect text="Bemnet Kassa" />
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
                Full Stack Developer
              </h2>
              <div className="text-base sm:text-lg text-primary font-semibold tracking-wide mt-2 animate-fade-in delay-100">
                Building impactful digital products for modern businesses
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed border-l-4 border-primary/40 pl-4 italic bg-card/60 py-2 animate-fade-in delay-200">
              Passionate about delivering robust, scalable, and user-centric web solutions. I blend creativity with technical expertise to help brands stand out and grow in the digital world.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToProjects}
                size="lg" 
                className="group flex items-center gap-2 bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary text-primary-foreground shadow-lg transition-all duration-200"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                size="lg"
                className="flex items-center gap-2 border-primary text-primary hover:bg-primary/90 hover:text-primary-foreground transition-all duration-200 shadow"
              >
                <Download className="w-4 h-4" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <a 
                href="https://github.com/BemnetKassa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-card hover:bg-accent transition-colors hover:scale-110 transform shadow-md"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/bemnet-kassa-bb975b34a/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-card hover:bg-accent transition-colors hover:scale-110 transform shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:bemnetkassa79@gmail.com" 
                className="p-3 rounded-full bg-card hover:bg-accent transition-colors hover:scale-110 transform shadow-md"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-full blur-3xl"></div>
              {/* Profile image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl ring-4 ring-blue-400/10">
                  <img
                    src={profileImg}
                    alt="Bemnet Kassa - Full Stack Developer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-lg">👋</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
