import React, { useState, useEffect } from 'react';
import './summary.css'
import { formattedPriceBRL } from '../../utils/priceFormatter';

const Summary = ({ cartTotal }) => {

  const [isVisible, setIsVisible] = useState(true)
  const [isValidCoupon, setIsValidCoupon] = useState(false)
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
      const priceWithCoupon = Math.max(cartTotal - coupon[1], 0)
      setTotal(priceWithCoupon)
      setIsValidCoupon(true)
      alert('Cupom aplicado!')
      setInputValue('')
    } else {
      setTotal(cartTotal)
      setIsValidCoupon(false)
      alert('Cupom inválido!')
    }
  }

  useEffect(() => {
    setTotal(cartTotal),
      setIsValidCoupon(false)
  }, [cartTotal]);

  return (
    <>
      <div className='box'>
        <header>Resumo da compra</header>
        <div className='info'>
          <div>
            <span>Sub-total</span>
            <span>{formattedPriceBRL(cartTotal)}</span>
          </div>
          <div>
            <span>Frete</span>
            <span>Gratuito</span>
          </div>
          <div>
            <span>Desconto</span>
            {isValidCoupon &&
              <span style={{color: '#28a745'}}>-{formattedPriceBRL(coupon[1])}</span>
            }
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
                  className='input-cpn'
                />
                <button onClick={handleApplyCoupon} id='ok-btn'>Ok</button>
              </div>
            )}
          </div>
        </div>
        <footer>
          <span>Total</span>
          <span>{formattedPriceBRL(total)}</span>
        </footer>
      </div>
      <button>Finalizar Compra</button>
    </>
  );
};

export default Summary;
