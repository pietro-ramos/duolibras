import { MultipleChoiceQuestion } from "@/data/multipleChoiceQuestions";

export default function MultipleChoiceBox({
  exercise,
  onAnswer,
  selected,
  showAnswer,
}: {
  exercise: MultipleChoiceQuestion;
  onAnswer: (selected: string) => void;
  selected?: string | null;
  showAnswer?: boolean;
}) {
  return (
    <div className="p-4 border rounded-xl shadow-md bg-white">
      <p className="text-lg mb-2">{exercise.prompt}</p>
      {exercise.mediaUrl && (
        <img src={exercise.mediaUrl} alt="GIF de Libras" className="mb-4 mx-auto" width={180} height={180} />
      )}
      <div className="flex flex-col gap-2">
        {exercise.options.map((opt, id) => {
          const isSelected = selected === opt;
          const isCorrect = exercise.correctAnswer === opt;
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
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}