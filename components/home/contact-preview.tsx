import { businessConfig } from "@/config/business";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <span className="text-accent text-sm font-bold uppercase tracking-[0.2em]">Contact Us</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-8 font-heading">
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Have questions about our plans or want to book a trial? Reach out to us through any of these channels or visit us in person.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center shrink-0 border border-white/5">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Call Us</h4>
                <p className="text-lg font-bold">{businessConfig.contact.phone}</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center shrink-0 border border-white/5">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Email Us</h4>
                <p className="text-lg font-bold">{businessConfig.contact.email}</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center shrink-0 border border-white/5">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Timings</h4>
                {businessConfig.openingHours.map((h) => (
                  <p key={h.day} className="text-lg font-bold">{h.day}: {h.hours}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <Link href="/contact">
              <Button variant="accent" size="lg">Send Message</Button>
            </Link>
            <a href={`https://wa.me/${businessConfig.contact.whatsapp}`} target="_blank">
              <Button variant="outline" size="lg">WhatsApp Us</Button>
            </a>
          </div>
        </div>

        <div className="h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-white/10 shadow-2xl">
          <iframe
            src={businessConfig.contact.mapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
