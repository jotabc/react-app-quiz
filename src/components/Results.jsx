export function Results ({ handleOnReset, questionsFiltered, score }) {
  return (
    <div className='flex flex-col justify-evenly items-center shadow-xl rounded-lg w-[600px] h-[600px] gap-5'>
      <h1 className='text-4xl font-bol'>
        Resultados
      </h1>
      <div className='flex flex-col gap-5 text-center text-lg font-bold'>
        <span>Acertaste</span>
        <span className='font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-trasnparent text-6xl animate-pulse'>
          {((score / questionsFiltered.length) * 100).toFixed(0)}%
        </span>
        de las preguntas ({score} de {questionsFiltered.length})
      </div>
      <button
        className='border px-5 py-2 rounded-lg transition-all font-bold hover:bg-yellow-500 hover:text-gray-900'
        onClick={handleOnReset}
      >
        Vamos de nuevo
      </button>
    </div>
  )
}
