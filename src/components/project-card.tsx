import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  links: ProjectLinks;
}

interface ProjectLinks {
  web: string | null;
  github: string;
}

export function ProjectCard({ title, description, tags, links }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {title}
          </CardTitle>
          <div className="font-mono text-xs underline mb-1">
            {links.web && (
              <div><a
                href={links.web}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline break-all mb-1"
              >
                {links.web}
              </a></div>
            )}
            {links.github && (<div><a
              href={links.github}
              target="_blank"
              className="inline-flex items-center gap-1 hover:underline break-all"
            >
              {links.github}
            </a></div>)}
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
      <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
