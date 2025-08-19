import React, { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) => {
  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-7xl max-h-full">
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <Button
              onClick={onPrev}
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={onNext}
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}

        {/* Image */}
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-w-full max-h-full object-contain"
        />

        {/* Image Info */}
        <div className="absolute bottom-4 left-4 right-4 text-center">
          <p className="text-white text-lg font-medium mb-2">
            {currentImage.alt}
          </p>
          <p className="text-white/70 text-sm">
            {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ["All", "Interior", "Food", "Events", "Chef"];

  const galleryImages: GalleryImage[] = [
    // Interior
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      alt: "Elegant dining room with warm lighting",
      category: "Interior",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      alt: "Cozy restaurant atmosphere",
      category: "Interior",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1552566090-a3d4d1f4d4b8?w=800&q=80",
      alt: "Modern bar area with premium spirits",
      category: "Interior",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      alt: "Private dining room for special occasions",
      category: "Interior",
    },
    // Food
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
      alt: "Beautifully plated signature dish",
      category: "Food",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1673165311661-5f9a3ad3ffe0?w=800&q=80",
      alt: "Truffle risotto with seasonal vegetables",
      category: "Food",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80",
      alt: "Fresh seared scallops with citrus glaze",
      category: "Food",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
      alt: "Braised short rib with root vegetables",
      category: "Food",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
      alt: "Decadent chocolate lava cake",
      category: "Food",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
      alt: "Classic tiramisu with espresso",
      category: "Food",
    },
    // Events
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      alt: "Wedding reception in our main dining room",
      category: "Events",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
      alt: "Corporate dinner event",
      category: "Events",
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      alt: "Wine tasting evening",
      category: "Events",
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      alt: "Birthday celebration setup",
      category: "Events",
    },
    // Chef
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80",
      alt: "Head chef preparing signature dish",
      category: "Chef",
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      alt: "Kitchen team in action",
      category: "Chef",
    },
    {
      id: 17,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      alt: "Chef plating with precision",
      category: "Chef",
    },
    {
      id: 18,
      src: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=800&q=80",
      alt: "Fresh ingredients preparation",
      category: "Chef",
    },
  ];

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1,
    );
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Take a visual journey through our restaurant, from our elegant
            interiors to our exquisite culinary creations
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-amber-600 hover:bg-amber-700 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={image.id}
                className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square w-full overflow-hidden relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                      <p className="text-sm font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={filteredImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
