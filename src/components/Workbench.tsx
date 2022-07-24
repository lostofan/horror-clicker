import React from 'react'
import { useAppSelector } from '../redux/hooks'
import '../style/workbench.scss'
import { KillerButton } from './KillerButton';

export const Workbench = () => {
const killerList = useAppSelector(state => state.counter.items);

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
            />
            )
          }
        </div>
        <div className="workbench__powerups">
          ы
        </div>
    </div>
  )
}
