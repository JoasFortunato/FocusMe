"use client";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, CartesianGrid } from "recharts";

export default function GraficoMensal({ data }) {
  return (
   
    <div className="bg-white text-black p-4 rounded-xl shadow-lg h-full flex flex-col">
      
      <h3 className="font-bold text-sm mb-2 underline decoration-purple-500 decoration-2 underline-offset-4 flex-none">
        Relatório Mensal
      </h3>

   
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
            <XAxis 
              dataKey="mes" 
              stroke="#888" 
              tickLine={false} 
              axisLine={false} 
              tick={{fontSize: 12}} 
            />
            <Tooltip 
              cursor={{fill: 'transparent'}}
              contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #eee' }}
            />
            
            <Bar dataKey="valor" fill="#c084fc" radius={[4, 4, 0, 0]} barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}