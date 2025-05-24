import { TranslationQuestion } from "@/data/translationQuestions";

export default function TranslationBox({
  question,
  onAnswer,
  selected,
  showAnswer,
}: {
  question: TranslationQuestion;
  onAnswer: (selected: string) => void;
  selected?: string | null;
  showAnswer?: boolean;
}) {
  // Se a opção for um GIF, mostra como imagem; senão, mostra como texto
  const isOptionGif = (opt: string) => opt.endsWith('.gif') || opt.endsWith('.mp4');

  return (
    <div className="p-4 border rounded-xl shadow-md bg-white">
      <p className="text-lg mb-2">{question.prompt}</p>
      {question.mediaUrl && (
        <img src={question.mediaUrl} alt="GIF de Libras" className="mb-4 mx-auto" width={180} height={180} />
      )}
      <div className="flex flex-col gap-2">
        {question.options.map((opt, id) => {
          const isSelected = selected === opt;
          const isCorrect = question.correctAnswer === opt;
          return (
            <button
              key={id}
              onClick={() => onAnswer(opt)}
              disabled={!!selected}
              className={`p-2 rounded border
                ${isSelected ? (isCorrect && showAnswer ? "bg-green-200 border-green-600" : "bg-red-200 border-red-600") : "bg-blue-100 hover:bg-blue-200"}
                ${showAnswer && isCorrect ? "border-2 border-green-600" : ""}
              `}
            >
              {isOptionGif(opt) ? (
                <img src={opt} alt="Opção Libras" width={120} height={120} />
              ) : (
                opt
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}