import { useEffect, useState } from "react";
import { separatorOfStrings } from "../helpers/utils";
import { getRandomWord } from "../helpers/questions";
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
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const [audioLoaded, setAudioLoaded] = useState<any>(false);

  const checkResult = () => {
    const isCorrect = _.isEqual(questionWord?.english, answerWord);
    if (isCorrect) {
      setIsCorrect(true);
    }
  };

  const handleAudioLoad = () => {
    console.log("Audio loaded");
    setAudioLoaded(true);
  };

  const handleKeyUp = (e: any) => {
    let nextLetter = 0;

    const keyCode = e.keyCode || e.which;

    if (keyCode === 8 || keyCode === 46) {
      nextLetter = currentLetterSpace > 0 ? currentLetterSpace - 1 : 0;
    } else {
      nextLetter =
        currentLetterSpace < questionWord.english.length - 1
          ? currentLetterSpace + 1
          : questionWord.english.length - 1;
    }

    // go left
    if (keyCode === 37) {
      nextLetter = currentLetterSpace > 0 ? currentLetterSpace - 1 : 0;
    }

    // go right
    if (keyCode === 39) {
      nextLetter =
        currentLetterSpace < questionWord.english.length - 1
          ? currentLetterSpace + 1
          : questionWord.english.length - 1;
    }

    const elementClick = document.querySelector(`#input_${nextLetter}`);
    elementClick.focus();
    elementClick.setSelectionRange(0, elementClick.value.length);
    elementClick.click();

    setCurrentLetterSpace(nextLetter);
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
      checkResult();
    }
  };

  const nextQuestion = () => {
    setQuestionWord(() => null);
    setAnswerWord(() => null);
    setCurrentLetterSpace(() => 0);
    setIsCorrect(() => false);
    setAudioLoaded(() => false);
    getNextWord().then((response) => {
      const wordStripped = separatorOfStrings(response.english);
      setQuestionWord({
        english: wordStripped,
        portuguese: response.portuguese,
        audio: response.audio,
        question: response.question,
      });

      const answersInputs = Array(response.english.length).fill("");
      setAnswerWord(answersInputs);
      setTimeout(() => {
        const elementClick = document.querySelector(`#input_0`);
        setTimeout(() => {
          elementClick?.focus();
          elementClick?.click();
        }, 1000);
      }, 500);
    });
  };

  const getNextWord = async () => {
    return await getRandomWord();
  };

  useEffect(() => {
    nextQuestion();
  }, []);

  return (
    <>
      <div className="px-5 py-2 space-y-5">
        <h1>English Teacher</h1>
        {/* <div>position: {currentLetterSpace}</div> */}
        {questionWord && answerWord && (
          <>
            <div className="border w-full px-2 py-2">
              <h2 className="text-lg font-bold">Pergunta</h2>
              <p>{questionWord.question}</p>
            </div>
            <div className="border w-full px-2 py-2">
              <h2 className="text-lg font-bold">Tradução</h2>
              <p>{questionWord.portuguese}</p>
            </div>
            {questionWord.audio && (
              <div
                className={`border w-full px-2 py-2 ${
                  !audioLoaded && "hidden"
                }`}
              >
                <h2 className="text-lg font-bold">Áudio</h2>
                <audio
                  src={`/audio/${questionWord.audio}`}
                  controls
                  onLoadedData={handleAudioLoad}
                >
                  Play
                </audio>
              </div>
            )}
            {isCorrect && (
              <div className="border bg-green-200 ">
                <p>Resposta</p>
                <p className="text-xl font-bold uppercase">
                  {questionWord.english}
                </p>
              </div>
            )}
            {!isCorrect && (
              <div className="border w-full px-2 py-2">
                <ul className="grid gap-2 grid-cols-8  ">
                  {questionWord.english?.map((letter, i) => {
                    return (
                      <li className="" key={letter}>
                        <input
                          id={`input_${i}`}
                          type="text"
                          className="border-b bg-green-200 text-lg h-10 w-10 text-center"
                          maxLength={1}
                          value={answerWord[i]}
                          onChange={(e) => handleLetter(e, i)}
                          onClick={(e) => handleSelect(e, i)}
                          onKeyUp={(e) => handleKeyUp(e)}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            <div>
              <button
                onClick={nextQuestion}
                className="bg-blue-700 px-2 py-2 hover:bg-blue-800 w-full text-white text-lg"
              >
                Próximo
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MainPlayer;
