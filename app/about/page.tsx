import { Code, Shield, Zap, Users } from "lucide-react";
import { CertificationCard } from "@/app/components/certification-card";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center p-4 px-4 py-15">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl px-4 space-y-7">
        <h1 className="heading-secondary">About Me</h1>

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
            good as new. I would look at an interesting idea and think, &quot;I can
            do that!&quot; My brother and I saw a Beakman and Jax newspaper article
            in the comics (I&apos;m dating myself here) about how lava lamps work. We
            took it upon ourselves to use a lamp without a shade, a mason jar, a
            coil, some water and wax, and copious amounts of duct tape (thank
            you, Red Green), and built ourselves a lava lamp. It didn&apos;t work, we
            could have possibly electrocuted ourselves, and my dad was mad, but
            it was a great learning experience. My &quot;I can do that!&quot; attitude
            earned me two broken arms simultaneously as well, but I won&apos;t go
            into the details on that one. Let&apos;s just say it involved the
            schoolyard, competitiveness with boys, and soccer posts.
          </p>

          <p>
            As an adult, I learned to fix things myself to save money, including
            my own vehicles. I need a strut. I&apos;ll go to the junk yard and get
            one and install it. I think my starter motor is done. I&apos;ll take it
            out and hook up some alligator clips to a battery to see if it&apos;s the
            problem. Yep. Install a rebuilt one. My van is stuttering up hills.
            I&apos;ll hook up a bluetooth OBDII scanner to my phone, run some
            diagnostics, discover there&apos;s a misfire on cylinder 6, remove the
            manifold and swap the spark plug boot/coil with a working cylinder.
            Yep. It&apos;s the ignition coil. I really need a dishwasher. I&apos;ll add a
            dishwasher wye to the drainage under the sink, install a shutoff
            valve and tee, and run PEX to the planned dishwasher area. I&apos;ll
            drill through the joists in the basement, and run 14/2 wire to a 15
            amp breaker.
          </p>

          <p>
            Jumping into something new and accomplishing it is nothing new to
            me. I&apos;ll figure it out. Just let me loose.
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

      <h2 className="heading-tertiary">Certifications</h2>

      <div className="cert-card-container">
        <CertificationCard
          title="Microsoft Certified: Azure Fundamentals"
          issuer="Microsoft"
          issued="Issued Jul 2024"
          credentialId="8C3B283EFC633411"
          url="https://learn.microsoft.com/en-us/users/sarahpoulin/credentials/8c3b283efc633411"
        />
        <CertificationCard
          title="ShiftKey Academy Up: Cybersecurity Certificate"
          issuer="ShiftKey Labs"
          issued="Issued Sep 2024"
          credentialId="4f0c3e88-3457-4f85-a229-8d33716032f7"
          url="https://credsverse.com/credentials/4f0c3e88-3457-4f85-a229-8d33716032f7"
        />
        <CertificationCard
          title="Digital Skills for Women"
          issuer="Digital Nova Scotia"
          issued="Issued Nov 2024"
          credentialId="2O_MnGtVQpmDa-iIvgDWVw"
          url="https://learner.mycreds.ca/badges/public/assertion/2O_MnGtVQpmDa-iIvgDWVw"
        />
        <CertificationCard
          title="ShiftKey Academy Up: Data Analytics with Python Certificate"
          issuer="ShiftKey Labs"
          issued="Issued Dec 2024"
          credentialId="370cb43c-c240-45dc-ad06-e1150835806f"
          url="https://credsverse.com/credentials/370cb43c-c240-45dc-ad06-e1150835806f"
        />
        <CertificationCard
          title="Level Up with CCubed Cyber Security Bootcamp Certificate"
          issuer="Computing Councils of Canada"
          issued="Issued Jul 2025"
        />
        <CertificationCard
          title="Occupational Health & Safety Act (Nova Scotia) Certification"
          issuer="Nova Scotia Community College - NSCC"
          issued="Issued Aug 2025"
        />
        <CertificationCard
          title="Workplace Hazardous Materials Information Systems (WHMIS) Certification"
          issuer="Nova Scotia Community College - NSCC"
          issued="Issued Aug 2025"
        />
        <CertificationCard
          title="UX Foundations: Research"
          issuer="LinkedIn"
          issued="Issued Sep 2025"
          url="https://www.linkedin.com/learning/certificates/6bb49f08b06a3bec5924fa65a16c0c3a211ba7bae60740f008002d285b3ce8a5"
        />
        <CertificationCard
          title="Figma Essential Training"
          issuer="LinkedIn"
          issued="Issued Sep 2025"
          url="https://www.linkedin.com/learning/certificates/073daca0e024492aef21a1ea3f0caaee6f2fda40376d1c73201794ff067f5d2d"
        />
        <CertificationCard
          title="Accessibility-First Design"
          issuer="LinkedIn"
          issued="Issued Sep 2025"
          url="https://www.linkedin.com/learning/certificates/27d7efe1bb39e866bef1e05e2c25cbc54d3c7fe987fef73ac00c8c6033ee8c30"
        />
        <CertificationCard
          title="HTTP Essential Training"
          issuer="LinkedIn"
          issued="Issued Nov 2025"
          url="https://www.linkedin.com/learning/certificates/49298c53c067c389e12d6612f83b3d4d8b8a4fcf7fe7a7f543954c8539fa9985"
        />
        <CertificationCard
          title="Learning REST APIs"
          issuer="LinkedIn"
          issued="Issued Nov 2025"
          url="https://www.linkedin.com/learning/certificates/44d6f4b0c3a8db63b470dd4a16abb407c644c71edb061071fda6727a8aeb6868"
        />
        <CertificationCard
          title="Learning HTML Canvas"
          issuer="LinkedIn"
          issued="Issued Nov 2025"
          url="https://www.linkedin.com/learning/certificates/b918608d05ab84e8bf2c468770bb52078ec9c8c19c52687a7785e68530ed5aa1"
        />
        <CertificationCard
          title="Introduction to NoSQL"
          issuer="DataCamp"
          issued="Issued Jan 2026"
          url="https://www.datacamp.com/completed/statement-of-accomplishment/course/1953eec14b32b0701495332e5f047d268d619887"
        />
        <CertificationCard
          title="Introduction to NoSQL"
          issuer="DataCamp"
          issued="Issued Jan 2026"
          url="https://www.datacamp.com/completed/statement-of-accomplishment/course/1953eec14b32b0701495332e5f047d268d619887"
        />
        <CertificationCard
          title="MongoDB for SQL Experts"
          issuer="MongoDB"
          issued="Issued Jan 2026"
          credentialId="MDBgl0zvcn5p6"
          url="https://learn.mongodb.com/c/i5YgaktYReSU95HQB4Fb6A"
        />
        <CertificationCard
          title="Modeling Data Relationships"
          issuer="MongoDB"
          issued="Issued Jan 2026"
          credentialId="MDB1rblrxzkih"
          url="https://learn.mongodb.com/c/i5YgaktYReSU95HQB4Fb6A"
        />
        <CertificationCard
          title="Learning Jira (Cloud Edition)"
          issuer="LinkedIn"
          issued="Issued Jan 2026"
          url="https://www.linkedin.com/learning/certificates/ee84700035612680d1b6f379be3fdd6b6dd08488cf38cded41fb71ec2f0ecbef"
        />
        <CertificationCard
          title="Learning Jira Software"
          issuer="LinkedIn"
          issued="Issued Jan 2026"
          url="https://www.linkedin.com/learning/certificates/ef314209831435d62f2dbd2dd9d1204af98ebbf96f71ede6b806874aca6d78ce"
        />
        <CertificationCard
          title="TypeScript for JavaScript Developers"
          issuer="LinkedIn"
          issued="Issued Jan 2026"
          url="https://www.linkedin.com/learning/certificates/92b267d0edbd7045ad8ec5ec20e23fbb9fecf1362c2ee4bbc0cb6168c3780c51"
        />
      </div>

      <h2 className="heading-tertiary">Skills & Technologies</h2>

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
    </main>
  );
}