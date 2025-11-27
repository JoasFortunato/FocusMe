'use client'

import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState('*************')
  const [newPassword, setNewPassword] = useState('*************')
  const [confirmPassword, setConfirmPassword] = useState('*************')

  return (
    <main className="min-h-screen bg-[#7c3aed] flex flex-col items-center p-6">
      <header className="w-full max-w-4xl text-center mt-6">
        <h1 className="text-4xl font-extrabold text-white">Alterar Senha</h1>
        <p className="mt-2 text-sm text-purple-100">Atualize sua informações de perfil.</p>
      </header>

      <div className="w-full max-w-4xl bg-white rounded-3xl mt-6 p-10 relative shadow-xl">
        <button
          aria-label="Voltar"
          className="absolute left-6 top-6 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          onClick={() => window.history.back()}
        >
          <svg
              width="30"
              height="30"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 22L10 14L18 6" />
            </svg>
        </button>

        <div className="mt-8 space-y-8">

          
        
          
          <div className="flex flex-col gap-0">
            <Label className="font-bold ml-10 text-lg text-gray-900 mb-0">Alterar Senha</Label>
            <div className="flex items-center bg-transparent rounded-full px-8 py-2">
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="bg-gray-300 border-none shadow-none outline-none text-gray-900 placeholder:text-gray-700 flex-1"
                placeholder="*************"
              />
              <Button
                onClick={() => alert('Abrir modal para alterar senha')}
                className="bg-[#7c3aed] hover:bg-violet-700 text-white font-semibold px-6 py-2 rounded-full ml-4"
              >
                Alterar
              </Button>
            </div>
          </div>

          
          <div className="flex flex-col gap-0">
            <Label className="font-bold ml-10 text-lg text-gray-900 mb-0">Confirmar Senha</Label>
            <div className="flex items-center bg-transparentrounded-full px-8 py-2">
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-gray-300 border-none shadow-none outline-none text-gray-900 placeholder:text-gray-700 flex-1"
                placeholder="*************"
              />
              <Button
                onClick={() => {
                  if (newPassword !== confirmPassword) {
                    alert('As senhas não conferem')
                    return
                  }
                  alert('Senha alterada com sucesso (simulação)')
                }}
                className="bg-[#7c3aed] hover:bg-violet-700 text-white font-semibold px-6 py-2 rounded-full ml-4"
              >
                Confirmar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}