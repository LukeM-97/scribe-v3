import React, { useState } from "react";
import { Button } from "@/app/_components/ui/Button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/Popover";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/Card";
import { Separator } from "@/app/_components/ui/Separator";
import { Input } from "@/app/_components/ui/Input";
import { Textarea } from "@/app/_components/ui/TextArea";
// import { Badge } from "@/app/_components/ui/Badge";
import {
  IconShare,
  IconTrash,
  IconDots,
  IconUserEdit,
  IconExternalLink,
  IconPencil,
  IconCheck,
} from "@tabler/icons-react";
import { toast } from "sonner";

import ProjectUpdates from "./ProjectUpdates";
import LocationSection from "./LocationSection";
import { Badge } from "../../ui/Badge";
import { TooltipTrigger } from "@/app/_components/ui/ToolTip";
import { Sheet } from "../../ui/Sheet";
import { SheetContent } from "../../ui/Sheet";
import { SheetTrigger } from "../../ui/Sheet";
import { ScrollArea } from "../../ui/SrollArea";
import { Progress } from "../../ui/Progress";

const ProjectSettings: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState(
    "fral.SG1910eb_teamA_first-try_longername"
  );

  const [projectDescription, setProjectDescription] = useState(
    "Say something about your project. This is displayed on the Projects list."
  );
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const handleDelete = () => {
    toast.error("This would delete the project", {
      description: "This action cannot be undone.",
    });
  };

  const handleTitleEdit = () => {
    setIsEditingTitle(true);
  };

  const handleTitleSave = () => {
    setIsEditingTitle(false);
    toast.success("Project title updated", {
      description: "Your changes have been saved",
    });
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleTitleSave();
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="w-10 h-10 flex shadow-none items-center justify-center"
          >
            <IconDots className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
      </SheetTrigger>
      <SheetContent className="w-[40vw] pt-10">
        <ScrollArea className="h-full">
          <div className="border-0 relative shadow-none">
            <div className="space-y-4">
              {/* Project Name Section */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    {isEditingTitle ? (
                      <div className="flex items-center w-full">
                        <Input
                          value={projectName}
                          onChange={(e) => setProjectName(e.target.value)}
                          className="font-medium text-sm"
                          autoFocus
                          onKeyDown={handleTitleKeyDown}
                        />
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8 ml-2"
                          onClick={handleTitleSave}
                        >
                          <IconCheck className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between w-full">
                        <h3 className="text-sm font-medium  text-[var(--foreground)]">
                          {projectName}
                        </h3>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8"
                          onClick={handleTitleEdit}
                          aria-label="Edit project title"
                        >
                          <IconPencil className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-[var(--muted-foreground)]">
                    Manage project
                  </div>
                </div>
              </div>
              {/* Share Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Button
                    variant="outline"
                    className="gap-2 text-[var(--secondary-foreground)] bg-[var(--secondary)]"
                  >
                    <IconShare className="h-4 w-4" />
                    Share
                  </Button>
                  <Button
                    variant="ghost"
                    className="gap-2 text-[var(--secondary-foreground)]"
                  >
                    <IconUserEdit className="h-4 w-4" />
                    Edit rights
                    <IconExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-sm text-[var(--foreground)] font-medium">
                  Translated
                </h3>
                <div className="flex mt-1 items-center justify-between">
                  <Badge
                    variant="outline"
                    className="px-3 py-2 text-xs rounded-full w-full relative border-primary/20 bg-[var(--secondary)] text-[var(--muted-foreground)]"
                  >
                    87 / 172 chapters
                    <Progress
                      value={57}
                      max={172}
                      className="w-full h-2 absolute bottom-0 rounded-t-lg left-0 bg-[var(--secondary)]"
                    />
                  </Badge>
                </div>
              </div>

              {/* Description Section */}
              <div>
                <h3 className="text-sm font-medium mb-2">Description</h3>
                <Textarea
                  placeholder="Say something about your project. This is displayed on the Projects list."
                  className="min-h-24 resize-none"
                />
              </div>

              {/* Location Sections */}
              <LocationSection />

              <Separator />

              {/* Updates Section */}
              <ProjectUpdates />
            </div>

            <div className="pt-4 fixed right-3 py-3 bottom-0 flex justify-end">
              <Button
                variant="destructive"
                onClick={handleDelete}
                className="gap-2 text-[var(--primary-foreground)] hover:text-white"
              >
                <IconTrash className="h-4 w-4" />
                Delete project
              </Button>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default ProjectSettings;
