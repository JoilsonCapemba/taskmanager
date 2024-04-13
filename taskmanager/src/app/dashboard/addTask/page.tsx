import { HeaderDashnoard } from "@/components/HeaderDashboard";

export default function Addtask(){
  return(
    
    <main className="h-screen bg-[#2E2938] text-white">
      <HeaderDashnoard />
      <div className="max-w-[603px] mx-auto mt-[215px]">
        <div className="flex gap-2 mb-[58px]">
          <button className="bg-[#363041] rounded-full w-[56px] h-[56px]">-</button>
          <div className="flex flex-col">
            <p className="text-white text-2xl font-bold">Add task</p>
            <p>Add your tasks to be registered.</p>
          </div>

        </div>

        <form action="" className="flex flex-col ">
          <p className="text-xs text-[#B4ACF9] mb-2">Title task</p>
          <input type="text" placeholder="insert your task" className="bg-[#363041] rounded-md h-[60px] mb-8"/>

          <p className="text-xs text-[#B4ACF9] mb-2">Date</p>
          <input type="date" className="bg-[#363041] rounded-md h-[60px] mb-8"/>

          <button className="h-[60px] bg-[#B4ACF9] rounded-md text-[#2E2938]">create task</button>
        </form>
      </div>
    </main>
  )
}