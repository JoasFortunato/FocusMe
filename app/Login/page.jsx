"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !senha) {
      setErro("Preencha todos os campos!");
      return;
    }

    router.push("/home");
  };

  return (
    <div
      className="
        min-h-screen flex items-center justify-between 
        bg-no-repeat bg-cover
      "
      style={{
        backgroundImage: "linear-gradient(to right, #8B3DFF 50%, #000000 50%)",
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <Image
          src="/images/DK.png"
          width={400}
          height={400}
          alt="Ilustração"
          className="object-contain"
        />
      </div>

      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 mr-[8rem]">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Digite o seu email"
              className="w-full p-2 border rounded-lg mt-1 bg-white focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full p-2 border rounded-lg mt-1 bg-white focus:ring-2 focus:ring-purple-500"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition"
          >
            Entrar
          </button>
        </form>

        {erro && (
          <p className="text-red-600 text-center mt-2 font-semibold">
            {erro}
          </p>
        )}

        <p className="text-center text-sm mt-4">
          Não possui conta?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Cadastre-se aqui
          </a>
        </p>
      </div>
    </div>
  );
}
