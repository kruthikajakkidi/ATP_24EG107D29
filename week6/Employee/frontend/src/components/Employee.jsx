import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

function Employee() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/list");
    }
  }, [state, navigate]);

  if (!state) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-yellow-50 px-6">

      {/* CARD */}
      <div className="w-full max-w-xl bg-white/70 backdrop-blur-md border border-yellow-100 shadow-2xl rounded-3xl p-10
        text-center hover:shadow-yellow-200 transition-all duration-300">

        {/* HEADER */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            {state.name?.charAt(0)}
          </div>

          <h1 className="text-3xl font-extrabold mt-4 text-gray-800">
            {state.name}
          </h1>

          <p className="text-gray-500">{state.designation}</p>
        </div>

        {/* DETAILS */}
        <div className="space-y-3 text-gray-700 text-lg">

          <p>
            <span className="font-semibold">Email:</span> {state.email}
          </p>

          <p>
            <span className="font-semibold">Mobile:</span> {state.mobile}
          </p>

          <p>
            <span className="font-semibold">Company:</span> {state.companyName}
          </p>

        </div>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/list")}
          className="mt-8 px-6 py-3 rounded-xl text-white font-semibold
          bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500
          hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
        >
          Back to List
        </button>

      </div>
    </div>
  );
}

export default Employee;