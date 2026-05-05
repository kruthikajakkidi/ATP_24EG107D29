import { useAuth } from "../store/AuthStore"
import { Navigate } from "react-router"

function ProtectedRoute({ allowedRoles, children }) {
  const currentUser = useAuth((state) => state.currentUser)
  const isAuthenticated = useAuth((state) => state.isAuthenticated)

  // not logged in
  if (!isAuthenticated || !currentUser) {
    return <Navigate to="/login" replace />
  }

  // wrong role
  if (!allowedRoles.includes(currentUser.role)) {
    return <Navigate to="/unauthorized" replace />
  }

  return children
}

export default ProtectedRoute