import './card-list.styles.css'

import Card from "../card/card.component";
const CardList = ({ monsters }) => (
    <div className='card-list'>
        {monsters.map((monster) => {
            const {name, email, id} = monster
            return (<Card name={name} src={`https://robohash.org/${id}?set=set2`} email={email} id={id}/>)
        })}
    </div>
)

export default CardList;
