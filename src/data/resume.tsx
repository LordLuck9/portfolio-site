// src/data/resume.tsx
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Bhagyesh Acharya",
  initials: "BA",
  url: "https://main.dt7rmve7zaf3g.amplifyapp.com",
  location: "Jacksonville, FL",
  locationLink: "https://www.google.com/maps/place/Jacksonville,+FL",
  description:
    "Technical Support Engineer focused on enterprise endpoint management, identity, and cloud infrastructure.",
  summary:
    "I support 2,000+ users across Windows and macOS at the American Institutes for Research, administering Microsoft Intune, Jamf Pro, and Azure AD/Entra ID. I work across endpoint management, identity and access, and secure cloud onboarding — and I write the SOPs and knowledge base articles that keep it all repeatable.",

  avatarUrl: "/me.jpg",

  skills: [
    "Microsoft Intune",
    "Jamf Pro",
    "Microsoft 365",
    "Azure AD / Entra ID",
    "Active Directory",
    "Windows",
    "macOS",
    "Endpoint Security",
    "Configuration Profiles",
    "Compliance Policies",
    "Device Enrollment",
    "SQL Server",
    "VPN",
    "SOPs / Knowledge Base",
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
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:bhagyeshacharya@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "American Institutes for Research",
      href: "https://www.air.org",
      badges: ["Intune", "Jamf Pro", "Entra ID", "macOS", "Windows"],
      location: "Arlington, VA / Remote",
      title: "Technical Support Engineer",
      logoUrl: "/air.png",
      start: "Apr 2023",
      end: "Present",
      description:
        "- Provide enterprise help desk support for 2,000+ users across Windows, macOS, Microsoft 365, VPN, hardware, software, and account access.\n- Administer Microsoft Intune, Azure AD/Entra ID, and Jamf Pro — device management, security groups, role assignments, configuration profiles, and policy deployment.\n- Manage and troubleshoot enterprise endpoints across enrollment, application access, compliance settings, and user/device group targeting.\n- Onboard project teams into secure cloud project portals, building folders and workspaces aligned to data classification and security standards.\n- Provision user access to applications, folders, and cloud resources in partnership with project teams, IT Security, and internal stakeholders.\n- Author SOPs, knowledge base articles, troubleshooting docs, and IT Bulletin communications to standardize support and improve user guidance.",
    },
    {
      company: "American Institutes for Research",
      href: "https://www.air.org",
      badges: ["Tier I/II", "Active Directory", "Deployments"],
      location: "Arlington, VA",
      title: "Technical Support Specialist II & I",
      logoUrl: "/air.png",
      start: "Aug 2021",
      end: "Mar 2023",
      description:
        "- Provided Tier I and Tier II support for 2,000+ users; progressed to escalation resource for recurring endpoint, account, deployment, and access issues.\n- Supported device imaging, deployments, Active Directory account provisioning, password resets, software installs, and onboarding/offboarding.",
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
        "- Provided production support and managed work through Kanban boards to ensure timely follow-up on operational issues.\n- Monitored daily data integration processes using SQL Server, supporting data accuracy, reliability, and escalation for business-critical workflows.",
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
        "- Validated information captured from tax return automation software, supporting quality control during high-volume seasonal operations.",
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
        "- Coordinated tenant communication, rent collection, property maintenance, and WordPress listing updates to support day-to-day operations.",
    },
  ],

  education: [
    {
      school: "Old Dominion University",
      href: "https://www.odu.edu",
      degree: "Bachelor of Science in Biology",
      logoUrl: "/odu.jpg",
      start: "2013",
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
