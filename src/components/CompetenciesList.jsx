import { useState } from "react";
import { CompetenciesItem } from "./CompetenciesItem"
import { Form } from "./Form";

let comps = [
  {
    key: 1,
    name: 'JavaScript',
    description: 'Описание для JS',
    level: 50
  },
  {
    key: 2,
    name: 'Node.js',
    description: 'Описание для Node.js',
    level: 70
  },
  {
    key: 3,
    name: 'SQL',
    description: 'Описание для SQL',
    level: 30
  },
  {
    key: 4,
    name: 'React',
    description: 'Описание для React',
    level: 15
  }]


export const CompetenciesList = ({ visible, filter }) => {
  let [arrayComps, setArrayComps] = useState(comps)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [level, setLevel] = useState('')
  let [keyInique,setKeyInique]=useState(comps.length+1)

  let arrayCompsFilter=structuredClone(arrayComps)
  if (filter === '<50') {
    arrayCompsFilter = arrayCompsFilter.filter(comp => comp.level < 50);
  }
  else if (filter === '>50') {
    arrayCompsFilter = arrayCompsFilter.filter(comp => comp.level >= 50);
  }

  const deleteCompetency = (id) => {
    setArrayComps(arrayComps.filter((comp) => comp.key !== id));
  };

  const addCompetency = () => {
    const newArray = [...arrayComps, {
      key: keyInique,
      name: name,
      description: description,
      level: level
    }]

    if (newArray.every(item => {
      return Object.values(item).every(value => {
        return value !== null && value !== undefined && value !== '';
      });
    })) {
      setArrayComps(newArray);
      setName('');
      setDescription('');
      setLevel('');
      setKeyInique(keyInique+1)
    }
    else {
      alert('Заполнте все поля')
    }
  }
  
  return (
    <div className="formAndList">

      <Form
        name={name}
        description={description}
        level={level}
        setName={setName}
        setDescription={setDescription}
        setLevel={setLevel}
        addCompetency={addCompetency} />

      <div className="list">

        {visible && (
          <>
            <span className="textField">Мои компетенции</span>
            {arrayCompsFilter.sort((a, b) => b.level - a.level).map(comp => (
              <CompetenciesItem
                key={comp.key}
                name={comp.name}
                description={comp.description}
                level={comp.level}
                id={comp.key}
                onDelete={deleteCompetency}
              />
            ))}
          </>
        )}

      </div>
    </div>
  )
}