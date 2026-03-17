import * as React from "react";
import { cn } from "@/lib/utils"; // Assuming you have a utility for class concatenation

// Define interfaces for props
interface SocialLink {
  icon: React.ElementType; // For Shadcn icons or any SVG component
  href: string;
}

interface TeamMember {
  name: string;
  designation: string;
  bio?: string;
  imageSrc: string;
  socialLinks?: SocialLink[];
}

interface TeamSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  members: TeamMember[];
  registerLink?: string;
  logo?: React.ReactNode; // For a custom logo, or you can use a string src
  socialLinksMain?: SocialLink[]; // Main social links for the company/section
}

// TeamSection Component
export const TeamSection = React.forwardRef<HTMLDivElement, TeamSectionProps>(
  (
    {
      title,
      description,
      members,
      registerLink,
      logo,
      socialLinksMain,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden bg-background py-12 md:py-24 lg:py-32",
          className
        )}
        {...props}
      >
        <div className="max-w-7xl mx-auto grid items-center justify-center gap-8 px-6 md:px-8 text-center">
          {/* Header Section */}
          <div className="relative z-10 flex w-full flex-col items-center justify-center gap-4 text-center lg:gap-8">
            <div className="grid gap-2 text-center">
              <p className="font-elegant text-lg text-muted-foreground">Our Team</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
                <span className="font-serif">We know</span>{" "}
                <span className="font-elegant">fashion's pain points</span>
              </h1>
              <p className="max-w-[700px] text-foreground/60 md:text-lg mt-2 mx-auto">
                {description}
              </p>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="relative z-10 grid w-full max-w-4xl mx-auto grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {members.map((member, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-end overflow-hidden rounded-3xl bg-card border border-border p-8 text-center transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:border-foreground/20"
              >
                {/* Member Image with mask and border animation */}
                <div
                  className="relative z-10 h-28 w-28 overflow-hidden rounded-full border-2 border-border bg-foreground/10 transition-all duration-500 ease-out group-hover:border-foreground/30 group-hover:scale-105 flex items-center justify-center"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="text-2xl font-medium text-foreground/40 absolute">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 relative z-10"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>

                <h3 className="relative z-10 mt-5 text-lg font-medium text-foreground">
                  {member.name}
                </h3>
                <p className="relative z-10 text-sm text-muted-foreground">
                  {member.designation}
                </p>

                {member.bio && (
                  <p className="relative z-10 text-xs text-foreground/60 mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                )}

                {/* Social Links for individual members */}
                {member.socialLinks && member.socialLinks.length > 0 && (
                  <div className="relative z-10 mt-4 flex gap-2">
                    {member.socialLinks.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/60 hover:text-foreground transition-colors"
                      >
                        <link.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

TeamSection.displayName = "TeamSection";