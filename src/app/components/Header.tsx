import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { cn } from "@/lib/utils";
import Socials from "./Socials";

const Header: React.FC = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-12 w-full gap-4 py-8 lg:py-16"
      id="home"
    >
      <div className="flex flex-col lg:col-span-6 space-y-4">
        <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full w-fit">
          <span className="animate-wave mr-2">👋</span>
          <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Welcome to my portfolio
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold">
          Hi, I&apos;m{" "}
          <SparklesText
            text="Robinson Legaspi"
            className="text-4xl sm:text-6xl font-bold"
          />
        </h1>
        <h2 className="text-3xl sm:text-5xl font-semibold text-gray-700 dark:text-gray-300">
          Lead Frontend Engineer
        </h2>
        <Socials />
      </div>
      <div className="relative lg:col-span-6">
        <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-2xl lg:mt-24 leading-relaxed">
          With over a decade of experience in{" "}
          <SparklesText
            text="frontend development"
            className="italic text-lg sm:text-2xl dark:text-white"
          />
          . Passionate about crafting seamless, dynamic, and pixel-perfect
          experiences—transforming ideas into elegant solutions.
        </p>
        <div className="absolute top-4 -right-12 w-3/4 h-full opacity-50">
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
