import { IconBrandGithub, IconMail } from "@tabler/icons-react";
import { IconBrandLinkedin } from "./icons";
export function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 text-center lg:text-left">
          <div className="mb-6 lg:mb-0">
            <p className="text-lg text-white mb-1">Sarah Poulin</p>
            <p className="text-gray-400">
              Full Stack Developer | Problem Solver
            </p>
          </div>
          <div className="flex gap-6 text-gray-400 justify-center lg:justify-end">
            <a
              href="https://github.com/threehappypenguins"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my Github profile"
              className="hover:text-white transition-colors"
            >
              <IconBrandGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sarahpoulin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              className="hover:text-white transition-colors"
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
