"use client";

import { useState } from "react";
import { businessConfig } from "@/config/business";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function WhatsAppChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppRedirect = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${businessConfig.contact.whatsapp}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[320px] bg-card border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-accent p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <MessageCircle className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-black font-bold text-sm">{businessConfig.name}</h4>
                  <p className="text-black/70 text-[10px] uppercase font-bold">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-black hover:bg-black/10 rounded-full p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 bg-muted/30">
              <div className="bg-muted p-4 rounded-2xl rounded-tl-none border border-white/5">
                <p className="text-sm leading-relaxed">
                  {businessConfig.whatsappChatbot.welcomeMessage}
                </p>
              </div>

              <div className="space-y-2">
                {businessConfig.whatsappChatbot.options.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => handleWhatsAppRedirect(option.message)}
                    className="w-full text-left p-3 rounded-xl bg-card border border-white/10 text-xs font-semibold hover:border-accent hover:text-accent transition-all flex items-center justify-between group"
                  >
                    {option.label}
                    <Send className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300",
          isOpen ? "bg-red-500 rotate-90" : "bg-[#25D366] hover:scale-110"
        )}
      >
        {isOpen ? <X className="text-white w-6 h-6" /> : <MessageCircle className="text-white w-8 h-8 fill-white/20" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-accent"></span>
          </span>
        )}
      </button>
    </div>
  );
}
