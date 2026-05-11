"use client";

import { businessConfig } from "@/config/business";
import { SectionHeader } from "@/components/ui/section-header";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          subtitle="Success Stories"
          title="From Our Members"
          description="Hear from those who have transformed their lives at Fitness."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessConfig.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border border-white/5 relative"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-white/5" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-accent"
                />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
