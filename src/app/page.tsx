import Aboutme from "@/components/Aboutme";
import Contact from "@/components/Contact";
import Herosection from "@/components/Herosection";
import Project from "@/components/project";
import Tape from "@/components/Tape";
export default function Home() {
  return (
    <div>
      <Herosection />
      <Project />
      <Tape />
      <Aboutme />
      <Contact/>
    </div>
  );
}
