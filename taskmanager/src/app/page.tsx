import { ButtonNormal } from "@/components/ButtonNormal";
import { Logo } from "@/components/Logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen p-14 bg-[#2E2938] ">
      <header className="flex justify-between">
        <Logo />
        <nav className="flex gap-x-11 text-white">
          <a className="hover:text-[#B4ACF9]" href="">About us</a>
          <a className="hover:text-[#B4ACF9]" href="">cases</a>
          <a className="hover:text-[#B4ACF9]" href="">Resources</a>
        </nav>     
        <ButtonNormal title="Sign In"/>
      </header>

      <section className="max-w-[608px]">
        <div className="font-bold text-[44px] text-white mb-4">
          <span className="text-[#B4ACF9]">Creative Digital</span> Design Agency is looking for new talent
        </div>
        <div className="text-white text-lg">Creative Digital Design Agency is looking for new talent</div>
        <ButtonNormal title="Sign Up"/>
      </section>


    </main>
  );
}
