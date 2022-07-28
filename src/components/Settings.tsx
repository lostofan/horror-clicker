import React, { useState } from 'react'
import { addCounter, resetGame } from '../redux/CounterSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import "../style/settings.scss";

export const Settings = () => {
    const clickMlt = useAppSelector(state => state.counter.clickMultiplier);
    const dispatch = useAppDispatch();
    const [styleToggle, setStyleToggle] = useState(false)
  return (
    <div className="burger__menu">
      <div className="burger__btn">
        <button onClick={() => (styleToggle) ? setStyleToggle(false) : setStyleToggle(true)}>
          x
        </button>
      </div>
      <div className="burger__wrapper" 
           style={(styleToggle) ? {display: 'flex'} : {display: "none"}}>
        <div className="main__settings">
          <div className="ratiostat">{clickMlt.toFixed(2)}</div>
          <button className="addbtn settings__btn" 
                  onClick={() => dispatch(addCounter({value: 100}))}>
            Add 100
          </button>
          <button className="resetbtn settings__btn" onClick={() => dispatch(resetGame()) }>
            Reset
          </button>
        </div>
      </div>
    </div>
    
  )
}
