"use client";

import { businessConfig } from "@/config/business";
import { SectionHeader } from "@/components/ui/section-header";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ServicesPreview() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          subtitle="What We Offer"
          title="Push Your Limits"
          description="Explore our wide range of fitness programs tailored to help you reach your specific health goals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessConfig.services.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.Dumbbell;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-card border border-white/5 hover:border-accent/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative background icon */}
                <IconComponent className="absolute -right-8 -bottom-8 w-32 h-32 text-white/5 group-hover:text-accent/5 transition-colors" />
                
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <IconComponent className="w-7 h-7 text-accent group-hover:text-black transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <Link href="/services" className="text-accent text-sm font-bold uppercase tracking-widest flex items-center gap-2 group/link">
                  Learn More
                  <Icons.ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link href="/services">
            <Button variant="outline" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
