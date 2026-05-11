import { Shield, Clock, Award, Users } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Fully sanitized and secure workout environment for your peace of mind.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Open from early morning to late night to fit your busy schedule.",
  },
  {
    icon: Award,
    title: "Expert Coaches",
    description: "Certified trainers dedicated to helping you achieve your personal best.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description: "Join a tribe of motivated individuals pushing each other every day.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-accent text-sm font-bold uppercase tracking-[0.2em]">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-12 font-heading">
            More Than Just a Gym. <br /> It's a Lifestyle.
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="space-y-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-lg font-bold">{reason.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80"
            alt="Gym Atmosphere"
            className="rounded-3xl shadow-2xl grayscale"
          />
          <div className="absolute -bottom-8 -left-8 bg-accent p-8 rounded-3xl hidden md:block">
            <p className="text-black font-black text-2xl uppercase leading-none">Real Results.</p>
            <p className="text-black/70 text-sm font-bold uppercase tracking-widest mt-2">Guaranteed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
