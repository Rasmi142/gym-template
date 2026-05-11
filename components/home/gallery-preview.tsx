import { SectionHeader } from "@/components/ui/section-header";

const images = [
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1599058917232-d750c8227091?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
];

export function GalleryPreview() {
  return (
    <section id="transformation" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          subtitle="Gallery"
          title="Where Sweat Meets Success"
          description="A glimpse into our facility and the hard work of our members."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={i === 0 ? "col-span-2 row-span-2" : i === 5 ? "col-span-2" : ""}
            >
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 cursor-zoom-in"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
