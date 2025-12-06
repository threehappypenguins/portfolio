import { Code, Shield, Zap, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 px-4 py-15">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl px-4 space-y-7">
        <h2>About Me</h2>

        <div className="about-paragraph pt-9 pb-16 space-y-7">
          <p>
            I have an avid interest in technology and in more recent years
            started actively coding. In the past, I have edited code and made
            small contributions, but began writing code after I started with
            writing scripts. I like to think up efficient solutions to problems,
            and coding is a perfect way for me to implement what I want to
            accomplish.
          </p>

          <p>
            I have a long history of curiosity, wanting to understand how things
            work, fix things, build things, and pick things up easily. As a
            child, I could pick up any new instrument and begin to play by ear.
            I learned to fix things at a young age. My favourite tape recorder
            stopped working, so I found a screwdriver, took it apart, and
            noticed a loose wire. When I would touch the wire to the board,
            suddenly the reels would spin. Success! My dad soldered it back on;
            good as new. I would look at an interesting idea and think, "I can
            do that!" My brother and I saw a Beakman and Jax newspaper article
            in the comics (I'm dating myself here) about how lava lamps work. We
            took it upon ourselves to use a lamp without a shade, a mason jar, a
            coil, some water and wax, and copious amounts of duct tape (thank
            you, Red Green), and built ourselves a lava lamp. It didn't work, we
            could have possibly electrocuted ourselves, and my dad was mad, but
            it was a great learning experience. My "I can do that!" attitude
            earned me two broken arms simultaneously as well, but I won't go
            into the details on that one. Let's just say it involved the
            schoolyard, competitiveness with boys, and soccer posts.
          </p>

          <p>
            As an adult, I learned to fix things myself to save money, including
            my own vehicles. I need a strut. I'll go to the junk yard and get
            one and install it. I think my starter motor is done. I'll take it
            out and hook up some alligator clips to a battery to see if it's the
            problem. Yep. Install a rebuilt one. My van is stuttering up hills.
            I'll hook up a bluetooth OBDII scanner to my phone, run some
            diagnostics, discover there's a misfire on cylinder 6, remove the
            manifold and swap the spark plug boot/coil with a working cylinder.
            Yep. It's the ignition coil. I really need a dishwasher. I'll add a
            dishwasher wye to the drainage under the sink, install a shutoff
            valve and tee, and run PEX to the planned dishwasher area. I'll
            drill through the joists in the basement, and run 14/2 wire to a 15
            amp breaker.
          </p>

          <p>
            Jumping into something new and accomplishing it is nothing new to
            me. I'll figure it out. Just let me loose.
          </p>
        </div>
      </div>

      <div className="about-card-container">
        <div className="about-card">
          <div className="about-card-icon-container">
            <Code className="about-card-icon" />
          </div>
          <div>
            <p className="about-card-title">Full Stack Development</p>
            <p className="about-card-text">
              Building end-to-end applications with modern technologies and best
              practices.
            </p>
          </div>
        </div>

        <div className="about-card">
          <div className="about-card-icon-container">
            <Shield className="about-card-icon" />
          </div>
          <div>
            <p className="about-card-title">Cybersecurity</p>
            <p className="text-sm text-card-text">
              Keen interest in cybersecurity and secure coding practices,
              mitigating threats, and implementing resilient security measures.
            </p>
          </div>
        </div>

        <div className="about-card">
          <div className="about-card-icon-container">
            <Zap className="about-card-icon" />
          </div>
          <div>
            <p className="about-card-title">Problem Solving</p>
            <p className="text-sm text-card-text">
              Tackling complex challenges with creative and efficient solutions.
            </p>
          </div>
        </div>

        <div className="about-card">
          <div className="about-card-icon-container">
            <Users className="about-card-icon" />
          </div>
          <div>
            <p className="about-card-title">Collaboration</p>
            <p className="text-sm text-card-text">
              Working effectively in teams and communicating technical concepts
              clearly.
            </p>
          </div>
        </div>
      </div>
      <h3>Skills & Technologies</h3>

      <div className="flex flex-wrap justify-center gap-3 max-w-5xl">
        <span className="about-tech-btn">Cybersecurity</span>
        <span className="about-tech-btn">Bash Scripting</span>
        <span className="about-tech-btn">Python</span>
        <span className="about-tech-btn">Java</span>
        <span className="about-tech-btn">JavaScript</span>
        <span className="about-tech-btn">TypeScript</span>
        <span className="about-tech-btn">React</span>
        <span className="about-tech-btn">Node.js</span>
        <span className="about-tech-btn">Express</span>
        <span className="about-tech-btn">MongoDB</span>
        <span className="about-tech-btn">SQL</span>
        <span className="about-tech-btn">Tailwind CSS</span>
        <span className="about-tech-btn">Figma</span>
        <span className="about-tech-btn">Git</span>
        <span className="about-tech-btn">REST APIs</span>
        <span className="about-tech-btn">UI/UX Design</span>
        <span className="about-tech-btn">Responsive Design</span>
        <span className="about-tech-btn">Cloud Computing</span>
        <span className="about-tech-btn">Docker</span>
      </div>
    </div>
  );
}
