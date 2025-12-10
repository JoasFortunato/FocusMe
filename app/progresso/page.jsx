"use client";

import Navbar from "@/components/Navbar";
import Card from "./_components/Card";
import GraficoSemanal from "./_components/GraficoSemanal";
import GraficoMensal from "./_components/GraficoMensal";
import GraficoPizza from "./_components/GraficoPizza";
import { useAuth } from "@/hooks/useAuth";

export default function Progresso() {
  const { usuario, usuarios } = useAuth();
  if (!usuario) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        Faça login para ver seu progresso
      </div>
    );
  }

  const horasTotais = (usuario.pomodoros * 0.4).toFixed(1);

  const pausas = "1h";
  const rankingOrdenado = [...usuarios].sort((a, b) => b.xp - a.xp);
  const posicaoRanking =
    rankingOrdenado.findIndex((u) => u.id === usuario.id) + 1;
  const dadosSemanais = [
    { dia: "Seg", valor: usuario.xp * 0.1 },
    { dia: "Ter", valor: usuario.xp * 0.15 },
    { dia: "Qua", valor: usuario.xp * 0.08 },
    { dia: "Qui", valor: usuario.xp * 0.2 },
    { dia: "Sex", valor: usuario.xp * 0.18 },
    { dia: "Sáb", valor: usuario.xp * 0.25 },
    { dia: "Dom", valor: usuario.xp * 0.3 },
  ];

  const dadosMensais = [
    { mes: "Jan", valor: usuario.xp * 0.5 },
    { mes: "Fev", valor: usuario.xp * 0.8 },
    { mes: "Mar", valor: usuario.xp * 0.6 },
    { mes: "Abr", valor: usuario.xp * 1.0 },
    { mes: "Mai", valor: usuario.xp * 0.9 },
    { mes: "Jun", valor: usuario.xp * 1.2 },
  ];
  const dadosPizza = [
    { name: "Concluído", value: usuario.xp },
    { name: "Restante", value: 200 - usuario.xp },
  ];

  return (
    <div className="h-[100dvh] w-full bg-black text-white flex flex-col overflow-hidden">
      <div className="flex-none z-50">
        <Navbar />
      </div>

      <div className="flex-1 flex flex-col p-4 pt-20 gap-3 min-h-0 w-full max-w-[1600px] mx-auto">
        <div className="flex-none mt-2">
          <h1 className="text-xl font-bold pl-1 leading-none">
            Seu Progresso
          </h1>
        </div>

        <div className="flex-none grid grid-cols-2 lg:grid-cols-4 gap-3">
          <Card
            title="Horas Totais"
            value={`${horasTotais}h`}
            className="bg-[#7C3AED] border-none text-white py-2"
          />

          <Card title="Pausas" value={pausas} className="py-2" />

          <Card
            title="Ranking"
            value={`${posicaoRanking}º`}
            className="py-2"
          />

          <div className="bg-zinc-900 border border-zinc-800 text-white p-2 rounded-xl shadow-lg flex flex-col items-center justify-center relative">
            <span className="absolute top-2 right-2 text-yellow-500 text-xs">
              ★
            </span>
            <p className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400">
              Nota
            </p>
            <p className="text-2xl font-bold mt-0.5">
              {(usuario.xp / 20).toFixed(1)}
            </p>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-3 min-h-0 pb-2">
          <div className="lg:col-span-2 flex flex-col gap-3 h-full min-h-0">
            <div className="flex-1 min-h-0 border border-zinc-800 rounded-xl overflow-hidden">
              <GraficoSemanal data={dadosSemanais} />
            </div>
            <div className="flex-1 min-h-0 border border-zinc-800 rounded-xl overflow-hidden">
              <GraficoMensal data={dadosMensais} />
            </div>
          </div>

          <div className="h-full min-h-0 border border-zinc-800 rounded-xl overflow-hidden">
            <GraficoPizza data={dadosPizza} />
          </div>
        </div>
      </div>
    </div>
  );
}
