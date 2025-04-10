import React, { useState } from "react";
import { Button } from "@/app/_components/ui/Button";
import { Input } from "@/app/_components/ui/Input";
import { IconExternalLink } from "@tabler/icons-react";

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
      <div>
        <h3 className="text-sm font-medium mb-2">Location online</h3>
        <Input
          value={onlineLocation}
          onChange={(e) => setOnlineLocation(e.target.value)}
          className="text-sm text-muted-foreground font-mono mb-2"
        />
        <Button variant="outline" size="sm" className="gap-2 text-xs">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
          >
            <path
              d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          See location
          <IconExternalLink className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
};

export default LocationSection;
