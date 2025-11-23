"use client";
import Navbar from "@/components/Navbar"; 
import Card from "./_components/Card";
import GraficoSemanal from "./_components/GraficoSemanal";
import GraficoMensal from "./_components/GraficoMensal";
import GraficoPizza from "./_components/GraficoPizza";

export default function Progresso() {
  const dadosSemanais = [
    { dia: "Seg", valor: 30 },
    { dia: "Ter", valor: 45 },
    { dia: "Qua", valor: 28 },
    { dia: "Qui", valor: 60 },
    { dia: "Sex", valor: 50 },
    { dia: "Sáb", valor: 75 },
    { dia: "Dom", valor: 90 },
  ];

  const dadosMensais = [
    { mes: "Jan", valor: 200 },
    { mes: "Fev", valor: 300 },
    { mes: "Mar", valor: 250 },
    { mes: "Abr", valor: 400 },
    { mes: "Mai", valor: 350 },
    { mes: "Jun", valor: 450 },
  ];

  const dadosPizza = [
    { name: "Concluído", value: 60 },
    { name: "Restante", value: 40 },
  ];

  return (
    <div className="h-screen w-full bg-black text-white overflow-hidden flex flex-col">
   
      <div className="flex-none z-50">
        <Navbar />
      </div>
      
      
      <div className="flex-1 p-6 pt-4 flex flex-col min-h-0"> 
        
        <h1 className="text-2xl font-bold mb-4 flex-none">Seu Progresso</h1>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 flex-none">
          <Card title="Horas Totais" value="5h" className="bg-purple-600 text-white py-3" />
          <Card title="Pausas Totais" value="1h" className="bg-white text-black py-3" />
          <Card title="Sua Colocação" value="10º" className="bg-white text-black py-3" />
          
          <div className="bg-white text-black p-3 rounded-xl shadow-md flex flex-col items-center justify-center relative">
             <span className="absolute top-2 right-3 text-yellow-400 text-lg">★</span>
             <p className="text-xs opacity-80">Nota</p>
             <p className="text-3xl font-bold mt-1">6.5</p>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-0">
          
         
          <div className="lg:col-span-2 flex flex-col gap-4 h-full">
        
            <div className="flex-1 min-h-0">
              <GraficoSemanal data={dadosSemanais} />
            </div>
           
            <div className="flex-1 min-h-0">
              <GraficoMensal data={dadosMensais} />
            </div>
          </div>

          
          <div className="h-full min-h-0">
             <GraficoPizza data={dadosPizza} />
          </div>
        </div>

      </div>
    </div>
  );
}