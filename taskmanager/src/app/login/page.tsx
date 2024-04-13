import { Logo } from "@/components/Logo";
import { SocialLogin } from "@/components/SocialLogin";

export default function Login(){
  return(
    <main className="h-screen p-14 bg-[#2E2938] flex justify-center items-center">
      <form className="w-[381px] flex flex-col">
        <Logo />

        <div className="flex flex-col gap-2 mt-[2.625rem] mb-12">
          <SocialLogin logo="G" text="Google" />
          <SocialLogin logo="F" text="facebook" />
        </div>

        <p className="text-[#B4ACF9] mb-2">Your email</p>
        <input className="h-[60px] bg-[#363041] rounded-md mb-6 pl-4 text-xs" type="email" placeholder="please insert your e-mail adress"/>

        <p className="text-[#B4ACF9] mb-2">Password</p>
        <input className="h-[60px] bg-[#363041] rounded-md mb-6 pl-4 text-xs" type="email" placeholder="please insert your password adress"/>
        
        <button className="h-[60px] bg-[#B4ACF9] rounded-md text-[#2E2938]">Sign In</button>

        <p className="text-white self-center mt-6">Nao tens uma conta?  Criar conta agora</p>
      </form>
    </main>
  )
}