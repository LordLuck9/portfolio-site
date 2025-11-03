// src/data/resume.tsx
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Bhagyesh Acharya",
  initials: "BA",
  url: "http://localhost:3000",
  location: "Jacksonville, FL",
  locationLink: "https://www.google.com/maps/place/Jacksonville,+FL",
  description:
    "Technical Support Engineer focused on modern endpoint management",
  summary:
    "Technical Support Engineer with 4+ years of experience managing enterprise endpoint environments, troubleshooting complex technical issues, and delivering seamless end-user support. Skilled in Intune, Jamf Pro, Azure AD, and SQL. Proven ability to reduce resolution times, drive compliance, and improve onboarding processes for large organizations.",

  avatarUrl: "/me.jpg",

  skills: [
    "Intune",
    "Jamf Pro",
    "Windows",
    "macOS",
    "Active Directory",
    "SQL Server",
    "Knowledge Base / SOPs",
    "Endpoint Security",
    "WordPress",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "bhagyeshacharya@gmail.com",
    tel: "+1-571-241-9849",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/LordLuck9", // TODO: add your GitHub URL
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bhagyesh-a-395b58130/", // TODO: add your LinkedIn URL
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "", // optional
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:bhagyeshacharya@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "American Institutes for Research",
      href: "https://www.air.org",
      badges: ["Intune", "Jamf Pro", "macOS", "Windows", "SOPs"],
      location: "Arlington, VA",
      title: "Technical Support Engineer",
      logoUrl: "/air.png",
      start: "Apr 2023",
      end: "Present",
      description:
        "Manage 2,000+ Windows and macOS devices using Intune & Jamf Pro to ensure security and compliance. Lead onboarding and setup projects into secure cloud environments. Develop and maintain knowledge base articles and SOPs.",
    },
    {
      company: "American Institutes for Research",
      href: "https://www.air.org",
      badges: ["Tier I/II", "Deployments", "Active Directory"],
      location: "Arlington, VA",
      title: "Technical Support Specialist II & I",
      logoUrl: "/air.png",
      start: "Aug 2021",
      end: "Mar 2023",
      description:
        "Provided Tier I & II support and served as escalation lead for 2,000+ users. Supported device imaging/deployments and AD account provisioning.",
    },
    {
      company: "Anthem, Inc.",
      href: "https://www.elevancehealth.com",
      badges: ["SQL Server", "Production Support", "Kanban"],
      location: "Norfolk, VA",
      title: "Systems Analyst",
      logoUrl: "/elevance.svg",
      start: "Jul 2019",
      end: "Oct 2019",
      description:
        "Provided production support using Kanban workflows. Monitored daily data integration processes with SQL Server, maintaining accuracy and reliability.",
    },
    {
      company: "Cherry Bekaert LLP",
      href: "https://www.cbh.com",
      badges: ["Quality Control", "Tax Season Ops"],
      location: "Norfolk, VA",
      title: "Accounting Document Reviewer",
      logoUrl: "/cherry-bekaert.jpg",
      start: "Jan 2019",
      end: "Apr 2019",
      description:
        "Enforced quality control during tax season by validating information captured from tax return automation software.",
    },
    {
      company: "ODUrent",
      href: "https://www.odurent.com",
      badges: ["Operations", "WordPress"],
      location: "Norfolk, VA",
      title: "Assistant Property Manager",
      logoUrl: "/odurent.jpeg",
      start: "Aug 2018",
      end: "Oct 2018",
      description:
        "Coordinated rent collection, tenant communications, and maintenance. Managed website content and property listings using WordPress.",
    },
  ],

  education: [
    {
      school: "Old Dominion University",
      href: "https://www.odu.edu",
      degree: "Bachelor of Science in Biology",
      logoUrl: "/odu.jpg",
      start: "",
      end: "2018",
    },
  ],

  projects: [
    {
      title: "WhyDoIKnowThis",
      href: "https://whydoiknowthis.com",
      dates: "2025",
      active: true,
      description:
        "A fun, modern trivia site for friends with category browsing and Netflix-style selection. Includes hard-mode question packs and JSON import/export for custom sets.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Vercel",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://whydoiknowthis.com",
          icon: <Icons.globe className="size-3" />,
        },
        // { type: "Source", href: "https://github.com/...", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Flash Digital",
      href: "#",
      dates: "2024 – Present",
      active: true,
      description:
        "Solo digital-marketing studio site: landing pages, SEO basics, and lightweight CMS edits for small businesses. Built reusable sections (hero, pricing, FAQ) and a components library.",
      technologies: ["Next.js", "TailwindCSS", "Forms", "SSR"],
      links: [
        // TODO: add live URL when ready
        { type: "Website", href: "#", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "FlashTechSupport",
      href: "#",
      dates: "2024 – Present",
      active: true,
      description:
        "Customer-facing site for IT support offerings (device setup, home networking, AV help). Simple intake form flows to route requests and auto-acknowledge via email.",
      technologies: ["Next.js", "TailwindCSS", "Vercel", "Email Integrations"],
      links: [{ type: "Website", href: "#", icon: <Icons.globe className="size-3" /> }],
      image: "",
      video: "",
    },
    {
      title: "Password Generator",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Tiny web app to generate strong passwords with adjustable length, entropy meter, copy-to-clipboard, and client-only logic.",
      technologies: ["React", "TypeScript", "Vite"],
      links: [{ type: "Website", href: "#", icon: <Icons.globe className="size-3" /> }],
      image: "",
      video: "",
    },
    {
      title: "Reaction-Time Game",
      href: "#",
      dates: "2024",
      active: false,
      description:
        "A simple reflex tester with rounds, leaderboard stub, and mobile haptics. Good playground for animations and state machines.",
      technologies: ["React", "TypeScript", "Framer Motion"],
      links: [{ type: "Website", href: "#", icon: <Icons.globe className="size-3" /> }],
      image: "",
      video: "",
    },
  ],

  hackathons: [
    // Optional
  ],
} as const;
