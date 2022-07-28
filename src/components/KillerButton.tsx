import { addCounter, addKiller, addWeapon, buyItem, drawKiller } from '../redux/CounterSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { KillerButtonProps } from '../types/propTypes';




export const KillerButton:React.FC<KillerButtonProps> = 
({name, multiplier, counter, price, isKiller}) => {
    const dispatch = useAppDispatch();
    const mainCounter = useAppSelector(state => state.counter.value);

    const asyncCounter = (multiplier: number) => {
      setInterval(() => dispatch(
          addCounter({value: multiplier})), 1000
          );
    }

    const buyKiller = (name:string, price: number, multiplier:number, isKiller:boolean) => {
      if (isKiller) {
        dispatch(addKiller({name: name}));
        dispatch(buyItem({value: price}));
        dispatch(drawKiller({name: name}))
        asyncCounter(multiplier);
      } else {
        dispatch(addWeapon({name: name, value: multiplier}));
        dispatch(buyItem({value: price}));
      }
        
    }

  return (
    <button className="workbench__btn" 
            onClick={() => buyKiller(name, price, multiplier, isKiller)}
            disabled={!(mainCounter >= price)}>
              {(isKiller) ? 
              <img src={require(`../img/${name + "btn"}.png`)} alt="" /> :
              <img src={require(`../img/${name}.png`)} alt="" />
            }

                <div className="btn__price">
                {price.toFixed()}
                </div>
                <div className="btn__count">
                {counter}
                </div>
            </button>
  )
}
