export type ExerciseType = 'multipleChoice' | 'match' | 'fillInBlank' | 'imageChoice' | 'translation';

export class Exercise {
    id: number;
    type: ExerciseType;
    prompt: string;
    options: string[];
    correctAnswer: string;
    mediaUrl: string;

    constructor(id: number, type: ExerciseType, prompt: string, options: string[], correctAnswer: string, mediaUrl: string){
        this.id = id;
        this.type = type;
        this.prompt = prompt;
        this.options = options;
        this.correctAnswer = correctAnswer;
        this.mediaUrl = mediaUrl;
    }

    checkAnwser (answer: string) : boolean {
        return this.correctAnswer === answer
    }
}