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
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: يمكنك لاحقًا إرسال البيانات إلى Route Handler مثل /app/api/contact/route.ts
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, title: "Email Us", details: "info@saqerai.com", description: "Send us an email anytime" },
    { icon: <Phone className="w-6 h-6" />, title: "Call Us", details: "+966 50 123 4567", description: "Mon to Fri 9am to 6pm" },
    { icon: <MapPin className="w-6 h-6" />, title: "Visit Us", details: "Riyadh, Saudi Arabia", description: "Come say hello at our office" },
    { icon: <Clock className="w-6 h-6" />, title: "Response Time", details: "Within 24 Hours", description: "We respond quickly to all inquiries" },
  ];

  const subjects = [
    "AI Consultation",
    "Custom AI Development",
    "Technical Support",
    "Partnership",
    "Career Opportunities",
    "Other",
  ];

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] overflow-hidden"
      aria-labelledby="contact-title"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#2CA49B]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-spin-slow" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(44,164,155,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(44,164,155,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#2CA49B] rounded-full animate-bounce" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-300" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-[#2CA49B]/20 border border-[#2CA49B] rounded-2xl backdrop-blur-sm mb-6">
            <Sparkles className="w-5 h-5 text-[#2CA49B] mr-2" />
            <span className="text-[#2CA49B] font-semibold">Get In Touch</span>
          </div>

          <h2 id="contact-title" className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-[#2CA49B] to-[#34B8AE] bg-clip-text text-transparent">
              Talk
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Contact us today and let&apos;s
            discuss how our solutions can drive innovation and growth for your
            organization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
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
                  className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-[#2CA49B]/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#2CA49B]/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <div className="text-[#2CA49B]">{item.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-[#2CA49B] font-medium mb-1">{item.details}</p>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 mt-8"
            >
              <h4 className="text-xl font-bold text-white mb-4">Our Location</h4>
              <div className="aspect-video bg-gradient-to-br from-[#2CA49B]/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#2CA49B] mx-auto mb-2" />
                  <p className="text-white font-medium">Riyadh, Saudi Arabia</p>
                  <p className="text-gray-400 text-sm">Coming soon - Interactive map</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10"
          >
            {isSubmitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <CheckCircle2 className="w-20 h-20 text-[#2CA49B] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#2CA49B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#26857D] transition-all duration-300"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <MessageCircle className="w-6 h-6 text-[#2CA49B]" />
                  <h3 className="text-2xl font-bold text-white">Send us a message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#2CA49B] transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#2CA49B] transition-all duration-300"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#2CA49B] transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#2CA49B] focus:border-transparent transition-all duration-300 cursor-pointer"
                    >
                      <option value="" className="bg-gray-800 text-white py-2">Select a subject</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject} className="bg-gray-800 text-white py-2">
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#2CA49B] transition-all duration-300 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full bg-gradient-to-r from-[#2CA49B] to-[#34B8AE] text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    aria-busy={isSubmitting}
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
              </>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
}
