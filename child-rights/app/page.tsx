import About from "@/components/About";
import { DiagnosticTest } from "@/components/DiagnosticTest";
import FooterPage from "@/components/Footer";
import Game from "@/components/Game";
import HomePage from "@/components/home";
import Prac from "@/components/Info";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomePage />
      <About />
      <Prac/>
      <FooterPage/>
    </div>
  );
}
