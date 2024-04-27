import { DesCompetenciesItem } from "./DesCompetenciesItem"

export const DesCompetenciesList = (props) => {
    const desiredComps =['Git','JavaScript','Redux/MobX','TypeScript','Docker','Работа с async','Работа с DOM', 'Node.js','Kubernetes','Unit-тесты']
    return(
    <div className="list">
      <h2>Желаемые компетенции</h2>
        {
        desiredComps.map(dcomp=>
          <DesCompetenciesItem dcomp={dcomp}/>
        )
      }
    </div>
    )
}