import Link from "next/link";
import Socials from "./Socials";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-4 w-screen">
      <div className="container max-w-5xl px-4 text-center text-white">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-2xl font-bold">Robinson Legaspi</h2>
            <Socials />
          </div>
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-2xl font-bold">Quick Links</h2>
            <div className="flex flex-col gap-2 items-start">
              <Link href="#home">Home</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </div>
        </div>
        <p className="mt-24">
          &copy; {new Date().getFullYear()} Robinson Legaspi. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
