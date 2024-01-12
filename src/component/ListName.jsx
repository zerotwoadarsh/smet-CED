import React from 'react'
import Card from './Card'


const ListItem = (props) => {
    const data = props.data
    const listItem = data.map((user) => {
        return (
            <Card
                key={user.name}
                designation={user.designation}
                img={user.img}
                name={user.name}
                post={user.post}
            />
        )
    });
    return (
        <div>{listItem}</div>
    )

}
export default ListItem;