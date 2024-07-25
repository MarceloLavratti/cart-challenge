import React, { useState, useEffect } from 'react';

const TableRow = ({ onDetailsChange }) => {

  const [name, setName] = useState('Óculos')
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(240)
  const [totalPrice, setTotalPrice] = useState(price)

  const handleMinusBtn = () => {
    const counterQty = Math.max(quantity - 1, 0)
    const counterPrice = Math.min(counterQty * price)

    setQuantity(counterQty)
    setTotalPrice(counterPrice)

    counterQty <= 0
      ? onDetailsChange({ isEmpty: false })
      : onDetailsChange({ isEmpty: true, subTotal: counterPrice })

  }

  const handlePlusBtn = () => {
    const counterQty = quantity + 1
    const counterPrice = counterQty * price
    setQuantity(counterQty)
    setTotalPrice(counterPrice)
    onDetailsChange({ isEmpty: true, subTotal: counterPrice })
  }

  const handleRemoveBtn = () => {
    toggleVisibility(false)
  }

  return (
    <tr>
      <td>
        <div className='product'>
          <img src='https://picsum.photos/100/120' alt=''/>
          <div className='info'>
            <div className='name'>{name}</div>
            <div className='category'>Categoria</div>
          </div>
        </div>
      </td>
      <td>R$ {price}</td>
      <td>
        <div className='qty'>
          <button onClick={handleMinusBtn}>
            <i className='bx bx-minus'></i>
          </button>
          <span>{quantity}</span>
          <button onClick={handlePlusBtn}>
            <i className='bx bx-plus'></i>
          </button>
        </div>
      </td>
      <td>{totalPrice}</td>
      <td>
        <button className='remove' onClick={handleRemoveBtn}>
          <i className='bx bx-x'></i>
        </button>
      </td>
    </tr >
  );
};

export default TableRow
