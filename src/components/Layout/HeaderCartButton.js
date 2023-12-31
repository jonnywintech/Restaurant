import React from 'react';
import { useContext, useEffect} from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = React.useState(false);
  
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  const { items } = cartCtx;

  useEffect(()=>{

    if(items.length === 0){
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return ()=>{
      clearTimeout(timer)
    }
  },[items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes['icon']}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes['badge']}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
