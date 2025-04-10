"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/_components/ui/Button";
import { Input } from "@/app/_components/ui/Input";
import { RadioGroup, RadioGroupItem } from "@/app/_components/ui/RadioGroup";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/Select";
import { Separator } from "@radix-ui/react-select";
import ImportProjectDialog from "./ImportDialog";
// import { Separator } from "@/app/_components/ui/Separator";

export default function NewProjectPage() {
  const router = useRouter();
  const [projectName, setProjectName] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [sourceDocument, setSourceDocument] = useState("");
  const [translationType, setTranslationType] = useState("text");
  const [locationDisk, setLocationDisk] = useState(
    "C:\\Users\\me\\example-path"
  );
  const [locationOnline, setLocationOnline] = useState(
    "https://git.doe:43.org/example-repository.git"
  );

  const handleCreateProject = () => {
    // Handle project creation logic here
    router.push("/editor");
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div>
      <div className="mb-6 flex items-center gap-7">
        <h1 className="text-3xl font-bold">New project</h1>
        <ImportProjectDialog />
      </div>

      <div className="mx-auto w-[50%] p-6">
        <div className="space-y-6">
          <div className="text-sm text-[var(--muted-foreground)]">
            <span className="text-[var(--destructive)]">*</span> indicates a
            required field
          </div>

          <div className="space-y-4">
            <div className="flex gap-x-2 items-center">
              <label
                htmlFor="project-name"
                className="font-medium text-sm leading-5 whitespace-nowrap"
              >
                <span className="text-[var(--destructive)]">*</span> Project
                name
              </label>
              <Input
                id="project-name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Enter project name"
              />
            </div>

            <Separator className="my-4" />

            <div className="text-sm font-medium text-[var(--muted-foreground)]">
              Translate from
            </div>

            <div className="flex gap-x-2 items-center">
              <label
                htmlFor="source-language"
                className="font-medium text-sm leading-5 whitespace-nowrap"
              >
                <span className="text-[var(--destructive)]">*</span> Source
                language
              </label>
              <Select value={sourceLanguage} onValueChange={setSourceLanguage}>
                <SelectTrigger id="source-language" className="w-full">
                  <SelectValue placeholder="Select language..." />
                </SelectTrigger>
                <SelectContent>
                  <div className="flex items-center px-2 pb-1 pt-1">
                    <Input placeholder="Search language..." className="h-8" />
                  </div>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="it">Italian</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-x-2 w-full items-center">
              <label
                htmlFor="source-document"
                className="font-medium text-sm leading-5 whitespace-nowrap"
              >
                <span className="text-[var(--destructive)]">*</span> Source
                document
              </label>
              <Input
                id="source-document"
                type="file"
                value={sourceDocument}
                onChange={(e) => setSourceDocument(e.target.value)}
                placeholder="Choose file"
                className="w-full"
              />
            </div>

            <Separator className="my-4" />

            <div className="text-sm font-medium text-[var(--muted-foreground)]">
              Translate into
            </div>

            <div className="flex gap-x-2 items-center">
              <label
                htmlFor="target-language"
                className="font-medium text-sm leading-5 whitespace-nowrap"
              >
                <span className="text-[var(--destructive)]">*</span> Target
                language
              </label>
              <Select value={targetLanguage} onValueChange={setTargetLanguage}>
                <SelectTrigger id="target-language" className="w-full">
                  <SelectValue placeholder="Select language..." />
                </SelectTrigger>
                <SelectContent>
                  <div className="flex items-center px-2 pb-1 pt-1">
                    <Input placeholder="Search language..." className="h-8" />
                  </div>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="it">Italian</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator className="my-4" />

            <div className="text-sm font-medium text-[var(--muted-foreground)]">
              Settings
            </div>

            <div className="flex gap-x-2">
              <label
                htmlFor="layout"
                className="font-medium text-sm leading-5 whitespace-nowrap"
              >
                <span className="text-[var(--destructive)]">*</span> Layout
              </label>
              <RadioGroup
                value={translationType}
                onValueChange={setTranslationType}
                className="text-sm font-medium text-[var(--foreground)]"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="text" id="text" />
                  <label htmlFor="text">Text translation</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="audio" id="audio" />
                  <label htmlFor="audio">Audio translation</label>
                </div>
              </RadioGroup>
            </div>

            <div className="rounded-md bg-[var(--muted)] p-3 text-sm text-[var(--muted-foreground)]">
              How the project will first show. Layout can then be personalised
              at any time.
            </div>

            <div className="grid grid-cols-6">
              <div className="text-left flex items-center">
                {" "}
                <label
                  htmlFor="location-disk"
                  className="font-medium  text-sm leading-5 whitespace-nowrap"
                >
                  Location on disk
                </label>
              </div>

              <div className="flex col-span-5 items-center gap-2">
                <Input
                  id="location-disk"
                  value={locationDisk}
                  onChange={(e) => setLocationDisk(e.target.value)}
                  className="flex-1"
                />
                <Button variant="outline" size="sm">
                  Restore Default
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-6">
              <div className="text-left flex items-center">
                <label
                  htmlFor="location-online"
                  className="font-medium text-sm leading-5 whitespace-nowrap"
                >
                  Location online
                </label>
              </div>
              <div className="flex col-span-5 items-center gap-2">
                <Input
                  id="location-online"
                  value={locationOnline}
                  onChange={(e) => setLocationOnline(e.target.value)}
                  className="flex-1 w-[50%]"
                />
                <Button variant="outline" size="sm">
                  Restore Default
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleCreateProject}>Create project</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
