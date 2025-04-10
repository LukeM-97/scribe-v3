"use client";

import {
  IconPlus,
  IconSortAZ,
  IconSortAscending,
  IconSortDescending,
  IconClock,
  IconLayoutGrid,
  IconLayoutList,
  IconCheck,
} from "@tabler/icons-react";
import { Button } from "@/app/_components/ui/Button";
import WelcomeCard from "@/app/_components/Welcome/Card";
import NewProjectCard from "@/app/_components/Welcome/NewProjectCard";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/DropdownMenu";
import { cn } from "./_lib/clsx";
// import NewProjectCard from "@/components/project-card"
import projects from "@/app/_components/Welcome/projects";
import { ProjectCard } from "./_components/Welcome/ProjectCard";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-6 flex items-center w-full justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">Projects</h1>

          <Button
            onClick={() => router.push("/new-project")}
            className="flex items-center text-zinc-900 gap-2 bg-zinc-100 hover:bg-zinc-200"
          >
            <IconPlus className="h-4 w-4" />
            New project
          </Button>
        </div>
        <ProjectSortDropdown />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <WelcomeCard />
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            sourceLanguage={project.sourceLanguage}
            sourceCode={project.sourceCode}
            targetLanguage={project.targetLanguage}
            targetCode={project.targetCode}
            lastUpdatedBy={project.lastUpdatedBy}
            lastUpdatedOn={project.lastUpdatedOn}
            timestamp={project.timestamp}
            progress={project.progress}
            totalChapters={project.totalChapters}
            translatedChapters={project.translatedChapters}
            hasText={project.hasText}
            hasAudio={project.hasAudio}
            hasImages={project.hasImages}
            hasTable={project.hasTable}
            hasMap={project.hasMap}
            hasVideo={project.hasVideo}
            onOpen={() => console.log(`Opening project ${project.id}`)}
          />
        ))}
        <NewProjectCard />
      </div>
    </div>
  );
}

type SortBy = "alphabetical" | "last-edited";
type SortOrder = "ascending" | "descending" | "newest-first" | "oldest-first";
type ViewMode = "grid" | "list";

function ProjectSortDropdown() {
  const [sortBy, setSortBy] = useState<SortBy>("alphabetical");
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascending");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const getSortByIcon = () => {
    if (sortBy === "alphabetical") return <IconSortAZ className="h-5 w-5" />;
    if (sortBy === "last-edited")
      return <IconSortAscending className="h-5 w-5" />;
    return <IconSortAZ className="h-5 w-5" />;
  };

  const getSortByText = () => {
    if (sortBy === "alphabetical") return "Alphabetical";
    if (sortBy === "last-edited") return "Last edited";
    return "Alphabetical";
  };

  const getSortOrderIcon = () => {
    if (sortOrder === "ascending")
      return <IconSortAscending className="h-5 w-5" />;
    if (sortOrder === "descending")
      return <IconSortDescending className="h-5 w-5" />;

    if (sortOrder === "newest-first") return <IconClock className="h-5 w-5" />;
    if (sortOrder === "oldest-first")
      return <IconClock className="h-5 w-5 transform rotate-180" />;
    return <IconSortAscending className="h-5 w-5" />;
  };

  const getSortOrderText = () => {
    if (sortOrder === "newest-first") return "Newest first";
    if (sortOrder === "oldest-first") return "Oldest first";
    if (sortOrder === "ascending") return "Ascending";
    if (sortOrder === "descending") return "Descending";
    return "Ascending";
  };

  return (
    <div className="flex items-center gap-4">
      {/* Sort By Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex hover:bg-zinc-100 items-center gap-2 px-3 py-1.5"
          >
            {getSortByText()}
            {getSortByIcon()}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[200px]" align="end">
          <div className="px-2 py-1.5 text-sm font-semibold">Sort by</div>
          <DropdownMenuItem
            className="flex cursor-pointer items-center justify-between"
            onClick={() => setSortBy("alphabetical")}
          >
            Alphabetical
            {sortBy === "alphabetical" && <IconCheck className="h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex cursor-pointer items-center justify-between"
            onClick={() => setSortBy("last-edited")}
          >
            Last edited
            {sortBy === "last-edited" && <IconCheck className="h-4 w-4" />}
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <div className="px-2 py-1.5 text-sm font-semibold">Order</div>
          <DropdownMenuItem
            className="flex cursor-pointer items-center justify-between"
            onClick={() => setSortOrder("ascending")}
          >
            Ascending
            {sortOrder === "ascending" && (
              <IconSortAscending className="h-4 w-4" />
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex cursor-pointer items-center justify-between"
            onClick={() => setSortOrder("descending")}
          >
            Descending
            {sortOrder === "descending" && (
              <IconSortDescending className="h-4 w-4" />
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Order Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex hover:bg-zinc-100 items-center gap-2 px-3 py-1.5"
          >
            {getSortOrderText()}
            {getSortOrderIcon()}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[200px]" align="end">
          <div className="px-2 py-1.5 text-sm font-semibold">Order</div>
          <DropdownMenuItem
            className="flex cursor-pointer items-center justify-between"
            onClick={() => setSortOrder("newest-first")}
          >
            Newest first
            {sortOrder === "newest-first" && <IconCheck className="h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex cursor-pointer items-center justify-between"
            onClick={() => setSortOrder("oldest-first")}
          >
            Oldest first
            {sortOrder === "oldest-first" && <IconCheck className="h-4 w-4" />}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* View Mode Toggle */}
      <div className="flex items-center gap-2">
        <Button
          variant={viewMode === "grid" ? "secondary" : "ghost"}
          size="icon"
          className={cn(
            "h-8 w-8",
            viewMode === "grid" && "bg-zinc-100 text-zinc-900",
            "hover:bg-zinc-100"
          )}
          onClick={() => setViewMode("grid")}
        >
          <IconLayoutGrid className="h-4 w-4" />
        </Button>
        <Button
          variant={viewMode === "list" ? "secondary" : "ghost"}
          size="icon"
          className={cn(
            "h-8 w-8",
            viewMode === "list" && "bg-zinc-100 text-zinc-900",
            "hover:bg-zinc-100"
          )}
          onClick={() => setViewMode("list")}
        >
          <IconLayoutList className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
