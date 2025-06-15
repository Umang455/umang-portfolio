"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2,
  Database,
  Smartphone,
  Brain,
  Wrench,
  Globe,
  Server,
  Palette
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 75 },
    ]
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 70 },
    ]
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'Firebase', level: 85 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Redis', level: 70 },
    ]
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Flutter', level: 85 },
      { name: 'Dart', level: 80 },
      { name: 'React Native', level: 70 },
      { name: 'Android', level: 75 },
    ]
  },
  {
    title: 'AI/ML',
    icon: Brain,
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Gen AI', level: 80 },
      { name: 'OpenAI API', level: 85 },
      { name: 'Langchain', level: 75 },
      { name: 'TensorFlow', level: 65 },
    ]
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'from-teal-500 to-blue-500',
    skills: [
      { name: 'Git/GitHub', level: 95 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 75 },
      { name: 'Vercel', level: 90 },
    ]
  }
];

const techStack = [
  'React', 'Node.js', 'MongoDB', 'Express', 'Flutter',
  'Python', 'Firebase', 'TypeScript', 'Next.js', 'Tailwind',
  'Docker', 'AWS', 'Git', 'OpenAI', 'PostgreSQL'
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [orbitRadius, setOrbitRadius] = useState(250);

  useEffect(() => {
    const updateOrbitRadius = () => {
      const width = window.innerWidth;
      if (width < 640) setOrbitRadius(150);
      else if (width < 1024) setOrbitRadius(200);
      else setOrbitRadius(1000);
    };

    updateOrbitRadius();
    window.addEventListener('resize', updateOrbitRadius);
    return () => window.removeEventListener('resize', updateOrbitRadius);
  }, []);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
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
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Tech Stack Orbit */}


        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="glass border-white/10 hover:border-primary/30 transition-all duration-300 group h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{
                              duration: 1.5,
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              // '🏆 IEEE Member',
              '🎯 Full Stack Certified',
              '🤖 AI/ML Enthusiast',
              '📱 React Native Developer',
              '☁️ Cloud Practitioner'
            ].map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="glass rounded-full px-6 py-3 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <span className="font-medium">{badge}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}