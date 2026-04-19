import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './LoginPage.css'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async () => {
    setError('')
    try {
      const response = await fetch('http://localhost/eduschedule/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await response.json()
      if (response.ok) {
        login(data.user, data.token)
        navigate('/dashboard')
      } else {
        setError(data.message || 'Email ou mot de passe incorrect')
      }
    } catch (err) {
      setError('Erreur de connexion au serveur')
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">EduSchedule Pro</h2>
        <h5 className="login-subtitle">Connexion</h5>

        {error && <div className="login-error">{error}</div>}

        <div className="login-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.com"
          />
        </div>

        <div className="login-group">
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>

        <button className="login-btn" onClick={handleSubmit}>
          Se connecter
        </button>
      </div>
    </div>
  )
}

export default LoginPage