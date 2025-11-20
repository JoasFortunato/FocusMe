"use client";
import Navbar from "@/components/Navbar";
import Card from "./_components/Card";
import GraficoSemanal from "./_components/GraficoSemanal";
import GraficoMensal from "./_components/GraficoMensal";
import GraficoPizza from "./_components/GraficoPizza";
import { Pizza } from "lucide-react";

export default function Progresso() {
  // Dados mock — substitua depois
  const semanal = [
    { dia: "Seg", tempo: 30 },
    { dia: "Ter", tempo: 60 },
    { dia: "Qua", tempo: 40 },
    { dia: "Qui", tempo: 90 },
    { dia: "Sex", tempo: 120 },
    { dia: "Sab", tempo: 80 },
    { dia: "Dom", tempo: 30 },
  ];

  const mensal = [
    { mes: "Jan", tempo: 2 },
    { mes: "Fev", tempo: 5 },
    { mes: "Mar", tempo: 2 },
    { mes: "Abr", tempo: 3 },
    { mes: "Mai", tempo: 1 },
    { mes: "Jun", tempo: 3 },
    { mes: "Jul", tempo: 5 },
    { mes: "Ago", tempo: 2 },
    { mes: "Set", tempo: 1 },
    { mes: "Out", tempo: 4 },
    { mes: "Nov", tempo: 2 },
    { mes: "Dez", tempo: 4 },
  ];

  const donut = [{ name: "Focus", value: 60 }, { name: "Rest", value: 40 }];

  return (
    <div className="min-h-screen p-8">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6">Seu Progresso</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card title="Horas Totais" value="5h" className="bg-purple-600" />
        <Card title="Pausas Totais" value="1h" className="bg-white text-black" />
        <Card title="Sua colocação" value="10º" className="bg-white text-black" />
        <Card title="Nota" value="6.5" className="bg-white text-black" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <GraficoSemanal data={semanal} />
          <GraficoMensal data={mensal} />
        </div>

        <div>
          <GraficoPizza data={Pizza} />
        </div>
      </div>
    </div>
  );
}
