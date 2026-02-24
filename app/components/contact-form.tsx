"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Send } from "lucide-react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function ContactForm() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [captchaSize, setCaptchaSize] = useState<"normal" | "compact">(
    "compact"
  );
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

  useEffect(() => {
    setMounted(true);

    // Set initial captcha size
    const updateCaptchaSize = () => {
      setCaptchaSize(window.innerWidth < 400 ? "compact" : "normal");
    };

    updateCaptchaSize();

    // Optional: Update on window resize
    window.addEventListener("resize", updateCaptchaSize);
    return () => window.removeEventListener("resize", updateCaptchaSize);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };

  const onHCaptchaChange = (token: string) => {
    setCaptchaToken(token);
    // Clear captcha error when verified
    if (errors.captcha) {
      setErrors({
        ...errors,
        captcha: false,
      });
    }
  };

  const handleSubmit = async () => {
    // Validate all fields
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !formData.email.includes("@"),
      subject: !formData.subject.trim(),
      message: !formData.message.trim(),
      captcha: !captchaToken,
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error)) {
      // Scroll to first error
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
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      if (!accessKey) {
        console.error("Web3Forms access key is not configured");
        alert("Form submission is not configured. Please contact the site administrator.");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          replyto: formData.email,
          "h-captcha-response": captchaToken,
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Form submitted successfully:", result);
        setShowModal(true);
        // Reset form
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
      } else {
        console.error("Form submission failed:", result);
        alert("Failed to send message. Please try again.");
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

          {/* hCaptcha */}
          <div>
            {mounted && (
              <HCaptcha
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                onVerify={onHCaptchaChange}
                reCaptchaCompat={false}
                theme={resolvedTheme === "dark" ? "dark" : "light"}
                size={captchaSize}
              />
            )}
            {errors.captcha && (
              <p className="text-red-500 text-sm mt-2">
                Please complete the captcha
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
