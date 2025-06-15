"use client";

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    subtitle: 'umangsomani7@gmail.com',
    description: 'Send me an email anytime',
    action: 'mailto:umangsomani7@gmail.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    subtitle: 'Chat with me',
    description: 'Quick response guaranteed',
    action: 'https://wa.me/your-number',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: Github,
    title: 'GitHub',
    subtitle: '@umangsomani',
    description: 'Check out my repositories',
    action: 'https://github.com/umangsomani',
    color: 'from-gray-500 to-gray-700'
  }
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/umangsomani', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'm always excited to discuss 
            new opportunities and innovative ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.action}
                    target={method.action.startsWith('http') ? '_blank' : undefined}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="block group"
                  >
                    <Card className="glass border-white/10 hover:border-primary/30 transition-all duration-300 group-hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color}`}>
                            <method.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold group-hover:text-primary transition-colors">
                              {method.title}
                            </h4>
                            <p className="text-sm text-primary font-medium">
                              {method.subtitle}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="pt-8"
              >
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:glass-dark border border-white/20 hover:border-primary/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="sr-only">{label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
                className="pt-6"
              >
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>Mumbai, India</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="glass border-white/10 hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="glass border-white/20 focus:border-primary/50"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="glass border-white/20 focus:border-primary/50"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="glass border-white/20 focus:border-primary/50"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="glass border-white/20 focus:border-primary/50 resize-none"
                        placeholder="Tell me about your project or idea..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-xl glow group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to start something amazing?</h3>
            <p className="text-muted-foreground mb-6">
              Whether you have a specific project in mind or just want to explore possibilities, 
              I'm here to help bring your ideas to life with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 px-8"
              >
                <a href="mailto:umangsomani7@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Start a Conversation
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/20 hover:border-primary hover:bg-primary/10 px-8"
              >
                <a href="/resume.pdf" download>
                  📄 Download Resume
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}