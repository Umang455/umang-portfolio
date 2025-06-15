"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Users,
  Calendar,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


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
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.1", "end 0.5"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const getIconBg = (type) => {
    switch (type) {
      case "work":
        return "bg-blue-500/20 border-blue-500/30";
      case "education":
        return "bg-purple-500/20 border-purple-500/30";
      case "project":
        return "bg-green-500/20 border-green-500/30";
      case "achievement":
        return "bg-orange-500/20 border-orange-500/30";
      case "milestone":
        return "bg-yellow-500/20 border-yellow-500/30";
      default:
        return "bg-primary/20 border-primary/30";
    }
  };

  return (
    <section
      id="journey"
      className="py-20 relative overflow-hidden "
      ref={containerRef}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={sectionRef}
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

        <div ref={contentRef} className="relative max-w-7xl mx-auto pb-20">
          {journeyItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                  {item.year}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.year}
                </h3>
                <Card className="glass border-white/10 hover:border-primary/30 transition-all duration-300 group hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-xl border ${getIconBg(
                          item.type
                        )} flex-shrink-0`}
                      >
                        <item.icon className="h-6 w-6" />
                      </div>
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
            </div>
          ))}

          <div
            style={{ height: `${height}px` }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{ height: heightTransform, opacity: opacityTransform }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>

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
              {["🚀 Advanced AI Projects", "🌐 Open Source Contributions", "📚 Continuous Learning", "🤝 Mentoring Others"].map((goal) => (
                <Badge key={goal} className="glass hover:bg-primary/20 transition-colors px-4 py-2">
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
