import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="flex flex-col bg-[#F9F9F9] h-screen w-[20%] relative border-r border-[#e4e4e4]">
      <button className="absolute top-5 right-[-10px]">
        <Image
          src="/Slider.svg"
          alt="Botão que ao clicar você abre ou fecha a sidebar"
          width={25}
          height={25}
        />
      </button>
      <div className="py-4 w-full border-b border-[#e4e4e4]">
        <h5 className="text-center font-medium">EMPRESA</h5>
      </div>

      <nav className="flex flex-col gap-3 pt-4 px-4">
        <a href="" className="flex gap-2.5 active:bg-black active:text-white hover:bg-black hover:text-white transition-colors duration-300 ease-in-out p-2 rounded-[4px]">
          <Image
            src="/dashboard.svg"
            alt="Ao clicar você é redirecionado para a página de dashboard"
            width={20}
            height={20}
          />
          <p className="text-[12px] text-[#727272] font-medium">Dashboard</p>
        </a>
        <a href="" className="flex gap-2.5 active:bg-black active:text-white hover:bg-black hover:text-white transition-colors duration-300 ease-in-out p-2 rounded-[4px]">
          <Image
            src="/allDevices.svg"
            alt="Ao clicar você é redirecionado a página que mostra todos os dispositivos"
            width={20}
            height={20}
          />
          <p className="text-[12px] text-[#727272] font-medium whitespace-nowrap">Todos os dispositivos</p>
        </a>
        <a href="" className="flex gap-2.5 active:bg-black active:text-white hover:bg-black hover:text-white transition-colors duration-300 ease-in-out p-2 rounded-[4px]">
          <Image
            src="allDevices.svg"
            alt="Ao clicar você abre outras opções onde você pode escolher entre as seguintes plataformas: MacOs, Windows, Linux, Android"
            width={20}
            height={20}
          />
          <p className="text-[12px] text-[#727272] font-medium">Por plataforma</p>
        </a>
        <a href="" className="flex gap-2.5 active:bg-black active:text-white hover:bg-black hover:text-white transition-colors duration-300 ease-in-out p-2 rounded-[4px]">
          <Image
            src="/settings.svg"
            alt="Ao clicar você é redirecionado para página de configurações"
            width={20}
            height={20}
          />
          <p className="text-[12px] text-[#727272] font-medium">Configurações</p>
        </a>
      </nav>
    </aside>
  );
}
