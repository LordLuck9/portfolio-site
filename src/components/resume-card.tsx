"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="ml-4 min-w-0 flex-grow group">
          <CardHeader>
            <div className="flex w-full min-w-0 items-start justify-between gap-x-2">
              <div className="min-w-0 flex-1">
                <h3 className="flex items-center gap-x-1 font-semibold leading-none text-xs sm:text-sm">
                  <span className="truncate">{title}</span>
                  <ChevronRightIcon
                    className={cn(
                      "size-4 shrink-0 translate-x-0 transform transition-all duration-300 ease-out",
                      "opacity-50 sm:opacity-0 sm:group-hover:translate-x-1 sm:group-hover:opacity-100",
                      isExpanded ? "rotate-90" : "rotate-0"
                    )}
                  />
                </h3>
                {subtitle && (
                  <div className="mt-1 font-sans text-xs">{subtitle}</div>
                )}
              </div>
              <div className="shrink-0 whitespace-nowrap text-[11px] tabular-nums text-muted-foreground text-right sm:text-sm">
                {period}
              </div>
            </div>
            {badges && badges.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {badges.map((badge, index) => (
                  <Badge
                    variant="secondary"
                    className="text-[10px] sm:text-xs"
                    key={index}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 pr-6 pb-2 text-xs sm:text-sm"
            >
              <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert prose-li:my-0.5 prose-ul:my-1 prose-ul:pl-4 sm:text-sm">
                {description}
              </Markdown>
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};
