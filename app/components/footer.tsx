import { IconBrandGithub, IconMail } from "@tabler/icons-react";

// Lucide React brand icons are deprecated and I didn't like Tabler's LinkedIn
const IconBrandLinkedin = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-lg text-white mb-1">Sarah Poulin</p>
            <p className="text-gray-400">Full Stack Developer | Problem Solver</p>
          </div>
          <div className="flex gap-4 text-gray-400">
            <a
              href="https://github.com/threehappypenguins"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my Github profile"
            >
              <IconBrandGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sarahpoulin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <IconBrandLinkedin size={24} />
            </a>
            <a
              href="mailto:sarah@poulinfam.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email me"
            >
              <IconMail size={24} />
            </a>
          </div>
        </div>
        <div className="pt-6 border-t border-gray-700">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Sarah Poulin
          </p>
        </div>
      </div>
    </footer>
  );
}
