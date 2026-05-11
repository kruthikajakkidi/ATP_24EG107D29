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

  if (loading) return <p className="text-center text-4xl">Loading....</p>;
  if (error) return <p className="text-red-500 text-center text-3xl">{error}</p>;

  return (
    <div>
      <h1 className="text-4xl text-center p-5">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className="bg-blue-200 p-5 rounded-2xl text-center ">
            <p className="font-semibold">{empObj.name}</p>
            <p className="text-gray-500 text-sm">{empObj.email}</p>
            <div className="flex justify-around mt-6">
              <button
                onClick={() => gotoEmployee(empObj)}
                className="bg-amber-200 p-2 rounded-2xl"
              >
                View
              </button>
              <button
                onClick={() => gotoEditEmployee(empObj)}
                className="bg-amber-500 p-3 rounded-2xl"
              >
                Edit
              </button>
              <button
                onClick={() => deleteEmpById(empObj._id)}
                className="bg-red-500 text-white p-2 rounded-2xl"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {emps.length === 0 && (
        <p className="text-center text-gray-400 mt-20 text-xl">
          No employees found. Add one!
        </p>
      )}
    </div>
  );
}

export default ListOfEmps;