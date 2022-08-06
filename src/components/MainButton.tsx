import React from 'react'
import { addCounter, drawBlood } from '../redux/CounterSlice';
import { useAppDispatch } from '../redux/hooks';
import { AnimateButton } from './AnimateButton';

export const MainButton = () => {
    const dispatch = useAppDispatch();
    

    const btnClick = (ev:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      dispatch(addCounter({value: 1, isAsync: false}));
      const clickPosition = ev.currentTarget.getBoundingClientRect();
      dispatch(drawBlood({
        x: ev.clientX - clickPosition.left,
        y: ev.clientY - clickPosition.top
      }));
    }

  return (
  <>
           <button className="main__btn" 
           onClick={
            (ev) => btnClick(ev)
            }>
              Hunt
              <AnimateButton />
            </button> 
            
  </>
  )
}
