import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props){

    let dialogsData = [
        {id: 1, name: "Алексей"},
        {id: 2, name: "Света"},
        {id: 3, name: "Игорь"},
        {id: 4, name: "Саша"},
        {id: 5, name: "Максим"},
        {id: 6, name: "Дисней"},
    ];

    let messages = [
        {id: 1, message: "Hi"},
        {id: 1, message: "How are you?"},
        {id: 1, message: "mother fucker :)"},
    ]

    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = messages.map(m => <Message message={m.message} id={m.id} />)

    return  (
      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
              {dialogsElements}
          </div>
          <div className={s.messages}>
              {messagesElements}
          </div>
      </div>
    );
}

export default Dialogs;