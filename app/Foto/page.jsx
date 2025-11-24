"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function FotoPage() {
  const [username, setUsername] = useState("");

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#7B2CF3]">
      <div className="bg-white w-[430px] rounded-2xl shadow-xl p-6 flex flex-col items-center">
        <h1 className="text-xl font-bold mb-4">Sua melhor foto aqui:</h1>

        <div className="w-[300px] h-[300px] bg-gray-300 rounded-full flex items-center justify-center border">
          <Image src="/images/camera.png" width={70} height={70} alt="foto" />
        </div>

        <input
          type="text"
          placeholder="Digite um nome de usuário"
          className="
            w-[80%] mt-6 p-3 rounded-none 
            bg-gray-200 outline-none text-center
            transition hover:text-white
          "
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Link href="./" className="w-full block">
          <button
            className="
            w-[80%] mt-5 ml-10
            bg-[#7B2CF3] 
            text-white 
            py-3 
            rounded-none 
            font-semibold 
            transition 
            hover:bg-blue-500
          "
          >
            Entrar
          </button>
        </Link>
      </div>
    </div>
  );
}
