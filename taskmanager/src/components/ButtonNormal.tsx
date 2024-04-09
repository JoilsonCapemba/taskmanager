interface ButtonNormalProps{
  title: string
}

export function ButtonNormal({title}: ButtonNormalProps){
  return(
    <button className="w-[133px] h-[50px] bg-[#B4ACF9] rounded-md">{title}</button>
  )
}