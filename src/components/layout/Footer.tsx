import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Savory Bistro</h3>
            <p className="text-slate-300 mb-4">
              Exceptional dining experience with a focus on locally-sourced
              ingredients and innovative cuisine.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-blue-500 transition-colors"
              >
                <Twitter size={20} />
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
            <div className="h-32 bg-slate-800 rounded-md overflow-hidden">
              {/* Map placeholder */}
              <div className="w-full h-full flex items-center justify-center text-sm text-slate-400">
                Map Preview
              </div>
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
            &copy; {new Date().getFullYear()} Savory Bistro. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
