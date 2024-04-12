interface TaskProps{
  description: string
  date: string
  state: boolean
}

export function Task({description, date}: TaskProps){
  return(
          <div className="bg-[#363041] flex items-center gap-3 h-[75px] ">
            <span><input type="checkbox" name="" id="" className="size-6 rounded-md ml-2"/></span>
            
            <div className="">
              <p className="">{description}</p>
              <p className="text-[#B4ACF9] text-xs">{date}</p>
            </div>
          </div>
  )
}