"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail, Phone, MapPin, Send, CheckCircle,
  MessageCircle
} from "lucide-react";

const SocialIcon = ({ type }: { type: string }) => {
  if (type === "instagram") return <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
  if (type === "facebook") return <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
  if (type === "x") return <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
  if (type === "linkedin") return <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
  return null;
};

const socialLinks = [
  { type: "instagram", label: "Instagram", href: "#", color: "hover:text-pink-500 hover:border-pink-400/50" },
  { type: "facebook", label: "Facebook", href: "#", color: "hover:text-blue-500 hover:border-blue-400/50" },
  { type: "x", label: "Twitter / X", href: "#", color: "hover:text-sky-400 hover:border-sky-400/50" },
  { type: "linkedin", label: "LinkedIn", href: "#", color: "hover:text-blue-600 hover:border-blue-500/50" },
];

const contactItems = [
  {
    icon: MapPin,
    label: "Our Office",
    value: "West Bengal, India",
    sub: "Serving schools nationwide",
    color: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-950/40",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@learninghorizons.in",
    sub: "Response within 24 hours",
    color: "text-sky-500",
    bg: "bg-sky-50 dark:bg-sky-950/40",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98XXX XXXXX",
    sub: "Mon–Sat, 9am–6pm IST",
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    school: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-white/5 border border-white/50 dark:border-white/10 backdrop-blur-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-200 text-sm";

  return (
    <section
      id="contact"
      ref={ref}
      className="relative section-padding section-bg-map overflow-hidden"
    >
      {/* Decoration blobs */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-25 dark:opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #c084fc, #818cf8)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-25 dark:opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #67e8f9, #a5f3fc)" }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
          style={{ textAlign: "center" }}
        >
          <span className="section-label mb-4" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <MessageCircle size={12} />
            Get In Touch
          </span>
          <h2 className="display-md text-gray-900 dark:text-white mb-4" style={{ textAlign: "center" }}>
            Let&apos;s Build Something{" "}
            <span className="gradient-text font-serif italic">Meaningful Together</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl text-base leading-relaxed" style={{ margin: "0 auto", textAlign: "center" }}>
            Whether you&apos;re a school looking to partner, an educator seeking resources, or a
            parent curious about our books — we&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left — Unified Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-3xl flex flex-col gap-0" style={{ padding: "30px" }}>
              {/* Contact rows */}
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.label}>
                    <div className="flex items-start gap-4" style={{ paddingTop: "18px", paddingBottom: "18px" }}>
                      <div
                        className={`w-11 h-11 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <Icon size={20} className={item.color} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-0.5 uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="font-bold text-gray-900 dark:text-white text-sm break-words">
                          {item.value}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                    {i < contactItems.length - 1 && (
                      <div className="h-px bg-gray-100 dark:bg-white/8" />
                    )}
                  </div>
                );
              })}

              {/* Divider before Follow Us */}
              <div className="h-px bg-gray-100 dark:bg-white/8" />

              {/* Follow Us row */}
              <div style={{ paddingTop: "18px", paddingBottom: "8px" }}>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-10 h-10 rounded-xl bg-white/60 dark:bg-white/5 border border-white/50 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 ${social.color} transition-all duration-200 hover:scale-110 hover:shadow-md`}
                    >
                      <SocialIcon type={social.type} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-strong rounded-3xl" style={{ padding: "30px" }}>
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/40 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-emerald-500" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 btn-outline text-sm"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className={inputClass}
                        id="contact-name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@school.edu"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className={inputClass}
                        id="contact-email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                      School / Institution
                    </label>
                    <input
                      type="text"
                      placeholder="Your school name"
                      value={formState.school}
                      onChange={(e) => setFormState({ ...formState, school: e.target.value })}
                      className={inputClass}
                      id="contact-school"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className={inputClass}
                      id="contact-subject"
                    >
                      <option value="">Select a topic...</option>
                      <option value="partnership">School Partnership</option>
                      <option value="catalogue">Request Catalogue</option>
                      <option value="bulk">Bulk Order Inquiry</option>
                      <option value="feedback">Book Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                      id="contact-message"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center gap-3"
                    id="contact-submit"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
