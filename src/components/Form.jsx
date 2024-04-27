import React from 'react'
import { Button } from './Button'
import { FormInput } from './FormInput'

export const Form = ({ name, description, level, setName, setDescription, setLevel, addCompetency }) => {
  return (
    <div className='form'>
      <FormInput value={name} change={(e) => setName(e.target.value)} text={'Заголовок'} type={'text'}/>
      <FormInput value={description} change={(e) => setDescription(e.target.value)} text={'Описание'} type={'text'}/>
      <FormInput value={level} change={(e) => setLevel(e.target.value)} text={'Уровень'} type={'number'}/>
      <Button click={() => addCompetency()} text={'Создать'} />
    </div>
  )
}
