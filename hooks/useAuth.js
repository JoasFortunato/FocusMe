"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// -------------------------------------------
//   LISTA GLOBAL DE USUÁRIOS (para ranking)
// -------------------------------------------
const USERS = [
  {
    id: 1,
    nome: "Marquinhos",
    xp: 112,
    email: "marquinhos@email.com",
    senha: "123",
    avatar: "/images/marquinhos.png",
    pomodoros: 0,
  },
  {
    id: 2,
    nome: "Amanda",
    xp: 76,
    email: "amanda@email.com",
    senha: "123",
    avatar: "/images/amanda.png",
    pomodoros: 0,
  },
  {
    id: 3,
    nome: "Andressa",
    xp: 82,
    email: "andressa@email.com",
    senha: "123",
    avatar: "/images/andressa.png",
    pomodoros: 0,
  },
  {
    id: 4,
    nome: "Ariana",
    xp: 109,
    email: "ariana@email.com",
    senha: "123",
    avatar: "/images/Ariana.png",
    pomodoros: 0,
  },
  {
    id: 5,
    nome: "Bruno",
    xp: 13,
    email: "bruno@email.com",
    senha: "123",
    avatar: "/images/bruno.png",
    pomodoros: 0,
  },
  {
    id: 6,
    nome: "Phellipe",
    xp: 63,
    email: "phellipe@email.com",
    senha: "123",
    avatar: "/images/phellipe2.png",
    pomodoros: 0,
  },
  {
    id: 7,
    nome: "Lele",
    xp: 77,
    email: "lele@email.com",
    senha: "123",
    avatar: "/images/lele.png",
    pomodoros: 0,
  },
  {
    id: 8,
    nome: "Marcela",
    xp: 74,
    email: "marcela@email.com",
    senha: "123",
    avatar: "/images/marcela.png",
    pomodoros: 0,
  },
  {
    id: 9,
    nome: "Vitinho",
    xp: 97,
    email: "vitinho@email.com",
    senha: "123456",
    avatar: "/images/Vitinho.png",
    pomodoros: 0,
  },
  {
    id: 10,
    nome: "Carlos",
    xp: 50,
    email: "carlos@email.com",
    senha: "123",
    avatar: "/images/carlos.png",
    pomodoros: 0,
  },
];

export function AuthProvider({ children }) {
  // Usuário logado
  const [usuario, setUsuario] = useState(null);

  // Lista global de todos os usuários
  const [usuarios, setUsuarios] = useState(USERS);

  // -----------------------
  //        LOGIN
  // -----------------------
  const login = (email, senha) => {
    const encontrado = usuarios.find(
      (u) => u.email === email && u.senha === senha
    );

    if (encontrado) {
      setUsuario(encontrado);
      return { ok: true };
    }

    return { ok: false, msg: "Email ou senha incorretos!" };
  };

  const logout = () => {
    setUsuario(null);
  };

  // -----------------------
  //   ALTERAR XP DO USUÁRIO
  // -----------------------
  const adicionarXp = (id, valor) => {
    setUsuarios((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, xp: u.xp + valor } : u
      )
    );

    // se o usuário logado for o mesmo, atualiza também
    if (usuario?.id === id) {
      setUsuario((prev) => ({ ...prev, xp: prev.xp + valor }));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        usuarios,
        login,
        logout,
        adicionarXp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
