"use client";

import { useState } from "react";
import { IconSettings } from "@tabler/icons-react";
import { Button } from "./ui/Button";

export default function Navbar() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <nav className="border-b fixed h-14 flex items-center px-6 top-0 z-20 w-screen border-gray-200 bg-white">
      {/* <div className="flex items-center gap-4">
          <Button variant="outline" size="icon">
            <IconChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5">
            <span className="font-medium">Projects</span>
          </div>
        </div> */}
      {/* <Button variant="outline" size="sm">
            Saved
          </Button>
          <Button variant="outline" size="sm">
            Synced
          </Button> */}
      <Button
        className="bg-zinc-100 ml-auto text-zinc-900 hover:bg-zinc-200"
        size="icon"
      >
        <IconSettings className="h-5 w-5" />
      </Button>

      {/* <div className="flex items-center justify-between border-t border-gray-200 px-4 py-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <IconArrowBackUp className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <IconArrowForwardUp className="h-4 w-4" />
          </Button>
          <div className="h-4 w-px bg-gray-200" />
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <IconScissors className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <IconCopy className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <IconClipboard className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Layout
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Default</DropdownMenuItem>
              <DropdownMenuItem>Compact</DropdownMenuItem>
              <DropdownMenuItem>Wide</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center rounded-md border border-gray-200 p-1">
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="icon"
              className="h-7 w-7"
              onClick={() => setViewMode("grid")}
            >
              <IconLayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="icon"
              className="h-7 w-7"
              onClick={() => setViewMode("list")}
            >
              <IconLayoutList className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div> */}
    </nav>
  );
}
