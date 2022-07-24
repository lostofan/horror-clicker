import React from 'react'
import { addCounter } from '../redux/CounterSlice';
import { useAppDispatch } from '../redux/hooks';

export const MainButton = () => {
    const dispatch = useAppDispatch();

  return (
    <div className="main__control">
           <button className="main__btn" 
           onClick={
            () => dispatch(addCounter({value: 1}))
            }>
              Kill one
            </button> 
        </div>
  )
}
