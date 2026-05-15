import { useForm } from "react-hook-form"

function UserForm({ registerfunc }) {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  // submit function
  const handlesubmitbutton = (obj) => {
    registerfunc(obj)
    reset()
  }

  return (

    <form
      onSubmit={handleSubmit(handlesubmitbutton)}
      className="border shadow-md p-6 w-full max-w-md mx-auto mt-8 rounded-lg bg-white"
    >

      <h2 className="text-2xl font-bold mb-5 text-center">
        Registration Form
      </h2>

      {/* first name */}
      <div className="mb-3">
        <label className="block mb-1">First Name</label>

        <input
          type="text"
          {...register("name", {
            required: "First name is required"
          })}
          className="border w-full p-2 rounded"
        />

        {errors.name &&
          <p className="text-red-500 text-sm">
            {errors.name.message}
          </p>
        }
      </div>

      {/* last name */}
      <div className="mb-3">
        <label className="block mb-1">Last Name</label>

        <input
          type="text"
          {...register("lastname", {
            required: "Last name is required"
          })}
          className="border w-full p-2 rounded"
        />

        {errors.lastname &&
          <p className="text-red-500 text-sm">
            {errors.lastname.message}
          </p>
        }
      </div>

      {/* email */}
      <div className="mb-3">
        <label className="block mb-1">Email</label>

        <input
          type="email"
          {...register("email", {
            required: "Email is required"
          })}
          className="border w-full p-2 rounded"
        />

        {errors.email &&
          <p className="text-red-500 text-sm">
            {errors.email.message}
          </p>
        }
      </div>

      {/* phone */}
      <div className="mb-3">
        <label className="block mb-1">Phone</label>

        <input
          type="text"
          {...register("phone", {
            required: "Phone is required"
          })}
          className="border w-full p-2 rounded"
        />

        {errors.phone &&
          <p className="text-red-500 text-sm">
            {errors.phone.message}
          </p>
        }
      </div>

      {/* address */}
      <div className="mb-3">
        <label className="block mb-1">Address</label>

        <input
          type="text"
          {...register("address", {
            required: "Address is required"
          })}
          className="border w-full p-2 rounded"
        />

        {errors.address &&
          <p className="text-red-500 text-sm">
            {errors.address.message}
          </p>
        }
      </div>

      {/* gender */}
      <div className="mb-4">
        <label className="block mb-1">Gender</label>

        <select
          {...register("gender")}
          className="border w-full p-2 rounded"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      {/* button */}
      <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">
        Register
      </button>

    </form>
  )
}

export default UserForm