'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Users,
  Calendar,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const journeyItems = [
  {
    year: '2025',
    title: 'Build Fast With AI',
    subtitle: 'Full Stack Intern',
    description:
      'Contributed to modern archive platform development, working with cutting-edge technologies to build scalable digital solutions. Gained valuable industry experience and mentorship.',
    icon: Briefcase,
    type: 'work',
    color: 'from-pink-500 to-cyan-500',
    location: 'Remote',
    tags: ['Next JS', 'Python', 'Supabase', 'OpenAI', 'Vapi', "Livekit"],
  },
  {
    year: '2024',
    title: 'AI Event Planner Launch',
    subtitle: 'Full Stack Project',
    description:
      'Developed and deployed an AI-powered event planning platform using React, Node.js, and OpenAI API. The platform features intelligent recommendations, automated scheduling, and comprehensive event management.',
    icon: Code,
    type: 'project',
    color: 'from-purple-500 to-pink-500',
    link: 'https://eventify-frontend-rho.vercel.app',
    tags: ['React', 'AI/ML', 'Node.js', 'MongoDB'],
  },
  {
    year: '2024',
    title: 'Duss Digital Infra',
    subtitle: 'Software Development Intern',
    description:
      'Contributed to modern archive platform development, working with cutting-edge technologies to build scalable digital solutions. Gained valuable industry experience and mentorship.',
    icon: Briefcase,
    type: 'work',
    color: 'from-blue-500 to-cyan-500',
    location: 'Mumbai, India',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    year: '2023',
    title: 'WhatsApp Marketing Bot',
    subtitle: 'AI-Powered Automation',
    description:
      'Built an intelligent WhatsApp marketing automation tool with AI-powered message generation, contact management, and campaign analytics for small businesses.',
    icon: Code,
    type: 'project',
    color: 'from-green-500 to-teal-500',
    tags: ['Python', 'AI/ML', 'WhatsApp API', 'Flask'],
  },
  {
    year: '2023',
    title: 'IEEE Membership',
    subtitle: 'Technical Community',
    description:
      'Joined IEEE as an active member, participating in technical workshops, seminars, and collaborative projects. Contributing to the tech community and staying updated with industry trends.',
    icon: Users,
    type: 'achievement',
    color: 'from-orange-500 to-red-500',
    tags: ['Networking', 'Learning', 'Community'],
  },
  {
    year: '2022',
    title: 'B.Tech IT Started',
    subtitle: 'K.J. Somaiya Institute of Technology',
    description:
      'Began pursuing Bachelor of Technology in Information Technology, building strong foundations in programming, data structures, algorithms, and software engineering principles.',
    icon: GraduationCap,
    type: 'education',
    color: 'from-indigo-500 to-purple-500',
    location: 'Mumbai, India',
    tags: ['Computer Science', 'Programming', 'Mathematics'],
  },
  {
    year: '2021',
    title: 'First Web Application',
    subtitle: 'Journey Begins',
    description:
      'Created my first full-stack web application, sparking a passion for software development and modern web technologies. This project laid the foundation for my career in tech.',
    icon: Award,
    type: 'milestone',
    color: 'from-yellow-500 to-orange-500',
    tags: ['HTML', 'CSS', 'JavaScript', 'Learning'],
  },
];

export function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getIconBg = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-blue-500/20 border-blue-500/30';
      case 'education':
        return 'bg-purple-500/20 border-purple-500/30';
      case 'project':
        return 'bg-green-500/20 border-green-500/30';
      case 'achievement':
        return 'bg-orange-500/20 border-orange-500/30';
      case 'milestone':
        return 'bg-yellow-500/20 border-yellow-500/30';
      default:
        return 'bg-primary/20 border-primary/30';
    }
  };

  return (
    <section id="journey" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            My Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From curious beginner to full-stack developer - a timeline of growth,
            learning, and building innovative solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {journeyItems.map((item, index) => {
              const isOdd = (index + 1) % 2 === 1;
              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${isOdd ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:space-x-8`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-2 md:-translate-x-2 z-10" />

                  {/* Year Badge (Desktop) */}
                  <div
                    className={`hidden md:block ${isOdd ? 'md:order-2' : 'md:order-1'} md:w-1/2`}
                  >
                    <div
                      className={`flex ${isOdd ? 'justify-start pl-8' : 'justify-end pr-8'
                        }`}
                    >
                      <Badge
                        className={`${getIconBg(item.type)} text-lg px-4 py-2 font-bold`}
                      >
                        {item.year}
                      </Badge>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-1/2 ml-16 md:ml-0 ${isOdd ? 'md:order-1' : 'md:order-2'
                      }`}
                  >
                    <Card className="glass border-white/10 hover:border-primary/30 transition-all duration-300 group hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          {/* Icon */}
                          <div
                            className={`p-3 rounded-xl border ${getIconBg(
                              item.type
                            )} flex-shrink-0`}
                          >
                            <item.icon className="h-6 w-6" />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                                {item.title}
                              </h3>
                              {item.link && (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:text-primary/80 transition-colors"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              )}
                            </div>

                            <p className="text-primary font-medium text-sm mb-2">
                              {item.subtitle}
                            </p>

                            {item.location && (
                              <div className="flex items-center text-muted-foreground text-sm mb-3">
                                <MapPin className="h-3 w-3 mr-1" />
                                {item.location}
                              </div>
                            )}

                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                              {item.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="secondary"
                                  className="text-xs glass hover:bg-primary/20 transition-colors"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Mobile Year Badge */}
                  <div className="md:hidden absolute left-0 top-0">
                    <Badge className="bg-primary/20 text-primary text-sm">{item.year}</Badge>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-gradient-to-r from-primary to-accent">
                <Calendar className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">What's Next?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Continuing to explore the frontiers of AI and full-stack development, with
              goals to contribute to open source projects, build impactful applications, and
              help shape the future of technology.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                '🚀 Advanced AI Projects',
                '🌐 Open Source Contributions',
                '📚 Continuous Learning',
                '🤝 Mentoring Others',
              ].map((goal) => (
                <Badge
                  key={goal}
                  className="glass hover:bg-primary/20 transition-colors px-4 py-2"
                >
                  {goal}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
