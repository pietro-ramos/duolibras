'use client'
export default function NotFound () {
    return(
        <div className="flex flex-col">
            <h1>Página não encontrada</h1>
            <p>o link inserido está <u>incorreto</u></p>
            <button className="text-blue-600 underline" onClick={() => window.history.back()}>Voltar</button>
        </div>
    )
}