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
    <Card className="overflow-hidden h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0">
      <div className="aspect-[4/3] w-full overflow-hidden relative">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {item.price}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.description}
        </p>
      </CardContent>
    </Card>
  );
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Starters", "Main Dishes", "Desserts", "Drinks"];

  const menuItems: MenuItem[] = [
    // Starters
    {
      id: 1,
      name: "Truffle Arancini",
      description:
        "Crispy risotto balls with truffle oil and parmesan, served with marinara sauce",
      price: "$14",
      imageUrl:
        "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=800&q=80",
      category: "Starters",
    },
    {
      id: 2,
      name: "Burrata Caprese",
      description:
        "Fresh burrata cheese with heirloom tomatoes, basil, and balsamic glaze",
      price: "$16",
      imageUrl:
        "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=800&q=80",
      category: "Starters",
    },
    {
      id: 3,
      name: "Seared Scallops",
      description:
        "Pan-seared scallops with cauliflower puree and pancetta crisps",
      price: "$18",
      imageUrl:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80",
      category: "Starters",
    },
    {
      id: 4,
      name: "Tuna Tartare",
      description:
        "Fresh yellowfin tuna with avocado, cucumber, and sesame dressing",
      price: "$19",
      imageUrl:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
      category: "Starters",
    },
    // Main Dishes
    {
      id: 5,
      name: "Braised Short Rib",
      description:
        "Slow-cooked beef short rib with root vegetables and red wine reduction",
      price: "$34",
      imageUrl:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
      category: "Main Dishes",
    },
    {
      id: 6,
      name: "Pan-Seared Salmon",
      description:
        "Atlantic salmon with lemon herb butter, asparagus, and quinoa pilaf",
      price: "$28",
      imageUrl:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
      category: "Main Dishes",
    },
    {
      id: 7,
      name: "Duck Confit",
      description:
        "Traditional French duck leg with garlic mashed potatoes and cherry gastrique",
      price: "$32",
      imageUrl:
        "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&q=80",
      category: "Main Dishes",
    },
    {
      id: 8,
      name: "Lobster Risotto",
      description: "Creamy arborio rice with fresh lobster, peas, and saffron",
      price: "$36",
      imageUrl:
        "https://images.unsplash.com/photo-1673165311661-5f9a3ad3ffe0?w=800&q=80",
      category: "Main Dishes",
    },
    // Desserts
    {
      id: 9,
      name: "Chocolate Lava Cake",
      description:
        "Warm chocolate cake with molten center, vanilla ice cream, and berry coulis",
      price: "$12",
      imageUrl:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
      category: "Desserts",
    },
    {
      id: 10,
      name: "Tiramisu",
      description:
        "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone",
      price: "$10",
      imageUrl:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
      category: "Desserts",
    },
    {
      id: 11,
      name: "Crème Brûlée",
      description:
        "Vanilla custard with caramelized sugar crust and fresh berries",
      price: "$11",
      imageUrl:
        "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=800&q=80",
      category: "Desserts",
    },
    {
      id: 12,
      name: "Lemon Tart",
      description:
        "Tangy lemon curd in buttery pastry shell with meringue and candied lemon",
      price: "$9",
      imageUrl:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
      category: "Desserts",
    },
    // Drinks
    {
      id: 13,
      name: "Signature Cocktail",
      description:
        "House special with premium spirits, fresh herbs, and seasonal fruits",
      price: "$14",
      imageUrl:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
      category: "Drinks",
    },
    {
      id: 14,
      name: "Wine Selection",
      description:
        "Curated selection of fine wines from renowned vineyards worldwide",
      price: "$12-45",
      imageUrl:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
      category: "Drinks",
    },
    {
      id: 15,
      name: "Craft Beer",
      description:
        "Local and imported craft beers, rotating seasonal selections",
      price: "$8-12",
      imageUrl:
        "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80",
      category: "Drinks",
    },
    {
      id: 16,
      name: "Artisan Coffee",
      description:
        "Single-origin coffee beans, expertly roasted and freshly brewed",
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
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Menu
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our carefully crafted dishes, made with the finest
            ingredients and passion for culinary excellence
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

      {/* QR Menu Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Scan for Digital Menu
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Access our complete menu with detailed descriptions, allergen
              information, and real-time availability on your mobile device
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              {/* QR Code */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
                <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-black rounded-lg mb-2 mx-auto flex items-center justify-center">
                      <div className="grid grid-cols-8 gap-1">
                        {Array.from({ length: 64 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-1 h-1 ${Math.random() > 0.5 ? "bg-white" : "bg-black"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 font-medium">
                      QR Menu Code
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Scan with your camera
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6 text-left">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-green-600"
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
                    <h3 className="font-semibold text-gray-900">
                      Contactless Ordering
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Browse and order directly from your table
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-blue-600"
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
                    <h3 className="font-semibold text-gray-900">
                      Detailed Information
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Ingredients, allergens, and nutritional info
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-purple-600"
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
                    <h3 className="font-semibold text-gray-900">
                      Real-time Updates
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Live availability and daily specials
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Or browse our menu below for a traditional viewing experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Online Ordering CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Order Online for Pickup or Delivery
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Enjoy our delicious food from the comfort of your home. Fast,
            convenient, and always fresh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Order for Pickup
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Order for Delivery
            </Button>
          </div>
          <p className="text-green-100 text-sm mt-4">
            Free delivery on orders over $35 • Average delivery time: 25-35
            minutes
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
