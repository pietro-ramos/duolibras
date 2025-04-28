import Link from "next/link";


export default function Jogos (){

    return(
        <div className="flex flex-col items-center gap-1 p-4 justify-evenly min-h-screen w-screen">
            
            <Link href='jogos/multipleChoice'><div className="card-menu card-hover">Multipla Escolha</div></Link>
            <Link href='jogos/match'><div className="card-menu card-hover">Conecte os Pares</div></Link>
            <Link href='jogos/translation'><div className="card-menu card-hover">Traduza da Libras para Português</div></Link>
            <Link href='jogos/imageChoice'><div className="card-menu card-hover">Traduza do Português para Libras</div></Link>
            <Link href='jogos/fillInBlank'><div className="card-menu card-hover">Complete a frase</div></Link>
        </div>
    )
}