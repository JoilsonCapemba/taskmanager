interface SocialLoginProps{
  logo: string
  text: string
}

export function SocialLogin({logo, text}: SocialLoginProps){
  return(
    <div className="flex items-center bg-[#363041] h-[60px] rounded-md">
      <strong className="flex justify-center items-center bg-[#B4ACF9] w-[60px] h-[60px] rounded-l-md">{logo}</strong>
      <p className="ml-2 text-white">{text}</p>
    </div>
  )
}