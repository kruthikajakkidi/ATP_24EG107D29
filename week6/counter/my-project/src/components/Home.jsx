import { useContext } from "react"
import { counterContextObj } from "../contexts/ContextProvider"

function Home() {
  const {counter, incrementCounter, decrementCounter} = useContext(counterContextObj)
  
return (
  <div className="grid grid-cols-2 grid-rows-2 h-screen p-6 gap-6">
    <div className="bg-pink-200 flex flex-col items-center justify-center gap-4 rounded-xl ">
      <h2 className="text-xl ">Counter 1</h2>
      <h1 className="text-2xl">{counter}</h1>
      <div className="flex gap-2">
        <button onClick={incrementCounter} className="bg-white px-4 py-2 rounded">+</button>
        <button onClick={decrementCounter} className="bg-white px-4 y-2 rounded">-</button>
      </div>
    </div>

    <div className="bg-pink-200 flex flex-col items-center justify-center gap-4 rounded-xl">
      <h2 className="text-xl ">Counter 2</h2>
      <h1 className="text-2xl">{counter}</h1>
      <div className="flex gap-2">
        <button onClick={incrementCounter} className="bg-white px-4 py-2 rounded">+</button>
        <button onClick={decrementCounter} className="bg-white px-4 py-2 rounded">-</button>
      </div>
    </div>

    <div className="bg-pink-200 flex flex-col items-center justify-center gap-4 rounded-xl shadow-m">
      <h2 className="text-xl ">Counter 3</h2>
      <h1 className="text-2xl">{counter}</h1>
      <div className="flex gap-2">
        <button onClick={incrementCounter} className="bg-white px-4 py-2 rounded">+</button>
        <button onClick={decrementCounter} className="bg-white px-4 py-2 rounded">-</button>
      </div>
    </div>

    <div className="bg-pink-200 flex flex-col items-center justify-center gap-4 rounded-xl shadow-m">
      <h2 className="text-xl">Counter 4</h2>
      <h1 className="text-2xl">{counter}</h1>
      <div className="flex gap-2">
        <button onClick={incrementCounter} className="bg-white px-4 py-2 rounded">+</button>
        <button onClick={decrementCounter} className="bg-white px-4 py-2 rounded">-</button>
      </div>
    </div>
  </div>
)
}
export default Home