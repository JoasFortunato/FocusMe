"use client";
export default function Card({ title, value, className = "" }) {
  
  const hasBgColor = className.includes("bg-");
  
 
  const defaultStyle = "bg-zinc-900 border border-zinc-800 text-white";
  
  const finalClass = `p-4 rounded-xl shadow-lg flex flex-col items-center justify-center ${hasBgColor ? className : defaultStyle} ${className}`;

  return (
    <div className={finalClass}>
      <p className={`text-xs uppercase tracking-wider font-semibold ${hasBgColor ? 'opacity-80' : 'text-zinc-400'}`}>
        {title}
      </p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}