import React, { useEffect } from 'react';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { useAppDispatch } from './redux/hooks';
import { loadGame } from './redux/CounterSlice';


function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("Loaded...");
    dispatch(loadGame());
  }, [dispatch]
  )
  return (
  <div className="app_wrapper">
    <Header />
    <Main />
  </div>
  );
}

export default App;
