"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Home() {
  const { authStatus, handleInputChange, handleSubmit, user } = useAuth()

  useEffect(() => {
    if (authStatus.error){
      toast.error("Erro: " + authStatus.error, {
        position: "top-center",
        autoClose: 5000,
        pauseOnHover: true,
        closeOnClick: true,
        draggable: true
      })
    } else if (authStatus.success) {
      toast.success("Login realizado com sucesso!", {
        position: "top-center",
        autoClose: 5000,
        pauseOnHover: true,
        closeOnClick: true,
        draggable: true
      });
    }
  }, [authStatus])
  

  return (
    <main className="bg-[url('/whiteBg.jpg')] h-screen w-screen bg-cover bg-no-repeat flex items-center justify-center">
      <ToastContainer />
      <div className="flex flex-col gap-5 w-[95%] md:w-[90%] lg:w-[80%] xl:w-[42.36%] h-auto p-8 bg-white rounded-[12px] shadow-[0px_4px_6px_rgba(0,0,0,0.15)] border border-[rgba(228,228,228)]">
        <h1 className="text-[40px] font-semibold text-center">LOGO</h1>
        <h4 className="text-[32px] font-semibold text-center">
          Seja bem vindo ao melhor software de monitoramento de dispositivos!
        </h4>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <Input
            id="email"
            placeholder="Digite seu email"
            type="email"
            label="Email"
            value={user.email}
            onChange={handleInputChange}
          />
          <Input
            id="password"
            placeholder="Digite sua senha"
            type="password"
            label="Senha"
            value={user.password}
            onChange={handleInputChange}
          />
          <Button text={authStatus.loading ? "Entrando..." : "Entrar"} textColor="text-white" bgColor="bg-black" disabled={authStatus.loading}/>
        </form>
      </div>
    </main>
  );
}
