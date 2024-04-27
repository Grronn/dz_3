import React, { useState } from 'react'
import { Button } from './Button'

export default function ButtonsList({ setVisible, setFilter, visible }) {
  const [activeButton, setActiveButton] = useState(null);
  return (
    <div className='buttons'>
      <Button click={ ()=> {setVisible(vis => !vis); setActiveButton('vis')}} text={visible ? 'Убрать компетенции' : 'Показать компетенции'} isActive={activeButton === 'vis'}/>
      <Button click={ ()=> {setFilter('<50'); setActiveButton('<50')}} text={'Показать level < 50'} isActive={activeButton === '<50'}/>
      <Button click={()=> {setFilter('>50'); setActiveButton('>50')}} text={'Показать level > 50'} isActive={activeButton === '>50'}/>
      <Button click={()=> {setFilter(''); setActiveButton('filt')}} text={'Сбросить фильтры'} isActive={activeButton === 'filt'}/>
    </div>
  )
}
