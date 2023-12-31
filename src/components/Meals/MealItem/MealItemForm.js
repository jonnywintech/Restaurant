import React from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount; // convert string to number

    if (enteredAmount.trim() === 0 || enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber)
  }
    return (
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label='Amount'
          input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
          }}
        />
        <button>+ Add</button>
        {!amountIsValid && <p>Enter valid amount (1-5)</p>}
      </form>
    );
  };

export default MealItemForm;
