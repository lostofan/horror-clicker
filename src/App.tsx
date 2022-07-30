import React, { useEffect } from 'react';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { addCounter, loadGame } from './redux/CounterSlice';
import { KillerStatus } from './types/stateTypes';


function App() {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.counter.items.killers);
  const loaded = useAppSelector(state => state.counter.loaded);
  
  useEffect(() => { 
    dispatch(loadGame());
  },[dispatch]);

  useEffect(()=> {
    
    for (let key in data) {
      for (let x = 0; x < data[key].value; x++) {

        if(data[key].status === KillerStatus.UnWorking) {
        setInterval(
            () => dispatch(
            addCounter({value: data[key].multiplier, killerName: key})), 1000
          );
            }
      }
    }
    
  }, [data, dispatch, loaded]);

  return (
  <div className="app_wrapper">
    <Header />
    <Main />
  </div>
  );
}

export default App;
