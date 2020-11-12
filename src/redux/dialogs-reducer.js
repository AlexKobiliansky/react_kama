const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "mother fucker :)"},
    ],
    dialogs: [
        {id: 1, name: "Алексей"},
        {id: 2, name: "Света"},
        {id: 3, name: "Игорь"},
        {id: 4, name: "Саша"},
        {id: 5, name: "Максим"},
        {id: 6, name: "Дисней"},
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            };
        default: return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;