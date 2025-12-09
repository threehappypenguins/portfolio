import ContactForm from "../components/contact-form";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-16">
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
            <a
              href="mailto:sarah@poulinfam.com"
              target="_blank"
              className="bg-card-bg border border-card-border rounded-2xl p-6 block hover:bg-card-bg/80 hover:border-card-border/80 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="bg-card-icon-bg p-3 rounded-lg">
                  <Mail className="w-5 h-5 text-card-icon" />
                </div>
                <div>
                  <h4 className="text-lg text-card-title-text mb-1">Email</h4>
                  <p className="text-card-text">sarah@poulinfam.com</p>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <a
              href="https://maps.app.goo.gl/Vd4ZsmhfUxujmiPE6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-card-bg border border-card-border rounded-2xl p-6 block hover:bg-card-bg/80 hover:border-card-border/80 transition-all">
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
            </a>
          </div>

          {/* Right Side - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
