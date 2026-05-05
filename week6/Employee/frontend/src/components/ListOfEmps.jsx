// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router";
// import axios from 'axios'

// function ListOfEmps() {
//   const [emps, setEmps] = useState([]);
//   const navigate=useNavigate()
//   const gotoEmployee=(empObj)=>{
//   navigate("/employee",{state:empObj})
//  }
//  const gotoEditEmployee=(empObj)=>{
//   navigate("/edit-employee",{state:empObj})
//  }
//  const deleteEmpById=async(id)=>{
//   let res=await axios.delete(`http://localhost:4000/emp-api/employees/${id}`)
//   if(res.status==200){
//     getEmp()
//   }
//  }

//     async function getEmps() {
//       let res = await fetch("http://localhost:4000/emp-api/employees");
//       if (res.status === 200) {
//         let resObj = await res.json();
//         setEmps(resObj.payload);
//       }else {
//         let errorRes = await res.json();
//         console.log("error responce is ", errorRes);
//         throw new Error(errorRes.reason);
//       }
//     }
    
//   useEffect(() => {
//     getEmps();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-4xl text-center">List of Employees</h1>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//         {emps.map((empObj) => (
//           <div key={empObj._id} className=" bg-white p-5">
//             <p>{empObj.email}</p>
//             <p>{empObj.name}</p>
//             <div className="flex justify-around mt-6">
//               <button  onClick={()=>gotoEmployee(empObj)} className="bg-amber-200 p-2 rounded-2xl">View</button>
//               <button   onClick={()=>gotoEditEmployee(empObj)} className="bg-amber-500 p-2 rounded-2xl">Edit</button>
//               <button onClick={()=>deleteEmpById(empObj._id)} className="bg-red-500 p-2 rounded-2xl">Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ListOfEmps;
import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import axios from "axios"

function ListOfEmps() {
  const [emps, setEmps] = useState([])
  const navigate = useNavigate()

  async function getEmps() {
    let res = await fetch("http://localhost:4000/emp-api/employees")
    if (res.status === 200) {
      let resObj = await res.json()
      setEmps(resObj.payload)
    } else {
      let errorRes = await res.json()
      console.log("error response is ", errorRes)
      throw new Error(errorRes.reason)
    }
  }

  const deleteEmpById = async (id) => {
    let res = await axios.delete(`http://localhost:4000/emp-api/employees/${id}`)
    if (res.status == 200) {
      getEmps()  // refresh the list after delete
    }
  }

  const gotoEmployee = (empObj) => {
    navigate("/employee", { state: empObj })
  }

  const gotoEditEmployee = (empObj) => {
    navigate("/edit-employee", { state: empObj })
  }

  useEffect(() => {
    getEmps()
  }, [])

  return (
    <div>
      <h1 className="text-4xl text-center p-5">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className="bg-white p-5">
            <p>{empObj.email}</p>
            <p>{empObj.name}</p>
            <div className="flex justify-around mt-6 p-6">
              <button onClick={() => gotoEmployee(empObj)} className="bg-amber-200 p-2 rounded-2xl">View</button>
              <button onClick={() => gotoEditEmployee(empObj)} className="bg-amber-500 p-2 rounded-2xl">Edit</button>
              <button onClick={() => deleteEmpById(empObj._id)} className="bg-red-500 p-2 rounded-2xl">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListOfEmps