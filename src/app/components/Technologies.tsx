import { Marquee } from "@/components/magicui/marquee";
import { techStack } from "@/constant/techStack";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Technologies: React.FC = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden opacity-75">
      <Marquee className="flex w-full" pauseOnHover>
        {techStack.map((tech, index) => (
          <div key={index} className="mx-8 flex items-center gap-2 font-bold">
            <Image
              src={`/svg/${tech.icon}.svg`}
              alt={tech.name}
              width={32}
              height={32}
              className={cn(
                "rounded",
                tech.icon === "next-js" && "bg-white rounded-full"
              )}
            />
            {tech.name}
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
};

export default Technologies;
