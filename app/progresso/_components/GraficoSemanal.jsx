"use client";
import { useState, useEffect } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, CartesianGrid } from "recharts";

export default function GraficoSemanal({ data }) {
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div className="w-full h-full bg-zinc-900 rounded-xl animate-pulse"></div>;

  return (
    <div className="bg-zinc-900 w-full h-full flex flex-col p-3">
      <h3 className="font-bold text-xs mb-2 text-zinc-300 flex-none uppercase tracking-wider">
        Relatório Semanal
      </h3>
      
      <div className="flex-1 w-full min-h-[150px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
            <XAxis 
              dataKey="dia" 
              stroke="#555" 
              tickLine={false} 
              axisLine={false} 
              tick={{fontSize: 10, fill: '#777'}} 
              dy={10}
            />
            <Tooltip 
              cursor={{fill: '#27272a'}}
              contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', color: '#fff', fontSize: '12px' }}
            />
            <Bar dataKey="valor" fill="#a855f7" radius={[4, 4, 0, 0]} barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}