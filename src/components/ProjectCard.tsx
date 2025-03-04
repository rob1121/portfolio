import { Project } from "@/types";
import { Badge } from "./ui/badge";

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "./ui/morphing-dialog";
import { PlusIcon } from "lucide-react";

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  image,
  link,
  techStack,
}) => {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: "12px",
        }}
        className="flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
      >
        <MorphingDialogImage
          src={`/projects/${image}`}
          alt={title}
          className="h-48 w-full object-cover"
        />
        <div className="flex grow flex-row items-end justify-between px-3 py-2">
          <div>
            <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50">
              {title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400 line-clamp-3">
              {description}
            </MorphingDialogSubtitle>
          </div>
          <button
            type="button"
            className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
            aria-label="Open dialog"
          >
            <PlusIcon size={12} />
          </button>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: "24px",
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
        >
          <MorphingDialogImage
            src={`/projects/${image}`}
            alt={title}
            className="h-full w-full"
          />
          <div className="p-6 flex flex-col gap-4">
            <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
              {title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400 line-clamp-3">
              {description}
            </MorphingDialogSubtitle>
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </div>
              <a
                className="mt-4 inline-flex text-zinc-500 underline"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link}
              </a>
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose className="text-zinc-50" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
};

export default ProjectCard;
