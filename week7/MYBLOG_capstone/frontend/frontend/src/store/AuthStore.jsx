import { create } from "zustand"
import axios from "axios"

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

export const useAuth = create((set) => ({
  currentUser: null,
  loading: true,
  isAuthenticated: false,
  error: null,

  login: async (userCred) => {
    try {
      set({ loading: true, currentUser: null, isAuthenticated: false, error: null })
      let res = await API.post("/auth/login", userCred)

      if (res.status === 200) {
        const user = res.data?.payload
        // make sure both id and _id are available on the user object
        const normalizedUser = { ...user, id: user._id?.toString() ?? user.id }
        set({ currentUser: normalizedUser, loading: false, isAuthenticated: true, error: null })
      }
    } catch (err) {
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
        error: err.response?.data?.message || "Login failed",
      })
    }
  },

  logout: async () => {
    try {
      await API.get("/auth/logout")
    } catch (err) {
      // clear state even if server call fails
    } finally {
      set({ currentUser: null, isAuthenticated: false, error: null, loading: false })
    }
  },

  checkAuth: async () => {
    try {
      set({ loading: true })
      const res = await API.get("/auth/check-auth")
      set({ currentUser: res.data.payload, isAuthenticated: true, loading: false })
    } catch (err) {
      set({ currentUser: null, isAuthenticated: false, loading: false })
    }
  },
}))