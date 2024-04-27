import { useEffect, useState } from "react";
import { separatorOfStrings } from "./helpers/utils";

interface ISUserWord {
  english?: string[];
  portuguese?: string;
  question?: string;
  audio?: string;
}

function App() {
  const [userWord, setUserWord] = useState<ISUserWord | null>(null);

  {
    useEffect(() => {
      const english = "cat";
      const portuguese = "gato";
      const audio = "cat.mp3";
      const question = "Inimigo do cachorro";
      const wordStripped = separatorOfStrings(english);

      setUserWord({
        english: wordStripped,
        portuguese: portuguese,
        audio: audio,
        question: question,
      });
    }, []);
  }

  return (
    <>
      <div>
        <h1>English Teacher</h1>
        {userWord && (
          <>
            <div className="border">
              <h2>Pergunta</h2>
              <p>{userWord.question}</p>
            </div>
            <div className="border">
              <h2>Tradução</h2>
              <p>{userWord.portuguese}</p>
            </div>
            <div className="border">
              <h2>Áudio</h2>
              <audio src={`/audio/${userWord.audio}`} controls>
                Play
              </audio>
              <p>{userWord.audio}</p>
            </div>
            <div className="border">
              <ul className="flex space-x-1">
                <li className="">
                  <input
                    type="text"
                    className="border-b bg-red-200 text-lg h-7 w-7 text-center"
                    maxLength={1}
                  />
                </li>
                <li className="">
                  <input
                    type="text"
                    className="border-b bg-red-200 text-lg h-7 w-7 text-center"
                    maxLength={1}
                  />
                </li>
                <li className="">
                  <input
                    type="text"
                    className="border-b bg-red-200 text-lg h-7 w-7 text-center"
                    maxLength={1}
                  />
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
