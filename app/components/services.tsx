"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  Cloud,
  BarChart3,
  Shield,
  MessageSquare,
  Eye,
} from "lucide-react";

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      icon: <Brain className="w-8 h-8" />,
      title: "Custom AI Models",
      description:
        "Tailored machine learning solutions designed specifically for your business challenges and data structure.",
      features: [
        "Neural Networks",
        "Predictive Analytics",
        "Deep Learning",
        "Model Optimization",
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      id: 2,
      icon: <Cloud className="w-8 h-8" />,
      title: "AI Cloud Solutions",
      description:
        "Scalable cloud-based AI infrastructure that grows with your business needs.",
      features: [
        "Auto-scaling",
        "Real-time Processing",
        "API Integration",
        "Cloud Deployment",
      ],
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-500/10 to-blue-500/10",
    },
    {
      id: 3,
      icon: <Eye className="w-8 h-8" />,
      title: "Computer Vision",
      description:
        "Advanced image and video analysis for automation, security, and insights extraction.",
      features: [
        "Object Detection",
        "Facial Recognition",
        "Image Classification",
        "Video Analytics",
      ],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      id: 4,
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Natural Language Processing",
      description:
        "Transform text and speech data into actionable insights and automated conversations.",
      features: [
        "Chatbots",
        "Sentiment Analysis",
        "Text Classification",
        "Language Translation",
      ],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
    },
    {
      id: 5,
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics & BI",
      description:
        "Turn complex data into clear, actionable business intelligence dashboards.",
      features: [
        "Real-time Dashboards",
        "Predictive Modeling",
        "Data Visualization",
        "KPI Tracking",
      ],
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/10 to-purple-500/10",
    },
    {
      id: 6,
      icon: <Shield className="w-8 h-8" />,
      title: "AI Security Systems",
      description:
        "Intelligent threat detection and prevention systems powered by machine learning.",
      features: [
        "Anomaly Detection",
        "Fraud Prevention",
        "Network Security",
        "Access Control",
      ],
      gradient: "from-amber-500 to-yellow-500",
      bgGradient: "from-amber-500/10 to-yellow-500/10",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] overflow-hidden"
      aria-labelledby="services-title"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#2CA49B]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(44,164,155,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(44,164,155,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#2CA49B] rounded-full animate-bounce" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-300" />
        <div className="absolute top-1/2 right-1/2 w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-600" />
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
            <span className="w-2 h-2 bg-[#2CA49B] rounded-full mr-2 animate-pulse" />
            <span className="text-[#2CA49B] font-semibold">Our Services</span>
          </div>

          <h2
            id="services-title"
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            AI-Powered{" "}
            <span className="bg-gradient-to-r from-[#2CA49B] to-[#34B8AE] bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge artificial intelligence services that
            transform businesses, automate processes, and unlock new
            opportunities for growth and innovation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.2 } }}
              className={`relative group cursor-pointer ${
                activeService === index ? "ring-2 ring-[#2CA49B]" : ""
              }`}
              onClick={() => setActiveService(index)}
              role="button"
              aria-pressed={activeService === index}
            >
              <div className="relative h-full bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-[#2CA49B]/30 transition-all duration-300 overflow-hidden">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} mb-4 group-hover:scale-110 transition-transform duration-300 text-white`}
                >
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="relative z-10 text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="relative z-10 text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="relative z-10 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Bottom line animation */}
                <div
                  className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#2CA49B]/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-[#2CA49B]/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how our AI solutions can drive innovation and
              growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#2CA49B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#26857D] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Your AI Journey
              </button>
              <button className="border-2 border-[#2CA49B] text-[#2CA49B] px-8 py-3 rounded-lg font-semibold hover:bg-[#2CA49B] hover:text-white transition-all duration-300 backdrop-blur-sm">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
}
