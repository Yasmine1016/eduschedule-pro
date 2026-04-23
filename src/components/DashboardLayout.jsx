import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import './DashboardLayout.css'

function DashboardLayout({ children }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="layout-container">

      <nav className="navbar">
        <h5 className="navbar-brand">EduSchedule Pro</h5>
        <div className="navbar-right">
          <span>👤 {user?.nom || 'Utilisateur'}</span>
          <button onClick={handleLogout} className="logout-btn">
            Déconnexion
          </button>
        </div>
      </nav>

      <div className="layout-body">

        <div className="sidebar">
          <ul>
            <li onClick={() => navigate('/dashboard')}>📊 Tableau de bord</li>
            <li onClick={() => navigate('/emploi-temps')}>📅 Emploi du temps</li>
            <li onClick={() => navigate('/cahiers')}>📖 Cahier de texte</li>
            <li onClick={() => navigate('/vacations')}>💰 Vacations</li>
            <li onClick={() => navigate('/pointage-qr')}>📱 Pointage QR</li>
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