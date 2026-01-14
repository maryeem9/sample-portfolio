import { BackgroundAnimations } from "../Components/Background";
import { Navbar } from "../Components/Navbar";
import { ThemeToggle } from "../Components/ThemeToggle";
import { MainSection } from "../Components/MainSection";
import { AboutSection } from "@/Components/About";
import { Skills } from "../Components/Skills";
import { Project } from "../Components/Project";
import { Contact } from "../Components/Contact";
import { Footer } from "../Components/footer";
 
export const Home = () => {
  return (
    <div className=" min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Theme Toggle*/}
      <ThemeToggle />
      {/*Background effects*/}
      <BackgroundAnimations />

      {/*Navbar*/}
      <Navbar />

      {/*Main section*/}
      <main>    
        <MainSection />
        <AboutSection/>
        <Skills/>
        <Project/>
        <Contact/>
      </main>
      {/*Footer*/}
      <Footer />
    </div>
  );
};

export default Home;
