"use client"
import Navbar from "@/components/Navbar";
import CardTaskPrincipal from "@/app/task/_components/cardTaskPrincipal"
import CardTaskSecundaria from "@/app/task/_components/cardTaskSecundaria"
import { useState } from "react";

//helper pra calcular o proximo id
function getNextId(list){
  return list.length ? Math.max(...list.map(t => t.id)) + 1 : 1
}

export default function TaskPage() {
  const [cards, setCards] = useState([
    {id: 101, title: "Weekly tasks", tasks: [
      {id: 1, title: "Resolver 5 exercícios", done: false},
      {id: 2, title: "Revisar redação", done: true},
      {id: 3, title: "Fazer mapa mental", done: false},
    ],
  },
  {id: 102, title: "Biologia", tasks: [
    {id: 1, title: "Fazer resumo", done: false},
    {id: 2, title: "Assistir aula", done: false},
  ],
},
])

// guarda qual card ta ativo como principal
const [activeCardId, setActiveCardId] = useState(null)

// adicionar task
function addTask(cardId, title) {
  if (!cardId) return
  setCards(prev => {
    if (!Array.isArray(prev)) return prev
    return prev.map(card =>
      card.id === cardId
        ? {...card, tasks: [{id: getNextId(card.tasks), title, done: false}, ...card.tasks]}
        : card
    )
  })
}


  //funcao para marcar task como concluida
  function toggleTask(cardId, taskId, checked) {
      setCards(prev => prev.map(card => card.id === cardId ? {
        ...card, tasks: card.tasks.map(t => t.id === taskId ? {...t, done: !!checked} : t)}
      : card
    ))
    }

  //criação de novos cards
  const [showNewCardModal, setShowNewCardModal] =useState(false)
  const [newCardTitle, setNewCardTitle] = useState("")

  function handleCreateCard(){
    if(!newCardTitle.trim()) return

    const nextId = cards.length  ? Math.max (...cards.map(c => c.id)) + 1:100
    const newCard = {id:nextId, title:newCardTitle.trim(), tasks:[]}

    setCards(prev=> [...prev, newCard])
    setNewCardTitle("")
    setShowNewCardModal(false)
    }

    //pega o card ativo (ou null)
    const activeCard = activeCardId
    ? cards.find(c => c.id === activeCardId)
    : null

  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen w-full pt-20 px-6">

        <div className="flex justify-center ml-48 mb-6 gap-4 items-center">
          <h2 className="text-white font-medium bg-[#7C3AED] p-2 rounded-full px-6">
            Histórico de Tasks
          </h2>

          <button 
          onClick={() => setShowNewCardModal(true)} 
          className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-100">
            + Novo Card
          </button>
        </div>
        {showNewCardModal && (
          <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-80">
              <h3 className="text-xl font-bold mb-4">
                Novo Card
              </h3>
              <input 
              value={newCardTitle}
              onChange={e => setNewCardTitle(e.target.value)}
              placeholder="Título do card"
              className="w-full p-2 border rounded mb-4 bg-transparent "/>
              <div className="flex justify-end gap-3">
                <button
                onClick={() => setShowNewCardModal(false)}
                className="px-3 py-1 border rounded">
                  Cancelar
                </button>
                <button
                onClick={handleCreateCard}
                className="px-3 py-1 bg-[#7C3AED] text-white rounded ">
                  Criar
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/2">
            {activeCard ? (
              <CardTaskPrincipal 
                tasks={activeCard.tasks} 
                title={activeCard.title}
                onAdd={(title) => addTask(activeCard.id, title)}
                onToggle={(id, checked) => toggleTask(activeCard.id, id, checked)} />) : 
                (<div className="text-white font-bold flex justify-center">Selecione um card para visualizar</div>)}
          </div>

          <div className="flex flex-col gap-8 w-full lg:w-1/2">
            {cards.map(card => (
              <CardTaskSecundaria
              key={card.id}
              id={card.id}
              title={card.title}
              tasks={card.tasks}
              onSwap={() => setActiveCardId(card.id)} //agora so muda o ativo
              onAddTask={(cardId, title) => addTask(cardId, title)}
              onToggleTask={(cardId, taskId, checked) => toggleTask(cardId, taskId, checked)}/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
