import React from 'react'
import { selectCount } from '../redux/CounterSlice';
import { useAppSelector } from '../redux/hooks';


export const Counter = () => {
    const counter = useAppSelector(selectCount);

    
  return (
    <div className="main__counter">
    {counter}
</div>
  )
}
