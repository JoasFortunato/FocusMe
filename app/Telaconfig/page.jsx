"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Telaconfig() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("nomeAtual");
    setUserName(stored ?? "Bruno");
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-[#7c3aed] min-h-screen pt-20 px-6 flex justify-center items-start">
        <div className="bg-white w-[95%] max-w-4xl mt-3 rounded-3xl shadow-xl p-28 relative mx-auto">
          <Link href="./" className="w-full block">
            <button className="absolute left-8 top-8 ">
              <svg
                width="30"
                height="30"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 22L10 14L18 6" />
              </svg>
            </button>
          </Link>

          <div className="flex flex-col items-center -mt-12 mb-12">
            <Image
              src="/images/lele.png"
              alt="avatar"
              className="w-32 h-32 rounded-full ring-8 ring-[#7c3aed]"
              width={120}
              height={120}
            />
            <Link href="/Telaconfig/Avatares">
              <Button className="mt-6 bg-[#7c3aed] hover:bg-purple-800 px-8 py-2 rounded-full shadow text-white">
                Alterar
              </Button>
            </Link>
          </div>

          <div className="bg-gray-300 rounded-full px-6 py-4 flex items-center justify-between mb-8">
            <div>
              <Label className="font-semibold text-gray-800 text-[18px]">
                Alterar nome de usuário
              </Label>
              <p className="text-sm text-gray-700 mt-1 text-[17px]">{userName || "Bruno"}</p>
            </div>

            <Link href="/Telaconfig/Nome">
              <Button className="bg-[#7c3aed] text-white hover:bg-purple-800 px-6 py-2 rounded-full shadow">
                Alterar
              </Button>
            </Link>
          </div>

          <div className="bg-gray-300 rounded-full px-6 py-4 flex items-center justify-between">
            <div>
              <Label className="font-semibold text-gray-800 text-[18px]">
                Alterar Senha
              </Label>
              <p className="text-sm text-gray-700 mt-1 text-[17px]">************</p>
            </div>
            <Link href="/Telaconfig/Senha">
              <Button className="bg-[#7c3aed] text-white hover:bg-purple-800 px-6 py-2 rounded-full shadow">
                Alterar
              </Button>
            </Link>

            
          </div>
        </div>
      </div>
    </>
  );
}