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
    <>
      <Navbar />
      <div className="bg-black min-h-screen w-full pt-20 px-6">
        <div className="flex justify-center ml-48 mb-6">
          <h2 className="text-white font-medium bg-[#7C3AED] p-2 rounded-full px-6">
            Histórico de Tasks
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/2">
            <CardTaskPrincipal tasks={tasks} />
          </div>
          <div className="w-full lg:w-1/2">
            <CardTaskSecundaria />
          </div>
        </div>
        <div className="flex justify-end mt-8">
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
    </>
  )
}
