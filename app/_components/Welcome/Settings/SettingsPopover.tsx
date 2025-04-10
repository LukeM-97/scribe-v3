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
import { IconShare, IconTrash, IconDots } from "@tabler/icons-react";
import { toast } from "sonner";

import ProjectUpdates from "./ProjectUpdates";
import LocationSection from "./LocationSection";

const ProjectSettings: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState(
    "fral.SG1910eb_teamA_first-try_longername"
  );
  const [projectDescription, setProjectDescription] = useState(
    "Say something about your project. This is displayed on the Projects list."
  );

  const handleDelete = () => {
    toast.error("This would delete the project", {
      description: "This action cannot be undone.",
    });
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="w-24 flex items-center justify-center"
        >
          <IconDots className="h-4 w-4 mr-2" />
          Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[600px] p-0" align="start">
        <Card className="border-0 shadow-none">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl font-semibold">
              Project settings
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Project Name Section */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Input
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="font-medium text-sm"
                  />
                  <Button size="icon" variant="outline" className="h-8 w-8">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                    >
                      <path
                        d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                  Manage project
                </div>
              </div>
            </div>

            <Separator />

            {/* Share Section */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <Button variant="outline" className="gap-2">
                  <IconShare className="h-4 w-4" />
                  Share
                </Button>
                <Button variant="outline" className="gap-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                  >
                    <path
                      d="M8.51194 3.00541C9.18829 2.54594 10.0435 2.53694 10.6788 2.95419C10.8231 3.04893 10.9771 3.1993 11.389 3.61119L12.2764 4.49856L12.2765 4.49873C12.6366 4.85885 12.8167 5.03897 12.9232 5.24563C13.0975 5.61488 13.0999 6.03488 12.9294 6.40284C12.8644 6.53265 12.7669 6.65843 12.6033 6.82201L12.6008 6.82451L11.4765 7.94873C11.2517 8.17361 10.9688 8.29481 10.6716 8.29481C10.3412 8.29481 10.0298 8.14606 9.80477 7.86273C9.79289 7.84847 9.78181 7.83401 9.77008 7.81919C9.5766 7.58533 9.67899 7.26588 9.91366 7.13749C10.047 7.06337 10.2064 7.06435 10.339 7.14265C10.3731 7.1655 10.4023 7.19781 10.4207 7.22215C10.4309 7.2352 10.4375 7.24515 10.4411 7.25122C10.4455 7.25705 10.4466 7.25912 10.4466 7.25912C10.4466 7.25912 10.4449 7.25673 10.4427 7.25357C10.4371 7.24557 10.431 7.2394 10.4264 7.23457C10.4112 7.23051 10.3717 7.22244 10.3235 7.22244C10.2925 7.22244 10.2582 7.22941 10.2185 7.25175L10.2067 7.25912L9.05663 8.40912C8.85612 8.60964 8.85612 8.93622 9.05663 9.13673C9.25714 9.33724 9.58372 9.33724 9.78423 9.13673L10.9343 7.98673L10.9467 7.97427C11.2708 7.62698 11.2568 7.09459 10.9343 6.77209C10.7715 6.6093 10.739 6.57682 10.7115 6.54478C10.6918 6.52145 10.6737 6.48691 10.6737 6.43358C10.6737 6.36478 10.7132 6.30899 10.7525 6.28063C10.7858 6.25695 10.8255 6.24461 10.8683 6.24461C10.9121 6.24461 10.9515 6.25581 10.9837 6.27518C11.0154 6.29375 11.0503 6.32382 11.1387 6.41218L11.1482 6.42128L11.1481 6.42129L11.1491 6.42128L12.2765 5.29384C12.3585 5.21103 12.4177 5.15054 12.4675 5.09229C12.5277 5.02141 12.5391 4.98287 12.5425 4.96218C12.5571 4.8247 12.5162 4.686 12.4355 4.57576C12.4064 4.53525 12.3505 4.47955 12.1631 4.29226L11.2946 3.42371C10.922 3.05112 10.8034 2.95758 10.7208 2.90387C10.4009 2.69563 9.989 2.6975 9.6558 2.89844C9.54126 2.96537 9.42669 3.0656 9.10271 3.38917L9.0918 3.40006L7.99429 4.49748C7.8876 4.60413 7.8335 4.74252 7.8335 4.88628C7.8335 5.02972 7.8874 5.16782 7.99376 5.27432C8.10012 5.38082 8.23835 5.43471 8.38195 5.43471C8.52586 5.43471 8.66438 5.38066 8.77071 5.27398L9.89321 4.15148C9.91625 4.12844 9.95692 4.09454 10.0148 4.06518C10.0272 4.05852 10.0497 4.04844 10.0691 4.04844C10.0736 4.04844 10.0864 4.04812 10.0992 4.05745C10.1064 4.06358 10.1161 4.07654 10.1161 4.10399C10.1161 4.12182 10.1086 4.13559 10.1046 4.14179C10.0771 4.18366 10.043 4.21272 10.0127 4.243L8.8902 5.3655C8.59333 5.66237 8.17553 5.83471 7.7402 5.83471C7.30458 5.83471 6.88662 5.6623 6.58971 5.36537C6.29276 5.06841 6.1204 4.65034 6.1204 4.21465C6.1204 3.77921 6.29263 3.3614 6.58932 3.06466L7.68225 1.97173C7.90219 1.75178 8.00731 1.64668 8.13099 1.55699C8.23783 1.4783 8.36162 1.42566 8.51194 1.42566V3.00541ZM8.51194 1.42566C8.66226 1.42566 8.78606 1.4783 8.8929 1.55699C9.01658 1.64668 9.12169 1.75178 9.34163 1.97173L9.34331 1.97341L11.1707 3.80081C11.3907 4.02079 11.4957 4.12578 11.5855 4.24924C11.6644 4.35694 11.7267 4.48235 11.7267 4.6249C11.7267 4.77324 11.6693 4.90323 11.5915 5.01108C11.502 5.13558 11.3915 5.24603 11.1707 5.46682L10.0262 6.61131C9.59876 7.03876 8.93866 7.10727 8.4402 6.77773L8.42081 6.76451C8.40611 6.75491 8.36535 6.73449 8.31237 6.73449C8.25365 6.73449 8.19539 6.76432 8.15946 6.7977C8.12212 6.83236 8.09335 6.88744 8.09335 6.95349C8.09335 7.01113 8.12027 7.05275 8.15005 7.08342C8.18293 7.1174 8.22386 7.13865 8.25443 7.15146L8.32223 7.18334C8.41805 7.22659 8.69336 7.34519 8.95169 7.60353C9.31254 7.96438 9.31545 8.50155 8.95169 8.8653L7.80731 10.01L7.80726 10.01C7.58928 10.2279 7.48478 10.3324 7.36149 10.4224C7.25485 10.5011 7.13133 10.5538 6.98109 10.5538C6.83085 10.5538 6.70734 10.5011 6.6007 10.4224C6.4774 10.3324 6.3729 10.2279 6.15493 10.01L4.34221 8.19726C4.12227 7.97733 4.01716 7.87222 3.92748 7.74854C3.8488 7.6417 3.79615 7.51791 3.79615 7.36759C3.79615 7.21727 3.8488 7.09348 3.92748 6.98664C4.01716 6.86296 4.12227 6.75784 4.34221 6.5379L5.45181 5.4283C5.68396 5.19615 5.7967 5.08341 5.932 5.00391C6.03644 4.94499 6.14958 4.90762 6.26733 4.89278C6.3246 4.88469 6.38849 4.88263 6.45019 4.88263L6.513 4.88263C6.57567 4.88263 6.619 4.87743 6.6557 4.86474C6.69251 4.85203 6.72744 4.83062 6.76044 4.79809C6.79312 4.76588 6.81402 4.73163 6.82634 4.69602C6.83861 4.66054 6.84367 4.6187 6.84367 4.5575C6.84367 4.49643 6.8386 4.45459 6.82631 4.41903C6.81397 4.38334 6.79304 4.34904 6.76026 4.31679C6.72714 4.28414 6.69204 4.26267 6.65506 4.24992C6.61817 4.23719 6.57465 4.23198 6.51178 4.23198L6.44965 4.23198C6.38795 4.23198 6.32397 4.22992 6.26675 4.22183C6.14908 4.20699 6.03603 4.1697 5.93167 4.11087C5.79644 4.03144 5.68374 3.91879 5.45169 3.68675L4.34221 2.57726C4.12227 2.35732 4.01716 2.25221 3.92748 2.12853C3.8488 2.02169 3.79615 1.8979 3.79615 1.74758C3.79615 1.59726 3.8488 1.47347 3.92748 1.36663C4.01716 1.24295 4.12227 1.13784 4.34221 0.917889L4.34389 0.916211L6.17129 0.0147491C8.53219 0.0147491 8.51194 1.42566 8.51194 1.42566Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Edit rights
                </Button>
              </div>
              <div className="text-sm mb-4 py-2 px-3 bg-muted rounded-md">
                Translated
              </div>
              <div className="flex items-center justify-between">
                {/* <Badge
                  variant="outline"
                  className="px-3 py-1 border-primary/20 text-muted-foreground"
                >
                  87 / 172 chapters
                </Badge> */}
              </div>
            </div>

            <Separator />

            {/* Description Section */}
            <div>
              <h3 className="text-sm font-medium mb-2">Description</h3>
              <Textarea
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                className="min-h-24 resize-none"
              />
            </div>

            {/* Location Sections */}
            <LocationSection />

            <Separator />

            {/* Updates Section */}
            <ProjectUpdates />
          </CardContent>

          <CardFooter className="pt-4 pb-6 flex justify-end">
            <Button
              variant="destructive"
              onClick={handleDelete}
              className="gap-2"
            >
              <IconTrash className="h-4 w-4" />
              Delete project
            </Button>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

export default ProjectSettings;
