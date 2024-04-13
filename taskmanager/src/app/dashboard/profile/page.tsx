import { HeaderDashnoard } from "@/components/HeaderDashboard";
import { HeaderTask } from "@/components/HeaderTask";
import Image from "next/image";

export default function Profile(){
  return(
    <main className="h-screen bg-[#2E2938] text-white">
      <HeaderDashnoard />

      <div className="max-w-[611px] mx-auto mt-24">
        <HeaderTask title="My profile" description="preview my informations"/>

        <div className="flex items-center gap-2 mb-6">
          <Image src="/img/MaskGroup.png" alt="avatar" width={96} height={96}/>
          <div className="flex flex-col ">
            <p className="text-xl text-white">Antonio Gabriel</p>
            <a href="" className="text-sm text-[#B4ACF9]">My account</a>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xs">Display name</p>
            <p className="mb-3">Margarida Andrade</p>

            <p className="text-xs">Email</p>
            <p>margaridaandrade@gmail.com</p>
          </div>

          <Image src="/img/Vector.svg" alt="avatar" width={147} height={155}/>
        </div>

        <button className="h-[60px] w-[381px]  bg-[#363041] rounded-md text-[#fff]">sign out</button>
      </div>
    </main>
  )
}