import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-hot-toast"
import { useAuth } from "../store/AuthStore"
import { pageWrapper, loadingClass, errorClass, emptyStateClass } from "../styles/common"
import api from "../services/api"

function AdminProfile() {
  const currentUser = useAuth((state) => state.currentUser)
  const logout = useAuth((state) => state.logout)
  const navigate = useNavigate()

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const onLogout = async () => {
    await logout()
    navigate("/login")
  }

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const res = await api.get("/admin-api/users")
      setUsers(res.data.payload)
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load users")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const toggleUser = async (user) => {
    const newStatus = !user.isUserActive
    if (!window.confirm(`${newStatus ? "Unblock" : "Block"} ${user.firstName}?`)) return
    try {
      const res = await api.patch(`/admin-api/users/${user._id}`, { isUserActive: newStatus })
      toast.success(res.data.message)
      setUsers((prev) => prev.map((u) => (u._id === user._id ? res.data.payload : u)))
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update user")
    }
  }

  const deleteUser = async (user) => {
    if (!window.confirm(`Permanently delete ${user.firstName}? This will also delete all their articles.`)) return
    try {
      const res = await api.delete(`/admin-api/users/${user._id}`)
      toast.success(res.data.message)
      // remove from list
      setUsers((prev) => prev.filter((u) => u._id !== user._id))
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete user")
    }
  }

  return (
    <div className={pageWrapper}>

      {/* profile header */}
      <div className="bg-white border border-[#e8e8ed] rounded-3xl p-4 sm:p-6 mb-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {currentUser?.profileImageUrl ? (
            <img
              src={currentUser.profileImageUrl}
              className="w-16 h-16 rounded-full object-cover border"
              alt="profile"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-[#5856d6]/10 text-[#5856d6] flex items-center justify-center text-xl font-semibold">
              {currentUser?.firstName?.charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <p className="text-sm text-[#6e6e73]">Welcome back</p>
            <h2 className="text-xl font-semibold text-[#1d1d1f]">
              {currentUser?.firstName}{" "}
              <span className="text-xs font-medium text-white bg-[#5856d6] px-2 py-0.5 rounded-full ml-1">
                ADMIN
              </span>
            </h2>
          </div>
        </div>

        <button
          className="bg-[#ff3b30] text-white text-sm px-5 py-2 rounded-full hover:bg-[#d62c23] transition"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>

      {loading && <p className={loadingClass}>Loading...</p>}
      {error && <p className={errorClass}>{error}</p>}

      {!loading && !error && users.length === 0 && (
        <div className={emptyStateClass}>No users or authors found.</div>
      )}

      {/* users and authors list */}
      {!loading && !error && (
        <div className="flex flex-col gap-4 max-w-3xl">
          {users.map((user) => (
            <div
              key={user._id}
              className="border border-black rounded-2xl px-4 sm:px-6 py-5 flex flex-col gap-2"
            >
              {/* name and role */}
              <div className="flex items-center gap-2 flex-wrap">
                <p className="font-semibold text-[#1d1d1f] text-base">
                  {user.firstName} {user.lastName || ""}
                </p>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    user.role === "AUTHOR"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {user.role}
                </span>
              </div>

              <p className="text-sm">
                Status:{" "}
                <span className={user.isUserActive ? "text-green-600 font-medium" : "text-red-500 font-medium"}>
                  {user.isUserActive ? "Active" : "Blocked"}
                </span>
              </p>

              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => toggleUser(user)}
                  className="bg-yellow-300 hover:bg-yellow-400 text-black text-sm font-medium px-5 py-1.5 rounded-xl transition"
                >
                  {user.isUserActive ? "Block" : "Unblock"}
                </button>

                {/* delete user permanently */}
                <button
                  onClick={() => deleteUser(user)}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-5 py-1.5 rounded-xl transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminProfile