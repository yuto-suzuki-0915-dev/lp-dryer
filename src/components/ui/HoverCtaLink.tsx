"use client";

import { useEffect, useState, type ReactNode } from "react";

type HoverCtaLinkProps = {
  children: ReactNode;
  className: string;
  href: string;
};

export default function HoverCtaLink({ children, className, href }: HoverCtaLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const resetHover = () => setIsHovered(false);
    window.addEventListener("pageshow", resetHover);
    return () => window.removeEventListener("pageshow", resetHover);
  }, []);

  return (
    <a
      className={className}
      data-hovered={isHovered ? "true" : undefined}
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onBlur={() => setIsHovered(false)}
      onClick={() => setIsHovered(false)}
    >
      {children}
    </a>
  );
}
