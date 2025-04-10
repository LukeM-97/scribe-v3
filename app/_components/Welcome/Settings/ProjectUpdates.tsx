import React from "react";
import { ScrollArea } from "@/app/_components/ui/SrollArea";
import { Avatar, AvatarFallback } from "@/app/_components/ui/Avatar";

const ProjectUpdates: React.FC = () => {
  const updates = [
    {
      id: 1,
      user: "Maria",
      platform: "Titus",
      date: "02/19/25 04:30",
    },
    {
      id: 2,
      user: "Maria",
      platform: "Titus",
      date: "02/19/25 04:30",
    },
    {
      id: 3,
      user: "Maria",
      platform: "Titus",
      date: "02/19/25 04:30",
    },
    {
      id: 4,
      user: "Maria",
      platform: "Titus",
      date: "02/19/25 04:30",
    },
  ];

  return (
    <div>
      <h3 className="text-sm font-medium mb-2">Updates</h3>
      <ScrollArea className="h-[140px] rounded-md border">
        <div className="p-4">
          {updates.map((update) => (
            <div
              key={update.id}
              className="flex items-center justify-between py-2"
            >
              <div className="flex items-center gap-2">
                <Avatar className="h-5 w-5">
                  <AvatarFallback className="text-xs bg-blue-100 text-blue-800">
                    {update.user.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm">
                  {update.user} on {update.platform}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                {update.date}
              </span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ProjectUpdates;
