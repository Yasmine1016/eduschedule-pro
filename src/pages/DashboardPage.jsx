import DashboardLayout from '../components/DashboardLayout'
import './DashboardPage.css'

function DashboardPage() {
  return (
    <DashboardLayout>
      <h2>Tableau de bord</h2>
      <p>Bienvenue sur EduSchedule Pro !</p>

      <div className="dashboard-cards">
        <div className="dashboard-card card-blue">
          <h6>Séances aujourd'hui</h6>
          <h2>0</h2>
        </div>

        <div className="dashboard-card card-green">
          <h6>Cahiers signés</h6>
          <h2>0</h2>
        </div>

        <div className="dashboard-card card-yellow">
          <h6>Alertes</h6>
          <h2>0</h2>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default DashboardPage