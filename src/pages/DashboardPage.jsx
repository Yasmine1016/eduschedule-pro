import { useAuth } from '../context/AuthContext'
import DashboardAdmin from './DashboardAdmin'
import DashboardEnseignant from './DashboardEnseignant'
import DashboardDelegate from './DashboardDelegate'
import DashboardEtudiant from './DashboardEtudiant'

function DashboardPage() {
  const { role } = useAuth()

  switch(role) {
    case 'admin':
      return <DashboardAdmin />
    case 'enseignant':
      return <DashboardEnseignant />
    case 'delegate':
      return <DashboardDelegate />
    case 'etudiant':
      return <DashboardEtudiant />
    default:
      return <DashboardAdmin />
  }
}

export default DashboardPage