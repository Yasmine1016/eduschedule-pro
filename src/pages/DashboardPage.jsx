import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import DashboardAdmin from './DashboardAdmin'
import DashboardEnseignant from './DashboardEnseignant'
import DashboardDelegate from './DashboardDelegate'

function DashboardPage() {
  const { role } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (role === 'etudiant') {
      navigate('/emploi-temps')
    }
  }, [role, navigate])

  switch(role) {
    case 'admin':
      return <DashboardAdmin />
    case 'enseignant':
      return <DashboardEnseignant />
    case 'delegate':
      return <DashboardDelegate />
    default:
      return <DashboardAdmin />
  }
}

export default DashboardPage