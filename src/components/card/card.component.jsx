import './card.styles.css'
const Card = (props) =>  {
        return (
            <div className='card-container' key={props.id}>
                <img alt={props.name} src={props.src}/>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        )
}

export default Card;
