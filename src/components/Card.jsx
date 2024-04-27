export const Card = (props) => {
    return(
    <div className='card'>
        <img src={props.src} className="avatar" alt="avatar"/>
        <span>
            <span className='fio'>{props.fio}</span>
        </span>
    </div>
    )
}