import Navbar from "@/components/Navbar";
import CardTaskPrincipal from "@/app/task/_components/cardTaskPrincipal"
import CardTaskSecundaria from "@/app/task/_components/cardTaskSecundaria"
import BotaoCriarTask from "@/app/task/_components/botaoCriarTask"

export default function TaskPage() {
  return (
    <>
      <Navbar />

      <div className="bg-black min-h-screen pt-20 px-6">
        <div className="flex justify-center ml-52 mb-4">
          <h2 className="text-white font-medium bg-purple-600 p-2 rounded-full pl-4 pr-4">
            Histórico de Tasks
          </h2>
        </div>

        <div className="flex gap-8 items-start">
          <div className="w-full md:w-1/2 ml-16">
            <CardTaskPrincipal />
          </div>

          <div className="w-full md:w-1/2 mr-16">
            <CardTaskSecundaria />
          </div>
        </div>

        <div className="flex justify-end">
          <BotaoCriarTask />
        </div>
      </div>
    </>
  );
}

