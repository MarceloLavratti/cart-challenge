/*
? DESAFIO - Shopping Cart:

Você deve desenvolver um carrinho de compras funcional.
Funcionalidades que esperamos que você desenvolva:

todo - fazer um placeholder para quando não houver itens no carrinho
todo - inserção de novos produtos no carrinho
todo - remoção de produtos já inseridos
todo - alteração de quantidade de cada item 
todo - cálculo do preço total dos itens inseridos

todo - FUNCIONALIDADE EXTRA: aplicação de cupom de desconto
*/
import './styles.scss';

import PageHeader from './layout/PageHeader';
import PageTitle from './layout/PageTitle';
import Summary from './components/summary/Summary';
import TableRow from './components/tableRow/TableRow';
import { useState, useEffect } from 'react';
import { fetchCart, addItemToCart, removeItemFromCart, updateCartItem } from './services/cartServices';
import { randomNumber } from './utils/randomNumber';

function App() {

  const productObject = {
    name: 'produto',
    price: randomNumber(50, 2000),
    quantity: 1,
    category: 'categoria',
  }

  const [cart, setCart] = useState([])

  const fetchData = () => {
    fetchCart().then((response) => setCart((response.data)))
  }

  const handleAddItem = () => {
    // inserção
    addItemToCart(productObject).then((response) => {
      fetchData()
    })
  }

  const handleRemoveItem = (item) => {
    // remoção
    removeItemFromCart(item.id).then((response) => {
      fetchData()
    })
  }

  const handleUpdateItem = (item, action) => {
    // alteração da quantidade
    let newQuantity = item.quantity
    if (action === 'decrease') {
      if (newQuantity === 1) {
        return
      }
      newQuantity -= 1
    }
    if (action === 'increase') {
      newQuantity += 1
    }
    const newData = { ...item, quantity: newQuantity }
    updateCartItem(item.id, newData).then((response) => {
      fetchData()
    })
  }

  const getTotal = () => {
    let sum = 0
    for (let item of cart) {
      sum += item.price * item.quantity
    }
    return sum
  }

  const cartTotal = getTotal()

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
      <PageHeader />
      <main>
        <PageTitle data={'Seu carrinho'} />
        <div className='content'>
          <section>
            <button onClick={handleAddItem} style={{ padding: '5px 10px', marginBottom: '15px' }}>Add to cart</button>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item =>
                  <TableRow
                    key={item.id}
                    data={item}
                    handleRemoveItem={handleRemoveItem}
                    handleUpdateItem={handleUpdateItem}
                  />
                )}
                {cart.length === 0 &&
                  <tr>
                    <td colSpan='5' style={{ textAlign: 'center' }}>
                      Seu carrinho está vazio
                    </td>
                  </tr>}
              </tbody>
            </table>
          </section>
          <aside>
            <Summary cartTotal={cartTotal} />
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
