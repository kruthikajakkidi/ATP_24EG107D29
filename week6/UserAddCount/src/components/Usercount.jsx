function Usercount({ count }) {
  return (
    <div className="flex justify-center p-4">
      <div className="bg-blue-200 rounded-xl px-8 py-4 text-center">
        <h1 className="text-2xl font-bold">Users</h1>
        <h3 className="text-lg text-gray-600">Added: {count}</h3>
      </div>
    </div>
  )
}

export default Usercount