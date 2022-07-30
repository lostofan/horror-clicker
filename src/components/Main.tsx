import React, { useEffect } from 'react'
import { useAppSelector } from '../redux/hooks';

import "../style/main.scss"
import { Counter } from './Counter';
import { MainButton } from './MainButton';
import { Settings } from './Settings';
import { Workbench } from './Workbench';

export const Main = () => {
    const counter = useAppSelector(state => state.counter.value)
  
    useEffect(() => {
      document.title = `${counter.toFixed()} clicks`;
    });
    
  return (
    <main className="main">
      <div className="main__wrapper_sticky">
        <Settings />
        <div className="main__panel">
            <Counter />
            <MainButton/>
        </div>
      </div>
      <Workbench />
    </main>
    
  )
}