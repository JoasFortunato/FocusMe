"use client";
import { createContext, useContext, useState } from "react";

// --- MOCK do usuário ---
const USER_MOCK = {
  email: "teste@email.com",
  senha: "123456",
  nome: "João Victor",
  xp: 25, // XP inicial
  pomodoros: 0,
};

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  // -----------------------
  //   ESTADOS GLOBAIS
  // -----------------------

  const [xp, setXp] = useState(0);
  const [pomodoros, setPomodoros] = useState(0);

  const [config, setConfig] = useState({
    tema: "light",
    volume: 50,
    tempoPomodoro: 25,
    tempoDescanso: 5,
  });

  const [tarefas, setTarefas] = useState([]);

  // -----------------------
  //       LOGIN
  // -----------------------
  const login = (email, senha) => {
    if (email === USER_MOCK.email && senha === USER_MOCK.senha) {
      
      // Seta o usuário
      setUsuario(USER_MOCK);

      // Inicia os estados com os valores iniciais do usuário
      setXp(USER_MOCK.xp);
      setPomodoros(USER_MOCK.pomodoros);

      return { ok: true };
    }
    return { ok: false, msg: "Email ou senha incorretos!" };
  };

  const logout = () => {
    setUsuario(null);
    setXp(0);
    setPomodoros(0);
    setConfig({
      tema: "light",
      volume: 50,
      tempoPomodoro: 25,
      tempoDescanso: 5,
    });
    setTarefas([]);
  };

  // -----------------------
  //      FUNÇÕES EXTRAS
  // -----------------------

  const adicionarXp = (valor) => setXp((prev) => prev + valor);

  const adicionarPomodoro = () => setPomodoros((prev) => prev + 1);

  const atualizarConfig = (novaConfig) =>
    setConfig((prev) => ({ ...prev, ...novaConfig }));

  const adicionarTarefa = (titulo) => {
    setTarefas((prev) => [
      ...prev,
      {
        id: Date.now(),
        titulo,
        completa: false,
      },
    ]);
  };

  const alternarTarefa = (id) => {
    setTarefas((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completa: !t.completa } : t
      )
    );
  };

  const removerTarefa = (id) => {
    setTarefas((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        login,
        logout,

        xp,
        adicionarXp,

        pomodoros,
        adicionarPomodoro,

        config,
        atualizarConfig,

        tarefas,
        adicionarTarefa,
        alternarTarefa,
        removerTarefa,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
