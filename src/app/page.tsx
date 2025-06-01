import Button from "@/components/Button";
import Input from "@/components/Input";

export default function Home() {
  return (
    <main className="bg-[url('/whiteBg.jpg')] h-screen w-screen bg-cover bg-no-repeat flex items-center justify-center">
      <div className="flex flex-col gap-5 w-[95%] md:w-[90%] lg:w-[80%] xl:w-[42.36%] h-auto p-8 bg-white rounded-[12px] shadow-[0px_4px_6px_rgba(0,0,0,0.15)] border border-[rgba(228,228,228)]">
        <h1 className="text-[40px] font-semibold text-center">LOGO</h1>
        <h4 className="text-[32px] font-semibold text-center">Seja bem vindo ao melhor software de monitoramento de dispositivos!</h4>
        <form className="flex flex-col gap-6">
          <Input
            id="email"
            placeholder="Digite seu email"
            type="email"
            label="Email"
          />
          <Input
            id="password"
            placeholder="Digite sua senha"
            type="password"
            label="Senha"
          />
          <Button text="Entrar" textColor="text-white" bgColor="bg-black" />
        </form>
      </div>
    </main>
  );
}
