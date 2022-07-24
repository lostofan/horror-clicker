import React, { useEffect } from 'react'
import { useAppSelector } from '../redux/hooks';

import "../style/main.scss"
import { ControlPanel } from './ControlPanel';
import { Counter } from './Counter';
import { Workbench } from './Workbench';

export const Main = () => {
    const counter = useAppSelector(state => state.counter.value)
  
    useEffect(() => {
      document.title = `${counter} clicks`;
    });
    
  return (
    <main className="main">
      <Counter />
      <Workbench />
      <ControlPanel />
    </main>
    
  )
}