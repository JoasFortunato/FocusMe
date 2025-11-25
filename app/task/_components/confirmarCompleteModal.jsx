"use client"
import { useEffect } from "react"

export default function ConfirmarCompleteModal({
  onClose = () => {},
  onNext = () => {},
  xp = 10,
  title = "VOCÊ MANDOU BEM!!",
  subtitle = "Mais um passo em direção ao topo",
  buttonText = "PRÓXIMA TASK",
}) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2a0f48]/95"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full h-full flex items-center justify-center p-6" onClick={(e) => e.stopPropagation()}>
        <div className="max-w-lg w-full text-center space-y-4">
          <h2 className="text-xs text-white/80 tracking-wider font-bold">{title}</h2>

          <div className="mx-auto w-36 h-36 rounded-full bg-yellow-400/10 flex items-center justify-center">
          <img 
            src="/images/trofeu.png" 
            alt="Troféu de xp"
            className="w-20 h-20 mx-auto" />
          </div>

          <div className="flex justify-center mr-4"><p className="text-yellow-300 font-medium text-sm">+ {xp} XP</p></div>
          <p className="text-white/80">{subtitle}</p>

          <button
            type="button"
            onClick={onNext}
            className="inline-block px-4 py-2 rounded-full bg-[#7C3AED] text-white text-sm shadow hover:bg-[#6a2edd]"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}