"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Add email service integration here
    setShowModal(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-16">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col gap-4">
          <h2>Get In Touch</h2>
          <p className="about-paragraph text-lg">
            Have a question? Feel free to reach out!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-8">
          {/* Left Side - Contact Cards */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="bg-card-bg border border-card-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-card-icon-bg p-3 rounded-lg">
                  <Mail className="w-5 h-5 text-card-icon" />
                </div>
                <div>
                  <h4 className="text-lg text-card-title-text mb-1">Email</h4>
                  <p className="text-card-text">sarah@poulinfam.com</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-card-bg border border-card-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-card-icon-bg p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-card-icon" />
                </div>
                <div>
                  <h4 className="text-lg text-card-title-text mb-1">
                    Location
                  </h4>
                  <p className="text-card-text">Dartmouth, Nova Scotia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
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
                    className="form-input"
                  />
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
                    className="form-input"
                  />
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
                  className="form-input"
                />
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
                  className="form-input resize-none"
                />
              </div>

              {/* Submit Button */}
              <button onClick={handleSubmit} className="form-submit-btn">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </div>
          </div>
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
              <h3 className="text-2xl font-semibold text-card-title-text mb-2">
                Message Sent!
              </h3>
              <p className="text-card-text mb-6">
                Thank you for reaching out. I'll get back to you soon!
              </p>
              <div className="flex justify-center">
                <button
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
    </div>
  );
}
