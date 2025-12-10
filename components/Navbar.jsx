"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const { usuario } = useAuth(); // <<--- PEGANDO XP E USUÁRIO

  const links = [
    { label: "Timer", href: "/" },
    { label: "Progresso", href: "/progresso" },
    { label: "Ranking", href: "/ranking" },
    { label: "Tasks", href: "/task" },
    { label: "Configurações", href: "/Telaconfig" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2 ml-2">
            <Image
              src="/images/Logo_FocusMe.png"
              alt="FocusMe Logo"
              width={150}
              height={90}
              className="object-contain"
              priority
            />
          </div>

          {/* Links Desktop */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            {links.map((l) => {
              const active = pathname === l.href;

              return (
                <li key={l.label} className="flex flex-col items-center">
                  <Link
                    href={l.href}
                    className={`pb-1 transition ${
                      active
                        ? "text-[#7C3AED]"
                        : "text-gray-700 hover:text-[#752df1]"
                    }`}
                  >
                    {l.label}
                  </Link>

                  {active && (
                    <span className="w-full h-[3px] rounded-full bg-[#7C3AED]"></span>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Área do Usuário (XP + botão login/logout) */}
          <div className="flex items-center gap-4">

            {/* Mostra XP somente logado */}
            {usuario && (
              <div className="flex items-center gap-2 bg-purple-100 px-3 py-1 rounded-xl shadow-sm font-semibold text-[#7C3AED]">
                ⭐ {usuario.xp} XP
              </div>
            )}

            {/* Botão Login/Logout */}
            {!usuario ? (
              <Link href="/Login">
                <button className="hidden md:flex px-5 py-2 bg-[#7C3AED] hover:bg-[#752df1] transition text-white rounded-xl shadow-md active:scale-95">
                  Login
                </button>
              </Link>
            ) : (
              <Link href="/Login">
                <button className="hidden md:flex px-5 py-2 bg-red-500 hover:bg-red-600 transition text-white rounded-xl shadow-md active:scale-95">
                  Sair
                </button>
              </Link>
            )}
          </div>

          {/* Menu Mobile */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-gray-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden w-full bg-white/95 border-t border-white/30 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-4">
            <ul className="flex flex-col gap-3 text-gray-700 font-medium">

              {/* XP Mobile */}
              {usuario && (
                <div className="font-semibold text-[#7C3AED] bg-purple-100 rounded-lg p-2 mb-2">
                  ⭐ XP: {usuario.xp}
                </div>
              )}

              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 px-3 rounded-md hover:bg-purple-100 transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}

              {!usuario ? (
                <Link
                  href="/Login"
                  onClick={() => setOpen(false)}
                  className="inline-block mt-2 px-4 py-2 bg-[#7C3AED] text-white rounded-xl shadow-md hover:bg-[#752df1] transition"
                >
                  Login
                </Link>
              ) : (
                <Link
                  href="/Login"
                  onClick={() => setOpen(false)}
                  className="inline-block mt-2 px-4 py-2 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 transition"
                >
                  Sair
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
