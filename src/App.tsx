import { useState } from "react"
import words from "./wordList.json"
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord"
import { Keyboard } from "./Keyboard"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  console.log(wordToGuess)

  return (
      <div style = {{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "800px",
      gap: "2rem",
      margin: "0 auto",
    }}>
    
      <div style = {{ fontSize: "2rem", textAlign: "center"}}>
        Lose
        Win
      </div>
      
      <HangmanDrawing/>
      <HangmanWord/>
      <Keyboard/>

    </div>
  )
}

export default App
