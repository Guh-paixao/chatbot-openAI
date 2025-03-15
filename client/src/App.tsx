import Chatbot from "./components/chat"

function App() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center ">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-2 mt-6">
          <h1 className="text-4xl font-bold text-white">ChatBot 3.5</h1>
          <p className="text-slate-200">TOPICOS ESPECIAIS EM INTELIGENCIA ARTIFICIAL</p>
          <p className="text-slate-200">Pergunte alguma coisa...</p>
        </div>

        <Chatbot />

      </div>
    </main>
  )
}

export default App
