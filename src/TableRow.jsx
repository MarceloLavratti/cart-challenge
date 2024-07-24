import React, { useState } from 'react';

const TableRow = ({ onValueChange }) => {

  const [quantity, setQuantity] = useState(1)
  const [isEmpty, setIsEmpty] = useState(true)

  const handleMinusBtn = () => {
    let counter = Math.max(quantity - 1, 0)
    setQuantity(counter)

    if(counter <= 0){
      setIsEmpty(true)
      onValueChange(false)
    }    
  }

  const handlePlusBtn = () => {
    let counter = quantity + 1
    setQuantity(counter)
  }

  const handleRemoveBtn = () => {
    onValueChange(false)
  }

  const handlePrice = () => {

  }

  return (
    <tr>
      <td>
        <div className='product'>
          <img src='https://picsum.photos/100/120' alt='' />
          <div className='info'>
            <div className='name'>Nome do produto</div>
            <div className='category'>Categoria</div>
          </div>
        </div>
      </td>
      <td>R$ 120</td>
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
      <td>R$ 240</td>
      <td>
        <button className='remove' onClick={handleRemoveBtn}>
          <i className='bx bx-x'></i>
        </button>
      </td>
    </tr >
  );
};

export default TableRow
