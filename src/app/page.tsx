
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const HEADING_DELAY = 0;
const CONTENT_DELAY = 0.08;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8 sm:space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:justify-between sm:gap-2">
            <div className="flex flex-1 flex-col space-y-1.5">
              <BlurFadeText
                delay={0}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={0.05}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={0}>
              <Avatar className="size-20 border sm:size-28">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={HEADING_DELAY}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={CONTENT_DELAY}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={HEADING_DELAY}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={CONTENT_DELAY}>
            <div className="flex flex-col gap-y-3">
              {DATA.work.map((work) => (
                <ResumeCard
                  key={`${work.company}-${work.start}`}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              ))}
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={HEADING_DELAY}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <BlurFade delay={CONTENT_DELAY}>
            <div className="flex flex-col gap-y-3">
              {DATA.education.map((education) => (
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              ))}
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={HEADING_DELAY}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <BlurFade delay={CONTENT_DELAY}>
            <div className="flex flex-col gap-y-3">
              {DATA.skillGroups.map((group) => (
                <div key={group.label} className="space-y-1.5">
                  <div className="text-xs font-medium text-muted-foreground">
                    {group.label}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <Badge
                        className="text-[11px] sm:text-xs"
                        key={skill}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-6 w-full">
          <BlurFade delay={HEADING_DELAY}>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Projects</h2>
              <p className="text-sm text-muted-foreground">
                Sites, tools, and side projects I&apos;ve built outside of
                work.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={CONTENT_DELAY}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project) => (
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="contact">
        <BlurFade delay={HEADING_DELAY}>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Contact</h2>
            <p className="text-sm text-muted-foreground">
              Want to chat? Shoot me{" "}
              <Link
                href={"mailto:bhagyeshacharya@gmail.com"}
                className="text-blue-500 hover:underline"
              >
                an email
              </Link>{" "}
              and I&apos;ll get back when I can.
            </p>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
