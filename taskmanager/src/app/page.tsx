import { ButtonNormal } from "@/components/ButtonNormal";
import { Logo } from "@/components/Logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen bg-[#2E2938] ">
      <header className="p-14 flex justify-between">
        <Logo />
        <nav className="flex gap-x-11 text-white">
          <a href="">About us</a>
          <a href="">cases</a>
          <a href="">Resources</a>
        </nav>     
        <ButtonNormal title="Sign In"/>
      </header>

      

    </main>
  );
}
