import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="font-Negara bg-slate-900 text-white py-12 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="font-raffishly text-5xl font-bold mb-4">Noctora</h3>
            <p className="text-slate-300 mb-4">
              Great food, good vibes, made with fresh local ingredients.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/NullRaccoon/"
                aria-label="Facebook"
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/nullraccoontj/"
                aria-label="Instagram"
                className="hover:text-pink-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/gustavotellodev/"
                aria-label="LinkedIn"
                className="hover:text-blue-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Clock className="mr-2" size={18} /> Hours
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>11:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <MapPin className="mr-2" size={18} /> Location
            </h3>
            <address className="not-italic text-slate-300 mb-4">
              123 Culinary Avenue
              <br />
              Foodie District
              <br />
              Gourmet City, GC 12345
            </address>
            {/* Google Maps Embed */}
            <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.428716734819!2d-117.04159868484711!3d32.51498668103162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9237c1a2d4b5b%3A0x70f78a5c1e38e87b!2sTijuana%2C%20Baja%20California%2C%20Mexico!5e0!3m2!1sen!2sus!4v1692459724813!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Mail className="mr-2" size={18} /> Newsletter
            </h3>
            <p className="text-slate-300 mb-4">
              Subscribe to our newsletter for special offers, new menu items,
              and events.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                required
              />
              <Button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} NullRacoon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
