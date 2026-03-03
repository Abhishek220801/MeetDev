import { lazy } from "react"
import { Provider, useSelector } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router"
import appStore from "./utils/appStore"

import Body from "./components/Body"
import Login from "./components/Login"
import NotFoundPage from "./components/NotFoundPage"
import ProtectedRoute from "./components/ProtectedRoute"
import About from "./components/About"
import Privacy from "./components/Privacy"
import Terms from "./components/Terms"
import HomeRoute from "./components/HomeRoute"

const ForgotPasswordModal = lazy(() => import("./components/ForgotModal"))
const Profile = lazy(() => import("./components/Profile"))
const Connections = lazy(() => import("./components/Connections"))
const Requests = lazy(() => import("./components/Requests"))

function App() {

  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route
              index
              element={<HomeRoute/>}
            />
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="connections"
              element={
                <ProtectedRoute>
                  <Connections />
                </ProtectedRoute>
              }
            />
            <Route
              path="requests"
              element={
                <ProtectedRoute>
                  <Requests />
                </ProtectedRoute>
              }
            />
            <Route
              path="forgot-password"
              element={
                <ProtectedRoute>
                  <ForgotPasswordModal />
                </ProtectedRoute>
              }
            />
            <Route path="about" element={<About />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="login" element={<Login />} />
            {/* <Route path="landingPage" element={<LandingPage />} /> */}
            {/* <Route path="forgot-password" element={<ForgotPasswordModal />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
