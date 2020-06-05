import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


function DialogItem(props) {
    return(
        <NavLink to={"/dialogs/"+props.id} className={s.dialog}>{props.name}</NavLink>
    )
}

function Message(props) {
    return  (
            <div className={s.message}>{props.message}</div>
        )
}

function Dialogs(props){

    let dialogsData = [
        {id: 1, name: "Алексей"},
        {id: 2, name: "Света"},
        {id: 3, name: "Игорь"},
        {id: 4, name: "Саша"},
        {id: 5, name: "Максим"},
        {id: 6, name: "Дисней"},
    ];

    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 1, message: "How are you?"},
        {id: 1, message: "mother fucker :)"},
    ]


    return  (
      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
              <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
              <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
          </div>
          <div className={s.messages}>
              <Message message={messagesData[0].message} id={messagesData[0].id} />
              <Message message={messagesData[1].message} id={messagesData[1].id} />
              <Message message={messagesData[2].message} id={messagesData[2].id} />
              <Message message={messagesData[2].message} id={messagesData[2].id} />
          </div>
      </div>
    );
}

export default Dialogs;