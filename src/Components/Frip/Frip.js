import React from 'react'

const Frip = (props) => {
    return (
        <div>
            <p>آیدی محصول: <span>{props.id}</span></p>
            <p>نام محصول: <span>{props.name}</span></p>
            <p>قیمت محصول: <span>{props.price}</span></p>
            <button onClick={props.fripPlusHandler}>+</button>
            <p> تعداد: <span>{props.count}</span></p>
            <button onClick={props.fripMinesHandler}>-</button>
        </div>
    )
}

export default Frip
