import { useEffect, useState } from 'react'
import { Results } from './Results'

export function Questions ({
  filteredQuestions,
  setIndexQuestion,
  indexQuestion,
  questionsFiltered,
  setActiveQuiz
}) {
  const [answersRandom, setAnswersRandom] = useState([])
  const [score, setScore] = useState(0)
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [activeResult, setActiveResult] = useState(false)

  const nextQuestion = () => {
    setIndexQuestion(indexQuestion + 1)
    setSelectAnswerIndex(null)
    setAnswered(false)
  }

  const handleOnReset = () => {
    setScore(0)
    setActiveQuiz(false)
    setIndexQuestion(0)
  }

  const checkAnswer = (answerText, index) => {
    if (answerText === filteredQuestions.correct_answer) {
      setScore(prevState => prevState + 1)
    }

    setSelectAnswerIndex(index)
    setAnswered(true)
  }

  useEffect(() => {
    const answers = [
      ...filteredQuestions.incorrect_answers,
      filteredQuestions.correct_answer
    ]
    setAnswersRandom(answers?.sort(() => Math.random() - 0.5))
  }, [filteredQuestions])

  return (
    <>{
      activeResult
        ? (
          <Results
            handleOnReset={handleOnReset}
            questionsFiltered={questionsFiltered}
            score={score}
          />
          )
        : (
          <div className='flex flex-col justify-between shadow-md shadow-slate-300 w-[600px] h-[600px] p-10 rounded-lg'>
            <div className='flex justify-between'>
              <span className='text-xl font-bold'>
                {/* Numero de preguntas actual y Nuemero de preguntas totales */}
                {indexQuestion + 1} / {questionsFiltered.length}
              </span>
              <div>
                <span className='font-semibold'>
                  Dificultad: {' '}
                </span>
                <span className='font-bold'>
                  {filteredQuestions?.difficulty}
                </span>
              </div>
            </div>
            <button
              className='border px-5 py-2 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900'
              onClick={handleOnReset}
            >
              Reiniciar
            </button>
            <div>
              <h1 className='font-bold'>{filteredQuestions?.question}</h1>
            </div>

            {/*  Las respuestas van aquí */}
            <div className='grid grid-cols-2 gap-5'>
              {answersRandom.map((answer, index) => (
                <button
                  key={`${answer}_${index}`}
                  className={`border p-5 rounded-lg flex justify-center items-center hover:scale-105 ${
                    selectAnswerIndex !== null && index === selectAnswerIndex
                      ? (answer === filteredQuestions.correct_answer ? 'bg-green-500' : 'bg-red-500')
                      : ''
                  }`}
                  onClick={() => checkAnswer(answer, index)}
                  disabled={answered && selectAnswerIndex !== index}
                >
                  <p className='font-medium text-center text-sm'>
                    {answer}
                  </p>
                </button>
              ))}

            </div>
            {
            indexQuestion + 1 === questionsFiltered.length
              ? (
                <button
                  className='border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2hover:bg-yellow-600 hover:bg-yellow-600 hover:text-black font-medium'
                  onClick={() => {
                    setAnswered(false)
                    setActiveResult(true)
                  }}
                >
                  Finalizar Quiz
                </button>
                )
              : (
                <button
                  className='border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2hover:bg-yellow-600 hover:bg-yellow-600 hover:text-black font-medium'
                  onClick={nextQuestion}
                >
                  Siguiente Pregunta
                </button>
                )
            }
          </div>)
    }
    </>

  )
}
