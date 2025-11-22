"use client";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function GraficoMensal({ data }) {
  return (
    <div className="bg-neutral-900 p-4 rounded-xl shadow-inner mt-6">
      <h3 className="font-bold mb-2">Relatório Mensal</h3>
      <div style={{ width: "100%", height: 220 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="mes" stroke="#ddd" />
            <YAxis stroke="#ddd" />
            <Tooltip />
            <Bar dataKey="tempo" fill="#d28dff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
