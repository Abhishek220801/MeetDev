import { useSelector } from "react-redux"
import Feed from "./Feed"
import LandingPage from "./LandingPage"
import ProtectedRoute from "./ProtectedRoute"

export default function HomeRoute() {
  const { data: user } = useSelector((store) => store.user)
  return user ? (
    <ProtectedRoute>
      <Feed />
    </ProtectedRoute>
  ) : (
    <LandingPage />
  )
}
