import React, { useEffect } from 'react'
import { addCounter, addSmth } from '../redux/CounterSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export const ControlPanel = () => {
    const dispatch = useAppDispatch();
    const jason = useAppSelector(state => state.counter.items);
    useEffect( () => {

      return () => {
        setInterval(() => dispatch(
        addCounter()), 1000
        );
      }
    }, 
    [jason.jasons, dispatch]
    );
  return (
    <div className="main__control">
           <button className="main__btn" onClick={() => dispatch(addCounter())}>
                Watch movie
            </button> 
            <button onClick={() => dispatch(addSmth({name: "jasons"}))}>
              Add async
            </button>
        </div>
  )
}
