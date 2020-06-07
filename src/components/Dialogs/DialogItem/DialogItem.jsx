import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


function DialogItem(props) {
    return(
        <NavLink to={"/dialogs/"+props.id} className={s.dialog}>{props.name}</NavLink>
    )
}

export default DialogItem;