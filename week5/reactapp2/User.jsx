function User({ userObj }) {
  return (
    <div className="text-center p-5 shadow-xl rounded-2xl bg-white hover:shadow-2xl transition-shadow duration-300">
      <img
        className="block mx-auto rounded-full w-24 h-24 object-cover mt-3 border-4 border-blue-100"
        src={userObj.image}
        alt={userObj.name}
      />
      <p className="font-bold text-gray-800 mt-4 text-lg">{userObj.name}</p>
      <p className="text-gray-500 text-sm mt-1">{userObj.email}</p>
      <button className="mt-4 mb-2 px-5 py-1.5 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors duration-200">
        Profile
      </button>
    </div>
  )
}

export default User