// import ContextProvider from './contexts/ContextProvider'
// import Home from './components/Home'   // ✅ correct path

// function App() {
//   return (
//     <ContextProvider>
//       <div>
//         <Home />
//       </div>
//     </ContextProvider>
//   )
// }

// export default App
import React from 'react'
import ContextProvider from './contexts/ContextProvider'
import Home from './components/Home'

function App() {
  return (
    <ContextProvider>
      <div className='bg-blue-200'>
        <Home />
      </div>
    </ContextProvider>
  )
}

export default App