import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Ranking() {
  const usuarios = [
    { nome: "Marquinhos", Horas: 29, avatar: "/images/marquinhos.png" },
    { nome: "Amanda", Horas: 19, avatar: "/images/amanda.png" },
    { nome: "Andressa", Horas: 15, avatar: "/images/andressa.png" },
    { nome: "Ariana", Horas: 9, avatar: "/images/Ariana.png" },
    { nome: "Bruno", Horas: 13, avatar: "/images/bruno.png" },
    { nome: "Phellipe", Horas: 10, avatar: "/images/phellipe.png" },
    { nome: "Lele", Horas: 7, avatar: "/images/lele.png" },
    { nome: "Marcela", Horas: 21, avatar: "/images/marcela.png" },
    { nome: "Vitinho", Horas: 23, avatar: "/images/Vitinho.png" },
    { nome: "Carlos", Horas: 5, avatar: "/images/carlos.png" },
  ];

  const ordem = usuarios.sort((a, b) => b.Horas - a.Horas);
  const [primeiro, segundo, terceiro] = ordem;
  const tabela = ordem.slice(3);

  return (
    <>
      {/* NAVBAR FIXA */}
      <Navbar />

      <div className="min-h-screen w-full bg-[#0F0F0F] pt-20 flex items-center justify-center">
        <div className="flex items-center justify-center w-full">
          {/* CARD PRINCIPAL */}
          <div className="bg-[#F6F6F6] rounded-2xl rounded-b-none relative flex flex-col items-center w-[45rem] h-[32rem] mt-20">
            {/* PÓDIO */}
            <div className="flex items-end gap-6 mt-8">
              {/* SEGUNDO */}
              <div className="h-[11rem] w-[8rem] bg-[#8B5CF6] rounded-lg flex flex-col items-center justify-between p-3 hover:scale-110 transition">
                <Image
                  src={segundo.avatar}
                  width={40}
                  height={40}
                  alt="Icone avatar"
                />
                <p className="text-white text-[12px] font-semibold -mt-5">
                  {segundo.nome}
                </p>
                <p className="text-white bg-[#7C3AED] rounded px-2 text-[10px] flex items-center gap-1 -mt-4">
                  {segundo.Horas}H
                  <Image
                    src="/images/estrela.png"
                    width={10}
                    height={10}
                    alt="Icone de estrela"
                  />
                </p>
                <Image
                  src="/images/trofeudois.png"
                  width={60}
                  height={60}
                  alt="Trofeu segundo lugar"
                />
              </div>

              {/* PRIMEIRO */}
              <div className="h-[13rem] w-[8rem] bg-[#8B5CF6] rounded-lg flex flex-col items-center justify-between p-3 hover:scale-110 transition">
                <Image
                  src={primeiro.avatar}
                  width={40}
                  height={40}
                  alt="Icone avatar"
                />
                <p className="text-white text-[12px] -mt-4 font-semibold">
                  {primeiro.nome}
                </p>
                <p className="text-white bg-[#7C3AED] rounded px-2 text-[10px] flex items-center gap-1 -mt-2 ">
                  {primeiro.Horas}H
                  <Image
                    src="/images/estrela.png"
                    width={10}
                    height={10}
                    alt=" Icone de estrela"
                  />
                </p>
                <Image
                  src="/images/primeirolugar.png"
                  width={78}
                  height={78}
                  alt="Trofeu primeiro lugar"
                />
              </div>

              {/* TERCEIRO */}
              <div className="h-[10rem] w-[8rem] bg-[#8B5CF6] rounded-lg flex flex-col items-center justify-between p-3 hover:scale-110 transition">
                <Image
                  src={terceiro.avatar}
                  width={33}
                  height={33}
                  alt="Icone avatar"
                />
                <p className="text-white font-semibold text-[12px] -mt-3">
                  {terceiro.nome}
                </p>
                <p className="text-white bg-[#7C3AED] rounded px-2 text-[10px] flex items-center gap-1 -mt-2">
                  {terceiro.Horas}H
                  <Image
                    src="/images/estrela.png"
                    width={10}
                    height={10}
                    alt="Icone de estrela"
                  />
                </p>
                <Image
                  src="/images/terceiro.png"
                  width={60}
                  height={50}
                  alt="Trofeu terceiro lugar"
                />
              </div>
            </div>

            {/* TÍTULO */}
            <div className="h-[2rem] p-1 absolute -top-5 bg-[#F6F6F6] w-[13rem] flex justify-center rounded-2xl shadow-md">
              <h1 className="text-center font-semibold">RANKING BOARD</h1>
            </div>

            {/* TABELA */}
            <table className="w-[38rem] h-[13rem] mt-12 bg-[#7C3AED] rounded-lg overflow-hidden">
              <thead>
                <tr className="text-white text-xs">
                  <th className="px-4 py-2">RANK</th>
                  <th className="px-4 py-2">NOME</th>
                  <th className="px-4 py-2">HORAS</th>
                </tr>
              </thead>

              <tbody className="font-semibold">
                {tabela.map((item, index) => (
                  <tr
                    key={index}
                    className={`text-[0.75rem] ${
                      index % 2 === 0
                        ? "bg-[#F6F6F6] text-[#8B5CF6]"
                        : "bg-[#8B5CF6] text-white"
                    }`}
                  >
                    <td className="text-center">{index + 4}</td>
                    <td className="flex items-center gap-2 w-20 mx-auto">
                      <Image
                        className="rounded-full"
                        src={item.avatar}
                        width={20}
                        height={20}
                        alt=""
                      />
                      {item.nome}
                    </td>
                    <td className="text-center">{item.Horas}H</td>
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
