"use client";

import { motion } from 'framer-motion';
import { Code2, Heart, Coffee, Github, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 overflow-hidden border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gradient">Umang Somani</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions 
              that merge creativity with cutting-edge technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Journey', href: '#journey' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:umangsomani7@gmail.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>umangsomani7@gmail.com</span>
              </a>
              
              <a
                href="https://github.com/umangsomani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>@umangsomani</span>
              </a>
              
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© {currentYear} Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Coffee className="h-4 w-4 text-amber-500" />
            <span>by Umang Somani</span>
          </div>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Built with Next.js • Tailwind CSS • Framer Motion</span>
          </div>
        </motion.div>

        {/* Fun Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-xs text-muted-foreground/60 font-mono">
            console.log("Thanks for visiting! Let's build something amazing together 🚀");
          </p>
        </motion.div>
      </div>
    </footer>
  );
}