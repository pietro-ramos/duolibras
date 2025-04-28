import CardAprendizado from "@/components/cardAprendizado"
import alfabeto from '@/assets/images/cardsAprendizado/alfabeto.png'

export default function Aprendizado(){
    
    return(
        <div className="flex flex-col items-center text-center min-h-screen">
            <div className="prose mx-auto p-4 mt-10">
                <h1>Aprenda Libras</h1>
                <h2>Página dedicada para expôr conteúdo de Libras</h2>
                <p>Talvez podemos criar cards que redirecionam para tópicos como: alfabeto, números, frases do dia a dia, objetos escolares, objetos de casa, etc...</p>
            </div>
            <div className="flex flex-row gap-1">
                <CardAprendizado titulo='alfabeto' imagemUrl={alfabeto} descricao='Qualquer coisa so pra fazer se funcionou'/>
                <CardAprendizado titulo='alfabeto' imagemUrl={alfabeto} descricao='Qualquer coisa so pra fazer se funcionou'/>
            </div>
        </div>
        )
}