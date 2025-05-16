import Image from "next/image";

export default function NotFound(){
    return(
        <div className="w-screen h-[90%] flex flex-col items-center justify-center ">
            <div className="flex flex-col items-center justify-center">
                <h1>Página não encontrada</h1>
                <p>Verificar a URL</p>
                <Image 
                    src="/not-found-robo.png" 
                    alt="Imagem de página não encontrada"
                    width={250}
                    height={250}
                />
            </div>
        </div>
    )
}