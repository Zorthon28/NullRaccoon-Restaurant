import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  BusFront,
  Footprints,
} from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#111827] text-[#d1d5db]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative py-24 text-center bg-gradient-to-r from-[#f59e0b] to-[#d97706] overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-[5rem] font-bold text-white mb-4 leading-[1.2]">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with us today.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-8 py-16 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-[#d1d5db] mb-6">
              Whether you have questions about our menu, want to make a
              reservation, or need information about private events, we're here
              to help.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  details: [
                    "123 Culinary Avenue",
                    "Foodie District",
                    "Gourmet City, GC 12345",
                  ],
                },
                {
                  icon: Phone,
                  title: "Phone",
                  details: [
                    "Main: (555) 123-4567",
                    "Reservations: (555) 123-4568",
                  ],
                },
                {
                  icon: Mail,
                  title: "Email",
                  details: [
                    "General: info@noctora.com",
                    "Reservations: reservations@noctora.com",
                    "Events: events@noctora.com",
                  ],
                },
                {
                  icon: Clock,
                  title: "Hours",
                  details: [
                    "Mon - Thu: 11:00 AM - 10:00 PM",
                    "Fri - Sat: 11:00 AM - 11:00 PM",
                    "Sun: 11:00 AM - 9:00 PM",
                  ],
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-[#1f2937] to-[#111827] p-6 rounded-[1rem] shadow-[0_6px_20px_rgba(0,0,0,0.25)] flex items-start space-x-4 hover:transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
                >
                  <div className="bg-[#f59e0b]/20 p-3 rounded-lg flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[#f59e0b]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <div className="text-[#d1d5db] space-y-1">
                      {item.details.map((d, i) => (
                        <p key={i}>{d}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/NullRaccoon/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg text-white flex items-center justify-center transition-all"
                style={{ backgroundColor: "#3b5998" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.backgroundColor =
                    "#334f88")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.backgroundColor =
                    "#3b5998")
                }
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/nullraccoontj/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg text-white flex items-center justify-center transition-all"
                style={{ backgroundColor: "#e1306c" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.backgroundColor =
                    "#c1275a")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.backgroundColor =
                    "#e1306c")
                }
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/gustavotellodev/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg text-white flex items-center justify-center transition-all"
                style={{ backgroundColor: "#1da1f2" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.backgroundColor =
                    "#0d95e8")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.backgroundColor =
                    "#1da1f2")
                }
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-[1rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold text-white mb-6">
              Send us a Message
            </h2>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <svg
                    className="w-8 h-8 text-green-400"
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
                <h3 className="text-xl font-semibold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-[#d1d5db]">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-[#d1d5db] font-medium">
                      Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="bg-white/10 text-white placeholder-white/70 border border-white/50 rounded-[0.75rem] p-4 focus:bg-white/20 focus:border-[#f59e0b]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-[#d1d5db] font-medium">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-white/10 text-white placeholder-white/70 border border-white/50 rounded-[0.75rem] p-4 focus:bg-white/20 focus:border-[#f59e0b]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-[#d1d5db] font-medium">
                    Subject *
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                    className="bg-white/10 text-white placeholder-white/70 border border-white/50 rounded-[0.75rem] p-4 focus:bg-white/20 focus:border-[#f59e0b]"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-[#d1d5db] font-medium">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="bg-white/10 text-white placeholder-white/70 border border-white/50 rounded-[0.75rem] p-4 focus:bg-white/20 focus:border-[#f59e0b]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white py-3 rounded-[0.75rem] font-semibold shadow-md flex items-center justify-center space-x-2 hover:scale-105 transition"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-8 py-16 max-w-[1280px]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Find Us</h2>
          <p className="text-[#d1d5db] max-w-3xl mx-auto">
            Located in the heart of the Foodie District, we're easily accessible
            by car or public transportation.
          </p>
        </div>

        {/* Google Maps Placeholder */}
        <div className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-[1rem] shadow-[0_10px_30px_rgba(0,0,0,0.3)] overflow-hidden h-[400px] flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-[#f59e0b] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Interactive Map
            </h3>
            <p className="text-[#d1d5db] mb-4">
              Google Maps integration would be embedded here
            </p>
            <div className="bg-[#1f2937] rounded-lg p-4 inline-block shadow-md">
              <p className="text-sm text-[#f59e0b] font-medium">
                123 Culinary Avenue
              </p>
              <p className="text-sm text-[#d1d5db]">
                Foodie District, Gourmet City, GC 12345
              </p>
            </div>
          </div>
        </div>

        {/* Directions */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Getting Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "By Car",
                info: "We offer complimentary valet parking at our main entrance. Nearby street parking is also available.",
                icon: MapPin,
              },
              {
                title: "Public Transit",
                info: "Take Metro Line 2 to Culinary Square Station, just a 5-minute walk from our doors. Several bus routes also stop nearby.",
                icon: BusFront, // you’ll need to import from lucide-react
              },
              {
                title: "Walking",
                info: "Located in a pedestrian-friendly area with wide sidewalks and plenty of crosswalks for easy access.",
                icon: Footprints, // import from lucide-react
              },
            ].map((d, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-[1rem] p-6 shadow-[0_6px_20px_rgba(0,0,0,0.25)] text-center hover:scale-105 hover:shadow-lg transition-all"
              >
                <div className="bg-[#f59e0b]/20 p-4 rounded-full flex items-center justify-center w-16 h-16 mx-auto mb-4">
                  <d.icon className="w-8 h-8 text-[#f59e0b]" />
                </div>
                <h4 className="font-semibold text-xl text-white mb-2">
                  {d.title}
                </h4>
                <p className="text-[#d1d5db] text-sm leading-relaxed">
                  {d.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
