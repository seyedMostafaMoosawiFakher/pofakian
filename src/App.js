import React, { useState } from 'react';
import './App.css';

function App() {

  const initialFripperyState = [
    { id: 1, name: "نوشابه", price: 5000, count: 0 },
    { id: 2, name: "نان", price: 500, count: 0 },
    { id: 3, name: "لوبیا", price: 25000, count: 0 },
    { id: 4, name: "برنج", price: 230000, count: 0 },
    { id: 5, name: "سس قرمز", price: 15000, count: 0 },
  ]
  const [Frippery, setFrippery] = useState(initialFripperyState)
  const [FripperyPrice, setFripperyPrice] = useState(0)

  // const DIVstyle = {
  //   width: '30rem',
  //   color: 'rgb(21,210,134)',
  //   margin: '1em',
  //   padding: '.4em',
  //   fontSize: '1.3rem',
  //   borderRadius: '5px',
  //   border: '2px solid #ccc',
  // }
  const fripPlusHandler = (fripIndex) => {
    const newFrippery = [...Frippery];
    newFrippery[fripIndex] = { ...newFrippery[fripIndex], count: newFrippery[fripIndex].count += 1 }
    setFrippery(newFrippery)
  }

  const fripMinesHandler = (fripIndex) => {
    if (Frippery[fripIndex].count > 0) {
      const newFrippery = [...Frippery];
      newFrippery[fripIndex] = { ...newFrippery[fripIndex], count: newFrippery[fripIndex].count -= 1 }
      setFrippery(newFrippery)
    }
    return
  }

  const FripperyPriceHandler = () => {
    let allPrices = Frippery.map(frip => {
      return frip.price * frip.count
    })
const fripperyPrice = allPrices.reduce((equls ,curr)=> equls=equls+curr)
    setFripperyPrice(fripperyPrice)
  }
  return (
    <div className="App">
      {
        Frippery.map((frip, index) => {
          return (
            <div>
              <div>
                <p>آیدی محصول: <span>{frip.id}</span></p>
                <p>نام محصول: <span>{frip.name}</span></p>
                <p>قیمت محصول: <span>{frip.price}</span></p>
                <button onClick={() => fripPlusHandler(index)}>+</button>
                <p> تعداد: <span>{frip.count}</span></p>
                <button onClick={() => fripMinesHandler(index)}>-</button>
              </div>
              <div>
                {FripperyPrice !== 0 ?
                  <p>قیمت نهایی: {FripperyPrice}</p> :
                  <buttton onClick={FripperyPriceHandler}>محاسبه قیمت کل</buttton>

                }

              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
