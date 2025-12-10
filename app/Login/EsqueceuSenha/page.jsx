"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EsqueceuSenhaPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [mostrarCard, setMostrarCard] = useState(false);
  const [mostrarRedefinir, setMostrarRedefinir] = useState(false);

  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [msgRedefinir, setMsgRedefinir] = useState("");

  const [erroCodigo, setErroCodigo] = useState("");

  const codeRefs = [useRef(), useRef(), useRef(), useRef()];
  let codeValues = ["", "", "", ""];

  const handleEnviar = (e) => {
    e.preventDefault();

    if (!email) {
      setErro("Preencha o email para continuar!");
      setMensagem("");
      return;
    }

    if (email === "teste@email.com") {
      setMensagem("Código enviado!");
      setErro("");
      setMostrarCard(true);

      setTimeout(() => {
        codeRefs[0].current?.focus();
      }, 200);
    } else {
      setErro("Este email não possui cadastro.");
      setMensagem("");
    }
  };

  const verificarCodigo = () => {
    const codigoDigitado = codeValues.join("");

    if (codigoDigitado === "1234") {
      setErroCodigo("");
      setMostrarRedefinir(true);
    } else {
      setErroCodigo("Código incorreto!");
    }
  };

  const handleRedefinirSenha = () => {
    setMsgRedefinir("");

    if (senha !== confirmarSenha) {
      setMsgRedefinir({ tipo: "erro", texto: "As senhas não estão iguais!" });
      return;
    }

    if (senha === "123456") {
      setMsgRedefinir({
        tipo: "sucesso",
        texto: "Senha alterada com sucesso!",
      });

      setTimeout(() => {
        router.push("/Login");
      }, 2000);
    } else {
      setMsgRedefinir({
        tipo: "erro",
        texto: "A senha precisa ter no mínimo 6 caracteres",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#7C3AED] to-black bg-cover bg-no-repeat relative">

      {/* Modal - Código */}
      {mostrarCard && !mostrarRedefinir && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white w-72 p-6 rounded-2xl shadow-2xl text-center">
            <h2 className="text-lg font-semibold mb-3">Digite o código</h2>
            <p className="text-gray-600 text-sm mb-4">
              Enviamos um código de 4 dígitos para seu e-mail.
            </p>

            <div className="flex gap-2 justify-center mb-5">
              {[0, 1, 2, 3].map((i) => (
                <input
                  key={i}
                  ref={codeRefs[i]}
                  maxLength="1"
                  className="w-12 h-12 border rounded-lg text-center text-xl"
                  onChange={(e) => {
                    const value = e.target.value;

                    if (!/^[0-9]?$/.test(value)) {
                      e.target.value = "";
                      return;
                    }

                    codeValues[i] = value;

                    if (value && i < 3) codeRefs[i + 1].current.focus();
                    if (!value && i > 0) codeRefs[i - 1].current.focus();
                  }}
                />
              ))}
            </div>

            <button
              onClick={verificarCodigo}
              className="w-full bg-[#7C3AED] text-white py-2 rounded-lg hover:bg-[#6B21A8]"
            >
              Confirmar
            </button>

            {erroCodigo && (
              <p className="text-red-600 text-center mt-3">{erroCodigo}</p>
            )}
          </div>
        </div>
      )}

      {/* Modal - Redefinir Senha */}
      {mostrarRedefinir && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white w-80 p-6 rounded-2xl shadow-2xl">
            <h2 className="text-xl font-semibold text-center mb-4">
              Redefinir senha
            </h2>

            <div className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-medium">Nova senha *</label>
                <input
                  type="password"
                  className="w-full p-2 border rounded-lg mt-1"
                  placeholder="Digite a nova senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Confirmar nova senha *
                </label>
                <input
                  type="password"
                  className="w-full p-2 border rounded-lg mt-1"
                  placeholder="Confirme a nova senha"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                />
              </div>

              <button
                onClick={handleRedefinirSenha}
                className="w-full bg-[#7C3AED] text-white py-2 rounded-lg hover:bg-[#6B21A8]"
              >
                Redefinir senha
              </button>

              {msgRedefinir && (
                <p
                  className={`text-center mt-2 ${
                    msgRedefinir.tipo === "sucesso"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {msgRedefinir.texto}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Card principal */}
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 relative z-10">
        <h1 className="text-2xl font-bold text-center mb-2">
          Esqueceu sua senha?
        </h1>
        <p className="text-center text-gray-600 text-sm mb-6">
          Digite seu e-mail e enviaremos um código para redefinição.
        </p>

        <form onSubmit={handleEnviar} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium">Email *</label>
            <input
              type="email"
              placeholder="Digite seu email"
              className="w-full p-2 border rounded-lg mt-1 bg-white focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#7C3AED] text-white p-2 rounded-lg hover:bg-[#6B21A8] transition"
          >
            Enviar código
          </button>
        </form>

        {erro && <p className="text-red-600 text-center mt-3">{erro}</p>}
        {mensagem && (
          <p className="text-green-600 text-center mt-3">{mensagem}</p>
        )}

        <p className="text-center text-sm mt-6">
          Lembrou sua senha?{" "}
          <Link href="/Login" className="text-blue-600 hover:underline">
            Voltar ao login
          </Link>
        </p>
      </div>
    </div>
  );
}
