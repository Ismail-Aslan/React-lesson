import React from 'react';


export default function Card({item}) {
    return (
        <div className="card">
            <img src={item.img} alt="img" />
            <div className="card-info">
                <h1>{item.name}</h1>
                <h3>{item.nickname}</h3>
                <p>{item.birthday}</p>
                <p>{item.status}</p>
            </div>
        </div>
    )
}
