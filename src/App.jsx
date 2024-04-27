import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'
import { CompetenciesList } from './components/CompetenciesList'
import './style.css'
import ButtonsList from './components/ButtonsList'

function App() {
  const [visible, setVisible] = useState(true)
  const [filter, setFilter] = useState('')

  return (
    <div className='conteiner'>
      <Card src='./public/avatarka.jpg' fio="Савенко Олег Сергеевич" />
      <div className='competeniesLists'>
        <ButtonsList setVisible={setVisible} setFilter={setFilter} visible={visible}/>
        <CompetenciesList visible={visible} filter={filter} />
      </div>
    </div>
  )
}

export default App
