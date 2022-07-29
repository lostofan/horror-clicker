import React from 'react'
import { bios } from '../redux/bioStore';
import "../style/modal.scss"

interface modalType {
    name: string;
    showModal: boolean;
    price: number;
    counter: number;
}


export const ModalTooltip:React.FC<modalType> = ({name, showModal, price, counter}) => {
  return (
    !(showModal) ? null :(
    <div className="modal__wrapper">
        <div className="modal">
            <img className="modal__img" src={require(`../img/${name}.png`)} alt="" />
            <div className="modal__content">
                <h1 className="modal__article">
                    {name}
                </h1>
                <div className="modal__stats">
                    Price: {price.toFixed()} Count: {counter} 
                </div>
                <p className="modal__info">
                    {bios[name]}
                </p>
            </div>
        </div>
    </div>
    )
  )
}
