import './App.css'
import { Card } from './components/Card'
import { CompetenciesList } from './components/CompetenciesList'
import { DesCompetenciesList } from './components/DesCompetenciesList'
import './style.css'


function App() {
  return (
    <div className='conteiner'>
      <Card src='./public/avatarka.jpg' fio="Савенко Олег Сергеевич" />
      <div className='competeniesLists'>
        <CompetenciesList/>
        <DesCompetenciesList/>
      </div>
    </div>
  )
}

export default App
