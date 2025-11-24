"use client"
import { useState } from "react"
import confetti from "canvas-confetti"
import { Checkbox } from "@/components/ui/checkbox"
import NewTaskModal from "./newTaskModal"
import BotaoCriarTask from "./botaoCriarTask"
import ConfirmarCompleteModal from "./confirmarCompleteModal"

export default function CardTaskPrincipal() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Teste 1 de anotação", done: false },
    { id: 2, title: "Teste 2 de anotação", done: false },
    { id: 3, title: "Teste 3 de anotação", done: false },
    { id: 4, title: "Teste 4 de anotação", done: false },
    { id: 5, title: "Teste 5 de anotação", done: false },
    { id: 6, title: "Teste 6 de anotação", done: false },
  ])

  const [showAddModal, setShowAddModal] = useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  function handleAdd({ title }) {
    const nextId = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1
    setTasks(prev => [{ id: nextId, title, done: false }, ...prev])
    setShowAddModal(false)
  }

  function toggleDone(id, checked) {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, done: !!checked } : t)))
  }

  const allDone = tasks.length > 0 && tasks.every(t => t.done)

  function triggerConfetti(duration = 1500) {
    const end = Date.now() + duration
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"]

    const frame = () => {
      if (Date.now() > end) return

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.6 },
        colors,
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.6 },
        colors,
      })

      confetti({
        particleCount: 8,
        angle: 90,
        spread: 100,
        startVelocity: 40,
        origin: { x: 0.5, y: 0.35 },
        colors,
      })

      requestAnimationFrame(frame)
    }

    frame()
  }

  function handleCompletarClick() {
    if (!allDone) return

    triggerConfetti(1500)
    setShowConfirmModal(true)
  }

  function handleNextTask() {
    setShowConfirmModal(false)
  }

  return (
    <section className="relative bg-white rounded-2xl shadow-lg p-6 w-full max-w-xl border-l-4 border-purple-400">
      <BotaoCriarTask onClick={() => setShowAddModal(true)} />
      {showAddModal && <NewTaskModal initialText="" onClose={() => setShowAddModal(false)} onSave={handleAdd} />}

      {showConfirmModal && (
        <ConfirmarCompleteModal
          onClose={() => setShowConfirmModal(false)}
          onNext={handleNextTask}
          xp={10}
          title="VOCÊ MANDOU BEM!!"
          subtitle="Mais um passo em direção ao topo"
          buttonText="PRÓXIMA TASK"
        />
      )}

      <header className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Tasks diárias <span className="font-normal text-gray-600">({tasks.length} tasks)</span>
        </h2>
      </header>

      <ul className="space-y-3 mb-6">
        {tasks.map(task => (
          <li key={task.id} className="flex items-center">
            <span className="w-1.5 h-7 bg-[#7C3AED] rounded mr-4" />
            <Checkbox checked={task.done} onCheckedChange={c => toggleDone(task.id, c)} className="mr-3" />
            <span className={`ml-3 text-1xl font-medium ${task.done ? "line-through text-gray-400" : ""}`}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>

      <footer className="flex justify-end">
        <button
          onClick={handleCompletarClick}
          disabled={!allDone}
          className={`px-4 py-2 rounded ${allDone ? "bg-[#7C3AED] text-white" : "bg-gray-200 text-gray-500 cursor-not-allowed opacity-60"}`}
        >
          Completar
        </button>
      </footer>
    </section>
  )
}