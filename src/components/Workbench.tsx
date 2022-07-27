import React from 'react'
import { useAppSelector } from '../redux/hooks'
import '../style/workbench.scss'
import { KillerButton } from './KillerButton';

export const Workbench = () => {
const killerList = useAppSelector(state => state.counter.items.killers);
const killerArray = useAppSelector(state => state.counter.killersArray);

  return (
    <div className="workbench_wrapper">
        <div className="workbench__titles">
          {Object.entries(killerList).map(
            ([name, params], idx) => 
            <KillerButton 
            name={name}
            key={idx}
            multiplier={params.multiplier}
            counter={params.value}
            price={params.price}
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
