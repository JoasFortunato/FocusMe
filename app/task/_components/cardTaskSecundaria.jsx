"use client"
import { Checkbox } from "@/components/ui/checkbox"

//agora as tasks vêm como props
export default function CardTaskSecundaria({id, title, tasks, onSwap, onToggleTask}) {

  return (
    <div className=" bg-white rounded-2xl shadow-xl p-4 w-full border-l-4 border-purple-400">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800"> 
          {title}{" "}
          <span className="font-normal text-gray-600"> 
            ({tasks.length} tasks)
          </span>
        </h3>
        <button
        onClick={()=> onSwap(id)}
        className="text-sm text-gray-800 underline hover:text-purple-600">
          more
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        {tasks.slice(0,2).map(task => (
          <li key={task.id} className="flex items-center text-sm">
            <span className="w-1.5 h-5 bg-purple-500 rounded mr-2"/>
            <Checkbox
            checked={task.done}
            className="mr-2"
            onCheckedChange={c => onToggleTask(task.id, c)} />
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  )
}