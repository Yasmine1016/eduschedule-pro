import DashboardLayout from '../components/DashboardLayout'
import './EmploiTempsPage.css'
import { useState } from 'react'

function EmploiTempsPage() {
  const [emploiTemps] = useState({
    filiere: 'ITRST',
    periode: 'du 5 au 10 janvier 2026',
    matin: [
      {
        horaire: '7h30 à 9h30',
        jours: [
          { matiere: 'Traitement de signal 3', heure: '[7h30 : 13h30]', prof: 'M. SANOGO Aboubacar', salle: 'Annexe Ouaga Inter Salle 1', modif: false },
          { matiere: 'Développement Web', heure: '[8h30 : 13h30]', prof: 'Dr BERE Cédric', salle: 'Annexe Ouaga Inter Salle 1', modif: false },
          { matiere: 'Développement Web', heure: '[8h30 : 13h30]', prof: 'Dr BERE Cédric', salle: 'Annexe Ouaga Inter Salle 1', modif: false },
          { matiere: 'Développement Web', heure: '[8h30 : 12h30]', prof: 'Dr BERE Cédric', salle: 'Annexe Ouaga Inter Salle 1', modif: false },
          { matiere: 'Développement Web', heure: '[9h00 : 12h30]', prof: 'Dr BERE Cédric', salle: 'Annexe Ouaga Inter Salle 1', modif: true },
          { matiere: 'Programmation avancée C/C++', heure: '[7h30 : 12h30]', prof: 'M. SORGHO Martial', salle: 'Annexe Ouaga Inter Salle 1', modif: false }
        ]
      },
      {
        horaire: '10h à 12h15',
        jours: [
          { matiere: '', heure: '', prof: '', salle: 'Annexe Ouaga Inter Salle 1', modif: false },
          { matiere: '', heure: '', prof: '', salle: 'Annexe Ouaga Inter Salle 1', modif: false },
          { matiere: '', heure: '', prof: '', salle: 'Annexe Ouaga Inter Salle 1', modif: false },
          { matiere: '', heure: '', prof: '', salle: 'Annexe Ouaga Inter Salle 1', modif: false },
          { matiere: '', heure: '', prof: '', salle: 'Annexe Ouaga Inter Salle 1', modif: false },
          { matiere: 'Programmation avancée C/C++', heure: '[7h30 : 12h30]', prof: 'M. SORGHO Martial', salle: 'Annexe Ouaga Inter Salle 1', modif: false }
        ]
      }
    ],
    apremidi: [
      {
        horaire: '14h à 17h',
        jours: [
          { matiere: '', heure: '', prof: '', salle: '', modif: false },
          { matiere: 'Sécurité des réseaux et systèmes informatiques', heure: '[16h : 19h]', prof: 'SANOGO Amidou', salle: 'Salle 15', modif: false },
          { matiere: 'Programmation avancée C/C++', heure: '[16h : 19h]', prof: 'SORGHO Martial', salle: 'Salle 1', modif: false },
          { matiere: 'Traitement de signal 3', heure: '[14h : 18h]', prof: 'SANOGO Aboubacar', salle: 'Annexe Ouaga Inter Salle 1', modif: false },
          { matiere: 'Sécurité des réseaux et systèmes informatiques', heure: '[16h : 19h]', prof: 'SANOGO Amidou', salle: 'Salle 15', modif: false },
          { matiere: '', heure: '', prof: '', salle: '', modif: false }
        ]
      }
    ],
    devoirs: [
      { devoir: '', date: '' },
      { devoir: '', date: '' }
    ]
  })

  const jours = ['Lundi 05', 'Mardi 06', 'Mercredi 07', 'Jeudi 08', 'Vendredi 09', 'Samedi 10']

  return (
    <DashboardLayout>
      <h1 className="emploi">Emploi du temps</h1>
      <br />

      <div className="tableContainer">
        <h1 className="filiere">{emploiTemps.filiere}</h1>

        <div>
          <table className="tableCours" width="95%">
            <caption>Emploi du temps {emploiTemps.periode}</caption>
            <thead>
              <tr>
                <th width="5%">Horaire</th>
                {jours.map(jour => <th key={jour}>{jour}</th>)}
              </tr>
            </thead>
            <tbody>
              {emploiTemps.matin.map((bloc, index) => (
                <>
                  <tr className="ligneCours" key={`matin-mat-${index}`}>
                    <td rowSpan="3" className="horaire">{bloc.horaire}</td>
                    {bloc.jours.map((cours, i) => (
                      <td key={i} className={`matiere ${cours.modif ? 'coursModif' : ''}`}>
                        {cours.matiere && <p className="heure">{cours.heure}</p>}
                        {cours.matiere && <p>{cours.matiere}</p>}
                      </td>
                    ))}
                  </tr>
                  <tr className="nomProf" key={`matin-prof-${index}`}>
                    {bloc.jours.map((cours, i) => (
                      <td key={i} className={cours.modif ? 'coursModif' : ''}>{cours.prof}</td>
                    ))}
                  </tr>
                  <tr className="salleCours" key={`matin-salle-${index}`}>
                    {bloc.jours.map((cours, i) => (
                      <td key={i}>{cours.salle}</td>
                    ))}
                  </tr>
                  <tr key={`matin-empty-${index}`}>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </>
              ))}

              <tr>
                <td colSpan="7"><br /></td>
              </tr>

              {emploiTemps.apremidi.map((bloc, index) => (
                <>
                  <tr className="ligneCours" key={`apremidi-mat-${index}`}>
                    <td rowSpan="3" className="horaire">{bloc.horaire}</td>
                    {bloc.jours.map((cours, i) => (
                      <td key={i} className="matiere">
                        {cours.matiere && <p className="heure">{cours.heure}</p>}
                        {cours.matiere && <p>{cours.matiere}</p>}
                      </td>
                    ))}
                  </tr>
                  <tr className="nomProf" key={`apremidi-prof-${index}`}>
                    {bloc.jours.map((cours, i) => (
                      <td key={i}>{cours.prof}</td>
                    ))}
                  </tr>
                  <tr className="salleCours" key={`apremidi-salle-${index}`}>
                    {bloc.jours.map((cours, i) => (
                      <td key={i}>{cours.salle}</td>
                    ))}
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>

        <br /><br />

        <div>
          <table className="tableDevoir" width="30%">
            <thead>
              <tr>
                <th>Devoir Prévu</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {emploiTemps.devoirs.map((devoir, i) => (
                <tr key={i}>
                  <td>{devoir.devoir}</td>
                  <td>{devoir.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default EmploiTempsPage