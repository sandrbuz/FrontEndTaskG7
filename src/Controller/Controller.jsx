import React, { useEffect, useState } from "react";
import s from "./Controller.module.css"

const Controller = (props) => {
    
    const isRed = (props.value > 90 && props.name=="VOLUME");

    return (
        <div className={s.controller}>
            <button onClick={()=> props.handleMinus(props.id)} className={s.btn}>-</button>
            <div className={isRed ? s.red : undefined}>
                <div>{props.value}</div>
                <div>{props.name}</div>
            </div>
            <button onClick={()=> props.handlePlus(props.id)} className={s.btn}>+</button>
        </div>
    )
}

export default Controller;