import React from "react";
import s from "./Controller.module.css"

const Controller = (props) => {
    return (
        <div className={s.controller}>
            <button className={s.btn}>-</button>
            <div>
                <div>50</div>
                <div>name</div>
            </div>
            <button className={s.btn}>+</button>
        </div>
    )
}

export default Controller;