import { useEffect, useRef, useState } from "react";
import { separatorOfStrings } from "../helpers/utils";
import _ from "lodash";

interface ISUserWord {
  english?: string[];
  portuguese?: string;
  question?: string;
  audio?: string;
}

const MainPlayer = () => {
  const [questionWord, setQuestionWord] = useState<ISUserWord | null>(null);
  const [answerWord, setAnswerWord] = useState<string[] | null>(null);

  const checkResult = () => {
    const isCorrect = _.isEqual(questionWord?.english, answerWord);
    // console.log("original: ", questionWord?.english);
    // console.log("usuario: ", answerWord);
    if (isCorrect) {
      alert("ACERTOU!");
    }
  };

  const handleLetter = (
    e: React.ChangeEvent<HTMLInputElement>,
    position: number
  ) => {
    e.preventDefault();
    const currentLetter: string = e.target.value[e.target.value.length - 1];
    const currentAnswer = answerWord;
    currentAnswer[position] = currentLetter;
    setAnswerWord(() => [...currentAnswer]);

    const nextLetter =
      position < currentAnswer.length - 1
        ? position + 1
        : currentAnswer.length - 1;

    checkResult();

    // go to the next letter
    document.querySelector(`#input_${nextLetter}`)?.select();
  };

  useEffect(() => {
    const english = "home";
    const portuguese = "casa";
    const audio = "cat.mp3";
    const question = "Seu lar";
    const wordStripped = separatorOfStrings(english);

    setQuestionWord({
      english: wordStripped,
      portuguese: portuguese,
      audio: audio,
      question: question,
    });

    const answersInputs = Array(english.length);
    // const answersInputs = wordStripped;
    setAnswerWord(answersInputs);

    console.log("size", answersInputs);
  }, []);

  return (
    <>
      <div>
        <h1>English Teacher</h1>
        {questionWord && answerWord && (
          <>
            <div className="border">
              <h2>Pergunta</h2>
              <p>{questionWord.question}</p>
            </div>
            <div className="border">
              <h2>Tradução</h2>
              <p>{questionWord.portuguese}</p>
            </div>
            <div className="border">
              <h2>Áudio</h2>
              <audio src={`/audio/${questionWord.audio}`} controls>
                Play
              </audio>
              <p>{questionWord.audio}</p>
            </div>
            <div className="border">
              <ul className="flex space-x-1">
                <pre>{JSON.stringify(answerWord, null, 1)}</pre>
                {questionWord.english?.map((letter, i) => {
                  //   const ref = useRef<(HTMLDivElement | null)[]>();
                  //   inputRefs.current[i] = ref;
                  return (
                    <li className="" key={letter}>
                      <input
                        id={`input_${i}`}
                        type="text"
                        className="border-b bg-red-200 text-lg h-7 w-7 text-center"
                        maxLength={2}
                        value={answerWord[i]}
                        onChange={(e) => handleLetter(e, i)}
                        // onFocus={(e) => e.current.select()}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MainPlayer;
