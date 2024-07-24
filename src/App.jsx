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
import { useState } from 'react';

import PageHeader from './layout/PageHeader';
import PageTitle from './layout/PageTitle';
import Summary from './Summary';
import TableRow from './TableRow';

function App() {

  const [isEmpty, setIsEmpty] = useState(true)
  
  const toggleVisibility = () => {
    setIsEmpty(false)
  }

  return (
    <>
      <PageHeader />
      <main>
        <PageTitle data={'Seu carrinho'} />
        { isEmpty ? (
          <div className='content'>
            <section>
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
                  <TableRow onValueChange={toggleVisibility}/>
                </tbody>
              </table>
            </section>
            <aside>
              <Summary />
            </aside>
          </div>
        ) : (
          <div>
            <h3>Seu carrinho está vazio</h3>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
