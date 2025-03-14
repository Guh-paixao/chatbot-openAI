import { TextareaForm } from "./components/form"

function App() {
  return (
    <main className="flex flex-1 flex-col justify-between bg-gray-700 h-screen">
      <div className="flex flex-col items-center space-y-4 mt-8">
        <h1 className="text-4xl font-bold text-white">ChatBot 3.5</h1>
        <p className="text-slate-200">TOPICOS ESPECIAIS EM INTELIGENCIA ARTIFICIAL</p>
        <p className="text-slate-200">Pergunte alguma coisa...</p>
      </div>
      <div className="flex flex-col justify-center items-center pb-8">
        <TextareaForm />
      </div>
    </main>
  )
}

export default App
