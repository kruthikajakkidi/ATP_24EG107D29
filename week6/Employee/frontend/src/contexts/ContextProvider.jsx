import {createContext,useState} from 'react'
//create context provider
export const counterContextObj=createContext()

function ContextProvider({children}) {
    //state
    const [counter1,setCounter1]=useState(10)
     const [counter2,setCounter2]=useState(10)
    //fn to change state
    const changeCounter1=()=>{
        setCounter1(counter1+1)
    }
     const changeCounter2=()=>{
        setCounter2(counter2+1)
    }
   
   
  return (
    <counterContextObj.Provider value={{counter1,counter2,changeCounter1,changeCounter2}}>
        {children}
        </counterContextObj.Provider>
  )
}

export default ContextProvider