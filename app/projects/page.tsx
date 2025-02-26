"use client";

import { projects } from "@/app/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24">
      <Link 
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-12">All Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
  );
} 