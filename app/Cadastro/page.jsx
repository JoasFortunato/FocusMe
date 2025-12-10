"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function CadastrarPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmeSenha, setConfirmeSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleCadastrar = (e) => {
    e.preventDefault();

    if (!email || !senha || !confirmeSenha) {
      setErro("Preencha todos os campos obrigatórios!");
      return;
    }

    if (senha !== confirmeSenha) {
      setErro("As senhas não coincidem!");
      return;
    }

    setErro("");
    router.push("./");
  };

  return (
    <div className="min-h-screen flex items-center justify-between bg-no-repeat bg-cover bg-gradient-to-r from-[#7C3AED] to-black">
      
      <div className="w-1/2 flex items-center justify-center">
        <Image
          src="/images/Logo_FocusMe.png"
          width={400}
          height={400}
          alt="Ilustração"
          className="object-contain"
        />
      </div>

      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 mr-[11rem] -mt-2">
        <h1 className="text-2xl font-bold text-center mb-6">Crie sua conta</h1>

        <form onSubmit={handleCadastrar} className="flex flex-col gap-4">

          <div>
            <label className="block text-sm font-medium">Email *</label>
            <input
              type="email"
              placeholder="Digite o seu email"
              className="w-full p-2 border rounded-lg mt-1 bg-white focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Senha *</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full p-2 border rounded-lg mt-1 bg-white focus:ring-2 focus:ring-blue-500"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Confirmar senha *</label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              className="w-full p-2 border rounded-lg mt-1 bg-white focus:ring-2 focus:ring-blue-500"
              value={confirmeSenha}
              onChange={(e) => setConfirmeSenha(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#7C3AED] text-white p-2 rounded-lg hover:bg-[#6B21A8] transition"
          >
            Criar conta
          </button>
        </form>

        {erro && (
          <p className="text-red-600 text-center mt-2 font-semibold">{erro}</p>
        )}

        <p className="text-center text-sm mt-4">
          Já possui conta?{" "}
          <Link href="/Login" className="text-blue-600 hover:underline">
            Faça seu login
          </Link>
        </p>
      </div>
    </div>
  );
}
