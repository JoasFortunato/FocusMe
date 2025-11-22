"use client";
export default function Card({ title, value, className = "" }) {
  return (
    <div className={`p-4 rounded-xl shadow-md flex flex-col items-center justify-center ${className}`}>
      <p className="text-sm opacity-80">{title}</p>
      <p className="text-4xl font-bold mt-2">{value}</p>
    </div>
  );
}