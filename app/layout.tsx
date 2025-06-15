import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Umang Somani - Full Stack Developer & AI Innovator',
  description: 'Portfolio of Umang Somani - MERN Stack Developer, Gen AI Enthusiast, and Mobile App Developer. Showcasing innovative web applications and AI-powered solutions.',
  keywords: 'Full Stack Developer, React, Node.js, AI, Machine Learning, Web Development, Mobile Apps',
  authors: [{ name: 'Umang Somani' }],
  creator: 'Umang Somani',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://umangsomani.dev',
    title: 'Umang Somani - Full Stack Developer & AI Innovator',
    description: 'Portfolio showcasing innovative web applications and AI-powered solutions',
    siteName: 'Umang Somani Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umang Somani - Full Stack Developer & AI Innovator',
    description: 'Portfolio showcasing innovative web applications and AI-powered solutions',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}