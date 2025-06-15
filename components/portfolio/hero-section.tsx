"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

export function HeroSection() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;

      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.width = Math.random() * 4 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.animationDuration = Math.random() * 3 + 5 + 's';
      particle.style.opacity = Math.random() * 0.5 + 0.2 + '';

      particlesRef.current.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 8000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    const loadingToast = toast.loading('Preparing resume...');
    window.open('/resume.pdf', '_blank');
    toast.dismiss(loadingToast);
    toast.success('Resume opened in new tab', {
      icon: '📄',
      duration: 3000
    });
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-background flex items-center justify-center">
      {/* Animated Background */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
          `
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full glass border text-sm font-medium text-primary">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Umang Somani
          </motion.h1>

          {/* Title with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-4">
              MERN Stack Developer | AI Innovator | Mobile App Enthusiast
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I build scalable web applications, mobile experiences, and integrate
                smart Gen AI tools to craft <span className="text-primary font-semibold">futuristic tech solutions</span>
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                toast.success('Scrolling to projects section');
              }}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full glow hover:scale-105 transition-all duration-300"
            >
              <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-45 transition-transform" />
              View My Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleResumeDownload}
              className="group border-primary/20 hover:border-primary hover:bg-primary/10 px-8 py-3 rounded-full hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center space-x-6 mb-16"
          >
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Mail, href: 'mailto:umangsomani7@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-3 rounded-full glass hover:glass-dark border border-white/20 hover:border-primary/50 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Centered */}
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.button
          onClick={() => {
            scrollToNext();
            // toast('Scrolling to next section', { icon: '👇' });
          }}
          className="p-2 rounded-full glass hover:glass-dark border border-white/20 hover:border-primary/50 transition-all duration-300"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.button>
      </div>
    </section>
  );
}