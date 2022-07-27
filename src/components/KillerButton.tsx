import { addCounter, addKiller, buyItem, drawKiller } from '../redux/CounterSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

interface KillerButtonProps {
    name: string;
    multiplier: number;
    counter: number;
    price: number;
}


export const KillerButton:React.FC<KillerButtonProps> = 
({name, multiplier, counter, price}) => {
    const dispatch = useAppDispatch();
    const mainCounter = useAppSelector(state => state.counter.value);

    const asyncCounter = (multiplier: number) => {
      setInterval(() => dispatch(
          addCounter({value: multiplier})), 1000
          );
    }

    const buyKiller = (name:string, price: number, multiplier:number) => {
        dispatch(addKiller({name: name}));
        dispatch(buyItem({value: price}));
        dispatch(drawKiller({name: name}))
        asyncCounter(multiplier);
    }

  return (
    <button className="workbench__btn" 
            onClick={() => buyKiller(name, price, multiplier)}
            disabled={!(mainCounter >= price)}>
                <img src={require(`../img/${name + "btn"}.png`)} alt="" />
                <div className="btn__price">
                {price.toFixed()}
                </div>
                <div className="btn__count">
                {counter}
                </div>
            </button>
  )
}
