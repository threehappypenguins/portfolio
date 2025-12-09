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
        "A dynamic, interactive quiz application built with Flask. Features include question shuffling, multiple retry attempts, detailed result analysis, and support for multiple quizzes. I needed a quick way to practice a quiz coming up for my Programming Fundamentals class (we were given the quiz to take on BrightSpace ahead of time, but I found it helped to be asked the questions again that I got wrong, and keep repeating until I got it correct. I also implemented a QR code so that the local host could be opened from a mobile device.",
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
      technologies: ["React", "Node.js", "Express", "Firestore"],
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
    date: "Sep 2025",
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
    },
  },
];
