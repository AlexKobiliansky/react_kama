import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


function Dialogs(props){
    return  (
      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
              <NavLink to="/dialogs/1" className={s.dialog}>Алексей</NavLink>
              <NavLink to="/dialogs/2" className={s.dialog + ' ' + s.active}>Света</NavLink>
              <NavLink to="/dialogs/3" className={s.dialog}>Игорь</NavLink>
              <NavLink to="/dialogs/4" className={s.dialog}>Саша</NavLink>
              <NavLink to="/dialogs/5" className={s.dialog}>Максим</NavLink>
              <NavLink to="/dialogs/6" className={s.dialog}>Дисней</NavLink>
          </div>
          <div className={s.messages}>
              <div className={s.message}>Hi</div>
              <div className={s.message}>How are you?</div>
              <div className={s.message}>mother fucker :)</div>
          </div>
      </div>
    );
}

export default Dialogs;