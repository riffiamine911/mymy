"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faq } from "@/app/data/faq";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_20%_20%,var(--chart-1)/0.15,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_80%_60%,var(--chart-4)/0.15,transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(60deg,var(--chart-2)/0.05_1px,transparent_1px)] bg-[size:16px_16px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about the design process and working together.
          </p>
        </div>

        <div className="divide-y divide-border/50">
          {faq.map((item, index) => (
            <div key={index} className="py-4 sm:py-6">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 text-sm sm:text-base ${
                  openIndex === index ? "mt-4 max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="text-muted-foreground whitespace-pre-line">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 