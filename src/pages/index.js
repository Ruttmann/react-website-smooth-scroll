import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
    </>
  );
}

export default Home;
