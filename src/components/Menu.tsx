import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
}

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  return (
    <Card className="overflow-hidden h-full border-0 bg-gradient-to-br from-[#1f2937] to-[#111827] text-white rounded-[1rem] shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-500 hover:translate-y-[-8px] hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
      <div className="aspect-[4/3] w-full overflow-hidden relative">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-[#f59e0b] text-white px-3 py-1 rounded-full text-sm font-semibold">
          {item.price}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-poppins text-2xl font-bold text-white mb-2 leading-tight">
          {item.name}
        </h3>
        <p className="text-sm font-inter text-[#d1d5db] leading-relaxed">
          {item.description}
        </p>
      </CardContent>
    </Card>
  );
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Starters",
    "Mains",
    "Tijuana Originals",
    "Drinks",
  ];

  const menuItems: MenuItem[] = [
    // Starters (with a Baja twist)
    {
      id: 1,
      name: "Tuna Tostadas",
      description:
        "Fresh sashimi-grade tuna, avocado, chipotle aioli on a crispy corn tostada, drizzled with soy-lime glaze.",
      price: "$15",
      imageUrl: "./images/Food/tuna-tostadas.png",
      category: "Starters",
    },
    {
      id: 2,
      name: "Street Corn Dip",
      description:
        "A creamy, cheesy dip inspired by classic Mexican street corn (elote), served with warm tortilla chips.",
      price: "$12",
      imageUrl: "./images/Food/street-corn-dip.png",
      category: "Starters",
    },
    {
      id: 3,
      name: "Caesar's Salad (Original)",
      description:
        "The classic salad, invented right here in Tijuana, with crisp romaine, croutons, and the signature dressing.",
      price: "$14",
      imageUrl: "./images/Food/caesar-salad.png",
      category: "Starters",
    },
    // Mains (American comfort with Mexican flavors)
    {
      id: 4,
      name: "Baja-Style Fish Tacos",
      description:
        "Crispy beer-battered cod, fresh cabbage slaw, pico de gallo, and a creamy Baja sauce on a warm corn tortilla.",
      price: "$20",
      imageUrl: "./images/Food/Fish_Tacos.png",
      category: "Mains",
    },
    {
      id: 5,
      name: "Carne Asada Burrito",
      description:
        "Grilled marinated steak, rice, beans, and fresh guacamole wrapped in a large flour tortilla.",
      price: "$22",
      imageUrl: "./images/Food/carne-asada-burrito.png",
      category: "Mains",
    },
    {
      id: 6,
      name: "Lobster & Shrimp Fajitas",
      description:
        "Grilled lobster and shrimp, sautéed with bell peppers and onions, served with warm tortillas and all the fixings.",
      price: "$35",
      imageUrl: "./images/Food/lob-shrimp.png",
      category: "Mains",
    },
    // Tijuana Originals
    {
      id: 7,
      name: "Tacos Adobada",
      description:
        "Spit-roasted, chile-marinated pork with pineapple, onion, and cilantro on a fresh corn tortilla.",
      price: "$18",
      imageUrl: "./images/Food/adobada.png",
      category: "Tijuana Originals",
    },
    {
      id: 8,
      name: "Pork Belly Tacos",
      description:
        "Crispy pork belly in a savory glaze, served on a warm tortilla with a spicy cabbage slaw.",
      price: "$19",
      imageUrl: "./images/Food/porkbelly-tacos.png",
      category: "Tijuana Originals",
    },
    {
      id: 9,
      name: "Torta Ahogada",
      description:
        "A Guadalajara-style 'drowned' sandwich with slow-braised pork, dipped in a spicy tomato-chile broth.",
      price: "$16",
      imageUrl: "./images/Food/torta-ahogada.jpeg",
      category: "Tijuana Originals",
    },
    // Desserts
    {
      id: 10,
      name: "Churro Sundae",
      description:
        "Crispy fried churros tossed in cinnamon-sugar, served with vanilla ice cream and a drizzle of caramel.",
      price: "$12",
      imageUrl: "./images/Food/churro.jpg",
      category: "Desserts",
    },
    {
      id: 11,
      name: "Mexican Chocolate Tart",
      description:
        "Rich dark chocolate tart with a hint of cinnamon and cayenne pepper, topped with a dollop of whipped cream.",
      price: "$10",
      imageUrl:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
      category: "Desserts",
    },
    // Drinks
    {
      id: 12,
      name: "Tijuana Mule",
      description:
        "Our take on a classic cocktail with premium tequila, ginger beer, fresh lime, and a hint of mint.",
      price: "$14",
      imageUrl:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
      category: "Drinks",
    },
    {
      id: 13,
      name: "Craft Beer Selection",
      description:
        "A rotating selection of local Baja craft beers and popular American microbrews.",
      price: "$8-12",
      imageUrl:
        "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80",
      category: "Drinks",
    },
    {
      id: 14,
      name: "Artisan Coffee",
      description:
        "Single-origin coffee beans, expertly roasted and freshly brewed.",
      price: "$5-8",
      imageUrl:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      category: "Drinks",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-[#111827] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-[6rem] px-[2rem] text-center bg-[#111827] animate-fadeIn">
        <div className="absolute inset-0 z-0 opacity-60">
          <img
            src="images/HeroCover.png"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-[1280px] mx-auto z-10">
          <h1 className="font-poppins text-[3.5rem] md:text-[5rem] font-bold text-white leading-[1.2] tracking-[-0.02em] mb-6 animate-pulse">
            Our Menu
          </h1>
          <p className="font-inter text-lg md:text-xl text-[#d1d5db] max-w-3xl mx-auto">
            Discover our culinary fusion, where traditional Mexican flavors meet
            modern American classics.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-[2rem] bg-[#111827] sticky top-[72px] z-40 border-b border-[#1f2937]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  font-poppins px-6 py-2 text-sm font-semibold rounded-[0.75rem] transition-all duration-300 transform
                  ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:scale-[1.05]"
                      : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#111827] hover:scale-[1.05]"
                  }
                `}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* QR Menu Section */}
      <section className="py-[4rem] px-[2rem] bg-[#111827]">
        <div className="max-w-[1280px] mx-auto text-center rounded-[1rem] p-8 md:p-12 bg-gradient-to-br from-[#1f2937] to-[#111827] shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-[-0.02em]">
            Scan for Digital Menu
          </h2>
          <p className="font-inter text-lg text-[#d1d5db] mb-8 max-w-2xl mx-auto">
            Access our complete menu with detailed descriptions, allergen
            information, and real-time availability on your mobile device.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* QR Code */}
            <div className="bg-[#1f2937] p-6 rounded-xl shadow-lg border-2 border-[#1f2937]">
              <div className="w-48 h-48 bg-[#1f2937] rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white p-2 rounded-lg mb-2 mx-auto flex items-center justify-center">
                    <div className="grid grid-cols-8 gap-1">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-1 h-1 ${
                            Math.random() > 0.5 ? "bg-black" : "bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-[#d1d5db] font-medium">
                    QR Menu Code
                  </p>
                </div>
              </div>
              <p className="text-sm font-medium text-[#d1d5db]">
                Scan with your camera
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#a78bfa] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Contactless Ordering
                  </h3>
                  <p className="text-[#d1d5db] text-sm">
                    Browse and order directly from your table
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#a78bfa] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Detailed Information
                  </h3>
                  <p className="text-[#d1d5db] text-sm">
                    Ingredients, allergens, and nutritional info
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#a78bfa] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Real-time Updates
                  </h3>
                  <p className="text-[#d1d5db] text-sm">
                    Live availability and daily specials
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#1f2937]">
            <p className="text-sm text-[#d1d5db]">
              Or browse our menu below for a traditional viewing experience
            </p>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-[4rem] px-[2rem] bg-[#111827]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#d1d5db] text-lg">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Online Ordering CTA */}
      <section className="py-[4rem] px-[2rem] bg-gradient-to-r from-[#5b21b6] to-[#312e81] shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-[-0.02em]">
            Order Online for Pickup or Delivery
          </h2>
          <p className="font-inter text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Enjoy our delicious food from the comfort of your home. Fast,
            convenient, and always fresh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white px-8 py-4 text-lg font-semibold rounded-[0.75rem] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.05]"
            >
              Order for Pickup
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-[0.75rem] shadow-lg hover:bg-white hover:text-[#111827] hover:shadow-xl transition-all duration-300 transform hover:scale-[1.05]"
            >
              Order for Delivery
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
