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
  const [currentLetterSpace, setCurrentLetterSpace] = useState<number>(0);

  const checkResult = () => {
    const isCorrect = _.isEqual(questionWord?.english, answerWord);
    if (isCorrect) {
      alert("ACERTOU!");
    }
  };

  const handleKeyUp = (e: any) => {
    let nextLetter = 0;

    const keyCode = e.keyCode || e.which;
    const key = String.fromCharCode(keyCode);

    // Check if the key is alphabetic, backspace, or delete
    if (
      (key >= "a" && key <= "z") ||
      (key >= "A" && key <= "Z") ||
      keyCode === 8 /* Backspace */ ||
      keyCode === 46 /* Delete */
    ) {
      if (keyCode === 8 || keyCode === 46) {
        nextLetter = currentLetterSpace > 0 ? currentLetterSpace - 1 : 0;
      } else {
        nextLetter =
          currentLetterSpace < questionWord.english.length - 1
            ? currentLetterSpace + 1
            : questionWord.english.length - 1;
      }
      document.querySelector(`#input_${nextLetter}`)?.select();
      setCurrentLetterSpace(nextLetter);
    }

    // go left
    if (keyCode === 37) {
      nextLetter = currentLetterSpace > 0 ? currentLetterSpace - 1 : 0;
      document.querySelector(`#input_${nextLetter}`)?.select();
      setCurrentLetterSpace(nextLetter);
    }

    // go right
    if (keyCode === 39) {
      nextLetter =
        currentLetterSpace < questionWord.english.length - 1
          ? currentLetterSpace + 1
          : questionWord.english.length - 1;
      document.querySelector(`#input_${nextLetter}`)?.select();
      setCurrentLetterSpace(nextLetter);
    }
  };

  const handleSelect = (
    e: React.ChangeEvent<HTMLInputElement>,
    position: number
  ) => {
    setCurrentLetterSpace(position);
    e.target.select();
  };

  const handleLetter = (
    e: React.ChangeEvent<HTMLInputElement>,
    position: number
  ) => {
    e.preventDefault();
    const currentLetter: string = e.target.value[e.target.value.length - 1];
    const currentAnswer = answerWord;
    if (currentAnswer) {
      currentAnswer[position] = currentLetter;
      setAnswerWord(() => [...currentAnswer]);

      setCurrentLetterSpace(position);

      checkResult();
    }
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
        <div>position: {currentLetterSpace}</div>
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
                        maxLength={1}
                        value={answerWord[i]}
                        onChange={(e) => handleLetter(e, i)}
                        onClick={(e) => handleSelect(e, i)}
                        onKeyUp={(e) => handleKeyUp(e)}
                        // onKeyDown={(e) => handleKeyUp(e)}
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
