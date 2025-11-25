"use client";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const COLORS = ["#10b981", "#e5e7eb"];

export default function GraficoPizza({ data }) {
  return (
    <div className="bg-white text-black p-4 rounded-xl shadow-lg h-full flex flex-col items-center justify-center relative">
      <div className="relative w-full h-full max-h-[200px]"> 
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie 
              data={data} 
              innerRadius="60%" 
              outerRadius="80%" 
              dataKey="value" 
              startAngle={90} 
              endAngle={-270}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-3xl font-bold">60%</span>
        </div>
      </div>
      
     
      <div className="mt-2 text-center space-y-1 flex-none">
        <p className="text-red-500 font-bold text-xs">RUIM <span className="text-gray-400 font-normal ml-1">Melhorar tempo</span></p>
        <p className="text-yellow-500 font-bold text-xs">REGULAR <span className="text-gray-400 font-normal ml-1">Consistência</span></p>
        <p className="text-green-500 font-bold text-xs">ÓTIMO <span className="text-gray-400 font-normal ml-1">Foco</span></p>
      </div>
    </div>
  );
}