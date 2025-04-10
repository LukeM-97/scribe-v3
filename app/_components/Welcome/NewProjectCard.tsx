import { Card, CardContent } from "@/app/_components/ui/Card";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";

export default function NewProjectCard() {
  return (
    <Link href="/new-project">
      <Card className="flex h-64 cursor-pointer items-center justify-center border border-gray-300 bg-white transition-colors hover:border-zinc-400 hover:bg-zinc-50">
        <CardContent className="flex items-center justify-center gap-4 p-6">
          <IconPlus className="h-5 w-5 text-gray-500" />

          <p className="text-lg font-medium">New project</p>
        </CardContent>
      </Card>
    </Link>
  );
}
