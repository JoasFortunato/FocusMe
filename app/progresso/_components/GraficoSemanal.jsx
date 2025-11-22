"use client";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function GraficoSemanal({ data }) {
  return (
    <div className="bg-neutral-900 p-4 rounded-xl shadow-inner">
      <h3 className="font-bold mb-2">Relatório Semanal</h3>
      <div style={{ width: "100%", height: 220 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="dia" stroke="#ddd" />
            <YAxis stroke="#ddd" />
            <Tooltip />
            <Bar dataKey="tempo" fill="#b26bff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
