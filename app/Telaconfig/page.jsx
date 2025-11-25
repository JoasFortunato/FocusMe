 "use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Telaconfig() {
  return (
    <div className="bg-[#7c3aed] min-h-screen pt-10 px-6 flex justify-center items-center">
      <div className="bg-white w-[90%] rounded-3xl shadow-xl p-10 relative">

        {/* Botão voltar */}
        <button className="absolute left-6 top-6">
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="#7c3aed"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18L9 12L15 6" />
          </svg>
        </button>

        {/* Avatar */}
        <div className="flex flex-col items-center -mt-20 mb-10">
          <Image
            src="/fox.png"
            alt="avatar"
            className="w-28 h-28 rounded-full ring-8 ring-[#7c3aed]"
          />

          <Button className="mt-4 bg-[#7c3aed] px-6 py-2 rounded-full shadow text-white">
            Alterar
          </Button>
        </div>

        {/* Alterar Nome */}
        <div className="bg-gray-300 rounded-full px-6 py-6 flex items-center justify-between mb-6">
          <div>
            <Label className="font-semibold text-gray-800">
              Alterar nome de usuário
            </Label>
            <p className="text-sm text-gray-700 mt-1">Bruno</p>
          </div>

          <Button className="bg-[#7c3aed] text-white px-6 py-2 rounded-full shadow">
            Alterar
          </Button>
        </div>

        {/* Alterar Senha */}
        <div className="bg-gray-300 rounded-full px-6 py-6 flex items-center justify-between">
          <div>
            <Label className="font-semibold text-gray-800">
              Alterar Senha
            </Label>
            <p className="text-sm text-gray-700 mt-1">************</p>
          </div>

          <Button className="bg-[#7c3aed] text-white px-6 py-2 rounded-full shadow">
            Alterar
          </Button>
        </div>
      </div>
    </div>
  );
}
