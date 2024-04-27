import { CompetenciesItem } from "./CompetenciesItem"

export const CompetenciesList = (props) => {
    const comps=['Базовый JavaScript','Базовый Node.js','SQL','React']
    return(
      
    <div className="list">
      <h2>Мои компетенции</h2>
        {
        comps.map(comp=>
          <CompetenciesItem comp={comp}/>
        )
      }
    </div>
    )
}