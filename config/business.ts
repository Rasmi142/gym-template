export const businessConfig = {
  name: "Fitness",
  tagline: "Unleash Your Inner Strength",
  description: "Experience premium fitness training in the heart of Tamil Nadu. Modern equipment, certified trainers, and a community focused on results.",
  logo: "/logo.png", // Placeholder path
  contact: {
    phone: "+91 98765 43210",
    email: "info@antigravityfitness.in",
    address: "123, Fitness Street, Anna Nagar, Chennai, Tamil Nadu 600040",
    whatsapp: "919876543210", // wa.me format
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4116514781483!2d80.20790857507817!3d13.085799987239618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52640578655555%3A0x6d0400827299388a!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715424000000!5m2!1sen!2sin",
  },
  openingHours: [
    { day: "Mon - Sat", hours: "5:30 AM - 10:00 PM" },
    { day: "Sunday", hours: "6:00 AM - 12:00 PM" },
  ],
  socials: {
    instagram: "https://instagram.com/antigravityfitness",
    facebook: "https://facebook.com/antigravityfitness",
    youtube: "https://youtube.com/@antigravityfitness",
  },
  services: [
    {
      id: "weight-loss",
      title: "Weight Loss Program",
      description: "Customized diet and workout plans to help you shed those extra kilos effectively.",
      icon: "TrendingDown",
      price: "₹1,999/mo",
    },
    {
      id: "strength",
      title: "Strength Training",
      description: "Build muscle and increase power with our advanced strength conditioning programs.",
      icon: "Dumbbell",
      price: "₹2,499/mo",
    },
    {
      id: "cardio",
      title: "Cardio & HIIT",
      description: "High-intensity workouts designed to boost your metabolism and heart health.",
      icon: "HeartPulse",
      price: "₹1,499/mo",
    },
    {
      id: "personal-training",
      title: "Personal Training",
      description: "One-on-one sessions with our certified experts for maximum results.",
      icon: "Users",
      price: "₹5,000/mo",
    },
    {
      id: "crossfit",
      title: "CrossFit Box",
      description: "Functional movements performed at high intensity for total body fitness.",
      icon: "Zap",
      price: "₹2,999/mo",
    },
    {
      id: "diet-guidance",
      title: "Nutrition & Diet",
      description: "Personalized meal plans to complement your physical training.",
      icon: "Apple",
      price: "Included",
    },
  ],
  pricing: [
    {
      name: "Basic Plan",
      price: "₹4,999",
      duration: "3 Months",
      features: ["Gym Access", "Locker Facility", "Initial Assessment", "General Trainer Support"],
      isPopular: false,
    },
    {
      name: "Standard Plan",
      price: "₹8,999",
      duration: "6 Months",
      features: ["Everything in Basic", "Personalized Workout Plan", "Steam Bath Access", "Diet Consultation"],
      isPopular: true,
    },
    {
      name: "Annual Plan",
      price: "₹14,999",
      duration: "12 Months",
      features: ["Everything in Standard", "2 Free PT Sessions", "Supplement Advice", "Family Discounts"],
      isPopular: false,
    },
  ],
  testimonials: [
    {
      name: "Rahul Sharma",
      role: "Member for 1 year",
      content: "Fitness changed my life. I lost 15kg in 6 months with their guidance!",
      avatar: "https://i.pravatar.cc/150?u=rahul",
    },
    {
      name: "Priya Lakshmi",
      role: "Member for 2 years",
      content: "The best gym in Chennai. The trainers are highly professional and supportive.",
      avatar: "https://i.pravatar.cc/150?u=priya",
    },
    {
      name: "Vikram Raj",
      role: "Member for 6 months",
      content: "Modern equipment and a great vibe. Highly recommend their strength training program.",
      avatar: "https://i.pravatar.cc/150?u=vikram",
    },
  ],
  faqs: [
    {
      question: "What are your timings?",
      answer: "We are open from 5:30 AM to 10:00 PM on weekdays and 6:00 AM to 12:00 PM on Sundays.",
    },
    {
      question: "Do you have personal trainers?",
      answer: "Yes, we have certified personal trainers who can provide one-on-one coaching.",
    },
    {
      question: "Is there a trial class available?",
      answer: "Absolutely! You can sign up for a free 3-day trial to experience our gym.",
    },
  ],
  whatsappChatbot: {
    welcomeMessage: "Hi 👋 Welcome to Fitness. How can we help you today?",
    options: [
      { label: "Membership Plans", message: "Hi, I'm interested in your Membership Plans. Please provide details." },
      { label: "Personal Training", message: "Hi, I want to know more about Personal Training options." },
      { label: "Weight Loss Program", message: "Hi, I'm looking for a Weight Loss Program. Can you help?" },
      { label: "Contact Gym", message: "Hi, I would like to speak with someone from the gym." },
    ],
  },
};
