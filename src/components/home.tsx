import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Star,
  MapPin,
  Clock,
  Mail,
  CheckCircle,
  Award,
  Users,
  ChefHat,
} from "lucide-react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

interface TestimonialProps {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const Testimonial = ({ name, rating, comment, date }: TestimonialProps) => (
  <Card className="h-full bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-lg border-0">
    <CardContent className="p-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "text-amber-400 fill-amber-400" : "text-gray-500"
              }`}
            />
          ))}
        </div>
        <p className="italic text-gray-200 mb-4">"{comment}"</p>
      </div>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-400">{date}</p>
      </div>
    </CardContent>
  </Card>
);

interface FeaturedDishProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

const FeaturedDish = ({
  name,
  description,
  price,
  imageUrl,
}: FeaturedDishProps) => (
  <Card className="overflow-hidden h-full bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0">
    <div className="aspect-[4/3] w-full overflow-hidden relative">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <CardContent className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <span className="text-amber-400 text-xl font-semibold">{price}</span>
      </div>
      <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const featuredDishes = [
    {
      name: "Baja Fish Tacos",
      description:
        "Fresh grilled fish with cabbage slaw, crema, and lime on soft tortillas",
      price: "$14",
      imageUrl: "images/Fish_Tacos.jpg",
    },
    {
      name: "California-Style Burger",
      description:
        "Juicy beef patty, avocado, pepper jack, and chipotle aioli with fries",
      price: "$18",
      imageUrl:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
    },
    {
      name: "Mexican-Italian Fusion Pasta",
      description:
        "Pappardelle with roasted poblano cream sauce and grilled chicken",
      price: "$22",
      imageUrl:
        "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800&q=80",
    },
  ];

  const testimonials = [
    {
      name: "Alejandro Morales",
      rating: 5,
      comment:
        "Amazing mix of Baja flavors and international dishes. Always a pleasure to visit!",
      date: "April 2025",
    },
    {
      name: "Samantha Lee",
      rating: 5,
      comment: "Fresh ingredients and friendly staff. A must-try in Tijuana!",
      date: "May 2025",
    },
    {
      name: "Carlos Jimenez",
      rating: 4,
      comment:
        "Great ambiance and delicious fusion food. Will come back with friends.",
      date: "June 2025",
    },
    {
      name: "Emily Carter",
      rating: 5,
      comment:
        "Perfect balance between local Mexican flavors and modern cuisine.",
      date: "July 2025",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="images/HeroCover.png"
            alt="Restaurant interior"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="font-raffishly text-8xl sm:text-7xl md:text-8xl font-bold tracking-tight">
                Noctora
              </h1>
            </div>
            <p className="font-Negara text-xl sm:text-2xl md:text-3xl text-gray-200/90 mb-12 leading-relaxed">
              Good food, good vibes, after dark.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link to="/menu">Explore Menu</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 text-gray-900 border-gray-20 hover:bg-gray-200 hover:text-gray-900 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link to="/reservations">Reserve Table</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="font-Negara py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Signature Dishes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our chef's masterpieces, each crafted with passion and
              precision
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div key={index} className="group">
                <FeaturedDish {...dish} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="font-Negara py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Guest Experiences
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See why guests return again and again for unforgettable nights at
            Noctora
          </p>
        </div>
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((t, i) => (
              <CarouselItem
                key={i}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Testimonial {...t} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 sm:-left-6 bg-gray-700/80 hover:bg-gray-600 text-white" />
          <CarouselNext className="-right-4 sm:-right-6 bg-gray-700/80 hover:bg-gray-600 text-white" />
        </Carousel>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
