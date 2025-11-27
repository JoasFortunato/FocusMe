"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AlterarNome() {
  const [currentName, setCurrentName] = useState("");
  const [newName, setNewName] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("nomeAtual") : null;
    const initial = stored ?? "Bruno";
    setCurrentName(initial);
    setNewName(initial);
  }, []);

  function handleConfirm() {
    const trimmed = newName.trim();
    if (trimmed.length === 0) return;
    setCurrentName(trimmed);
    if (typeof window !== "undefined") localStorage.setItem("nomeAtual", trimmed);
    setSavedMessage("Nome salvo!");
    setTimeout(() => setSavedMessage(""), 2000);
  }

  // Em .jsx, não use anotações de tipo no parâmetro
  function handleSubmit(e) {
    e.preventDefault();
    handleConfirm();
  }

  return (
    <div className="bg-[#7c3aed] min-h-screen flex flex-col items-center px-6">
      <div className="w-full flex flex-col items-center mt-4 mb-1">
        <h1 className="text-5xl font-extrabold text-white mb-2 text-center">Alterar Nome</h1>
        <span className="text-white text-lg text-center">Atualize sua informações de perfil.</span>
      </div>

      <div className="bg-white w-[95%] max-w-5xl mb-3 mt-3 rounded-3xl shadow-xl p-10 relative flex flex-col gap-8">
        <Link href="/Telaconfig" className="w-full block">
          <button className="absolute left-8 top-8 ">
            <svg width="28" height="28" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18L9 12L15 6" />
            </svg>
          </button>
        </Link>

        <div>
          <Label className="ml-7 text-2xl font-bold mt-7 mb-0 block">Nome atual</Label>
          <div className="rounded-full bg-transparent px-2 py-1.5 flex items-center">
            <Input type="text" value={currentName} readOnly className="bg-gray-300 text-xl border-none outline-none shadow-none pointer-events-none" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <div>
            <Label className="ml-7 text-2xl font-bold mb-0 block">Alterar Nome</Label>
            <div className="rounded-full bg-transparent px-2 py-1.5 flex items-center justify-between">
              <Input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} className="bg-gray-300 text-xl border-transparent shadow-none flex-1" />
            </div>
          </div>

          <div className="flex flex-col items-center mt-6">
            <Button type="submit" className="ml-4 bg-[#7c3aed] hover:bg-purple-800 px-24 py-2 rounded-full text-white font-semibold justify-center shadow-none">Confirmar</Button>
            {savedMessage && <span className="mt-3 text-sm text-green-600 font-medium">{savedMessage}</span>}
          </div>
        </form>
      </div>
    </div>
  );
}