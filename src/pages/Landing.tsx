import { useEffect, useState } from "react";
import Home from "@/scenes/home";
import OurClasses from "@/scenes/ourClasses";
import Benefits from "@/scenes/benefits";
import ContactUs from "@/scenes/contactUs";
import LogIn from "@/scenes/logIn";
import Navbar from "@/scenes/navbar";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export const Landing = ({ selectedPage, setSelectedPage }: Props) => {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Landing);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <>
        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage} />
        <ContactUs setSelectedPage={setSelectedPage} />
        <LogIn setSelectedPage={setSelectedPage} />
      </>
    </>
  );
}

export default Landing;
