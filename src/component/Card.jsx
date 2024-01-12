import React from 'react';

export const Card = (props) => {
    return (
        <div className='flex flex-col'>
            <div>{props.designation}</div>
            <div>
                <img src={props.img} alt={props.name} />
            </div>
            <div>{props.name}</div>
            <div>{props.post}</div>
        </div>
    );
};

export default Card;