import React, { useState } from "react";
import { Button } from "@/app/_components/ui/Button";
import { Input } from "@/app/_components/ui/Input";
import { IconExternalLink, IconCloud } from "@tabler/icons-react";

const LocationSection: React.FC = () => {
  const [diskLocation, setDiskLocation] = useState(
    "C:\\Users\\me\\example-path_longername"
  );
  const [onlineLocation, setOnlineLocation] = useState(
    "https://git.door43.org/example-repository.git"
  );

  return (
    <div className="space-y-4">
      {/* Location on disk Section */}
      <div>
        <h3 className="text-sm font-medium mb-2">Location on disk</h3>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-xs">
            Choose Folder
          </Button>
          <Input
            value={diskLocation}
            onChange={(e) => setDiskLocation(e.target.value)}
            className="text-sm text-muted-foreground font-mono"
          />
        </div>
      </div>

      {/* Location online Section */}
      <div className="flex flex-col">
        <h3 className="text-sm font-medium mb-2">Location online</h3>
        <Input
          value={onlineLocation}
          onChange={(e) => setOnlineLocation(e.target.value)}
          className="text-sm text-muted-foreground font-mono mb-2"
        />
        <Button variant="ghost" size="sm" className="gap-2 mx-auto text-xs">
          <IconCloud className="h-3.5 w-3.5" />
          See location
          <IconExternalLink className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
};

export default LocationSection;
