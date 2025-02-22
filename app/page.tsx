import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/projects";
import { AnimateIn } from "@/app/components/AnimateIn";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Enhanced Background Pattern with Animation */}
        <div className="absolute inset-0 -z-10 opacity-0 animate-in fade-in duration-1000">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,var(--chart-1)/0.15,transparent)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_80%_200px,var(--chart-4)/0.15,transparent)] animate-pulse" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,var(--chart-3)/0.05_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <AnimateIn delay={200}>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-[1px] w-12 bg-primary/50"></div>
                  <p className="text-primary font-medium tracking-wider uppercase">Creative Designer</p>
                </div>
              </AnimateIn>

              <AnimateIn delay={400}>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Amine Ibnlfassi
                  <span className="block text-muted-foreground/60 mt-1 text-xl md:text-2xl font-normal">
                    Graphic Designer
                  </span>
                </h1>
              </AnimateIn>

              <AnimateIn delay={600}>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Creating bold, memorable designs that tell stories and build brands. 
                  Specializing in brand identity, digital design, and creative direction.
                </p>
              </AnimateIn>

              <AnimateIn delay={800}>
                <div className="flex gap-4">
                  <a 
                    href="#work"
                    className="group relative inline-flex items-center justify-center"
                  >
                    <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all duration-300"></div>
                    <span className="relative bg-primary px-6 py-3 rounded-lg text-primary-foreground font-medium inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                      View Portfolio
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                        <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </a>
                  <a 
                    href="#contact"
                    className="px-6 py-3 rounded-lg border border-border hover:bg-secondary/20 text-base font-medium transition-colors"
                  >
                    Get in Touch
                  </a>
                </div>
              </AnimateIn>

              <AnimateIn delay={1000}>
                <div>
                  <p className="text-sm text-muted-foreground/60 mb-4 font-medium">Design Expertise</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      'Brand Identity',
                      'UI/UX Design',
                      'Typography',
                    ].map((skill) => (
                      <div key={skill} 
                        className="px-4 py-2 rounded-lg bg-secondary/10 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors"
                      >
                        <p className="text-sm font-medium text-center">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Right Column - Design Showcase */}
            <AnimateIn delay={600} className="relative w-full aspect-square md:aspect-auto md:h-[700px]">
              {/* Background decorative elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,var(--chart-3)/0.15,transparent)]" />
                <div className="absolute h-40 w-40 blur-3xl rounded-full bg-chart-1/20 animate-pulse" 
                  style={{ top: '20%', right: '10%' }} />
                <div className="absolute h-32 w-32 blur-2xl rounded-full bg-chart-4/20 animate-pulse" 
                  style={{ bottom: '30%', left: '20%' }} />
              </div>

              {/* Main image or content container */}
              <div className="absolute inset-8 rounded-2xl overflow-hidden bg-secondary/20 border border-border">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                
                {/* Featured work preview */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-8 bg-primary/50 rounded-full"></div>
                      <p className="text-sm text-primary font-medium">Featured Work</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-[4/3] rounded-lg overflow-hidden relative group">
                        <Image
                          src="/projects/project-1.jpg" // Add your image
                          alt="Featured project 1"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="aspect-[4/3] rounded-lg overflow-hidden relative group">
                        <Image
                          src="/projects/project-2.jpg" // Add your image
                          alt="Featured project 2"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">

                      <div className="flex gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span className="w-2 h-2 rounded-full bg-border"></span>
                        <span className="w-2 h-2 rounded-full bg-border"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-12 -right-6 p-4 backdrop-blur-lg rounded-xl bg-background/50 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <p className="text-sm font-medium">Available for Projects</p>
                </div>
              </div>
              
              <div className="absolute bottom-20 -left-6 p-4 backdrop-blur-lg rounded-xl bg-background/50 border border-border">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary">8+</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Years of</p>
                    <p className="text-sm text-muted-foreground">Experience</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* About Section */}
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
            <p className="text-primary font-medium tracking-wider uppercase">About Me</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-chart-1/40 via-chart-4/40 to-chart-3/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative aspect-[4/5] rounded-2xl bg-secondary/20 border border-border overflow-hidden">
                {/* Add your image here */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Crafting Digital Experiences with Purpose
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 8 years of experience in design, I&apos;ve dedicated my career to creating meaningful visual experiences that connect brands with their audiences. My approach combines strategic thinking with creative execution, ensuring every project delivers both aesthetic excellence and measurable results.
                </p>
                <p>
                  I specialize in brand identity systems, user interface design, and creative direction, working closely with clients to transform their visions into compelling visual narratives.
                </p>
              </div>

              {/* Stats/Highlights */}
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-primary">8+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
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

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-secondary/20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm mb-8">
            <div className="h-[1px] w-12 bg-primary/50"></div>
            <p className="text-primary font-medium tracking-wider uppercase">Featured Projects</p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Selected Works
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            I&apos;m always open to new opportunities and collaborations.
          </p>
          <a 
            href="mailto:your.email@example.com"
            className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-lg font-medium hover:bg-primary/90"
          >
            Send me an email
          </a>
        </div>
      </section>
    </>
  );
}
