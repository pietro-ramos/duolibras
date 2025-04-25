'use client'
import { useState } from "react";
import { exercises } from "@/data/exercises";
import MultipleChoiceBox from "@/components/multipleChoiceBox";


export default function multipleChoice(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [feedback, setFeedback] = useState<string | null>(null);

    const handleAnswer = (correct: boolean) => {
        setFeedback( correct ? 'Correto!' : 'Tente novamente.');
        setTimeout(() => {
        setFeedback(null);
        setCurrentIndex((prev)=> (prev+1) % exercises.length);
        }, 1500)
    };

    return(
        <div>
            <MultipleChoiceBox exercise={exercises[currentIndex]} onAnswer={handleAnswer}/>
            {feedback && <p className="mt-4 text-xl">{feedback}</p>}
        </div>
    )
}