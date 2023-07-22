import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {

  const [cartIsShow, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCardHandler = () => {
    setCartIsShown(false);
  }

  return (
    <Fragment>
      { cartIsShow && <Cart onClose={hideCardHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
