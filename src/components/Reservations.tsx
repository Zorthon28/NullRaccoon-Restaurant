import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, Clock, Users, Mail, Phone, User } from "lucide-react";

const schedule: Record<number, { start: string; end: string }> = {
  0: { start: "11:00", end: "21:00" }, // Sunday
  1: { start: "11:00", end: "22:00" }, // Monday
  2: { start: "11:00", end: "22:00" }, // Tuesday
  3: { start: "11:00", end: "22:00" }, // Wednesday
  4: { start: "11:00", end: "22:00" }, // Thursday
  5: { start: "11:00", end: "23:00" }, // Friday
  6: { start: "11:00", end: "23:00" }, // Saturday
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequests: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: string;
}
const today = new Date();
const todayString = today.toLocaleDateString("en-CA"); // "YYYY-MM-DD" format for input[type=date]

const Reservations = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: todayString, // <-- default to today
    time: "",
    guests: "2",
    specialRequests: "",
  });
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  // Update available times whenever the date changes
  useEffect(() => {
    if (!formData.date) return;

    const selected = new Date(formData.date);
    const dayOfWeek = selected.getDay();
    const { start, end } = schedule[dayOfWeek];

    const times = generateTimes(start, end, 30, formData.date);
    setAvailableTimes(times);

    if (formData.time && !times.includes(formData.time)) {
      setFormData((prev) => ({ ...prev, time: "" }));
    }
  }, [formData.date]);

  // --- generate dynamic time slots ---
  const generateTimes = (
    start: string,
    end: string,
    interval: number,
    selectedDate?: string
  ) => {
    const times: string[] = [];
    const now = new Date();

    if (!selectedDate) return times;

    const selected = new Date(selectedDate);
    const isToday =
      selected.getFullYear() === now.getFullYear() &&
      selected.getMonth() === now.getMonth() &&
      selected.getDate() === now.getDate();

    // Start from the selected date at the opening hour
    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);

    const startDate = new Date(selected);
    startDate.setHours(startHour, startMinute, 0, 0);

    const endDate = new Date(selected);
    endDate.setHours(endHour, endMinute, 0, 0);

    while (startDate <= endDate) {
      // Only filter past times if selected date is today
      if (!isToday || startDate >= now) {
        times.push(
          startDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        );
      }
      startDate.setMinutes(startDate.getMinutes() + interval);
    }

    return times;
  };

  // Example: 5 PM to 10 PM, every 30 minutes
  const today = new Date().getDay();
  const { start, end } = schedule[today];

  // Generate available times
  const times = generateTimes(start, end, 30, formData.date);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    if (!formData.date) newErrors.date = "Date is required";

    if (!formData.time) newErrors.time = "Time is required";

    if (!formData.guests || parseInt(formData.guests) < 1)
      newErrors.guests = "Number of guests must be at least 1";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      specialRequests: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  // ✅ Confirmation Screen
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#111827] text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl shadow-xl p-10">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
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
            <h2 className="text-3xl font-bold mb-4">Reservation Confirmed!</h2>
            <p className="text-gray-300 mb-6">
              We've sent a confirmation email to{" "}
              <span className="text-amber-400">{formData.email}</span>. See you
              on{" "}
              <span className="text-amber-400">
                {new Date(formData.date).toLocaleDateString()}
              </span>{" "}
              at <span className="text-amber-400">{formData.time}</span>.
            </p>
            <Button
              onClick={resetForm}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition"
            >
              Make Another Reservation
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <Navbar />

      {/* Hero */}
      <div className="relative py-24 bg-gradient-to-r from-[#5b21b6] to-[#312e81] text-center">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Make a Reservation</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Reserve your table for an unforgettable dining experience.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-[#1f2937] to-[#111827] p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Reservation Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm mb-2">
                  <User className="inline w-4 h-4 mr-2" /> Full Name *
                </label>
                <Input
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="bg-white/10 text-white border border-white/20 rounded-lg"
                />

                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-2">
                  <Mail className="inline w-4 h-4 mr-2" /> Email *
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@email.com"
                  className="bg-white/10 text-white border border-white/20 rounded-lg"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm mb-2">
                  <Phone className="inline w-4 h-4 mr-2" /> Phone *
                </label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567"
                  className="bg-white/10 text-white border border-white/20 rounded-lg"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">
                    <Calendar className="inline w-4 h-4 mr-2" /> Date *
                  </label>
                  <Input
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split("T")[0]} // today or future
                    className="bg-white/10 text-white border border-white/20 rounded-lg"
                  />

                  {errors.date && (
                    <p className="text-red-400 text-sm mt-1">{errors.date}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm mb-2">
                    <Clock className="inline w-4 h-4 mr-2" /> Time *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-2xl bg-[#1f2937] text-white
           border border-white/20 focus:outline-none focus:ring-2 
           focus:ring-[#f59e0b] appearance-none"
                  >
                    <option value="">Select</option>
                    {availableTimes.map((t) => (
                      <option
                        key={t}
                        value={t}
                        className="bg-[#1f2937] text-white"
                      >
                        {t}
                      </option>
                    ))}
                  </select>

                  {errors.time && (
                    <p className="text-red-400 text-sm mt-1">{errors.time}</p>
                  )}
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-sm mb-2">
                  <Users className="inline w-4 h-4 mr-2" /> Guests *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="bg-white/10 text-white border border-white/20 rounded-lg w-full p-2"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
                {errors.guests && (
                  <p className="text-red-400 text-sm mt-1">{errors.guests}</p>
                )}
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-sm mb-2">Special Requests</label>
                <Textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Allergies, celebrations, etc."
                  rows={3}
                  className="bg-white/10 text-white border border-white/20 rounded-lg"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 rounded-xl shadow-md hover:scale-105 transition"
              >
                {isSubmitting ? "Processing..." : "Confirm Reservation"}
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#1f2937] to-[#111827] p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Restaurant Info</h3>
              <p className="text-gray-300">
                📍 123 Culinary Avenue, Gourmet City
              </p>
              <p className="text-gray-300">📞 (555) 123-4567</p>
              <p className="text-gray-300">✉️ reservations@noctora.com</p>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">
                Reservation Policy
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Held for 15 mins past time</li>
                <li>• Parties of 6+ require card</li>
                <li>• Cancel 2h in advance</li>
                <li>• Dietary needs accommodated</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reservations;
