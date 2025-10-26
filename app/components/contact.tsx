"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function ContactUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) setIsSubmitted(true);
      else alert("Something went wrong. Please try again.");
    } catch (error) {
      console.error(error);
      alert("Error sending message. Please try again later.");
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, title: "Email Us", details: "info@primetech.com", description: "Send us an email anytime" },
    { icon: <Phone className="w-6 h-6" />, title: "Call Us", details: "+963 944 123 456", description: "Sun to Thu 9am - 6pm" },
    { icon: <MapPin className="w-6 h-6" />, title: "Visit Us", details: "Damascus, Syria", description: "Come say hello at our office" },
    { icon: <Clock className="w-6 h-6" />, title: "Response Time", details: "Within 24 Hours", description: "We respond quickly to all inquiries" },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-[#002A26] via-[#002A26] to-[#002A26] overflow-hidden"
      aria-labelledby="contact-title"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#B19766]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B19766]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(177,151,102,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(177,151,102,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-[#B19766]/20 border border-[#B19766] rounded-2xl backdrop-blur-sm mb-6">
            <Sparkles className="w-5 h-5 text-[#B19766] mr-2" />
            <span className="text-[#B19766] font-semibold">Get In Touch</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Get in touch with us</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-[#B19766]/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#B19766]/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <div className="text-[#B19766]">{item.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-[#B19766] font-medium mb-1">{item.details}</p>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* نموذج التواصل */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle2 className="w-20 h-20 text-[#B19766] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-300 mb-6">
                  Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#B19766] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#9C8556] transition-all duration-300"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#B19766] transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#B19766] transition-all duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#B19766] transition-all duration-300"
                    placeholder="Your company name (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#B19766] transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-[#B19766] to-[#D1BA84] text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#002A26] to-transparent" />
    </section>
  );
}
