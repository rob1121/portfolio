import Header from "@/app/components/Header";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const Home: React.FC = () => {
  return (
    <>
      <div className="my-24 w-full flex flex-col items-center space-y-24 min-h-screen overflow-hidden">
        <Header />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;
