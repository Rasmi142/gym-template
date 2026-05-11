"use client";

import { useState } from "react";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { SectionHeader } from "@/components/ui/section-header";
import { businessConfig } from "@/config/business";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { WhatsAppChatbot } from "@/components/whatsapp/chatbot";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast, Toaster } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        reset();
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Toaster position="top-center" theme="dark" />
      
      <section className="pt-32 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader
            subtitle="Get In Touch"
            title="We're Here to Help"
            description="Have a question or want to join? Fill out the form below or reach us directly."
            className="mb-20"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-card p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                    <input
                      {...register("name")}
                      placeholder="John Doe"
                      className="w-full bg-muted border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent focus:outline-none transition-colors"
                    />
                    {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Phone</label>
                    <input
                      {...register("phone")}
                      placeholder="+91 98765 43210"
                      className="w-full bg-muted border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent focus:outline-none transition-colors"
                    />
                    {errors.phone && <p className="text-red-500 text-[10px] font-bold uppercase">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                  <input
                    {...register("email")}
                    placeholder="john@example.com"
                    className="w-full bg-muted border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent focus:outline-none transition-colors"
                  />
                  {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell us about your fitness goals..."
                    className="w-full bg-muted border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase">{errors.message.message}</p>}
                </div>

                <Button variant="accent" size="lg" className="w-full h-14" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-muted/50 border border-white/5">
                  <Phone className="w-8 h-8 text-accent mb-6" />
                  <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Call Us</h4>
                  <p className="font-bold">{businessConfig.contact.phone}</p>
                </div>
                <div className="p-8 rounded-3xl bg-muted/50 border border-white/5">
                  <Mail className="w-8 h-8 text-accent mb-6" />
                  <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Email Us</h4>
                  <p className="font-bold">{businessConfig.contact.email}</p>
                </div>
                <div className="p-8 rounded-3xl bg-muted/50 border border-white/5 col-span-1 sm:col-span-2">
                  <MapPin className="w-8 h-8 text-accent mb-6" />
                  <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Visit Us</h4>
                  <p className="font-bold">{businessConfig.contact.address}</p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-accent text-black">
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">Chat on WhatsApp</h4>
                <p className="font-bold mb-6 opacity-80">Get instant answers to your questions through our WhatsApp support.</p>
                <a href={`https://wa.me/${businessConfig.contact.whatsapp}`} target="_blank">
                  <Button className="bg-black text-white hover:bg-black/90 w-full h-14 rounded-2xl">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Open WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-24 h-[500px] rounded-3xl overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700">
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

      <Footer />
      <WhatsAppChatbot />
    </main>
  );
}
