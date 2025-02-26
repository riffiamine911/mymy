"use client";

import { useParams } from "next/navigation";
import { projects } from "@/app/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Markdown from "react-markdown";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link 
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-5xl mx-auto px-4 py-24">
      <Link 
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
      >
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      <div className="aspect-[16/9] relative rounded-2xl overflow-hidden mb-12">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="grid md:grid-cols-[2fr,1fr] gap-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground">{project.description}</p>
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <Markdown>{project.content}</Markdown>
          </div>

          <div className="grid gap-8 mt-12">
            {project.gallery?.length > 0 && project.gallery.map((image, index) => (
              <div 
                key={index} 
                className="relative w-full overflow-hidden rounded-xl border border-border/50"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-contain"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold mb-4">Project Details</h3>
            <dl className="space-y-4 text-sm">
              {project.clientName && (
                <div>
                  <dt className="text-muted-foreground">Client</dt>
                  <dd className="font-medium mt-1">{project.clientName}</dd>
                </div>
              )}
              <div>
                <dt className="text-muted-foreground">Year</dt>
                <dd className="font-medium mt-1">{project.year}</dd>
              </div>
              {project.liveUrl && (
                <div>
                  <dt className="text-muted-foreground">Live Project</dt>
                  <dd className="font-medium mt-1">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      Visit Website
                      <ExternalLink size={14} />
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>

          {project.services?.length > 0 && (
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span 
                    key={service}
                    className="px-3 py-1 rounded-full text-sm bg-secondary/30 border border-border/50"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.categories?.length > 0 && (
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {project.categories.map((category) => (
                  <span 
                    key={category}
                    className="px-3 py-1 rounded-full text-sm bg-secondary/30 border border-border/50"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
} 