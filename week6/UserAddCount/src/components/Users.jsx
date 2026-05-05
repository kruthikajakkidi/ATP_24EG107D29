import { useState, useEffect } from "react"

function Users({ addUser }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!res.ok) {
          throw new Error("Failed to fetch")
        }
        const result = await res.json()
        setData(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p className="p-4">Loading...</p>
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {data.map(user => (
        <div key={user.id} className="border rounded-lg p-4 shadow-sm bg-white">
          <h5 className="font-bold text-lg">{user.name}</h5>
          <p className="text-sm text-gray-500">{user.email}</p>
          <p className="text-sm text-gray-400">{user.company.name}</p>
          <button
            onClick={addUser}
            className="mt-3 bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600"
          >
            Add User
          </button>
        </div>
      ))}
    </div>
  )
}

export default Users