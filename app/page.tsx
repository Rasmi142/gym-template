import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { ServicesPreview } from "@/components/home/services-preview";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Testimonials } from "@/components/home/testimonials";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { PricingPreview } from "@/components/home/pricing-preview";
import { ContactPreview } from "@/components/home/contact-preview";
import { WhatsAppChatbot } from "@/components/whatsapp/chatbot";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <article>
        <Hero />
        <About />
        <ServicesPreview />
        <WhyChooseUs />
        <Testimonials />
        <GalleryPreview />
        <PricingPreview />
        <ContactPreview />
      </article>

      <Footer />
      <WhatsAppChatbot />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden flex gap-2 bg-gradient-to-t from-black to-transparent">
        <a href="tel:+919876543210" className="flex-1">
          <button className="w-full bg-muted text-foreground py-4 rounded-xl font-bold uppercase tracking-widest text-xs border border-white/10 backdrop-blur-md">
            Call Us
          </button>
        </a>
        <a href="https://wa.me/919876543210" className="flex-1">
          <button className="w-full bg-accent text-black py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-2xl shadow-accent/20">
            Join Now
          </button>
        </a>
      </div>
    </main>
  );
}
