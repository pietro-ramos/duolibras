'use client'
import { useSearchParams, useRouter } from 'next/navigation';
import { translationQuestionsLibrasPt, translationQuestionsPtLibras } from '@/data/translationQuestions';
import TranslationBox from '@/components/TranslationBox';
import { useState } from 'react';

export default function TranslationGame() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const direction = searchParams.get('direction');

  const questions = direction === 'pt-libras'
    ? translationQuestionsPtLibras
    : translationQuestionsLibrasPt;

  const totalQuestions = questions.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>(Array(totalQuestions).fill(null));
  const [showAnswer, setShowAnswer] = useState(false);
  const [finished, setFinished] = useState(false);

  // Se não houver direção, mostra a escolha
  if (!direction) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h2 className="text-2xl font-bold mb-4">Escolha o tipo de tradução</h2>
        <button
          className="card-menu card-hover"
          onClick={() => router.push('?direction=libras-pt')}
        >
          Libras para Português
        </button>
        <button
          className="card-menu card-hover"
          onClick={() => router.push('?direction=pt-libras')}
        >
          Português para Libras
        </button>
      </div>
    );
  }

    if (!questions || questions.length === 0) {
        return (
        <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-xl font-bold mb-4">Nenhuma questão disponível para esta direção.</h2>
        <button className="card-menu card-hover" onClick={() => router.push('/jogos/translation')}>
            Voltar
        </button>
        </div>
        );
    }
    
  const currentQuestion = questions[currentIndex];

  const handleAnswer = (selected: string) => {
    if (userAnswers[currentIndex] !== null) return;
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentIndex] = selected;
    setUserAnswers(updatedAnswers);
    setShowAnswer(true);
  };

  const handleNext = () => {
    setShowAnswer(false);
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFinished(true);
    }
  };

  const handlePrev = () => {
    setShowAnswer(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isCorrect = userAnswers[currentIndex] === currentQuestion.correctAnswer;
  const correctCount = userAnswers.filter((ans, idx) => ans === questions[idx].correctAnswer).length;

  if (finished) {
    return (
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-2xl font-bold mb-4">Resultado</h2>
        <p className="mb-2">Você acertou <span className="font-bold">{correctCount}</span> de <span className="font-bold">{totalQuestions}</span> questões.</p>
        <div className="w-full max-w-md mt-6">
          <h3 className="font-semibold mb-2">Revisão das respostas:</h3>
          <ul>
            {questions.map((q, idx) => (
              <li key={q.id} className="mb-2">
                <span className="font-bold">Q{idx + 1}:</span> {q.prompt}<br/>
                <span>Sua resposta: </span>
                <span className={userAnswers[idx] === q.correctAnswer ? "text-green-600" : "text-red-600"}>
                  {userAnswers[idx] ?? "Não respondida"}
                </span>
                <span> | Correta: {q.correctAnswer}</span>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="mt-6 p-2 bg-blue-500 text-white rounded"
          onClick={() => {
            setCurrentIndex(0);
            setUserAnswers(Array(totalQuestions).fill(null));
            setShowAnswer(false);
            setFinished(false);
          }}
        >
          Refazer exercício
        </button>
        <button
          className="mt-2 p-2 bg-gray-300 rounded"
          onClick={() => router.push('/jogos/translation')}
        >
          Voltar para seleção de direção
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 font-bold">
        Questão {currentIndex + 1} / {totalQuestions}
      </div>
      <div className="w-full max-w-md">
        <TranslationBox
          question={currentQuestion}
          onAnswer={handleAnswer}
          selected={userAnswers[currentIndex]}
          showAnswer={showAnswer}
        />
      </div>
      {showAnswer && (
        <div className={`mt-4 text-lg ${isCorrect ? "text-green-600" : "text-red-600"}`}>
          {isCorrect ? "Correto!" : `Errado! Resposta correta: ${currentQuestion.correctAnswer}`}
        </div>
      )}
      <div className="flex gap-2 mt-6">
        <button onClick={handlePrev} disabled={currentIndex === 0} className="p-2 bg-gray-200 rounded disabled:opacity-50">
          Anterior
        </button>
        <button
          onClick={handleNext}
          disabled={userAnswers[currentIndex] === null}
          className="p-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          {currentIndex === totalQuestions - 1 ? "Finalizar" : "Próxima"}
        </button>
      </div>
    </div>
  );
}