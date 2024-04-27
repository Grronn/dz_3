export const CompetenciesItem = ({name, description, level, id, onDelete}) => {
    return (
      <div className="item">
        <span className="itemText">Заголовок: {name}</span>
        <span className="itemText">Описание: {description}</span>
        <span className="itemText">Уровень: {level}%</span>
        <button style={{width:'50%'}}onClick={() => onDelete(id)}>Удалить</button>
      </div>
    );
  };