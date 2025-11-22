"use client"
import { useState } from "react"
import Navbar from "@/components/Navbar";
import CardTaskPrincipal from "@/app/task/_components/cardTaskPrincipal"
import CardTaskSecundaria from "@/app/task/_components/cardTaskSecundaria"
import BotaoCriarTask from "@/app/task/_components/botaoCriarTask"
import NewTaskModalContent from "@/app/task/_components/newTaskModalContent"
import tasksMock from "@/app/task/_components/tasksMock"
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog"

export default function TaskPage() {
  const [open, setOpen] = useState(false)
  const [tasks, setTasks] = useState(tasksMock)

  function handleAdd(newData) {
    const nextId = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1
    const newTask = { id: nextId, title: newData.title, done: false }
    setTasks((prev) => [newTask, ...prev])
    setOpen(false)
  }

  return (
    <div className="bg-black min-h-screen pt-16 px-6">
      <div className="flex justify-center ml-52 mb-4">
        <h2 className="text-white font-medium bg-[#7C3AED] p-2 rounded-full pl-4 pr-4">
          Histórico de Tasks
        </h2>
      </div>

      <div className="flex gap-8 items-start">
        <div className="w-full md:w-1/2 ml-16">
          <CardTaskPrincipal tasks={tasks} />
        </div>

        <div className="w-full md:w-1/2 mr-16">
          <CardTaskSecundaria />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger asChild>
            <BotaoCriarTask />
          </AlertDialogTrigger>

          <NewTaskModalContent
            initialText=""
            onClose={() => setOpen(false)}
            onSave={handleAdd}
          />
        </AlertDialog>
      </div>
    </div>
  )
}
