"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Timer", href: "./" },
    { label: "Progresso", href: "/progresso" },
    { label: "Ranking", href: "/ranking" },
    { label: "Tasks", href: "/task" },
    { label: "Configurações", href: "#" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg border-b border-white/40 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
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
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            {links.map((l) => (
              <li key={l.label} className="hover:text-indigo-600 transition">
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <button className="hidden md:flex px-5 py-2 bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-xl shadow-md active:scale-95">
            Login
          </button>
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
        <div
          className={`md:hidden w-full bg-white/95 border-t border-white/30 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="px-6 py-4">
            <ul className="flex flex-col gap-3 text-gray-700 font-medium">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 px-3 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
