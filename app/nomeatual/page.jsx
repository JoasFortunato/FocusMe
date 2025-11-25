"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function AlterarNome() {
  return (
    <div className="bg-[#8b3afd] min-h-screen flex flex-col items-center px-6">
      
      <div className="w-full flex flex-col items-center mt-12 mb-6">
        <h1 className="text-5xl font-extrabold text-white mb-2 text-center">Alterar Nome</h1>
        <span className="text-white text-lg text-center">Atualize sua informações de perfil.</span>
      </div>
      
      <div className="bg-white w-[95%] max-w-5xl rounded-3xl shadow-xl p-10 relative flex flex-col gap-8">
       
        <button className="absolute left-8 top-8">
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="#8b3afd"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18L9 12L15 6" />
          </svg>
        </button>

       
        <div>
          <Label className="text-2xl font-bold mb-2 block">Nome atual</Label>
          <div className="rounded-full bg-gray-300 px-8 py-6 flex items-center">
            <Input
              type="text"
              value="Bruno"
              readOnly
              className="bg-transparent text-xl border-none outline-none shadow-none pointer-events-none"
            />
          </div>
        </div>

       
        <div>
          <Label className="text-2xl font-bold mb-2 block">Alterar Nome</Label>
          <div className="rounded-full bg-gray-300 px-8 py-6 flex items-center justify-between">
            <Input
              type="text"
              defaultValue="Bruno"
              className="bg-transparent text-xl border-none outline-none shadow-none flex-1"
            />
            <Button className="ml-4 bg-[#8b3afd] px-8 py-2 rounded-full text-white font-semibold shadow-none">
              Alterar
            </Button>
          </div>
        </div>

        
        <div>
          <Label className="text-2xl font-bold mb-2 block">Confirmar Nome</Label>
          <div className="rounded-full bg-gray-300 px-8 py-6 flex items-center justify-between">
            <Input
              type="text"
              defaultValue="Bruno"
              className="bg-transparent text-xl border-none outline-none shadow-none flex-1"
            />
            <Button className="ml-4 bg-[#8b3afd] px-8 py-2 rounded-full text-white font-semibold shadow-none">
              Confirmar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}