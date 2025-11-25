"use client"
import { useEffect, useState } from "react"

export default function NewTaskModal({ initialText = "", onClose, onSave }) {
  const [text, setText] = useState(initialText)

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) onClose()
  }

  function handleSave() {
    const trimmed = text.trim()
    if (!trimmed) return
    onSave({ title: trimmed })
    setText("")
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Nova task</h3>
          <button onClick={onClose} aria-label="Fechar modal" className="text-gray-600/80">
            ✕
          </button>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escreva sua nova task..."
          className="w-full h-32 p-2 border rounded bg-slate-50"
        />

        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 border rounded">
            Fechar
          </button>
          <button onClick={handleSave} className="px-3 py-1 bg-[#7C3AED] text-white rounded">
            Salvar
          </button>
        </div>
      </div>
    </div>
  )
}