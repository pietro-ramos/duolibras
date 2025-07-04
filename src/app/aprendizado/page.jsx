import Image from 'next/image';
import alfabeto from '@/assets/images/cardsAprendizado/alfabeto.png';

// Componente simples de card temporário (substituindo o cardAprendizado removido)
function SimpleCard({ titulo, imagemUrl, descricao }) {
  return (
    <div className="card-menu card-hover max-w-sm mx-2">
      <div className="p-6">
        <Image 
          src={imagemUrl} 
          alt={titulo} 
          width={200} 
          height={150} 
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold mb-2 capitalize">{titulo}</h3>
        <p className="text-gray-600">{descricao}</p>
      </div>
    </div>
  );
}

export default function Aprendizado(){
    
    return(
        <div className="flex flex-col items-center text-center min-h-screen">
            <div className="prose mx-auto p-4 mt-10">
                <h1>Aprenda Libras</h1>
                <h2>Página dedicada para expôr conteúdo de Libras</h2>
                <p>Talvez podemos criar cards que redirecionam para tópicos como: alfabeto, números, frases do dia a dia, objetos escolares, objetos de casa, etc...</p>
            </div>
            <div className="flex flex-row gap-4 mt-6">
                <SimpleCard 
                  titulo='alfabeto' 
                  imagemUrl={alfabeto} 
                  descricao='Aprenda o alfabeto em LIBRAS com exemplos visuais e práticos'
                />
                <SimpleCard 
                  titulo='números' 
                  imagemUrl={alfabeto} 
                  descricao='Números e quantidades em LIBRAS para o dia a dia'
                />
            </div>
        </div>
        )
}