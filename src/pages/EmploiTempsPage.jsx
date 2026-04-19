import DashboardLayout from '../components/DashboardLayout'
import './EmploiTempsPage.css'

const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
const heures = ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']

function EmploiTempsPage() {
  return (
    <DashboardLayout>
      <h2>Emploi du Temps</h2>

      <div className="filters">
        <select>
          <option>Toutes les classes</option>
          <option>Licence 1</option>
          <option>Licence 2</option>
          <option>Licence 3</option>
          <option>Master 1</option>
        </select>
        <input type="week" />
        <button className="btn-filter">Filtrer</button>
      </div>

      <div className="table-container">
        <table className="emploi-table">
          <thead>
            <tr>
              <th>Heure</th>
              {jours.map(jour => <th key={jour}>{jour}</th>)}
            </tr>
          </thead>
          <tbody>
            {heures.map((heure, index) => (
              <tr key={heure}>
                <td className="heure-cell">{heure}</td>
                {jours.map(jour => <td key={jour}></td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  )
}

export default EmploiTempsPage