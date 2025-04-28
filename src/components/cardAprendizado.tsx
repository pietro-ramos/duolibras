import Image from "next/image"

export default function CardAprendizado({titulo, imagemUrl, descricao}: {titulo: string, imagemUrl: string, descricao: string}){
    
    return(
        <div className="flex flex-col card-container">
            <div className="card-flip border-solid border-2 shadow-sm">
                <div className="card-front bg-primary text-white flex flex-col items-center justify-center">
                    <Image src={imagemUrl} alt="imagem" width={60} height={80}/>
                    <h2>{titulo}</h2>
                </div>
                <div className="card-back bg-white text-gray-500 flex justify-center items-center p-4">
                    <p>{descricao}</p>
                </div>
            </div>
        </div>
    )
}