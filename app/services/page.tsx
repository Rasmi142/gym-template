import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { businessConfig } from "@/config/business";
import { SectionHeader } from "@/components/ui/section-header";
import * as Icons from "lucide-react";
import { WhatsAppChatbot } from "@/components/whatsapp/chatbot";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <section className="pt-32 pb-24 bg-gradient-premium">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader
            subtitle="Our Services"
            title="Comprehensive Fitness Programs"
            description="We offer a variety of programs designed to push you towards your goals, whether you're a beginner or a seasoned athlete."
            className="mb-20"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {businessConfig.services.map((service) => {
              const IconComponent = (Icons as any)[service.icon] || Icons.Dumbbell;
              return (
                <div key={service.id} className="flex flex-col md:flex-row gap-8 p-8 rounded-3xl bg-card border border-white/5 hover:border-accent/30 transition-all group">
                  <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-accent transition-colors">
                    <IconComponent className="w-10 h-10 text-accent group-hover:text-black transition-colors" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <span className="text-accent font-black">{service.price}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icons.Check className="w-4 h-4 text-accent" />
                        Certified Professional Guidance
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icons.Check className="w-4 h-4 text-accent" />
                        Modern Equipment Access
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icons.Check className="w-4 h-4 text-accent" />
                        Personalized Progress Tracking
                      </li>
                    </ul>
                    <Button variant="outline" className="mt-4">Book Trial</Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent text-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Don't Wait for Tomorrow.
          </h2>
          <p className="text-xl font-bold opacity-80">
            Join the most elite fitness community in Tamil Nadu today and start your transformation.
          </p>
          <div className="flex flex-col sm:row gap-4 justify-center">
            <Button className="bg-black text-white hover:bg-black/90 py-8 px-12 text-lg rounded-2xl">
              Start Your Journey
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-black/10 py-8 px-12 text-lg rounded-2xl">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChatbot />
    </main>
  );
}
