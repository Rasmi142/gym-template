"use client";

import { businessConfig } from "@/config/business";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function PricingPreview() {
  return (
    <section id="pricing" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          subtitle="Pricing Plans"
          title="Choose Your Path"
          description="Straightforward pricing for everyone. No hidden fees."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessConfig.pricing.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "p-8 rounded-3xl border transition-all duration-300 relative",
                plan.isPopular
                  ? "bg-accent text-black border-accent"
                  : "bg-card text-foreground border-white/5 hover:border-accent/50"
              )}
            >
              {plan.isPopular && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-white text-black text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-xl">
                  Most Popular
                </span>
              )}

              <h4 className="text-xl font-bold uppercase tracking-widest mb-2">{plan.name}</h4>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className={cn("text-sm opacity-60 font-bold uppercase tracking-tighter", plan.isPopular ? "text-black" : "text-muted-foreground")}>
                  / {plan.duration}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium">
                    <Check className={cn("w-5 h-5 shrink-0", plan.isPopular ? "text-black" : "text-accent")} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.isPopular ? "primary" : "accent"}
                className={cn("w-full py-6", plan.isPopular ? "bg-black text-white hover:bg-black/90" : "")}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-muted-foreground text-sm font-medium">
          * Terms and conditions apply. Contact us for student and corporate discounts.
        </p>
      </div>
    </section>
  );
}
