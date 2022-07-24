import React from 'react'
import { selectCount } from '../redux/CounterSlice';
import { useAppSelector } from '../redux/hooks';
import { MainButton } from './MainButton';


export const Counter = () => {
    const counter = useAppSelector(selectCount);

    
  return (
    <div className="main__panel">
      <div className="main__counter">
        {counter.toFixed()}
      </div>
      <MainButton />
    </div>
  )
}
