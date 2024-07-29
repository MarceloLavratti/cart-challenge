import React, { useState, useEffect } from 'react';

const Summary = ({ cartTotal }) => {

  const [isVisible, setIsVisible] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const [total, setTotal] = useState('')
  const coupon = ['123', 50]

  const handleDiscountBtn = () => {
    setIsVisible(false)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleApplyCoupon = () => {
    if (inputValue === coupon[0]) {
      const priceWithCoupon = cartTotal - coupon[1]
      setTotal(priceWithCoupon)
      alert('Cupom aplicado!')
      setInputValue('')
    } else {
      setTotal(cartTotal)
      alert('Cupom inválido!')
    }
  }

  useEffect(() => {
    setTotal(cartTotal)
  }, [cartTotal]);

  return (
    <>
      <div className='box'>
        <header>Resumo da compra</header>
        <div className='info'>
          <div>
            <span>Sub-total</span>
            <span>R$ {total}</span>
          </div>
          <div>
            <span>Frete</span>
            <span>Gratuito</span>
          </div>
          <div>
            {isVisible ? (
              <button onClick={handleDiscountBtn}>
                Adicionar cupom de desconto
                <i className='bx bx-right-arrow-alt'></i>
              </button>
            ) : (
              <div>
                <input
                  type='text'
                  placeholder='Digite seu cupom aqui'
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <button onClick={handleApplyCoupon}>Ok</button>
              </div>
            )}        
          </div>
        </div>
        <footer>
          <span>Total</span>
          <span>R$ {total}</span>
        </footer>
      </div>
      <button>Finalizar Compra</button>
    </>
  );
};

export default Summary;