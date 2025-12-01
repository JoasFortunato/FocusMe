import Navbar from "@/components/Navbar";
import Image from "next/image";

function Ranking() {
  const usuarios = [
    { nome: "Marquinhos", xP: 112, avatar: "/images/marquinhos.png" },
    { nome: "Amanda", xP: 76, avatar: "/images/amanda.png" },
    { nome: "Andressa", xP: 82, avatar: "/images/andressa.png" },
    { nome: "Ariana", xP: 109, avatar: "/images/Ariana.png" },
    { nome: "Bruno", xP: 13, avatar: "/images/bruno.png" },
    { nome: "Phellipe", xP: 63, avatar: "/images/phellipe2.png" },
    { nome: "Lele", xP: 77, avatar: "/images/lele.png" },
    { nome: "Marcela", xP: 74, avatar: "/images/marcela.png" },
    { nome: "Vitinho", xP: 97, avatar: "/images/Vitinho.png" },
    { nome: "Carlos", xP: 50, avatar: "/images/carlos.png" },
  ];

  const ordem = usuarios.sort((a, b) => b.xP - a.xP);
  const [primeiro, segundo, terceiro] = ordem;
  const tabela = ordem;

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-[#0F0F0F] pt-20 flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="bg-[#F6F6F6] rounded-2xl rounded-b-none relative flex flex-col items-center w-[53rem] h-[35rem] mt-8 ">
            <div className="flex items-end gap-6 mt-10">
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
                  {segundo.xP} XP
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
                  {primeiro.xP} XP
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
                  {terceiro.xP} XP
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
            <div className="h-[2rem] p-1 absolute -top-5 bg-[#F6F6F6] w-[13rem] flex justify-center rounded-2xl shadow-md">
              <h1 className="text-center font-semibold">RANKING BOARD</h1>
            </div>
            <table className="w-[45rem] h-[16rem] mt-8 bg-[#7C3AED] rounded-lg ">
              <thead className="text-center">
                <tr className="text-white text-xs">
                  <th className="px-4 py-2">RANK</th>
                  <th className="px-4 py-2">NOME</th>
                  <th className="px-4 py-2">PONTOS</th>
                </tr>
              </thead>
              <tbody className=" bg-[#7C3AED]text-center font-semibold">
                {tabela.map((item, index) => (
                  <tr
                    key={index}
                    className="odd:bg-[#F6F6F6] even:bg-[#8B5CF6] odd:text-[#8B5CF6] even:text-[#F6F6F6]"
                  >
                    <td className="text-center text-[0.75rem]"> {index + 1}</td>
                    <td className="flex items-center gap-2 w-16 mx-auto">
                      <Image
                        className="rounded-full"
                        src={item.avatar}
                        width={20}
                        height={20}
                        alt="avatar de cada item"
                      />
                      <span className="text-center text-[0.75rem]">
                        {item.nome}
                      </span>
                    </td>
                    <td className=" text-center text-[0.75rem]">
                      {item.xP} XP
                    </td>
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
