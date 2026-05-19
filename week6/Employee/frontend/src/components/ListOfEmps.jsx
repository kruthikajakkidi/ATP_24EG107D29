import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import api from "../../services/api";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function getEmps() {
    try {
      setLoading(true);
      setError("");
      const res = await api.get("/emp-api/employees");
      setEmps(res.data.payload);
    } catch (err) {
      setError(err.response?.data?.reason || err.message);
    } finally {
      setLoading(false);
    }
  }

  const deleteEmpById = async (id) => {
    try {
      await api.delete(`/emp-api/employees/${id}`);
      getEmps();
    } catch (err) {
      setError(err.response?.data?.reason || err.message);
    }
  };

  const gotoEmployee = (empObj) => {
    navigate("/employee", { state: empObj });
  };

  const gotoEditEmployee = (empObj) => {
    navigate("/edit-employee", { state: empObj });
  };

  useEffect(() => {
    getEmps();
  }, []);

  if (loading)
    return (
      <p className="text-center text-3xl mt-20 text-gray-600 animate-pulse">
        Loading employees...
      </p>
    );

  if (error)
    return (
      <p className="text-red-500 text-center text-2xl mt-20">{error}</p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-yellow-50 px-6 py-10">

      {/* HEADER */}
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        Employee{" "}
        <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          List
        </span>
      </h1>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {emps.map((empObj) => (
          <div
            key={empObj._id}
            className="bg-white/70 backdrop-blur-md border border-yellow-100 rounded-2xl p-5 shadow-lg
            hover:shadow-yellow-200 hover:-translate-y-1 transition-all duration-300"
          >

            {/* NAME */}
            <h2 className="text-lg font-bold text-gray-800">
              {empObj.name}
            </h2>

            {/* EMAIL */}
            <p className="text-gray-500 text-sm mt-1">
              {empObj.email}
            </p>

            {/* ACTIONS */}
            <div className="flex justify-between mt-6 gap-2">

              <button
                onClick={() => gotoEmployee(empObj)}
                className="flex-1 py-2 rounded-xl text-sm font-semibold
                bg-yellow-200 hover:bg-yellow-300 transition"
              >
                View
              </button>

              <button
                onClick={() => gotoEditEmployee(empObj)}
                className="flex-1 py-2 rounded-xl text-sm font-semibold
                bg-amber-500 text-white hover:bg-amber-600 transition"
              >
                Edit
              </button>

              <button
                onClick={() => deleteEmpById(empObj._id)}
                className="flex-1 py-2 rounded-xl text-sm font-semibold
                bg-red-500 text-white hover:bg-red-600 transition"
              >
                Delete
              </button>

            </div>
          </div>
        ))}

      </div>

      {/* EMPTY STATE */}
      {emps.length === 0 && (
        <p className="text-center text-gray-400 mt-20 text-lg">
          No employees found. Add one to get started.
        </p>
      )}
    </div>
  );
}

export default ListOfEmps;