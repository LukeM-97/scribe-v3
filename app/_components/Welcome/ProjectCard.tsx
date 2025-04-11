"use client";

import { useState, useRef } from "react";
import {
  IconFileText,
  IconHeadphones,
  IconPhoto,
  IconTable,
  IconMap,
  IconDots,
  IconCloudUpload,
  IconUsers,
  IconSettings,
  IconChevronRight,
  IconArrowRight,
  IconPlus,
  IconMovie,
} from "@tabler/icons-react";
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuCheckboxItem,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from "@/app/_components/ui/ContextMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/app/_components/ui/DropdownMenu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/_components/ui/ToolTip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/Popover";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/ui/Avatar";
import { Button } from "@/app/_components/ui/Button";
import { Progress } from "@/app/_components/ui/Progress";
import { cn } from "@/app/_lib/clsx";
import Image from "next/image";
import ProjectSettings from "./Settings/SettingsPopover";

// Types
interface ProjectCardProps {
  title: string;
  sourceLanguage: string;
  sourceCode: string;
  targetLanguage: string;
  targetCode: string;
  lastUpdatedBy: string;
  lastUpdatedOn: string;
  timestamp: string;
  progress: number;
  totalChapters: number;
  translatedChapters: number;
  hasText?: boolean;
  hasAudio?: boolean;
  hasImages?: boolean;
  hasTable?: boolean;
  hasVideo?: boolean;
  hasMap?: boolean;
  onOpen?: () => void;
  className?: string;
}

// Content Type Icons Component
const ContentTypeIcon = ({
  icon: Icon,
  tooltip,
}: {
  icon: React.ElementType;
  tooltip: string;
}) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <div className="flex h-5 w-9 items-center justify-center rounded-full border border-[var(--border)]">
        <Icon className="h-4 w-4" />
      </div>
    </TooltipTrigger>
    <TooltipContent>{tooltip}</TooltipContent>
  </Tooltip>
);

// Language Display Component
const LanguageDisplay = ({
  language,
  code,
}: {
  language: string;
  code: string;
}) => (
  <>
    <span className="text-[var(--muted-foreground)]">{language}</span>
    <span className="rounded-full bg-[var(--secondary)] px-1.5 py-0.5 text-xs font-semibold">
      {code}
    </span>
  </>
);

// Project Header Component
const ProjectHeader = ({
  title,
  sourceLanguage,
  sourceCode,
  targetLanguage,
  targetCode,
  hasText,
  hasAudio,
  hasImages,
  hasTable,
  hasVideo,
  hasMap,
}: Partial<ProjectCardProps>) => (
  <div className="pb-0">
    <h3 className="text-2xl tracking-wide text-[var(--foreground)] font-semibold">
      {title}
    </h3>
    <div className="mt-2 flex items-center gap-2 text-sm">
      <LanguageDisplay language={sourceLanguage!} code={sourceCode!} />
      <IconArrowRight className="h-3 w-3 text-[var(--muted-foreground)]" />
      <LanguageDisplay language={targetLanguage!} code={targetCode!} />
    </div>

    <div className="mt-2 flex gap-2">
      {hasText && (
        <ContentTypeIcon icon={IconFileText} tooltip="Contains Text" />
      )}
      {hasAudio && (
        <ContentTypeIcon icon={IconHeadphones} tooltip="Contains Audio" />
      )}
      {hasImages && (
        <ContentTypeIcon icon={IconPhoto} tooltip="Contains Images" />
      )}
      {hasTable && (
        <ContentTypeIcon icon={IconTable} tooltip="Contains Table" />
      )}
      {hasVideo && (
        <ContentTypeIcon icon={IconMovie} tooltip="Contains Video" />
      )}
      {hasMap && <ContentTypeIcon icon={IconMap} tooltip="Contains Maps" />}
    </div>
  </div>
);

// Project Actions Component
const ProjectActions = ({ onOpen }: { onOpen?: () => void }) => (
  <div className="flex gap-2">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-md shadow-none"
        >
          <IconCloudUpload className="h-5 w-5" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Sync</TooltipContent>
    </Tooltip>

    <CollaboratorsPopover />
    <ProjectSettingsDropdown />

    <div className="ml-auto">
      <Button
        variant="default"
        className="rounded-md bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700"
        onClick={onOpen}
      >
        Open
      </Button>
    </div>
  </div>
);

// Collaborators Popover Component
const CollaboratorsPopover = () => (
  <Tooltip>
    <Popover>
      <PopoverTrigger asChild>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-md shadow-none"
          >
            <IconUsers className="h-5 w-5" />
          </Button>
        </TooltipTrigger>
      </PopoverTrigger>
      <PopoverContent className="w-60">
        <div className="space-y-2">
          {collaborators.map((collab) => (
            <div
              key={collab.name}
              className="flex items-center gap-2 rounded-md p-2 hover:bg-muted"
            >
              <Avatar className="h-6 w-6">
                <AvatarFallback
                  className={cn("text-xs text-white", collab.gradient)}
                >
                  {collab.initials}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm">{collab.name}</span>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
    <TooltipContent>Collaborators</TooltipContent>
  </Tooltip>
);

// Project Settings Dropdown Component
const ProjectSettingsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Tooltip>
      <ProjectSettings />
      <TooltipContent>Settings</TooltipContent>
    </Tooltip>
  );
};

// Progress Bar Component
const ProgressBar = ({
  progress,
  translatedChapters,
  totalChapters,
}: {
  progress: number;
  translatedChapters: number;
  totalChapters: number;
}) => {
  const [showProgressTooltip, setShowProgressTooltip] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleProgressMouseEnter = () => {
    if (progressTimeoutRef.current) {
      clearTimeout(progressTimeoutRef.current);
    }
    progressTimeoutRef.current = setTimeout(() => {
      setShowProgressTooltip(true);
    }, 100);
  };

  const handleProgressMouseLeave = () => {
    if (progressTimeoutRef.current) {
      clearTimeout(progressTimeoutRef.current);
    }
    setShowProgressTooltip(false);
  };

  return (
    <div
      className="relative mt-4"
      onMouseEnter={handleProgressMouseEnter}
      onMouseLeave={handleProgressMouseLeave}
      ref={progressRef}
    >
      <Progress value={progress} className="h-2 bg-[var(--secondary)]" />
      {showProgressTooltip && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-popover px-3 py-1.5 text-sm shadow-md">
          {translatedChapters} / {totalChapters} chapters translated
        </div>
      )}
    </div>
  );
};

// Collaborators data
const collaborators = [
  {
    name: "(me) Léo",
    initials: "LÉ",
    gradient: "bg-gradient-to-br from-pink-400 to-purple-400",
  },
  {
    name: "Maria",
    initials: "MA",
    gradient: "bg-gradient-to-br from-blue-400 to-indigo-400",
  },
  {
    name: "Awesome_translator",
    initials: "AT",
    gradient: "bg-gradient-to-br from-green-400 to-teal-400",
  },
  {
    name: "francisco",
    initials: "FR",
    gradient: "bg-gradient-to-br from-orange-400 to-red-400",
  },
  {
    name: "Fatima",
    initials: "FA",
    gradient: "bg-gradient-to-br from-yellow-400 to-amber-400",
  },
];

// Main ProjectCard Component
export function ProjectCard({
  title,
  sourceLanguage,
  sourceCode,
  targetLanguage,
  targetCode,
  lastUpdatedBy,
  lastUpdatedOn,
  timestamp,
  progress,
  totalChapters,
  translatedChapters,
  hasText = true,
  hasAudio = false,
  hasImages = false,
  hasTable = false,
  hasMap = false,
  hasVideo = false,
  onOpen,
  className,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [contextMenuOpen, setContextMenuOpen] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null
  );

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setPosition({ x: event.clientX, y: event.clientY });
    setOpen(true);
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger
        className={cn(
          "rounded-lg p-4 border border-zinc-200 bg-card shadow-sm",
          className
        )}
      >
        <ProjectHeader
          title={title}
          sourceLanguage={sourceLanguage}
          sourceCode={sourceCode}
          targetLanguage={targetLanguage}
          targetCode={targetCode}
          hasText={hasText}
          hasAudio={hasAudio}
          hasImages={hasImages}
          hasTable={hasTable}
          hasVideo={hasVideo}
          hasMap={hasMap}
        />

        <div className="mt-2 aspect-video relative h-[78px] w-full overflow-hidden">
          <Image
            src="/images/project.jpg"
            alt="Project background"
            className="h-full w-full object-cover"
            fill
          />
        </div>

        <div className="pt-2">
          <div className="flex items-center justify-between text-sm text-[var(--muted-foreground)]">
            <div className="flex items-center gap-2">
              <span>Last update by</span>
              <Avatar className="h-5 w-5">
                <AvatarImage
                  src="/placeholder.svg?height=20&width=20"
                  alt={lastUpdatedBy}
                />
                <AvatarFallback className="text-xs">
                  {lastUpdatedBy.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <span className="text-[var(--foreground)]">{lastUpdatedBy}</span>
              <span>on</span>
              <span className="text-[var(--foreground)]">{lastUpdatedOn}</span>
            </div>
            <span className="text-[var(--muted-foreground) text-xs">
              {timestamp}
            </span>
          </div>

          <ProjectActions onOpen={onOpen} />
          <ProgressBar
            progress={progress}
            translatedChapters={translatedChapters}
            totalChapters={totalChapters}
          />
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>Share</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>Save as...</ContextMenuItem>
            <ContextMenuItem>Export PDF</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuItem inset>Rename</ContextMenuItem>
        <ContextMenuItem inset>Duplicate</ContextMenuItem>
        <ContextMenuItem inset>
          More settings...
          <IconDots className="ml-auto h-4 w-4" />
        </ContextMenuItem>

        <ContextMenuSeparator />
        <div className="text-[var(--destructive)]/90  px-2 py-1.5 pl-8 text-sm cursor-default hover:bg-[var(--accent)] hover:text-red-600">
          Delete
        </div>
      </ContextMenuContent>
    </ContextMenu>
  );
}

// New Project Card Component
export function NewProjectCard({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="flex min-h-[300px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed bg-card p-6 shadow-sm transition-colors hover:bg-muted/50"
      onClick={onClick}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
        <IconPlus className="h-6 w-6" />
      </div>
      <span className="mt-4 text-lg font-medium">New project</span>
    </div>
  );
}
