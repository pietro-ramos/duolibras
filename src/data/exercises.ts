import { Exercise } from "@/models/Exercise";

export const exercises: Exercise[] = [
    new Exercise (1, 'multipleChoice', 'Assista ao vídeo e escolha a tradução correta', [
        'Boa noite, tudo bem?',
        'Oi, como vai?', 
        'Bom dia, tudo bem?',
        'Boa noite, até amanhã'
    ], 'Bom dia, tudo bem?', '@/assets/videos/bomdia.mp4'),
    new Exercise (2, 'fillInBlank', 'Complete: Eu _____ você.', [], 'gosto', '@/assets/videos/gosto.mp4')
];