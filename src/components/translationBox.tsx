import { TranslationQuestionData } from "@/types/questions";

interface TranslationBoxProps {
  question: TranslationQuestionData;
  onAnswer: (selected: string) => void;
  selected?: string | null;
  showAnswer?: boolean;
}

export default function TranslationBox({
  question,
  onAnswer,
  selected,
  showAnswer,
}: TranslationBoxProps) {
  // Determina se a opção é um GIF/MP4 baseado na URL
  const isOptionMedia = (opt: string) => {
    return opt.includes('.gif') || opt.includes('.mp4') || opt.startsWith('http');
  };

  return (
    <div className="p-6 border rounded-xl shadow-md bg-white">
      <p className="text-lg mb-4 text-gray-800 leading-relaxed font-medium">
        {question.prompt}
      </p>
      
      {/* Exibe mídia da questão se houver (para questões libras-pt) */}
      {question.mediaUrl && (
        <div className="mb-6 flex justify-center">
          <div className="bg-gray-100 rounded-lg p-4">
            <img 
              src={question.mediaUrl} 
              alt="Sinal em Libras" 
              className="mx-auto rounded-lg shadow-sm"
              width={200} 
              height={200}
              style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {question.options.map((opt, id) => {
          const isSelected = selected === opt;
          const isCorrect = question.correctAnswer === opt;
          
          // Determinando as classes CSS baseadas no estado
          let buttonClass = "p-4 rounded-lg border text-center transition-all duration-200 flex flex-col items-center justify-center min-h-[100px] ";
          
          if (showAnswer) {
            if (isCorrect) {
              buttonClass += "bg-green-100 border-green-500 text-green-800 border-2";
            } else if (isSelected && !isCorrect) {
              buttonClass += "bg-red-100 border-red-500 text-red-800 border-2";
            } else {
              buttonClass += "bg-gray-50 border-gray-300 text-gray-600";
            }
          } else {
            if (isSelected) {
              buttonClass += "bg-blue-100 border-blue-500 text-blue-800 border-2";
            } else {
              buttonClass += "bg-gray-50 border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300";
            }
          }
          
          return (
            <button
              key={id}
              onClick={() => onAnswer(opt)}
              disabled={!!selected}
              className={buttonClass}
            >
              {isOptionMedia(opt) ? (
                <div className="flex flex-col items-center">
                  <img 
                    className="mb-2 rounded" 
                    src={opt} 
                    alt={`Opção ${String.fromCharCode(65 + id)}`} 
                    width={120} 
                    height={120}
                    style={{ maxWidth: '120px', maxHeight: '120px', objectFit: 'contain' }}
                  />
                  <span className="text-xs font-medium text-gray-600">
                    Opção {String.fromCharCode(65 + id)}
                  </span>
                </div>
              ) : (
                <div className="flex items-center justify-center w-full">
                  <div className="w-8 h-8 rounded-full border-2 border-current mr-3 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {String.fromCharCode(65 + id)}
                  </div>
                  <span className="flex-1 font-medium text-left">{opt}</span>
                </div>
              )}
              
              {/* Indicadores de resposta */}
              {showAnswer && isCorrect && (
                <div className="absolute top-2 right-2 text-green-600 text-xl">✓</div>
              )}
              {showAnswer && isSelected && !isCorrect && (
                <div className="absolute top-2 right-2 text-red-600 text-xl">✗</div>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Exibe informações adicionais quando a resposta é mostrada */}
      {showAnswer && (
        <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
          <div className="flex flex-wrap gap-4 text-sm text-purple-800">
            <span>
              <strong>Categoria:</strong> {question.category || 'Básico'}
            </span>
            <span>
              <strong>Dificuldade:</strong> {question.difficulty || 'Médio'}
            </span>
            <span>
              <strong>Direção:</strong> {
                question.direction === 'libras-pt' ? 'Libras → Português' : 'Português → Libras'
              }
            </span>
          </div>
        </div>
      )}
    </div>
  );
}