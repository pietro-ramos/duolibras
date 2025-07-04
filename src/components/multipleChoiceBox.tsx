import { MultipleChoiceQuestionData } from "@/types/questions";

interface MultipleChoiceBoxProps {
  exercise: MultipleChoiceQuestionData;
  onAnswer: (selected: string) => void;
  selected?: string | null;
  showAnswer?: boolean;
}

export default function MultipleChoiceBox({
  exercise,
  onAnswer,
  selected,
  showAnswer,
}: MultipleChoiceBoxProps) {
  return (
    <div className="p-6 border rounded-xl shadow-md bg-white">
      <p className="text-lg mb-4 text-gray-800 leading-relaxed">{exercise.prompt}</p>
      
      <div className="flex flex-col gap-3">
        {exercise.options.map((opt, id) => {
          const isSelected = selected === opt;
          const isCorrect = exercise.correctAnswer === opt;
          
          // Determinando as classes CSS baseadas no estado
          let buttonClass = "p-3 rounded-lg border text-left transition-all duration-200 ";
          
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
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full border-2 border-current mr-3 flex items-center justify-center text-xs font-bold">
                  {String.fromCharCode(65 + id)}
                </div>
                <span className="flex-1 font-medium">{opt}</span>
                {showAnswer && isCorrect && (
                  <span className="text-green-600 ml-2">✓</span>
                )}
                {showAnswer && isSelected && !isCorrect && (
                  <span className="text-red-600 ml-2">✗</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
      
      {/* Exibe feedback adicional se necessário */}
      {showAnswer && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Categoria:</strong> {exercise.category || 'Geral'} | 
            <strong> Dificuldade:</strong> {exercise.difficulty || 'Médio'}
          </p>
        </div>
      )}
    </div>
  );
}