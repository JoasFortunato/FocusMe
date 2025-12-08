"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const avatars = [
  "/images/amanda.png",
  "/images/andressa.png",
  "/images/Ariana.png",
  "/images/bruno.png",
  "/images/marcela.png",
  "/images/marquinhos.png",
  "/images/phellipe2.png",
  "/images/vitinho.png",
  "/images/carlos.png",
  "/images/lele.png",
  "/images/foto.png", // slot de upload (penúltimo visualmente)
];

export default function AlterarAvatar() {
  const [selected, setSelected] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);
  const router = useRouter();

  const uploadSlotIndex = avatars.length - 1;

  function handleSelect(index) {
    // se for slot de upload, abre o file picker
    if (index === uploadSlotIndex) {
      fileInputRef.current?.click();
      return;
    }
    setSelected(index);
  }

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return;

    const url = URL.createObjectURL(file);
    setUploadedUrl(url);
    setUploadedFile(file);
    setSelected(uploadSlotIndex);

    e.target.value = "";
  }

  function handleConfirm() {
    if (selected === null) return;

    // avatar padrão
    if (selected !== uploadSlotIndex) {
      localStorage.setItem("fotoAtual", avatars[selected]);
      router.push("/Telaconfig");
      return;
    }

    // upload: converter para data URL e salvar (atenção ao tamanho)
    if (uploadedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result;
        try {
          localStorage.setItem("fotoAtual", dataUrl);
        } catch (err) {
          console.error("Erro ao salvar no localStorage:", err);
        }
        router.push("/Telaconfig");
      };
      reader.readAsDataURL(uploadedFile);
    }
  }

  // gridItems inclui todos os avatars e o slot "confirm" como último item
  const gridItems = [...avatars, "confirm-slot"];

  return (
    <div className="bg-[#7c3aed] min-h-screen flex flex-col items-center pt-6 pb-6 px-4">
      <div className="w-full max-w-5xl flex flex-col items-center mb-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-1 text-center">
          Alterar Avatar
        </h1>
        <span className="text-white text-sm sm:text-lg text-center">
          Atualize suas informações de perfil.
        </span>
      </div>

      <div className="relative bg-white w-[95vw] max-w-5xl rounded-2xl p-6 sm:p-8 pb-6">
        <Link
          href="/Telaconfig"
          className="absolute left-6 sm:left-8 top-6 text-purple-600 text-3xl sm:text-4xl font-normal hover:text-purple-800"
          aria-label="Voltar"
        >
          &lt;
        </Link>

        {/* input oculto para upload */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Grid centralizada; 2 cols mobile, 4 cols sm+ */}
        <div
          className="mx-auto grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6 justify-items-center"
          style={{ gridAutoRows: "min-content" }}
        >
          {gridItems.map((item, idx) => {
            // Slot de confirmar (último item)
            if (item === "confirm-slot") {
              return (
                <div
                  key="confirm-slot"
                  className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center"
                >
                  <Button
                    onClick={handleConfirm}
                    disabled={selected === null}
                    aria-label="Confirmar avatar"
                    className="px-4 py-2 rounded-full bg-[#caa7f1] hover:bg-purple-800 text-white font-semibold disabled:opacity-50"
                  >
                    Confirmar
                  </Button>
                </div>
              );
            }

            // Slot de upload (último avatar do array)
            if (idx === uploadSlotIndex) {
              return (
                <button
                  key={`upload-${idx}`}
                  onClick={() => handleSelect(idx)}
                  type="button"
                  aria-label="Enviar nova foto"
                  className={`w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center rounded-full border-4 transition
                    ${selected === idx ? "border-[#7c3aed] shadow-lg ring-2 ring-purple-200" : "border-transparent"}
                  `}
                >
                  <div className="w-[82%] h-[82%] rounded-full overflow-hidden flex items-center justify-center">
                    {uploadedUrl ? (
                      <img src={uploadedUrl} alt="Preview da foto" className="w-full h-full object-cover rounded-full" />
                    ) : (
                      <Image src={item} width={200} height={200} alt="Adicionar foto" className="rounded-full object-cover w-full h-full" />
                    )}
                  </div>
                </button>
              );
            }

            // Avatar padrão
            return (
              <button
                key={item + idx}
                className={`w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center rounded-full border-4 transition
                  ${selected === idx ? "border-[#7c3aed] shadow-lg ring-2 ring-purple-200" : "border-transparent"}
                `}
                onClick={() => handleSelect(idx)}
                type="button"
                aria-label={`Selecionar avatar ${idx + 1}`}
              >
                <div className="w-[82%] h-[82%] rounded-full overflow-hidden">
                  <Image
                    src={item}
                    width={200}
                    height={200}
                    alt={`Avatar ${idx + 1}`}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}