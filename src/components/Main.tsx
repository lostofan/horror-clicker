import React, { useEffect } from 'react'
import { useAppSelector } from '../redux/hooks';

import "../style/main.scss"
import { Counter } from './Counter';
import { Workbench } from './Workbench';

export const Main = () => {
    const counter = useAppSelector(state => state.counter.value)
  
    useEffect(() => {
      document.title = `${counter.toFixed()} clicks`;
    });
    
  return (
    <main className="main">
      <Counter />
      <Workbench />
    </main>
    
  )
}