"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "What industries do you work with?",
    answer: "I work with a wide range of industries, including startups, small businesses, e-commerce brands, tech companies, and Gouvernament Websites."
  },
  {
    question: "What is your design process?",
    answer: (
      <div className="space-y-4">
        <p>My design process typically follows these steps:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Discovery: Understanding your business, goals, and target audience.</li>
          <li>Research & Strategy: Analyzing competitors and market trends.</li>
          <li>Concept Development: Creating initial design drafts and concepts.</li>
          <li>Refinement: Making necessary adjustments based on your feedback.</li>
          <li>Final Delivery: Providing high-quality files and assets.</li>
        </ul>
      </div>
    )
  },
  {
    question: "How long does a project take?",
    answer: (
      <div className="space-y-4">
        <p>The timeline depends on the scope of the project:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Logo Design: 1-2 weeks</li>
          <li>Brand Identity Package: 2-4 weeks</li>
          <li>Website Design & Development: 3-6 weeks</li>
        </ul>
        <p>Custom projects may take longer, and I always provide an estimated timeline before starting.</p>
      </div>
    )
  },
  {
    question: "What tools do you use?",
    answer: "I primarily use Adobe Creative Suite (Photoshop, Illustrator, XD), Figma for UI/UX design, and Cursor or WordPress for website development."
  },
  {
    question: "What do you need from me to start a project?",
    answer: (
      <div className="space-y-4">
        <p>To get started, I need:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>A brief overview of your business and goals.</li>
          <li>Any existing brand materials (if applicable).</li>
          <li>Your preferred color schemes, styles, or inspirations.</li>
          <li>Content such as text and images for the website.</li>
        </ul>
      </div>
    )
  },
  {
    question: "How do we communicate throughout the project?",
    answer: "I am available via email, Zoom, or messaging platforms like WhatsApp or iMessage. I also provide regular progress updates to keep you in the loop."
  },
  {
    question: "How can I get started?",
    answer: "You can reach out via email or my contact form. Let's discuss your project and bring your vision to life!"
  }
];

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

      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about my design process, timeline, and how we can work together.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border/50 rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "pb-6 max-h-96" : "max-h-0"
                }`}
              >
                <div className="text-muted-foreground">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 