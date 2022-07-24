import { useEffect } from 'react'
import { addCounter, addKiller, buyItem } from '../redux/CounterSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

interface KillerButtonProps {
    name: string;
    multiplier: number;
    counter: number;
    price: number;
}


export const KillerButton:React.FC<KillerButtonProps> = ({name, multiplier, counter, price}) => {
    const dispatch = useAppDispatch();
    const mainCounter = useAppSelector(state => state.counter.value);

    const buyKiller = (name:string, price: number) => {
        dispatch(addKiller({name: name}));
        dispatch(buyItem({value: price}));
    
    }

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
            onClick={() => buyKiller(name, price)}
            disabled={!(mainCounter >= price)}>
                <img src={require(`../img/${name + "-weapon"}.png`)} alt="" />
            </button>
  )
}
