import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/index";

import Image from "next/image";
import { FaHome } from "react-icons/fa";
import UsedTech from "@/components/UsedTech";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Playlist from "@/components/Playlist";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
export default function Home() {

 
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 scroll-px-1.5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <UsedTech/>
        <RecentProjects />
        <Client />
        <Experience />
        <Playlist />
        <Approach/>
        <Footer/>
        </div>
          

    </main>
  );
}
