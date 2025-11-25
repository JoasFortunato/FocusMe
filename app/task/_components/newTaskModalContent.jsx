"use client"
import { useEffect, useState } from "react"
import {
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog"
import { Textarea } from "@/components/ui/textarea"

export default function NewTaskModalContent({ initialText = "", onClose, onSave }) {
  const [text, setText] = useState(initialText)

  useEffect(() => {
    setText(initialText)
  }, [initialText])

  function handleSave() {
    const trimmed = text.trim()
    if (!trimmed) return
    onSave({ title: trimmed })
    onClose?.()
    setText("")
  }

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Nova task</AlertDialogTitle>
        <AlertDialogDescription>
          Escreva a sua nova task abaixo e clique em Salvar.
        </AlertDialogDescription>
      </AlertDialogHeader>

      <div className="mt-3">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escreva sua nova task..."
        />
      </div>

      <AlertDialogFooter className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="px-3 py-1 border rounded"
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={handleSave}
          className="px-3 py-1 bg-[#7C3AED] text-white rounded"
        >
          Salvar
        </button>
      </AlertDialogFooter>
    </AlertDialogContent>
  )
}