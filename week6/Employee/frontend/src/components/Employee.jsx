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
    <div className="p-16 text-center text-3xl space-y-2">
      <p className="font-semibold">{state.name}</p>
      <p className="text-gray-600 text-2xl">{state.email}</p>
      <p>{state.mobile}</p>
      <p>{state.designation}</p>
      <p>{state.companyName}</p>
      <button
        onClick={() => navigate("/list")}
        className="mt-8 text-xl bg-blue-900 text-white px-6 py-3 rounded-2xl"
      >
        Back to list
      </button>
    </div>
  );
}

export default Employee;