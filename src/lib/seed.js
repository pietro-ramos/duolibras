const { salvar } = require('./conteudosDB');

const conteudos = [
    {
        titulo: 'alfabeto',
        imagemUrl: '/assets/images/cardsAprendizado/alfabeto.png',
        descricao: 'Qualquer coisa so pra fazer se funcionou',
    },
    {
        titulo: 'alfabeto',
        imagemUrl: '/assets/images/cardsAprendizado/alfabeto.png',
        descricao: 'Qualquer coisa so pra fazer se funcionou',
    },
    {
        titulo: 'alfabeto',
        imagemUrl: '/assets/images/cardsAprendizado/alfabeto.png',
        descricao: 'Qualquer coisa so pra fazer se funcionou',
    },
    {
        titulo: 'alfabeto',
        imagemUrl: '/assets/images/cardsAprendizado/alfabeto.png',
        descricao: 'Qualquer coisa so pra fazer se funcionou',
    }
];

await salvar(conteudos)