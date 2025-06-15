"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Bot, Archive } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'AI Event Planner',
    description: 'Intelligent event planning platform powered by Gen AI that helps users create, manage, and optimize events with smart recommendations and automated scheduling.',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Sparkles,
    tags: ['React', 'Node.js', 'OpenAI', 'MongoDB', 'Express'],
    liveUrl: 'https://eventify-frontend-rho.vercel.app',
    githubUrl: '#',
    featured: true,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'WhatsApp Marketing Bot',
    description: 'Automated WhatsApp marketing solution with AI-powered message generation, contact management, and campaign analytics for businesses.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Bot,
    tags: ['Python', 'WhatsApp API', 'AI/ML', 'Flask', 'SQLite'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    gradient: 'from-green-500 to-teal-500'
  },
  // {
  //   title: 'Modern Archive Platform',
  //   description: 'Digital archive management system built during internship at Duss Digital Infra, featuring advanced search, categorization, and cloud storage integration.',
  //   image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   icon: Archive,
  //   tags: ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'Docker'],
  //   liveUrl: '#',
  //   githubUrl: '#',
  //   featured: false,
  //   gradient: 'from-blue-500 to-cyan-500'
  // },
  {
    title: 'E-Commerce Mobile App',
    description: 'Full-featured e-commerce mobile application built with Flutter, featuring real-time inventory, payment integration, and admin dashboard.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Sparkles,
    tags: ['Flutter', 'Dart', 'Firebase', 'Stripe', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Task Management Dashboard',
    description: 'Collaborative task management platform with real-time updates, team collaboration features, and advanced analytics.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Sparkles,
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Weather Prediction App',
    description: 'AI-powered weather prediction application with machine learning models for accurate forecasting and beautiful data visualization.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Sparkles,
    tags: ['React', 'Python', 'TensorFlow', 'Chart.js', 'OpenWeather API'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    gradient: 'from-cyan-500 to-blue-500'
  }
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions that blend creativity with cutting-edge technology
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <Card className="glass border-white/10 hover:border-primary/30 transition-all duration-500 overflow-hidden h-full group-hover:scale-[1.02] group-hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />

                  {/* Project Icon */}
                  <div className="absolute top-4 left-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg`}>
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      ⭐ Featured
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="glass hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      asChild
                      className="flex-1 bg-primary hover:bg-primary/90 group/btn"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-45 transition-transform" />
                        Live Demo
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      asChild
                      className="flex-1 border-primary/20 hover:border-primary hover:bg-primary/10"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group"
            >
              <Card className="glass border-white/10 hover:border-primary/30 transition-all duration-300 overflow-hidden h-full group-hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`} />

                  <div className="absolute top-3 left-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} shadow-lg`}>
                      <project.icon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs glass"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs glass">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary border-primary/20"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </a>
                    </Button>

                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="flex-1 hover:bg-primary/10"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for more projects and contributions to open source
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 glow"
            >
              <a
                href="https://github.com/umangsomani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View All Projects
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}