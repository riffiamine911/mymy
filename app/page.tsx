"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/projects";
import { AnimateIn } from "@/app/components/AnimateIn";
import { ScrollAnimation } from "@/app/components/ScrollAnimation";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[100svh] relative flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        {/* Creative Background Pattern */}
        <div className="absolute inset-0 -z-10">
          {/* Main gradient layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_1000px_at_50%_-20%,#6a8ec2/0.15,transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_80%_60%,#6a8ec2/0.2,transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_20%_40%,#6a8ec2/0.15,transparent)]" />
          
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6a8ec2]/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6a8ec2]/20 rounded-full blur-3xl animate-pulse-slow delay-700" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#6a8ec2/0.03_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>
        <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24 md:py-32 relative">
         

          {/* Centered Content */}
          <div className="text-center space-y-6 sm:space-y-10">
            <AnimateIn delay={100}>
              <div className="flex justify-end mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/30 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Available for Projects
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <div className="h-[1px] w-8 sm:w-16 bg-primary/50"></div>
                <p className="text-primary font-medium tracking-wider uppercase">{t.hero.role}</p>
                <div className="h-[1px] w-8 sm:w-16 bg-primary/50"></div>
              </div>
            </AnimateIn>

            <AnimateIn delay={400}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
                Amine Ibnlfassi
                <span className="block text-muted-foreground/60 mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl font-normal">
                  {t.hero.subtitle}
                </span>
              </h1>
            </AnimateIn>

            <AnimateIn delay={600}>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                {t.hero.description}
              </p>
            </AnimateIn>

            <AnimateIn delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
                <Link 
                  href="#work"
                  className="w-full sm:w-auto group relative inline-flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all duration-300"></div>
                  <span className="relative bg-primary w-full sm:w-auto px-6 py-3 rounded-lg text-primary-foreground font-medium inline-flex items-center justify-center gap-2 group-hover:translate-x-1 transition-transform">
                    {t.hero.cta.portfolio}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                      <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
                <Link 
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3 rounded-lg border border-border hover:bg-secondary/20 text-base font-medium transition-colors text-center"
                >
                  {t.hero.cta.contact}
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn delay={1000}>
              <div className="max-w-lg mx-auto px-4">
                <p className="text-xs sm:text-sm text-muted-foreground/60 mb-3 sm:mb-4 font-medium">{t.hero.expertise}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {t.hero.skills.map((skill) => (
                    <div key={skill} 
                      className="px-3 sm:px-4 py-2 rounded-lg bg-secondary/10 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors"
                    >
                      <p className="text-xs sm:text-sm font-medium text-center">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

           
          </div>
        </div>
      </section>

      {/* About Section */}
      <ScrollAnimation>
        <section id="about" className="py-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_80%_20%,var(--chart-3)/0.15,transparent)]" />
            <div className="absolute inset-0 bg-[linear-gradient(60deg,var(--chart-1)/0.05_1px,transparent_1px)] bg-[size:16px_16px]" />
          </div>

          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm mb-8">
              <div className="h-[1px] w-12 bg-primary/50"></div>
              <p className="text-primary font-medium tracking-wider uppercase">{t.about.title}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Column - Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-chart-1/40 via-chart-4/40 to-chart-3/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative aspect-[4/5] rounded-2xl bg-secondary/20 border border-border overflow-hidden">
                  {/* Add your image here */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  <img src="/projects/messu.png" alt="" />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {t.about.heading}
                </h2>
                
                <div className="space-y-4 text-muted-foreground">
                  {t.about.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Stats/Highlights */}
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div>
                    <div className="text-3xl font-bold text-primary">3+</div>
                    <div className="text-sm text-muted-foreground mt-1">{t.about.stats.years}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">46+</div>
                    <div className="text-sm text-muted-foreground mt-1">{t.about.stats.projects}</div>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {['Figma', 'Adobe CC', 'Webflow', 'After Effects', 'Principle'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm bg-secondary/30 border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Projects Section */}
      <ScrollAnimation>
        <section id="projects" className="py-24 bg-secondary/20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm mb-8">
              <div className="h-[1px] w-12 bg-primary/50"></div>
              <p className="text-primary font-medium tracking-wider uppercase">Featured Projects</p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
              Selected Works
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project) => (
                <Link 
                  href={`/projects/${project.slug}`} 
                  key={project.slug}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border/50"
                >
                  <div className="aspect-[16/10] relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.categories.map((category) => (
                        <span 
                          key={category}
                          className="px-2 py-1 text-xs rounded-full bg-secondary/30 border border-border/50"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Add the Footer here, at the end of the component */}
      <footer className="bg-black text-white">
        <div className="max-w-5xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
                  Let's work together
                </h2>
                <p className="text-white/60 max-w-md text-lg">
                  Have a project in mind? Let's create something amazing together.
                </p>
              </div>
              
              <Link 
                href="mailto:your.email@example.com"
                className="inline-flex items-center gap-2 text-xl font-medium group text-white/90 hover:text-white"
              >
                riffiamine911@gmail.com
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between md:items-end">
              <div className="space-y-8">
                <p className="text-white/60 text-sm font-medium uppercase tracking-wider">
                  Connect With Me
                </p>
                <div className="flex flex-col gap-6">
                  {[
                    { 
                      label: 'Behance', 
                      url: 'https://behance.net/amineibnlfassi',
                      description: 'View my design portfolio'
                    },
                    { 
                      label: 'Threads', 
                      url: 'https://www.threads.net/@aminee_belfassi?igshid=NTc4MTIwNjQ2YQ==',
                      description: 'Follow my design journey'
                    },
                    { 
                      label: 'Pinterest', 
                      url: 'https://pin.it/t5KNWgqEs',
                      description: 'Discover my inspirations'
                    },
                  ].map((social) => (
                    <Link
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="flex items-center gap-4 group-hover:bg-white/5 p-3 rounded-xl transition-all">
                        <div className="flex-1">
                          <p className="text-lg font-medium text-white/90 group-hover:text-white">
                            {social.label}
                          </p>
                          <p className="text-sm text-white/40 group-hover:text-white/60">
                            {social.description}
                          </p>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-white/60 transition-all group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/10">
                <p className="text-white/40 text-sm">
                  © {new Date().getFullYear()} Amine Ibnlfassi. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}