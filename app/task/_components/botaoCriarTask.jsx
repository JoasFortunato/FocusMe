"use client";

export default function BotaoCriarTask({ onClick }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        if (typeof onClick === "function") onClick(e);
      }}
      className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center text-2xl text-purple-600 hover:text-[#752df1] rounded-md bg-transparent"
      aria-label="Adicionar Task"
    >
      +
    </button>
  );
}
