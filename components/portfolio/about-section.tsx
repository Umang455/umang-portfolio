"use client";

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Code, Zap, Users, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { icon: Code, label: 'Projects Built', value: '25+' },
  { icon: Zap, label: 'Technologies', value: '15+' },
  { icon: Users, label: 'Team Projects', value: '10+' },
  { icon: Award, label: 'Certifications', value: '5+' },
];

const interests = [
  { icon: '🏏', label: 'Cricket' },
  { icon: '🎮', label: 'Gaming' },
  { icon: '👨‍🍳', label: 'Cooking' },
  { icon: '🤖', label: 'AI Research' },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer crafting innovative solutions at the intersection of 
            technology and creativity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Education & Background</h3>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Currently pursuing <span className="text-primary font-semibold">B.Tech in Information Technology</span> 
                  from K.J. Somaiya Institute of Technology, where I'm building a strong foundation 
                  in software engineering and emerging technologies.
                </p>
                
                <p>
                  As a <span className="text-accent font-semibold">MERN Stack Developer</span>, I specialize in 
                  creating full-stack web applications with React, Node.js, MongoDB, and Express. 
                  My passion extends to mobile development with Flutter and exploring the fascinating 
                  world of Generative AI.
                </p>
                
                <p>
                  I've had the opportunity to work as an intern at <span className="text-primary font-semibold">Duss Digital Infra</span>, 
                  where I contributed to modern archive platforms and gained valuable industry experience.
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="glass rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold">Beyond Code</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <span className="text-2xl">{interest.icon}</span>
                    <span className="font-medium">{interest.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card className="glass border-white/10 hover:border-primary/30 transition-all duration-300 group-hover:glow">
                    <CardContent className="p-6 text-center">
                      <stat.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <div className="text-3xl font-bold text-gradient mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* IEEE Membership & Team Player */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="glass rounded-2xl p-8 border border-white/10"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Team Collaboration</h3>
                <p className="text-muted-foreground mb-4">
                  Active IEEE member with strong teamwork skills, contributing to 
                  collaborative projects and technical communities.
                </p>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  🏆 IEEE Member
                </div>
              </div>
            </motion.div>

            {/* Tech Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="glass rounded-2xl p-8 border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-full transform translate-x-16 -translate-y-16" />
              <div className="relative">
                <h3 className="text-xl font-bold mb-3 text-gradient">My Philosophy</h3>
                <blockquote className="text-muted-foreground italic">
                  "Code is poetry in motion. Every algorithm tells a story, 
                  every function solves a problem, and every project is an opportunity 
                  to make the world a little bit better through technology."
                </blockquote>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}