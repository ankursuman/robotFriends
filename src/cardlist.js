import React from 'react'
import Card from './card'

const Cardlist = ({ robo }) => {
    const cardComponent = robo.map((user, i) => {
        return <Card key={i} id={robo[i].id} name={robo[i].name} email={robo[i].email}/>

    })
    return (
        <div>
            {cardComponent}
      </div>
    );
}

export default Cardlist;