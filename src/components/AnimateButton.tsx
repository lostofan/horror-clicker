import React from 'react'
import { useAppSelector } from '../redux/hooks';
import "../style/animation.scss"

export const AnimateButton = () => {
    const arr = useAppSelector(state => state.counter.animArray);
  return (
    <>
    {arr.map( ({id, coords:{x,y}}) => 
              <div key={id}>
                 <div className="blood_anim drop1" style={{left: x, top: y}}></div>
                 <div className="blood_anim drop2" style={{left: x, top: y}}></div>
                 <div className="blood_anim drop3" style={{left: x, top: y}}></div>
                 <div className="blood_anim drop4" style={{left: x, top: y}}></div>
                 <div className="blood_anim drop5" style={{left: x, top: y}}></div>
                 <div className="blood_anim drop6" style={{left: x, top: y}}></div>
                 <div className="blood_anim drop7" style={{left: x, top: y}}></div>
                 <div className="blood_anim drop8" style={{left: x, top: y}}></div>
                 <div className="blood_anim drop9" style={{left: x, top: y}}></div>
                 <div className="blood_anim drop10" style={{left: x, top: y}}></div>
                 <div className="blood_anim drop11" style={{left: x, top: y}}></div>
                 <div className="blood_anim drop12" style={{left: x, top: y}}></div>
                 <div className="blood_anim drop13" style={{left: x, top: y}}></div>
                 <div className="blood_anim drop14" style={{left: x, top: y}}></div>
                 <div className="blood_anim drop15" style={{left: x, top: y}}></div>
                 <div className="blood_anim drop16" style={{left: x, top: y}}></div>
                 <div className="blood_anim drop17" style={{left: x, top: y}}></div>
                 <div className="blood_anim drop18" style={{left: x, top: y}}></div>
                 <div className="blood_anim drop19" style={{left: x, top: y}}></div>
                 <div className="blood_anim drop20" style={{left: x, top: y}}></div>
              </div>
              )}
    </>
  )
}
