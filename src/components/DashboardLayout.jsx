import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import './DashboardLayout.css'
import { useState } from 'react'

function DashboardLayout({ children }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="layout-container">

      <nav className="navbar">
        <button className="menu-toggle" onClick={toggleSidebar}>
          ☰
        </button>
        <h5 className="navbar-brand">EduSchedule Pro</h5>
        <div className="navbar-right">
          <span>👤 {user?.nom || 'Utilisateur'}</span>
          <button onClick={handleLogout} className="logout-btn">
            Déconnexion
          </button>
        </div>
      </nav>

      <div className="layout-body">

        <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <ul className="sidebar-menu">
            <li className="menu-item" onClick={() => navigate('/dashboard')}>
              <span className="menu-icon">📊</span>
              <span className="menu-text">Tableau de bord</span>
            </li>
            <li className="menu-item" onClick={() => navigate('/emploi-temps')}>
              <span className="menu-icon">📅</span>
              <span className="menu-text">Emploi du temps</span>
            </li>
            <li className="menu-item" onClick={() => navigate('/cahiers')}>
              <span className="menu-icon">📖</span>
              <span className="menu-text">Cahier de texte</span>
            </li>
            <li className="menu-item" onClick={() => navigate('/pointage-qr')}>
              <span className="menu-icon">📱</span>
              <span className="menu-text">Pointage QR</span>
            </li>
            <li className="menu-item" onClick={() => navigate('/vacations')}>
              <span className="menu-icon">💰</span>
              <span className="menu-text">Vacations</span>
            </li>
          </ul>
        </div>

        <div className="main-content">
          {children}
        </div>

      </div>
    </div>
  )
}

export default DashboardLayout