"use client";
import { useState, useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const COLORS = ["#10b981", "#27272a"];

export default function GraficoPizza({ data }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div className="w-full h-full bg-zinc-900 rounded-xl animate-pulse"></div>;

  return (
    <div className="bg-zinc-900 w-full h-full flex flex-col items-center justify-center p-3 relative">
      
      <div className="flex-1 w-full min-h-[200px] flex items-center justify-center relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie 
              data={data} 
              innerRadius="55%" 
              outerRadius="75%" 
              dataKey="value" 
              startAngle={90} 
              endAngle={-270}
              stroke="none"
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-3xl font-bold text-white">60%</span>
        </div>
      </div>
      
      <div className="flex-none w-full space-y-2 mt-2">
        <div className="flex justify-between text-[10px] text-zinc-400 border-b border-zinc-800 pb-1">
           <span className="text-red-400 font-bold">RUIM</span>
           <span>Melhorar tempo</span>
        </div>
        <div className="flex justify-between text-[10px] text-zinc-400 border-b border-zinc-800 pb-1">
           <span className="text-yellow-400 font-bold">REGULAR</span>
           <span>Consistência</span>
        </div>
        <div className="flex justify-between text-[10px] text-zinc-400">
           <span className="text-green-400 font-bold">ÓTIMO</span>
           <span>Foco total</span>
        </div>
      </div>
    </div>
  );
}