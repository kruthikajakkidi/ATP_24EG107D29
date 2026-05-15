import { useState } from 'react'
import { useForm } from 'react-hook-form'

function App() {
  const [users, setUsers] = useState([])
  const { register, handleSubmit, formState: { errors } } = useForm()

  const handlesubmitbutton = (obj) => {
    setUsers([...users, obj])
  }

  return (
    <div style={{ margin: '20px 50px' }}>
      <h1 className="text-2xl font-bold text-center mb-4">Users Data Form</h1>

      {/* Form */}
      <form onSubmit={handleSubmit(handlesubmitbutton)} className="mb-4 p-4 border rounded">
        <h2 className="text-xl font-bold mb-2">Add User</h2>
        <div className="mb-2">
          <label className="block font-bold">First Name</label>
          <input type="text" {...register("name", { required: "First name is required" })} className="border p-1 w-full" />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="mb-2">
          <label className="block font-bold">Last Name</label>
          <input type="text" {...register("lastname", { required: "Last name is required" })} className="border p-1 w-full" />
          {errors.lastname && <p className="text-red-500">{errors.lastname.message}</p>}
        </div>
        <div className="mb-2">
          <label className="block font-bold">Email</label>
          <input type="email" {...register("email", { required: "Email is required" })} className="border p-1 w-full" />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className="mb-2">
          <label className="block font-bold">Phone</label>
          <input type="text" {...register("phone", { required: "Phone is required" })} className="border p-1 w-full" />
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        </div>
        <div className="mb-2">
          <label className="block font-bold">Address</label>
          <input type="text" {...register("address", { required: "Address is required" })} className="border p-1 w-full" />
          {errors.address && <p className="text-red-500">{errors.address.message}</p>}
        </div>
        <div className="mb-2">
          <label className="block font-bold">Gender</label>
          <select {...register("gender")} className="border p-1 w-full">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">Add User</button>
      </form>

      {/* Table */}
      <h2 className="text-xl font-bold mb-2">Users List</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">First Name</th>
            <th className="border p-2 text-left">Last Name</th>
            <th className="border p-2 text-left">Email</th>
            <th className="border p-2 text-left">Phone</th>
            <th className="border p-2 text-left">Address</th>
            <th className="border p-2 text-left">Gender</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.lastname}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.phone}</td>
              <td className="border p-2">{user.address}</td>
              <td className="border p-2">{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App