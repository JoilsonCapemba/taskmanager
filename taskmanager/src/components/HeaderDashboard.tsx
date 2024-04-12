import Image from "next/image";

export function HeaderDashnoard(){
  return(
      <header className="h-[72px] bg-[#363041] flex items-center justify-between pl-8 pr-8">
        <div>
          <div className="text-white">Add Task</div>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/img/MaskGroup.png" alt="avatar" width={52} height={52}/>
          <div className="text-sm flex flex-col ">
            <p className="text-white">Antonio Gabriel</p>
            <a href="" className="text-[#B4ACF9]">My account</a>
          </div>
        </div>
      </header>
  )
}