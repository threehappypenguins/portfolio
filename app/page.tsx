import { IconBrandGithub, IconMail } from "@tabler/icons-react";
import { IconBrandLinkedin } from "./components/icons";
import Image from "next/image";
import { Timeline } from "./components/timeline";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-4 bg-gradient-bg">
      <div className="min-h-screen flex flex-col items-center justify-center w-full max-w-4xl px-4 space-y-7 pb-16" >
        <Image
          src="/logo.png"
          alt="Gear logo"
          width={128}
          height={128}
          priority
          className="mx-auto"
        />

        <h1>Hi, I'm Sarah!</h1>

        <p className="text-xl md:text-2xl text-center">
          Full Stack Developer | Tech Aficionado | Problem Solver | Curious Mind
        </p>

        <p className="text-lg text-center max-w-2xl mx-auto">
          I love tech, and I enjoy problem-solving. I have an engineering-type
          mind and am particularly good at understanding how things work, and
          implementing creative solutions.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <div className="social-button-group">
            <a
              href="https://www.linkedin.com/in/sarahpoulin/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button bg-button-secondary-bg border border-button-secondary-border hover:bg-button-secondary-hover text-button-secondary-text"
            >
              <IconBrandLinkedin size={20} />
              View LinkedIn
            </a>

            <a
              href="mailto:sarah@poulinfam.com"
              target="_blank"
              className="social-button bg-button-primary-bg hover:bg-button-primary-hover text-button-primary-text"
            >
              <IconMail size={20} />
              Email
            </a>

            <a
              href="https://github.com/threehappypenguins"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button bg-button-secondary-bg border border-button-secondary-border hover:bg-button-secondary-hover text-button-secondary-text"
            >
              <IconBrandGithub size={20} />
              View GitHub
            </a>
          </div>
        </div>
      </div>
      <div id="portfolio" className="space-y-4">
        <h2>Portfolio</h2>

        <p className="text-lg text-center text-portfolio-text">
          A timeline of my work and accomplishments
        </p>

        <Timeline />
      </div>
    </main>
  );
}
