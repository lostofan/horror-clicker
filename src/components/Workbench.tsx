import React, { useEffect } from 'react';
import { addCounter } from '../redux/CounterSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import '../style/workbench.scss'
import { KillerButton } from './KillerButton';

export const Workbench = () => {


  const dispatch = useAppDispatch();

const killerList = useAppSelector(state => state.counter.items.killers);
const weaponList = useAppSelector(state => state.counter.items.weapons);
const killerArray = useAppSelector(state => state.counter.killersArray);

const loadedIntervalId = React.useRef<any>();

useEffect(()=> {
  console.log("ETO YA");
  loadedIntervalId.current = setInterval(
      () => dispatch(
        addCounter({value: 0, isAsync: true})), 1000
    );

}, []);

  return (
    <div className="workbench_wrapper">
        <div className="workbench__titles">
        <p className="workbench__article">Killers:</p>
          {Object.entries(killerList).map(
            ([name, params], idx) => 
            <KillerButton 
            name={name}
            key={idx}
            multiplier={params.multiplier}
            counter={params.value}
            price={params.price}
            isKiller={true}
            loadedTimer={loadedIntervalId}
            />
            )
          }
          <p className="workbench__article">Weapons:</p>
          {Object.entries(weaponList).map(
            ([name, params], idx) => 
            <KillerButton 
            name={name}
            key={idx}
            multiplier={params.multiplier}
            counter={params.value}
            price={params.price}
            isKiller={false}
            />
            )
          }
        </div>
        <div className="workbench__powerups">
          <div className="workbench__killers">
            {killerArray.map(
            (elem, idx) => <img key={idx} src={require(`../img/${elem}.png`)} alt="" />
          )}
          </div>
        </div>
    </div>
  )
}
