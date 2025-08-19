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

const Testimonial = ({
  name = "John Doe",
  rating = 5,
  comment = "Amazing food and service!",
  date = "May 2023",
}: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
              />
            ))}
          </div>
          <p className="italic text-gray-600 mb-4">"{comment}"</p>
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </CardContent>
    </Card>
  );
};

interface FeaturedDishProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

const FeaturedDish = ({
  name = "Signature Dish",
  description = "Delicious signature dish with fresh ingredients",
  price = "$24.99",
  imageUrl = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
}: FeaturedDishProps) => {
  return (
    <Card className="overflow-hidden h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0">
      <div className="aspect-[4/3] w-full overflow-hidden relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardContent className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
          <span className="text-2xl font-bold text-amber-600">{price}</span>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

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
      name: "Truffle Risotto",
      description: "Creamy arborio rice with wild mushrooms and truffle oil",
      price: "$26",
      imageUrl:
        "https://images.unsplash.com/photo-1673165311661-5f9a3ad3ffe0?w=800&q=80",
    },
    {
      name: "Seared Scallops",
      description: "Fresh scallops with citrus glaze and seasonal vegetables",
      price: "$32",
      imageUrl:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80",
    },
    {
      name: "Braised Short Rib",
      description:
        "Slow-cooked beef short rib with root vegetables and red wine reduction",
      price: "$34",
      imageUrl:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "The best dining experience I've had in years. The atmosphere was perfect and the food was exceptional.",
      date: "April 2023",
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment:
        "Incredible flavors and impeccable service. Will definitely be returning soon!",
      date: "May 2023",
    },
    {
      name: "Emma Rodriguez",
      rating: 4,
      comment:
        "Beautiful restaurant with amazing food. The wine pairing suggestions were perfect.",
      date: "June 2023",
    },
    {
      name: "David Thompson",
      rating: 5,
      comment:
        "A culinary masterpiece! Every dish was beautifully presented and tasted even better.",
      date: "July 2023",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
            alt="Restaurant interior"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=120&q=80"
                alt="Savory Bistro Logo"
                className="h-16 w-16 mx-auto mb-4 rounded-full shadow-lg"
              />
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Savory Bistro
              </h1>
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Where culinary artistry meets exceptional hospitality in an
              atmosphere of refined elegance
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link to="/menu">Explore Menu</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link to="/reservations">Reserve Table</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A culinary journey that began with passion and continues with
              excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in 2010, Savory Bistro has been serving exceptional
                cuisine in a sophisticated yet comfortable environment. Our
                passion for quality ingredients and innovative cooking
                techniques has made us a favorite destination for food
                enthusiasts.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our award-winning chef brings over 20 years of culinary
                expertise, crafting dishes that blend traditional flavors with
                modern presentation. We pride ourselves on sourcing the finest
                local and seasonal ingredients to create memorable dining
                experiences.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-amber-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-600">Tue-Sun, 5pm-11pm</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-amber-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">123 Culinary Avenue</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Restaurant ambiance"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-amber-600 rounded-2xl hidden lg:flex items-center justify-center shadow-xl">
                <div className="text-white text-center">
                  <p className="font-bold text-3xl">14</p>
                  <p className="text-sm font-medium">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Award Winning
              </h3>
              <p className="text-gray-600">
                Recognized for culinary excellence and outstanding service
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Expert Chefs
              </h3>
              <p className="text-gray-600">
                Master chefs with decades of international experience
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Happy Guests
              </h3>
              <p className="text-gray-600">
                Over 50,000 satisfied customers and counting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Signature Dishes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our chef's masterpieces, each dish crafted with passion
              and the finest seasonal ingredients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div key={index} className="group">
                <FeaturedDish
                  name={dish.name}
                  description={dish.description}
                  price={dish.price}
                  imageUrl={dish.imageUrl}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Reviews & Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Guest Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why our guests return time and again for unforgettable
              dining experiences
            </p>
          </div>
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full">
                      <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                        <CardContent className="p-8 flex flex-col justify-between h-full">
                          <div>
                            <div className="flex items-center mb-4">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-5 w-5 ${i < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                            <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                              &quot;{testimonial.comment}&quot;
                            </blockquote>
                          </div>
                          <div className="border-t pt-4">
                            <p className="font-bold text-gray-900 text-lg">
                              {testimonial.name}
                            </p>
                            <p className="text-amber-600 font-medium">
                              {testimonial.date}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 sm:-left-6 bg-white shadow-lg border-2 hover:bg-gray-50" />
              <CarouselNext className="-right-4 sm:-right-6 bg-white shadow-lg border-2 hover:bg-gray-50" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Mail className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Connected
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, seasonal menu
              updates, and special events
            </p>
          </div>

          {isSubscribed ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <CheckCircle className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-white/90">
                You've successfully subscribed to our newsletter.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleNewsletterSubmit}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/70 text-lg py-4 px-6 rounded-xl focus:bg-white/20 transition-all duration-300"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Event Promotions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Upcoming Events & Promotions
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Don't miss our special events and exclusive dining experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wine Tasting Event */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white overflow-hidden group hover:bg-white/20 transition-all duration-300">
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80"
                  alt="Wine Tasting Event"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Dec 15
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Wine Tasting Evening</h3>
                <p className="text-purple-100 mb-4 text-sm">
                  Join our sommelier for an exclusive wine tasting featuring
                  rare vintages from around the world.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200 text-sm">
                    7:00 PM - 10:00 PM
                  </span>
                  <span className="text-amber-400 font-semibold">
                    $85/person
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Chef's Table */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white overflow-hidden group hover:bg-white/20 transition-all duration-300">
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                  alt="Chef's Table Experience"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Dec 22
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Chef's Table Experience
                </h3>
                <p className="text-purple-100 mb-4 text-sm">
                  An intimate 7-course tasting menu prepared by our head chef
                  with wine pairings.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200 text-sm">
                    6:00 PM - 9:30 PM
                  </span>
                  <span className="text-amber-400 font-semibold">
                    $150/person
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Holiday Special */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white overflow-hidden group hover:bg-white/20 transition-all duration-300">
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80"
                  alt="Holiday Special Menu"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Dec 24-31
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Holiday Special Menu</h3>
                <p className="text-purple-100 mb-4 text-sm">
                  Celebrate the holidays with our special festive menu featuring
                  seasonal ingredients.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200 text-sm">All Day</span>
                  <span className="text-amber-400 font-semibold">
                    Prix Fixe $65
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link to="/contact">Book Event Tickets</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join us for an evening of exceptional cuisine, impeccable service,
            and memories that will last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link to="#">Order Online</Link>
            </Button>
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link to="/reservations">Reserve Your Table</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
