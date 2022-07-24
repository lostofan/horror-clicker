import { useEffect } from 'react'
import { addCounter, addKiller } from '../redux/CounterSlice';
import { useAppDispatch } from '../redux/hooks';

interface KillerButtonProps {
    name: string;
    multiplier: number;
    counter: number;
}

export const KillerButton:React.FC<KillerButtonProps> = ({name, multiplier, counter}) => {
    const dispatch = useAppDispatch();

    useEffect( () => {

        return () => {
          setInterval(() => dispatch(
          addCounter({value: multiplier})), 1000
          );
        }
      }, 
      [counter, dispatch, multiplier]
      );

  return (
    <button className="workbench__btn"  
              onClick={() => dispatch(addKiller({name: name}))}>
                <img src={require(`../img/${name + "-weapon"}.png`)} alt="" />
        
            </button>
  )
}
