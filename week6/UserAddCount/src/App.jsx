import { useState } from "react"
import Usercount from "./components/Usercount"
import Users from "./components/Users"

function App() {
  const [count, setCount] = useState(0)

  function addUser() {
    setCount(count + 1)
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <Usercount count={count} />
      <Users addUser={addUser} />
    </div>
  )
}

export default App