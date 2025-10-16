"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Rocket, Users, Target, Globe, Sparkles } from "lucide-react";

export default function AboutUs() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // الإحصائيات المتحركة
  const [stats, setStats] = useState([
    { value: 0, target: 50, label: "AI Projects", suffix: "+" },
    { value: 0, target: 98, label: "Model Accuracy", suffix: "%" },
    { value: 0, target: 24, label: "Continuous Support", suffix: "/7" },
    { value: 0, target: 3, label: "Years Experience", suffix: "+" },
  ]);

  useEffect(() => {
    if (!isInView) return;

    const timers: NodeJS.Timeout[] = [];

    stats.forEach((stat, index) => {
      let current = 0;
      const duration = 2000;
      const stepTime = Math.max(10, Math.floor(duration / stat.target));

      const t = setInterval(() => {
        current += 1;
        setStats(prev =>
          prev.map((s, i) =>
            i === index ? { ...s, value: Math.min(current, stat.target) } : s
          )
        );
        if (current >= stat.target) clearInterval(t);
      }, stepTime);

      timers.push(t);
    });

    // تنظيف المؤقتات
    return () => timers.forEach(clearInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  // التقنيات
  const technologies = [
    { name: "Machine Learning", level: 95, color: "from-[#2CA49B] to-[#26857D]" },
    { name: "Neural Networks", level: 92, color: "from-[#2CA49B] to-[#1E7A73]" },
    { name: "Computer Vision", level: 88, color: "from-[#2CA49B] to-[#16635D]" },
    { name: "Natural Language Processing", level: 90, color: "from-[#2CA49B] to-[#0E4C47]" },
    { name: "Deep Learning", level: 94, color: "from-[#2CA49B] to-[#2A8C85]" },
    { name: "AI Integration", level: 96, color: "from-[#2CA49B] to-[#34B8AE]" },
  ];

  // الفريق
  const teamMembers = [
    { name: "Dr. Ahmed Al-Shammari", role: "Head of AI Department", expertise: "Machine Learning - Computer Vision", avatar: "👨‍💻" },
    { name: "Eng. Sara Al-Ali", role: "AI Model Engineer", expertise: "Neural Networks - NLP", avatar: "👩‍🔬" },
    { name: "Dr. Mohammed Al-Harbi", role: "Data Science Expert", expertise: "Data Analysis - Recommendation Systems", avatar: "👨‍🎓" },
    { name: "Eng. Fatima Al-Najjar", role: "AI Solutions Developer", expertise: "System Integration - Business Applications", avatar: "👩‍💼" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#16213e] overflow-hidden"
    >
      {/* خلفية متحركة */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#2CA49B]/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2CA49B]/10 rounded-full blur-3xl animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#2CA49B]/5 rounded-full blur-2xl animate-spin-very-slow" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(44,164,155,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(44,164,155,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* العنوان الرئيسي */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-[#2CA49B]/20 border border-[#2CA49B] rounded-2xl backdrop-blur-sm mb-6">
            <Sparkles className="w-5 h-5 text-[#2CA49B] ml-2" />
            <span className="text-[#2CA49B] font-semibold">About Us</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Building an{" "}
            <span className="bg-gradient-to-r from-[#2CA49B] to-[#34B8AE] bg-clip-text text-transparent">
              Intelligent
            </span>{" "}
            Future
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are pioneers in artificial intelligence, developing innovative
            solutions that combine cutting-edge technologies with deep
            understanding of business needs. We believe the future is built with
            intelligence and innovation.
          </p>
        </motion.div>

        {/* الإحصائيات */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#2CA49B]/30 transition-all duration-300"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-[#2CA49B] to-[#34B8AE] bg-clip-text text-transparent mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* رسومات متحركة */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-[#2CA49B]/30 rounded-full animate-spin-slow" />

              <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-[#2CA49B] rounded-full animate-bounce">
                <Brain className="w-4 h-4 text-white mx-auto mt-1" />
              </div>
              <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-[#2CA49B] rounded-full animate-bounce [animation-delay:300ms]">
                <Rocket className="w-3 h-3 text-white mx-auto mt-1" />
              </div>
              <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-[#2CA49B] rounded-full animate-bounce [animation-delay:600ms]">
                <Target className="w-3 h-3 text-white mx-auto mt-0.5" />
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-[#2CA49B] to-[#26857D] rounded-2xl flex flex-col items-center justify-center shadow-2xl">
                <Globe className="w-12 h-12 text-white mb-3" />
                <span className="text-white font-bold text-lg">Saqer AI</span>
                <span className="text-[#2CA49B] text-sm">Since 2021</span>
              </div>
            </div>
          </motion.div>

          {/* المحتوى */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-[#2CA49B]/20 rounded-xl">
                <Users className="w-6 h-6 text-[#2CA49B]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the leading company in providing AI solutions that
                  transform ideas into tangible reality and contribute to
                  building an advanced digital society.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-[#2CA49B]/20 rounded-xl">
                <Target className="w-6 h-6 text-[#2CA49B]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  Develop intelligent systems that meet customer needs and
                  provide innovative solutions that contribute to increased
                  efficiency and sustainable growth.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-[#2CA49B]/20 rounded-xl">
                <Brain className="w-6 h-6 text-[#2CA49B]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Our Values</h3>
                <p className="text-gray-300 leading-relaxed">
                  Innovation, Quality, Transparency, Teamwork, and Commitment to
                  delivering the best technical solutions to our clients.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* التقنيات */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Our Specialized Technologies
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-[#2CA49B]/30 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-medium">{tech.name}</span>
                  <span className="text-[#2CA49B] font-bold">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${tech.level}%` } : {}}
                    transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                    className={`h-3 rounded-full bg-gradient-to-r ${tech.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* الفريق */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Our Distinguished Team</h3>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            We are a team of technology experts and enthusiastic developers
            working together to achieve our vision of building a smarter future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-[#2CA49B]/30 hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                <div className="text-[#2CA49B] font-medium mb-2">{member.role}</div>
                <div className="text-gray-400 text-sm">{member.expertise}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
