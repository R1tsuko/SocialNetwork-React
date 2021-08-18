const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let defaultState = {
    chatsData: [
        { id: 1, name: 'tutu', },
        { id: 2, name: 'dudu', }
    ],
    messagesData: [
        { id: 1, text: 'tu', isMine: true },
        { id: 2, text: 'du', isMine: false },
        { id: 3, text: 'tu', isMine: true },
    ],
    messageText: '',
};

const messagesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 4, text: state.messageText, isMine: true }],
                messageText: ''
            }
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                messageText: action.messageText,
            }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE, });
export const updateMessagesTextCreator = (messageText) => ({ type: UPDATE_MESSAGE_TEXT, messageText });

export default messagesReducer;