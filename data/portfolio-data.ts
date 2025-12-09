export interface TimelineItem {
  date: string;
  title: string;
  richContent: {
    description?: string;
    bullets?: string[];
    technologies?: string[];
    links?: {
      text: string;
      url: string;
    }[];
    images?: {
      src: string;
      alt: string;
      caption?: string;
    }[];
  };
}

export const timelineData: TimelineItem[] = [
  {
    date: "Nov 2025",
    title: "Normalization Practice App",
    richContent: {
      description:
        "An interactive web application for learning and practicing database normalization through hands-on exercises.",
      links: [
        {
          text: "View App",
          url: "https://normalization.sarahpoulin.ca/",
        },
        {
          text: "View Project",
          url: "https://github.com/threehappypenguins/normalization-practice",
        },
      ],
      technologies: ["React", "Vite", "Tailwind", "LocalStorage"],
    },
  },
  {
    date: "Oct 2025",
    title: "Programming Fundamentals Quiz App",
    richContent: {
      description:
        "A dynamic, interactive quiz application built with Flask. Features include question shuffling, multiple retry attempts, detailed result analysis, and support for multiple quizzes. I needed a quick way to practice a quiz coming up for my Programming Fundamentals class (we were given the quiz to take on BrightSpace ahead of time), but I found it helped to be asked the incorrectly answered questions again, and keep repeating until I got them correct. I also implemented a QR code so that the local host could be opened from a mobile device.",
      links: [
        {
          text: "View Project",
          url: "https://github.com/sarahpoulin/programming_quizzes",
        },
      ],
      technologies: ["Flask", "Python"],
    },
  },
  {
    date: "Oct 2025",
    title: "First Prize RBC HubHacks Hackathon",
    richContent: {
      description:
        "For this hackathon, we were presented with the problem statement Improving Food Security through Innovative Solutions. Our vision was an application that would enable food insecure individuals and families to be able to find a local food bank, and filter products by allergen and/or culturally sensitive foods. Furthermore, we presented the idea that another application could be created for food banks to scan in foods and auto-populate a database (such as Firestore) using Open Food Facts API. We implemented the user-based application, FoodSafe NS, using React and created a dummy database that pulled from Open Food Facts. We believe that this implementation is also valuable to ensure that food banks are able to create a call-to-action to the public with specific grocery items that are needed, since all items would be tracked in a database.",
      technologies: ["React", "Node.js", "Express", "Firestore"],
      links: [
        {
          text: "NSCC Article",
          url: "https://www.nscc.ca/about/news/stories/2025/nscc-wins-rbc-hubhacks-2025.asp",
        },
        {
          text: "View Project",
          url: "https://github.com/JKaulback/food-safe-ns",
        },
        {
          text: "Open Food Facts API",
          url: "https://world.openfoodfacts.org/data",
        },
      ],
      images: [
        {
          src: "/portfolio/2025-10-18-hubhacks1.jpg",
          alt: "RBC HubHacks winning team photo",
          caption: "Winning Team Photo",
        },
        {
          src: "/portfolio/2025-10-18-hubhacks2.png",
          alt: "RBC HubHacks project presentation landing page",
          caption: "Landing Page",
        },
        {
          src: "/portfolio/2025-10-18-hubhacks3.png",
          alt: "RBC HubHacks dietary restrictions",
          caption: "Choose Dietary Requirements",
        },
        {
          src: "/portfolio/2025-10-18-hubhacks4.png",
          alt: "RBC HubHacks food bank search results",
          caption: "Choose Food Bank",
        },
        {
          src: "/portfolio/2025-10-18-hubhacks5.png",
          alt: "RBC HubHacks food bank inventory",
          caption: "Food Bank Inventory",
        },
      ],
    },
  },
  {
    date: "Sep 2025 — Present",
    title: "ABStrack: Symptom Tracker App",
    richContent: {
      description:
        "This application is under heavy development. It is intended to be a tool to track the symptoms of a patient with Autobrewery Syndrome, and provide information for healthcare practitioners.",
      technologies: [
        "React Native",
        "TypeScript",
        "Tailwind",
        "Nativewind",
        "Expo",
        "Supabase",
        "PostgreSQL",
      ],
      links: [
        {
          text: "View Project",
          url: "https://github.com/threehappypenguins/ABStrack",
        },
        {
          text: "Autobrewery Syndrome",
          url: "https://www.autobrewery.org/",
        },
      ],
    },
  },
  {
    date: "Jun 2025 — Present",
    title: "Retainium App",
    richContent: {
      description:
        "Contributor to a cheat sheet generator project on a private GitHub repository. I have completed the following issues:",
      bullets: [
        "Setup storybook to assist in testing core components",
        "Modified Tailwind to make formulas and other previews visible in dark mode",
        "Implemented chat UI and used OpenAI API",
        "Added database persistence for chats",
        "Made title in formula blocks to be hidden by default and only show edit/delete when hovering",
        "For chats, added title generator (using OpenAI API), tooltip for truncated titles, and made title editable ",
        "Fixed bug in page creation from module page (previously hardcoded to go to blocks page)",
      ],
      technologies: ["Next.js", "React", "Tailwind", "Supabase", "PostgreSQL"],
      images: [
        {
          src: "/portfolio/Retainium-darkmodefix.png",
          alt: "Demonstrating Retainium dark mode fix",
          caption: "Dark Mode Fix",
        },
        {
          src: "/portfolio/Retainium-chatui1.png",
          alt: "Demonstrating Retainium chat UI implementation on chat page",
          caption: "Chat UI from Chat Page",
        },
        {
          src: "/portfolio/Retainium-chatui2.png",
          alt: "Demonstrating Retainium chat UI implementation from chat bubble",
          caption: "Chat UI from Chat Bubble",
        },
        {
          src: "/portfolio/Retainium-chat-persistence.png",
          alt: "Demonstrating Retainium chat database persistence",
          caption: "Database Persistence",
        },
        {
          src: "/portfolio/Retainium-titledefault.png",
          alt: "Demonstrating Retainium title hidden by default in formulas",
          caption:
            "Formula Title Hidden by Default (showing edit/delete when hovering)",
        },
        {
          src: "/portfolio/Retainium-chattitle1.png",
          alt: "Demonstrating Retainium chat title generation and tooltip for truncated titles",
          caption: "Chat Title Generation and Tooltip",
        },
        {
          src: "/portfolio/Retainium-chattitle2.png",
          alt: "Demonstrating Retainium chat editable title",
          caption: "Chat Editable Title",
        },
        {
          src: "/portfolio/Retainium-module-page.png",
          alt: "Demonstrating page creation from modules",
          caption: "Page Creation Modal from Modules",
        },
      ],
    },
  },
  {
    date: "Jan 2025",
    title: "Cybersecurity: WordPress Redirect Hack",
    richContent: {
      description:
        "Discovered and mitigated a critical WordPress vulnerability involving malicious redirects.",
      bullets: [
        "Found malicious/undesirable redirect script being injected into HTML",
        "Tracked down malicious php code modifying the database",
        "Cleaned up database where scripts were there for several months before redirect",
        "Discovered original issue stemmed from an insecure admin login",
      ],
      technologies: ["PHP", "Wordpress", "MySQL"],
    },
  },
  {
    date: "Nov 2024",
    title: "First Prize Agentic AI Hackathon",
    richContent: {
      description:
        "My team and I won first prize in Agentic AI Hackathon at Volta. We developed an application that will accept text and transcribe voice input input details into a database about the person, and a browser extension that will: ",
      bullets: [
        "Generate LinkedIn notifications that will suggest who to interact with",
        "Suggestions on approaching the individual via message (for example, if there is news the person may be interested in)",
        "Suggestions in the notifications can be based on whether you're starting a project or looking for work",
        "Generate tooltips on the individual's LinkedIn, giving additional details about the person from the database",
      ],
      technologies: [
        "EC2",
        "MongoDB",
        "Node.js",
        "JavaScript",
        "CRUD API",
        "Greasemonkey",
      ],
      links: [
        {
          text: "View Project",
          url: "https://github.com/Vertfromage/agenticAIHackathon",
        },
      ],
      images: [
        {
          src: "/portfolio/2024-11-16-aihackathon1.jpeg",
          alt: "Agentic AI Hackathon photo of me holding winning certificate",
          caption: "Me Holding up Winning Certificate",
        },
        {
          src: "/portfolio/2024-11-16-aihackathon2.jpeg",
          alt: "Agentic AI Hackathon winning team photo",
          caption: "Winning Team Photo",
        },
      ],
    },
  },
  {
    date: "Sep 2024",
    title: "Mitigated Serious NSHA Vulnerability",
    richContent: {
      description:
        "On September 27, I sent an email to the Canadian Centre for Cyber Security regarding two NSHA (Nova Scotia Health Authority) devices that had port 3389 (remote desktop) publicly exposed and NLA (Network Level Authentication) turned off. This meant that anybody could pull up the log in screen on the device and then go to town with usernames and passwords (not that I've ever actually tried it on any actual entity; I just know that it's not particularly hard to do).\n\nI later heard back from CCCS about it, thanking me for my report",
      links: [
        {
          text: "Auditor General Cybersecurity Report",
          url: "https://oag-ns.ca/media/news-releases/2024/without-robust-cybersecurity-nova-scotias-digital-health-network-serious",
        },
        {
          text: "Canadian Centre for Cyber Security",
          url: "https://www.cyber.gc.ca/",
        },
      ],
      images: [
        {
          src: "/portfolio/CCCS-email.jpeg",
          alt: "Email screenshot from Canadian Centre for Cyber Security",
          caption: "Email from CCCS Thanking Me",
        },
      ],
    },
  },
  {
    date: "Jan 2022",
    title: "Asterisk (PBX) Server",
    richContent: {
      description:
        'Problem: There are people without access to high speed internet in parts of rural Nova Scotia (yes, these places still exist!), or elderly people who don\'t understand how to navigate devices or the internet; and while there are services that will play the audio of a live stream over the phone, they are prohibitively expensive for a small non-profit organization.\n\nSolution: Free Oracle Cloud compute instances and open source applications and frameworks to get the job done. The applications/frameworks include: Restreamer (datarhei) to multicast to several platforms including YouTube, Facebook, Sermon Audio, and another self-hosted application called Icecast. Icecast to encode the audio from the live stream to mp3. And lastly, Asterisk (a PBX), a framework that will play the mp3 (like an "internet radio station"), pick up the calls, and park any caller into MOH (Music on Hold). I included screenshots of some of my Asterisk setup (no GUI, but not really needed since the setup is quite simple). If one calls outside of the live streaming hours, the caller will receive a message and Asterisk will hang up.\n\nA bit of a security note; because "sip scanners" are a real problem, I use iptables as a firewall to ensure the server is not pummeled with calls from sip scanners or other threats, and set up Fail2Ban as an additional security measure.\n\nThe only thing that had to be paid for was a SIP service for a DID (Direct Inward Dialing); essentially a phone number for people to call. But at $0.50 a month and $0.004 per minute, it\'s a bit of a no brainer. One of the paid packages for a complete solution is $150 a month!\n\nThis is one of the many things I have taught myself to do, to find more efficient (and inexpensive) solutions.\n\nCall the phone number (link below) between 10:30 am and about noon, and 2:00 pm and about 3:30 pm on Sundays to check it out!',
      technologies: ["Asterisk", "PBX", "SIP", "Iceast", "VoIP", "DID"],
      links: [
        {
          text: "View Icecast",
          url: "https://audio.crpchalifax.ca/",
        },
        {
          text: "Call Listen Line",
          url: "tel:+19024185135",
        },
      ],
      images: [
        {
          src: "/portfolio/asterisk1.jpeg",
          alt: "Terminal screenshot of Asterisk configuration",
          caption: "Asterisk Configuration of pjsip.conf",
        },
        {
          src: "/portfolio/asterisk2.jpeg",
          alt: "Terminal screenshot of Asterisk configuration",
          caption: "Asterisk Configuration of mohstream script",
        },
        {
          src: "/portfolio/asterisk3.jpeg",
          alt: "Terminal screenshot of Asterisk configuration",
          caption: "Asterisk Configuration of musiconhold.conf",
        },
        {
          src: "/portfolio/asterisk4.jpeg",
          alt: "Terminal screenshot of Asterisk configuration",
          caption: "Asterisk Configuration of extensions.conf",
        },
      ],
    },
  },
  {
    date: "May 2014 — 2018",
    title: "User Experience Tester",
    richContent: {
      description: "Usability tester with UserTesting.",
      bullets: [
        "5 star usability tester",
        "Looked for website or mobile application inconsistencies and usability",
        "Verbally spoke through the process which is recorded via microphone and screen capture for the benefit of designers and developers",
        "Gave feedback and suggestions for improvement",
      ],
      links: [
        {
          text: "UserTesting Website",
          url: "https://www.usertesting.com/",
        },
      ],
    },
  },
  {
    date: "Aug 2009 — Present",
    title: "Childcare & Homeschool Coordinator",
    richContent: {
      bullets: [
        "Home educate my children",
        "Deployed self-hosted Moodle on Oracle Cloud instance",
        "Regularly add curriculum content such as lessons and quizzes",
        "Maintain home NAS (Odroid HC4) on Debian OS",
        "Deployed NextCloud and Nginx Proxy Manager to securely and automatically back up media from smart phones",
        "Deployed Mesh Central server for device control",
      ],
      technologies: [
        "Moodle",
        "PHP",
        "phpMyAdmin",
        "Docker",
        "NextCloud",
        "Nginx Proxy Manager",
        "Cloud Computing",
        "Mesh Central",
      ],
      links: [
        {
          text: "View Moodle",
          url: "https://homeschool.poulinfam.com/",
        },
      ],
    },
  },
  {
    date: "Jan 2008 — Present",
    title: "Technical Advisor (Volunteer)",
    richContent: {
      description:
        "I oversee and implement technical operations at Covenant Reformed Presbyterian Church. Some of the things I have done are:",
      bullets: [
        "Purchased equipment and set up live streaming with OBS",
        "Regularly spin up and maintain Docker containers for various apps and services",
        "Created a Restreaming server to push streams to Sermon Audio, YouTube, Facebook, and Icecast",
        "Created an Icecast server to serve an audio only stream to mp3 of the live stream",
        "Created an Asterisk (PBX) server to answer phone calls and park caller to listen to the Icecast mp3 on Music on Hold",
        "Created a DokuWiki server on a subdomain that allows an assigned person to take care of church and prayer updates without the need of having access to the entire website",
        "Created a Mesh Central server to have remote access to the church laptop in order to help the audio/video technician when necessary",
        "Created a server with Puppeteer scripts (javascript) to change metadata on Sermon Audio and also schedule Facebook live stream videos",
        "Set up a SermonArchive on a homemade NAS (Odroid HC2) running OMV",
        "Utilized a GUI tool to transform command line applications into a job service (Jobson) in order to enter metadata for sermon upload and archiving",
        "Secured Jobson with NPM Authelia set up for 2FA",
        "Created python scripts using API to automatically schedule two livestream videos on YouTube, then a cron to change stream key to main one for the afternoon service after first has ended",
        "Created bash scripts utilizing inotify-tools to detect when an mp4 recording has finished being transferred to the NAS which then automatically uploads to Sermon Audio and YouTube (using API), changes the metadata and renames the mp4, and archives it",
        "Generate video thumbnails for sermon videos on a weekly basis",
        "Created a bash script to use fetchmail which checks email twice daily for a sermon notes Word document attachment, and when detected, will download the .docx, convert to pdf, upload it to Sermon Audio (using API), and archives it",
        "Helped to deploy church website with Weebly",
        "Manage social media accounts",
      ],
      technologies: [
        "OBS",
        "Docker",
        "Restreamer",
        "Icecast",
        "Asterisk",
        "Nginx Proxy Manager",
        "Cloud Computing",
        "Mesh Central",
        "Puppeteer",
        "JavaScript",
        "Python",
        "Bash",
        "Fetchmail",
      ],
      links: [
        {
          text: "CRPC Website",
          url: "https://www.crpchalifax.ca/",
        },
        {
          text: "CRPC Livestream",
          url: "https://live.crpchalifax.ca/",
        },
        {
          text: "CRPC YouTube Channel",
          url: "https://www.youtube.com/@crpchalifax",
        },
        {
          text: "CRPC Facebook",
          url: "https://www.facebook.com/crpchalifax",
        },
        {
          text: "CRPC X (Twitter)",
          url: "https://x.com/CRPCHalifax",
        },
      ],
    },
  },
  {
    date: "Jun 2007 — Aug 2009",
    title: "Security Officer",
    richContent: {
      description:
        "Security officer at Scotia Square and Park Lane Mall with Crombie REIT (Sobeys).",
      bullets: [
        "Certificate of Merit from Halifax Regional Police for assisting in the arrest of a bank robber on February 1st, 2008",
        "Skilled in Microsoft Word, Excel, Outlook, and Powerpoint",
        "Investigations into insecure premises, thefts, leaks, property damage, etc, and skilled in writing detailed reports",
        "Trained in legal articulation, tactical principles, handcuffing, impact weapons, and search procedures",
        "Experience in assisting arrests",
        "Conducted patrols, security checks, lock-up of premises",
        "Trained in creating various work orders, elevator bookings, etc",
        "Experience in contacting emergency personnel, working through fire alarms, emergency threats, and other emergencies",
      ],
      images: [
        {
          src: "/portfolio/Crombie-award1.jpeg",
          alt: "Official merit award photo",
          caption: "Merit Award Presentation at HRP Headquarters",
        },
        {
          src: "/portfolio/Crombie-award2.jpeg",
          alt: "Receiving merit award",
          caption: "Me Receiving Merit Award",
        },
        {
          src: "/portfolio/Crombie-award3.jpeg",
          alt: "Holding merit award outside of HRP headquarters",
          caption:
            "My Husband Eric (also a security officer with Crombie at the time) and I Outside of HRP Headquarters",
        },
        {
          src: "/portfolio/Crombie-award4.jpeg",
          alt: "Framed merit award containing story of bank robbery at Scotiabank",
          caption: "The Merit Award and Story of Scotiabank Robbery",
        },
        {
          src: "/portfolio/Crombie-award5.jpeg",
          alt: "Newspaper clipping of bank robbery story",
          caption: "Newspaper Clipping of Bank Robbery",
        },
      ],
    },
  },
];
