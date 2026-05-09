// src/data/resume.tsx
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Bhagyesh Acharya",
  initials: "BA",
  url: "https://main.dt7rmve7zaf3g.amplifyapp.com",
  location: "Jacksonville, FL",
  locationLink: "https://www.google.com/maps/place/Jacksonville,+FL",
  description: "Technical Support Engineer.",
  summary:
    "Technical Support Engineer with 4+ years supporting enterprise environments. Currently at the American Institutes for Research, where I manage Microsoft Intune, Jamf Pro, and Azure AD/Entra ID for 2,000+ Windows and macOS users, owning endpoint management, identity and access, and secure cloud onboarding.",

  avatarUrl: "/me.jpg",

  skillGroups: [
    {
      label: "Endpoint & Device Management",
      items: [
        "Microsoft Intune",
        "Jamf Pro",
        "Microsoft 365",
        "Windows",
        "macOS",
        "Configuration Profiles",
        "Compliance Policies",
        "Device Enrollment",
        "Endpoint Security",
      ],
    },
    {
      label: "Identity & Access",
      items: [
        "Azure AD / Entra ID",
        "Active Directory",
        "Security Groups",
        "Role Assignments",
      ],
    },
    {
      label: "Other",
      items: ["SQL Server", "VPN", "WordPress"],
    },
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
        "- Provide enterprise help desk support for 2,000+ users across Windows, macOS, Microsoft 365, VPN, hardware, software, and account access.\n- Administer Microsoft Intune, Azure AD/Entra ID, and Jamf Pro for device management, security groups, role assignments, configuration profiles, and policy deployment.\n- Manage and troubleshoot enterprise endpoints across enrollment, application access, compliance settings, and user/device group targeting.\n- Onboard project teams into secure cloud workspaces aligned to data classification and security standards.\n- Provision user access to applications, folders, and cloud resources in partnership with project teams, IT Security, and internal stakeholders.\n- Document recurring fixes and IT bulletins so the team can resolve issues faster.",
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
      company: "Elevance Health (formerly Anthem, Inc.)",
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
      title: "Quantum Flash Solutions",
      href: "https://quantumflashsolutions.com",
      dates: "2025 – Present",
      active: true,
      description:
        "Boutique digital agency I founded to help small businesses compete with modern web, marketing, and automation. Services span web design, local SEO, AI chatbots and lead-follow-up automation, and IT support, built on the enterprise IT background from my day job.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Local SEO",
        "AI Automation",
        "Microsoft 365",
      ],
      links: [
        {
          type: "Website",
          href: "https://quantumflashsolutions.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Trivia Nexus",
      href: "https://main.d1onwqwztufavg.amplifyapp.com/",
      dates: "2025",
      active: true,
      description:
        "Trivia platform with category browsing, themed question packs, and a clean playable interface designed for quick rounds with friends.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "AWS Amplify",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://main.d1onwqwztufavg.amplifyapp.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Reaction-Time Game",
      href: "https://staging.d1aiz8pb9xezij.amplifyapp.com/",
      dates: "2024",
      active: true,
      description:
        "Reflex tester with timed rounds, local leaderboard, and mobile haptics. Built to explore animations and state machines.",
      technologies: ["React", "TypeScript", "Framer Motion", "AWS Amplify"],
      links: [
        {
          type: "Website",
          href: "https://staging.d1aiz8pb9xezij.amplifyapp.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

  hackathons: [
    // Optional
  ],
} as const;
