"use client";

import { useState } from "react";
import { Button } from "@/app/_components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/Dialog";
import { Input } from "@/app/_components/ui/Input";
import { Separator } from "@/app/_components/ui/Separator";

interface ImportProjectDialogProps {
  onImport?: (data: { type: "online" | "local"; value: string }) => void;
}

export default function ImportProjectDialog({
  onImport,
}: ImportProjectDialogProps) {
  const [repoUrl, setRepoUrl] = useState(
    "https://git.door43.org/example-repository.git"
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleImport = () => {
    if (repoUrl && onImport) {
      onImport({ type: "online", value: repoUrl });
    } else if (selectedFile && onImport) {
      onImport({ type: "local", value: selectedFile.name });
    }

    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="bg-zinc-100 hover:bg-zinc-200"
        >
          Import project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Import project</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div className="space-y-2">
            <div className="font-medium text-sm">Online project</div>
            <Input
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              placeholder="https://git.example.org/repository.git"
            />
            <p className="text-sm text-[var(--muted-foreground)]">
              Import from an online address (any Git repository).
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-2 text-[var(--muted-foreground)]">
                OR
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-medium text-sm">Local project</div>
            <Button
              variant="outline"
              className="w-full justify-start text-[var(--muted-foreground)]"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              Choose file
            </Button>
            <Input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setSelectedFile(e.target.files[0]);
                }
              }}
            />
            <p className="text-sm text-[var(--muted-foreground)]">
              Import from your computer.
            </p>
          </div>

          <div className="flex justify-end">
            <Button className="ml-auto" onClick={handleImport}>
              Import
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
