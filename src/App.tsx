// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import LoginPage from "./pages/auth/LoginPage"
import NotFoundPage from "./pages/dashboard/error/404"
import DashboardPage from "./pages/dashboard/DashboardPage"
import PrivateRoute from "./components/PrivateRoute"
import LayoutDashboard from "./pages/dashboard/LayoutDashboard"
import ProfilePage from "./pages/dashboard/profile/ProfilePage"

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Rotas protegidas com layout */}
          <Route path="/" element={<LayoutDashboard />}>
            {/* Redirecionamento de /dashboard para /dashboard/overview */}
           <Route path="dashboard" element={<Navigate to="/dashboard/overview" replace />} />


            <Route path="dashboard/overview" element={<DashboardPage />} />
            <Route path="profile" element={<ProfilePage />} />

            {/* Página 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
