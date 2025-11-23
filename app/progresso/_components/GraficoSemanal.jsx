"use client";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, CartesianGrid } from "recharts";

export default function GraficoSemanal({ data }) {
  return (
    <div className="bg-white text-black p-4 rounded-xl shadow-lg h-full flex flex-col">
      <h3 className="font-bold text-sm mb-2 underline decoration-purple-500 decoration-2 underline-offset-4 flex-none">
        Relatório Semanal
      </h3>
     
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
            <XAxis dataKey="dia" stroke="#888" tickLine={false} axisLine={false} tick={{fontSize: 12}} />
            <Tooltip cursor={{fill: 'transparent'}} />
            <Bar dataKey="valor" fill="#a855f7" radius={[4, 4, 0, 0]} barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}