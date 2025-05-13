"use client";

import Image from "next/image";
import { reviews } from "@/app/data/reviews";
import { useLanguage } from "@/app/contexts/LanguageContext";

export function ReviewsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-2 text-sm mb-8">
          <div className="h-[1px] w-12 bg-primary/50"></div>
          <p className="text-primary font-medium tracking-wider uppercase">{t.reviews.title}</p>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t.reviews.heading}
          </h2>
          <p className="text-muted-foreground">
            {t.reviews.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={review.image}
                    alt={review.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{review.author}</h3>
                  <p className="text-sm text-muted-foreground">
                    {review.role}, {review.company}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {review.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 