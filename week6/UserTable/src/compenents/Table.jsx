function Table({ users }) {

  return (
    <div className="w-[90%] mx-auto mt-8">

      <h2 className="text-2xl font-bold mb-4 text-center">
        Users List
      </h2>

      <table className="w-full border border-black">

        <thead>
          <tr className="bg-gray-200">

            <th className="border border-black p-2">
              First Name
            </th>

            <th className="border border-black p-2">
              Last Name
            </th>

            <th className="border border-black p-2">
              Email
            </th>

            <th className="border border-black p-2">
              Phone
            </th>

            <th className="border border-black p-2">
              Address
            </th>

            <th className="border border-black p-2">
              Gender
            </th>

          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (

            <tr key={index} className="text-center">

              <td className="border border-black p-2">
                {user.name}
              </td>

              <td className="border border-black p-2">
                {user.lastname}
              </td>

              <td className="border border-black p-2">
                {user.email}
              </td>

              <td className="border border-black p-2">
                {user.phone}
              </td>

              <td className="border border-black p-2">
                {user.address}
              </td>

              <td className="border border-black p-2">
                {user.gender}
              </td>

            </tr>

          ))}
        </tbody>

      </table>
    </div>
  )
}

export default Table