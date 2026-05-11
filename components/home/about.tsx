import { businessConfig } from "@/config/business";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Certified Personal Trainers",
  "Modern & Imported Equipment",
  "Spacious & Air-Conditioned Facility",
  "Flexible Membership Plans",
  "Nutrition & Diet Counseling",
  "Steam Bath & Locker Facilities",
];

export function About() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80"
              alt="Gym Interior"
              className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="bg-accent p-8 rounded-2xl">
              <p className="text-black font-black text-4xl leading-none mb-2">10+</p>
              <p className="text-black/70 text-xs font-bold uppercase tracking-widest">Years of Excellence</p>
            </div>
          </div>
          <div className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80"
              alt="Trainer"
              className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div>
            <span className="text-accent text-sm font-bold uppercase tracking-[0.2em]">Our Story</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 font-heading">
              Elevating Fitness Standards in Tamil Nadu
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Started with a vision to make premium fitness accessible, {businessConfig.name} has grown into a community of hundreds of dedicated individuals. We believe fitness is not just about looks, but about strength, resilience, and discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <Button variant="outline" size="lg">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
}
