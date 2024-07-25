import React, { useState, useEffect } from 'react';

const Summary = ({ productDetails }) => {

  const [isVisible, setIsVisible] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [isInvalidCoupon, setIsInvalidCoupon] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [total, setTotal] = useState('')
  const discountCoupon = ['123', 20]  
  
  

  const handleDiscountBtn = () => {

    setIsVisible(true)
  }

  const handleCouponInput = (e) => {
    
    setInputValue(e.target.value)
  }

  const handleApplyCouponBtn = () => {

    if (inputValue === discountCoupon[0]) {
      const priceWithCoupon = Math.max(productDetails.subTotal - discountCoupon[1])
      setIsValid(true)
      setTotal(priceWithCoupon)
    } else {
      setIsValid(false)
      setIsInvalidCoupon(true)
      setTotal(productDetails.subTotal)
    }    
  }

  useEffect(() => {
    setTotal(productDetails.subTotal)
  }, [productDetails.subTotal]);

  return (
    <>
      <div className='box'>
        <header>Resumo da compra</header>
        <div className='info'>
          <div>
            <span>Sub-total</span>
            <span>R$ {productDetails.subTotal}</span>
          </div>
          <div>
            <span>Frete</span>
            <span>Gratuito</span>
          </div>
          <div>

            {isVisible ? (
              <div>
                <input
                  placeholder='Insira seu cupom'
                  value={inputValue}
                  onChange={handleCouponInput}
                />
                <button onClick={handleApplyCouponBtn}>Ok</button>
                {isValid ? (
                  <span>Cupom validado!</span>
                ) : isInvalidCoupon ? (
                  <span>Cupom inválido!</span>
                ) : (
                  <span></span>
                )}
              </div>
            ) : (
              <button onClick={handleDiscountBtn}>
                Adicionar cupom de desconto
                <i className='bx bx-right-arrow-alt'></i>
              </button>
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
