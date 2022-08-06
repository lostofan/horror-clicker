import React from 'react'
import { selectCount } from '../redux/CounterSlice';
import { useAppSelector } from '../redux/hooks';
import { MainButton } from './MainButton';



export const Counter = () => {
    const counter = useAppSelector(selectCount);
    const renderCount = (counter:number) => {
      if (counter < 10000) {
        return counter.toFixed()
      } else if (counter < 1000000) {
        return (+counter / 1000).toFixed() + "K"
      } else if (counter < 1000000000) {
        return (+counter / 1000000).toFixed() + "M"
      }
    }
    
  return (
    <div className="main__panel">
      <div className="main__counter">
        {renderCount(counter)}
      </div>
      <MainButton />
    </div>
  )
}
