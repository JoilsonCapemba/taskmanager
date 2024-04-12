import { HeaderDashnoard } from "@/components/HeaderDashboard";
import { Task } from "@/components/Task";

export default function Dashboard(){
  return(
    <main className="h-screen bg-[#2E2938] text-white">
      <HeaderDashnoard />
      <div className="max-w-[1004px] flex flex-col mx-auto gap-3 mt-[82px]">

        <p className="text-white text-2xl font-bold">My Tasks</p>

        <p className="mb-4 text-[18px]">Register your tasks and have a better monitoring of your activities</p>

        <form action="" className="w-full bg-[#363041] flex rounded-md h-[60px] mb-6">
          <button className="p-2"><img src="/img/bx-search.svg" alt="" /></button>
          <input type="search" placeholder="find of tasks" className="w-full bg-transparent text-xs font-medium"/>
        </form>

        <p className="text-white font-bold">Tasks - <span>2</span></p>

        <div className="flex flex-col gap-2">
          <Task description="Solve computer logic problems" date="Today" state={false}/>
          <Task description="Solve computer logic problems" date="Today" state={false}/>
        </div>
      </div>
    </main>
  )
}