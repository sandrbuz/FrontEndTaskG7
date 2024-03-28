import React, { useEffect, useState } from "react";
import s from "./Controller.module.css"
import iconTop from "./../icons/iconTop.png"
import iconBottom from "./../icons/iconBottom.png"

const Controller = (props) => {

    const isRed = (props.value > 90 && props.name == "VOLUME");
    const canSwitchBottom = props.index !== 0;
    const canSwitchTop = props.index !== props.state.length - 1;

    return (
        <div className={s.controller}>
            <div className={s.arrowButtons}>
                {canSwitchBottom && <img onClick={() => props.switchUp(props.index)} className={s.iconArr} src={iconTop} alt="iconTop" />}
                {canSwitchTop && <img onClick={() => props.switchDown(props.index)} className={s.iconArr} src={iconBottom} alt="iconBottom" />}
            </div>
            <div className={s.rightController}>
                <button onClick={() => props.handleMinus(props.id)} className={s.btn}>-</button>
                <div className={isRed ? s.red : undefined}>
                    <div>{props.value}</div>
                    <div>{props.name}</div>
                </div>
                <button onClick={() => props.handlePlus(props.id)} className={s.btn}>+</button>
            </div>
        </div>
    )
}

export default Controller;