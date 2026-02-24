"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Send } from "lucide-react";

const TURNSTILE_SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

export default function ContactForm() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
    captcha: false,
  });
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Load Turnstile script and render widget in onload (avoid turnstile.ready() which fails with dynamic/async script loading)
  useEffect(() => {
    if (!mounted) return;

    const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY;
    if (!sitekey) {
      console.warn("NEXT_PUBLIC_TURNSTILE_SITEKEY is not set");
      return;
    }

    const renderWidget = () => {
      if (typeof window === "undefined" || !window.turnstile) return;
      const container = document.getElementById("turnstile-container");
      if (!container || widgetIdRef.current) return;

      const id = window.turnstile.render("#turnstile-container", {
        sitekey,
        theme: resolvedTheme === "dark" ? "dark" : "light",
        size: "normal",
        callback: (token: string) => {
          setCaptchaToken(token);
          setErrors((prev) => (prev.captcha ? { ...prev, captcha: false } : prev));
        },
        "error-callback": () => setCaptchaToken(""),
        "expired-callback": () => setCaptchaToken(""),
      });
      widgetIdRef.current = id;
    };

    const existing = document.querySelector(`script[src="${TURNSTILE_SCRIPT}"]`);
    if (existing) {
      renderWidget();
      return;
    }

    const script = document.createElement("script");
    script.src = TURNSTILE_SCRIPT;
    script.onload = renderWidget;
    document.body.appendChild(script);

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
      script.remove();
    };
  }, [mounted, resolvedTheme]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };

  const handleSubmit = async () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !formData.email.includes("@"),
      subject: !formData.subject.trim(),
      message: !formData.message.trim(),
      captcha: !captchaToken,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      const firstError = Object.keys(newErrors).find(
        (key) => newErrors[key as keyof typeof newErrors]
      );
      if (firstError) {
        document.getElementById(firstError)?.focus();
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          "cf-turnstile-response": captchaToken,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setShowModal(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setCaptchaToken("");
        setErrors({
          name: false,
          email: false,
          subject: false,
          message: false,
          captcha: false,
        });
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current);
        }
      } else {
        alert(result.message ?? "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-card-bg border border-card-border rounded-2xl p-6">
        <div className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block font-medium card-title-text mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`form-input ${
                  errors.name ? "border-red-500 focus:border-red-500" : ""
                }`}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">Name is required</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-medium card-title-text mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className={`form-input ${
                  errors.email ? "border-red-500 focus:border-red-500" : ""
                }`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  Valid email is required
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block font-medium card-title-text mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              className={`form-input ${
                errors.subject ? "border-red-500 focus:border-red-500" : ""
              }`}
              required
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">Subject is required</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block font-medium card-title-text mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              rows={5}
              className={`form-input resize-none ${
                errors.message ? "border-red-500 focus:border-red-500" : ""
              }`}
              required
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">Message is required</p>
            )}
          </div>

          {/* Cloudflare Turnstile */}
          <div>
            {mounted && <div id="turnstile-container" />}
            {errors.captcha && (
              <p className="text-red-500 text-sm mt-2">
                Please complete the verification
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="form-submit-btn"
            disabled={isSubmitting}
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-card-bg border border-card-border rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-card-icon-bg rounded-full flex items-center justify-center mb-4">
                <Send className="w-8 h-8 text-card-icon" />
              </div>
              <h1 className="text-2xl font-semibold text-card-title-text mb-2">
                Message Sent!
              </h1>
              <p className="text-card-text mb-6">
                Thank you for reaching out. I&apos;ll get back to you soon!
              </p>
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="form-submit-btn"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
