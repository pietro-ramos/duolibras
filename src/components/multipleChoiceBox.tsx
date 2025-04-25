import { Exercise } from "@/models/Exercise";

export default function multipleChoiceBox({exercise, onAnswer} : {exercise: Exercise, onAnswer: (correct: boolean) => void}){
    const handleSelect = (option: string) => {
        const isCorrect = exercise.checkAnwser(option);
        onAnswer(isCorrect);
    };

    return(
        <div className="p-4 border rounded-x1 shadow-md bh-white">
            <p className="text-lg mb-2">{exercise.prompt}</p>
            {exercise.mediaUrl && (
                <video className="mb-4" controls width="300">
                    <source src={exercise.mediaUrl} type="video/mp4" />
                </video>
            )}
            {exercise.options && (
                <div className="flex flex-col gap-2">
                    {exercise.options.map((opt, id) => (
                        <button key={id} onClick={() => handleSelect(opt)} className="bg-blue-100 hover:bg-blue-200 p-2 rounded">
                            {opt}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};