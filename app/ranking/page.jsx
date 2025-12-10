"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";

function Ranking() {
  const { usuarios } = useAuth();

  if (!usuarios || usuarios.length === 0) {
    return <p className="text-white text-center mt-20">Carregando...</p>;
  }

  // ordenar por XP
  const ordem = [...usuarios].sort((a, b) => b.xp - a.xp);
  const [primeiro, segundo, terceiro] = ordem;
  const tabela = ordem;

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-black pt-20 flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="bg-white rounded-2xl rounded-b-none relative flex flex-col items-center w-[59rem] h-[38rem] mt-12">
            
            {/* TOP 3 */}
            <div className="flex items-end gap-6 mt-12">
              
              {/* SEGUNDO */}
              <div className="h-[12rem] w-[9rem] bg-[#7C3AED] rounded-lg flex flex-col items-center justify-between p-3 hover:scale-110 transition">
                <Image src={segundo.avatar} width={40} height={40} alt="avatar" />
                <p className="text-white text-[12px] font-semibold -mt-5">{segundo.nome}</p>
                <p className="text-white bg-[#8B5CF6] rounded px-2 text-[10px]">{segundo.xp} XP</p>
                <Image src="/images/trofeudois.png" width={60} height={60} alt="2º lugar" />
              </div>

              {/* PRIMEIRO */}
              <div className="h-[14rem] w-[9rem] bg-[#7C3AED] rounded-lg flex flex-col items-center justify-between p-3 hover:scale-110 transition">
                <Image src={primeiro.avatar} width={40} height={40} alt="avatar" />
                <p className="text-white text-[12px] -mt-4 font-semibold">{primeiro.nome}</p>
                <p className="text-white bg-[#8B5CF6] rounded px-2 text-[10px]">{primeiro.xp} XP</p>
                <Image src="/images/primeirolugar.png" width={78} height={78} alt="1º lugar" />
              </div>

              {/* TERCEIRO */}
              <div className="h-[11rem] w-[9rem] bg-[#7C3AED] rounded-lg flex flex-col items-center justify-between p-3 hover:scale-110 transition">
                <Image src={terceiro.avatar} width={33} height={33} alt="avatar" />
                <p className="text-white font-semibold text-[12px] -mt-3">{terceiro.nome}</p>
                <p className="text-white bg-[#8B5CF6] rounded px-2 text-[10px]">{terceiro.xp} XP</p>
                <Image src="/images/terceiro.png" width={60} height={50} alt="3º lugar" />
              </div>
            </div>

            {/* TÍTULO */}
            <div className="h-[2rem] p-1 absolute -top-5 bg-white w-[13rem] flex justify-center rounded-2xl shadow-md">
              <h1 className="text-center font-semibold">RANKING BOARD</h1>
            </div>

            {/* TABELA */}
            <table className="w-[50rem] h-[17rem] mt-8 bg-[#7C3AED] rounded-lg">
              <thead>
                <tr className="text-white text-xs text-center">
                  <th>RANK</th>
                  <th>NOME</th>
                  <th>PONTOS</th>
                </tr>
              </thead>

              <tbody className="text-center font-semibold">
                {tabela.map((item, index) => (
                  <tr
                    key={item.id}
                    className="odd:bg-white even:bg-[#7C3AED] odd:text-[#7C3AED] even:text-white"
                  >
                    <td>{index + 1}</td>
                    <td className="flex items-center gap-2 w-16 mx-auto">
                      <Image src={item.avatar} width={20} height={20} className="rounded-full" alt="avatar" />
                      <span>{item.nome}</span>
                    </td>
                    <td>{item.xp} XP</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </>
  );
}

export default Ranking;
