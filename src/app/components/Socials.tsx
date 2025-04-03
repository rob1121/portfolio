import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";

const Socials: React.FC<{ className?: string; iconOnly?: boolean }> = ({
  className,
  iconOnly = false,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 w-full justify-center sm:justify-start",
        className
      )}
    >
      <a
        target="_blank"
        href="https://github.com/rob1121/portfolio"
        aria-label="Github"
        title="Visit Github"
        className="flex items-center gap-2 hover:opacity-100 opacity-50 transition duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faGithub} className="size-4" />
        {iconOnly ? null : "https://github.com/rob1121"}
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/robinson-legaspi/"
        aria-label="Linkedin"
        title="Visit Linkedin"
        className="flex items-center gap-2 hover:opacity-100 opacity-50 transition duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faLinkedin} className="size-4" />
        {iconOnly ? null : "https://www.linkedin.com/in/robinson-legaspi/"}
      </a>
      <a
        target="_blank"
        href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=robinson.legaspi@yahoo.com&amp;su=Hey%20Rob!&amp;body=Hi%20Rob,%20"
        aria-label="Email"
        title="Send an email"
        className="flex items-center gap-2 hover:opacity-100 opacity-50 transition duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faEnvelope} className="size-4" />
        {iconOnly ? null : "robinson.legaspi@yahoo.com"}
      </a>
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1rpLxsKeFYwdzbBi68bS7cThCfEMAm5l_/view?usp=sharing"
        aria-label="CV"
        title="Download CV"
        className="flex items-center gap-2 hover:opacity-100 opacity-50 transition duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faDownload} className="size-4" />
        {iconOnly ? null : "Download CV"}
      </a>
    </div>
  );
};

export default Socials;
