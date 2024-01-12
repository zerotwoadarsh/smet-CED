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
        <div className='flex flex-row flex-wrap justify-center items-center'>{listItem}</div>
    )

}
export default ListItem;