const words = [
  {
    english: "cat",
    portuguese: "gato",
    question: "Inimigo do cachorro",
    audio: "cat.mp3",
  },
  {
    english: "home",
    portuguese: "casa",
    question: "seu lar",
    audio: "home.mp3",
  },
  {
    english: "dog",
    portuguese: "cachorro",
    question: "Amigo do homem",
    audio: "dog.mp3",
  },
];

export const getRandomWord = () => {
  const min = 0;
  const max = words.length - 1;
  console.log("max", max);
  const randomId = Math.floor(Math.random() * (max - min + 1)) + min;

  return {
    english: words[randomId].english,
    portuguese: words[randomId].portuguese,
    question: words[randomId].question,
    audio: words[randomId].audio,
  };
};
