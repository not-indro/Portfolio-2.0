"use client";

import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/magicui/blur-fade";
import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

interface Project {
    title: string;
    href?: string;
    dates: string;
    active: boolean;
    description: string;
    technologies: readonly string[];
    links?: readonly {
        type: string;
        href: string;
        icon: React.ReactNode;
    }[];
    image?: string;
    video?: string;
}

interface ProjectListProps {
    projects: readonly Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
    const [showAll, setShowAll] = useState(false);
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = useMemo(() => {
        const cats = Array.from(new Set(projects.map((p) => p.dates)));
        return ["All", ...cats];
    }, [projects]);

    const filteredProjects = useMemo(() => {
        if (activeCategory === "All") return projects;
        return projects.filter((p) => p.dates === activeCategory);
    }, [activeCategory, projects]);

    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-wrap justify-center gap-1.5 max-w-[800px] mx-auto mb-8">
                {categories.map((category, idx) => (
                    <BlurFade key={category} delay={BLUR_FADE_DELAY * 11 + idx * 0.05}>
                        <div
                            onClick={() => {
                                setActiveCategory(category);
                                setShowAll(false);
                            }}
                            className={cn(
                                "cursor-pointer inline-flex items-center justify-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                                activeCategory === category
                                    ? "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80"
                                    : "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            )}
                        >
                            {category}
                        </div>
                    </BlurFade>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto w-full">
                {displayedProjects.map((project, id) => (
                    <BlurFade
                        key={project.title}
                        delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                    >
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
                    </BlurFade>
                ))}
            </div>

            {filteredProjects.length > 4 && (
                <div className="flex justify-center mt-4">
                    <Button
                        variant="outline"
                        onClick={() => setShowAll(!showAll)}
                        className="w-full sm:w-auto"
                    >
                        {showAll ? "Show Less" : "Show More"}
                    </Button>
                </div>
            )}
        </div>
    );
}
